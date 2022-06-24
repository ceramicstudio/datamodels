import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'
import { WorkCredential } from '../types/WorkCredential'
import { WorkCredentials } from '../types/WorkCredentials'

export type ModelTypes = ModelTypeAliases<
  {
    WorkCredential: WorkCredential
    WorkCredentials: WorkCredentials
  },
  {
    WorkCredential: 'WorkCredential'
    WorkCredentials: 'WorkCredentials'
  }
>

export const model: EncodedManagedModel = {
  schemas: {
    kjzl6cwe1jw145vb7ew4q0yjx67dvegzlx08k5qbq0m6l2x7kffzbzoeeos1h3n: {
      alias: 'WorkCredential',
      commits: [
        {
          jws: {
            payload: 'AXESIKokSC75KdCcuy2PXVT1uOy1QpNLkcFxxpXIRJhnmp_1',
            signatures: [
              {
                signature:
                  'WqznxgijtJlXYGEBR8DOtLz7oyGuf_UtpKi3lH4DqFwJeelohoCxfN7jgfwrdslFo0gGubLoyU9Z604ZSF8jBw',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3B6bXp0eHZQWVNDWjh0elNDQlFoc1BUeEZpeFVrcnpDRGhTS0JiUTZTdm03I3o2TWtwem16dHh2UFlTQ1o4dHpTQ0JRaHNQVHhGaXhVa3J6Q0RoU0tCYlE2U3ZtNyJ9',
              },
            ],
            link: 'bafyreifkerec56jj2colwlmplvkplohmwvbjgs4ryfy4nfoiismgpgu76u',
          },
          linkedBlock:
            'omRkYXRhpmR0eXBlZm9iamVjdGV0aXRsZW5Xb3JrQ3JlZGVudGlhbGckc2NoZW1heCdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNocmVxdWlyZWSHYnRvZGZyb21nc3VtbWFyeWV2YWx1ZWt0b2tlblN5bWJvbGluZXR3b3JrSWRvaXNzdWVkVGltZXN0YW1wanByb3BlcnRpZXO4HmJ0b6NkdHlwZWZzdHJpbmdldGl0bGVidG9rZGVzY3JpcHRpb25tcGF5ZWUgYWRkcmVzc2Rmcm9to2R0eXBlZnN0cmluZ2V0aXRsZWRmcm9ta2Rlc2NyaXB0aW9ubXBheWVyIGFkZHJlc3NkdGFnc6VkdHlwZWVhcnJheWVpdGVtc6FkdHlwZWZzdHJpbmdldGl0bGVkdGFnc2tkZXNjcmlwdGlvbml3b3JrIHRhZ3NrdW5pcXVlSXRlbXP1ZWdlbnJlo2R0eXBlZnN0cmluZ2V0aXRsZWVnZW5yZWtkZXNjcmlwdGlvbngfd29yayBnZW5yZSBlLmcsIERldiwgRGVzaWduIGV0Y2V0b1NpZ6NkdHlwZWZzdHJpbmdldGl0bGVldG9TaWdrZGVzY3JpcHRpb25yc2lnbmF0dXJlIG9mIHBleWVlZXZhbHVlo2R0eXBlZnN0cmluZ2V0aXRsZWV2YWx1ZWtkZXNjcmlwdGlvbmpwYWlkIHZhbHVlZmRldGFpbKNkdHlwZWZzdHJpbmdldGl0bGVmZGV0YWlsa2Rlc2NyaXB0aW9ua3dvcmsgZGV0YWlsZnR4SGFzaKNkdHlwZWZzdHJpbmdldGl0bGVmdHhIYXNoa2Rlc2NyaXB0aW9ud2hhc2ggb2YgdGhlIHRyYW5zYWN0aW9uZ2Zyb21TaWejZHR5cGVmc3RyaW5nZXRpdGxlZ2Zyb21TaWdrZGVzY3JpcHRpb25yc2lnbmF0dXJlIG9mIHBleWVyZ2lzUGF5ZXKjZHR5cGVnYm9vbGVhbmV0aXRsZWdpc1BheWVya2Rlc2NyaXB0aW9ueBt3aGV0aGVyIG9yIG5vdCBESUQgaXMgcGF5ZXJnam9iVHlwZaNkdHlwZWZzdHJpbmdldGl0bGVnam9iVHlwZWtkZXNjcmlwdGlvbngxY3VycmVudGx5IHN1cHBvcnQgZnVsbHRpbWUsIHBhcnR0aW1lLCBhbmQgb25ldGltZWdzdW1tYXJ5o2R0eXBlZnN0cmluZ2V0aXRsZWdzdW1tYXJ5a2Rlc2NyaXB0aW9ubHdvcmsgc3VtbWFyeWhwbGF0Zm9ybaNkdHlwZWZzdHJpbmdldGl0bGVocGxhdGZvcm1rZGVzY3JpcHRpb254LWEgdHJhbnNhY3Rpb24gcGxhdGZvcm0gaWYgZXhpc3RzIGUuZywgZ2l0Y29pbmhzdWJ0YXNrc6RkdHlwZWVhcnJheWVpdGVtc6NkdHlwZWZvYmplY3RldGl0bGVnc3VidGFza2pwcm9wZXJ0aWVzomVnZW5yZaNkdHlwZWZzdHJpbmdldGl0bGVlZ2VucmVrZGVzY3JpcHRpb254H3dvcmsgZ2VucmUgZS5nLCBEZXYsIERlc2lnbiBldGNmZGV0YWlso2R0eXBlZnN0cmluZ2V0aXRsZWZkZXRhaWxrZGVzY3JpcHRpb25rd29yayBkZXRhaWxldGl0bGVoc3VidGFza3NrZGVzY3JpcHRpb25oc3VidGFza3NodG9TaWduZXKjZHR5cGVmc3RyaW5nZXRpdGxlaHRvU2lnbmVya2Rlc2NyaXB0aW9ueCJBZGRyZXNzIG9mIHBlcnNvbiBzaWduaW5nIGFzIHBheWVlaWNyZWF0ZWRBdKJkdHlwZWZzdHJpbmdldGl0bGVpY3JlYXRlZEF0aWZpYXRWYWx1ZaNkdHlwZWZzdHJpbmdldGl0bGVldmFsdWVrZGVzY3JpcHRpb254KWZpYXQgcHJpY2UgYXQgdGhlIHRpbWUgb2YgdGhlIHRyYW5zYWN0aW9uaW5ldHdvcmtJZKNkdHlwZWZudW1iZXJldGl0bGVpbmV0d29ya0lka2Rlc2NyaXB0aW9ueB1uZXR3b3JrIGlkIG9mIHRoZSB0cmFuc2FjdGlvbml1cGRhdGVkQXSiZHR5cGVmc3RyaW5nZXRpdGxlaXVwZGF0ZWRBdGpmaWF0U3ltYm9so2R0eXBlZnN0cmluZ2V0aXRsZWpmaWF0U3ltYm9sa2Rlc2NyaXB0aW9ueBpjdXJyZW50bHkgb25seSBzdXBwb3J0IFVTRGpmcm9tU2lnbmVyo2R0eXBlZnN0cmluZ2V0aXRsZWpmcm9tU2lnbmVya2Rlc2NyaXB0aW9ueCJBZGRyZXNzIG9mIHBlcnNvbiBzaWduaW5nIGFzIHBheWVya3Rva2VuU3ltYm9so2R0eXBlZnN0cmluZ2V0aXRsZWt0b2tlblN5bWJvbGtkZXNjcmlwdGlvbnFwYWlkIHRva2VuIHN5bWJvbGxkZWxpdmVyYWJsZXOkZHR5cGVlYXJyYXllaXRlbXOjZHR5cGVmb2JqZWN0ZXRpdGxlb2RlbGl2ZXJhYmxlSXRlbWpwcm9wZXJ0aWVzomV2YWx1ZaNkdHlwZWZzdHJpbmdldGl0bGVldmFsdWVrZGVzY3JpcHRpb254H3dvcmsgZGVsaXZlcmFibGUgdmFsdWUodXJsL2NpZClmZm9ybWF0o2R0eXBlZnN0cmluZ2V0aXRsZWZmb3JtYXRrZGVzY3JpcHRpb254HmN1cnJlbnQgZm9ybWF0cyBhcmUgdXJsIG9yIGNpZGV0aXRsZWxkZWxpdmVyYWJsZXNrZGVzY3JpcHRpb25xd29yayBkZWxpdmVyYWJsZXNsZW5kVGltZXN0YW1wo2R0eXBlZnN0cmluZ2V0aXRsZWxlbmRUaW1lc3RhbXBrZGVzY3JpcHRpb254GFRpbWUgc3RhbXAgb2Ygd29yayBlbmRlZGx0b2tlbkRlY2ltYWyjZHR5cGVmbnVtYmVyZXRpdGxlbHRva2VuRGVjaW1hbGtkZXNjcmlwdGlvbnJwYWlkIHRva2VuIGRlY2ltYWxuc3RhcnRUaW1lc3RhbXCjZHR5cGVmc3RyaW5nZXRpdGxlbnN0YXJ0VGltZXN0YW1wa2Rlc2NyaXB0aW9ueBpUaW1lIHN0YW1wIG9mIHdvcmsgc3RhcnRlZG9kZWxpdmVyYWJsZUhhc2ijZHR5cGVmc3RyaW5nZXRpdGxlb2RlbGl2ZXJhYmxlSGFzaGtkZXNjcmlwdGlvbnhCaGFzaCB2YWx1ZSBvZiBhbGwgd29yayBkZXNjcmlwdGlvbnMoc3VtbWFyeSwgZGV0YWlsLCBkZWxpdmVyYWJsZXMpb2lzc3VlZFRpbWVzdGFtcKNkdHlwZWZzdHJpbmdldGl0bGVvaXNzdWVkVGltZXN0YW1wa2Rlc2NyaXB0aW9ueCRUaW1lIHN0YW1wIG9mIHRyYW5zYWN0aW9uIG9jY3VycmVuY2VvcmVsYXRlZFR4SGFzaGVzpGR0eXBlZWFycmF5ZWl0ZW1zoWR0eXBlZnN0cmluZ2V0aXRsZW9yZWxhdGVkVHhIYXNoZXNrdW5pcXVlSXRlbXP1cHJlbGF0ZWRBZGRyZXNzZXOkZHR5cGVlYXJyYXllaXRlbXOhZHR5cGVmc3RyaW5nZXRpdGxlbnJlbGF0ZWRBZGRyZXNza3VuaXF1ZUl0ZW1z9XRhZGRpdGlvbmFsUHJvcGVydGllc/RmaGVhZGVyomZ1bmlxdWVwc3hzMnlJZ3RCR1p2Qms4QWtjb250cm9sbGVyc4F4OGRpZDprZXk6ejZNa3B6bXp0eHZQWVNDWjh0elNDQlFoc1BUeEZpeFVrcnpDRGhTS0JiUTZTdm03',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1frxlqnopwhl2tpnw4inawt7upovcr7d0dqtws5t9tn99pigg7ehlvk',
    },
    kjzl6cwe1jw14aaegoi4ca3lo85qlo3wwvql7cp5un7d3l51qyhbu88giq67u63: {
      alias: 'WorkCredentials',
      commits: [
        {
          jws: {
            payload: 'AXESIE23FD-iKeiIWH-EUqhiuPdK3z_0FkRStYF-RMa1v3Zw',
            signatures: [
              {
                signature:
                  'OLPqgx2UsmnozmfQOElYjTOeWcuHEWMc5oxJlaJM0TowX-kfNFlGqz8sP4Wh4CtEFbzcW4PNEkLukR_OVCVXCg',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3B6bXp0eHZQWVNDWjh0elNDQlFoc1BUeEZpeFVrcnpDRGhTS0JiUTZTdm03I3o2TWtwem16dHh2UFlTQ1o4dHpTQ0JRaHNQVHhGaXhVa3J6Q0RoU0tCYlE2U3ZtNyJ9',
              },
            ],
            link: 'bafyreicnw4kd7irj5cefq74ekkugfohxjlpt75awirjllal6itdllp3woa',
          },
          linkedBlock:
            'omRkYXRhpWR0eXBlZm9iamVjdGV0aXRsZW9Xb3JrQ3JlZGVudGlhbHNnJHNjaGVtYXgnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNy9zY2hlbWEjanByb3BlcnRpZXOhb1dvcmtDcmVkZW50aWFsc6NkdHlwZWVhcnJheWVpdGVtc6RkdHlwZWZvYmplY3RldGl0bGVyV29ya0NyZWRlbnRpYWxJdGVtanByb3BlcnRpZXOrYmlkpGR0eXBlZnN0cmluZ2dwYXR0ZXJueBxeY2VyYW1pYzovLy4rKFw/dmVyc2lvbj0uKyk/aCRjb21tZW50eFVjaXA4ODpyZWY6Y2VyYW1pYzovL2szeTUybDdxYnYxZnJ4bHFub3B3aGwydHBudzRpbmF3dDd1cG92Y3I3ZDBkcXR3czV0OXRuOTlwaWdnN2VobHZraW1heExlbmd0aBjIZWdlbnJlo2R0eXBlZnN0cmluZ2V0aXRsZWVnZW5yZWtkZXNjcmlwdGlvbngfd29yayBnZW5yZSBlLmcsIERldiwgRGVzaWduIGV0Y2Z0eEhhc2ijZHR5cGVmc3RyaW5nZXRpdGxlZnR4SGFzaGtkZXNjcmlwdGlvbndoYXNoIG9mIHRoZSB0cmFuc2FjdGlvbmdpc1BheWVyo2R0eXBlZ2Jvb2xlYW5ldGl0bGVnaXNQYXllcmtkZXNjcmlwdGlvbngbd2hldGhlciBvciBub3QgRElEIGlzIHBheWVyZ3N1bW1hcnmjZHR5cGVmc3RyaW5nZXRpdGxlZ3N1bW1hcnlrZGVzY3JpcHRpb25sd29yayBzdW1tYXJ5aHBsYXRmb3Jto2R0eXBlZnN0cmluZ2V0aXRsZWhwbGF0Zm9ybWtkZXNjcmlwdGlvbngtYSB0cmFuc2FjdGlvbiBwbGF0Zm9ybSBpZiBleGlzdHMgZS5nLCBnaXRjb2luaWZpYXRWYWx1ZaNkdHlwZWZzdHJpbmdldGl0bGVldmFsdWVrZGVzY3JpcHRpb254KWZpYXQgcHJpY2UgYXQgdGhlIHRpbWUgb2YgdGhlIHRyYW5zYWN0aW9uamlzVmVyaWZpZWSjZHR5cGVnYm9vbGVhbmV0aXRsZWppc1ZlcmlmaWVka2Rlc2NyaXB0aW9ueD9FaXRoZXIgYm90aCBzaWduYXR1cmVzIGV4aXN0IG9yIHRoZSB0cmFuc2FjdGlvbiBpcyB2aWEgcGxhdGZvcm1sZGVsaXZlcmFibGVzpGR0eXBlZWFycmF5ZWl0ZW1zo2R0eXBlZm9iamVjdGV0aXRsZW9kZWxpdmVyYWJsZUl0ZW1qcHJvcGVydGllc6JldmFsdWWjZHR5cGVmc3RyaW5nZXRpdGxlZXZhbHVla2Rlc2NyaXB0aW9ueB93b3JrIGRlbGl2ZXJhYmxlIHZhbHVlKHVybC9jaWQpZmZvcm1hdKNkdHlwZWZzdHJpbmdldGl0bGVmZm9ybWF0a2Rlc2NyaXB0aW9ueB5jdXJyZW50IGZvcm1hdHMgYXJlIHVybCBvciBjaWRldGl0bGVsZGVsaXZlcmFibGVza2Rlc2NyaXB0aW9ucXdvcmsgZGVsaXZlcmFibGVzb2RlbGl2ZXJhYmxlSGFzaKNkdHlwZWZzdHJpbmdldGl0bGVvZGVsaXZlcmFibGVIYXNoa2Rlc2NyaXB0aW9ueEJoYXNoIHZhbHVlIG9mIGFsbCB3b3JrIGRlc2NyaXB0aW9ucyhzdW1tYXJ5LCBkZXRhaWwsIGRlbGl2ZXJhYmxlcylvaXNzdWVkVGltZXN0YW1wo2R0eXBlZnN0cmluZ2V0aXRsZW9pc3N1ZWRUaW1lc3RhbXBrZGVzY3JpcHRpb254JFRpbWUgc3RhbXAgb2YgdHJhbnNhY3Rpb24gb2NjdXJyZW5jZWtkZXNjcmlwdGlvbnJ3b3JrIGNyZWRlbnRpYWwgaWRldGl0bGVvV29ya0NyZWRlbnRpYWxzdGFkZGl0aW9uYWxQcm9wZXJ0aWVz9GZoZWFkZXKiZnVuaXF1ZXAzTDR4bUwvTDFvT1dJb0s2a2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rcHptenR4dlBZU0NaOHR6U0NCUWhzUFR4Rml4VWtyekNEaFNLQmJRNlN2bTc=',
        },
      ],
      dependencies: {
        'WorkCredentials.id': ['kjzl6cwe1jw145vb7ew4q0yjx67dvegzlx08k5qbq0m6l2x7kffzbzoeeos1h3n'],
      },
      version: 'k3y52l7qbv1fryh5yum8uvbtm4a0t63fu1tp2saaxlx0d5ibwfp786yk5h647qj9c',
    },
  },
  definitions: {
    kjzl6cwe1jw1491q8fzv2iy6qk20bi4y2deifkxut9njnuztq822duslj2m3wuv: {
      alias: 'workCredential',
      commits: [
        {
          jws: {
            payload: 'AXESICnJ_8dSganKVK5Ip-FKrX8Rsz-zqckA8VRRAW465xIh',
            signatures: [
              {
                signature:
                  'gc-xPn6q9FYeUhmU42OISvEAhM62Za9rovYz4gL7vW8dYl1YM7NTBrzfYUhopA4gOn-vT_I6f5HhcpfcpFPDAg',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3B6bXp0eHZQWVNDWjh0elNDQlFoc1BUeEZpeFVrcnpDRGhTS0JiUTZTdm03I3o2TWtwem16dHh2UFlTQ1o4dHpTQ0JRaHNQVHhGaXhVa3J6Q0RoU0tCYlE2U3ZtNyJ9',
              },
            ],
            link: 'bafyreibjzh74ouubvhffjlsiu7quvll7cgzt7m5jzeapcvcrafxdvzysee',
          },
          linkedBlock:
            'omRkYXRho2RuYW1lbndvcmtDcmVkZW50aWFsZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ4bHFub3B3aGwydHBudzRpbmF3dDd1cG92Y3I3ZDBkcXR3czV0OXRuOTlwaWdnN2VobHZra2Rlc2NyaXB0aW9ubndvcmtDcmVkZW50aWFsZmhlYWRlcqNmc2NoZW1heEtjZXJhbWljOi8vazN5NTJsN3FidjFmcnkxZnA0czBud2RhcmgwdmFodXNhcnBwb3NnZXZ5MHBlbWl5a3ltZDJvcmQ2c3d0aGFyY3dmdW5pcXVlcFNkMTg4MHAzcWZ5TndFUGFrY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtwem16dHh2UFlTQ1o4dHpTQ0JRaHNQVHhGaXhVa3J6Q0RoU0tCYlE2U3ZtNw==',
        },
      ],
      schema: 'kjzl6cwe1jw145vb7ew4q0yjx67dvegzlx08k5qbq0m6l2x7kffzbzoeeos1h3n',
      version: 'k3y52l7qbv1fry8cak1r0xyr3wuma9sz68vb72swr44nftoerehaoyizd3ml7tngg',
    },
    kjzl6cwe1jw1468dfi4s2xvft87skxxlp43pz9sscd897fw1zbl1k507u6z7pqv: {
      alias: 'workCredentials',
      commits: [
        {
          jws: {
            payload: 'AXESIP_am1xpEcDbmPpl_r5eT0I_Do6lWlpc7VhFGdfeu7s8',
            signatures: [
              {
                signature:
                  '8lu7Em1Uy4BZ1pYfxspablLUlh9Pt7huFDbv41TZNU1YNSuGLG6Kw17sSYQg2-FLBLF_VTqbG-CjSmvJicnTAQ',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3B6bXp0eHZQWVNDWjh0elNDQlFoc1BUeEZpeFVrcnpDRGhTS0JiUTZTdm03I3o2TWtwem16dHh2UFlTQ1o4dHpTQ0JRaHNQVHhGaXhVa3J6Q0RoU0tCYlE2U3ZtNyJ9',
              },
            ],
            link: 'bafyreih73knvy2irydnzr6tf727f4t2ch4hi5jk2ljoo2wcfdhl55o53hq',
          },
          linkedBlock:
            'omRkYXRho2RuYW1lb3dvcmtDcmVkZW50aWFsc2ZzY2hlbWF4S2NlcmFtaWM6Ly9rM3k1Mmw3cWJ2MWZyeWg1eXVtOHV2YnRtNGEwdDYzZnUxdHAyc2FheGx4MGQ1aWJ3ZnA3ODZ5azVoNjQ3cWo5Y2tkZXNjcmlwdGlvbm93b3JrQ3JlZGVudGlhbHNmaGVhZGVyo2ZzY2hlbWF4S2NlcmFtaWM6Ly9rM3k1Mmw3cWJ2MWZyeTFmcDRzMG53ZGFyaDB2YWh1c2FycHBvc2dldnkwcGVtaXlreW1kMm9yZDZzd3RoYXJjd2Z1bmlxdWVwVUJTWnNHaGVwaWlmaVV4aGtjb250cm9sbGVyc4F4OGRpZDprZXk6ejZNa3B6bXp0eHZQWVNDWjh0elNDQlFoc1BUeEZpeFVrcnpDRGhTS0JiUTZTdm03',
        },
      ],
      schema: 'kjzl6cwe1jw14aaegoi4ca3lo85qlo3wwvql7cp5un7d3l51qyhbu88giq67u63',
      version: 'k3y52l7qbv1frxobji8xzowvkfuff8xayal6gqtopjy2pgwzy36dn37ljqpmev30g',
    },
  },
  tiles: {},
}
