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
    kjzl6cwe1jw147n74jmp5jo6bypzgke4wg4bsrbl1a0dncfiogaq5gnvimjdw1j: {
      alias: 'AddressBook',
      commits: [
        {
          jws: {
            payload: 'AXESID4ETFuQOz1289shU19T9uTs27o2LtP_GOtCe7zvEbdJ',
            signatures: [
              {
                signature:
                  'cLzma05Krng5IHSpKl6sLl4X7TZQMafMzC9CnlBts-8vmykxrDsgjgg5Hhc2WYhoaHAnh1oZScwgDQ-eqQexDQ',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa28yZ1lqUkJzNHB0bjhNV25YeGFod3VtcHpodVFLelpjSHhGRkFvVHByampjI3o2TWtvMmdZalJCczRwdG44TVduWHhhaHd1bXB6aHVRS3paY0h4RkZBb1RwcmpqYyJ9',
              },
            ],
            link: 'bafyreib6argfxeb3hv3phwzbknpvh5xe5tn3unro2p7rr22cpo6o6enxje',
          },
          linkedBlock:
            'omRkYXRhpmR0eXBlZm9iamVjdGV0aXRsZWtBZGRyZXNzQm9va2ckc2NoZW1heCdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNocmVxdWlyZWSCaXRvdGFsX2NudGhjb250YWN0c2pwcm9wZXJ0aWVzomhjb250YWN0c6NkdHlwZWVhcnJheWVpdGVtc6RkdHlwZWZvYmplY3RocmVxdWlyZWSCZG5hbWVnd2FsbGV0c2pwcm9wZXJ0aWVzpWRkYXRho2R0eXBlZm9iamVjdGpwcm9wZXJ0aWVzoGtkZXNjcmlwdGlvbngpRmllbGRzIHRvIGluY2x1ZGUgb3B0aW9uYWwgYXJiaXRyYXJ5IGRhdGFkbmFtZaNkdHlwZWZzdHJpbmdnZGVmYXVsdGBrZGVzY3JpcHRpb25yVGhlIGNvbnRhY3QncyBuYW1lZHRhZ3OlZHR5cGVlYXJyYXllaXRlbXOhZHR5cGVmc3RyaW5naG1pbkl0ZW1zAWtkZXNjcmlwdGlvbngdT3B0aW9uYWwgdGFncyBmb3IgdGhlIGNvbnRhY3RrdW5pcXVlSXRlbXP1ZmF2YXRhcqNkdHlwZWZzdHJpbmdnZGVmYXVsdGBrZGVzY3JpcHRpb254G09wdGlvbmFsIFVSSSBvZiB1c2VyIGF2YXRhcmd3YWxsZXRzpGR0eXBlZWFycmF5ZWl0ZW1zpWR0eXBlZm9iamVjdGdkZWZhdWx0oGhyZXF1aXJlZIJtd2FsbGV0QWRkcmVzc2duZXR3b3JranByb3BlcnRpZXOiZ25ldHdvcmuiZHR5cGVmc3RyaW5nZ2RlZmF1bHRgbXdhbGxldEFkZHJlc3OiZHR5cGVmc3RyaW5nZ2RlZmF1bHRgdGFkZGl0aW9uYWxQcm9wZXJ0aWVz9GdkZWZhdWx0gGtkZXNjcmlwdGlvbnhEQ29sbGVjdGlvbiBvZiB0aGUgY29udGFjdCdzIHdhbGxldCBhZGRyZXNzZXMgYW5kIHJlc3BlY3RpdmUgbmV0d29ya3N0YWRkaXRpb25hbFByb3BlcnRpZXP0Z2RlZmF1bHSAaXRvdGFsX2NudKNkdHlwZWdpbnRlZ2VyZ2RlZmF1bHQAa2Rlc2NyaXB0aW9ueBxUaGUgdG90YWwgbnVtYmVyIG9mIGNvbnRhY3RzdGFkZGl0aW9uYWxQcm9wZXJ0aWVz9GZoZWFkZXKiZnVuaXF1ZXA3Z0JPbGM1bmFER3lNQUpRa2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rbzJnWWpSQnM0cHRuOE1Xblh4YWh3dW1wemh1UUt6WmNIeEZGQW9UcHJqamM=',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1frxycyoblevfvx12ws5t0iuqmrwiadl36p20ectvw9yuhs4g9uruv4',
    },
    kjzl6cwe1jw1498mkozzt1s0q6rw1ieag44wxppo3sggx0u85z4wldh8tuz3a4v: {
      alias: 'DIDToAddressBook',
      commits: [
        {
          jws: {
            payload: 'AXESIGr0-2scet794Hl3xfowE2DbqQtzMNAofBb32W8GlzYp',
            signatures: [
              {
                signature:
                  'wA-NpaniODLFFfPUeinuPwCU37hs0re0_kHdWVEEJg5nmY_NE6QZnYGV8nUyTWs4rxF5Zqf79WRcZjE-SvtVDA',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa28yZ1lqUkJzNHB0bjhNV25YeGFod3VtcHpodVFLelpjSHhGRkFvVHByampjI3o2TWtvMmdZalJCczRwdG44TVduWHhhaHd1bXB6aHVRS3paY0h4RkZBb1RwcmpqYyJ9',
              },
            ],
            link: 'bafyreidk6t5wwhd23366a6lxyx5dae3a3ouqw4zq2auhyfxx3fxqnfzwfe',
          },
          linkedBlock:
            'omRkYXRhpWR0eXBlZm9iamVjdGV0aXRsZXBESURUb0FkZHJlc3NCb29rZyRzY2hlbWF4J2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDcvc2NoZW1hI2hyZXF1aXJlZIFnbWFwcGluZ2pwcm9wZXJ0aWVzoWdtYXBwaW5nomR0eXBlZWFycmF5ZWl0ZW1zo2R0eXBlZm9iamVjdGhyZXF1aXJlZIJodXNlcl9ESUR1YWRkcmVzc19ib29rX3N0cmVhbUlEanByb3BlcnRpZXOiaHVzZXJfRElEo2R0eXBlZnN0cmluZ2dkZWZhdWx0YGtkZXNjcmlwdGlvbm5UaGUgdXNlcidzIERJRHVhZGRyZXNzX2Jvb2tfc3RyZWFtSUSjZHR5cGVmc3RyaW5nZ2RlZmF1bHRga2Rlc2NyaXB0aW9ueDdUaGUgc3RyZWFtSUQgb2YgdGhlIEFkZHJlc3MgQm9vayBhc3NvY2lhdGVkIHRvIHRoZSB1c2VyZmhlYWRlcqJmdW5pcXVlcHZWcVRqQlNMZWdZdTROcTFrY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtvMmdZalJCczRwdG44TVduWHhhaHd1bXB6aHVRS3paY0h4RkZBb1RwcmpqYw==',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1fry9pcj5rymkn9686buqtmaley7qujeyd4atyy2huvrzumsc9jc2kg',
    },
  },
  definitions: {
    kjzl6cwe1jw149hy5kge1gqmp669kvn2c0xmnrr109wajqrwteg9mdmlalzaku4: {
      alias: 'myAddressBook',
      commits: [
        {
          jws: {
            payload: 'AXESIPWtdLH9-d-kX4Wz_Jr1bXGpwgu_4DOQmzOfi8SPCo3N',
            signatures: [
              {
                signature:
                  'hcri0OvMXBD_57Qm8y4TD7MpkhzVsAQyN3KijGu0_LMGrgf8EfnSTBc6xu8YoEo4QdjkrnbGP8noVKoNHNFyCQ',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa28yZ1lqUkJzNHB0bjhNV25YeGFod3VtcHpodVFLelpjSHhGRkFvVHByampjI3o2TWtvMmdZalJCczRwdG44TVduWHhhaHd1bXB6aHVRS3paY0h4RkZBb1RwcmpqYyJ9',
              },
            ],
            link: 'bafyreihvvv2ld7pz36sf7bnt7snpk3lrvhbaxp7agoijwm47rpci6cunzu',
          },
          linkedBlock:
            'omRkYXRho2RuYW1lb015IEFkZHJlc3MgQm9va2ZzY2hlbWF4S2NlcmFtaWM6Ly9rM3k1Mmw3cWJ2MWZyeHljeW9ibGV2ZnZ4MTJ3czV0MGl1cW1yd2lhZGwzNnAyMGVjdHZ3OXl1aHM0Zzl1cnV2NGtkZXNjcmlwdGlvbngiQW4gYWRkcmVzcyBib29rIHRvIG1hbmFnZSBjb250YWN0c2ZoZWFkZXKjZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5MWZwNHMwbndkYXJoMHZhaHVzYXJwcG9zZ2V2eTBwZW1peWt5bWQyb3JkNnN3dGhhcmN3ZnVuaXF1ZXBUNnVudHMwS0pXMDdTV2xWa2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rbzJnWWpSQnM0cHRuOE1Xblh4YWh3dW1wemh1UUt6WmNIeEZGQW9UcHJqamM=',
        },
      ],
      schema: 'kjzl6cwe1jw147n74jmp5jo6bypzgke4wg4bsrbl1a0dncfiogaq5gnvimjdw1j',
      version: 'k3y52l7qbv1frybjmvlgjuf1dezwk4h00lin551c75ydn0eehd2rof4wnfgaz864g',
    },
    kjzl6cwe1jw147ff7ga8wa97ytivguq3cb2umpwkvdbuyydx7drpnaitmtvhx8r: {
      alias: 'DIDToAddressBook',
      commits: [
        {
          jws: {
            payload: 'AXESIGaxbVMY3GvSbKEv_pFAaGxk3MZWXAH69mkEMymSc1ep',
            signatures: [
              {
                signature:
                  'sWHtQ4pyBJq8sphe7g2BZeZTz6QP6JSGlxN5d-rPxwNnTPTIAyQaa3uUKoVszbzXQZM-o6H_gAKhknc2fjl1Bw',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa28yZ1lqUkJzNHB0bjhNV25YeGFod3VtcHpodVFLelpjSHhGRkFvVHByampjI3o2TWtvMmdZalJCczRwdG44TVduWHhhaHd1bXB6aHVRS3paY0h4RkZBb1RwcmpqYyJ9',
              },
            ],
            link: 'bafyreidgwfwvggg4npjgzijp72iua2dmmtommvs4ah5pm2iegmuze42xve',
          },
          linkedBlock:
            'omRkYXRho2RuYW1leBtESUQgdG8gQWRkcmVzcyBCb29rIG1hcHBpbmdmc2NoZW1heEtjZXJhbWljOi8vazN5NTJsN3FidjFmcnk5cGNqNXJ5bWtuOTY4NmJ1cXRtYWxleTdxdWpleWQ0YXR5eTJodXZyenVtc2M5amMya2drZGVzY3JpcHRpb254MkEgMToxIG1hcHBpbmcgYmV0d2VlbiBhIERJRCBhbmQgdGhlaXIgYWRkcmVzcyBib29rZmhlYWRlcqNmc2NoZW1heEtjZXJhbWljOi8vazN5NTJsN3FidjFmcnkxZnA0czBud2RhcmgwdmFodXNhcnBwb3NnZXZ5MHBlbWl5a3ltZDJvcmQ2c3d0aGFyY3dmdW5pcXVlcGVZcnRaaEt0djN3SEtMU25rY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtvMmdZalJCczRwdG44TVduWHhhaHd1bXB6aHVRS3paY0h4RkZBb1RwcmpqYw==',
        },
      ],
      schema: 'kjzl6cwe1jw1498mkozzt1s0q6rw1ieag44wxppo3sggx0u85z4wldh8tuz3a4v',
      version: 'k3y52l7qbv1frxwto4zsv9kxknly7ruhjris9tk7of2sc8kj04hx2dmtuqcfzge80',
    },
  },
  tiles: {},
}
