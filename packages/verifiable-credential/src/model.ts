import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { VerifiableCredential } from '../types/VerifiableCredential'

export type { VerifiableCredential } from '../types/VerifiableCredential'

export type ModelTypes = ModelTypeAliases<
  { VerifiableCredential: VerifiableCredential },
  { VerifiableCredential: 'VerifiableCredential' }
>

export const model: EncodedManagedModel = {
  schemas: {
    kjzl6cwe1jw148ecwbz1vnrcrpbx6qn5hqxyv0h38xkjmxxx4pszcyo98ahwsd8: {
      alias: 'VerifiableCredential',
      commits: [
        {
          jws: {
            payload: 'AXESIKwMLEai07ofB3yUjtEFulUL_mlIdyxeAmkpZTujLNYX',
            signatures: [
              {
                signature:
                  'LrHWlSu70ajV_RBy93wWirRMRoO57KwQxtfqxXEzLVJbfW4kr1i0cU3yLRGCIQ5cFNYmkbYyy564dmZDxaFJDg',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreifmbqweniwtxipqo7eur3iqlosvbp7gssdxfrpae2jjmu52glgwc4',
          },
          linkedBlock:
            'omRkYXRhqGR0eXBlZm9iamVjdGV0aXRsZXRWZXJpZmlhYmxlQ3JlZGVudGlhbGckc2NoZW1heCdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNocmVxdWlyZWSFYmlkZmlzc3VlcnFjcmVkZW50aWFsU3ViamVjdHBjcmVkZW50aWFsU2NoZW1hbGlzc3VhbmNlRGF0ZWpwcm9wZXJ0aWVzrWJpZKFkJHJlZngaIy9kZWZpbml0aW9ucy9DZXJhbWljRG9jSWRkdHlwZaJkdHlwZWVhcnJheWVpdGVtc6FkdHlwZWZzdHJpbmdlX3R5cGWhZHR5cGVmc3RyaW5nZXByb29moWR0eXBlZm9iamVjdGZpc3N1ZXKjZHR5cGVmb2JqZWN0aHJlcXVpcmVkgWJpZGpwcm9wZXJ0aWVzomJpZKFkdHlwZWZzdHJpbmdvZXRoZXJldW1BZGRyZXNzoWR0eXBlZnN0cmluZ2hAY29udGV4dKJkdHlwZWVhcnJheWVpdGVtc6FkdHlwZWZzdHJpbmdoX2NvbnRleHShZHR5cGVmc3RyaW5naGV2aWRlbmNloWR0eXBlZm9iamVjdGxpc3N1YW5jZURhdGWhZHR5cGVmc3RyaW5nbmV4cGlyYXRpb25EYXRloWR0eXBlZnN0cmluZ3BjcmVkZW50aWFsU2NoZW1ho2R0eXBlZm9iamVjdGhyZXF1aXJlZIFiaWRqcHJvcGVydGllc6NiaWShZHR5cGVmc3RyaW5nZHR5cGWhZHR5cGVmc3RyaW5nZV90eXBloWR0eXBlZnN0cmluZ3BjcmVkZW50aWFsU3RhdHVzo2R0eXBlZm9iamVjdGhyZXF1aXJlZIFiaWRqcHJvcGVydGllc6NiaWShZHR5cGVmc3RyaW5nZHR5cGWhZHR5cGVmc3RyaW5nZV90eXBloWR0eXBlZnN0cmluZ3FjcmVkZW50aWFsU3ViamVjdKNkdHlwZWZvYmplY3RocmVxdWlyZWSBYmlkanByb3BlcnRpZXOiYmlkoWR0eXBlZnN0cmluZ29ldGhlcmV1bUFkZHJlc3OhZHR5cGVmc3RyaW5na2RlZmluaXRpb25zoWxDZXJhbWljRG9jSWSjZHR5cGVmc3RyaW5nZ3BhdHRlcm54HF5jZXJhbWljOi8vLisoXD92ZXJzaW9uPS4rKT9pbWF4TGVuZ3RoGJZrZGVzY3JpcHRpb254dkEgW1tWZXJpZmlhYmxlQ3JlZGVudGlhbF1dIGlzIGZhY3QtY2hlY2tpbmcgcmV2aWV3L2F0dGVzdGF0aW9uIG9mIGNsYWltcyBtYWRlIChvciByZXBvcnRlZCkgaW4gYSBbW0NsYWltZWRDcmVkZW50aWFsXV10YWRkaXRpb25hbFByb3BlcnRpZXP1ZmhlYWRlcqJmdW5pcXVlcC9pbkRoaTVnY25IcXZxTmtrY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWA==',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1fry3q3px59d4yit04rzxgn27ljwjdj3iq3n5d7lji3g6khmynd5q0w',
    },
  },
  definitions: {
    kjzl6cwe1jw1471fbf2hsykm4q8aq6rwia6ewnd4g237y2wycyiqg019sd6s5u0: {
      alias: 'verifiableCredential',
      commits: [
        {
          jws: {
            payload: 'AXESIK6NhbbsC-DZyJgaovtZ_zjG3-jXMY5S5pnujKuVUT1O',
            signatures: [
              {
                signature:
                  'YnmXK-iTrlJ8ZvVy5nnOLDIokWErro131ziTUgtEUQWMi4HQ0TN0CUSM5uDEGINhNR_LPhET3WlczqCGKm66AQ',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreiforwc3n3al4dm4rga2ul5vt7zyy3p6rvzrrzjongporsvzkuj5jy',
          },
          linkedBlock:
            'omRkYXRho2RuYW1ldHZlcmlmaWFibGVDcmVkZW50aWFsZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5M3EzcHg1OWQ0eWl0MDRyenhnbjI3bGp3amRqM2lxM241ZDdsamkzZzZraG15bmQ1cTB3a2Rlc2NyaXB0aW9ueHZBIFtbVmVyaWZpYWJsZUNyZWRlbnRpYWxdXSBpcyBmYWN0LWNoZWNraW5nIHJldmlldy9hdHRlc3RhdGlvbiBvZiBjbGFpbXMgbWFkZSAob3IgcmVwb3J0ZWQpIGluIGEgW1tDbGFpbWVkQ3JlZGVudGlhbF1dZmhlYWRlcqNmc2NoZW1heEtjZXJhbWljOi8vazN5NTJsN3FidjFmcnkxZnA0czBud2RhcmgwdmFodXNhcnBwb3NnZXZ5MHBlbWl5a3ltZDJvcmQ2c3d0aGFyY3dmdW5pcXVlcHZDWVVuM25yK1UxbUdJVTJrY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWA==',
        },
      ],
      schema: 'kjzl6cwe1jw148ecwbz1vnrcrpbx6qn5hqxyv0h38xkjmxxx4pszcyo98ahwsd8',
      version: 'k3y52l7qbv1frxu24x75qlxuldmj0a86f60dm065bm6uwicqcc5h81s91lps89hc0',
    },
  },
  tiles: {},
}
