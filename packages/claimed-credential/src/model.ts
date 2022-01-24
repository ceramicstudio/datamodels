import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { ClaimedCredential } from '../types/ClaimedCredential'

export type { ClaimedCredential } from '../types/ClaimedCredential'

export type ModelTypes = ModelTypeAliases<
  { ClaimedCredential: ClaimedCredential },
  { ClaimedCredential: 'ClaimedCredential' }
>

export const model: EncodedManagedModel = {
  schemas: {
    kjzl6cwe1jw145wkmswwl78mb5cjc25607p9rtqkep2pkvr454hgvde2nckmou9: {
      alias: 'ClaimedCredential',
      commits: [
        {
          jws: {
            payload: 'AXESICoGn4IovuLmelvqeYxm-r0GIxbFg-sIOgm_Ie9WEBFt',
            signatures: [
              {
                signature:
                  'f6Eo1TBNc9GUFNUlMCiiREMmqUELQG406e0EU2o0KKdf7OPKgkc_5ap1U1WblzSQ7kn9muLDhrc57zljvWo8Dw',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreibka2pyekf64lthuw7kpgggn6v5ayrrnrmd5meducn7ehxvmearnu',
          },
          linkedBlock:
            'omRkYXRhqGR0eXBlZm9iamVjdGV0aXRsZXFDbGFpbWVkQ3JlZGVudGlhbGckc2NoZW1heCdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNocmVxdWlyZWSDY2RpZGR0eXBlaWVuY3J5cHRlZGpwcm9wZXJ0aWVzpmNkaWShZHR5cGVmc3RyaW5nZHR5cGWhZHR5cGVmc3RyaW5nZXZhbHVloWR0eXBlZm9iamVjdGllbmNyeXB0ZWShZCRyZWZxIy9kZWZpbml0aW9ucy9KV0VqdHlwZVNjaGVtYaFkJHJlZngaIy9kZWZpbml0aW9ucy9DZXJhbWljRG9jSWR1dmVyaWZpYWJsZUNyZWRlbnRpYWxzomR0eXBlZWFycmF5ZWl0ZW1zoWQkcmVmeBojL2RlZmluaXRpb25zL0NlcmFtaWNEb2NJZGtkZWZpbml0aW9uc6JjSldFpGR0eXBlZm9iamVjdGV0aXRsZWNKV0VocmVxdWlyZWSEaXByb3RlY3RlZGJpdmpjaXBoZXJ0ZXh0Y3RhZ2pwcm9wZXJ0aWVzpmJpdqFkdHlwZWZzdHJpbmdjYWFkoWR0eXBlZnN0cmluZ2N0YWehZHR5cGVmc3RyaW5naXByb3RlY3RlZKFkdHlwZWZzdHJpbmdqY2lwaGVydGV4dKFkdHlwZWZzdHJpbmdqcmVjaXBpZW50c6JkdHlwZWVhcnJheWVpdGVtc6NkdHlwZWZvYmplY3RocmVxdWlyZWSCZmhlYWRlcm1lbmNyeXB0ZWRfa2V5anByb3BlcnRpZXOiZmhlYWRlcqNkdHlwZWZvYmplY3RocmVxdWlyZWSDY2FsZ2JpdmN0YWdqcHJvcGVydGllc6ViaXahZHR5cGVmc3RyaW5nY2FsZ6FkdHlwZWZzdHJpbmdjZXBroWR0eXBlZm9iamVjdGNraWShZHR5cGVmc3RyaW5nY3RhZ6FkdHlwZWZzdHJpbmdtZW5jcnlwdGVkX2tleaFkdHlwZWZzdHJpbmdsQ2VyYW1pY0RvY0lko2R0eXBlZnN0cmluZ2dwYXR0ZXJueBxeY2VyYW1pYzovLy4rKFw/dmVyc2lvbj0uKyk/aW1heExlbmd0aBiWa2Rlc2NyaXB0aW9ueIlBIFtbQ2xhaW1lZENyZWRlbnRpYWxdXSByZXByZXNlbnRzIGEgc3BlY2lmaWMsIGZhY3R1YWxseS1vcmllbnRlZCBjbGFpbSB0aGF0IGNvdWxkIGJlIHRoZSBDcmVkZW50aWFsU3ViamVjdCBpbiBhIFtbVmVyaWZpYWJsZUNyZWRlbnRpYWxdXXRhZGRpdGlvbmFsUHJvcGVydGllc/RmaGVhZGVyomZ1bmlxdWVwWUJMaGNJOWU5UDc5ZGdOZmtjb250cm9sbGVyc4F4OGRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVY',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1frxlzmq5lzqrhana15hr8qpirphvgx4ib9whstgfw7z382u1epcn40',
    },
  },
  definitions: {
    kjzl6cwe1jw147xquc522c0b1hhnll9ros4udqujscs5rd0atto7ofm6biemrj1: {
      alias: 'claimedCredential',
      commits: [
        {
          jws: {
            payload: 'AXESIJyjzT1sCCZqMOZKomCkUJ0tj0bliJlD6BdfLcN5Vrt6',
            signatures: [
              {
                signature:
                  'ChZRBhnGt25NgnqHxdCMR1hFwsvMqYiG3rlP6oEBSORrgQJa6bgQsgb1V-okJelhiIGqYXgFSEe_17rVJv1RCw',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreie4upgt23aiezvdbzskujqkiue5fwhunzmitfb6qf27fxbxsvv3pi',
          },
          linkedBlock:
            'omRkYXRho2RuYW1lcWNsYWltZWRDcmVkZW50aWFsZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ4bHptcTVsenFyaGFuYTE1aHI4cXBpcnBodmd4NGliOXdoc3RnZnc3ejM4MnUxZXBjbjQwa2Rlc2NyaXB0aW9ueIlBIFtbQ2xhaW1lZENyZWRlbnRpYWxdXSByZXByZXNlbnRzIGEgc3BlY2lmaWMsIGZhY3R1YWxseS1vcmllbnRlZCBjbGFpbSB0aGF0IGNvdWxkIGJlIHRoZSBDcmVkZW50aWFsU3ViamVjdCBpbiBhIFtbVmVyaWZpYWJsZUNyZWRlbnRpYWxdXWZoZWFkZXKjZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5MWZwNHMwbndkYXJoMHZhaHVzYXJwcG9zZ2V2eTBwZW1peWt5bWQyb3JkNnN3dGhhcmN3ZnVuaXF1ZXBjaXJKRHZ6c3hXTG1RMXBCa2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rbXhFSDN0UGpvNDd0SGpzVEZ6eWhLUVVwOUw1TlA1d3MxMld6U0o2TWs1RVg=',
        },
      ],
      schema: 'kjzl6cwe1jw145wkmswwl78mb5cjc25607p9rtqkep2pkvr454hgvde2nckmou9',
      version: 'k3y52l7qbv1fry0fyvqbyole6ikdjtj9gw82g1qx8pmw8yki50306lr1oxuw1vrb4',
    },
  },
  tiles: {},
}
