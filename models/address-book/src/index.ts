import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { AddressBook } from '../types/AddressBook'
export type { AddressBook } from '../types/AddressBook'

import type { DIDToAddressBook } from '../types/DIDToAddressBook'
export type { DIDToAddressBook } from '../types/DIDToAddressBook'

export type ModelTypes = ModelTypeAliases<
  {
    AddressBook: AddressBook
    DIDToAddressBook: DIDToAddressBook
  },
  {
    myAddressBook: 'AddressBook'
    DIDToAddressBook: 'DIDToAddressBook'
  }
>

export const model: EncodedManagedModel = {
  schemas: {
    kjzl6cwe1jw147layx2v9p53o0i6q4hzjutuvpkkgf39u7xf68m958jdlsdos47: {
      alias: 'AddressBook',
      commits: [
        {
          jws: {
            payload: 'AXESIFHH8eYt5V4Sk7gHQnKgYYjKBPZHCCnJR4OuZgoi6jaU',
            signatures: [
              {
                signature:
                  'b4EvyuK3NZr97VmT01nsy4QFCMVBw2ck4yhsNBcLLJIf2ssr687seAOT_b0cvYVoSwDaIrdc8NoBul2JHYZuCA',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa2VpOXJyelF2aVlqcGJhVjFNcDFhVFVibmY0aWpidTNvekpVZnB5VTVQWGg3I3o2TWtlaTlycnpRdmlZanBiYVYxTXAxYVRVYm5mNGlqYnUzb3pKVWZweVU1UFhoNyJ9',
              },
            ],
            link: 'bafyreicry7y6mlpflyjjhoahijzkaymizicpmryifheupa5omyfcf2rwsq',
          },
          linkedBlock:
            'omRkYXRhpmR0eXBlZm9iamVjdGV0aXRsZWtBZGRyZXNzQm9va2ckc2NoZW1heCdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNocmVxdWlyZWSCaXRvdGFsX2NudGhjb250YWN0c2pwcm9wZXJ0aWVzomhjb250YWN0c6NkdHlwZWVhcnJheWVpdGVtc6RkdHlwZWZvYmplY3RocmVxdWlyZWSCZG5hbWVnd2FsbGV0c2pwcm9wZXJ0aWVzpWRkYXRho2R0eXBlZm9iamVjdGpwcm9wZXJ0aWVzoGtkZXNjcmlwdGlvbngpRmllbGRzIHRvIGluY2x1ZGUgb3B0aW9uYWwgYXJiaXRyYXJ5IGRhdGFkbmFtZaNkdHlwZWZzdHJpbmdnZGVmYXVsdGBrZGVzY3JpcHRpb25xVGhlIGNvbnRhY3RzIG5hbWVkdGFnc6VkdHlwZWVhcnJheWVpdGVtc6FkdHlwZWZzdHJpbmdobWluSXRlbXMBa2Rlc2NyaXB0aW9ueB1PcHRpb25hbCB0YWdzIGZvciB0aGUgY29udGFjdGt1bmlxdWVJdGVtc/VmYXZhdGFyo2R0eXBlZnN0cmluZ2dkZWZhdWx0YGtkZXNjcmlwdGlvbngbT3B0aW9uYWwgVVJJIG9mIHVzZXIgYXZhdGFyZ3dhbGxldHOkZHR5cGVlYXJyYXllaXRlbXOlZHR5cGVmb2JqZWN0Z2RlZmF1bHSgaHJlcXVpcmVkgm13YWxsZXRBZGRyZXNzZ25ldHdvcmtqcHJvcGVydGllc6JnbmV0d29ya6JkdHlwZWZzdHJpbmdnZGVmYXVsdGBtd2FsbGV0QWRkcmVzc6JkdHlwZWZzdHJpbmdnZGVmYXVsdGB0YWRkaXRpb25hbFByb3BlcnRpZXP0Z2RlZmF1bHSAa2Rlc2NyaXB0aW9ueENDb2xsZWN0aW9uIG9mIHRoZSBjb250YWN0cyB3YWxsZXQgYWRkcmVzc2VzIGFuZCByZXNwZWN0aXZlIG5ldHdvcmtzdGFkZGl0aW9uYWxQcm9wZXJ0aWVz9GdkZWZhdWx0gGl0b3RhbF9jbnSjZHR5cGVnaW50ZWdlcmdkZWZhdWx0AGtkZXNjcmlwdGlvbngcVGhlIHRvdGFsIG51bWJlciBvZiBjb250YWN0c3RhZGRpdGlvbmFsUHJvcGVydGllc/RmaGVhZGVyomZ1bmlxdWVwZjloTjNjY0h3U01jeFoyaGtjb250cm9sbGVyc4F4OGRpZDprZXk6ejZNa2VpOXJyelF2aVlqcGJhVjFNcDFhVFVibmY0aWpidTNvekpVZnB5VTVQWGg3',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1frxxzi0b8ecysa2rlbtrzwt78blhu9grb9ywdnwda918psqxtc7xts',
    },
    kjzl6cwe1jw149spw6jvjfadizftpcg2yk7du2u62df50sctwf533tker56fq3b: {
      alias: 'DIDToAddressBook',
      commits: [
        {
          jws: {
            payload: 'AXESIEdBm3r1vSlcmCPuuAAQoOIkKeG2wNZpE_SjT_TBzRFH',
            signatures: [
              {
                signature:
                  'lSGnAoowt-cq4myUZAgjVznYAKDR9QF4CaQNVfvcxxDKBtDEu8y1_fPsEwb0a1lbAFE_WJsXnF5iJMPN6yu6Bw',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa2VpOXJyelF2aVlqcGJhVjFNcDFhVFVibmY0aWpidTNvekpVZnB5VTVQWGg3I3o2TWtlaTlycnpRdmlZanBiYVYxTXAxYVRVYm5mNGlqYnUzb3pKVWZweVU1UFhoNyJ9',
              },
            ],
            link: 'bafyreichignxv5n5ffojqi7oxaabbihcequ6dnwa2zurh5fdj72mdtiri4',
          },
          linkedBlock:
            'omRkYXRhpWR0eXBlZm9iamVjdGV0aXRsZXBESURUb0FkZHJlc3NCb29rZyRzY2hlbWF4J2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDcvc2NoZW1hI2hyZXF1aXJlZIFnbWFwcGluZ2pwcm9wZXJ0aWVzoWdtYXBwaW5nomR0eXBlZWFycmF5ZWl0ZW1zo2R0eXBlZm9iamVjdGhyZXF1aXJlZIJodXNlcl9ESUR1YWRkcmVzc19ib29rX3N0cmVhbUlEanByb3BlcnRpZXOiaHVzZXJfRElEo2R0eXBlZnN0cmluZ2dkZWZhdWx0YGtkZXNjcmlwdGlvbm1UaGUgdXNlcnMgRElEdWFkZHJlc3NfYm9va19zdHJlYW1JRKNkdHlwZWZzdHJpbmdnZGVmYXVsdGBrZGVzY3JpcHRpb254N1RoZSBzdHJlYW1JRCBvZiB0aGUgQWRkcmVzcyBCb29rIGFzc29jaWF0ZWQgdG8gdGhlIHVzZXJmaGVhZGVyomZ1bmlxdWVwOHRjVTNVWGtYREpGTG9MV2tjb250cm9sbGVyc4F4OGRpZDprZXk6ejZNa2VpOXJyelF2aVlqcGJhVjFNcDFhVFVibmY0aWpidTNvekpVZnB5VTVQWGg3',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1frydo84ulca4ps700j88id1roidw6j4vfnpln8mjo63694x0trtji8',
    },
  },
  definitions: {
    kjzl6cwe1jw1487esfmzik6u8hd9swrut7i73a1b7e8m0gqza0xxuhd61l952hs: {
      alias: 'myAddressBook',
      commits: [
        {
          jws: {
            payload: 'AXESIFEWkK7SHlFy3aQWYiDEEhXgV561SEgurYkeaqNnGz7n',
            signatures: [
              {
                signature:
                  'CYXT973re2KrezmZhr3KLzHdu9ZjBBXFonKwp1C3VhbL7pJz4wWYD64yY1NMLv1nYWJ-Dp3pkvKjxvf__zMXCw',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa2VpOXJyelF2aVlqcGJhVjFNcDFhVFVibmY0aWpidTNvekpVZnB5VTVQWGg3I3o2TWtlaTlycnpRdmlZanBiYVYxTXAxYVRVYm5mNGlqYnUzb3pKVWZweVU1UFhoNyJ9',
              },
            ],
            link: 'bafyreicrc2ik5uq6kfzn3jawmiqmieqv4blz5nkijaxk3ci6nkrwogz644',
          },
          linkedBlock:
            'omRkYXRho2RuYW1lb015IGFkZHJlc3MgYm9va2ZzY2hlbWF4S2NlcmFtaWM6Ly9rM3k1Mmw3cWJ2MWZyeHh6aTBiOGVjeXNhMnJsYnRyend0NzhibGh1OWdyYjl5d2Rud2RhOTE4cHNxeHRjN3h0c2tkZXNjcmlwdGlvbnhFQWRkcmVzcyBib29rIHRvIGtlZXAgdHJhY2sgb2YgYSB1c2VycyBkaWZmZXJlbnQgYWNjb3VudHMgYW5kIGNvbnRhY3RzZmhlYWRlcqNmc2NoZW1heEtjZXJhbWljOi8vazN5NTJsN3FidjFmcnkxZnA0czBud2RhcmgwdmFodXNhcnBwb3NnZXZ5MHBlbWl5a3ltZDJvcmQ2c3d0aGFyY3dmdW5pcXVlcFFEMTVXWE5PT2ZJMkhlNlRrY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtlaTlycnpRdmlZanBiYVYxTXAxYVRVYm5mNGlqYnUzb3pKVWZweVU1UFhoNw==',
        },
      ],
      schema: 'kjzl6cwe1jw147layx2v9p53o0i6q4hzjutuvpkkgf39u7xf68m958jdlsdos47',
      version: 'k3y52l7qbv1fry2cp677gjzkn0bidpl233pdefbdbol98jb3uvapcorhmzb501qf4',
    },
    kjzl6cwe1jw145wbun7wd2507nf00thucutl5wgrl5gtbq8mh852ux33z5si6j6: {
      alias: 'DIDToAddressBook',
      commits: [
        {
          jws: {
            payload: 'AXESIAwS89gFveUl0wIhCL8AonsfPbrxHG2BrO6lA9wXjL8G',
            signatures: [
              {
                signature:
                  'tI_Y0RpA21sxRxKFlSFcu0jPOiZiGNctnTXG1_xjj4xiuoT0pMVHdd06_xUeHxMmj3tvyislJBkGStmyQacdAQ',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa2VpOXJyelF2aVlqcGJhVjFNcDFhVFVibmY0aWpidTNvekpVZnB5VTVQWGg3I3o2TWtlaTlycnpRdmlZanBiYVYxTXAxYVRVYm5mNGlqYnUzb3pKVWZweVU1UFhoNyJ9',
              },
            ],
            link: 'bafyreiamclz5qbn54us5garbbc7qbit3d463v4i4nwa2z3vfapobpdf7ay',
          },
          linkedBlock:
            'omRkYXRho2RuYW1lcERJRFRvQWRkcmVzc0Jvb2tmc2NoZW1heEtjZXJhbWljOi8vazN5NTJsN3FidjFmcnlkbzg0dWxjYTRwczcwMGo4OGlkMXJvaWR3Nmo0dmZucGxuOG1qbzYzNjk0eDB0cnRqaThrZGVzY3JpcHRpb254KExpbmsgYSB1c2VycyBESUQgd2l0aCB0aGVpciBBZGRyZXNzIEJvb2tmaGVhZGVyo2ZzY2hlbWF4S2NlcmFtaWM6Ly9rM3k1Mmw3cWJ2MWZyeTFmcDRzMG53ZGFyaDB2YWh1c2FycHBvc2dldnkwcGVtaXlreW1kMm9yZDZzd3RoYXJjd2Z1bmlxdWVwNnlQc2dzRWJnTGl6U0R6bGtjb250cm9sbGVyc4F4OGRpZDprZXk6ejZNa2VpOXJyelF2aVlqcGJhVjFNcDFhVFVibmY0aWpidTNvekpVZnB5VTVQWGg3',
        },
      ],
      schema: 'kjzl6cwe1jw149spw6jvjfadizftpcg2yk7du2u62df50sctwf533tker56fq3b',
      version: 'k3y52l7qbv1frxlxw9x464v7lieio5tqvvf6ehyv86evkjelbuhw4bva4a16pagao',
    },
  },
  tiles: {},
}
