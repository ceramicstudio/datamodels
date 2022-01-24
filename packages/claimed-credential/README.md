# ClaimedCredential DataModel

DataModel implementation of the **ClaimedCredential** schema and definition.

## Installation

```sh
npm install -D @datamodels/claimed-credential
```

## Rationale

A [ClaimedCredential] represents a specific, factually-oriented claim that could be used as the Id and CredentialSubject of a [VerifiableCredential].

## Schemas

### [ClaimedCredential](./schemas/ClaimedCredential.json)

The ClaimedCredential schema defines the format of a document that contains the properties listed below. Properties not defined in the schema _cannot_ be included in the ClaimedCredential.

| Property              | Description                                                       | Value                                                   | Max Size | Required | Example |
| --------------------- | ----------------------------------------------------------------- | ------------------------------------------------------- | -------- | -------- | ------- |
| did                   | DID that makes the claim                                          | string                                                  |          | true     |         |
| type                  | Claim type / Alias of claim type                                  | string                                                  |          | true     |         |
| typeSchema            | Claim type schema                                                 | ceramic:// link                                         |          | false    |         |
| value                 | JSON string of the claim value                                    | object                                                  |          | false    |         |
| encrypted             | JWE encrypted claim value                                         | JWE object                                              |          | true     |         |
| verifiableCredentials | List of attestations received for this claim by different issuers | array of ceramic:// links to VerifiableCredential tiles |          | false    |         |

## License

Dual licensed under MIT and Apache 2
