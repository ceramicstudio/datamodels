import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { ClaimedCredential } from '../types/ClaimedCredential'

export type { ClaimedCredential } from '../types/ClaimedCredential'

export type ModelTypes = ModelTypeAliases<
  { ClaimedCredential: ClaimedCredential },
  { ClaimedCredential: 'ClaimedCredential' }
>

export const model: EncodedManagedModel = {
  schemas: {
    kjzl6cwe1jw14a2rtl84zxe02p2gjr3md1q8smmyhziojlnnpynjnm1nrolx8b3: {
      alias: 'ClaimedCredential',
      commits: [
        {
          jws: {
            payload: 'AXESINAtoa_UX4HWzR70iT92wtNsSmtUTsr26LKwE4bsbA12',
            signatures: [
              {
                signature:
                  'XQE3FXWORNxHbvKljJfrDYXsy_h89dP9gZhIE06OQfvcHwuOGEitIMWCFcmfxFS4DFaG_dGpETvoZgfVvv3BCw',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreigqfwq27vc7qhlm2hxure7xnqwtnrfgwvcozl3ormvqcodoy3anoy',
          },
          linkedBlock:
            'omRkYXRhqGR0eXBlZm9iamVjdGV0aXRsZXFDbGFpbWVkQ3JlZGVudGlhbGckc2NoZW1heCdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNocmVxdWlyZWSCY2RpZGR0eXBlanByb3BlcnRpZXOmY2RpZKFkdHlwZWZzdHJpbmdkdHlwZaFkdHlwZWZzdHJpbmdldmFsdWWhZHR5cGVmb2JqZWN0aWVuY3J5cHRlZKFkJHJlZnEjL2RlZmluaXRpb25zL0pXRWp0eXBlU2NoZW1hoWQkcmVmZnN0cmluZ3V2ZXJpZmlhYmxlQ3JlZGVudGlhbHOiZHR5cGVlYXJyYXllaXRlbXOhZCRyZWZ4GiMvZGVmaW5pdGlvbnMvQ2VyYW1pY0RvY0lka2RlZmluaXRpb25zomNKV0WkZHR5cGVmb2JqZWN0ZXRpdGxlY0pXRWhyZXF1aXJlZIRpcHJvdGVjdGVkYml2amNpcGhlcnRleHRjdGFnanByb3BlcnRpZXOmYml2oWR0eXBlZnN0cmluZ2NhYWShZHR5cGVmc3RyaW5nY3RhZ6FkdHlwZWZzdHJpbmdpcHJvdGVjdGVkoWR0eXBlZnN0cmluZ2pjaXBoZXJ0ZXh0oWR0eXBlZnN0cmluZ2pyZWNpcGllbnRzomR0eXBlZWFycmF5ZWl0ZW1zo2R0eXBlZm9iamVjdGhyZXF1aXJlZIJmaGVhZGVybWVuY3J5cHRlZF9rZXlqcHJvcGVydGllc6JmaGVhZGVyo2R0eXBlZm9iamVjdGhyZXF1aXJlZINjYWxnYml2Y3RhZ2pwcm9wZXJ0aWVzpWJpdqFkdHlwZWZzdHJpbmdjYWxnoWR0eXBlZnN0cmluZ2NlcGuhZHR5cGVmb2JqZWN0Y2tpZKFkdHlwZWZzdHJpbmdjdGFnoWR0eXBlZnN0cmluZ21lbmNyeXB0ZWRfa2V5oWR0eXBlZnN0cmluZ2xDZXJhbWljRG9jSWSjZHR5cGVmc3RyaW5nZ3BhdHRlcm54HF5jZXJhbWljOi8vLisoXD92ZXJzaW9uPS4rKT9pbWF4TGVuZ3RoGJZrZGVzY3JpcHRpb254jEEgW1tDbGFpbWVkQ3JlZGVudGlhbF1dIHJlcHJlc2VudHMgYSBzcGVjaWZpYywgZmFjdHVhbGx5LW9yaWVudGVkIGNsYWltIHRoYXQgY291bGQgYmUgdGhlIENyZWRlbnRpYWxTdWJqZWN0IGlkIGluIGEgW1tWZXJpZmlhYmxlQ3JlZGVudGlhbF1ddGFkZGl0aW9uYWxQcm9wZXJ0aWVz9WZoZWFkZXKiZnVuaXF1ZXBkVGpnbDkrTTU4RmlZNzc0a2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rbXhFSDN0UGpvNDd0SGpzVEZ6eWhLUVVwOUw1TlA1d3MxMld6U0o2TWs1RVg=',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1fryfnpuexvjhfkj69hogpr0samjkz9bwkuje08omffrwrt0uzwb2tc',
    },
  },
  definitions: {
    kjzl6cwe1jw147rgtlgy3ykrl8hc4cx2eu2uwcoa151fb9046ut3ako6wedi96t: {
      alias: 'claimedCredential',
      commits: [
        {
          jws: {
            payload: 'AXESIHVM1n_bxEjJZcnMKgcCcf-wea1npdNksAFEnDk6INGf',
            signatures: [
              {
                signature:
                  '2_PQ2fFwWymfER5XP-48ANjwJX92a3NpcYipSYcJS3PyIz-4iRuW3leBehpMW7BC1W0a-ACmzjmOTzDSGb3wBQ',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreidvjtlh7w6ejdewlsomfidqe4p7wb422z5f2nslaaketq4tuigrt4',
          },
          linkedBlock:
            'omRkYXRho2RuYW1lcWNsYWltZWRDcmVkZW50aWFsZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5Zm5wdWV4dmpoZmtqNjlob2dwcjBzYW1qa3o5YndrdWplMDhvbWZmcndydDB1endiMnRja2Rlc2NyaXB0aW9ueIlBIFtbQ2xhaW1lZENyZWRlbnRpYWxdXSByZXByZXNlbnRzIGEgc3BlY2lmaWMsIGZhY3R1YWxseS1vcmllbnRlZCBjbGFpbSB0aGF0IGNvdWxkIGJlIHRoZSBDcmVkZW50aWFsU3ViamVjdCBpbiBhIFtbVmVyaWZpYWJsZUNyZWRlbnRpYWxdXWZoZWFkZXKjZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5MWZwNHMwbndkYXJoMHZhaHVzYXJwcG9zZ2V2eTBwZW1peWt5bWQyb3JkNnN3dGhhcmN3ZnVuaXF1ZXBsSW1zQXRuVGVKUXJ1ekgwa2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rbXhFSDN0UGpvNDd0SGpzVEZ6eWhLUVVwOUw1TlA1d3MxMld6U0o2TWs1RVg=',
        },
      ],
      schema: 'kjzl6cwe1jw14a2rtl84zxe02p2gjr3md1q8smmyhziojlnnpynjnm1nrolx8b3',
      version: 'k3y52l7qbv1frxz7bmgoik5vo70ba6zv55hwbq24nc3u4w00tsr2vf7012e81tce8',
    },
  },
  tiles: {},
}
