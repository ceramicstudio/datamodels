# Web Accounts DataModel

DataModel implementation of the **Also Known As** schema and definition specified in [CIP-23](https://github.com/ceramicnetwork/CIP/blob/main/CIPs/CIP-23/CIP-23.md).

## Installation

```sh
npm install -D @datamodels/identity-accounts-web
```

## Rationale

Users may want to publicly associate any number of social accounts, such as Twitter, GitHub, discord, etc. to their DID. Creating and storing public verifications for these various accounts in the Also Known As _record_ document enables anyone to observe these associations and as a result infer trust about the given user.

Adding an account to the Also Known As document _does not_ allow that account to control or authenticate the DID. Rather it is simply just a verifiable public mapping.

Publicly associating one or more accounts to a DID offers a number of benefits.

- Public association with a DID to any number of accounts
- Serves as a foundation for building aggregated reputation on an identity comprised of multiple accounts, not individual one-off accounts
- Provides a common interface for creating a list of linked social accounts, making discoverability and query predictable

## Schemas

### [AlsoKnownAs](./schemas/AlsoKnownAs.json)

## [Discussion](https://github.com/ceramicstudio/datamodels/discussions/6)

## License

Dual licensed under MIT and Apache 2
