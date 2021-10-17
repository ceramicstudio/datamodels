import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { BasicSkills } from '../types/BasicSkills'

export type { BasicSkill, BasicSkills } from '../types/BasicSkills'

export type ModelTypes = ModelTypeAliases<{BasicSkills: BasicSkills }, { basicSkills: 'BasicSkills' }>

export const model: EncodedManagedModel = {
  schemas: {
    kjzl6cwe1jw148bx0ed2xglkrblryt4fkpb1lsfgmhcpx17on71l9r0xrhe5k4m: {
      alias: 'BasicSkills',
      commits: [
        {
          jws: {
            payload: 'AXESIKbNDpPeLkjqwMRKRT0bovS3Eyi_73jdxJ84nG9LHVCV',
            signatures: [
              {
                signature: 'ALogu3amTY4XrAoiCIBxDra6ocA5JXSi2HnJuYZ_dx8A1wBjgnWRMMFlb8MUiWo7BXGqsWyD7krq8lxmm-cEBw',
                protected: 'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa2o4YTVFVzNSeVRGajdNdnh6U2hNU01RSFp2UmJlQmtZam9YN2Z5NXRDZlpLI3o2TWtqOGE1RVczUnlURmo3TXZ4elNoTVNNUUhadlJiZUJrWWpvWDdmeTV0Q2ZaSyJ9'
              }
            ],
            link: 'bafyreifgzuhjhxrojdvmbrckiu6rxixuw4jsrp7ppdo4jhzytrxuwhkqsu'
          },
          linkedBlock: 'omRkYXRheQgjeyIkc2NoZW1hIjoiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNy9zY2hlbWEjIiwidGl0bGUiOiJCYXNpY1NraWxscyIsImRlc2NyaXB0aW9uIjoiQSBsaWdodHdlaWdodCBzY2hlbWEgZm9yIHNraWxscyBhbmQgY3JlZGVudGlhbHMiLCJ0eXBlIjoib2JqZWN0IiwicHJvcGVydGllcyI6eyJza2lsbHMiOnsidHlwZSI6ImFycmF5IiwiaXRlbXMiOnsiJHJlZiI6IiMvZGVmaW5pdGlvbnMvQmFzaWNTa2lsbCJ9fX0sImRlZmluaXRpb25zIjp7IkJhc2ljU2tpbGwiOnsidHlwZSI6Im9iamVjdCIsInByb3BlcnRpZXMiOnsibmFtZSI6eyJ0eXBlIjoic3RyaW5nIiwiZGVzY3JpcHRpb24iOiJBIGh1bWFuIHJlYWRhYmxlIG5hbWUgZm9yIHRoZSBza2lsbC4iLCJtYXhMZW5ndGgiOjE2MH0sImlkIjp7InR5cGUiOiJzdHJpbmciLCJkZXNjcmlwdGlvbiI6IkEgdW5pcXVlIGlkZW50aWZpZXIgKGUuZy4gdXVpZCBvciB1cmkpIHRvIGFsbG93IGFwcGxpY2F0aW9ucyB0byB1c2UgdGhpcyBza2lsbC4iLCJtYXhMZW5ndGgiOjQyMH0sImRlc2NyaXB0aW9uIjp7InR5cGUiOiJzdHJpbmciLCJkZXNjcmlwdGlvbiI6IkFuIG9wdGlvbmFsIGRlc2NyaXB0aW9uIHRvIGFkZCBtb3JlIGRldGFpbHMuIiwibWF4TGVuZ3RoIjo0MjB9LCJ0YWdzIjp7ImRlc2NyaXB0aW9uIjoiVGFncyB0byBhbGxvdyBlYXNpZXIgc2VhcmNoaW5nIG9mIHNraWxscy4iLCJ0eXBlIjoiYXJyYXkiLCJpdGVtcyI6eyJ0eXBlIjoic3RyaW5nIn0sInVuaXF1ZUl0ZW1zIjp0cnVlfSwiaW1hZ2UiOnsidHlwZSI6InN0cmluZyIsImRlc2NyaXB0aW9uIjoiQW4gb3B0aW9uYWwgaW1hZ2UgdG8gdXNlIHdoZW4gZGlzcGxheWluZyB0aGUgc2tpbGwuIiwiZm9ybWF0IjoidXJpIn0sImRldGFpbHMiOnsidHlwZSI6InN0cmluZyIsImRlc2NyaXB0aW9uIjoiQSBsaW5rIHRvIGEgZG9jdW1lbnQgZ2l2aW5nIGRldGFpbHMgYWJvdXQgdGhlIHN0YXR1cyBvZiB0aGUgc2tpbGwuIEUuZy4gdGVybXMgb2YgdXNlIC8gcmV2b2NhdGlvbiBzdGF0dXMuIiwiZm9ybWF0IjoidXJpIn0sImlzc3VlciI6eyJ0eXBlIjoic3RyaW5nIiwiZGVzY3JpcHRpb24iOiJBIHVuaXF1ZSBpZGVudGlmaWVyIHJlcHJlc2VudGluZyBhbiBpc3N1ZXIgb2YgdGhlIHNraWxsIChlLmcuIGRpZCBvZiBhbiBpbnN0aXR1dGlvbikuIiwibWF4TGVuZ3RoIjoxNjB9LCJpc3N1ZWREYXRlIjp7InR5cGUiOiJzdHJpbmciLCJkZXNjcmlwdGlvbiI6IlRoZSBkYXRlIHRoZSBza2lsbCB3YXMgb2J0YWluZWQgKElTTzg2MDEgRGF0ZVRpbWUgZm9ybWF0KS4iLCJmb3JtYXQiOiJkYXRlLXRpbWUifSwiZXhwaXJlc0RhdGUiOnsidHlwZSI6InN0cmluZyIsImRlc2NyaXB0aW9uIjoiVGhlIGRhdGUgdGhlIHNraWxsIGV4cGlyZXMgLyBtdXN0IGJlIHJlbmV3ZWQgKElTTzg2MDEgRGF0ZVRpbWUgZm9ybWF0KS4iLCJmb3JtYXQiOiJkYXRlLXRpbWUifSwiaXNzdWVyVmVyaWZpY2F0aW9uIjp7InR5cGUiOiJvYmplY3QiLCJwcm9wZXJ0aWVzIjp7InR5cGUiOnsidHlwZSI6InN0cmluZyIsImRlc2NyaXB0aW9uIjoiVGhlIHNpZ25hdHVyZSBtZXRob2QgKGUuZy4gUnNhU2lnbmF0dXJlMjAxOCkuIiwibWF4TGVuZ3RoIjoxNjB9LCJ2ZXJpZmljYXRpb25NZXRob2QiOnsidHlwZSI6InN0cmluZyIsImRlc2NyaXB0aW9uIjoiQSByZXNvdXJjZSAoZS5nLiBVUkkpIHRoYXQgY29udGFpbnMgdGhlIGluZm9ybWF0aW9uIHJlcXVpcmVkIHRvIHBlcmZvcm0gdGhlIHZlcmlmaWNhdGlvbiBwcm9jZXNzLiIsIm1heExlbmd0aCI6NDIwfSwic2lnIjp7InR5cGUiOiJzdHJpbmciLCJkZXNjcmlwdGlvbiI6IlRoZSBzaWduYXR1cmUgdG8gdXNlIGluIHRoZSB2ZXJpZmljYXRpb24gcHJvY2VzcyAoZS5nLiBKU09OIFdlYiBTaWduYXR1cmUpLiIsIm1heExlbmd0aCI6NDIwfX0sImRlc2NyaXB0aW9uIjoiQSBwcm9vZiBtZWNoYW5pc20gdG8gdmVyaWZ5IHRoYXQgdGhlIGlzc3VlciBjZXJ0aWZpZXMgdGhlIHNraWxsLiBCYXNlZCBvbiBodHRwczovL3d3dy53My5vcmcvVFIvdmMtZGF0YS1tb2RlbC8jcHJvb2ZzLXNpZ25hdHVyZXMuIn19LCJyZXF1aXJlZCI6WyJuYW1lIiwiaWQiXX19fWZoZWFkZXKiZnVuaXF1ZXBBWWJ0TUIvVFVvTmg1VWU5a2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rajhhNUVXM1J5VEZqN012eHpTaE1TTVFIWnZSYmVCa1lqb1g3Znk1dENmWks='
        }
      ],
      dependencies: {},
      version: 'k3y52l7qbv1fry38qqu50ty1fmaiuvj3ir7yjey5y7vegawmn8y3b9c6o3fonj4sg'
    }
  },
  definitions: {
    kjzl6cwe1jw1492onmdhrab5bknb06o2n7n95bbqnrlcviqqbfs6oq7k3mg04dm: {
      alias: 'basicSkills',
      commits: [
        {
          jws: {
            payload: 'AXESINxucJp572y21xUu1Qu7C_8ZqICeUgVgdhQGoXHhLd6P',
            signatures: [
              {
                signature: '07lSEwK_SjjLqh4HtZmYozdqe3pWfQadsPn9H1OZmR0xiCyjGk6fkdm8QzBt6Q7IIsh3WKTcUy4n_u_7hQUfAw',
                protected: 'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa2o4YTVFVzNSeVRGajdNdnh6U2hNU01RSFp2UmJlQmtZam9YN2Z5NXRDZlpLI3o2TWtqOGE1RVczUnlURmo3TXZ4elNoTVNNUUhadlJiZUJrWWpvWDdmeTV0Q2ZaSyJ9'
              }
            ],
            link: 'bafyreig4nzyju6ppns3nofjo2uf3wc77dguibhssavqhmfagufy6clo6r4'
          },
          linkedBlock: 'omRkYXRho2RuYW1la2Jhc2ljU2tpbGxzZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5MzhxcXU1MHR5MWZtYWl1dmozaXI3eWpleTV5N3ZlZ2F3bW44eTNiOWM2bzNmb25qNHNna2Rlc2NyaXB0aW9ueC9BIGxpZ2h0d2VpZ2h0IHNjaGVtYSBmb3Igc2tpbGxzIGFuZCBjcmVkZW50aWFsc2ZoZWFkZXKjZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5MWZwNHMwbndkYXJoMHZhaHVzYXJwcG9zZ2V2eTBwZW1peWt5bWQyb3JkNnN3dGhhcmN3ZnVuaXF1ZXBMdUw5ZXVJNEFuOTB1b1c0a2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rajhhNUVXM1J5VEZqN012eHpTaE1TTVFIWnZSYmVCa1lqb1g3Znk1dENmWks='
        }
      ],
      schema: 'kjzl6cwe1jw148bx0ed2xglkrblryt4fkpb1lsfgmhcpx17on71l9r0xrhe5k4m',
      version: 'k3y52l7qbv1fry8j3bz3ya1b9uatq9bf6t2dd1sjhl07vk5a35c8fjudqxrlsv4sg'
    }
  },
  tiles: {}
} 