/* tslint:disable */
/* eslint-disable */
/**
 * REST Admin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: kafka-clients-proxy-team@confluent.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
import type { ResourceCollectionMetadata } from "./ResourceCollectionMetadata";
import {
  ResourceCollectionMetadataFromJSON,
  ResourceCollectionMetadataFromJSONTyped,
  ResourceCollectionMetadataToJSON,
} from "./ResourceCollectionMetadata";

/**
 *
 * @export
 * @interface ResourceCollection
 */
export interface ResourceCollection {
  /**
   *
   * @type {string}
   * @memberof ResourceCollection
   */
  kind: string;
  /**
   *
   * @type {ResourceCollectionMetadata}
   * @memberof ResourceCollection
   */
  metadata: ResourceCollectionMetadata;
}

/**
 * Check if a given object implements the ResourceCollection interface.
 */
export function instanceOfResourceCollection(value: object): value is ResourceCollection {
  if (!("kind" in value) || value["kind"] === undefined) return false;
  if (!("metadata" in value) || value["metadata"] === undefined) return false;
  return true;
}

export function ResourceCollectionFromJSON(json: any): ResourceCollection {
  return ResourceCollectionFromJSONTyped(json, false);
}

export function ResourceCollectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ResourceCollection {
  if (json == null) {
    return json;
  }
  return {
    kind: json["kind"],
    metadata: ResourceCollectionMetadataFromJSON(json["metadata"]),
  };
}

export function ResourceCollectionToJSON(value?: ResourceCollection | null): any {
  if (value == null) {
    return value;
  }
  return {
    kind: value["kind"],
    metadata: ResourceCollectionMetadataToJSON(value["metadata"]),
  };
}
