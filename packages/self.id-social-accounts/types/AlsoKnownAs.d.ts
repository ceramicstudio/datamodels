/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface AlsoKnownAs {
  accounts: Account[];
}
export interface Account {
  protocol: string;
  host?: string;
  id: string;
  claim?: string;
  attestations?: Attestation[];
  [k: string]: unknown;
}
export interface Attestation {
  "did-jwt"?: string;
  "did-jwt-vc"?: string;
  [k: string]: unknown;
}
