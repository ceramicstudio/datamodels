# Crypto Accounts DataModel

DataModel implementation of the **Crypto Accounts** schema and definition specified in [CIP-21](https://github.com/ceramicnetwork/CIP/blob/main/CIPs/CIP-21/CIP-21.md).

## Installation

```sh
npm install -D @datamodels/identity-accounts-crypto
```

## Rationale

Users may want to publicly associate any number of cryptographic key pairs or accounts, such as Ethereum accounts, Flow accounts, smart contracts, etc. to their DID. Creating and storing public links to these various accounts in the Crypto Accounts _record_ document enables anyone to observe these associations and as a result resolve a DID and its resources by looking up a specific crypto account or vice versa.

Adding an account to the Crypto Accounts document _does not_ allow that account to control or authenticate the DID. Rather it is simply just a verifiable public mapping.

Publicly associating one or more public key pairs, accounts, or contracts to a DID offers a number of benefits.

- Public, two-way resolution between a DID and any number of accounts
- Users and developers can utilize DID-based resources (i.e. profiles, data, connections, etc.) in the context of any blockchain or other Web3 app
- Provides a better user experience for users in a multi-key, multi-chain world by eliminating the need to redundantly create new DIDs and resources for each new key and network
- Provides interoperability of DIDs and resources across applications, networks, and wallets where users have different keys
- Serves as a foundation for building aggregated reputation on an identity comprised of multiple accounts, not individual one-off accounts
- Provides a common interface for creating a list of linked crypto accounts, making discoverability and query predictable

## Schemas

### [CryptoAccounts](./schemas/CryptoAccounts.json)

## [Discussion](https://github.com/ceramicstudio/datamodels/discussions/8)

## License

Dual licensed under MIT and Apache 2
