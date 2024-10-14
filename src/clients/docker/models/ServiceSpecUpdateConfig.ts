/* tslint:disable */
/* eslint-disable */
/**
 * Docker Engine API
 * The Engine API is an HTTP API served by Docker Engine. It is the API the Docker client uses to communicate with the Engine, so everything the Docker client can do can be done with the API.  Most of the client\'s commands map directly to API endpoints (e.g. `docker ps` is `GET /containers/json`). The notable exception is running containers, which consists of several API calls.  # Errors  The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be JSON in the following format:  ``` {   \"message\": \"page not found\" } ```  # Versioning  The API is usually changed in each release, so API calls are versioned to ensure that clients don\'t break. To lock to a specific version of the API, you prefix the URL with its version, for example, call `/v1.30/info` to use the v1.30 version of the `/info` endpoint. If the API version specified in the URL is not supported by the daemon, a HTTP `400 Bad Request` error message is returned.  If you omit the version-prefix, the current version of the API (v1.47) is used. For example, calling `/info` is the same as calling `/v1.47/info`. Using the API without a version-prefix is deprecated and will be removed in a future release.  Engine releases in the near future should support this version of the API, so your client will continue to work even if it is talking to a newer Engine.  The API uses an open schema model, which means server may add extra properties to responses. Likewise, the server will ignore any extra query parameters and request body properties. When you write clients, you need to ignore additional properties in responses to ensure they do not break when talking to newer daemons.   # Authentication  Authentication for registries is handled client side. The client has to send authentication details to various endpoints that need to communicate with registries, such as `POST /images/(name)/push`. These are sent as `X-Registry-Auth` header as a [base64url encoded](https://tools.ietf.org/html/rfc4648#section-5) (JSON) string with the following structure:  ``` {   \"username\": \"string\",   \"password\": \"string\",   \"email\": \"string\",   \"serveraddress\": \"string\" } ```  The `serveraddress` is a domain/IP without a protocol. Throughout this structure, double quotes are required.  If you have already got an identity token from the [`/auth` endpoint](#operation/SystemAuth), you can just pass this instead of credentials:  ``` {   \"identitytoken\": \"9cbaf023786cd7...\" } ```
 *
 * The version of the OpenAPI document: 1.47
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
/**
 * Specification for the update strategy of the service.
 * @export
 * @interface ServiceSpecUpdateConfig
 */
export interface ServiceSpecUpdateConfig {
  /**
   * Maximum number of tasks to be updated in one iteration (0 means
   * unlimited parallelism).
   *
   * @type {number}
   * @memberof ServiceSpecUpdateConfig
   */
  Parallelism?: number;
  /**
   * Amount of time between updates, in nanoseconds.
   * @type {number}
   * @memberof ServiceSpecUpdateConfig
   */
  Delay?: number;
  /**
   * Action to take if an updated task fails to run, or stops running
   * during the update.
   *
   * @type {string}
   * @memberof ServiceSpecUpdateConfig
   */
  FailureAction?: ServiceSpecUpdateConfigFailureActionEnum;
  /**
   * Amount of time to monitor each updated task for failures, in
   * nanoseconds.
   *
   * @type {number}
   * @memberof ServiceSpecUpdateConfig
   */
  Monitor?: number;
  /**
   * The fraction of tasks that may fail during an update before the
   * failure action is invoked, specified as a floating point number
   * between 0 and 1.
   *
   * @type {number}
   * @memberof ServiceSpecUpdateConfig
   */
  MaxFailureRatio?: number;
  /**
   * The order of operations when rolling out an updated task. Either
   * the old task is shut down before the new task is started, or the
   * new task is started before the old task is shut down.
   *
   * @type {string}
   * @memberof ServiceSpecUpdateConfig
   */
  Order?: ServiceSpecUpdateConfigOrderEnum;
}

/**
 * @export
 */
export const ServiceSpecUpdateConfigFailureActionEnum = {
  Continue: "continue",
  Pause: "pause",
  Rollback: "rollback",
} as const;
export type ServiceSpecUpdateConfigFailureActionEnum =
  (typeof ServiceSpecUpdateConfigFailureActionEnum)[keyof typeof ServiceSpecUpdateConfigFailureActionEnum];

/**
 * @export
 */
export const ServiceSpecUpdateConfigOrderEnum = {
  StopFirst: "stop-first",
  StartFirst: "start-first",
} as const;
export type ServiceSpecUpdateConfigOrderEnum =
  (typeof ServiceSpecUpdateConfigOrderEnum)[keyof typeof ServiceSpecUpdateConfigOrderEnum];

/**
 * Check if a given object implements the ServiceSpecUpdateConfig interface.
 */
export function instanceOfServiceSpecUpdateConfig(value: object): value is ServiceSpecUpdateConfig {
  return true;
}

export function ServiceSpecUpdateConfigFromJSON(json: any): ServiceSpecUpdateConfig {
  return ServiceSpecUpdateConfigFromJSONTyped(json, false);
}

export function ServiceSpecUpdateConfigFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ServiceSpecUpdateConfig {
  if (json == null) {
    return json;
  }
  return {
    Parallelism: json["Parallelism"] == null ? undefined : json["Parallelism"],
    Delay: json["Delay"] == null ? undefined : json["Delay"],
    FailureAction: json["FailureAction"] == null ? undefined : json["FailureAction"],
    Monitor: json["Monitor"] == null ? undefined : json["Monitor"],
    MaxFailureRatio: json["MaxFailureRatio"] == null ? undefined : json["MaxFailureRatio"],
    Order: json["Order"] == null ? undefined : json["Order"],
  };
}

export function ServiceSpecUpdateConfigToJSON(value?: ServiceSpecUpdateConfig | null): any {
  if (value == null) {
    return value;
  }
  return {
    Parallelism: value["Parallelism"],
    Delay: value["Delay"],
    FailureAction: value["FailureAction"],
    Monitor: value["Monitor"],
    MaxFailureRatio: value["MaxFailureRatio"],
    Order: value["Order"],
  };
}
