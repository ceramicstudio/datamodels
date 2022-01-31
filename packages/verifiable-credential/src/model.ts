import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { VerifiableCredential } from '../types/VerifiableCredential'

export type { VerifiableCredential } from '../types/VerifiableCredential'

export type ModelTypes = ModelTypeAliases<
  { VerifiableCredential: VerifiableCredential },
  { VerifiableCredential: 'VerifiableCredential' }
>

export const model: EncodedManagedModel = {
  schemas: {
    kjzl6cwe1jw1490un4zg0q81oulb794vq27zxlz3s1igoldkcd9xeflalww68bc: {
      alias: 'VerifiableCredential',
      commits: [
        {
          jws: {
            payload: 'AXESIIQHcBIIR77GfhEu6fk81x3AwP6cWSzNrwY3AmMzGdit',
            signatures: [
              {
                signature:
                  'Dfr1NvX7iGgXSTqzzoeb3Gmio3X2wDuHTzRw5i60EAE08nZlYsLapxyagccOR7hUkagwXHGt0aNfqG1sZraGBQ',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreieea5ybecchx3dh4ejo5h4tzvy5ydap5hczftg26brxajrtggoyvu',
          },
          linkedBlock:
            'omRkYXRhqGR0eXBlZm9iamVjdGV0aXRsZXRWZXJpZmlhYmxlQ3JlZGVudGlhbGckc2NoZW1heCdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNocmVxdWlyZWSFYmlkZmlzc3VlcnFjcmVkZW50aWFsU3ViamVjdHBjcmVkZW50aWFsU2NoZW1hbGlzc3VhbmNlRGF0ZWpwcm9wZXJ0aWVzrWJpZKFkJHJlZngaIy9kZWZpbml0aW9ucy9DZXJhbWljRG9jSWRkdHlwZaJkdHlwZWVhcnJheWVpdGVtc6FkdHlwZWZzdHJpbmdlX3R5cGWhZHR5cGVmc3RyaW5nZXByb29moWR0eXBlZm9iamVjdGZpc3N1ZXKjZHR5cGVmb2JqZWN0aHJlcXVpcmVkgWJpZGpwcm9wZXJ0aWVzomJpZKFkdHlwZWZzdHJpbmdvZXRoZXJldW1BZGRyZXNzoWR0eXBlZnN0cmluZ2hAY29udGV4dKJkdHlwZWVhcnJheWVpdGVtc6FkdHlwZWZzdHJpbmdoX2NvbnRleHShZHR5cGVmc3RyaW5naGV2aWRlbmNloWR0eXBlZm9iamVjdGxpc3N1YW5jZURhdGWhZHR5cGVmc3RyaW5nbmV4cGlyYXRpb25EYXRloWR0eXBlZnN0cmluZ3BjcmVkZW50aWFsU2NoZW1ho2R0eXBlZm9iamVjdGhyZXF1aXJlZIFiaWRqcHJvcGVydGllc6NiaWShZHR5cGVmc3RyaW5nZHR5cGWhZHR5cGVmc3RyaW5nZV90eXBloWR0eXBlZnN0cmluZ3BjcmVkZW50aWFsU3RhdHVzo2R0eXBlZm9iamVjdGhyZXF1aXJlZIFiaWRqcHJvcGVydGllc6NiaWShZHR5cGVmc3RyaW5nZHR5cGWhZHR5cGVmc3RyaW5nZV90eXBloWR0eXBlZnN0cmluZ3FjcmVkZW50aWFsU3ViamVjdKNkdHlwZWZvYmplY3RocmVxdWlyZWSBYmlkanByb3BlcnRpZXOiYmlkoWR0eXBlZnN0cmluZ29ldGhlcmV1bUFkZHJlc3OhZHR5cGVmc3RyaW5na2RlZmluaXRpb25zoWxDZXJhbWljRG9jSWSjZHR5cGVmc3RyaW5nZ3BhdHRlcm54HF5jZXJhbWljOi8vLisoXD92ZXJzaW9uPS4rKT9pbWF4TGVuZ3RoGJZrZGVzY3JpcHRpb254dkEgW1tWZXJpZmlhYmxlQ3JlZGVudGlhbF1dIGlzIGZhY3QtY2hlY2tpbmcgcmV2aWV3L2F0dGVzdGF0aW9uIG9mIGNsYWltcyBtYWRlIChvciByZXBvcnRlZCkgaW4gYSBbW0NsYWltZWRDcmVkZW50aWFsXV10YWRkaXRpb25hbFByb3BlcnRpZXP1ZmhlYWRlcqJmdW5pcXVlcFF5SENZS2p6OHBpU2hhVm5rY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWA==',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1fry861wjg1x6h80pjjnkyplbsvj09mveramw0gnyelimvfftwsb4lc',
    },
  },
  definitions: {
    kjzl6cwe1jw147izyzy3ewzhun1ei1p5ua18anxgd9lc3hs14eyddsltq8tre5h: {
      alias: 'verifiableCredential',
      commits: [
        {
          jws: {
            payload: 'AXESIDVRIoprXL0w1Em2IweS5xHzTsSkJHvw3gYZxF0AI_0X',
            signatures: [
              {
                signature:
                  'RhK1Cq8lrnz39ghXZ10JkSwcwBbz5jrB8zVOWp1H-_s6gbY5NLy-LalkMTiaQjwZL1qf5n0g_3LcFA9Mmr3vDQ',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa214RUgzdFBqbzQ3dEhqc1RGenloS1FVcDlMNU5QNXdzMTJXelNKNk1rNUVYI3o2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWCJ9',
              },
            ],
            link: 'bafyreibvkeriu224xuynisnwemdzfzyr6nhmjjbeppyn4bqzyroqai75c4',
          },
          linkedBlock:
            'omRkYXRho2RuYW1ldHZlcmlmaWFibGVDcmVkZW50aWFsZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5ODYxd2pnMXg2aDgwcGpqbmt5cGxic3ZqMDltdmVyYW13MGdueWVsaW12ZmZ0d3NiNGxja2Rlc2NyaXB0aW9ueHZBIFtbVmVyaWZpYWJsZUNyZWRlbnRpYWxdXSBpcyBmYWN0LWNoZWNraW5nIHJldmlldy9hdHRlc3RhdGlvbiBvZiBjbGFpbXMgbWFkZSAob3IgcmVwb3J0ZWQpIGluIGEgW1tDbGFpbWVkQ3JlZGVudGlhbF1dZmhlYWRlcqNmc2NoZW1heEtjZXJhbWljOi8vazN5NTJsN3FidjFmcnkxZnA0czBud2RhcmgwdmFodXNhcnBwb3NnZXZ5MHBlbWl5a3ltZDJvcmQ2c3d0aGFyY3dmdW5pcXVlcG02VkFXZmR6Q0loMnZMeVprY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtteEVIM3RQam80N3RIanNURnp5aEtRVXA5TDVOUDV3czEyV3pTSjZNazVFWA==',
        },
      ],
      schema: 'kjzl6cwe1jw1490un4zg0q81oulb794vq27zxlz3s1igoldkcd9xeflalww68bc',
      version: 'k3y52l7qbv1frxxj3svmga2kexvtz4c2xjbcqzu5wec7q0ufbzecf63f7emrmsmww',
    },
  },
  tiles: {},
}
