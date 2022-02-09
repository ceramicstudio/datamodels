import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { CredentialRegistry } from '../types/CredentialRegistry'

export type { CredentialRegistry } from '../types/CredentialRegistry'

export type ModelTypes = ModelTypeAliases<
  { CredentialRegistry: CredentialRegistry },
  { CredentialRegistry: 'CredentialRegistry' }
>

export const model: EncodedManagedModel = {
  schemas: {
    kjzl6cwe1jw14bju676vm4yvhieo8zzpk9r7ek8k6mvty0svsbg46455lob9d8d: {
      alias: 'CredentialRegistry',
      commits: [
        {
          jws: {
            payload: 'AXESIIE1riLbNl5SRstS3ifSk99ZHGOHA8jFJWGWarhkgbLc',
            signatures: [
              {
                signature:
                  '9ZLWxbY3vbMaGZZ2Ymkww4zdFMlf6ZMWW2xnb0JvDKqtohnwEkR_zfqq2kNPY7cgQtSi87LahLC6zWzzNUkLBA',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreiebgwxcfwzwlzjens2s3yt5fe67leoghbydzdcskymwnk4gjans3q',
          },
          linkedBlock:
            'omRkYXRhp2R0eXBlZm9iamVjdGV0aXRsZXJDcmVkZW50aWFsUmVnaXN0cnlnJHNjaGVtYXgnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNy9zY2hlbWEjanByb3BlcnRpZXOiZmlzc3VlZKJkdHlwZWVhcnJheWVpdGVtc6FkJHJlZngaIy9kZWZpbml0aW9ucy9DZXJhbWljRG9jSWRnY2xhaW1lZKJkdHlwZWVhcnJheWVpdGVtc6FkJHJlZngaIy9kZWZpbml0aW9ucy9DZXJhbWljRG9jSWRrZGVmaW5pdGlvbnOhbENlcmFtaWNEb2NJZKNkdHlwZWZzdHJpbmdncGF0dGVybngcXmNlcmFtaWM6Ly8uKyhcP3ZlcnNpb249LispP2ltYXhMZW5ndGgYlmtkZXNjcmlwdGlvbniAVGhlIFtbQ3JlZGVudGlhbFJlZ2lzdHJ5XV0gaG9sZHMgdGhlIGxpc3Qgb2YgY2xhaW1lZCBbW0NsYWltZWRDcmVkZW50aWFsc11dIGFuZCB0aGUgW1tWZXJpZmlhYmxlQ3JlZGVudGlhbHNdXSBpc3N1ZWQgYnkgdGhlIHVzZXJ0YWRkaXRpb25hbFByb3BlcnRpZXP0ZmhlYWRlcqJmdW5pcXVlcC90eFBWSThrWHJzZk5zdVNrY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWA==',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1fryq52k34wtfbzwiwcfzxxs5dgnjwvj6qcxxpe1delnhgnu4w2m3gg',
    },
  },
  definitions: {
    kjzl6cwe1jw149vokefwnrop5hk9vkfwy0velacqzdg7ts26ywciptjdb8dvanm: {
      alias: 'credentialRegistry',
      commits: [
        {
          jws: {
            payload: 'AXESILhsKTf7Gt8NXSIxptMqGRfX-uZKp50P2Q6UDaQ9EvGT',
            signatures: [
              {
                signature:
                  'hP_sR3HGmIXTh2mare-DQw0RIVKEVJCH-cvUFq5YocFwgSQN4wN4SR05dUnQuiP04CgKO2CmFTZ45kXeRCEXDw',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreifynqutp6y234gv2irru3jsugix275omsvhtuh5sduubwsd2exrsm',
          },
          linkedBlock:
            'omRkYXRho2RuYW1lcmNyZWRlbnRpYWxSZWdpc3RyeWZzY2hlbWF4S2NlcmFtaWM6Ly9rM3k1Mmw3cWJ2MWZyeXE1MmszNHd0ZmJ6d2l3Y2Z6eHhzNWRnbmp3dmo2cWN4eHBlMWRlbG5oZ251NHcybTNnZ2tkZXNjcmlwdGlvbniAVGhlIFtbQ3JlZGVudGlhbFJlZ2lzdHJ5XV0gaG9sZHMgdGhlIGxpc3Qgb2YgY2xhaW1lZCBbW0NsYWltZWRDcmVkZW50aWFsc11dIGFuZCB0aGUgW1tWZXJpZmlhYmxlQ3JlZGVudGlhbHNdXSBpc3N1ZWQgYnkgdGhlIHVzZXJmaGVhZGVyo2ZzY2hlbWF4S2NlcmFtaWM6Ly9rM3k1Mmw3cWJ2MWZyeTFmcDRzMG53ZGFyaDB2YWh1c2FycHBvc2dldnkwcGVtaXlreW1kMm9yZDZzd3RoYXJjd2Z1bmlxdWVwWWczUlpNZUEwcVE2NzYxdWtjb250cm9sbGVyc4F4OGRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVY',
        },
      ],
      schema: 'kjzl6cwe1jw14bju676vm4yvhieo8zzpk9r7ek8k6mvty0svsbg46455lob9d8d',
      version: 'k3y52l7qbv1frye9ap2p490vmv0w68hd69y7brdmnvjnbnrjlk6113m1qnvmmjrwg',
    },
  },
  tiles: {},
}
