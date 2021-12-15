import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'
import type { SocialConnection } from '../types/SocialConnection'

export type { SocialConnection, Connection } from '../types/SocialConnection'

export type ModelTypes = ModelTypeAliases<
  { SocialConnection: SocialConnection },
  { socialConnection: 'SocialConnection' }
>

export const model: EncodedManagedModel = {
  "schemas": {
    "kjzl6cwe1jw149sw9wnqb90x9oiwtdr1d9v1ill6taq1ijbxdrh0t158deys1go": {
      "alias": "SocialConnection",
      "commits": [
        {
          "jws": {
            "payload": "AXESIEXTm2DOh_l08-941AZXOzebMLUzA-U4sbSg1yjrhLzL",
            "signatures": [
              {
                "signature": "zfNkiLZ4Ocd6Ev46EKaBywCpqOqhfUWM-9aldO2mU0zjaSrfFHOn5qQ5HTgNpd6u7kQ0nsO_LuP7wosg3KBmAg",
                "protected": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3RocGltVDhjeHIxZ0FtakY2cHdCenhOVW9rcHZDY1RTZ1QzWkhOb3NNaFJpI3o2TWt0aHBpbVQ4Y3hyMWdBbWpGNnB3Qnp4TlVva3B2Q2NUU2dUM1pITm9zTWhSaSJ9"
              }
            ],
            "link": "bafyreicf2onwbtuh7f2ph33y2qdfoozxtmylkmyd4u4ldnfa24uoxbf4zm"
          },
          "linkedBlock": "omRkYXRhp2R0eXBlZm9iamVjdGUkZGVmc6FqY29ubmVjdGlvbqRkdHlwZWZvYmplY3RocmVxdWlyZWSDZnRhcmdldGluYW1lc3BhY2VuY29ubmVjdGlvblR5cGVqcHJvcGVydGllc6VlYWxpYXOjZHR5cGVmc3RyaW5naW1heExlbmd0aBgea2Rlc2NyaXB0aW9ueBlUaGUgYWxpYXMgb2YgdGhpcyB0YXJnZXQuZnRhcmdldKNkdHlwZWZzdHJpbmdpbWF4TGVuZ3RoGGRrZGVzY3JpcHRpb254MlRoZSB0YXJnZXQgb2Ygc3VjaCBjb25uZWN0aW9uIGUuZy4gRElEIG9yIGFkZHJlc3MuaWNyZWF0ZWRBdKRkdHlwZWZzdHJpbmdmZm9ybWF0ZGRhdGVpbWF4TGVuZ3RoCmtkZXNjcmlwdGlvbngcVGhlIGRhdGUgb2YgdGhpcyBjb25uZWN0aW9uLmluYW1lc3BhY2WjZHR5cGVmc3RyaW5naW1heExlbmd0aBgea2Rlc2NyaXB0aW9ueCFUaGUgbmFtZXNwYWNlIG9mIHRoaXMgY29ubmVjdGlvbi5uY29ubmVjdGlvblR5cGWjZHR5cGVmc3RyaW5naW1heExlbmd0aAprZGVzY3JpcHRpb254LFRoZSB0eXBlIG9mIHRoaXMgY29ubmVjdGlvbiBlLmcuIGZvbGxvdy9vd24udGFkZGl0aW9uYWxQcm9wZXJ0aWVz9GV0aXRsZXBTb2NpYWxDb25uZWN0aW9uZyRzY2hlbWF4Jmh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDcvc2NoZW1haHJlcXVpcmVkgWxvdXRib3VuZExpbmtqcHJvcGVydGllc6Fsb3V0Ym91bmRMaW5romR0eXBlZWFycmF5ZWl0ZW1zoWQkcmVmciMvJGRlZnMvY29ubmVjdGlvbnRhZGRpdGlvbmFsUHJvcGVydGllc/RmaGVhZGVyomZ1bmlxdWVwc3kvR2poeVJlOU1MSk9xSGtjb250cm9sbGVyc4F4OGRpZDprZXk6ejZNa3RocGltVDhjeHIxZ0FtakY2cHdCenhOVW9rcHZDY1RTZ1QzWkhOb3NNaFJp"
        }
      ],
      "dependencies": {

      },
      "version": "k3y52l7qbv1frydphig8r406kkuehcxs9qe4qs9iogc96rtgtdvd1qg57jefbeeio"
    }
  },
  "definitions": {
    "kjzl6cwe1jw14anciwa3dkg3dg0hz9wim2pmbj22tntihd8sl27ra4gmlv0vxp3": {
      "alias": "socialConnection",
      "commits": [
        {
          "jws": {
            "payload": "AXESIC042M7MBXbndbNEt90Uu4rRqeIMUiwCH8vZse55K82u",
            "signatures": [
              {
                "signature": "7Z76juHK7bBb2Kj9DEuXPorx5UPzoXl7FhFnmlBGfHtUraFOemxSCGE9bJM2lZ9sqTVYgI2q5GBP__EVXboPAA",
                "protected": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3RocGltVDhjeHIxZ0FtakY2cHdCenhOVW9rcHZDY1RTZ1QzWkhOb3NNaFJpI3o2TWt0aHBpbVQ4Y3hyMWdBbWpGNnB3Qnp4TlVva3B2Q2NUU2dUM1pITm9zTWhSaSJ9"
              }
            ],
            "link": "bafyreibnhdmm5tafo3txlm2ew7orjo4k2gu6edcsfqbb7s6zwhxhsk6nvy"
          },
          "linkedBlock": "omRkYXRho2RuYW1lcFNvY2lhbENvbm5lY3Rpb25mc2NoZW1heEtjZXJhbWljOi8vazN5NTJsN3FidjFmcnlkcGhpZzhyNDA2a2t1ZWhjeHM5cWU0cXM5aW9nYzk2cnRndGR2ZDFxZzU3amVmYmVlaW9rZGVzY3JpcHRpb254J1NvY2lhbCBjb25uZWN0aW9uIGluZm9ybWF0aW9uIGZvciBhIERJRGZoZWFkZXKjZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5MWZwNHMwbndkYXJoMHZhaHVzYXJwcG9zZ2V2eTBwZW1peWt5bWQyb3JkNnN3dGhhcmN3ZnVuaXF1ZXArdjNkeSt0Vk1ia2RCK2hNa2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rdGhwaW1UOGN4cjFnQW1qRjZwd0J6eE5Vb2twdkNjVFNnVDNaSE5vc01oUmk="
        }
      ],
      "schema": "kjzl6cwe1jw149sw9wnqb90x9oiwtdr1d9v1ill6taq1ijbxdrh0t158deys1go",
      "version": "k3y52l7qbv1fryjq12djs0hefzlvjuuf8cza6pzis2xdvfi6j9rr5zzq8rgmb3mdc"
    }
  },
  "tiles": {

  }
}