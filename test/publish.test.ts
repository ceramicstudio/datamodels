/**
 * @jest-environment ./jest-environment
 */
import { constants } from 'node:fs'
import { access, readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import type { CeramicApi } from '@ceramicnetwork/common'
import { publishEncodedModel } from '@glazed/devtools'
import type { PublishedModel } from '@glazed/types'
import { jest } from '@jest/globals'

declare global {
  var ceramic: CeramicApi
  var packages: Record<string, string>
}

const expectedPublishedModel = expect.objectContaining({
  definitions: expect.any(Object),
  schemas: expect.any(Object),
  tiles: expect.any(Object),
})

jest.setTimeout(15000)

async function publishModel(path: string): Promise<PublishedModel> {
  const { model } = await import(path)
  return await publishEncodedModel(ceramic, model)
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

async function loadPublishedSchemas(
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

for (const [name, path] of Object.entries(packages)) {
  test.concurrent(name, async () => {
    const [published, schemas] = await Promise.all([publishModel(path), readPackageSchemas(path)])

    // Published model matches expected shape
    expect(published).toEqual(expectedPublishedModel)
    // Published model is not empty (at least one schema)
    expect(Object.keys(published.schemas)).not.toHaveLength(0)

    // Ensure schemas defined in package match the published ones
    if (schemas != null) {
      const loaded = await loadPublishedSchemas(published.schemas)
      for (const [name, schema] of Object.entries(schemas)) {
        expect(loaded[name]).toEqual(schema)
      }
    }
  })
}
