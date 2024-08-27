/* tslint:disable */
/* eslint-disable */
/**
 * Confluent DTX Outpost API
 * API for the Confluent DTX Outpost, part of the Confluent extension for VS Code
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: vscode@confluent.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
import type { PartitionConsumeData } from "./PartitionConsumeData";
import {
  PartitionConsumeDataFromJSON,
  PartitionConsumeDataFromJSONTyped,
  PartitionConsumeDataToJSON,
} from "./PartitionConsumeData";

/**
 *
 * @export
 * @interface MultiPartitionConsumeData
 */
export interface MultiPartitionConsumeData {
  /**
   *
   * @type {string}
   * @memberof MultiPartitionConsumeData
   */
  cluster_id?: string;
  /**
   *
   * @type {string}
   * @memberof MultiPartitionConsumeData
   */
  topic_name?: string;
  /**
   *
   * @type {Array<PartitionConsumeData>}
   * @memberof MultiPartitionConsumeData
   */
  partition_data_list?: Array<PartitionConsumeData>;
}

/**
 * Check if a given object implements the MultiPartitionConsumeData interface.
 */
export function instanceOfMultiPartitionConsumeData(
  value: object,
): value is MultiPartitionConsumeData {
  return true;
}

export function MultiPartitionConsumeDataFromJSON(json: any): MultiPartitionConsumeData {
  return MultiPartitionConsumeDataFromJSONTyped(json, false);
}

export function MultiPartitionConsumeDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MultiPartitionConsumeData {
  if (json == null) {
    return json;
  }
  return {
    cluster_id: json["cluster_id"] == null ? undefined : json["cluster_id"],
    topic_name: json["topic_name"] == null ? undefined : json["topic_name"],
    partition_data_list:
      json["partition_data_list"] == null
        ? undefined
        : (json["partition_data_list"] as Array<any>).map(PartitionConsumeDataFromJSON),
  };
}

export function MultiPartitionConsumeDataToJSON(value?: MultiPartitionConsumeData | null): any {
  if (value == null) {
    return value;
  }
  return {
    cluster_id: value["cluster_id"],
    topic_name: value["topic_name"],
    partition_data_list:
      value["partition_data_list"] == null
        ? undefined
        : (value["partition_data_list"] as Array<any>).map(PartitionConsumeDataToJSON),
  };
}
