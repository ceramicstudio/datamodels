import { readdir } from 'node:fs/promises'
import { DID } from 'dids'
import CeramicEnvironment from 'jest-environment-ceramic'
import { getResolver } from 'key-did-resolver'

function getURL(folder) {
  return new URL(folder, import.meta.url)
}

export default class Environment extends CeramicEnvironment {
  async setup() {
    const [packages] = await Promise.all([readdir(getURL('packages')), super.setup()])
    this.global.ceramic.did = new DID({ resolver: getResolver() })
    this.global.packages = Object.fromEntries(
      packages.map((pkg) => [pkg, getURL(`packages/${pkg}`).href])
    )
  }
}
