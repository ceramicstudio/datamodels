import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { ThreeIdKeychain } from '../types/ThreeIdKeychain'

export type { AuthData, JWE, ThreeIdKeychain, WrappedJWE } from '../types/ThreeIdKeychain'

export type ModelTypes = ModelTypeAliases<
  { ThreeIdKeychain: ThreeIdKeychain },
  { threeIdKeychain: 'ThreeIdKeychain' }
>

export const model: EncodedManagedModel = {
  definitions: {
    kjzl6cwe1jw14a50gupo0d433e9ojgmj9rd9ejxkc8vq6lw0fznsoohwzmejqs8: {
      alias: 'threeIdKeychain',
      commits: [
        {
          jws: {
            payload: 'AXESIGyI_q2lZeGlUOHKcp--mfAyATQxgGxLVs6czea19pDb',
            signatures: [
              {
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3NOWUU2V3RNWjNXTGJQd2NwOUdtN2RUN0ozRHNOUDhhdVFOblBwUUJ1MzdBI3o2TWtzTllFNld0TVozV0xiUHdjcDlHbTdkVDdKM0RzTlA4YXVRTm5QcFFCdTM3QSJ9',
                signature:
                  'Ozhsz077CUps_NHDd_8g4OD3lbysXtJQDZWTpzeBfwjZ5mqDv_uvPPYkhJuld6N0hWTSBi7y6K2iNHYlDdfqCA',
              },
            ],
            link: 'bafyreidmrd7k3jlf4gsvbyokokp35gpqgiatimmanrfvntu4zxtll5uq3m',
          },
          linkedBlock:
            'o2RkYXRho2RuYW1lbDNJRCBLZXljaGFpbmZzY2hlbWF4S2NlcmFtaWM6Ly9rM3k1Mmw3cWJ2MWZyeGlvZGZvNmYyNXdvY2I4eno2MHl3cXc0c3FjcHJzMjZxeDFxeDQ2N2w0eWJ4cGx5YnZnZ2tkZXNjcmlwdGlvbnBLZXkgZGF0YSBmb3IgM0lEZmhlYWRlcqJmc2NoZW1heEtjZXJhbWljOi8vazN5NTJsN3FidjFmcnkxZnA0czBud2RhcmgwdmFodXNhcnBwb3NnZXZ5MHBlbWl5a3ltZDJvcmQ2c3d0aGFyY3drY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtzTllFNld0TVozV0xiUHdjcDlHbTdkVDdKM0RzTlA4YXVRTm5QcFFCdTM3QWdkb2N0eXBlZHRpbGU=',
        },
      ],
      schema: 'kjzl6cwe1jw145fsw0l5hqpeo8byb4s9eqa56agevgvt2nrt3j5dfwrbsxewe1m',
      version: 'k3y52l7qbv1fryg3nbueiql9205guie891emavhqon35m6znn5pl7zi7elbbgegow',
    },
  },
  schemas: {
    kjzl6cwe1jw145fsw0l5hqpeo8byb4s9eqa56agevgvt2nrt3j5dfwrbsxewe1m: {
      alias: 'ThreeIdKeychain',
      commits: [
        {
          jws: {
            payload: 'AXESIDpfdAEsNb76jO9057sDPODcniYXUcxAdlhQXEqr4BBB',
            signatures: [
              {
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3NOWUU2V3RNWjNXTGJQd2NwOUdtN2RUN0ozRHNOUDhhdVFOblBwUUJ1MzdBI3o2TWtzTllFNld0TVozV0xiUHdjcDlHbTdkVDdKM0RzTlA4YXVRTm5QcFFCdTM3QSJ9',
                signature:
                  'Zir2mHf-si2EIGZIMryci6V9hJxEHBLWesBVLzqkl5hlw0DyoBVvVpK5HN_QiozIMCbagPx2v1aLhKb_dNujDw',
              },
            ],
            link: 'bafyreib2l52aclbvx35iz33u465qgpha3spcmf2rzrahmwcqlrfkxyaqie',
          },
          linkedBlock:
            'o2RkYXRhpWR0eXBlZm9iamVjdGckc2NoZW1heCdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNqcHJvcGVydGllc6JnYXV0aE1hcKJkdHlwZWZvYmplY3R0YWRkaXRpb25hbFByb3BlcnRpZXOhZCRyZWZ2Iy9kZWZpbml0aW9ucy9BdXRoRGF0YWlwYXN0U2VlZHOiZHR5cGVlYXJyYXllaXRlbXOhZCRyZWZxIy9kZWZpbml0aW9ucy9KV0VrZGVmaW5pdGlvbnOjY0pXRaRkdHlwZWZvYmplY3RldGl0bGVjSldFaHJlcXVpcmVkhGlwcm90ZWN0ZWRiaXZqY2lwaGVydGV4dGN0YWdqcHJvcGVydGllc6ZiaXahZHR5cGVmc3RyaW5nY2FhZKFkdHlwZWZzdHJpbmdjdGFnoWR0eXBlZnN0cmluZ2lwcm90ZWN0ZWShZHR5cGVmc3RyaW5namNpcGhlcnRleHShZHR5cGVmc3RyaW5nanJlY2lwaWVudHOiZHR5cGVlYXJyYXllaXRlbXOjZHR5cGVmb2JqZWN0aHJlcXVpcmVkgmZoZWFkZXJtZW5jcnlwdGVkX2tleWpwcm9wZXJ0aWVzomZoZWFkZXKhZHR5cGVmb2JqZWN0bWVuY3J5cHRlZF9rZXmhZHR5cGVmc3RyaW5naEF1dGhEYXRho2R0eXBlZm9iamVjdGpwcm9wZXJ0aWVzo2JpZKFkJHJlZngYIy9kZWZpbml0aW9ucy9XcmFwcGVkSldFY3B1YqFkdHlwZWZzdHJpbmdkZGF0YaFkJHJlZngYIy9kZWZpbml0aW9ucy9XcmFwcGVkSldFdGFkZGl0aW9uYWxQcm9wZXJ0aWVz9GpXcmFwcGVkSldFo2R0eXBlZm9iamVjdGpwcm9wZXJ0aWVzoWNqd2WhZCRyZWZxIy9kZWZpbml0aW9ucy9KV0V0YWRkaXRpb25hbFByb3BlcnRpZXP0dGFkZGl0aW9uYWxQcm9wZXJ0aWVz9GZoZWFkZXKiZnNjaGVtYfdrY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtzTllFNld0TVozV0xiUHdjcDlHbTdkVDdKM0RzTlA4YXVRTm5QcFFCdTM3QWdkb2N0eXBlZHRpbGU=',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1frxiodfo6f25wocb8zz60ywqw4sqcprs26qx1qx467l4ybxplybvgg',
    },
  },
  tiles: {},
}
