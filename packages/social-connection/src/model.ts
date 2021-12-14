import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'
import type { SocialConnection } from '../types/SocialConnection'

export type { SocialConnection, Connection } from '../types/SocialConnection'

export type ModelTypes = ModelTypeAliases<
  { SocialConnection: SocialConnection },
  { socialConnection: 'SocialConnection' }
>

export const model: EncodedManagedModel = {
  "schemas": {
    "kjzl6cwe1jw148zngsqet212fhalma5nhauycankinhzmdpu4re8kxekbz51xca": {
      "alias": "SocialConnection",
      "commits": [
        {
          "jws": {
            "payload": "AXESIDKsQh4zSKOQqHNLFZ8zO6YD4dyRvv8rlOszUaIYoNid",
            "signatures": [
              {
                "signature": "br2jfYMOxneV-Krze5iW23P9lsT8qyPND7emQI3xW1fZg2YBnj49QQ84DnwCp14uRGAtWkjiMR2TiMVG6GOwBg",
                "protected": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3RocGltVDhjeHIxZ0FtakY2cHdCenhOVW9rcHZDY1RTZ1QzWkhOb3NNaFJpI3o2TWt0aHBpbVQ4Y3hyMWdBbWpGNnB3Qnp4TlVva3B2Q2NUU2dUM1pITm9zTWhSaSJ9"
              }
            ],
            "link": "bafyreibsvrbb4m2iuoikq42lcwptgo5gapq5zen674vzj2ztkgrbrigytu"
          },
          "linkedBlock": "omRkYXRhp2R0eXBlZm9iamVjdGUkZGVmc6FqY29ubmVjdGlvbqNkdHlwZWZvYmplY3RocmVxdWlyZWSDZnRhcmdldGluYW1lc3BhY2VuY29ubmVjdGlvblR5cGVqcHJvcGVydGllc6VlYWxpYXOjZHR5cGVmc3RyaW5naW1heExlbmd0aBgea2Rlc2NyaXB0aW9ueBlUaGUgYWxpYXMgb2YgdGhpcyB0YXJnZXQuZnRhcmdldKNkdHlwZWZzdHJpbmdpbWF4TGVuZ3RoGGRrZGVzY3JpcHRpb254MlRoZSB0YXJnZXQgb2Ygc3VjaCBjb25uZWN0aW9uIGUuZy4gRElEIG9yIGFkZHJlc3MuaWNyZWF0ZWRBdKRkdHlwZWZzdHJpbmdmZm9ybWF0ZGRhdGVpbWF4TGVuZ3RoCmtkZXNjcmlwdGlvbngcVGhlIGRhdGUgb2YgdGhpcyBjb25uZWN0aW9uLmluYW1lc3BhY2WjZHR5cGVmc3RyaW5naW1heExlbmd0aBgea2Rlc2NyaXB0aW9ueCFUaGUgbmFtZXNwYWNlIG9mIHRoaXMgY29ubmVjdGlvbi5uY29ubmVjdGlvblR5cGWjZHR5cGVmc3RyaW5naW1heExlbmd0aAprZGVzY3JpcHRpb254LFRoZSB0eXBlIG9mIHRoaXMgY29ubmVjdGlvbiBlLmcuIGZvbGxvdy9vd24uZXRpdGxlcFNvY2lhbENvbm5lY3Rpb25nJHNjaGVtYXgmaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNy9zY2hlbWFocmVxdWlyZWSBbG91dGJvdW5kTGlua2pwcm9wZXJ0aWVzoWxvdXRib3VuZExpbmuiZHR5cGVlYXJyYXllaXRlbXOhZCRyZWZyIy8kZGVmcy9jb25uZWN0aW9udGFkZGl0aW9uYWxQcm9wZXJ0aWVz9GZoZWFkZXKiZnVuaXF1ZXBOellYMWJYM09PNlNCaHZGa2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rdGhwaW1UOGN4cjFnQW1qRjZwd0J6eE5Vb2twdkNjVFNnVDNaSE5vc01oUmk="
        }
      ],
      "dependencies": {

      },
      "version": "k3y52l7qbv1fry7xivgbtamfla2zdqg86z1847frlwn3xb5jq9ut90tjkl5vxp3b4"
    }
  },
  "definitions": {
    "kjzl6cwe1jw149y9afkrydfrv8impfuf2idg2n9w9ru4e4ozb60ojecyl1cmvnm": {
      "alias": "socialConnection",
      "commits": [
        {
          "jws": {
            "payload": "AXESIOvqlWlJW8cYT5UJIy_UoWIE9eBqV7Ta_0TJDybHupJN",
            "signatures": [
              {
                "signature": "0s-ZLennnOBrPvRcCwHTBmhKqCnppuJFFsctvpss7Lmu6URglPUf117o0GyCCRo72GIbxvUmBrHH06Kj1uG8AA",
                "protected": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3RocGltVDhjeHIxZ0FtakY2cHdCenhOVW9rcHZDY1RTZ1QzWkhOb3NNaFJpI3o2TWt0aHBpbVQ4Y3hyMWdBbWpGNnB3Qnp4TlVva3B2Q2NUU2dUM1pITm9zTWhSaSJ9"
              }
            ],
            "link": "bafyreihl5kkwssk3y4me7fijemx5jilcat26a2sxwtnp6rgjb4tmpousju"
          },
          "linkedBlock": "omRkYXRho2RuYW1lcFNvY2lhbENvbm5lY3Rpb25mc2NoZW1heEtjZXJhbWljOi8vazN5NTJsN3FidjFmcnk3eGl2Z2J0YW1mbGEyemRxZzg2ejE4NDdmcmx3bjN4YjVqcTl1dDkwdGprbDV2eHAzYjRrZGVzY3JpcHRpb254J1NvY2lhbCBjb25uZWN0aW9uIGluZm9ybWF0aW9uIGZvciBhIERJRGZoZWFkZXKjZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5MWZwNHMwbndkYXJoMHZhaHVzYXJwcG9zZ2V2eTBwZW1peWt5bWQyb3JkNnN3dGhhcmN3ZnVuaXF1ZXBpTG9iL0NYQThFby9vR0Ywa2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rdGhwaW1UOGN4cjFnQW1qRjZwd0J6eE5Vb2twdkNjVFNnVDNaSE5vc01oUmk="
        }
      ],
      "schema": "kjzl6cwe1jw148zngsqet212fhalma5nhauycankinhzmdpu4re8kxekbz51xca",
      "version": "k3y52l7qbv1fryerm26rqsfk664khgwob5unmatidhhy78hdn3esuhy45xllup3wg"
    }
  },
  "tiles": {

  }
}