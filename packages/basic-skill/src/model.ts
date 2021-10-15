import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { BasicSkill } from '../types/BasicSkill'

export type { BasicSkill } from '../types/BasicSkill'

export type ModelTypes = ModelTypeAliases<{ BasicSkill: BasicSkill }, { basicSkill: 'BasicSkill' }>

export const model: EncodedManagedModel = {
  schemas: {
    kjzl6cwe1jw14aop1hu0uglqwexhktzw9hynsct7l171anyqxl83ropydjugl8c: {
      alias: 'BasicSkill',
      commits: [
        {
          jws: {
            payload: 'AXESIMCCjBdTYs0G_yELnnU1zK4OCDM93X8x4fX43AFoHVtu',
            signatures: [
              {
                signature:
                  'yvAXjvsvOdoHwPz7S906N0Fd5a-QCizHJWN-7i6L88Ri7OWacFlKNCpnWWdws6s6s05GZo8S00Qkeqv8H2CeBg',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3BuVjNVVkhZWW9xd21YTDVmU0NmeGt6OFRHYnlWTENBeXFoTEUxNmROeXJ0I3o2TWtwblYzVVZIWVlvcXdtWEw1ZlNDZnhrejhUR2J5VkxDQXlxaExFMTZkTnlydCJ9'
              }
            ],
            link: 'bafyreigaqkgbou3czudp6iiltz2tltfobyedgpo5p4y6d5py3qawqhk3ny'
          },
          linkedBlock:
            'omRkYXRhpmR0eXBlZm9iamVjdGV0aXRsZWpCYXNpY1NraWxsZyRzY2hlbWF4J2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDcvc2NoZW1hI2pwcm9wZXJ0aWVzoGtkZWZpbml0aW9uc6BrZGVzY3JpcHRpb254MEEgbGlnaHR3ZWlnaHQgc2NoZW1hIGZvciBza2lsbHMgYW5kIGNyZWRlbnRpYWxzLmZoZWFkZXKiZnVuaXF1ZXB1Zk5BekxVY1VvNmUyb3Yya2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rcG5WM1VWSFlZb3F3bVhMNWZTQ2Z4a3o4VEdieVZMQ0F5cWhMRTE2ZE55cnQ='
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1fryjzm2mti0m2nai6505b9fjqh5n3pxki17uf3iuxmsvskgd4lyz9c'
    },
  },
  definitions: {},
  tiles: {},
}
