import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { NftMetadata } from '../types/nftMetadata'

export type ModelTypes = ModelTypeAliases<
  { nftMetadata: NftMetadata },
  { nftMetadata: 'nftMetadata' }
>

export const model: EncodedManagedModel = {
  schemas: {
    kjzl6cwe1jw149xvbio5fnai2whxmonm7rfu4yipopzjskeercnslyca42gg48j: {
      alias: 'nftMetadata',
      commits: [
        {
          jws: {
            payload: 'AXESIFRATC8fB0VWXnBv2gQTBo4_oltNWnHlqD-ceWHHWRlT',
            signatures: [
              {
                signature:
                  'ojNk94c50a938jr92sMHiFnT62LZppFdH5KYHfp4ttElr4RHJAqgQ7-4iegeHDgdp2a1AVG5DqQ9MJVUV1RuBg',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa29lbllLejZNZ0pCVEhNUm1iQVpLSERMcW5ib0Z0WjdUM0hqN2IxUjF5SFc4I3o2TWtvZW5ZS3o2TWdKQlRITVJtYkFaS0hETHFuYm9GdFo3VDNIajdiMVIxeUhXOCJ9',
              },
            ],
            link: 'bafyreicuibgc6hyhivlf44dp3icbgbuoh6rfwtk2ohs2qp44pfq4owizkm',
          },
          linkedBlock:
            'omRkYXRhpGR0eXBlZm9iamVjdGV0aXRsZWtuZnRNZXRhZGF0YWckc2NoZW1heCdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNqcHJvcGVydGllc6lkbmFtZaNkdHlwZWZzdHJpbmdldGl0bGVvVGhlIG5hbWUgc2NoZW1ha2Rlc2NyaXB0aW9ucU5hbWUgb2YgdGhlIGl0ZW0uZWltYWdlo2R0eXBlZnN0cmluZ2V0aXRsZXBUaGUgaW1hZ2Ugc2NoZW1ha2Rlc2NyaXB0aW9ueM9UaGlzIGlzIHRoZSBVUkwgdG8gdGhlIGltYWdlIG9mIHRoZSBpdGVtLiBDYW4gYmUganVzdCBhYm91dCBhbnkgdHlwZSBvZiBpbWFnZSAoaW5jbHVkaW5nIFNWR3MsIHdoaWNoIHdpbGwgYmUgY2FjaGVkIGludG8gUE5HcyBieSBPcGVuU2VhKSwgYW5kIGNhbiBiZSBJUEZTIFVSTHMgb3IgcGF0aHMuIFdlIHJlY29tbWVuZCB1c2luZyBhIDM1MCB4IDM1MCBpbWFnZS5qYXR0cmlidXRlc6JkdHlwZWVhcnJheWVpdGVtc6NkdHlwZWZvYmplY3RocmVxdWlyZWSCanRyYWl0X3R5cGVldmFsdWVqcHJvcGVydGllc6NldmFsdWWhZHR5cGWCZm51bWJlcmZzdHJpbmdqdHJhaXRfdHlwZaFkdHlwZWZzdHJpbmdsZGlzcGxheV90eXBloWR0eXBlZnN0cmluZ2ppbWFnZV9kYXRho2R0eXBlZnN0cmluZ2V0aXRsZXNSYXcgU1ZHIGltYWdlIGRhdGEsa2Rlc2NyaXB0aW9ueIphdyBTVkcgaW1hZ2UgZGF0YSwgaWYgeW91IHdhbnQgdG8gZ2VuZXJhdGUgaW1hZ2VzIG9uIHRoZSBmbHkgKG5vdCByZWNvbW1lbmRlZCkuIE9ubHkgdXNlIHRoaXMgaWYgeW91J3JlIG5vdCBpbmNsdWRpbmcgdGhlIGltYWdlIHBhcmFtZXRlci5rZGVzY3JpcHRpb26jZHR5cGVmc3RyaW5nZXRpdGxldlRoZSBkZXNjcmlwdGlvbiBzY2hlbWFrZGVzY3JpcHRpb254QEEgaHVtYW4gcmVhZGFibGUgZGVzY3JpcHRpb24gb2YgdGhlIGl0ZW0uIE1hcmtkb3duIGlzIHN1cHBvcnRlZC5reW91dHViZV91cmyjZHR5cGVmc3RyaW5nZXRpdGxlbVlvdVR1YmUgdmlkZW9rZGVzY3JpcHRpb254GUEgVVJMIHRvIGEgWW91VHViZSB2aWRlby5sZXh0ZXJuYWxfdXJso2R0eXBlZnN0cmluZ2V0aXRsZXdUaGUgZXh0ZXJuYWxfdXJsIHNjaGVtYWtkZXNjcmlwdGlvbnjOaGlzIGlzIHRoZSBVUkwgdG8gdGhlIGltYWdlIG9mIHRoZSBpdGVtLiBDYW4gYmUganVzdCBhYm91dCBhbnkgdHlwZSBvZiBpbWFnZSAoaW5jbHVkaW5nIFNWR3MsIHdoaWNoIHdpbGwgYmUgY2FjaGVkIGludG8gUE5HcyBieSBPcGVuU2VhKSwgYW5kIGNhbiBiZSBJUEZTIFVSTHMgb3IgcGF0aHMuIFdlIHJlY29tbWVuZCB1c2luZyBhIDM1MCB4IDM1MCBpbWFnZS5tYW5pbWF0aW9uX3VybKNkdHlwZWZzdHJpbmdldGl0bGVtYW5pbWF0aW9uIHVybGtkZXNjcmlwdGlvbnkBu0EgVVJMIHRvIGEgbXVsdGktbWVkaWEgYXR0YWNobWVudCBmb3IgdGhlIGl0ZW0uIFRoZSBmaWxlIGV4dGVuc2lvbnMgR0xURiwgR0xCLCBXRUJNLCBNUDQsIE00ViwgT0dWLCBhbmQgT0dHIGFyZSBzdXBwb3J0ZWQsIGFsb25nIHdpdGggdGhlIGF1ZGlvLW9ubHkgZXh0ZW5zaW9ucyBNUDMsIFdBViwgYW5kIE9HQS4gQW5pbWF0aW9uX3VybCBhbHNvIHN1cHBvcnRzIEhUTUwgcGFnZXMsIGFsbG93aW5nIHlvdSB0byBidWlsZCByaWNoIGV4cGVyaWVuY2VzIGFuZCBpbnRlcmFjdGl2ZSBORlRzIHVzaW5nIEphdmFTY3JpcHQgY2FudmFzLCBXZWJHTCwgYW5kIG1vcmUuIFNjcmlwdHMgYW5kIHJlbGF0aXZlIHBhdGhzIHdpdGhpbiB0aGUgSFRNTCBwYWdlIGFyZSBub3cgc3VwcG9ydGVkLiBIb3dldmVyLCBhY2Nlc3MgdG8gYnJvd3NlciBleHRlbnNpb25zIGlzIG5vdCBzdXBwb3J0ZWQucGJhY2tncm91bmRfY29sb3KjZHR5cGVmc3RyaW5nZXRpdGxlcGJhY2tncm91bmQgY29sb3JrZGVzY3JpcHRpb254ZEJhY2tncm91bmQgY29sb3Igb2YgdGhlIGl0ZW0gb24gT3BlblNlYS4gTXVzdCBiZSBhIHNpeC1jaGFyYWN0ZXIgaGV4YWRlY2ltYWwgd2l0aG91dCBhIHByZS1wZW5kZWQgIy5maGVhZGVyomZ1bmlxdWVwSHlra09rQnVCOHFzQXhGS2tjb250cm9sbGVyc4F4OGRpZDprZXk6ejZNa29lbllLejZNZ0pCVEhNUm1iQVpLSERMcW5ib0Z0WjdUM0hqN2IxUjF5SFc4',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1fryeoupwrqn9mokn3j5bbxz74mb9h2nsssr52gyi17g47bwxgym4n4',
    },
  },
  definitions: {
    kjzl6cwe1jw146hzzqr6xfcctyqlt0rp23mmpsijmqzba80vo7gkgs80xzbtc69: {
      alias: 'nftMetadata',
      commits: [
        {
          jws: {
            payload: 'AXESIC2t3VxWL_G20F6fpZK72m3oROBzegLOrKs-329HOO2g',
            signatures: [
              {
                signature:
                  'HMzbcGMl3HLNO5kW1EzfFcdybJaOd6aptpMaKA9W-dIb-d9V2T_9NpSjzjQlnDvChlfNAvDyRSRNbp5xcVeXBg',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa29lbllLejZNZ0pCVEhNUm1iQVpLSERMcW5ib0Z0WjdUM0hqN2IxUjF5SFc4I3o2TWtvZW5ZS3o2TWdKQlRITVJtYkFaS0hETHFuYm9GdFo3VDNIajdiMVIxeUhXOCJ9',
              },
            ],
            link: 'bafyreibnvxovyvrp6g3naxu7uwjlxwtn5bcoa432alhkzkz635xuoohnua',
          },
          linkedBlock:
            'omRkYXRho2RuYW1la25mdE1ldGFkYXRhZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5ZW91cHdycW45bW9rbjNqNWJieHo3NG1iOWgybnNzc3I1Mmd5aTE3ZzQ3Ynd4Z3ltNG40a2Rlc2NyaXB0aW9ueCNTdGFuZGFyZCAgb3BlbiBzZWEgU2NoZW1hIGZvciBuZnRzLmZoZWFkZXKjZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5MWZwNHMwbndkYXJoMHZhaHVzYXJwcG9zZ2V2eTBwZW1peWt5bWQyb3JkNnN3dGhhcmN3ZnVuaXF1ZXBkWlAxK0djSWRNV3I1L3p2a2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rb2VuWUt6Nk1nSkJUSE1SbWJBWktIRExxbmJvRnRaN1QzSGo3YjFSMXlIVzg=',
        },
      ],
      schema: 'kjzl6cwe1jw149xvbio5fnai2whxmonm7rfu4yipopzjskeercnslyca42gg48j',
      version: 'k3y52l7qbv1frxq7zy69d9p3v93172dgy6xsxjervlrv48p29851tjcp2pn80mkg0',
    },
  },
  tiles: {},
}
