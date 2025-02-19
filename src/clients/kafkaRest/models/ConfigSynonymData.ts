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
 * @interface ConfigSynonymData
 */
export interface ConfigSynonymData {
  /**
   *
   * @type {string}
   * @memberof ConfigSynonymData
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof ConfigSynonymData
   */
  value?: string | null;
  /**
   *
   * @type {string}
   * @memberof ConfigSynonymData
   */
  source: string;
}

/**
 * Check if a given object implements the ConfigSynonymData interface.
 */
export function instanceOfConfigSynonymData(value: object): value is ConfigSynonymData {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("source" in value) || value["source"] === undefined) return false;
  return true;
}

export function ConfigSynonymDataFromJSON(json: any): ConfigSynonymData {
  return ConfigSynonymDataFromJSONTyped(json, false);
}

export function ConfigSynonymDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ConfigSynonymData {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    value: json["value"] == null ? undefined : json["value"],
    source: json["source"],
  };
}

export function ConfigSynonymDataToJSON(json: any): ConfigSynonymData {
  return ConfigSynonymDataToJSONTyped(json, false);
}

export function ConfigSynonymDataToJSONTyped(
  value?: ConfigSynonymData | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    value: value["value"],
    source: value["source"],
  };
}
