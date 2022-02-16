import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { CredentialRegistry } from '../types/CredentialRegistry'

export type { CredentialRegistry } from '../types/CredentialRegistry'

export type ModelTypes = ModelTypeAliases<
  { CredentialRegistry: CredentialRegistry },
  { CredentialRegistry: 'CredentialRegistry' }
>

export const model: EncodedManagedModel = {
  schemas: {
    kjzl6cwe1jw148lc6u7v7bc0lrlmhvo17v79o9hot11rw9kon8sbb15od7kon4i: {
      alias: 'CredentialRegistry',
      commits: [
        {
          jws: {
            payload: 'AXESIIYwXZQR1259TOI0Un0q2b-V-FiCUVgQYbOfG4-DJGH8',
            signatures: [
              {
                signature:
                  'L9ztZaaAp7k-t2lZfVZgcxOjoS58okV_2ip8yH34vRsDo6ltFzuAYqkhVjy9OFUsZ_NaNFD7dW_6hgPPMa08DQ',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreieggbozieoxnz6uzyrukj6svwn7sx4frasrlaigdm47dohygjdb7q',
          },
          linkedBlock:
            'omRkYXRhp2R0eXBlZm9iamVjdGV0aXRsZXJDcmVkZW50aWFsUmVnaXN0cnlnJHNjaGVtYXgnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNy9zY2hlbWEjanByb3BlcnRpZXOiZmlzc3VlZKJkdHlwZWVhcnJheWVpdGVtc6FkJHJlZngaIy9kZWZpbml0aW9ucy9DZXJhbWljRG9jSWRnY2xhaW1lZKJkdHlwZWVhcnJheWVpdGVtc6FkJHJlZngaIy9kZWZpbml0aW9ucy9DZXJhbWljRG9jSWRrZGVmaW5pdGlvbnOhbENlcmFtaWNEb2NJZKNkdHlwZWZzdHJpbmdncGF0dGVybngcXmNlcmFtaWM6Ly8uKyhcP3ZlcnNpb249LispP2ltYXhMZW5ndGgYlmtkZXNjcmlwdGlvbniAVGhlIFtbQ3JlZGVudGlhbFJlZ2lzdHJ5XV0gaG9sZHMgdGhlIGxpc3Qgb2YgY2xhaW1lZCBbW0NsYWltZWRDcmVkZW50aWFsc11dIGFuZCB0aGUgW1tWZXJpZmlhYmxlQ3JlZGVudGlhbHNdXSBpc3N1ZWQgYnkgdGhlIHVzZXJ0YWRkaXRpb25hbFByb3BlcnRpZXP0ZmhlYWRlcqJmdW5pcXVlcG9sM2RPcThrTlZ0TmFUYVFrY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWA==',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1fry53qomvxw0lgas9rz56wnxvosjhsefgmdg339ahceg8d9xv38g00',
    },
    kjzl6cwe1jw1459ytvvntnowy1ii9tvxobbg5ri2fa4bkua4b2opf0shni5a0gr: {
      alias: 'ClaimedCredential',
      commits: [
        {
          jws: {
            payload: 'AXESIDUYnkqlFYH2vLev9OvskU6aag-UictjJbojG8oN48oT',
            signatures: [
              {
                signature:
                  'AfxAi31dud96L75ijgrsY35DMjjU3QulNjV5GoyupYdPyfn0di1MVLiWuy6KR8gfvXGeGRlOlx3Li33ySia1CA',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreibvdcpevjivqh3lzn5p6tv6zekotjva7fejznrslorddpfa3y6kcm',
          },
          linkedBlock:
            'omRkYXRhqGR0eXBlZm9iamVjdGV0aXRsZXFDbGFpbWVkQ3JlZGVudGlhbGckc2NoZW1heCdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNocmVxdWlyZWSCY2RpZGR0eXBlanByb3BlcnRpZXOmY2RpZKFkdHlwZWZzdHJpbmdkdHlwZaFkdHlwZWZzdHJpbmdldmFsdWWiZHR5cGVmb2JqZWN0anByb3BlcnRpZXOuZGNpdHmhZHR5cGVmc3RyaW5nZGRhdGWhZHR5cGVmc3RyaW5nZHRpbWWhZHR5cGVmc3RyaW5nZXZhbHVloWR0eXBlZnN0cmluZ2djb3VudHJ5oWR0eXBlZnN0cmluZ2dlbmREYXRloWR0eXBlZnN0cmluZ2lpbWFnZUlQRlOhZHR5cGVmc3RyaW5naWtlY2NhazI1NqFkdHlwZWZzdHJpbmdpc3RhcnREYXRloWR0eXBlZnN0cmluZ2pwb3N0YWxDb2RloWR0eXBlZnN0cmluZ2tkZXNjcmlwdGlvbqFkdHlwZWZzdHJpbmdsaXNzdWFuY2VEYXRloWR0eXBlZnN0cmluZ21pc3N1aW5nRW50aXR5oWR0eXBlZnN0cmluZ25leHBpcmF0aW9uRGF0ZaFkdHlwZWZzdHJpbmdpZW5jcnlwdGVkoWQkcmVmcSMvZGVmaW5pdGlvbnMvSldFanR5cGVTY2hlbWGhZHR5cGVmc3RyaW5ndXZlcmlmaWFibGVDcmVkZW50aWFsc6JkdHlwZWVhcnJheWVpdGVtc6FkJHJlZngaIy9kZWZpbml0aW9ucy9DZXJhbWljRG9jSWRrZGVmaW5pdGlvbnOiY0pXRaRkdHlwZWZvYmplY3RldGl0bGVjSldFaHJlcXVpcmVkhGlwcm90ZWN0ZWRiaXZqY2lwaGVydGV4dGN0YWdqcHJvcGVydGllc6ZiaXahZHR5cGVmc3RyaW5nY2FhZKFkdHlwZWZzdHJpbmdjdGFnoWR0eXBlZnN0cmluZ2lwcm90ZWN0ZWShZHR5cGVmc3RyaW5namNpcGhlcnRleHShZHR5cGVmc3RyaW5nanJlY2lwaWVudHOiZHR5cGVlYXJyYXllaXRlbXOjZHR5cGVmb2JqZWN0aHJlcXVpcmVkgmZoZWFkZXJtZW5jcnlwdGVkX2tleWpwcm9wZXJ0aWVzomZoZWFkZXKjZHR5cGVmb2JqZWN0aHJlcXVpcmVkg2NhbGdiaXZjdGFnanByb3BlcnRpZXOlYml2oWR0eXBlZnN0cmluZ2NhbGehZHR5cGVmc3RyaW5nY2Vwa6FkdHlwZWZvYmplY3Rja2lkoWR0eXBlZnN0cmluZ2N0YWehZHR5cGVmc3RyaW5nbWVuY3J5cHRlZF9rZXmhZHR5cGVmc3RyaW5nbENlcmFtaWNEb2NJZKNkdHlwZWZzdHJpbmdncGF0dGVybngcXmNlcmFtaWM6Ly8uKyhcP3ZlcnNpb249LispP2ltYXhMZW5ndGgYlmtkZXNjcmlwdGlvbniQQSBbW0NsYWltZWRDcmVkZW50aWFsXV0gcmVwcmVzZW50cyBhIHNwZWNpZmljLCBmYWN0dWFsbHktb3JpZW50ZWQgY2xhaW0gdGhhdCBjb3VsZCBiZSB0aGUgSWQgYW5kIENyZWRlbnRpYWxTdWJqZWN0IG9mIGEgW1tWZXJpZmlhYmxlQ3JlZGVudGlhbF1ddGFkZGl0aW9uYWxQcm9wZXJ0aWVz9GZoZWFkZXKiZnVuaXF1ZXBTRklQVVJjNkhmUTRpRkp5a2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rbXhFSDN0UGpvNDd0SGpzVEZ6eWhLUVVwOUw1TlA1d3MxMld6U0o2TWs1RVg=',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1frxhivoip5ewh6a2rlxwj3gwhewzkh8nyqc7bymr3oqtmlj51j7b40',
    },
    kjzl6cwe1jw14bl47yslap1tzinzmf4uurlpzuaja42c8bcgcmp4h6cdfes126z: {
      alias: 'VerifiableCredential',
      commits: [
        {
          jws: {
            payload: 'AXESIIvMmH2SzJGvT1yDoFMea7gWhT3K66Xccq6aeO_IcIyF',
            signatures: [
              {
                signature:
                  'iguiGZJxyLfum-MsBZOF6AEZ-nxqBEuwQQMc9H9y4Jv-AJZVxDpNcew97bEt9pG4HGcKuegft7_rkr18MOhlDw',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreielzsmh3ewmsgxu6xedubjr425yc2ct3sxluxohflu2pdx4q4emqu',
          },
          linkedBlock:
            'omRkYXRhqGR0eXBlZm9iamVjdGV0aXRsZXRWZXJpZmlhYmxlQ3JlZGVudGlhbGckc2NoZW1heCdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNocmVxdWlyZWSHaEBjb250ZXh0ZHR5cGViaWRmaXNzdWVycWNyZWRlbnRpYWxTdWJqZWN0cGNyZWRlbnRpYWxTY2hlbWFsaXNzdWFuY2VEYXRlanByb3BlcnRpZXOrYmlkoWQkcmVmeBojL2RlZmluaXRpb25zL0NlcmFtaWNEb2NJZGR0eXBlomR0eXBlZWFycmF5ZWl0ZW1zoWR0eXBlZnN0cmluZ2Vwcm9vZqNkdHlwZWZvYmplY3RocmVxdWlyZWSBZHR5cGVqcHJvcGVydGllc6dkdHlwZaFkdHlwZWZzdHJpbmdmZWlwNzEypGR0eXBlZm9iamVjdGhyZXF1aXJlZINmZG9tYWluZXR5cGVza3ByaW1hcnlUeXBlanByb3BlcnRpZXOjZXR5cGVzoWR0eXBlZm9iamVjdGZkb21haW6kZHR5cGVmb2JqZWN0aHJlcXVpcmVkg2djaGFpbklkZG5hbWVndmVyc2lvbmpwcm9wZXJ0aWVzpGRuYW1loWR0eXBlZnN0cmluZ2djaGFpbklkoWR0eXBlZ2ludGVnZXJndmVyc2lvbqFkdHlwZWZzdHJpbmdxdmVyaWZ5aW5nQ29udHJhY3ShZHR5cGVmc3RyaW5ndGFkZGl0aW9uYWxQcm9wZXJ0aWVz9GtwcmltYXJ5VHlwZaFkdHlwZWZzdHJpbmd0YWRkaXRpb25hbFByb3BlcnRpZXP0Z2NyZWF0ZWShZHR5cGVmc3RyaW5nanByb29mVmFsdWWhZHR5cGVmc3RyaW5nbHByb29mUHVycG9zZaFkdHlwZWZzdHJpbmdvZXRoZXJldW1BZGRyZXNzoWR0eXBlZnN0cmluZ3J2ZXJpZmljYXRpb25NZXRob2ShZHR5cGVmc3RyaW5nZmlzc3VlcqNkdHlwZWZvYmplY3RocmVxdWlyZWSBYmlkanByb3BlcnRpZXOiYmlkoWR0eXBlZnN0cmluZ29ldGhlcmV1bUFkZHJlc3OhZHR5cGVmc3RyaW5naEBjb250ZXh0omR0eXBlZWFycmF5ZWl0ZW1zoWR0eXBlZnN0cmluZ2hldmlkZW5jZaRkdHlwZWZvYmplY3RocmVxdWlyZWSBYmlkanByb3BlcnRpZXOmYmlkoWR0eXBlZnN0cmluZ2R0eXBlomR0eXBlZWFycmF5ZWl0ZW1zoWR0eXBlZnN0cmluZ2h2ZXJpZmllcqFkdHlwZWZzdHJpbmdvc3ViamVjdFByZXNlbmNloWR0eXBlZnN0cmluZ3Bkb2N1bWVudFByZXNlbmNloWR0eXBlZnN0cmluZ3BldmlkZW5jZURvY3VtZW50oWR0eXBlZnN0cmluZ3RhZGRpdGlvbmFsUHJvcGVydGllc/RsaXNzdWFuY2VEYXRloWR0eXBlZnN0cmluZ25leHBpcmF0aW9uRGF0ZaFkdHlwZWZzdHJpbmdwY3JlZGVudGlhbFNjaGVtYaRkdHlwZWZvYmplY3RocmVxdWlyZWSCYmlkZHR5cGVqcHJvcGVydGllc6JiaWShZHR5cGVmc3RyaW5nZHR5cGWhZHR5cGVmc3RyaW5ndGFkZGl0aW9uYWxQcm9wZXJ0aWVz9HBjcmVkZW50aWFsU3RhdHVzpGR0eXBlZm9iamVjdGhyZXF1aXJlZIFiaWRqcHJvcGVydGllc6JiaWShZHR5cGVmc3RyaW5nZHR5cGWhZHR5cGVmc3RyaW5ndGFkZGl0aW9uYWxQcm9wZXJ0aWVz9HFjcmVkZW50aWFsU3ViamVjdKNkdHlwZWZvYmplY3RocmVxdWlyZWSBYmlkanByb3BlcnRpZXOiYmlkoWR0eXBlZnN0cmluZ29ldGhlcmV1bUFkZHJlc3OhZHR5cGVmc3RyaW5na2RlZmluaXRpb25zoWxDZXJhbWljRG9jSWSjZHR5cGVmc3RyaW5nZ3BhdHRlcm54HF5jZXJhbWljOi8vLisoXD92ZXJzaW9uPS4rKT9pbWF4TGVuZ3RoGJZrZGVzY3JpcHRpb254dkEgW1tWZXJpZmlhYmxlQ3JlZGVudGlhbF1dIGlzIGZhY3QtY2hlY2tpbmcgcmV2aWV3L2F0dGVzdGF0aW9uIG9mIGNsYWltcyBtYWRlIChvciByZXBvcnRlZCkgaW4gYSBbW0NsYWltZWRDcmVkZW50aWFsXV10YWRkaXRpb25hbFByb3BlcnRpZXP0ZmhlYWRlcqJmdW5pcXVlcG1vK0RJVUFhZ2w5c1F5RndrY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWA==',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1fryqe60nfbg2518kqlbfmjesaguvex3wwmz4ok9tenu53zhl3bjlkw',
    },
  },
  definitions: {
    kjzl6cwe1jw14bl5xtcwuj0y6ge1mxc6tj9m3ahdiwjjpymy05kaajq99msu15r: {
      alias: 'credentialRegistry',
      commits: [
        {
          jws: {
            payload: 'AXESIGvo8KGxgegM4gRtImLIPbiGCq9RLAwgM2SBpt_UNRQ3',
            signatures: [
              {
                signature:
                  'in0cChLLUt4cYsDDD4XyHwgkICaeXJoCkJ7_zHR0HzLgN-WTRqUDGgF4dSGBxx5Bs_bQS51GOLvfF07frD64Cg',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreidl5dykdmmb5agoebdnejrmqpnyqyfk6ujmbqqdgzebu3p5iniug4',
          },
          linkedBlock:
            'omRkYXRho2RuYW1lcmNyZWRlbnRpYWxSZWdpc3RyeWZzY2hlbWF4S2NlcmFtaWM6Ly9rM3k1Mmw3cWJ2MWZyeTUzcW9tdnh3MGxnYXM5cno1NndueHZvc2poc2VmZ21kZzMzOWFoY2VnOGQ5eHYzOGcwMGtkZXNjcmlwdGlvbniAVGhlIFtbQ3JlZGVudGlhbFJlZ2lzdHJ5XV0gaG9sZHMgdGhlIGxpc3Qgb2YgY2xhaW1lZCBbW0NsYWltZWRDcmVkZW50aWFsc11dIGFuZCB0aGUgW1tWZXJpZmlhYmxlQ3JlZGVudGlhbHNdXSBpc3N1ZWQgYnkgdGhlIHVzZXJmaGVhZGVyo2ZzY2hlbWF4S2NlcmFtaWM6Ly9rM3k1Mmw3cWJ2MWZyeTFmcDRzMG53ZGFyaDB2YWh1c2FycHBvc2dldnkwcGVtaXlreW1kMm9yZDZzd3RoYXJjd2Z1bmlxdWVwb3hseDNzc3BuNldTeU9Gamtjb250cm9sbGVyc4F4OGRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVY',
        },
      ],
      schema: 'kjzl6cwe1jw148lc6u7v7bc0lrlmhvo17v79o9hot11rw9kon8sbb15od7kon4i',
      version: 'k3y52l7qbv1fryqei8grtl3ar1wjvn12oi10d3ejk6ff08mb5t3k970apwi51k8w0',
    },
  },
  tiles: {},
}
