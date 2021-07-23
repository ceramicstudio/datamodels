import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { AlsoKnownAs } from '../types/AlsoKnownAs'

export * from '../types/AlsoKnownAs'

export type ModelTypes = ModelTypeAliases<
  { AlsoKnownAs: AlsoKnownAs },
  { alsoKnownAs: 'AlsoKnownAs' }
>

export const model: EncodedManagedModel = {
  definitions: {
    kjzl6cwe1jw146zfmqa10a5x1vry6au3t362p44uttz4l0k4hi88o41zplhmxnf: {
      alias: 'alsoKnownAs',
      commits: [
        {
          jws: {
            payload: 'AXESIOWmE0CF2MHEz0PmBVBOkCvzCVXNE5Mg-894RRaXaZJe',
            signatures: [
              {
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3NOWUU2V3RNWjNXTGJQd2NwOUdtN2RUN0ozRHNOUDhhdVFOblBwUUJ1MzdBI3o2TWtzTllFNld0TVozV0xiUHdjcDlHbTdkVDdKM0RzTlA4YXVRTm5QcFFCdTM3QSJ9',
                signature:
                  'GurUQxUEzBdidKjlPdv09NLD-aG787p47ghUMW2PA5av49soVKe3I4xntq4OzXHXm-weLzuMFUFxkURvgUDuAA',
              },
            ],
            link: 'bafyreihfuyjubboyyhcm6q7gavie5ebl6mevltitsmqpxt3yiuljo2msly',
          },
          linkedBlock:
            'o2RkYXRho2RuYW1lbUFsc28gS25vd24gQXNmc2NoZW1heEtjZXJhbWljOi8vazN5NTJsN3FidjFmcnlvanQ4bjhjdzJrMDRwOXdwNjdseTU5aXdxczY1ZGVqc281NjZmaWo1d3NkcmI4NzF5aW9rZGVzY3JpcHRpb254ZEFsc28gS25vd24gQXMgaXMgYSBkYXRhIHNldCB0aGF0IHN0b3JlcyBhIGxpc3Qgb2YgYWNjb3VudHMgdGhhdCBhcmUgcHVibGljbHkgbGlua2VkIHRvIHRoZSB1c2VycyBESURmaGVhZGVyomZzY2hlbWF4S2NlcmFtaWM6Ly9rM3k1Mmw3cWJ2MWZyeTFmcDRzMG53ZGFyaDB2YWh1c2FycHBvc2dldnkwcGVtaXlreW1kMm9yZDZzd3RoYXJjd2tjb250cm9sbGVyc4F4OGRpZDprZXk6ejZNa3NOWUU2V3RNWjNXTGJQd2NwOUdtN2RUN0ozRHNOUDhhdVFOblBwUUJ1MzdBZ2RvY3R5cGVkdGlsZQ==',
        },
      ],
      schema: 'kjzl6cwe1jw14bbsas0m29cxrnsyesfp0v45gz9l44p3wpw86j21kio8onil8po',
      version: 'k3y52l7qbv1frxtnz5mvb60a31dyr0t232uj76lej855slfz3whmlngu5y0tf3aio',
    },
  },
  schemas: {
    kjzl6cwe1jw14bbsas0m29cxrnsyesfp0v45gz9l44p3wpw86j21kio8onil8po: {
      alias: 'AlsoKnownAs',
      commits: [
        {
          jws: {
            payload: 'AXESIALdl9Z9fNLBS6NfkZ2JRIClBQFb0cIi2rVwS1Kie2k1',
            signatures: [
              {
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3NOWUU2V3RNWjNXTGJQd2NwOUdtN2RUN0ozRHNOUDhhdVFOblBwUUJ1MzdBI3o2TWtzTllFNld0TVozV0xiUHdjcDlHbTdkVDdKM0RzTlA4YXVRTm5QcFFCdTM3QSJ9',
                signature:
                  'bg4CcLmHGYPYsRvl_EObk2HgtOjijDNBJrOzupI2NMT-n_3Wj4GaUn83wA2IqTtql5uZRpgBYqxOjGdH4GB6CA',
              },
            ],
            link: 'bafyreiac3wl5m7l42lauxi27sgoysreauucqcw6ryirnvnlqjnjke63jgu',
          },
          linkedBlock:
            'o2RkYXRhp2R0eXBlZm9iamVjdGV0aXRsZWtBbHNvS25vd25Bc2ckc2NoZW1heCdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNocmVxdWlyZWSBaGFjY291bnRzanByb3BlcnRpZXOhaGFjY291bnRzomR0eXBlZWFycmF5ZWl0ZW1zoWQkcmVmdSMvZGVmaW5pdGlvbnMvQWNjb3VudGtkZWZpbml0aW9uc6JnQWNjb3VudKNkdHlwZWZvYmplY3RocmVxdWlyZWSCaHByb3RvY29sYmlkanByb3BlcnRpZXOlYmlkomR0eXBlZnN0cmluZ2ltYXhMZW5ndGgZAcJkaG9zdKJkdHlwZWZzdHJpbmdpbWF4TGVuZ3RoGJZlY2xhaW2iZHR5cGVmc3RyaW5naW1heExlbmd0aBkBwmhwcm90b2NvbKJkdHlwZWZzdHJpbmdpbWF4TGVuZ3RoGDJsYXR0ZXN0YXRpb25zomR0eXBlZWFycmF5ZWl0ZW1zoWQkcmVmeBkjL2RlZmluaXRpb25zL0F0dGVzdGF0aW9ua0F0dGVzdGF0aW9uomR0eXBlZm9iamVjdGpwcm9wZXJ0aWVzomdkaWQtand0omR0eXBlZnN0cmluZ2ltYXhMZW5ndGgZA+hqZGlkLWp3dC12Y6JkdHlwZWZzdHJpbmdpbWF4TGVuZ3RoGQPodGFkZGl0aW9uYWxQcm9wZXJ0aWVz9GZoZWFkZXKiZnNjaGVtYfdrY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtzTllFNld0TVozV0xiUHdjcDlHbTdkVDdKM0RzTlA4YXVRTm5QcFFCdTM3QWdkb2N0eXBlZHRpbGU=',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1fryojt8n8cw2k04p9wp67ly59iwqs65dejso566fij5wsdrb871yio',
    },
  },
  tiles: {},
}
