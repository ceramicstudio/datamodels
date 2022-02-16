import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { CredentialRegistry } from '../types/CredentialRegistry'

export type { CredentialRegistry } from '../types/CredentialRegistry'

export type ModelTypes = ModelTypeAliases<
  { CredentialRegistry: CredentialRegistry },
  { CredentialRegistry: 'CredentialRegistry' }
>

export const model: EncodedManagedModel = {
  schemas: {
    kjzl6cwe1jw148unwzhc2ejruw4anr63ny396zj2xdxrvole59sy1rr6t81nsyl: {
      alias: 'CredentialRegistry',
      commits: [
        {
          jws: {
            payload: 'AXESIKnTwRnz0PABQ4u79F1ntA35YN5gSUmbbEAlVNFX91YS',
            signatures: [
              {
                signature:
                  'ThoYWbcZ7fZqPULWNSqjXWWSsED53bZwLoylvH_GVemKk_GcyzAykbE_Xap78Hd-nI-QDYBTjqL_aAszmtTQAg',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreifj2part46q6aauhc536rowpnan7fqn4ycjjgnwyqbfktivp52wci',
          },
          linkedBlock:
            'omRkYXRhp2R0eXBlZm9iamVjdGV0aXRsZXJDcmVkZW50aWFsUmVnaXN0cnlnJHNjaGVtYXgnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNy9zY2hlbWEjanByb3BlcnRpZXOiZmlzc3VlZKJkdHlwZWVhcnJheWVpdGVtc6FkJHJlZngaIy9kZWZpbml0aW9ucy9DZXJhbWljRG9jSWRnY2xhaW1lZKJkdHlwZWVhcnJheWVpdGVtc6FkJHJlZngaIy9kZWZpbml0aW9ucy9DZXJhbWljRG9jSWRrZGVmaW5pdGlvbnOhbENlcmFtaWNEb2NJZKNkdHlwZWZzdHJpbmdncGF0dGVybngcXmNlcmFtaWM6Ly8uKyhcP3ZlcnNpb249LispP2ltYXhMZW5ndGgYlmtkZXNjcmlwdGlvbniAVGhlIFtbQ3JlZGVudGlhbFJlZ2lzdHJ5XV0gaG9sZHMgdGhlIGxpc3Qgb2YgY2xhaW1lZCBbW0NsYWltZWRDcmVkZW50aWFsc11dIGFuZCB0aGUgW1tWZXJpZmlhYmxlQ3JlZGVudGlhbHNdXSBpc3N1ZWQgYnkgdGhlIHVzZXJ0YWRkaXRpb25hbFByb3BlcnRpZXP0ZmhlYWRlcqJmdW5pcXVlcDlrMDhBbXV5V0tEQmVkdHhrY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWA==',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1fry6y22kb9t3gm3oejsx7e2af5donotf469aw4lhpu4ldcft7t9xxc',
    },
    kjzl6cwe1jw148usfj2s43oqmrtto7erc63g5a7g91w8kgum6s05uaioxuo3joq: {
      alias: 'ClaimedCredential',
      commits: [
        {
          jws: {
            payload: 'AXESIBpaBi0Llrm8qODVZvtXhM-0xv-w_tB9a5PT8SB0VHHS',
            signatures: [
              {
                signature:
                  'P7na0nU0WJZ_eZfc_F6Iq7C5ddthKzDh7XXtI8eDOGCri1YigiH8DZaI5x0VoSBCkbNlhLnRLW1iOCLdD8oRBg',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreia2lidc2c4wxg6krygvm35vpbgpwtdp7mh62b6wxe6t6eqhivdr2i',
          },
          linkedBlock:
            'omRkYXRhqGR0eXBlZm9iamVjdGV0aXRsZXFDbGFpbWVkQ3JlZGVudGlhbGckc2NoZW1heCdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNocmVxdWlyZWSCY2RpZGR0eXBlanByb3BlcnRpZXOmY2RpZKFkdHlwZWZzdHJpbmdkdHlwZaFkdHlwZWZzdHJpbmdldmFsdWWiZHR5cGVmb2JqZWN0anByb3BlcnRpZXOuZGNpdHmhZHR5cGVmc3RyaW5nZGRhdGWhZHR5cGVmc3RyaW5nZHRpbWWhZHR5cGVmc3RyaW5nZXZhbHVloWR0eXBlZnN0cmluZ2djb3VudHJ5oWR0eXBlZnN0cmluZ2dlbmREYXRloWR0eXBlZnN0cmluZ2lpbWFnZUlQRlOhZHR5cGVmc3RyaW5naWtlY2NhazI1NqFkdHlwZWZzdHJpbmdpc3RhcnREYXRloWR0eXBlZnN0cmluZ2pwb3N0YWxDb2RloWR0eXBlZnN0cmluZ2tkZXNjcmlwdGlvbqFkdHlwZWZzdHJpbmdsaXNzdWFuY2VEYXRloWR0eXBlZnN0cmluZ21pc3N1aW5nRW50aXR5oWR0eXBlZnN0cmluZ25leHBpcmF0aW9uRGF0ZaFkdHlwZWZzdHJpbmdpZW5jcnlwdGVkoWQkcmVmcSMvZGVmaW5pdGlvbnMvSldFanR5cGVTY2hlbWGhZHR5cGVmc3RyaW5ndXZlcmlmaWFibGVDcmVkZW50aWFsc6JkdHlwZWVhcnJheWVpdGVtc6FkJHJlZngaIy9kZWZpbml0aW9ucy9DZXJhbWljRG9jSWRrZGVmaW5pdGlvbnOiY0pXRaRkdHlwZWZvYmplY3RldGl0bGVjSldFaHJlcXVpcmVkhGlwcm90ZWN0ZWRiaXZqY2lwaGVydGV4dGN0YWdqcHJvcGVydGllc6ZiaXahZHR5cGVmc3RyaW5nY2FhZKFkdHlwZWZzdHJpbmdjdGFnoWR0eXBlZnN0cmluZ2lwcm90ZWN0ZWShZHR5cGVmc3RyaW5namNpcGhlcnRleHShZHR5cGVmc3RyaW5nanJlY2lwaWVudHOiZHR5cGVlYXJyYXllaXRlbXOjZHR5cGVmb2JqZWN0aHJlcXVpcmVkgmZoZWFkZXJtZW5jcnlwdGVkX2tleWpwcm9wZXJ0aWVzomZoZWFkZXKjZHR5cGVmb2JqZWN0aHJlcXVpcmVkg2NhbGdiaXZjdGFnanByb3BlcnRpZXOlYml2oWR0eXBlZnN0cmluZ2NhbGehZHR5cGVmc3RyaW5nY2Vwa6FkdHlwZWZvYmplY3Rja2lkoWR0eXBlZnN0cmluZ2N0YWehZHR5cGVmc3RyaW5nbWVuY3J5cHRlZF9rZXmhZHR5cGVmc3RyaW5nbENlcmFtaWNEb2NJZKNkdHlwZWZzdHJpbmdncGF0dGVybngcXmNlcmFtaWM6Ly8uKyhcP3ZlcnNpb249LispP2ltYXhMZW5ndGgYlmtkZXNjcmlwdGlvbniQQSBbW0NsYWltZWRDcmVkZW50aWFsXV0gcmVwcmVzZW50cyBhIHNwZWNpZmljLCBmYWN0dWFsbHktb3JpZW50ZWQgY2xhaW0gdGhhdCBjb3VsZCBiZSB0aGUgSWQgYW5kIENyZWRlbnRpYWxTdWJqZWN0IG9mIGEgW1tWZXJpZmlhYmxlQ3JlZGVudGlhbF1ddGFkZGl0aW9uYWxQcm9wZXJ0aWVz9GZoZWFkZXKiZnVuaXF1ZXBrVTJwWkFySmZ4OHZWTEpRa2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rbXhFSDN0UGpvNDd0SGpzVEZ6eWhLUVVwOUw1TlA1d3MxMld6U0o2TWs1RVg=',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1fry6yy6fnrx67xdxw304oyejcitkkzkdh8xjtps755jesxcq3d7zsw',
    },
    kjzl6cwe1jw149djmy7aml0fw8ocu14jsg6a19ezzs8hk2kclfzf9iy4eavvdr6: {
      alias: 'VerifiableCredential',
      commits: [
        {
          jws: {
            payload: 'AXESIEE--HKLbLgi3ewgoaJBkzsdwEC9X34lPUXhmSx2kX1A',
            signatures: [
              {
                signature:
                  'QvOaZFOTo6zmE5iux-VwcOWkwD0sVIcAmz4UQdAYVzp_AaHKH1uX-ti77Q1duAtxj1BLLXmpsBVPHIgefft6BA',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreicbh34hfc3mxarn33baugredez3dxaebpk7pyst2rpbtewhnel5ia',
          },
          linkedBlock:
            'omRkYXRhqGR0eXBlZm9iamVjdGV0aXRsZXRWZXJpZmlhYmxlQ3JlZGVudGlhbGckc2NoZW1heCdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNocmVxdWlyZWSFYmlkZmlzc3VlcnFjcmVkZW50aWFsU3ViamVjdHBjcmVkZW50aWFsU2NoZW1hbGlzc3VhbmNlRGF0ZWpwcm9wZXJ0aWVzq2JpZKFkJHJlZngaIy9kZWZpbml0aW9ucy9DZXJhbWljRG9jSWRkdHlwZaJkdHlwZWVhcnJheWVpdGVtc6FkdHlwZWZzdHJpbmdlcHJvb2ajZHR5cGVmb2JqZWN0aHJlcXVpcmVkgWR0eXBlanByb3BlcnRpZXOnZHR5cGWhZHR5cGVmc3RyaW5nZmVpcDcxMqRkdHlwZWZvYmplY3RocmVxdWlyZWSDZmRvbWFpbmV0eXBlc2twcmltYXJ5VHlwZWpwcm9wZXJ0aWVzo2V0eXBlc6FkdHlwZWZvYmplY3RmZG9tYWlupGR0eXBlZm9iamVjdGhyZXF1aXJlZINnY2hhaW5JZGRuYW1lZ3ZlcnNpb25qcHJvcGVydGllc6RkbmFtZaFkdHlwZWZzdHJpbmdnY2hhaW5JZKFkdHlwZWdpbnRlZ2VyZ3ZlcnNpb26hZHR5cGVmc3RyaW5ncXZlcmlmeWluZ0NvbnRyYWN0oWR0eXBlZnN0cmluZ3RhZGRpdGlvbmFsUHJvcGVydGllc/RrcHJpbWFyeVR5cGWhZHR5cGVmc3RyaW5ndGFkZGl0aW9uYWxQcm9wZXJ0aWVz9GdjcmVhdGVkoWR0eXBlZnN0cmluZ2pwcm9vZlZhbHVloWR0eXBlZnN0cmluZ2xwcm9vZlB1cnBvc2WhZHR5cGVmc3RyaW5nb2V0aGVyZXVtQWRkcmVzc6FkdHlwZWZzdHJpbmdydmVyaWZpY2F0aW9uTWV0aG9koWR0eXBlZnN0cmluZ2Zpc3N1ZXKjZHR5cGVmb2JqZWN0aHJlcXVpcmVkgWJpZGpwcm9wZXJ0aWVzomJpZKFkdHlwZWZzdHJpbmdvZXRoZXJldW1BZGRyZXNzoWR0eXBlZnN0cmluZ2hAY29udGV4dKJkdHlwZWVhcnJheWVpdGVtc6FkdHlwZWZzdHJpbmdoZXZpZGVuY2WkZHR5cGVmb2JqZWN0aHJlcXVpcmVkgWJpZGpwcm9wZXJ0aWVzpmJpZKFkdHlwZWZzdHJpbmdkdHlwZaJkdHlwZWVhcnJheWVpdGVtc6FkdHlwZWZzdHJpbmdodmVyaWZpZXKhZHR5cGVmc3RyaW5nb3N1YmplY3RQcmVzZW5jZaFkdHlwZWZzdHJpbmdwZG9jdW1lbnRQcmVzZW5jZaFkdHlwZWZzdHJpbmdwZXZpZGVuY2VEb2N1bWVudKFkdHlwZWZzdHJpbmd0YWRkaXRpb25hbFByb3BlcnRpZXP0bGlzc3VhbmNlRGF0ZaFkdHlwZWZzdHJpbmduZXhwaXJhdGlvbkRhdGWhZHR5cGVmc3RyaW5ncGNyZWRlbnRpYWxTY2hlbWGkZHR5cGVmb2JqZWN0aHJlcXVpcmVkgWJpZGpwcm9wZXJ0aWVzomJpZKFkdHlwZWZzdHJpbmdkdHlwZaFkdHlwZWZzdHJpbmd0YWRkaXRpb25hbFByb3BlcnRpZXP0cGNyZWRlbnRpYWxTdGF0dXOkZHR5cGVmb2JqZWN0aHJlcXVpcmVkgWJpZGpwcm9wZXJ0aWVzomJpZKFkdHlwZWZzdHJpbmdkdHlwZaFkdHlwZWZzdHJpbmd0YWRkaXRpb25hbFByb3BlcnRpZXP0cWNyZWRlbnRpYWxTdWJqZWN0o2R0eXBlZm9iamVjdGhyZXF1aXJlZIFiaWRqcHJvcGVydGllc6JiaWShZHR5cGVmc3RyaW5nb2V0aGVyZXVtQWRkcmVzc6FkdHlwZWZzdHJpbmdrZGVmaW5pdGlvbnOhbENlcmFtaWNEb2NJZKNkdHlwZWZzdHJpbmdncGF0dGVybngcXmNlcmFtaWM6Ly8uKyhcP3ZlcnNpb249LispP2ltYXhMZW5ndGgYlmtkZXNjcmlwdGlvbnh2QSBbW1ZlcmlmaWFibGVDcmVkZW50aWFsXV0gaXMgZmFjdC1jaGVja2luZyByZXZpZXcvYXR0ZXN0YXRpb24gb2YgY2xhaW1zIG1hZGUgKG9yIHJlcG9ydGVkKSBpbiBhIFtbQ2xhaW1lZENyZWRlbnRpYWxdXXRhZGRpdGlvbmFsUHJvcGVydGllc/RmaGVhZGVyomZ1bmlxdWVwRnNwbm1tVWZsZit1TW9hSGtjb250cm9sbGVyc4F4OGRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVY',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1fryaobn77vklf519p79k0cqb0ncyynygscuq8pkhnwjqqn9pen5t6o',
    },
  },
  definitions: {
    kjzl6cwe1jw14ahy87385gtdo2tv5cazozo115x6o7yk756ywpti7zvsmtut62a: {
      alias: 'credentialRegistry',
      commits: [
        {
          jws: {
            payload: 'AXESIOOUcb4AWtY0-3DY6UHTetEQkB2cJWZHeg6FWn9M_Acs',
            signatures: [
              {
                signature:
                  '8UqU_OcMJUSfYsYCpHypIhUbUJoI91E-W3Hscmc2-IMhfnVR3rKpeYzRm3odqBamM69WIQYG3aJ79ayxfAcvDg',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreihdsry34ac22y2pw4gy5fa5g6wrccib3hbfmzdxuduflj7uz7ahfq',
          },
          linkedBlock:
            'omRkYXRho2RuYW1lcmNyZWRlbnRpYWxSZWdpc3RyeWZzY2hlbWF4S2NlcmFtaWM6Ly9rM3k1Mmw3cWJ2MWZyeTZ5MjJrYjl0M2dtM29lanN4N2UyYWY1ZG9ub3RmNDY5YXc0bGhwdTRsZGNmdDd0OXh4Y2tkZXNjcmlwdGlvbniAVGhlIFtbQ3JlZGVudGlhbFJlZ2lzdHJ5XV0gaG9sZHMgdGhlIGxpc3Qgb2YgY2xhaW1lZCBbW0NsYWltZWRDcmVkZW50aWFsc11dIGFuZCB0aGUgW1tWZXJpZmlhYmxlQ3JlZGVudGlhbHNdXSBpc3N1ZWQgYnkgdGhlIHVzZXJmaGVhZGVyo2ZzY2hlbWF4S2NlcmFtaWM6Ly9rM3k1Mmw3cWJ2MWZyeTFmcDRzMG53ZGFyaDB2YWh1c2FycHBvc2dldnkwcGVtaXlreW1kMm9yZDZzd3RoYXJjd2Z1bmlxdWVwTlU1cGovaXh3ZWp3cStHamtjb250cm9sbGVyc4F4OGRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVY',
        },
      ],
      schema: 'kjzl6cwe1jw148unwzhc2ejruw4anr63ny396zj2xdxrvole59sy1rr6t81nsyl',
      version: 'k3y52l7qbv1fryinneaexyvkx784dhzi5tpmvca3zg8lrmsxk8nltkv63mcb3f474',
    },
    kjzl6cwe1jw147ow2npzmik36kq8xtdf05rl8z1zc3pgdo5cjf1e4vdabcof9vy: {
      alias: 'claimedCredential',
      commits: [
        {
          jws: {
            payload: 'AXESIO7E8lKd1ZO90RI5b60IubyZkPNz5a50Xs1BsrYwWv27',
            signatures: [
              {
                signature:
                  'ePCPfIzEP2PA9gYdMP4LfJoV5ms1o2KukKBiPBpf_sN0Vprhg83GD4TPEUrsiO0p_FRnOcuOFbJxSV9wCAu4Aw',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreihoytzffhovso65cerzn6wqron4tgipg47fvz2f5tkbwk3dawx5xm',
          },
          linkedBlock:
            'omRkYXRho2RuYW1lcWNsYWltZWRDcmVkZW50aWFsZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5Nnl5NmZucng2N3hkeHczMDRveWVqY2l0a2t6a2RoOHhqdHBzNzU1amVzeGNxM2Q3enN3a2Rlc2NyaXB0aW9ueIlBIFtbQ2xhaW1lZENyZWRlbnRpYWxdXSByZXByZXNlbnRzIGEgc3BlY2lmaWMsIGZhY3R1YWxseS1vcmllbnRlZCBjbGFpbSB0aGF0IGNvdWxkIGJlIHRoZSBDcmVkZW50aWFsU3ViamVjdCBpbiBhIFtbVmVyaWZpYWJsZUNyZWRlbnRpYWxdXWZoZWFkZXKjZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5MWZwNHMwbndkYXJoMHZhaHVzYXJwcG9zZ2V2eTBwZW1peWt5bWQyb3JkNnN3dGhhcmN3ZnVuaXF1ZXBOeWk3Ky9SNGdCSFFJUVlia2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rbXhFSDN0UGpvNDd0SGpzVEZ6eWhLUVVwOUw1TlA1d3MxMld6U0o2TWs1RVg=',
        },
      ],
      schema: 'kjzl6cwe1jw148usfj2s43oqmrtto7erc63g5a7g91w8kgum6s05uaioxuo3joq',
      version: 'k3y52l7qbv1frxyp02wotc3yumrenkgvep5073ta3a2d0h7q162xwin2hcq5omb5s',
    },
    kjzl6cwe1jw14atab4atyd9guqws2v19nfq00fle7c135f7ijlfj2zd3qx3psup: {
      alias: 'verifiableCredential',
      commits: [
        {
          jws: {
            payload: 'AXESIMOQcc5UoOl15gaxHM9bydwLh8Pskys659_gzX6rS4-r',
            signatures: [
              {
                signature:
                  'v9LHPq_PiTljGcJCnrZyBHIHpd372GI9piMQavbU-aAAiK6NMxwx_rebXJK2f3cYErZZretov6jO-Xw8ID4MAw',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreigdsby44vfa5f26mbvrdthvxso4bod4h3etfm5opx7azv7kws4pvm',
          },
          linkedBlock:
            'omRkYXRho2RuYW1ldHZlcmlmaWFibGVDcmVkZW50aWFsZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5YW9ibjc3dmtsZjUxOXA3OWswY3FiMG5jeXlueWdzY3VxOHBraG53anFxbjlwZW41dDZva2Rlc2NyaXB0aW9ueHZBIFtbVmVyaWZpYWJsZUNyZWRlbnRpYWxdXSBpcyBmYWN0LWNoZWNraW5nIHJldmlldy9hdHRlc3RhdGlvbiBvZiBjbGFpbXMgbWFkZSAob3IgcmVwb3J0ZWQpIGluIGEgW1tDbGFpbWVkQ3JlZGVudGlhbF1dZmhlYWRlcqNmc2NoZW1heEtjZXJhbWljOi8vazN5NTJsN3FidjFmcnkxZnA0czBud2RhcmgwdmFodXNhcnBwb3NnZXZ5MHBlbWl5a3ltZDJvcmQ2c3d0aGFyY3dmdW5pcXVlcHhvbVhlRjhnNVFNQTR2R3drY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWA==',
        },
      ],
      schema: 'kjzl6cwe1jw149djmy7aml0fw8ocu14jsg6a19ezzs8hk2kclfzf9iy4eavvdr6',
      version: 'k3y52l7qbv1frykw9b2l10ebbund3ocp0mnsw32w505jqek5fvcefp7h6nfefh69s',
    },
  },
  tiles: {},
}
