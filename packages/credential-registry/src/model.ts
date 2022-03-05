import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { ClaimedCredential } from '../types/ClaimedCredential'
export type { ClaimedCredential } from '../types/ClaimedCredential'

import type { ClaimedCredentials } from '../types/ClaimedCredentials'
export type { ClaimedCredentials } from '../types/ClaimedCredentials'

import type { VerifiableCredential } from '../types/VerifiableCredential'
export type { VerifiableCredential } from '../types/VerifiableCredential'

import type { IssuedCredentials } from '../types/IssuedCredentials'
export type { IssuedCredentials } from '../types/IssuedCredentials'

export type ModelTypes = ModelTypeAliases<
  {
    ClaimedCredential: ClaimedCredential
    ClaimedCredentials: ClaimedCredentials
    VerifiableCredential: VerifiableCredential
    IssuedCredentials: IssuedCredentials
  },
  { issuedCredentials: 'IssuedCredentials'; claimedCredentials: 'ClaimedCredentials' }
>

export const model: EncodedManagedModel = {
  schemas: {
    kjzl6cwe1jw145nlanhsg1c3uig9rlbqmr7njoob5qlr3dct7ck9nhjm9nb4b7i: {
      alias: 'ClaimedCredentials',
      commits: [
        {
          jws: {
            payload: 'AXESICa8K9Wu0DxeWFyuOfitoexf0W5nsS_2LZl7UXL331IE',
            signatures: [
              {
                signature:
                  'M07GkRENMwb4M6Zt435e3FronCwRIfq8evrxNvzroDv_KHiEVvjuIim--W3xcbgT9GU4hwAcQvI2fRd5Z5VVBQ',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreibgxqv5llwqhrpfqxfohh4k3ipml7iw4z5rf73c3gl3kfzppx2saq',
          },
          linkedBlock:
            'omRkYXRhp2R0eXBlZm9iamVjdGV0aXRsZXJDbGFpbWVkQ3JlZGVudGlhbHNnJHNjaGVtYXgnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNy9zY2hlbWEjanByb3BlcnRpZXOhZ2NsYWltZWSiZHR5cGVlYXJyYXllaXRlbXOhZCRyZWZ4GiMvZGVmaW5pdGlvbnMvQ2VyYW1pY0RvY0lka2RlZmluaXRpb25zoWxDZXJhbWljRG9jSWSjZHR5cGVmc3RyaW5nZ3BhdHRlcm54HF5jZXJhbWljOi8vLisoXD92ZXJzaW9uPS4rKT9pbWF4TGVuZ3RoGJZrZGVzY3JpcHRpb254VlRoZSBbW0NsYWltZWRDcmVkZW50aWFsc11dIGhvbGRzIHRoZSBsaXN0IG9mIGNsYWltZWQgW1tDbGFpbWVkQ3JlZGVudGlhbF1dIGJ5IHRoZSB1c2VydGFkZGl0aW9uYWxQcm9wZXJ0aWVz9GZoZWFkZXKiZnVuaXF1ZXB2UkhpZVNFZUsveE9TTTlya2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rbXhFSDN0UGpvNDd0SGpzVEZ6eWhLUVVwOUw1TlA1d3MxMld6U0o2TWs1RVg=',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1frxk7rfr2ia1i3cz7pg7nhdtiffzgvct6onyz3o9c4n0riclr2npc0',
    },
    kjzl6cwe1jw146ron0wzdmn8lqe060hcjsn2c86n6wtukwuy30se82w6yy7jvty: {
      alias: 'ClaimedCredential',
      commits: [
        {
          jws: {
            payload: 'AXESIP1y7r0rATvTcTugv8jSJ48-Mth1qGixbbYMeyVIT2HV',
            signatures: [
              {
                signature:
                  '7-StgIE-13FlD2B_dGkD8_20ISJW-m8ZcsivseFbfLLxwFZ4gBPXNkIPpzMIMMeBkMWfei0HDPJH1Rv2qBUaDA',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreih5olxl2kybhpjxco5ax7enej4phyznq5nincyw3nqmpmsuqt3b2u',
          },
          linkedBlock:
            'omRkYXRhqGR0eXBlZm9iamVjdGV0aXRsZXFDbGFpbWVkQ3JlZGVudGlhbGckc2NoZW1heCdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNocmVxdWlyZWSCY2RpZGR0eXBlanByb3BlcnRpZXOmY2RpZKFkdHlwZWZzdHJpbmdkdHlwZaFkdHlwZWZzdHJpbmdldmFsdWWiZHR5cGVmb2JqZWN0anByb3BlcnRpZXOuZGNpdHmhZHR5cGVmc3RyaW5nZGRhdGWhZHR5cGVmc3RyaW5nZHRpbWWhZHR5cGVmc3RyaW5nZXZhbHVloWR0eXBlZnN0cmluZ2djb3VudHJ5oWR0eXBlZnN0cmluZ2dlbmREYXRloWR0eXBlZnN0cmluZ2lpbWFnZUlQRlOhZHR5cGVmc3RyaW5naWtlY2NhazI1NqFkdHlwZWZzdHJpbmdpc3RhcnREYXRloWR0eXBlZnN0cmluZ2pwb3N0YWxDb2RloWR0eXBlZnN0cmluZ2tkZXNjcmlwdGlvbqFkdHlwZWZzdHJpbmdsaXNzdWFuY2VEYXRloWR0eXBlZnN0cmluZ21pc3N1aW5nRW50aXR5oWR0eXBlZnN0cmluZ25leHBpcmF0aW9uRGF0ZaFkdHlwZWZzdHJpbmdpZW5jcnlwdGVkoWQkcmVmcSMvZGVmaW5pdGlvbnMvSldFanR5cGVTY2hlbWGhZHR5cGVmc3RyaW5ndXZlcmlmaWFibGVDcmVkZW50aWFsc6JkdHlwZWVhcnJheWVpdGVtc6FkJHJlZngaIy9kZWZpbml0aW9ucy9DZXJhbWljRG9jSWRrZGVmaW5pdGlvbnOiY0pXRaRkdHlwZWZvYmplY3RldGl0bGVjSldFaHJlcXVpcmVkhGlwcm90ZWN0ZWRiaXZqY2lwaGVydGV4dGN0YWdqcHJvcGVydGllc6ZiaXahZHR5cGVmc3RyaW5nY2FhZKFkdHlwZWZzdHJpbmdjdGFnoWR0eXBlZnN0cmluZ2lwcm90ZWN0ZWShZHR5cGVmc3RyaW5namNpcGhlcnRleHShZHR5cGVmc3RyaW5nanJlY2lwaWVudHOiZHR5cGVlYXJyYXllaXRlbXOjZHR5cGVmb2JqZWN0aHJlcXVpcmVkgmZoZWFkZXJtZW5jcnlwdGVkX2tleWpwcm9wZXJ0aWVzomZoZWFkZXKjZHR5cGVmb2JqZWN0aHJlcXVpcmVkg2NhbGdiaXZjdGFnanByb3BlcnRpZXOlYml2oWR0eXBlZnN0cmluZ2NhbGehZHR5cGVmc3RyaW5nY2Vwa6FkdHlwZWZvYmplY3Rja2lkoWR0eXBlZnN0cmluZ2N0YWehZHR5cGVmc3RyaW5nbWVuY3J5cHRlZF9rZXmhZHR5cGVmc3RyaW5nbENlcmFtaWNEb2NJZKNkdHlwZWZzdHJpbmdncGF0dGVybngcXmNlcmFtaWM6Ly8uKyhcP3ZlcnNpb249LispP2ltYXhMZW5ndGgYlmtkZXNjcmlwdGlvbniQQSBbW0NsYWltZWRDcmVkZW50aWFsXV0gcmVwcmVzZW50cyBhIHNwZWNpZmljLCBmYWN0dWFsbHktb3JpZW50ZWQgY2xhaW0gdGhhdCBjb3VsZCBiZSB0aGUgSWQgYW5kIENyZWRlbnRpYWxTdWJqZWN0IG9mIGEgW1tWZXJpZmlhYmxlQ3JlZGVudGlhbF1ddGFkZGl0aW9uYWxQcm9wZXJ0aWVz9GZoZWFkZXKiZnVuaXF1ZXBHV1pmZTlRTy9VWFJrbmkza2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rbXhFSDN0UGpvNDd0SGpzVEZ6eWhLUVVwOUw1TlA1d3MxMld6U0o2TWs1RVg=',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1frxs4v7qijkx196jnl6rfd8ro0my78x5g9gpo2dhlx5gkxkj9pecxs',
    },
    kjzl6cwe1jw148k3gzvxpacvbg42asrx9g7b1ata17wrxc1s2pl8zf0eoyfbxef: {
      alias: 'IssuedCredentials',
      commits: [
        {
          jws: {
            payload: 'AXESIDSjNZpbwuFhU-ixfWLsXSuK0_JNBmNuKpBqpYMA1qvC',
            signatures: [
              {
                signature:
                  'oi96WOuI4mzDxRx9PvF0t-PMBq-Bylmxuhy3AgbLCbo82APAfCjg0FCmWYc1diw1i4xd2weKukhMRtBNLDQ1AA',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreibuum2zuw6c4fqvh2frpvroyxjlrlj7etigmnxcvedkuwbqbvvlyi',
          },
          linkedBlock:
            'omRkYXRhp2R0eXBlZm9iamVjdGV0aXRsZXFJc3N1ZWRDcmVkZW50aWFsc2ckc2NoZW1heCdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNqcHJvcGVydGllc6FmaXNzdWVkomR0eXBlZWFycmF5ZWl0ZW1zoWQkcmVmeBojL2RlZmluaXRpb25zL0NlcmFtaWNEb2NJZGtkZWZpbml0aW9uc6FsQ2VyYW1pY0RvY0lko2R0eXBlZnN0cmluZ2dwYXR0ZXJueBxeY2VyYW1pYzovLy4rKFw/dmVyc2lvbj0uKyk/aW1heExlbmd0aBiWa2Rlc2NyaXB0aW9ueFdUaGUgW1tJc3N1ZWRDcmVkZW50aWFsc11dIGhvbGRzIHRoZSBsaXN0IG9mIFtbVmVyaWZpYWJsZUNyZWRlbnRpYWxdXSBpc3N1ZWQgYnkgdGhlIHVzZXJ0YWRkaXRpb25hbFByb3BlcnRpZXP0ZmhlYWRlcqJmdW5pcXVlcHdsOEhSQ3h0SDdBZEtPWmdrY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWA==',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1fry4uwov73ntnipekwcsmkj77yh8w7co92l1onn9z3vuqwhgt0tiio',
    },
    kjzl6cwe1jw14abbdp95m0kw9vviof94crh0ilpnflsk4zwwzqbhi9sbjy5opcv: {
      alias: 'VerifiableCredential',
      commits: [
        {
          jws: {
            payload: 'AXESILnzCLTlHiXSol4oweda7FfYbC8hWs22NceUBA1Aq3hd',
            signatures: [
              {
                signature:
                  'LhE_kP4Ayg-fXIO9dDt2CPV_r4nK3oVroaOe8eLRzE5LJAjXyN6Us1gxu_LITl6JTIrvQ6Os7soUZ8BuIswsCg',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreifz6meljzi6exjkexriyhtvv3cx3bwc6ik2zw3dlr4uaqgubk3ylu',
          },
          linkedBlock:
            'omRkYXRhqGR0eXBlZm9iamVjdGV0aXRsZXRWZXJpZmlhYmxlQ3JlZGVudGlhbGckc2NoZW1heCdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNocmVxdWlyZWSHaEBjb250ZXh0ZHR5cGViaWRmaXNzdWVycWNyZWRlbnRpYWxTdWJqZWN0cGNyZWRlbnRpYWxTY2hlbWFsaXNzdWFuY2VEYXRlanByb3BlcnRpZXOrYmlkoWQkcmVmeBojL2RlZmluaXRpb25zL0NlcmFtaWNEb2NJZGR0eXBlomR0eXBlZWFycmF5ZWl0ZW1zoWR0eXBlZnN0cmluZ2Vwcm9vZqNkdHlwZWZvYmplY3RocmVxdWlyZWSBZHR5cGVqcHJvcGVydGllc6dkdHlwZaFkdHlwZWZzdHJpbmdmZWlwNzEypGR0eXBlZm9iamVjdGhyZXF1aXJlZINmZG9tYWluZXR5cGVza3ByaW1hcnlUeXBlanByb3BlcnRpZXOjZXR5cGVzoWR0eXBlZm9iamVjdGZkb21haW6kZHR5cGVmb2JqZWN0aHJlcXVpcmVkg2djaGFpbklkZG5hbWVndmVyc2lvbmpwcm9wZXJ0aWVzpGRuYW1loWR0eXBlZnN0cmluZ2djaGFpbklkoWR0eXBlZ2ludGVnZXJndmVyc2lvbqFkdHlwZWZzdHJpbmdxdmVyaWZ5aW5nQ29udHJhY3ShZHR5cGVmc3RyaW5ndGFkZGl0aW9uYWxQcm9wZXJ0aWVz9GtwcmltYXJ5VHlwZaFkdHlwZWZzdHJpbmd0YWRkaXRpb25hbFByb3BlcnRpZXP0Z2NyZWF0ZWShZHR5cGVmc3RyaW5nanByb29mVmFsdWWhZHR5cGVmc3RyaW5nbHByb29mUHVycG9zZaFkdHlwZWZzdHJpbmdvZXRoZXJldW1BZGRyZXNzoWR0eXBlZnN0cmluZ3J2ZXJpZmljYXRpb25NZXRob2ShZHR5cGVmc3RyaW5nZmlzc3VlcqNkdHlwZWZvYmplY3RocmVxdWlyZWSBYmlkanByb3BlcnRpZXOiYmlkoWR0eXBlZnN0cmluZ29ldGhlcmV1bUFkZHJlc3OhZHR5cGVmc3RyaW5naEBjb250ZXh0omR0eXBlZWFycmF5ZWl0ZW1zoWR0eXBlZnN0cmluZ2hldmlkZW5jZaRkdHlwZWZvYmplY3RocmVxdWlyZWSBYmlkanByb3BlcnRpZXOmYmlkoWR0eXBlZnN0cmluZ2R0eXBlomR0eXBlZWFycmF5ZWl0ZW1zoWR0eXBlZnN0cmluZ2h2ZXJpZmllcqFkdHlwZWZzdHJpbmdvc3ViamVjdFByZXNlbmNloWR0eXBlZnN0cmluZ3Bkb2N1bWVudFByZXNlbmNloWR0eXBlZnN0cmluZ3BldmlkZW5jZURvY3VtZW50oWR0eXBlZnN0cmluZ3RhZGRpdGlvbmFsUHJvcGVydGllc/RsaXNzdWFuY2VEYXRloWR0eXBlZnN0cmluZ25leHBpcmF0aW9uRGF0ZaFkdHlwZWZzdHJpbmdwY3JlZGVudGlhbFNjaGVtYaRkdHlwZWZvYmplY3RocmVxdWlyZWSCYmlkZHR5cGVqcHJvcGVydGllc6JiaWShZHR5cGVmc3RyaW5nZHR5cGWhZHR5cGVmc3RyaW5ndGFkZGl0aW9uYWxQcm9wZXJ0aWVz9HBjcmVkZW50aWFsU3RhdHVzpGR0eXBlZm9iamVjdGhyZXF1aXJlZIFiaWRqcHJvcGVydGllc6JiaWShZHR5cGVmc3RyaW5nZHR5cGWhZHR5cGVmc3RyaW5ndGFkZGl0aW9uYWxQcm9wZXJ0aWVz9HFjcmVkZW50aWFsU3ViamVjdKNkdHlwZWZvYmplY3RocmVxdWlyZWSBYmlkanByb3BlcnRpZXOiYmlkoWR0eXBlZnN0cmluZ29ldGhlcmV1bUFkZHJlc3OhZHR5cGVmc3RyaW5na2RlZmluaXRpb25zoWxDZXJhbWljRG9jSWSjZHR5cGVmc3RyaW5nZ3BhdHRlcm54HF5jZXJhbWljOi8vLisoXD92ZXJzaW9uPS4rKT9pbWF4TGVuZ3RoGJZrZGVzY3JpcHRpb254dkEgW1tWZXJpZmlhYmxlQ3JlZGVudGlhbF1dIGlzIGZhY3QtY2hlY2tpbmcgcmV2aWV3L2F0dGVzdGF0aW9uIG9mIGNsYWltcyBtYWRlIChvciByZXBvcnRlZCkgaW4gYSBbW0NsYWltZWRDcmVkZW50aWFsXV10YWRkaXRpb25hbFByb3BlcnRpZXP0ZmhlYWRlcqJmdW5pcXVlcDRKclRiYVJXYmtCaHpxT3BrY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWA==',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1fryhcgxfl3wk4liao4toguyrczoaeemyz37je2m35ohxle5uwfobgg',
    },
  },
  definitions: {
    kjzl6cwe1jw145z22qes9l3dy9wrmnuirtl4ku3q8of3b4yuije4kw6xwxuig36: {
      alias: 'claimedCredentials',
      commits: [
        {
          jws: {
            payload: 'AXESIAA1sb51P8_3p5pHKiHS9OmfT7DIIhK4CLgHuumZmYjA',
            signatures: [
              {
                signature:
                  '532ixOPjb6FsyUZS2bE-B2v4O3fqkEAzH43T-4qlnhAAjhTZvdBuhKXGDhXjv30zh3_tM0qW3rDX4PDx5I4uBw',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreiaagwy345j7z732pgshfiq5f5hjt5h3bsbcck4aroahxluztgmiya',
          },
          linkedBlock:
            'omRkYXRho2RuYW1lcmNsYWltZWRDcmVkZW50aWFsc2ZzY2hlbWF4S2NlcmFtaWM6Ly9rM3k1Mmw3cWJ2MWZyeGs3cmZyMmlhMWkzY3o3cGc3bmhkdGlmZnpndmN0Nm9ueXozbzljNG4wcmljbHIybnBjMGtkZXNjcmlwdGlvbnhWVGhlIFtbQ2xhaW1lZENyZWRlbnRpYWxzXV0gaG9sZHMgdGhlIGxpc3Qgb2YgY2xhaW1lZCBbW0NsYWltZWRDcmVkZW50aWFsXV0gYnkgdGhlIHVzZXJmaGVhZGVyo2ZzY2hlbWF4S2NlcmFtaWM6Ly9rM3k1Mmw3cWJ2MWZyeTFmcDRzMG53ZGFyaDB2YWh1c2FycHBvc2dldnkwcGVtaXlreW1kMm9yZDZzd3RoYXJjd2Z1bmlxdWVwQVloZGR6eS94UHRmT0NEeWtjb250cm9sbGVyc4F4OGRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVY',
        },
      ],
      schema: 'kjzl6cwe1jw145nlanhsg1c3uig9rlbqmr7njoob5qlr3dct7ck9nhjm9nb4b7i',
      version: 'k3y52l7qbv1frxmharft506037qh0h5l1hue8k62ilpnbj7bsztwgkkxd68oz6eio',
    },
    kjzl6cwe1jw147npvfa7l4aeoc27sxtk0i15e4x53q3i4nfvdcrbpg9drnso5pz: {
      alias: 'issuedCredentials',
      commits: [
        {
          jws: {
            payload: 'AXESIBOIXeDBJx3bVhOxdC6WZo4ficGLV3oVo-VONSGQkCRA',
            signatures: [
              {
                signature:
                  'ghQ7GKHd-sX6UtsnwDKpct6Gihp-0BGp0XakhXazmch9bQS_GhxyWngh8SjzeEVboIc12K4oCp8GJJbv1IRlAA',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreiatrbo6bqjhdxnvme5roqxjmzuod6e4dc2xpik2hzkoguqzbebeia',
          },
          linkedBlock:
            'omRkYXRho2RuYW1lcWlzc3VlZENyZWRlbnRpYWxzZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5NHV3b3Y3M250bmlwZWt3Y3Nta2o3N3loOHc3Y285Mmwxb25uOXozdnVxd2hndDB0aWlva2Rlc2NyaXB0aW9ueFdUaGUgW1tJc3N1ZWRDcmVkZW50aWFsc11dIGhvbGRzIHRoZSBsaXN0IG9mIFtbVmVyaWZpYWJsZUNyZWRlbnRpYWxdXSBpc3N1ZWQgYnkgdGhlIHVzZXJmaGVhZGVyo2ZzY2hlbWF4S2NlcmFtaWM6Ly9rM3k1Mmw3cWJ2MWZyeTFmcDRzMG53ZGFyaDB2YWh1c2FycHBvc2dldnkwcGVtaXlreW1kMm9yZDZzd3RoYXJjd2Z1bmlxdWVwYkd1Yk0yYXNnT2cwbUo0Qmtjb250cm9sbGVyc4F4OGRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVY',
        },
      ],
      schema: 'kjzl6cwe1jw148k3gzvxpacvbg42asrx9g7b1ata17wrxc1s2pl8zf0eoyfbxef',
      version: 'k3y52l7qbv1frxygnzgoly6i0d1rrhsi6bk86cizoahkwx2ov2yqb8zmpwp7vsoow',
    },
  },
  tiles: {},
}
