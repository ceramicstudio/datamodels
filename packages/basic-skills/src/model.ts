import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { BasicSkills } from '../types/BasicSkills'

export type { BasicSkills } from '../types/BasicSkills'

export type ModelTypes = ModelTypeAliases< {BasicSkills: BasicSkills }, { basicSkills: 'BasicSkills' }>

export const model: EncodedManagedModel = {
  schemas: {
    kjzl6cwe1jw14b0a0d5rfbhg9efs03roiz2df1wwjx8ilgqc7cn94cp5fey4xbs: {
      alias: 'BasicSkills',
      commits: [
        {
          jws: {
            payload: 'AXESIAjU08N0iCGbrU8PSWCMe3GK3x4-2PrKYXwTww3-9cmF',
            signatures: [
              {
                signature: '7T9RncNJhIE6QetRBau5lu77M7D8GjHV83CEfVcIAt4LrIMboDVCWa5cC3k1GNNp_j4jR_e37SkX4oVgUixzCw',
                protected: 'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa2h0RzZYRVg5eVNLQlNQM0V2emtab3JySjFSN3hZb05ZUE02ajRxYXJrRWdqI3o2TWtodEc2WEVYOXlTS0JTUDNFdnprWm9yckoxUjd4WW9OWVBNNmo0cWFya0VnaiJ9'
              }
            ],
            link: 'bafyreiai2tj4g5eiegn22typjfqiy63rrlpr4pwy7lfgc7atymg755ojqu'
          },
          linkedBlock: 'omRkYXRhpmR0eXBlZm9iamVjdGV0aXRsZWtCYXNpY1NraWxsc2ckc2NoZW1heCdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNqcHJvcGVydGllc6Fmc2tpbGxzomR0eXBlZWFycmF5ZWl0ZW1zoWQkcmVmeBgjL2RlZmluaXRpb25zL0Jhc2ljU2tpbGxrZGVmaW5pdGlvbnOhakJhc2ljU2tpbGyjZHR5cGVmb2JqZWN0aHJlcXVpcmVkgmRuYW1lYmlkanByb3BlcnRpZXOqYmlko2R0eXBlZnN0cmluZ2ltYXhMZW5ndGgZAaRrZGVzY3JpcHRpb254T0EgdW5pcXVlIGlkZW50aWZpZXIgKGUuZy4gdXVpZCBvciB1cmkpIHRvIGFsbG93IGFwcGxpY2F0aW9ucyB0byB1c2UgdGhpcyBza2lsbC5kbmFtZaNkdHlwZWZzdHJpbmdpbWF4TGVuZ3RoGKBrZGVzY3JpcHRpb254JEEgaHVtYW4gcmVhZGFibGUgbmFtZSBmb3IgdGhlIHNraWxsLmR0YWdzpGR0eXBlZWFycmF5ZWl0ZW1zoWR0eXBlZnN0cmluZ2tkZXNjcmlwdGlvbngpVGFncyB0byBhbGxvdyBlYXNpZXIgc2VhcmNoaW5nIG9mIHNraWxscy5rdW5pcXVlSXRlbXP1ZWltYWdlo2R0eXBlZnN0cmluZ2Zmb3JtYXRjdXJpa2Rlc2NyaXB0aW9ueDNBbiBvcHRpb25hbCBpbWFnZSB0byB1c2Ugd2hlbiBkaXNwbGF5aW5nIHRoZSBza2lsbC5maXNzdWVyo2R0eXBlZnN0cmluZ2ltYXhMZW5ndGgYoGtkZXNjcmlwdGlvbnhVQSB1bmlxdWUgaWRlbnRpZmllciByZXByZXNlbnRpbmcgYW4gaXNzdWVyIG9mIHRoZSBza2lsbCAoZS5nLiBkaWQgb2YgYW4gaW5zdGl0dXRpb24pLmdkZXRhaWxzo2R0eXBlZnN0cmluZ2Zmb3JtYXRjdXJpa2Rlc2NyaXB0aW9ueGlBIGxpbmsgdG8gYSBkb2N1bWVudCBnaXZpbmcgZGV0YWlscyBhYm91dCB0aGUgc3RhdHVzIG9mIHRoZSBza2lsbC4gRS5nLiB0ZXJtcyBvZiB1c2UgLyByZXZvY2F0aW9uIHN0YXR1cy5qaXNzdWVkRGF0ZaNkdHlwZWZzdHJpbmdmZm9ybWF0aWRhdGUtdGltZWtkZXNjcmlwdGlvbng6VGhlIGRhdGUgdGhlIHNraWxsIHdhcyBvYnRhaW5lZCAoSVNPODYwMSBEYXRlVGltZSBmb3JtYXQpLmtkZXNjcmlwdGlvbqNkdHlwZWZzdHJpbmdpbWF4TGVuZ3RoGQGka2Rlc2NyaXB0aW9ueCxBbiBvcHRpb25hbCBkZXNjcmlwdGlvbiB0byBhZGQgbW9yZSBkZXRhaWxzLmtleHBpcmVzRGF0ZaNkdHlwZWZzdHJpbmdmZm9ybWF0aWRhdGUtdGltZWtkZXNjcmlwdGlvbnhHVGhlIGRhdGUgdGhlIHNraWxsIGV4cGlyZXMgLyBtdXN0IGJlIHJlbmV3ZWQgKElTTzg2MDEgRGF0ZVRpbWUgZm9ybWF0KS5yaXNzdWVyVmVyaWZpY2F0aW9uo2R0eXBlZm9iamVjdGpwcm9wZXJ0aWVzo2NzaWejZHR5cGVmc3RyaW5naW1heExlbmd0aBkBpGtkZXNjcmlwdGlvbnhLVGhlIHNpZ25hdHVyZSB0byB1c2UgaW4gdGhlIHZlcmlmaWNhdGlvbiBwcm9jZXNzIChlLmcuIEpTT04gV2ViIFNpZ25hdHVyZSkuZHR5cGWjZHR5cGVmc3RyaW5naW1heExlbmd0aBiga2Rlc2NyaXB0aW9ueC1UaGUgc2lnbmF0dXJlIG1ldGhvZCAoZS5nLiBSc2FTaWduYXR1cmUyMDE4KS5ydmVyaWZpY2F0aW9uTWV0aG9ko2R0eXBlZnN0cmluZ2ltYXhMZW5ndGgZAaRrZGVzY3JpcHRpb254YUEgcmVzb3VyY2UgKGUuZy4gVVJJKSB0aGF0IGNvbnRhaW5zIHRoZSBpbmZvcm1hdGlvbiByZXF1aXJlZCB0byBwZXJmb3JtIHRoZSB2ZXJpZmljYXRpb24gcHJvY2Vzcy5rZGVzY3JpcHRpb254gUEgcHJvb2YgbWVjaGFuaXNtIHRvIHZlcmlmeSB0aGF0IHRoZSBpc3N1ZXIgY2VydGlmaWVzIHRoZSBza2lsbC4gQmFzZWQgb24gaHR0cHM6Ly93d3cudzMub3JnL1RSL3ZjLWRhdGEtbW9kZWwvI3Byb29mcy1zaWduYXR1cmVzLmtkZXNjcmlwdGlvbngvQSBsaWdodHdlaWdodCBzY2hlbWEgZm9yIHNraWxscyBhbmQgY3JlZGVudGlhbHNmaGVhZGVyomZ1bmlxdWVwQlcvWG8xOWJ4bnFNTGZPTWtjb250cm9sbGVyc4F4OGRpZDprZXk6ejZNa2h0RzZYRVg5eVNLQlNQM0V2emtab3JySjFSN3hZb05ZUE02ajRxYXJrRWdq'
        }
      ],
      dependencies: {},
      version: 'k3y52l7qbv1frym9z6lkz0xo3muo74qsuexcvf1lzhock8mzas9xcuyaulmar0zr4'
    }
  },
  definitions: {
    kjzl6cwe1jw145d0jv6terf54oe1cgbp8yi6ruo6mxksvkaf4jpozthylsaie2m: {
      alias: 'basicSkills',
      commits: [
        {
          jws: {
            payload: 'AXESICptLk7rXpvs5NEii3afxoS_WbYEdzHZ6_Ta0WXeUoN4',
            signatures: [
              {
                signature: 'P4xLw9zt4GrnKo6YueSxYxIo8SkEkGVaGD27x1T9EPaR_RWmNk6qmsokm4Ley4XZPndGMox36IYVppF0frV9CA',
                protected: 'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa2h0RzZYRVg5eVNLQlNQM0V2emtab3JySjFSN3hZb05ZUE02ajRxYXJrRWdqI3o2TWtodEc2WEVYOXlTS0JTUDNFdnprWm9yckoxUjd4WW9OWVBNNmo0cWFya0VnaiJ9'
              }
            ],
            link: 'bafyreibknuxe5226tpwojujcrn3j7ruex5m3mbdxghm6x5g22fs54uudpa'
          },
          linkedBlock: 'omRkYXRho2RuYW1la2Jhc2ljU2tpbGxzZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5bTl6NmxrejB4bzNtdW83NHFzdWV4Y3ZmMWx6aG9jazhtemFzOXhjdXlhdWxtYXIwenI0a2Rlc2NyaXB0aW9ueC9BIGxpZ2h0d2VpZ2h0IHNjaGVtYSBmb3Igc2tpbGxzIGFuZCBjcmVkZW50aWFsc2ZoZWFkZXKjZnNjaGVtYXhLY2VyYW1pYzovL2szeTUybDdxYnYxZnJ5MWZwNHMwbndkYXJoMHZhaHVzYXJwcG9zZ2V2eTBwZW1peWt5bWQyb3JkNnN3dGhhcmN3ZnVuaXF1ZXBoRksvQUdFb0ZmUG5jNHZna2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1raHRHNlhFWDl5U0tCU1AzRXZ6a1pvcnJKMVI3eFlvTllQTTZqNHFhcmtFZ2o='
        }
      ],
      schema: 'kjzl6cwe1jw14b0a0d5rfbhg9efs03roiz2df1wwjx8ilgqc7cn94cp5fey4xbs',
      version: 'k3y52l7qbv1frxi4jx9sh4yzoh9ftkk37jpdc623z72rxcga3kc6pqprq2x6qs2kg'
    }
  },
  tiles: {}
}  