# CredentialRegistry DataModel

DataModel implementation of the **CredentialRegistry** schemas and definition.

## Installation

```sh
npm install -D @datamodels/credential-registry
```

## Rationale

The CredentialRegistry holds the list of claimed [ClaimedCredentials](./schemas/ClaimedCredential.json) and the [VerifiableCredentials](./schemas/VerifiableCredential.json) issued by the user.

A ClaimedCredential represents a specific, factually-oriented claim that could be used as the Id and CredentialSubject of a [VerifiableCredential](./schemas/VerifiableCredential.json)

A VerifiableCredential is fact-checking review/attestation of claims made (or reported) in a [ClaimedCredential](./schemas/ClaimedCredential.json), following the [W3C VC datamodel](https://www.w3.org/TR/vc-data-model).

## Schemas

### [CredentialRegistry](./schemas/CredentialRegistry.json)

The CredentialRegistry schema defines the format of a document that contains the properties listed below. Properties not defined in the schema _cannot_ be included in the CredentialRegistry.

| Property | Description                             | Value                                                    | Max Size | Required | Example |
| -------- | --------------------------------------- | -------------------------------------------------------- | -------- | -------- | ------- |
| claimed  | List of claims made by this DID         | array of ceramic:// links to ClaimedCredentials tiles    |          | false    |         |
| issued   | List of attestations issued by this DID | array of ceramic:// links to VerifiableCredentials tiles |          | false    |         |

### [ClaimedCredential](./schemas/ClaimedCredential.json)

The ClaimedCredential schema defines the format of a document that contains the properties listed below. Properties not defined in the schema _cannot_ be included in the ClaimedCredential.

| Property              | Description                                                       | Value                                                                                                                                                                                                             | Max Size | Required | Example |
| --------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- | ------- |
| did                   | DID that makes the claim                                          | string                                                                                                                                                                                                            |          | true     |         |
| type                  | Claim type / Alias of claim type                                  | string                                                                                                                                                                                                            |          | true     |         |
| typeSchema            | Claim type schema                                                 | URI of a schema for the Claim payload object                                                                                                                                                                      |          | false    |         |
| value                 | Claim payload                                                     | object with optional properties: "keccak256","value","description", "country", "city", "postalCode", "date", "time", "startDate", "endDate", "issuanceDate", "expirationDate", "issuingEntity", "imageIPFS", etc. |          | false    |         |
| encrypted             | JWE encrypted claim value                                         | JWE object                                                                                                                                                                                                        |          | true     |         |
| verifiableCredentials | List of attestations received for this claim by different issuers | array of ceramic:// links to VerifiableCredential tiles                                                                                                                                                           |          | false    |         |

Tiles created using this schema can then be linked to a DID's claimed credentials on the [CredentialRegistry](../credential-registry/) definition.

### [VerifiableCredential](./schemas/VerifiableCredential.json)

The VerifiableCredential schema defines the format of a document that contains the properties listed below. Properties not defined in the schema _cannot_ be included in the VerifiableCredential.

| Property          | Description                                                 | Value                                                     | Max Size | Required | Example                                                   |
| ----------------- | ----------------------------------------------------------- | --------------------------------------------------------- | -------- | -------- | --------------------------------------------------------- |
| @context          | See https://www.w3.org/TR/vc-data-model/#contexts           | array of string                                           |          | true     |                                                           |
| type              | See https://www.w3.org/TR/vc-data-model/#types              | array of string                                           |          | true     |                                                           |
| id                | See https://www.w3.org/TR/vc-data-model/#identifiers        | ceramic:// link to a Claim tile                           |          | true     | URL of the ClaimedCredential                              |
| issuer            | See https://www.w3.org/TR/vc-data-model/#issuer             | object with required property "id"                        |          | true     | Issuer did                                                |
| credentialSubject | See https://www.w3.org/TR/vc-data-model/#credential-subject | credentialSubject with required property "id"             |          | true     | object including the contents of a ClaimedCredential tile |
| credentialSchema  | See https://www.w3.org/TR/vc-data-model/#data-schemas       | credentialSchema with required properties "id" and "type" |          | true     |                                                           |
| issuanceDate      | See https://www.w3.org/TR/vc-data-model/#issuance-date      | ISO Date string                                           |          | true     |                                                           |
| expirationDate    | See https://www.w3.org/TR/vc-data-model/#expiration         | ISO Date string                                           |          | false    |                                                           |
| proof             | See https://www.w3.org/TR/vc-data-model/#proofs-signatures  | object with required property "type"                      |          | false    |                                                           |
| evidence          | See https://www.w3.org/TR/vc-data-model/#evidence           | object with required property "id"                        |          | false    |                                                           |
| credentialStatus  | See https://www.w3.org/TR/vc-data-model/#status             | object with required property "id"                        |          | false    |                                                           |

Tiles created using this schema can then be linked to a DID's issued credentials on the [CredentialRegistry](../credential-registry/) definition.

## License

Dual licensed under MIT and Apache 2