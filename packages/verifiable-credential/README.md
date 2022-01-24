# VerifiableCredential DataModel

DataModel implementation of the **VerifiableCredential** schema and definition.

## Installation

```sh
npm install -D @datamodels/verifiable-credential
```

## Rationale

A [VerifiableCredential] is fact-checking review/attestation of claims made (or reported) in a [ClaimedCredential]. This tries to follow the [W3C VC datamodel](https://www.w3.org/TR/vc-data-model), but adds alternative solidity compliant syntax for some conflicting property names.

## Schemas

### [VerifiableCredential](./schemas/ClaimedCredential.json)

The VerifiableCredential schema defines the format of a document that contains the properties listed below. Properties not defined in the schema _cannot_ be included in the VerifiableCredential.

| Property          | Description                                                 | Value                                         | Max Size | Required | Example                                                   |
| ----------------- | ----------------------------------------------------------- | --------------------------------------------- | -------- | -------- | --------------------------------------------------------- |
| @context          | See https://www.w3.org/TR/vc-data-model/#contexts           | array of string                               |          | false    |                                                           |
| \_context         | Provided for solidity syntax compatibility                  | comma separated string                        |          | false    |                                                           |
| type              | See https://www.w3.org/TR/vc-data-model/#types              | array of string                               |          | false    |                                                           |
| \_type            | Provided for solidity syntax compatibility                  | comma separated string                        |          | false    |                                                           |
| id                | See https://www.w3.org/TR/vc-data-model/#identifiers        | ceramic:// link to a Claim tile               |          | true     | URL of the ClaimedCredential tile                         |
| issuer            | See https://www.w3.org/TR/vc-data-model/#issuer             | object with required property "id"            |          | true     |                                                           |
| credentialSubject | See https://www.w3.org/TR/vc-data-model/#credential-subject | credentialSubject with required property "id" |          | true     | object including the contents of a ClaimedCredential tile |
| credentialSchema  | See https://www.w3.org/TR/vc-data-model/#data-schemas       | credentialSchema with required property "id"  |          | true     |                                                           |
| issuanceDate      | See https://www.w3.org/TR/vc-data-model/#issuance-date      | ISO Date string                               |          | true     |                                                           |
| expirationDate    | See https://www.w3.org/TR/vc-data-model/#expiration         | ISO Date string                               |          | false    |                                                           |
| proof             | See https://www.w3.org/TR/vc-data-model/#proofs-signatures  | object                                        |          | false    |                                                           |
| evidence          | See https://www.w3.org/TR/vc-data-model/#evidence           | object                                        |          | false    |                                                           |

## License

Dual licensed under MIT and Apache 2
