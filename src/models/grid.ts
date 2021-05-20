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
    HorizontalGrid,
    transformHorizontalGridToJSON,
    transformJSONToHorizontalGrid
} from './horizontal-grid';
import {
    VerticalGrid,
    transformVerticalGridToJSON,
    transformJSONToVerticalGrid
} from './vertical-grid';


export const transformGridToJSON = function (value: Grid): any {
    return {
        horizontal_offset: value.horizontalOffset,
        vertical: value.vertical && transformVerticalGridToJSON(value.vertical),
        horizontal: value.horizontal && transformHorizontalGridToJSON(value.horizontal)
    }
}

export const transformJSONToGrid = function (value: any): Grid {
    return {
        horizontalOffset: value.horizontal_offset,
        vertical: value.vertical && transformJSONToVerticalGrid(value.vertical),
        horizontal: value.horizontal && transformJSONToHorizontalGrid(value.horizontal)
    }
}

/**
 * 
 * @export
 * @interface Grid
 */
export interface Grid {
    /**
     * 
     * @type {number}
     * @memberof Grid
     */
    horizontalOffset?: number;
    /**
     * 
     * @type {VerticalGrid}
     * @memberof Grid
     */
    vertical?: VerticalGrid;
    /**
     * 
     * @type {HorizontalGrid}
     * @memberof Grid
     */
    horizontal?: HorizontalGrid;
}


