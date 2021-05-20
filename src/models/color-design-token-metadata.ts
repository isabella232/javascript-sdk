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
    DesignTokenResource,
    transformDesignTokenResourceToJSON,
    transformJSONToDesignTokenResource
} from './design-token-resource';
import {
    DesignTokenSource,
    transformDesignTokenSourceToJSON,
    transformJSONToDesignTokenSource
} from './design-token-source';


export const transformColorDesignTokenMetadataToJSON = function (value: ColorDesignTokenMetadata): any {
    return {
        source: transformDesignTokenSourceToJSON(value.source),
        resource: transformDesignTokenResourceToJSON(value.resource)
    }
}

export const transformJSONToColorDesignTokenMetadata = function (value: any): ColorDesignTokenMetadata {
    return {
        source: transformJSONToDesignTokenSource(value.source),
        resource: transformJSONToDesignTokenResource(value.resource)
    }
}

/**
 * Additional information about the color token
 * @export
 * @interface ColorDesignTokenMetadata
 */
export interface ColorDesignTokenMetadata {
    /**
     * 
     * @type {DesignTokenSource}
     * @memberof ColorDesignTokenMetadata
     */
    source: DesignTokenSource;
    /**
     * 
     * @type {DesignTokenResource}
     * @memberof ColorDesignTokenMetadata
     */
    resource: DesignTokenResource;
}


