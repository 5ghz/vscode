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
import type { ListLinksResponseData } from "./ListLinksResponseData";
import {
  ListLinksResponseDataFromJSON,
  ListLinksResponseDataFromJSONTyped,
  ListLinksResponseDataToJSON,
} from "./ListLinksResponseData";

/**
 *
 * @export
 * @interface ListLinksResponseDataList
 */
export interface ListLinksResponseDataList {
  /**
   *
   * @type {string}
   * @memberof ListLinksResponseDataList
   */
  kind: string;
  /**
   *
   * @type {ResourceCollectionMetadata}
   * @memberof ListLinksResponseDataList
   */
  metadata: ResourceCollectionMetadata;
  /**
   *
   * @type {Array<ListLinksResponseData>}
   * @memberof ListLinksResponseDataList
   */
  data: Array<ListLinksResponseData>;
}

/**
 * Check if a given object implements the ListLinksResponseDataList interface.
 */
export function instanceOfListLinksResponseDataList(
  value: object,
): value is ListLinksResponseDataList {
  if (!("kind" in value) || value["kind"] === undefined) return false;
  if (!("metadata" in value) || value["metadata"] === undefined) return false;
  if (!("data" in value) || value["data"] === undefined) return false;
  return true;
}

export function ListLinksResponseDataListFromJSON(json: any): ListLinksResponseDataList {
  return ListLinksResponseDataListFromJSONTyped(json, false);
}

export function ListLinksResponseDataListFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ListLinksResponseDataList {
  if (json == null) {
    return json;
  }
  return {
    kind: json["kind"],
    metadata: ResourceCollectionMetadataFromJSON(json["metadata"]),
    data: (json["data"] as Array<any>).map(ListLinksResponseDataFromJSON),
  };
}

export function ListLinksResponseDataListToJSON(value?: ListLinksResponseDataList | null): any {
  if (value == null) {
    return value;
  }
  return {
    kind: value["kind"],
    metadata: ResourceCollectionMetadataToJSON(value["metadata"]),
    data: (value["data"] as Array<any>).map(ListLinksResponseDataToJSON),
  };
}
