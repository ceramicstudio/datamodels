import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { VerifiableCredential } from '../types/VerifiableCredential'
export type { VerifiableCredential } from '../types/VerifiableCredential'

import type { ClaimedCredentials } from '../types/ClaimedCredentials'
export type { ClaimedCredentials } from '../types/ClaimedCredentials'

import type { IssuedCredentials } from '../types/IssuedCredentials'
export type { IssuedCredentials } from '../types/IssuedCredentials'

import type { HeldCredentials } from '../types/HeldCredentials'
export type { HeldCredentials } from '../types/HeldCredentials'

export type ModelTypes = ModelTypeAliases<
  {
    VerifiableCredential: VerifiableCredential
    ClaimedCredentials: ClaimedCredentials
    IssuedCredentials: IssuedCredentials
    HeldCredentials: HeldCredentials
  },
  {
    claimedCredentials: 'ClaimedCredentials'
    issuedCredentials: 'IssuedCredentials'
    heldCredentials: 'HeldCredentials'
  }
>

export const model: EncodedManagedModel = {
  schemas: {
    kjzl6cwe1jw1467h0pd1nz3gklqet38w9kxne4tmdl26cud6s8xr1k3el12lqol: {
      alias: 'VerifiableCredential',
      commits: [
        {
          jws: {
            payload: 'AXESIA_TCWle8b0hXWZ3kqtB0atNfVb4jGqCCOQXB2Yvthk1',
            signatures: [
              {
                signature:
                  '46XZ22NrHrgYDxxO24Bt8b2QxOEOpUF0nAi2rMfMbHhhoKbetua-6SSpykU5RPMXHn21FEBogHeo_u9fhmkICA',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreiap2mewsxxrxuqv2ztxskvudunljv6vn6emnkbarzaxa5tc7nqzgu',
          },
          linkedBlock:
            'omRkYXRhp2R0eXBlZm9iamVjdGV0aXRsZXRWZXJpZmlhYmxlQ3JlZGVudGlhbGckc2NoZW1heCdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNocmVxdWlyZWSHaEBjb250ZXh0ZHR5cGViaWRmaXNzdWVycWNyZWRlbnRpYWxTdWJqZWN0cGNyZWRlbnRpYWxTY2hlbWFsaXNzdWFuY2VEYXRlanByb3BlcnRpZXOrYmlkomR0eXBlZnN0cmluZ2ltYXhMZW5ndGgY8GR0eXBlomR0eXBlZWFycmF5ZWl0ZW1zoWR0eXBlZnN0cmluZ2Vwcm9vZqNkdHlwZWZvYmplY3RocmVxdWlyZWSBZHR5cGVqcHJvcGVydGllc6dkdHlwZaFkdHlwZWZzdHJpbmdmZWlwNzEypGR0eXBlZm9iamVjdGhyZXF1aXJlZINmZG9tYWluZXR5cGVza3ByaW1hcnlUeXBlanByb3BlcnRpZXOjZXR5cGVzoWR0eXBlZm9iamVjdGZkb21haW6kZHR5cGVmb2JqZWN0aHJlcXVpcmVkg2djaGFpbklkZG5hbWVndmVyc2lvbmpwcm9wZXJ0aWVzpGRuYW1loWR0eXBlZnN0cmluZ2djaGFpbklkoWR0eXBlZ2ludGVnZXJndmVyc2lvbqFkdHlwZWZzdHJpbmdxdmVyaWZ5aW5nQ29udHJhY3ShZHR5cGVmc3RyaW5ndGFkZGl0aW9uYWxQcm9wZXJ0aWVz9GtwcmltYXJ5VHlwZaFkdHlwZWZzdHJpbmd0YWRkaXRpb25hbFByb3BlcnRpZXP0Z2NyZWF0ZWShZHR5cGVmc3RyaW5nanByb29mVmFsdWWhZHR5cGVmc3RyaW5nbHByb29mUHVycG9zZaFkdHlwZWZzdHJpbmdvZXRoZXJldW1BZGRyZXNzoWR0eXBlZnN0cmluZ3J2ZXJpZmljYXRpb25NZXRob2ShZHR5cGVmc3RyaW5nZmlzc3VlcqNkdHlwZWZvYmplY3RocmVxdWlyZWSBYmlkanByb3BlcnRpZXOiYmlkoWR0eXBlZnN0cmluZ29ldGhlcmV1bUFkZHJlc3OhZHR5cGVmc3RyaW5naEBjb250ZXh0omR0eXBlZWFycmF5ZWl0ZW1zoWR0eXBlZnN0cmluZ2hldmlkZW5jZaRkdHlwZWZvYmplY3RocmVxdWlyZWSBYmlkanByb3BlcnRpZXOmYmlkoWR0eXBlZnN0cmluZ2R0eXBlomR0eXBlZWFycmF5ZWl0ZW1zoWR0eXBlZnN0cmluZ2h2ZXJpZmllcqFkdHlwZWZzdHJpbmdvc3ViamVjdFByZXNlbmNloWR0eXBlZnN0cmluZ3Bkb2N1bWVudFByZXNlbmNloWR0eXBlZnN0cmluZ3BldmlkZW5jZURvY3VtZW50oWR0eXBlZnN0cmluZ3RhZGRpdGlvbmFsUHJvcGVydGllc/RsaXNzdWFuY2VEYXRloWR0eXBlZnN0cmluZ25leHBpcmF0aW9uRGF0ZaFkdHlwZWZzdHJpbmdwY3JlZGVudGlhbFNjaGVtYaRkdHlwZWZvYmplY3RocmVxdWlyZWSCYmlkZHR5cGVqcHJvcGVydGllc6JiaWShZHR5cGVmc3RyaW5nZHR5cGWhZHR5cGVmc3RyaW5ndGFkZGl0aW9uYWxQcm9wZXJ0aWVz9HBjcmVkZW50aWFsU3RhdHVzpGR0eXBlZm9iamVjdGhyZXF1aXJlZIJiaWRkdHlwZWpwcm9wZXJ0aWVzomJpZKFkdHlwZWZzdHJpbmdkdHlwZaFkdHlwZWZzdHJpbmd0YWRkaXRpb25hbFByb3BlcnRpZXP0cWNyZWRlbnRpYWxTdWJqZWN0pGR0eXBlZm9iamVjdGhyZXF1aXJlZIFiaWRqcHJvcGVydGllc6JiaWShZHR5cGVmc3RyaW5nb2V0aGVyZXVtQWRkcmVzc6FkdHlwZWZzdHJpbmd0YWRkaXRpb25hbFByb3BlcnRpZXP1a2Rlc2NyaXB0aW9ueGdBIFtbVmVyaWZpYWJsZUNyZWRlbnRpYWxdXSBpcyBmYWN0LWNoZWNraW5nIHJldmlldy9hdHRlc3RhdGlvbiBvZiBjbGFpbXMgbWFkZSBhYm91dCBhIGNyZWRlbnRpYWxTdWJqZWN0dGFkZGl0aW9uYWxQcm9wZXJ0aWVz9GZoZWFkZXKiZnVuaXF1ZXBiOFZoZGt2bVo5UjZNUkg1a2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rbXhFSDN0UGpvNDd0SGpzVEZ6eWhLUVVwOUw1TlA1d3MxMld6U0o2TWs1RVg=',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1frxo5510cruhkluijtav39g4vacian4lrh7bxs8vk0b2w7pjmilqtc',
    },
    kjzl6cwe1jw1477e4urqgh6mih2t7ud1rcmf611ct8qe1ls3tcerirh5ggejo9a: {
      alias: 'ClaimedCredentials',
      commits: [
        {
          jws: {
            payload: 'AXESIEQFluGF3NofYxFhc8vg821fmb9h8OeDjF793CqGPrSi',
            signatures: [
              {
                signature:
                  'Vln3O2HdvOkQK6aFZOHGu1m84TfFS2Mf1JKyuh4HcgQNJ6WsNtTLHRcxbdU8Bo-KWTyJCF9u2mdUuy5n9gI_AA',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreiceawlodbo43ipwgelbopf6b43nl6m36ypq46byyxx53qvimpvuui',
          },
          linkedBlock:
            'omRkYXRhp2R0eXBlZm9iamVjdGV0aXRsZXJDbGFpbWVkQ3JlZGVudGlhbHNnJHNjaGVtYXgnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNy9zY2hlbWEjanByb3BlcnRpZXOhZ2NsYWltZWSiZHR5cGVlYXJyYXllaXRlbXOhZCRyZWZ4IiMvZGVmaW5pdGlvbnMvVmVyaWZpYWJsZUNyZWRlbnRpYWxrZGVmaW5pdGlvbnOhdFZlcmlmaWFibGVDcmVkZW50aWFspGR0eXBlZnN0cmluZ2dwYXR0ZXJueBxeY2VyYW1pYzovLy4rKFw/dmVyc2lvbj0uKyk/aCRjb21tZW50eEljaXA4ODpyZWY6a2p6bDZjd2UxancxNDlkd3JxZ2ttZGhieG01MnQ1aTBtMzdrNXQ3bzl5MnZmMXRuY3NzODZpbGpzaW44ZnByaW1heExlbmd0aBiWa2Rlc2NyaXB0aW9ueDxUaGUgbGlzdCBvZiBbW1ZlcmlmaWFibGVDcmVkZW50aWFsXV0gc2VsZi1pc3N1ZWQgYnkgdGhlIHVzZXJ0YWRkaXRpb25hbFByb3BlcnRpZXP0ZmhlYWRlcqJmdW5pcXVlcFNKL3NyWGlnUDhwTGdNUGdrY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWA==',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1frxv8kiit856743dfzrrwsihrfuvdn3y3nvevv4o8zpfdyt0nfwhz4',
    },
    kjzl6cwe1jw14ah4u4u39w1cyf1gtb7lis7v3cihejajjktpw8wmgztxt8um1gu: {
      alias: 'HeldCredentials',
      commits: [
        {
          jws: {
            payload: 'AXESIGon2N5iZTwhBRMttvMuqJ9E3Kaalj77iYlW4EHLJ1Md',
            signatures: [
              {
                signature:
                  '1f9-P5Akr9NKZ7kLbMkJura5eu4Ue8rwQT-FaEbAhJf4gqqLRXodtRX28KeHLaL_qcsUBdyDPq0WaCrToIVLCw',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreidke7mn4ytfhqqqkeznw3zs5ke7itoknguwh35ytckw4ba4wj2tdu',
          },
          linkedBlock:
            'omRkYXRhp2R0eXBlZm9iamVjdGV0aXRsZW9IZWxkQ3JlZGVudGlhbHNnJHNjaGVtYXgnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNy9zY2hlbWEjanByb3BlcnRpZXOhZGhlbGSiZHR5cGVlYXJyYXllaXRlbXOhZCRyZWZ4IiMvZGVmaW5pdGlvbnMvVmVyaWZpYWJsZUNyZWRlbnRpYWxrZGVmaW5pdGlvbnOhdFZlcmlmaWFibGVDcmVkZW50aWFspGR0eXBlZnN0cmluZ2dwYXR0ZXJueBxeY2VyYW1pYzovLy4rKFw/dmVyc2lvbj0uKyk/aCRjb21tZW50eEljaXA4ODpyZWY6a2p6bDZjd2UxancxNDlkd3JxZ2ttZGhieG01MnQ1aTBtMzdrNXQ3bzl5MnZmMXRuY3NzODZpbGpzaW44ZnByaW1heExlbmd0aBiWa2Rlc2NyaXB0aW9ueDpUaGUgbGlzdCBvZiBbW1ZlcmlmaWFibGVDcmVkZW50aWFsXV0gcmVjZWl2ZWQgZnJvbSBpc3N1ZXJzdGFkZGl0aW9uYWxQcm9wZXJ0aWVz9GZoZWFkZXKiZnVuaXF1ZXBQSW1QTWRTWHUxdTRJeEQza2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rbXhFSDN0UGpvNDd0SGpzVEZ6eWhLUVVwOUw1TlA1d3MxMld6U0o2TWs1RVg=',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1fryihueadzabto4qyfkfq11knx3szfrd6yz83c5bbzsuswfyxoqfpc',
    },
    kjzl6cwe1jw14bf3vp2ay7qg2syfj8jh3ddeyjelou8vg55dmifmsa1lkv8687b: {
      alias: 'IssuedCredentials',
      commits: [
        {
          jws: {
            payload: 'AXESIMw_KuiK1M4a9_w4FLUxUe73hbeoFkxzxms1YD570kzP',
            signatures: [
              {
                signature:
                  '-1xm6B02MqkZhm7HuHtoVAjSK0_lxQA7Hu-XB9tFL3c-eWyMS7yez7kUX-A2UYjx_5q3tDIB3sbdTEmq2xBJAg',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreigmh4vorcwuzynpp7bycs2tcupo66c3pkawjrz4m2zvma7hxusmz4',
          },
          linkedBlock:
            'omRkYXRhp2R0eXBlZm9iamVjdGV0aXRsZXFJc3N1ZWRDcmVkZW50aWFsc2ckc2NoZW1heCdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNqcHJvcGVydGllc6FmaXNzdWVkomR0eXBlZWFycmF5ZWl0ZW1zoWQkcmVmeCIjL2RlZmluaXRpb25zL1ZlcmlmaWFibGVDcmVkZW50aWFsa2RlZmluaXRpb25zoXRWZXJpZmlhYmxlQ3JlZGVudGlhbKRkdHlwZWZzdHJpbmdncGF0dGVybngcXmNlcmFtaWM6Ly8uKyhcP3ZlcnNpb249LispP2gkY29tbWVudHhJY2lwODg6cmVmOmtqemw2Y3dlMWp3MTQ5ZHdycWdrbWRoYnhtNTJ0NWkwbTM3azV0N285eTJ2ZjF0bmNzczg2aWxqc2luOGZwcmltYXhMZW5ndGgYlmtkZXNjcmlwdGlvbng6VGhlIGxpc3Qgb2YgW1tWZXJpZmlhYmxlQ3JlZGVudGlhbF1dIGlzc3VlZCB0byBvdGhlciB1c2Vyc3RhZGRpdGlvbmFsUHJvcGVydGllc/RmaGVhZGVyomZ1bmlxdWVwQXFjN0U1cy93eXZTWjVsUmtjb250cm9sbGVyc4F4OGRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVY',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1fryp7fle8dvb02bxwugsqhjz3edlzu8n33msm8w33613fdge24aby8',
    },
  },
  definitions: {
    kjzl6cwe1jw149dwrqgkmdhbxm52t5i0m37k5t7o9y2vf1tncss86iljsin8fpr: {
      alias: 'verifiableCredential',
      commits: [
        {
          jws: {
            payload: 'AXESIOwC_sGdQCYGBy3nRghy-Rmrd8eauqcy00ta6aFLN4ba',
            signatures: [
              {
                signature:
                  'kJh-xBsMfTYzS8SahpQBoxWCIesgW1r_ohpMKRey5tZoLU3lb7GFrVfUAuiGCfDzJhXIPHPUQTwdhJkVlJuJBg',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreihmal7mdhkaeydaolphiyehf6izvn34pgv2u4zngs225gquwn4g3i',
          },
          linkedBlock:
            'omRkYXRho2RuYW1ldHZlcmlmaWFibGVDcmVkZW50aWFsZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ4bzU1MTBjcnVoa2x1aWp0YXYzOWc0dmFjaWFuNGxyaDdieHM4dmswYjJ3N3BqbWlscXRja2Rlc2NyaXB0aW9ueHZBIFtbVmVyaWZpYWJsZUNyZWRlbnRpYWxdXSBpcyBmYWN0LWNoZWNraW5nIHJldmlldy9hdHRlc3RhdGlvbiBvZiBjbGFpbXMgbWFkZSAob3IgcmVwb3J0ZWQpIGluIGEgW1tDbGFpbWVkQ3JlZGVudGlhbF1dZmhlYWRlcqNmc2NoZW1heEtjZXJhbWljOi8vazN5NTJsN3FidjFmcnkxZnA0czBud2RhcmgwdmFodXNhcnBwb3NnZXZ5MHBlbWl5a3ltZDJvcmQ2c3d0aGFyY3dmdW5pcXVlcGhtbkxldzhRb0NjcVlZUnJrY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWA==',
        },
      ],
      schema: 'kjzl6cwe1jw1467h0pd1nz3gklqet38w9kxne4tmdl26cud6s8xr1k3el12lqol',
      version: 'k3y52l7qbv1fryaqx185un3v8v1g3zb44d2trdbqkmqcff0yu30oq6c98qsl7zr40',
    },
    kjzl6cwe1jw14bdckgezfuci7b5if7ussy4zmxj0q97c8jl3zvb172qz7h8jbqd: {
      alias: 'claimedCredentials',
      commits: [
        {
          jws: {
            payload: 'AXESIOuh9MnMkptRQ9wfa4qAK8nNZvQXqdzR4iXn_VJKtnbL',
            signatures: [
              {
                signature:
                  'yf5cgoj1MVUBbgqTZIG2Bql6LKa-mt2lJW-qClYVTWnYSRt6GV69f4gw2UxhTh_QUP2JUtmRDRYLq5bKJsXgAw',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreihluh2mttestniuhxa7nofiak6jzvtpif5j3ti6ejph7vjevntwzm',
          },
          linkedBlock:
            'omRkYXRho2RuYW1lcmNsYWltZWRDcmVkZW50aWFsc2ZzY2hlbWF4S2NlcmFtaWM6Ly9rM3k1Mmw3cWJ2MWZyeHY4a2lpdDg1Njc0M2RmenJyd3NpaHJmdXZkbjN5M252ZXZ2NG84enBmZHl0MG5md2h6NGtkZXNjcmlwdGlvbng8VGhlIGxpc3Qgb2YgW1tWZXJpZmlhYmxlQ3JlZGVudGlhbF1dIHNlbGYtaXNzdWVkIGJ5IHRoZSB1c2VyZmhlYWRlcqNmc2NoZW1heEtjZXJhbWljOi8vazN5NTJsN3FidjFmcnkxZnA0czBud2RhcmgwdmFodXNhcnBwb3NnZXZ5MHBlbWl5a3ltZDJvcmQ2c3d0aGFyY3dmdW5pcXVlcEZWQnZqRzhVdlZwQXl0U3FrY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWA==',
        },
      ],
      schema: 'kjzl6cwe1jw1477e4urqgh6mih2t7ud1rcmf611ct8qe1ls3tcerirh5ggejo9a',
      version: 'k3y52l7qbv1fryouxdgqk0nsxfzb707v0turhf2f96pg70ra4f2mgibjud6kpffgg',
    },
    kjzl6cwe1jw149hainpftr2tssjnlf2ty154nc137ujqq329aydhsrp5252y0hx: {
      alias: 'issuedCredentials',
      commits: [
        {
          jws: {
            payload: 'AXESINCFDLxiw8h6nYtqyTPThk-LHlvBIkiysRmKVFLvwVvl',
            signatures: [
              {
                signature:
                  'DAj-k5-Zn7wrC4lkiIW5NOtekx5Caks3VUpmb_dEx0IraK9npWVS-A0eTXI0epTb1dCn9Waxs5gNTv8zCM9bDQ',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreigqquglyywdzb5j3c3kzez5hbsprmpfxqjcjczlcgmkkrjo7qk34u',
          },
          linkedBlock:
            'omRkYXRho2RuYW1lcWlzc3VlZENyZWRlbnRpYWxzZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5cDdmbGU4ZHZiMDJieHd1Z3NxaGp6M2VkbHp1OG4zM21zbTh3MzM2MTNmZGdlMjRhYnk4a2Rlc2NyaXB0aW9ueDpUaGUgbGlzdCBvZiBbW1ZlcmlmaWFibGVDcmVkZW50aWFsXV0gaXNzdWVkIHRvIG90aGVyIHVzZXJzZmhlYWRlcqNmc2NoZW1heEtjZXJhbWljOi8vazN5NTJsN3FidjFmcnkxZnA0czBud2RhcmgwdmFodXNhcnBwb3NnZXZ5MHBlbWl5a3ltZDJvcmQ2c3d0aGFyY3dmdW5pcXVlcFVVRDhCaXgyTno4dHZDaTlrY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWA==',
        },
      ],
      schema: 'kjzl6cwe1jw14bf3vp2ay7qg2syfj8jh3ddeyjelou8vg55dmifmsa1lkv8687b',
      version: 'k3y52l7qbv1frybeysokwjkk3wqzrsb84y04h1xjqvt8e1hs25wfykkyrz84xvjeo',
    },
    kjzl6cwe1jw14afevdrbxwgcw2aqk3nj0g47w8ermgde61o09o52bn6fkyq7k6i: {
      alias: 'heldCredentials',
      commits: [
        {
          jws: {
            payload: 'AXESIDDKGCMNViGRwUqAj2SSBlcsJVFv_TE5u_5cb5SxA8kK',
            signatures: [
              {
                signature:
                  'B0m7BWTJAezNGyq2fkikGkDN-qaiYBKE4pkCzNBzJ8gYypdKLEJI_mv76xovit4Y8nAAQyrkHUkFZCtPDoBxBw',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreibqzimcgdkwegi4csuar5sjebsxfqsvc375ge43x7s4n6klca6jbi',
          },
          linkedBlock:
            'omRkYXRho2RuYW1lb2hlbGRDcmVkZW50aWFsc2ZzY2hlbWF4S2NlcmFtaWM6Ly9rM3k1Mmw3cWJ2MWZyeWlodWVhZHphYnRvNHF5ZmtmcTExa254M3N6ZnJkNnl6ODNjNWJienN1c3dmeXhvcWZwY2tkZXNjcmlwdGlvbng6VGhlIGxpc3Qgb2YgW1tWZXJpZmlhYmxlQ3JlZGVudGlhbF1dIHJlY2VpdmVkIGZyb20gaXNzdWVyc2ZoZWFkZXKjZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5MWZwNHMwbndkYXJoMHZhaHVzYXJwcG9zZ2V2eTBwZW1peWt5bWQyb3JkNnN3dGhhcmN3ZnVuaXF1ZXAvR055V05XaWNzc3Q4emZEa2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rbXhFSDN0UGpvNDd0SGpzVEZ6eWhLUVVwOUw1TlA1d3MxMld6U0o2TWs1RVg=',
        },
      ],
      schema: 'kjzl6cwe1jw14ah4u4u39w1cyf1gtb7lis7v3cihejajjktpw8wmgztxt8um1gu',
      version: 'k3y52l7qbv1fryi5lr5ucx2sbo0ccuxzb76m057t0fof8qzupwro0istqt2ydri80',
    },
  },
  tiles: {},
}
