# VerifiableCredentials DataModel

DataModel implementation of the **VerifiableCredentials** schemas and definition.

## Installation

```sh
npm install -D @datamodels/verifiable-credentials
```

## Rationale

A VerifiableCredential is fact-checking review/attestation of claims made about a credentialsubject, following the [W3C VC datamodel](https://www.w3.org/TR/vc-data-model).

The VerifiableCredentials data-model provides 3 definitions for the users's DID-datastore:

- claimedCredentials - [ClaimedCredentials](./schemas/ClaimedCredentials.json) : self-issued by the user.
- issuedCredentials - [IssuedCredentials](./schemas/IssuedCredentials.json) : issued to other users.
- heldCredentials - [HeldCredentials](./schemas/HeldCredentials.json) : received from issuers.

Each of these definitions has an array of [VerifiableCredential](./schemas/VerifiableCredential.json) stream IDs.

## Schemas

### [ClaimedCredentials](./schemas/ClaimedCredentials.json)

The ClaimedCredentials schema defines the format of a document that contains the properties listed below. Properties not defined in the schema _cannot_ be included in the ClaimedCredentials.

| Property | Description                                           | Value                                                      | Max Size | Required | Example |
| -------- | ----------------------------------------------------- | ---------------------------------------------------------- | -------- | -------- | ------- |
| claimed  | List of VerifiableCredentials self-issued by this DID | array of ceramic:// links to VerifiableCredentials streams |          | false    |         |

### [IssuedCredentials](./schemas/IssuedCredentials.json)

The IssuedCredentials schema defines the format of a document that contains the properties listed below. Properties not defined in the schema _cannot_ be included in the IssuedCredentials.

| Property | Description                                                     | Value                                                      | Max Size | Required | Example |
| -------- | --------------------------------------------------------------- | ---------------------------------------------------------- | -------- | -------- | ------- |
| issued   | List of VerifiableCredentials issued by this DID to other users | array of ceramic:// links to VerifiableCredentials streams |          | false    |         |

### [HeldCredentials](./schemas/HeldCredentials.json)

The HeldCredentials schema defines the format of a document that contains the properties listed below. Properties not defined in the schema _cannot_ be included in the IssuedCredentials.

| Property | Description                                                 | Value                                                      | Max Size | Required | Example |
| -------- | ----------------------------------------------------------- | ---------------------------------------------------------- | -------- | -------- | ------- |
| held     | List of VerifiableCredentials received/issued by other DIDs | array of ceramic:// links to VerifiableCredentials streams |          | false    |         |

### [VerifiableCredential](./schemas/VerifiableCredential.json)

The VerifiableCredential schema defines the format of a document that contains the properties listed below. Properties not defined in the schema _cannot_ be included in the VerifiableCredential.

| Property          | Description                                                 | Value                                                     | Max Size | Required | Example |
| ----------------- | ----------------------------------------------------------- | --------------------------------------------------------- | -------- | -------- | ------- |
| @context          | See https://www.w3.org/TR/vc-data-model/#contexts           | array of string                                           |          | true     |         |
| type              | See https://www.w3.org/TR/vc-data-model/#types              | array of string                                           |          | true     |         |
| id                | See https://www.w3.org/TR/vc-data-model/#identifiers        | url                                                       |          | true     |         |
| issuer            | See https://www.w3.org/TR/vc-data-model/#issuer             | object with required property "id"                        |          | true     |         |
| credentialSubject | See https://www.w3.org/TR/vc-data-model/#credential-subject | credentialSubject with required property "id"             |          | true     |         |
| credentialSchema  | See https://www.w3.org/TR/vc-data-model/#data-schemas       | credentialSchema with required properties "id" and "type" |          | true     |         |
| issuanceDate      | See https://www.w3.org/TR/vc-data-model/#issuance-date      | ISO Date string                                           |          | true     |         |
| expirationDate    | See https://www.w3.org/TR/vc-data-model/#expiration         | ISO Date string                                           |          | false    |         |
| proof             | See https://www.w3.org/TR/vc-data-model/#proofs-signatures  | object with required property "type"                      |          | false    |         |
| evidence          | See https://www.w3.org/TR/vc-data-model/#evidence           | object with required property "id"                        |          | false    |         |
| credentialStatus  | See https://www.w3.org/TR/vc-data-model/#status             | object with required property "id"                        |          | false    |         |

Streams created using this schema can then be linked to a DID's issued credentials on the definitions above.

## License

Dual licensed under MIT and Apache 2
