/* tslint:disable */
/* eslint-disable */
/**
 * Confluent ide-sidecar API
 * API for the Confluent ide-sidecar, part of the Confluent extension for VS Code
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: vscode@confluent.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
import type { HealthCheck } from "./HealthCheck";
import { HealthCheckFromJSON, HealthCheckFromJSONTyped, HealthCheckToJSON } from "./HealthCheck";

/**
 *
 * @export
 * @interface HealthResponse
 */
export interface HealthResponse {
  /**
   *
   * @type {Array<HealthCheck>}
   * @memberof HealthResponse
   */
  checks?: Array<HealthCheck>;
  /**
   *
   * @type {string}
   * @memberof HealthResponse
   */
  status?: HealthResponseStatusEnum;
}

/**
 * @export
 */
export const HealthResponseStatusEnum = {
  Up: "UP",
  Down: "DOWN",
} as const;
export type HealthResponseStatusEnum =
  (typeof HealthResponseStatusEnum)[keyof typeof HealthResponseStatusEnum];

/**
 * Check if a given object implements the HealthResponse interface.
 */
export function instanceOfHealthResponse(value: object): value is HealthResponse {
  return true;
}

export function HealthResponseFromJSON(json: any): HealthResponse {
  return HealthResponseFromJSONTyped(json, false);
}

export function HealthResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): HealthResponse {
  if (json == null) {
    return json;
  }
  return {
    checks:
      json["checks"] == null ? undefined : (json["checks"] as Array<any>).map(HealthCheckFromJSON),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function HealthResponseToJSON(value?: HealthResponse | null): any {
  if (value == null) {
    return value;
  }
  return {
    checks:
      value["checks"] == null ? undefined : (value["checks"] as Array<any>).map(HealthCheckToJSON),
    status: value["status"],
  };
}
