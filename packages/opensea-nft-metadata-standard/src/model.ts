import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { OpenSeaNftMetadata } from '../types/OpenSea'

export type ModelTypes = ModelTypeAliases<
  { OpenSeaNftMetadata: OpenSeaNftMetadata },
  { openSeaNftMetadata: 'OpenSeaNftMetadata' }
>

export const model: EncodedManagedModel = {
  schemas: {
    kjzl6cwe1jw146jtz78hw2eow9foug36hgeltc1bhqc316oyrojfitklrh40ajy: {
      alias: 'OpenSeaNftMetadata',
      commits: [
        {
          jws: {
            payload: 'AXESILjlxBISutau-KRR0Piw2Y-1x2bbGyBQCg2eggiUJnpG',
            signatures: [
              {
                signature:
                  'uHiQ_ix1D7pLhCQfryatWgu82IOQNP6I7DVp6hymu_4mOwBtwu26RCv-z74O7uzypwiu5_T1Aw66PUiX-wFjCg',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa2lUQnoxeW11ZXBBUTRIRUhZU0YxSDhxdUc1R0xWVlFSM2RqZFgzbURvb1dwI3o2TWtpVEJ6MXltdWVwQVE0SEVIWVNGMUg4cXVHNUdMVlZRUjNkamRYM21Eb29XcCJ9',
              },
            ],
            link: 'bafyreify4xcbeev222xprjcr2d4lbwmpwxdwnwy3ebiaudm6qiejijt2iy',
          },
          linkedBlock:
            'omRkYXRhpGR0eXBlZm9iamVjdGV0aXRsZXJPcGVuU2VhTmZ0TWV0YWRhdGFnJHNjaGVtYXgnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNy9zY2hlbWEjanByb3BlcnRpZXOlZG5hbWWiZHR5cGVmc3RyaW5nZXRpdGxlb1RoZSBuYW1lIHNjaGVtYWVpbWFnZaJkdHlwZWZzdHJpbmdldGl0bGVwVGhlIGltYWdlIHNjaGVtYWphdHRyaWJ1dGVzomR0eXBlZWFycmF5ZWl0ZW1zo2R0eXBlZm9iamVjdGhyZXF1aXJlZIJqdHJhaXRfdHlwZWV2YWx1ZWpwcm9wZXJ0aWVzo2V2YWx1ZaFkdHlwZYJmbnVtYmVyZnN0cmluZ2p0cmFpdF90eXBloWR0eXBlZnN0cmluZ2xkaXNwbGF5X3R5cGWhZHR5cGVmc3RyaW5na2Rlc2NyaXB0aW9uomR0eXBlZnN0cmluZ2V0aXRsZXZUaGUgZGVzY3JpcHRpb24gc2NoZW1hbGV4dGVybmFsX3VybKJkdHlwZWZzdHJpbmdldGl0bGV3VGhlIGV4dGVybmFsX3VybCBzY2hlbWFmaGVhZGVyomZ1bmlxdWVwS1FGMlgrc000eEtJWVMySWtjb250cm9sbGVyc4F4OGRpZDprZXk6ejZNa2lUQnoxeW11ZXBBUTRIRUhZU0YxSDhxdUc1R0xWVlFSM2RqZFgzbURvb1dw',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1frxql16bgf814h1f3koiem44nv4lldq39xkflj8ui6duairdoi31ts',
    },
  },
  definitions: {
    kjzl6cwe1jw14b0ptcve509czg9eaw002nnohsen2wrzswj9k12emp35icz26xj: {
      alias: 'OpenSeaNftMetadata',
      commits: [
        {
          jws: {
            payload: 'AXESIMdlduk5s3UXJK5JG5R8_yurEMLoDhlVfs2iTH4M7ev1',
            signatures: [
              {
                signature:
                  'bxQ7RIHLkK7HourI18f7OpVPVcIX5v20CUdJer_-KmaXQ6UcYt2p5wptlijidWYoh-SuQo2J8OmFCfP8uhl1Dg',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa2lUQnoxeW11ZXBBUTRIRUhZU0YxSDhxdUc1R0xWVlFSM2RqZFgzbURvb1dwI3o2TWtpVEJ6MXltdWVwQVE0SEVIWVNGMUg4cXVHNUdMVlZRUjNkamRYM21Eb29XcCJ9',
              },
            ],
            link: 'bafyreighmv3osontoulsjlsjdokhz7zlvmimf2aodfkx5tncjr7az3pl6u',
          },
          linkedBlock:
            'omRkYXRho2RuYW1lck9wZW5TZWFOZnRNZXRhZGF0YWZzY2hlbWF4S2NlcmFtaWM6Ly9rM3k1Mmw3cWJ2MWZyeHFsMTZiZ2Y4MTRoMWYza29pZW00NG52NGxsZHEzOXhrZmxqOHVpNmR1YWlyZG9pMzF0c2tkZXNjcmlwdGlvbngjU3RhbmRhcmQgIG9wZW4gc2VhIFNjaGVtYSBmb3IgbmZ0cy5maGVhZGVyo2ZzY2hlbWF4S2NlcmFtaWM6Ly9rM3k1Mmw3cWJ2MWZyeTFmcDRzMG53ZGFyaDB2YWh1c2FycHBvc2dldnkwcGVtaXlreW1kMm9yZDZzd3RoYXJjd2Z1bmlxdWVwaDF1WkxLNUQ5MVFjZHFSS2tjb250cm9sbGVyc4F4OGRpZDprZXk6ejZNa2lUQnoxeW11ZXBBUTRIRUhZU0YxSDhxdUc1R0xWVlFSM2RqZFgzbURvb1dw',
        },
      ],
      schema: 'kjzl6cwe1jw146jtz78hw2eow9foug36hgeltc1bhqc316oyrojfitklrh40ajy',
      version: 'k3y52l7qbv1frymd3krj8jlukc3mtpfk0iw8e6i044p32ljczyfl41eef6k9blaf4',
    },
  },
  tiles: {},
}
