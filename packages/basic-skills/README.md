# BasicSkills DataModel

DataModel implementation of the **BasicSkills** schema and definition.

## Installation

```sh
npm install -D @datamodels/basic-skills
```

## Rationale

A lightweight schema for skills and credentials

## Schemas

### [BasicSkills](./schemas/BasicSkills.json)

The BasicSkills schema defines the format of a document that contains the properties listed below. Properties not defined in the schema _cannot_ be included in the BasicSkills.

| Property           | Description                    | Value                                                                                  | Max Size | Required | Example                      |
| ------------------ | ------------------------------ | -------------------------------------------------------------------------------------- | -------- | -------- | ---------------------------- |
name|A human readable name for the skill.|string|160|true||
id|A unique identifier (e.g. uuid or uri) to allow applications to use this skill.|string|420|true||
description|An optional description to add more details.|string|420|false||
tags|Tags to allow easier searching of skills.|array||false||
image|An optional image to use when displaying the skill.|string||false||
details|A link to a document giving details about the status of the skill. E.g. terms of use / revocation status.|string||false||
issuer|A unique identifier representing an issuer of the skill (e.g. did of an institution).|string|160|false||
issuedDate|The date the skill was obtained (ISO8601 DateTime format).|string||false||
expiresDate|The date the skill expires / must be renewed (ISO8601 DateTime format).|string||false||
issuerVerification|A proof mechanism to verify that the issuer certifies the skill. Based on https://www.w3.org/TR/vc-data-model/#proofs-signatures.|object||false||

## License

Dual licensed under MIT and Apache 2
