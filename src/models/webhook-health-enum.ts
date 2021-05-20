/* tslint:disable */
/* eslint-disable */
/**
 * Zeplin API
 * Access your resources in Zeplin
 *
 * Contact: support@zeplin.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */




export const transformWebhookHealthEnumToJSON = function (value: WebhookHealthEnum): any {
    return value;
}

export const transformJSONToWebhookHealthEnum = function (value: any): WebhookHealthEnum {
    return value;
}

/**
 * The health of a webhook URL
 * @export
 * @enum {string}
 */
export enum WebhookHealthEnum {
    HEALTHY = 'healthy',
    UNHEALTHY = 'unhealthy'
}


