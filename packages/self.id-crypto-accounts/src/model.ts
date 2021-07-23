import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { CryptoAccountLinks } from '../types/CryptoAccounts'

export * from '../types/CryptoAccounts'

export type ModelTypes = ModelTypeAliases<
  { CryptoAccounts: CryptoAccountLinks },
  { cryptoAccounts: 'CryptoAccounts' }
>

export const model: EncodedManagedModel = {
  definitions: {
    kjzl6cwe1jw149z4rvwzi56mjjukafta30kojzktd9dsrgqdgz4wlnceu59f95f: {
      alias: 'cryptoAccounts',
      commits: [
        {
          jws: {
            payload: 'AXESIILyy1_0_U8dXhlxpyWOMxBDKion3W2mMbfS5WmuL-Xb',
            signatures: [
              {
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3NOWUU2V3RNWjNXTGJQd2NwOUdtN2RUN0ozRHNOUDhhdVFOblBwUUJ1MzdBI3o2TWtzTllFNld0TVozV0xiUHdjcDlHbTdkVDdKM0RzTlA4YXVRTm5QcFFCdTM3QSJ9',
                signature:
                  'IKbedepBBpEdE9DKx6WjCYYyFdo9mfgv422_vLlT8vusBGM-P7YiEn6t3iYHrMi-dzrnE4Lp8wY0aqhFnDuWCA',
              },
            ],
            link: 'bafyreiec6lfv75h5j4ov4glru4sy4myqimvcuj65nwtddn6s4vu24l7f3m',
          },
          linkedBlock:
            'o2RkYXRho2RuYW1lb0NyeXB0byBBY2NvdW50c2ZzY2hlbWF4S2NlcmFtaWM6Ly9rM3k1Mmw3cWJ2MWZyeXB1c3NqYnVycWc0ZnlreXl5Y2Z1MHA5em5jNzVsdjJ0NWNnNHhhc2xoYWdrZDdoN21rZ2tkZXNjcmlwdGlvbngiQ3J5cHRvIGFjY291bnRzIGxpbmtlZCB0byB5b3VyIERJRGZoZWFkZXKiZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5MWZwNHMwbndkYXJoMHZhaHVzYXJwcG9zZ2V2eTBwZW1peWt5bWQyb3JkNnN3dGhhcmN3a2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rc05ZRTZXdE1aM1dMYlB3Y3A5R203ZFQ3SjNEc05QOGF1UU5uUHBRQnUzN0FnZG9jdHlwZWR0aWxl',
        },
      ],
      schema: 'kjzl6cwe1jw14bie69guriwn4hsto1gdh5q1ytpwi84xkz2b9oxkw9qs7d3v3vv',
      version: 'k3y52l7qbv1fryextyaykh0v4b15ca8g7pg32m500uaq4jazjspuvty09idf0h2io',
    },
  },
  schemas: {
    kjzl6cwe1jw14bie69guriwn4hsto1gdh5q1ytpwi84xkz2b9oxkw9qs7d3v3vv: {
      alias: 'CryptoAccounts',
      commits: [
        {
          jws: {
            payload: 'AXESIF-4Olz6gzTYrKPZj_7buHaUsueU-P0K67cq6kHlJphd',
            signatures: [
              {
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3NOWUU2V3RNWjNXTGJQd2NwOUdtN2RUN0ozRHNOUDhhdVFOblBwUUJ1MzdBI3o2TWtzTllFNld0TVozV0xiUHdjcDlHbTdkVDdKM0RzTlA4YXVRTm5QcFFCdTM3QSJ9',
                signature:
                  'WMNOLmFwYUcYg-dhzg_zkFYit2j7hdYY4_NvcRy_4q_CJmfj8WOxTeHRQ1HqdXkXVycg_Q4JmtqUG992Cdf2CA',
              },
            ],
            link: 'bafyreic7xa5fz6udgtmkzi6zr77nxodwsszopfhy7ufoxnzk5ja6kjuylu',
          },
          linkedBlock:
            'o2RkYXRhpmR0eXBlZm9iamVjdGV0aXRsZXJDcnlwdG9BY2NvdW50TGlua3NnJHNjaGVtYXgnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNy9zY2hlbWEjbXByb3BlcnR5TmFtZXOhaW1heExlbmd0aBkEAHFwYXR0ZXJuUHJvcGVydGllc6F4OF5bYS16QS1aMC05XXsxLDYzfUBbLWEtekEtWjAtOV17MywxNn06Wy1hLXpBLVowLTldezEsNDd9o2R0eXBlZnN0cmluZ2dwYXR0ZXJubV5jZXJhbWljOi8vLitpbWF4TGVuZ3RoGQQAdGFkZGl0aW9uYWxQcm9wZXJ0aWVz9GZoZWFkZXKiZnNjaGVtYfdrY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtzTllFNld0TVozV0xiUHdjcDlHbTdkVDdKM0RzTlA4YXVRTm5QcFFCdTM3QWdkb2N0eXBlZHRpbGU=',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1frypussjburqg4fykyyycfu0p9znc75lv2t5cg4xaslhagkd7h7mkg',
    },
  },
  tiles: {},
}
