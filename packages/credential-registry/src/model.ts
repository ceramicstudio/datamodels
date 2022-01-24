import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { CredentialRegistry } from '../types/CredentialRegistry'

export type { CredentialRegistry } from '../types/CredentialRegistry'

export type ModelTypes = ModelTypeAliases<
  { CredentialRegistry: CredentialRegistry },
  { CredentialRegistry: 'CredentialRegistry' }
>

export const model: EncodedManagedModel = {
  schemas: {
    kjzl6cwe1jw14adt37svet5sqs8dmq7gnbvwdoeq3y01g8nvj4x86kydq6u05qp: {
      alias: 'CredentialRegistry',
      commits: [
        {
          jws: {
            payload: 'AXESIJ1nvMONhUOX5aSti_ncQa59iyt963c2INl0cJZi9CqJ',
            signatures: [
              {
                signature:
                  '_Jpyt_KNM9ZZTCTf6_IbfTNUMHSenMv5yveu0N__AQd3OCI_4TmDR9yssbqHFCp6C-PNiBN_V_x2GRSucYSgDg',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreie5m66mhdmfiol6ljfnrp45yqnopwfsw7plo43cbwluoclgf5bkre',
          },
          linkedBlock:
            'omRkYXRhp2R0eXBlZm9iamVjdGV0aXRsZXJDcmVkZW50aWFsUmVnaXN0cnlnJHNjaGVtYXgnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNy9zY2hlbWEjanByb3BlcnRpZXOiZmlzc3VlZKJkdHlwZWVhcnJheWVpdGVtc6FkJHJlZngaIy9kZWZpbml0aW9ucy9DZXJhbWljRG9jSWRnY2xhaW1lZKJkdHlwZWVhcnJheWVpdGVtc6FkJHJlZngaIy9kZWZpbml0aW9ucy9DZXJhbWljRG9jSWRrZGVmaW5pdGlvbnOhbENlcmFtaWNEb2NJZKNkdHlwZWZzdHJpbmdncGF0dGVybngcXmNlcmFtaWM6Ly8uKyhcP3ZlcnNpb249LispP2ltYXhMZW5ndGgYlmtkZXNjcmlwdGlvbniAVGhlIFtbQ3JlZGVudGlhbFJlZ2lzdHJ5XV0gaG9sZHMgdGhlIGxpc3Qgb2YgY2xhaW1lZCBbW0NsYWltZWRDcmVkZW50aWFsc11dIGFuZCB0aGUgW1tWZXJpZmlhYmxlQ3JlZGVudGlhbHNdXSBpc3N1ZWQgYnkgdGhlIHVzZXJ0YWRkaXRpb25hbFByb3BlcnRpZXP0ZmhlYWRlcqJmdW5pcXVlcFpwL3Q3NlpzUVhpWk0vZWprY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWA==',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1fryhu6uvhbdbd8egrkxmd2dwiu99kpo1sabhls830a6t0hm8ld4tts',
    },
  },
  definitions: {
    kjzl6cwe1jw14aqd4o0m1l5fphmvd0y839xjd9cr3xtcmarzctsvoaz5lwjpzls: {
      alias: 'credentialRegistry',
      commits: [
        {
          jws: {
            payload: 'AXESIJE46dOAl2zePrwhMwcw3frUwqAnWevvsH5xmVli5zt_',
            signatures: [
              {
                signature:
                  'GMyClJJ341ZsL-j-2z4E8Gs6jA4c_8dDxKaShs6MihfEmDU6GiIqF4JpbgxuZUcG05DBuA6fzYAtgJNeFMDIDw',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreierhdu5haexntpd5pbbgmdtbxp22tbkaj2z5px3a7trtfmwfzz3p4',
          },
          linkedBlock:
            'omRkYXRho2RuYW1lcmNyZWRlbnRpYWxSZWdpc3RyeWZzY2hlbWF4S2NlcmFtaWM6Ly9rM3k1Mmw3cWJ2MWZyeWh1NnV2aGJkYmQ4ZWdya3htZDJkd2l1OTlrcG8xc2FiaGxzODMwYTZ0MGhtOGxkNHR0c2tkZXNjcmlwdGlvbniAVGhlIFtbQ3JlZGVudGlhbFJlZ2lzdHJ5XV0gaG9sZHMgdGhlIGxpc3Qgb2YgY2xhaW1lZCBbW0NsYWltZWRDcmVkZW50aWFsc11dIGFuZCB0aGUgW1tWZXJpZmlhYmxlQ3JlZGVudGlhbHNdXSBpc3N1ZWQgYnkgdGhlIHVzZXJmaGVhZGVyo2ZzY2hlbWF4S2NlcmFtaWM6Ly9rM3k1Mmw3cWJ2MWZyeTFmcDRzMG53ZGFyaDB2YWh1c2FycHBvc2dldnkwcGVtaXlreW1kMm9yZDZzd3RoYXJjd2Z1bmlxdWVwa05lSWNNeWRHZzRIYWNiaGtjb250cm9sbGVyc4F4OGRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVY',
        },
      ],
      schema: 'kjzl6cwe1jw14adt37svet5sqs8dmq7gnbvwdoeq3y01g8nvj4x86kydq6u05qp',
      version: 'k3y52l7qbv1frykbhd6scraenp9en0mrdjamhqaios0gpqkmzf7xd8u1zvrg8t6v4',
    },
  },
  tiles: {},
}
