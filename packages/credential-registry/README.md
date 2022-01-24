# CredentialRegistry DataModel

DataModel implementation of the **CredentialRegistry** schema and definition.

## Installation

```sh
npm install -D @datamodels/credential-registry
```

## Rationale

The [CredentialRegistry] holds the list of claimed [ClaimedCredentials] and the [VerifiableCredentials] issued by the user",

## Schemas

### [CredentialRegistry](./schemas/CredentialRegistry.json)

The CredentialRegistry schema defines the format of a document that contains the properties listed below. Properties not defined in the schema _cannot_ be included in the CredentialRegistry.

| Property | Description                             | Value                                                    | Max Size | Required | Example |
| -------- | --------------------------------------- | -------------------------------------------------------- | -------- | -------- | ------- |
| claimed  | List of claims made by this DID         | array of ceramic:// links to ClaimedCredentials tiles    |          | false    |         |
| issued   | List of attestations issued by this DID | array of ceramic:// links to VerifiableCredentials tiles |          | false    |         |

## License

Dual licensed under MIT and Apache 2
