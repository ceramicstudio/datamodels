import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { VerifiableCredential } from '../types/VerifiableCredential'

export type { VerifiableCredential } from '../types/VerifiableCredential'

export type ModelTypes = ModelTypeAliases<
  { VerifiableCredential: VerifiableCredential },
  { VerifiableCredential: 'VerifiableCredential' }
>

export const model: EncodedManagedModel = {
  schemas: {
    kjzl6cwe1jw145jqpdg1ylpk56z799mgi2k7wyw1m4twy68lwpqoac33nc43art: {
      alias: 'VerifiableCredential',
      commits: [
        {
          jws: {
            payload: 'AXESIDBcvyeq5CO_lwPD4toPUrAJQ28b7pTmAjOmEdQakx7f',
            signatures: [
              {
                signature:
                  'KHkNpxHdCT3suUobBPhV5XH3BuyGN2jf9PqKgYkJAkjt8vYseK5u_vx0tMj7keGCDxUyY7v_WHFPN5gli63aCA',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreibqls7spkxeeo7zoa6d4lna6uvqbfbw6g7osttaem5gchkbvey634',
          },
          linkedBlock:
            'omRkYXRhqGR0eXBlZm9iamVjdGV0aXRsZXRWZXJpZmlhYmxlQ3JlZGVudGlhbGckc2NoZW1heCdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNocmVxdWlyZWSFYmlkZmlzc3VlcnFjcmVkZW50aWFsU3ViamVjdHBjcmVkZW50aWFsU2NoZW1hbGlzc3VhbmNlRGF0ZWpwcm9wZXJ0aWVzrGJpZKFkJHJlZngaIy9kZWZpbml0aW9ucy9DZXJhbWljRG9jSWRkdHlwZaJkdHlwZWVhcnJheWVpdGVtc6FkdHlwZWZzdHJpbmdlX3R5cGWhZHR5cGVmc3RyaW5nZXByb29moWR0eXBlZm9iamVjdGZpc3N1ZXKjZHR5cGVmb2JqZWN0aHJlcXVpcmVkgWJpZGpwcm9wZXJ0aWVzomJpZKFkdHlwZWZzdHJpbmdvZXRoZXJldW1BZGRyZXNzoWR0eXBlZnN0cmluZ2hAY29udGV4dKJkdHlwZWVhcnJheWVpdGVtc6FkdHlwZWZzdHJpbmdoX2NvbnRleHShZHR5cGVmc3RyaW5naGV2aWRlbmNloWR0eXBlZm9iamVjdGxpc3N1YW5jZURhdGWhZHR5cGVmc3RyaW5nbmV4cGlyYXRpb25EYXRloWR0eXBlZnN0cmluZ3BjcmVkZW50aWFsU2NoZW1ho2R0eXBlZm9iamVjdGhyZXF1aXJlZIFiaWRqcHJvcGVydGllc6NiaWShZHR5cGVmc3RyaW5nZHR5cGWhZHR5cGVmc3RyaW5nZV90eXBloWR0eXBlZnN0cmluZ3FjcmVkZW50aWFsU3ViamVjdKNkdHlwZWZvYmplY3RocmVxdWlyZWSBYmlkanByb3BlcnRpZXOiYmlkoWR0eXBlZnN0cmluZ29ldGhlcmV1bUFkZHJlc3OhZHR5cGVmc3RyaW5na2RlZmluaXRpb25zoWxDZXJhbWljRG9jSWSjZHR5cGVmc3RyaW5nZ3BhdHRlcm54HF5jZXJhbWljOi8vLisoXD92ZXJzaW9uPS4rKT9pbWF4TGVuZ3RoGJZrZGVzY3JpcHRpb254dkEgW1tWZXJpZmlhYmxlQ3JlZGVudGlhbF1dIGlzIGZhY3QtY2hlY2tpbmcgcmV2aWV3L2F0dGVzdGF0aW9uIG9mIGNsYWltcyBtYWRlIChvciByZXBvcnRlZCkgaW4gYSBbW0NsYWltZWRDcmVkZW50aWFsXV10YWRkaXRpb25hbFByb3BlcnRpZXP0ZmhlYWRlcqJmdW5pcXVlcHl1Nm5RSDNFWVVicis5YUNrY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWA==',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1frxjgdwfm5y2dr8xmblwfpci7sag3vhecqb0d7sn1ophy1xy53glq8',
    },
  },
  definitions: {
    kjzl6cwe1jw148dwcu25pisuj5cyy2bjue4ui7hme81yrc1g36rmhzg47g6t3v9: {
      alias: 'verifiableCredential',
      commits: [
        {
          jws: {
            payload: 'AXESIOzTnljpl4Vc00XwRQU2TvPfoZIqPNdnUiwPaTo6qCmV',
            signatures: [
              {
                signature:
                  '8R8_vVuznDDMFJ0WEyuvLQLU4iiApC5r2nPm-VlUG_wFtTMma1AOPUGfFUp4a6xfxD1kG2EcToS5ZRR1zQKQAw',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreihm2opfr2mxqvongrpqiuctmtxt36qzekr425tvelapne5dvkbjsu',
          },
          linkedBlock:
            'omRkYXRho2RuYW1ldHZlcmlmaWFibGVDcmVkZW50aWFsZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ4amdkd2ZtNXkyZHI4eG1ibHdmcGNpN3NhZzN2aGVjcWIwZDdzbjFvcGh5MXh5NTNnbHE4a2Rlc2NyaXB0aW9ueHZBIFtbVmVyaWZpYWJsZUNyZWRlbnRpYWxdXSBpcyBmYWN0LWNoZWNraW5nIHJldmlldy9hdHRlc3RhdGlvbiBvZiBjbGFpbXMgbWFkZSAob3IgcmVwb3J0ZWQpIGluIGEgW1tDbGFpbWVkQ3JlZGVudGlhbF1dZmhlYWRlcqNmc2NoZW1heEtjZXJhbWljOi8vazN5NTJsN3FidjFmcnkxZnA0czBud2RhcmgwdmFodXNhcnBwb3NnZXZ5MHBlbWl5a3ltZDJvcmQ2c3d0aGFyY3dmdW5pcXVlcEJ5WDlUZVB1U3JVKzdLYXhrY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWA==',
        },
      ],
      schema: 'kjzl6cwe1jw145jqpdg1ylpk56z799mgi2k7wyw1m4twy68lwpqoac33nc43art',
      version: 'k3y52l7qbv1fry3mu39rclhp54648i8i544igxh9b959z6dmaeo4fzw2lwz4ezi80',
    },
  },
  tiles: {},
}
