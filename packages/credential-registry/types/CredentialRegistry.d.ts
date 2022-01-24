/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type CeramicDocId = string;

/**
 * The [[CredentialRegistry]] holds the list of claimed [[ClaimedCredentials]] and the [[VerifiableCredentials]] issued by the user
 */
export interface CredentialRegistry {
  claimed?: CeramicDocId[];
  issued?: CeramicDocId[];
}
