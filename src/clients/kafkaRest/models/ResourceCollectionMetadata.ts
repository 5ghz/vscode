/* tslint:disable */
/* eslint-disable */
/**
 * REST Admin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface ResourceCollectionMetadata
 */
export interface ResourceCollectionMetadata {
  /**
   *
   * @type {string}
   * @memberof ResourceCollectionMetadata
   */
  self: string;
  /**
   *
   * @type {string}
   * @memberof ResourceCollectionMetadata
   */
  next?: string | null;
}

/**
 * Check if a given object implements the ResourceCollectionMetadata interface.
 */
export function instanceOfResourceCollectionMetadata(
  value: object,
): value is ResourceCollectionMetadata {
  if (!("self" in value) || value["self"] === undefined) return false;
  return true;
}

export function ResourceCollectionMetadataFromJSON(json: any): ResourceCollectionMetadata {
  return ResourceCollectionMetadataFromJSONTyped(json, false);
}

export function ResourceCollectionMetadataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ResourceCollectionMetadata {
  if (json == null) {
    return json;
  }
  return {
    self: json["self"],
    next: json["next"] == null ? undefined : json["next"],
  };
}

export function ResourceCollectionMetadataToJSON(json: any): ResourceCollectionMetadata {
  return ResourceCollectionMetadataToJSONTyped(json, false);
}

export function ResourceCollectionMetadataToJSONTyped(
  value?: ResourceCollectionMetadata | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    self: value["self"],
    next: value["next"],
  };
}
