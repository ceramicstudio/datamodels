import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'
import type { SocialConnections } from '../types/SocialConnections'

export type { SocialConnections, Connection } from '../types/SocialConnections'

export type ModelTypes = ModelTypeAliases<
  { SocialConnections: SocialConnections },
  { socialConnections: 'SocialConnections' }
>

export const model: EncodedManagedModel = {
  "schemas": {
    "kjzl6cwe1jw145tpqvco7kb26ao0hq5i54uhz0jf9jyu9nowzhgigdambv3ptbx": {
      "alias": "SocialConnection",
      "commits": [
        {
          "jws": {
            "payload": "AXESIH08gA3OC_tgp_WW4YfgJIKSNaMVPnrObFa7IPzo6HPd",
            "signatures": [
              {
                "signature": "0oyVn99exw_LLZoh2bcukH6ZZjxQAhOXXVSXU1SIGcAfeiPc-qSFG3xLsnRGupumfw2whW1nUK_4Vv09oNlOAg",
                "protected": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3RocGltVDhjeHIxZ0FtakY2cHdCenhOVW9rcHZDY1RTZ1QzWkhOb3NNaFJpI3o2TWt0aHBpbVQ4Y3hyMWdBbWpGNnB3Qnp4TlVva3B2Q2NUU2dUM1pITm9zTWhSaSJ9"
              }
            ],
            "link": "bafyreid5hsaa3tql7nqkp5mw4gd6ajecsi22gfj6plhgyvv3ed6or2dt3u"
          },
          "linkedBlock": "omRkYXRhp2R0eXBlZm9iamVjdGUkZGVmc6FqY29ubmVjdGlvbqRkdHlwZWZvYmplY3RocmVxdWlyZWSDZnRhcmdldGluYW1lc3BhY2VuY29ubmVjdGlvblR5cGVqcHJvcGVydGllc6VlYWxpYXOjZHR5cGVmc3RyaW5naW1heExlbmd0aBgea2Rlc2NyaXB0aW9ueBlUaGUgYWxpYXMgb2YgdGhpcyB0YXJnZXQuZnRhcmdldKNkdHlwZWZzdHJpbmdpbWF4TGVuZ3RoGGRrZGVzY3JpcHRpb254MlRoZSB0YXJnZXQgb2Ygc3VjaCBjb25uZWN0aW9uIGUuZy4gRElEIG9yIGFkZHJlc3MuaWNyZWF0ZWRBdKRkdHlwZWZzdHJpbmdmZm9ybWF0ZGRhdGVpbWF4TGVuZ3RoCmtkZXNjcmlwdGlvbngcVGhlIGRhdGUgb2YgdGhpcyBjb25uZWN0aW9uLmluYW1lc3BhY2WjZHR5cGVmc3RyaW5naW1heExlbmd0aBgea2Rlc2NyaXB0aW9ueCFUaGUgbmFtZXNwYWNlIG9mIHRoaXMgY29ubmVjdGlvbi5uY29ubmVjdGlvblR5cGWjZHR5cGVmc3RyaW5naW1heExlbmd0aAprZGVzY3JpcHRpb254LFRoZSB0eXBlIG9mIHRoaXMgY29ubmVjdGlvbiBlLmcuIGZvbGxvdy9vd24udGFkZGl0aW9uYWxQcm9wZXJ0aWVz9GV0aXRsZXFTb2NpYWxDb25uZWN0aW9uc2ckc2NoZW1heCZodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYWhyZXF1aXJlZIFsb3V0Ym91bmRMaW5ranByb3BlcnRpZXOhbG91dGJvdW5kTGlua6JkdHlwZWVhcnJheWVpdGVtc6FkJHJlZnIjLyRkZWZzL2Nvbm5lY3Rpb250YWRkaXRpb25hbFByb3BlcnRpZXP0ZmhlYWRlcqJmdW5pcXVlcElFa3dMT3lYLzhRekVtK1JrY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWt0aHBpbVQ4Y3hyMWdBbWpGNnB3Qnp4TlVva3B2Q2NUU2dUM1pITm9zTWhSaQ=="
        }
      ],
      "dependencies": {

      },
      "version": "k3y52l7qbv1frxlfb32y45sengruri1z50igvszu4jxzr8oh6kc5f8ejisd6fkkqo"
    }
  },
  "definitions": {
    "kjzl6cwe1jw14a2s184wj2echgivaic5105ki5g0duftqacurqoaiaoueollgqq": {
      "alias": "socialConnection",
      "commits": [
        {
          "jws": {
            "payload": "AXESIFXi5UDgYvRLSdFOMeiOh5fUGkFrICGh9Jyzw1_1z6tb",
            "signatures": [
              {
                "signature": "RJZKw75XeAxXMcmPIgsuHuIY46lB38l4RCte94DHNAwI5x9z2tJzuRz_v_PWwWppLCWAyEYEPTLEnDHVpZBiAA",
                "protected": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3RocGltVDhjeHIxZ0FtakY2cHdCenhOVW9rcHZDY1RTZ1QzWkhOb3NNaFJpI3o2TWt0aHBpbVQ4Y3hyMWdBbWpGNnB3Qnp4TlVva3B2Q2NUU2dUM1pITm9zTWhSaSJ9"
              }
            ],
            "link": "bafyreicv4lsubydc6rfutukoghui5b4x2qnec2zaegq7jhftynp7lt5llm"
          },
          "linkedBlock": "omRkYXRho2RuYW1lcFNvY2lhbENvbm5lY3Rpb25mc2NoZW1heEtjZXJhbWljOi8vazN5NTJsN3FidjFmcnhsZmIzMnk0NXNlbmdydXJpMXo1MGlndnN6dTRqeHpyOG9oNmtjNWY4ZWppc2Q2ZmtrcW9rZGVzY3JpcHRpb254J1NvY2lhbCBjb25uZWN0aW9uIGluZm9ybWF0aW9uIGZvciBhIERJRGZoZWFkZXKjZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5MWZwNHMwbndkYXJoMHZhaHVzYXJwcG9zZ2V2eTBwZW1peWt5bWQyb3JkNnN3dGhhcmN3ZnVuaXF1ZXBydldvYjEvMy9SQTZFaGg2a2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rdGhwaW1UOGN4cjFnQW1qRjZwd0J6eE5Vb2twdkNjVFNnVDNaSE5vc01oUmk="
        }
      ],
      "schema": "kjzl6cwe1jw145tpqvco7kb26ao0hq5i54uhz0jf9jyu9nowzhgigdambv3ptbx",
      "version": "k3y52l7qbv1fryfnrcpuvbl20s5i6iqebr53lt2puqggjexnet9oqq40o8exkn20w"
    }
  },
  "tiles": {

  }
}