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
    LayerPosition,
    transformLayerPositionToJSON,
    transformJSONToLayerPosition
} from './layer-position';


export const transformBoundingRectangleToJSON = function (value: BoundingRectangle): any {
    return {
        width: value.width,
        height: value.height,
        x: value.x,
        y: value.y,
        absolute: transformLayerPositionToJSON(value.absolute)
    }
}

export const transformJSONToBoundingRectangle = function (value: any): BoundingRectangle {
    return {
        width: value.width,
        height: value.height,
        x: value.x,
        y: value.y,
        absolute: transformJSONToLayerPosition(value.absolute)
    }
}

/**
 * 
 * @export
 * @interface BoundingRectangle
 */
export interface BoundingRectangle {
    /**
     * 
     * @type {number}
     * @memberof BoundingRectangle
     */
    width: number;
    /**
     * 
     * @type {number}
     * @memberof BoundingRectangle
     */
    height: number;
    /**
     * 
     * @type {number}
     * @memberof BoundingRectangle
     */
    x: number;
    /**
     * 
     * @type {number}
     * @memberof BoundingRectangle
     */
    y: number;
    /**
     * 
     * @type {LayerPosition}
     * @memberof BoundingRectangle
     */
    absolute: LayerPosition;
}


