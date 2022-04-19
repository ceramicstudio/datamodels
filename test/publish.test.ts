/**
 * @jest-environment ./jest-environment
 */
import { constants } from 'node:fs'
import { access, readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import type { CeramicApi } from '@ceramicnetwork/common'
import { deployEncodedModel, isSecureSchema } from '@glazed/devtools'
import type { ModelAliases } from '@glazed/types'
import { jest } from '@jest/globals'
import type { JSONSchemaType } from 'ajv'

declare global {
  var ceramic: CeramicApi
  var packages: Record<string, string>
}

const expectedModelAliases = expect.objectContaining({
  definitions: expect.any(Object),
  schemas: expect.any(Object),
  tiles: expect.any(Object),
})

jest.setTimeout(15000)

async function deployModel(path: string): Promise<ModelAliases> {
  const { model } = await import(path)
  return await deployEncodedModel(ceramic, model)
}

async function readSchema(path: string): Promise<unknown> {
  const buffer = await readFile(path)
  return JSON.parse(buffer.toString())
}

async function readSchemas(prefix: string, paths: Array<string>): Promise<Record<string, unknown>> {
  const schemas = await Promise.all(paths.map(async (path) => await readSchema(join(prefix, path))))
  return paths.reduce((acc, path, i) => {
    const name = path.slice(0, -5) // remove ".json" extension
    acc[name] = schemas[i]
    return acc
  }, {} as Record<string, unknown>)
}

async function readPackageSchemas(path: string): Promise<Record<string, unknown> | null> {
  const schemasPath = join(path, 'schemas')
  try {
    await access(schemasPath, constants.R_OK)
  } catch (err) {
    return null
  }
  const schemaFiles = await readdir(schemasPath)
  return await readSchemas(
    schemasPath,
    schemaFiles.filter((path) => path.endsWith('.json'))
  )
}

async function loadDeployedSchemas(
  schemas: Record<string, string>
): Promise<Record<string, unknown>> {
  const loaded: Record<string, unknown> = {}
  await Promise.all(
    Object.entries(schemas).map(async ([alias, id]) => {
      const stream = await ceramic.loadStream(id)
      loaded[alias] = stream.content
    })
  )
  return loaded
}

for (const [packageName, path] of Object.entries(packages)) {
  test.concurrent(packageName, async () => {
    const [aliases, schemas] = await Promise.all([deployModel(path), readPackageSchemas(path)])

    // Deployed model aliases matches expected shape
    expect(aliases).toEqual(expectedModelAliases)
    // Deployed model is not empty (at least one schema)
    expect(Object.keys(aliases.schemas)).not.toHaveLength(0)

    // Ensure schemas defined in package match the deployed ones
    if (schemas != null) {
      const loaded = await loadDeployedSchemas(aliases.schemas)
      for (const [alias, schema] of Object.entries(schemas)) {
        expect(loaded[alias]).toEqual(schema)
        // Exclude BasicProfile as schema is incorrect
        if (alias !== 'BasicProfile') {
          // Ensure schema is secure
          expect(isSecureSchema(schema as JSONSchemaType<any>)).toBe(true)
        }
      }
    }
  })
}
