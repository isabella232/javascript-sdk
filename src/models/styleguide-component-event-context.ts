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
    ComponentVersionSummary,
    transformComponentVersionSummaryToJSON,
    transformJSONToComponentVersionSummary
} from './component-version-summary';
import {
    Styleguide,
    transformStyleguideToJSON,
    transformJSONToStyleguide
} from './styleguide';


export const transformStyleguideComponentEventContextToJSON = function (value: StyleguideComponentEventContext): any {
    return {
        styleguide: transformStyleguideToJSON(value.styleguide),
        version: transformComponentVersionSummaryToJSON(value.version)
    }
}

export const transformJSONToStyleguideComponentEventContext = function (value: any): StyleguideComponentEventContext {
    return {
        styleguide: transformJSONToStyleguide(value.styleguide),
        version: transformJSONToComponentVersionSummary(value.version)
    }
}

/**
 * 
 * @export
 * @interface StyleguideComponentEventContext
 */
export interface StyleguideComponentEventContext {
    /**
     * 
     * @type {Styleguide}
     * @memberof StyleguideComponentEventContext
     */
    styleguide: Styleguide;
    /**
     * 
     * @type {ComponentVersionSummary}
     * @memberof StyleguideComponentEventContext
     */
    version: ComponentVersionSummary;
}


