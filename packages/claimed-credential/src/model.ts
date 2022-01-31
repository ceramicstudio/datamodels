import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { ClaimedCredential } from '../types/ClaimedCredential'

export type { ClaimedCredential } from '../types/ClaimedCredential'

export type ModelTypes = ModelTypeAliases<
  { ClaimedCredential: ClaimedCredential },
  { ClaimedCredential: 'ClaimedCredential' }
>

export const model: EncodedManagedModel = {
  schemas: {
    kjzl6cwe1jw148i3o108ia7ln8ivxa7dflevh8faz1e295886yqxz17h9jzz65t: {
      alias: 'ClaimedCredential',
      commits: [
        {
          jws: {
            payload: 'AXESIGg_nBaiLN0SB2cgXbJC07yA_Kg-jXCOJRKyTZ_effrq',
            signatures: [
              {
                signature:
                  'RAFA_vSdXsjcqLT_-hisY5YLMBJGGlUgs0l46sLY_nzW_wh3fGXeFTJFeeQUp5ZBcnqt91MluURTkvcGA9dtBQ',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreidih6obnirm3ujaozzalwzefu54qd6kqpunochckevsjwp547p25i',
          },
          linkedBlock:
            'omRkYXRhqGR0eXBlZm9iamVjdGV0aXRsZXFDbGFpbWVkQ3JlZGVudGlhbGckc2NoZW1heCdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNocmVxdWlyZWSDY2RpZGR0eXBlaWVuY3J5cHRlZGpwcm9wZXJ0aWVzpmNkaWShZHR5cGVmc3RyaW5nZHR5cGWhZHR5cGVmc3RyaW5nZXZhbHVloWR0eXBlZm9iamVjdGllbmNyeXB0ZWShZCRyZWZxIy9kZWZpbml0aW9ucy9KV0VqdHlwZVNjaGVtYaFkJHJlZngaIy9kZWZpbml0aW9ucy9DZXJhbWljRG9jSWR1dmVyaWZpYWJsZUNyZWRlbnRpYWxzomR0eXBlZWFycmF5ZWl0ZW1zoWQkcmVmeBojL2RlZmluaXRpb25zL0NlcmFtaWNEb2NJZGtkZWZpbml0aW9uc6JjSldFpGR0eXBlZm9iamVjdGV0aXRsZWNKV0VocmVxdWlyZWSEaXByb3RlY3RlZGJpdmpjaXBoZXJ0ZXh0Y3RhZ2pwcm9wZXJ0aWVzpmJpdqFkdHlwZWZzdHJpbmdjYWFkoWR0eXBlZnN0cmluZ2N0YWehZHR5cGVmc3RyaW5naXByb3RlY3RlZKFkdHlwZWZzdHJpbmdqY2lwaGVydGV4dKFkdHlwZWZzdHJpbmdqcmVjaXBpZW50c6JkdHlwZWVhcnJheWVpdGVtc6NkdHlwZWZvYmplY3RocmVxdWlyZWSCZmhlYWRlcm1lbmNyeXB0ZWRfa2V5anByb3BlcnRpZXOiZmhlYWRlcqNkdHlwZWZvYmplY3RocmVxdWlyZWSDY2FsZ2JpdmN0YWdqcHJvcGVydGllc6ViaXahZHR5cGVmc3RyaW5nY2FsZ6FkdHlwZWZzdHJpbmdjZXBroWR0eXBlZm9iamVjdGNraWShZHR5cGVmc3RyaW5nY3RhZ6FkdHlwZWZzdHJpbmdtZW5jcnlwdGVkX2tleaFkdHlwZWZzdHJpbmdsQ2VyYW1pY0RvY0lko2R0eXBlZnN0cmluZ2dwYXR0ZXJueBxeY2VyYW1pYzovLy4rKFw/dmVyc2lvbj0uKyk/aW1heExlbmd0aBiWa2Rlc2NyaXB0aW9ueIxBIFtbQ2xhaW1lZENyZWRlbnRpYWxdXSByZXByZXNlbnRzIGEgc3BlY2lmaWMsIGZhY3R1YWxseS1vcmllbnRlZCBjbGFpbSB0aGF0IGNvdWxkIGJlIHRoZSBDcmVkZW50aWFsU3ViamVjdCBpZCBpbiBhIFtbVmVyaWZpYWJsZUNyZWRlbnRpYWxdXXRhZGRpdGlvbmFsUHJvcGVydGllc/VmaGVhZGVyomZ1bmlxdWVwM2lBSVR0bTl3dW1aam5zMGtjb250cm9sbGVyc4F4OGRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVY',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1fry4gq2v5oi0m1x8mb0okfiw9rujwu15w0116i9j3ll4l6ry7u3ta8',
    },
  },
  definitions: {
    kjzl6cwe1jw149n5sk0vmhvy4jhs4sqbvqchsbq2zxt0sgp7g5fm1ubl2n5ngt5: {
      alias: 'claimedCredential',
      commits: [
        {
          jws: {
            payload: 'AXESIAW2OyGm3qbliRpSChraJuuaZEs_kTaJ6M7yBMA1brHI',
            signatures: [
              {
                signature:
                  'vNQfX1ePP1Kb7kIpdxkhOeiKJz97LdID6oYLDbh03OfCd4J3WWn2hajpJoeCHj4PplcldVMj9XBQvalgIzRSCw',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreiafwy5sdjw6u3sysgssbinnujxltjsewp4rg2e6rtxsatadk3vrza',
          },
          linkedBlock:
            'omRkYXRho2RuYW1lcWNsYWltZWRDcmVkZW50aWFsZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5NGdxMnY1b2kwbTF4OG1iMG9rZml3OXJ1and1MTV3MDExNmk5ajNsbDRsNnJ5N3UzdGE4a2Rlc2NyaXB0aW9ueIlBIFtbQ2xhaW1lZENyZWRlbnRpYWxdXSByZXByZXNlbnRzIGEgc3BlY2lmaWMsIGZhY3R1YWxseS1vcmllbnRlZCBjbGFpbSB0aGF0IGNvdWxkIGJlIHRoZSBDcmVkZW50aWFsU3ViamVjdCBpbiBhIFtbVmVyaWZpYWJsZUNyZWRlbnRpYWxdXWZoZWFkZXKjZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5MWZwNHMwbndkYXJoMHZhaHVzYXJwcG9zZ2V2eTBwZW1peWt5bWQyb3JkNnN3dGhhcmN3ZnVuaXF1ZXBjenAycUZYTzhxbmZ3bjhxa2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rbXhFSDN0UGpvNDd0SGpzVEZ6eWhLUVVwOUw1TlA1d3MxMld6U0o2TWs1RVg=',
        },
      ],
      schema: 'kjzl6cwe1jw148i3o108ia7ln8ivxa7dflevh8faz1e295886yqxz17h9jzz65t',
      version: 'k3y52l7qbv1fryckp72e8vz76oamg24b8hncuhfdhbkedmer8yun0t3mduso6vj7k',
    },
  },
  tiles: {},
}
