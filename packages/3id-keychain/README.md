# 3ID Keychain DataModel

DataModel implementation of the **3ID Keychain** schema and definition specified in [CIP-20](https://github.com/ceramicnetwork/CIP/blob/main/CIPs/CIP-20/CIP-20.md).

## Installation

```sh
npm install -D @datamodels/3id-keychain
```

## Rationale

**3ID Keychain** uses public-key cryptography to store a series of encrypted seeds that can be used to control a 3ID DID. This allows multiple different wallets to have the ability to authenticate to the same DID, by having control over just one of the _auth secrets_ in the keychain.

The 3ID Keychain stores data which allows the DID to be authenticated using any number of external wallet keys. As a result, this document allows the DID, and by extension its associated resources, to be controllable and accessible using many different wallet key pairs. Each key pair added to the document is considered an equal owner, and has the ability to add or remove any other key pairs found in the document by performing a key rotation in the users 3ID document.

Adding a new key pair to the 3ID Keychain does not disclose a public link between that account and the DID, which serves the purpose of providing privacy to the user. If you would like to create a public link between a DID and a given cryptographic account, it would need to be achieved by additionally adding that account to a [Crypto Account Links (CIP-21)](https://github.com/ceramicnetwork/CIP/edit/main/CIPs/CIP-21/CIP-21.md) document.

A few reasons why having a multi-key, cross-chain, technology-agnostic keychain is beneficial for DIDs:

- Simplified, seamless user experience across platforms
- Interoperability of resources across contexts that may rely on different keys or key types
- Integration with existing wallets already possessed by a user
- Integration with and interoperability across many different blockchain networks, web3 technologies, and wallet providers
- Delegate the DID "key management problem" to wallet providers
- Resilience against DID loss, since a user could only lose control of a DID if they simultaneously lose control of all auth keys at the same time

## Schemas

### [ThreeIdKeychain](./schemas/ThreeIdKeychain.json)

## [Discussion](https://github.com/ceramicstudio/datamodels/discussions/5)

## License

Dual licensed under MIT and Apache 2
