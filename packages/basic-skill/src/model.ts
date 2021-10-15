import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { BasicSkill } from '../types/BasicSkill'

export type { BasicSkill } from '../types/BasicSkill'

export type ModelTypes = ModelTypeAliases< {BasicSkill: BasicSkill }, { basicSkill: 'BasicSkill' }>

export const model: EncodedManagedModel = {
  schemas: {
    kjzl6cwe1jw146xjc02j1e13g967z4t1p7rnpudlj92v1ashr8wa6ikq37v2yod: {
      alias: 'BasicSkill',
      commits: [
        {
          jws: {
            payload: 'AXESIIJTzR39vPaAViy7BC-SgAI6aysdaHQpuOpazQ0aV2YM',
            signatures: [
              {
                signature: '2TLX1oOuuPxWZE_fUJ-u6yYcnAlmPRxVMawcxDR8ZkJgGod1im5DANtVwrn7ksaIhRB1oziTi0s3yQRT-WOHCQ',
                protected: 'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa2s4UHFiUkh3YVNBRG84QkRScUdTVVQyRFh0ZmRYTmlkY01xajhNNzlQTVB3I3o2TWtrOFBxYlJId2FTQURvOEJEUnFHU1VUMkRYdGZkWE5pZGNNcWo4TTc5UE1QdyJ9'
              }
            ],
            link: 'bafyreieckpgr37n462afmlf3aqxzfaachjvswhlioqu3r2s2zugruv3gbq'
          },
          linkedBlock: 'omRkYXRhpmR0eXBlZm9iamVjdGV0aXRsZWpCYXNpY1NraWxsZyRzY2hlbWF4J2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDcvc2NoZW1hI2hyZXF1aXJlZIJkbmFtZWJpZGpwcm9wZXJ0aWVzqmJpZKNkdHlwZWZzdHJpbmdpbWF4TGVuZ3RoGQGka2Rlc2NyaXB0aW9ueE9BIHVuaXF1ZSBpZGVudGlmaWVyIChlLmcuIHV1aWQgb3IgdXJpKSB0byBhbGxvdyBhcHBsaWNhdGlvbnMgdG8gdXNlIHRoaXMgc2tpbGwuZG5hbWWjZHR5cGVmc3RyaW5naW1heExlbmd0aBiga2Rlc2NyaXB0aW9ueCRBIGh1bWFuIHJlYWRhYmxlIG5hbWUgZm9yIHRoZSBza2lsbC5kdGFnc6RkdHlwZWVhcnJheWVpdGVtc6FkdHlwZWZzdHJpbmdrZGVzY3JpcHRpb254KVRhZ3MgdG8gYWxsb3cgZWFzaWVyIHNlYXJjaGluZyBvZiBza2lsbHMua3VuaXF1ZUl0ZW1z9WVpbWFnZaNkdHlwZWZzdHJpbmdmZm9ybWF0Y3VyaWtkZXNjcmlwdGlvbngzQW4gb3B0aW9uYWwgaW1hZ2UgdG8gdXNlIHdoZW4gZGlzcGxheWluZyB0aGUgc2tpbGwuZmlzc3VlcqNkdHlwZWZzdHJpbmdpbWF4TGVuZ3RoGKBrZGVzY3JpcHRpb254VUEgdW5pcXVlIGlkZW50aWZpZXIgcmVwcmVzZW50aW5nIGFuIGlzc3VlciBvZiB0aGUgc2tpbGwgKGUuZy4gZGlkIG9mIGFuIGluc3RpdHV0aW9uKS5nZGV0YWlsc6NkdHlwZWZzdHJpbmdmZm9ybWF0Y3VyaWtkZXNjcmlwdGlvbnhpQSBsaW5rIHRvIGEgZG9jdW1lbnQgZ2l2aW5nIGRldGFpbHMgYWJvdXQgdGhlIHN0YXR1cyBvZiB0aGUgc2tpbGwuIEUuZy4gdGVybXMgb2YgdXNlIC8gcmV2b2NhdGlvbiBzdGF0dXMuamlzc3VlZERhdGWjZHR5cGVmc3RyaW5nZmZvcm1hdGlkYXRlLXRpbWVrZGVzY3JpcHRpb254IFRoZSBkYXRlIHRoZSBza2lsbCB3YXMgb2J0YWluZWQua2Rlc2NyaXB0aW9uo2R0eXBlZnN0cmluZ2ltYXhMZW5ndGgZAaRrZGVzY3JpcHRpb254LEFuIG9wdGlvbmFsIGRlc2NyaXB0aW9uIHRvIGFkZCBtb3JlIGRldGFpbHMua2V4cGlyZXNEYXRlo2R0eXBlZnN0cmluZ2Zmb3JtYXRpZGF0ZS10aW1la2Rlc2NyaXB0aW9ueC1UaGUgZGF0ZSB0aGUgc2tpbGwgZXhwaXJlcyAvIG11c3QgYmUgcmVuZXdlZC5yaXNzdWVyVmVyaWZpY2F0aW9uo2R0eXBlZm9iamVjdGpwcm9wZXJ0aWVzo2NzaWejZHR5cGVmc3RyaW5naW1heExlbmd0aBkBpGtkZXNjcmlwdGlvbnhLVGhlIHNpZ25hdHVyZSB0byB1c2UgaW4gdGhlIHZlcmlmaWNhdGlvbiBwcm9jZXNzIChlLmcuIEpTT04gV2ViIFNpZ25hdHVyZSkuZHR5cGWjZHR5cGVmc3RyaW5naW1heExlbmd0aBiga2Rlc2NyaXB0aW9ueC1UaGUgc2lnbmF0dXJlIG1ldGhvZCAoZS5nLiBSc2FTaWduYXR1cmUyMDE4KS5ydmVyaWZpY2F0aW9uTWV0aG9ko2R0eXBlZnN0cmluZ2ltYXhMZW5ndGgZAaRrZGVzY3JpcHRpb254YUEgcmVzb3VyY2UgKGUuZy4gVVJJKSB0aGF0IGNvbnRhaW5zIHRoZSBpbmZvcm1hdGlvbiByZXF1aXJlZCB0byBwZXJmb3JtIHRoZSB2ZXJpZmljYXRpb24gcHJvY2Vzcy5rZGVzY3JpcHRpb254gUEgcHJvb2YgbWVjaGFuaXNtIHRvIHZlcmlmeSB0aGF0IHRoZSBpc3N1ZXIgY2VydGlmaWVzIHRoZSBza2lsbC4gQmFzZWQgb24gaHR0cHM6Ly93d3cudzMub3JnL1RSL3ZjLWRhdGEtbW9kZWwvI3Byb29mcy1zaWduYXR1cmVzLmtkZXNjcmlwdGlvbngvQSBsaWdodHdlaWdodCBzY2hlbWEgZm9yIHNraWxscyBhbmQgY3JlZGVudGlhbHNmaGVhZGVyomZ1bmlxdWVwSFR4TXhQMU5kbW16dGE3VWtjb250cm9sbGVyc4F4OGRpZDprZXk6ejZNa2s4UHFiUkh3YVNBRG84QkRScUdTVVQyRFh0ZmRYTmlkY01xajhNNzlQTVB3'
        }
      ],
      dependencies: {},
      version: 'k3y52l7qbv1frxtahhchzdvrsjl88pu6k3b8ons0p4wkcp8qm9r9kec3divx12l8g'
    }
  },
  definitions: {
    kjzl6cwe1jw14978uoi1vnvv0cjeask999m41xh27jtnhk59vlonocowa0yvd33: {
      alias: 'basicSkill',
      commits: [
        {
          jws: {
            payload: 'AXESIF_WeypP5TeTEPOoPPdJhaJWssFe1irVDqgDh0AaJ1cm',
            signatures: [
              {
                signature: 'emeiobHs5ue4TZPrUC9ZsudGFmm1T8LWd2WFJH9UNmVqoV2GyatbWf86os7s2JKXjpapG_0A66JIPOvjVkjVDg',
                protected: 'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa2s4UHFiUkh3YVNBRG84QkRScUdTVVQyRFh0ZmRYTmlkY01xajhNNzlQTVB3I3o2TWtrOFBxYlJId2FTQURvOEJEUnFHU1VUMkRYdGZkWE5pZGNNcWo4TTc5UE1QdyJ9'
              }
            ],
            link: 'bafyreic72z5sut7fg6jrb45iht3utbnck2zmcxwwflkq5kadq5abuj2xey'
          },
          linkedBlock: 'omRkYXRho2RuYW1lamJhc2ljU2tpbGxmc2NoZW1heEtjZXJhbWljOi8vazN5NTJsN3FidjFmcnh0YWhoY2h6ZHZyc2psODhwdTZrM2I4b25zMHA0d2tjcDhxbTlyOWtlYzNkaXZ4MTJsOGdrZGVzY3JpcHRpb254L0EgbGlnaHR3ZWlnaHQgc2NoZW1hIGZvciBza2lsbHMgYW5kIGNyZWRlbnRpYWxzZmhlYWRlcqNmc2NoZW1heEtjZXJhbWljOi8vazN5NTJsN3FidjFmcnkxZnA0czBud2RhcmgwdmFodXNhcnBwb3NnZXZ5MHBlbWl5a3ltZDJvcmQ2c3d0aGFyY3dmdW5pcXVlcGM3RDlJWGZzUGxDN2h3QVZrY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtrOFBxYlJId2FTQURvOEJEUnFHU1VUMkRYdGZkWE5pZGNNcWo4TTc5UE1Qdw=='
        }
      ],
      schema: 'kjzl6cwe1jw146xjc02j1e13g967z4t1p7rnpudlj92v1ashr8wa6ikq37v2yod',
      version: 'k3y52l7qbv1fry9fiy68dd5ukih5xor41twd8tq1bpoyv0v9i8q7cd691javz11xc'
    }
  },
  tiles: {}
} 