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




export const transformScreenVariantGroupToJSON = function (value: ScreenVariantGroup): any {
    return {
        id: value.id,
        name: value.name
    }
}

export const transformJSONToScreenVariantGroup = function (value: any): ScreenVariantGroup {
    return {
        id: value.id,
        name: value.name
    }
}

/**
 * Variant group that contains the screen
 * @export
 * @interface ScreenVariantGroup
 */
export interface ScreenVariantGroup {
    /**
     * Unique id of the screen variant
     * @type {string}
     * @memberof ScreenVariantGroup
     */
    id: string;
    /**
     * Name of the screen variant
     * @type {string}
     * @memberof ScreenVariantGroup
     */
    name: string;
}

