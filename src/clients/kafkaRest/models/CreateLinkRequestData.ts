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
import type { ConfigData } from "./ConfigData";
import { ConfigDataFromJSON, ConfigDataFromJSONTyped, ConfigDataToJSON } from "./ConfigData";

/**
 *
 * @export
 * @interface CreateLinkRequestData
 */
export interface CreateLinkRequestData {
  /**
   *
   * @type {string}
   * @memberof CreateLinkRequestData
   */
  source_cluster_id?: string;
  /**
   *
   * @type {string}
   * @memberof CreateLinkRequestData
   */
  destination_cluster_id?: string;
  /**
   * The expected remote cluster ID.
   * @type {string}
   * @memberof CreateLinkRequestData
   */
  remote_cluster_id?: string;
  /**
   * The expected cluster link ID. Can be provided when creating the second side of a bidirectional link for validating the link ID is as expected. If it's not provided, it's inferred from the remote cluster.
   * @type {string}
   * @memberof CreateLinkRequestData
   */
  cluster_link_id?: string;
  /**
   *
   * @type {Array<ConfigData>}
   * @memberof CreateLinkRequestData
   */
  configs?: Array<ConfigData>;
}

/**
 * Check if a given object implements the CreateLinkRequestData interface.
 */
export function instanceOfCreateLinkRequestData(value: object): value is CreateLinkRequestData {
  return true;
}

export function CreateLinkRequestDataFromJSON(json: any): CreateLinkRequestData {
  return CreateLinkRequestDataFromJSONTyped(json, false);
}

export function CreateLinkRequestDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CreateLinkRequestData {
  if (json == null) {
    return json;
  }
  return {
    source_cluster_id: json["source_cluster_id"] == null ? undefined : json["source_cluster_id"],
    destination_cluster_id:
      json["destination_cluster_id"] == null ? undefined : json["destination_cluster_id"],
    remote_cluster_id: json["remote_cluster_id"] == null ? undefined : json["remote_cluster_id"],
    cluster_link_id: json["cluster_link_id"] == null ? undefined : json["cluster_link_id"],
    configs:
      json["configs"] == null ? undefined : (json["configs"] as Array<any>).map(ConfigDataFromJSON),
  };
}

export function CreateLinkRequestDataToJSON(value?: CreateLinkRequestData | null): any {
  if (value == null) {
    return value;
  }
  return {
    source_cluster_id: value["source_cluster_id"],
    destination_cluster_id: value["destination_cluster_id"],
    remote_cluster_id: value["remote_cluster_id"],
    cluster_link_id: value["cluster_link_id"],
    configs:
      value["configs"] == null ? undefined : (value["configs"] as Array<any>).map(ConfigDataToJSON),
  };
}
