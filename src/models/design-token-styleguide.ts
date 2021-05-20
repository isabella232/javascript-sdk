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


import {
    EntityReference,
    transformEntityReferenceToJSON,
    transformJSONToEntityReference
} from './entity-reference';


export const transformDesignTokenStyleguideToJSON = function (value: DesignTokenStyleguide): any {
    return {
        id: value.id,
        name: value.name,
        platform: value.platform,
        parent: value.parent && transformEntityReferenceToJSON(value.parent)
    }
}

export const transformJSONToDesignTokenStyleguide = function (value: any): DesignTokenStyleguide {
    return {
        id: value.id,
        name: value.name,
        platform: value.platform,
        parent: value.parent && transformJSONToEntityReference(value.parent)
    }
}

/**
 * The source styleguide of the token
 * @export
 * @interface DesignTokenStyleguide
 */
export interface DesignTokenStyleguide {
    /**
     * The unique id of the source styleguide
     * @type {string}
     * @memberof DesignTokenStyleguide
     */
    id: string;
    /**
     * The name of the source styleguide
     * @type {string}
     * @memberof DesignTokenStyleguide
     */
    name: string;
    /**
     * The target platform of the source styleguide
     * @type {string}
     * @memberof DesignTokenStyleguide
     */
    platform: 'base' | 'web' | 'ios' | 'android' | 'macos';
    /**
     * 
     * @type {EntityReference}
     * @memberof DesignTokenStyleguide
     */
    parent?: EntityReference;
}


