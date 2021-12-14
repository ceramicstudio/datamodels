import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'
import type { SocialConnection } from '../types/SocialConnection'

export type { SocialConnection, Connection } from '../types/SocialConnection'

export type ModelTypes = ModelTypeAliases<
  { SocialConnection: SocialConnection },
  { socialConnection: 'SocialConnection' }
>

export const model: EncodedManagedModel = {
  "schemas": {
    "kjzl6cwe1jw145ktrryur099buxkd64y6unj9ksg5f3uj8g3zl99d32v27f4jc0": {
      "alias": "SocialConnection",
      "commits": [
        {
          "jws": {
            "payload": "AXESINrXrfgNK4FvOXrBlK_nPRrqyKBCFjewl6HD6JsET8oR",
            "signatures": [
              {
                "signature": "HDBFCxEeoWJnZXa3dHAgh6YTGAsR-SYbQidxjEEP_jAnEzwtB1f73w7yojyJSQ0SX8y6h_PZbi9gh-NNcb00Ag",
                "protected": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3RocGltVDhjeHIxZ0FtakY2cHdCenhOVW9rcHZDY1RTZ1QzWkhOb3NNaFJpI3o2TWt0aHBpbVQ4Y3hyMWdBbWpGNnB3Qnp4TlVva3B2Q2NUU2dUM1pITm9zTWhSaSJ9"
              }
            ],
            "link": "bafyreig226w7qdjlqfxts6wbssx6opi25lekaqqwg6yjpiod5cnqit6kce"
          },
          "linkedBlock": "omRkYXRhpWR0eXBlZm9iamVjdGUkZGVmc6FqY29ubmVjdGlvbqJkdHlwZWZvYmplY3RqcHJvcGVydGllc6VlYWxpYXOjZHR5cGVmc3RyaW5naW1heExlbmd0aBgea2Rlc2NyaXB0aW9ueBlUaGUgYWxpYXMgb2YgdGhpcyB0YXJnZXQuZnRhcmdldKNkdHlwZWZzdHJpbmdpbWF4TGVuZ3RoGGRrZGVzY3JpcHRpb254MlRoZSB0YXJnZXQgb2Ygc3VjaCBjb25uZWN0aW9uIGUuZy4gRElEIG9yIGFkZHJlc3MuaWNyZWF0ZWRBdKRkdHlwZWZzdHJpbmdmZm9ybWF0ZGRhdGVpbWF4TGVuZ3RoCmtkZXNjcmlwdGlvbngcVGhlIGRhdGUgb2YgdGhpcyBjb25uZWN0aW9uLmluYW1lc3BhY2WjZHR5cGVmc3RyaW5naW1heExlbmd0aBgea2Rlc2NyaXB0aW9ueCFUaGUgbmFtZXNwYWNlIG9mIHRoaXMgY29ubmVjdGlvbi5uY29ubmVjdGlvblR5cGWjZHR5cGVmc3RyaW5naW1heExlbmd0aAprZGVzY3JpcHRpb254LFRoZSB0eXBlIG9mIHRoaXMgY29ubmVjdGlvbiBlLmcuIGZvbGxvdy9vd24uZXRpdGxlcFNvY2lhbENvbm5lY3Rpb25nJHNjaGVtYXgmaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNy9zY2hlbWFqcHJvcGVydGllc6Fsb3V0Ym91bmRMaW5romR0eXBlZWFycmF5ZWl0ZW1zoWQkcmVmciMvJGRlZnMvY29ubmVjdGlvbmZoZWFkZXKiZnVuaXF1ZXBnR0FBWmxLTHJOQTdGc3l2a2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rdGhwaW1UOGN4cjFnQW1qRjZwd0J6eE5Vb2twdkNjVFNnVDNaSE5vc01oUmk="
        }
      ],
      "dependencies": {

      },
      "version": "k3y52l7qbv1frxjo3pivuo1tucbyotnn74pzd03uaujfd4s2kd35ul1wcvork9hc0"
    }
  },
  "definitions": {
    "kjzl6cwe1jw146bm36qvyo9nhhe7svb8eaaqwna9e0svaapz13r7douwfnz0n1f": {
      "alias": "socialConnection",
      "commits": [
        {
          "jws": {
            "payload": "AXESID9jUuKwIZ-1RWdlzlfIZ8bI52o1IOSuMsRF8wTiy8aO",
            "signatures": [
              {
                "signature": "OuX6T7EeSpZPh0KAli3fxBH5Q0p2Xc377wMSazi-nlWluywyeIkzy-a3SsWEEqcAROLqMPcYAje59-EAiws2Cg",
                "protected": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3RocGltVDhjeHIxZ0FtakY2cHdCenhOVW9rcHZDY1RTZ1QzWkhOb3NNaFJpI3o2TWt0aHBpbVQ4Y3hyMWdBbWpGNnB3Qnp4TlVva3B2Q2NUU2dUM1pITm9zTWhSaSJ9"
              }
            ],
            "link": "bafyreib7mnjofmbbt62ukz3fzzl4qz6gzdtwunja4sxdfrcf6mcofs6gry"
          },
          "linkedBlock": "omRkYXRho2RuYW1lcFNvY2lhbENvbm5lY3Rpb25mc2NoZW1heEtjZXJhbWljOi8vazN5NTJsN3FidjFmcnhqbzNwaXZ1bzF0dWNieW90bm43NHB6ZDAzdWF1amZkNHMya2QzNXVsMXdjdm9yazloYzBrZGVzY3JpcHRpb254J1NvY2lhbCBjb25uZWN0aW9uIGluZm9ybWF0aW9uIGZvciBhIERJRGZoZWFkZXKjZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5MWZwNHMwbndkYXJoMHZhaHVzYXJwcG9zZ2V2eTBwZW1peWt5bWQyb3JkNnN3dGhhcmN3ZnVuaXF1ZXArYzBkNlYvT0dpL3E1aUJGa2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rdGhwaW1UOGN4cjFnQW1qRjZwd0J6eE5Vb2twdkNjVFNnVDNaSE5vc01oUmk="
        }
      ],
      "schema": "kjzl6cwe1jw145ktrryur099buxkd64y6unj9ksg5f3uj8g3zl99d32v27f4jc0",
      "version": "k3y52l7qbv1frxoyl2nz7akkn0bp3hanvpl8fc5kyrppah88p3upghcrqneh0ju2o"
    }
  },
  "tiles": {
  }
}