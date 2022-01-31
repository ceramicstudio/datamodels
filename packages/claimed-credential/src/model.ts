import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { ClaimedCredential } from '../types/ClaimedCredential'

export type { ClaimedCredential } from '../types/ClaimedCredential'

export type ModelTypes = ModelTypeAliases<
  { ClaimedCredential: ClaimedCredential },
  { ClaimedCredential: 'ClaimedCredential' }
>

export const model: EncodedManagedModel = {
  schemas: {
    kjzl6cwe1jw14b05048l4j1i458q7oqepo0i4a49xkz7u5ih4gmsnhuuazi164x: {
      alias: 'ClaimedCredential',
      commits: [
        {
          jws: {
            payload: 'AXESIFKOfV03oFytIYASxRy7Ai7iXdqntpdaejW-WVWAazXz',
            signatures: [
              {
                signature:
                  '7h8VpRtVrxyMScp1hgwUWPviq5YkqY9PTqzbmLTpqfdkDLLCjODCpYExpZ8HeePhx6QAsoTRgW2zI4EfJU_RDw',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreicsrz6v2n5alswsdaasyuolwaro4jo5vj5ws5nhunn6lfkya2zv6m',
          },
          linkedBlock:
            'omRkYXRhqGR0eXBlZm9iamVjdGV0aXRsZXFDbGFpbWVkQ3JlZGVudGlhbGckc2NoZW1heCdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNocmVxdWlyZWSCY2RpZGR0eXBlanByb3BlcnRpZXOmY2RpZKFkdHlwZWZzdHJpbmdkdHlwZaFkdHlwZWZzdHJpbmdldmFsdWWhZHR5cGVmb2JqZWN0aWVuY3J5cHRlZKFkJHJlZnEjL2RlZmluaXRpb25zL0pXRWp0eXBlU2NoZW1hoWQkcmVmeBojL2RlZmluaXRpb25zL0NlcmFtaWNEb2NJZHV2ZXJpZmlhYmxlQ3JlZGVudGlhbHOiZHR5cGVlYXJyYXllaXRlbXOhZCRyZWZ4GiMvZGVmaW5pdGlvbnMvQ2VyYW1pY0RvY0lka2RlZmluaXRpb25zomNKV0WkZHR5cGVmb2JqZWN0ZXRpdGxlY0pXRWhyZXF1aXJlZIRpcHJvdGVjdGVkYml2amNpcGhlcnRleHRjdGFnanByb3BlcnRpZXOmYml2oWR0eXBlZnN0cmluZ2NhYWShZHR5cGVmc3RyaW5nY3RhZ6FkdHlwZWZzdHJpbmdpcHJvdGVjdGVkoWR0eXBlZnN0cmluZ2pjaXBoZXJ0ZXh0oWR0eXBlZnN0cmluZ2pyZWNpcGllbnRzomR0eXBlZWFycmF5ZWl0ZW1zo2R0eXBlZm9iamVjdGhyZXF1aXJlZIJmaGVhZGVybWVuY3J5cHRlZF9rZXlqcHJvcGVydGllc6JmaGVhZGVyo2R0eXBlZm9iamVjdGhyZXF1aXJlZINjYWxnYml2Y3RhZ2pwcm9wZXJ0aWVzpWJpdqFkdHlwZWZzdHJpbmdjYWxnoWR0eXBlZnN0cmluZ2NlcGuhZHR5cGVmb2JqZWN0Y2tpZKFkdHlwZWZzdHJpbmdjdGFnoWR0eXBlZnN0cmluZ21lbmNyeXB0ZWRfa2V5oWR0eXBlZnN0cmluZ2xDZXJhbWljRG9jSWSjZHR5cGVmc3RyaW5nZ3BhdHRlcm54HF5jZXJhbWljOi8vLisoXD92ZXJzaW9uPS4rKT9pbWF4TGVuZ3RoGJZrZGVzY3JpcHRpb254jEEgW1tDbGFpbWVkQ3JlZGVudGlhbF1dIHJlcHJlc2VudHMgYSBzcGVjaWZpYywgZmFjdHVhbGx5LW9yaWVudGVkIGNsYWltIHRoYXQgY291bGQgYmUgdGhlIENyZWRlbnRpYWxTdWJqZWN0IGlkIGluIGEgW1tWZXJpZmlhYmxlQ3JlZGVudGlhbF1ddGFkZGl0aW9uYWxQcm9wZXJ0aWVz9WZoZWFkZXKiZnVuaXF1ZXBUUDZqSEhHdnNqR2VTOFkya2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rbXhFSDN0UGpvNDd0SGpzVEZ6eWhLUVVwOUw1TlA1d3MxMld6U0o2TWs1RVg=',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1frym8zku5287eotha2envsmirkufyemt6fqf7drqa3r2zbi4g8bmyo',
    },
  },
  definitions: {
    kjzl6cwe1jw147pgvp2t3tdrscw92yrmuqfncmzd4sdh51dypy0z8jpe25zsypq: {
      alias: 'claimedCredential',
      commits: [
        {
          jws: {
            payload: 'AXESIDfTcx7z06OuAJM5KDLh7basyyIY-RoQXtsoEyqDmO13',
            signatures: [
              {
                signature:
                  'tixA7N6NvaDeXYtmPZJdX-kSVmcuZd0_1suphdrc3pMM2MoQ4rXB4enqqVN69I25fWTQs0UUsar-R6pRwWwvBA',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreibx2nzr546tuoxabezzfazod3nwvtfseghzdiif5wzicmvihghno4',
          },
          linkedBlock:
            'omRkYXRho2RuYW1lcWNsYWltZWRDcmVkZW50aWFsZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5bTh6a3U1Mjg3ZW90aGEyZW52c21pcmt1ZnllbXQ2ZnFmN2RycWEzcjJ6Ymk0ZzhibXlva2Rlc2NyaXB0aW9ueIlBIFtbQ2xhaW1lZENyZWRlbnRpYWxdXSByZXByZXNlbnRzIGEgc3BlY2lmaWMsIGZhY3R1YWxseS1vcmllbnRlZCBjbGFpbSB0aGF0IGNvdWxkIGJlIHRoZSBDcmVkZW50aWFsU3ViamVjdCBpbiBhIFtbVmVyaWZpYWJsZUNyZWRlbnRpYWxdXWZoZWFkZXKjZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5MWZwNHMwbndkYXJoMHZhaHVzYXJwcG9zZ2V2eTBwZW1peWt5bWQyb3JkNnN3dGhhcmN3ZnVuaXF1ZXB3VlgzdlI4V0hhR29aNHBaa2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rbXhFSDN0UGpvNDd0SGpzVEZ6eWhLUVVwOUw1TlA1d3MxMld6U0o2TWs1RVg=',
        },
      ],
      schema: 'kjzl6cwe1jw14b05048l4j1i458q7oqepo0i4a49xkz7u5ih4gmsnhuuazi164x',
      version: 'k3y52l7qbv1frxyt41ebyz4xxlnpcl38iijza1vfhe1rtvtvawhyyks4jzemlyuww',
    },
  },
  tiles: {},
}
