/**
 * @jest-environment ./jest-environment
 */
import type { CeramicApi } from '@ceramicnetwork/common'
import { publishEncodedModel } from '@glazed/devtools'

declare global {
  var ceramic: CeramicApi
  var packages: Record<string, string>
}

const publishedModel = expect.objectContaining({
  definitions: expect.any(Object),
  schemas: expect.any(Object),
  tiles: expect.any(Object),
})

jest.setTimeout(15000)

for (const [name, path] of Object.entries(packages)) {
  test.concurrent(name, async () => {
    const { model } = await import(path)
    await expect(publishEncodedModel(ceramic, model)).resolves.toEqual(publishedModel)
  })
}
