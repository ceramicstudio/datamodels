const { readdir } = require('fs/promises')
const { join } = require('path')
const { DID } = require('dids')
const CeramicEnvironment = require('jest-environment-ceramic')
const { getResolver } = require('key-did-resolver')

const packagesPath = join(__dirname, 'packages')

module.exports = class Environment extends CeramicEnvironment {
  async setup() {
    const [packages] = await Promise.all([readdir(packagesPath), super.setup()])
    this.global.ceramic.did = new DID({ resolver: getResolver() })
    this.global.packages = Object.fromEntries(packages.map((pkg) => [pkg, join(packagesPath, pkg)]))
  }
}
