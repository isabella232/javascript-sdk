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
    Asset,
    transformAssetToJSON,
    transformJSONToAsset
} from './asset';
import {
    ColorData,
    transformColorDataToJSON,
    transformJSONToColorData
} from './color-data';
import {
    Grid,
    transformGridToJSON,
    transformJSONToGrid
} from './grid';
import {
    Layer,
    transformLayerToJSON,
    transformJSONToLayer
} from './layer';
import {
    Link,
    transformLinkToJSON,
    transformJSONToLink
} from './link';
import {
    SourceEnum,
    transformSourceEnumToJSON,
    transformJSONToSourceEnum
} from './source-enum';
import {
    Thumbnails,
    transformThumbnailsToJSON,
    transformJSONToThumbnails
} from './thumbnails';
import {
    User,
    transformUserToJSON,
    transformJSONToUser
} from './user';


export const transformComponentVersionToJSON = function (value: ComponentVersion): any {
    return {
        id: value.id,
        creator: value.creator && transformUserToJSON(value.creator),
        image_url: value.imageUrl,
        thumbnails: value.thumbnails && transformThumbnailsToJSON(value.thumbnails),
        source: transformSourceEnumToJSON(value.source),
        width: value.width,
        height: value.height,
        background_color: value.backgroundColor && transformColorDataToJSON(value.backgroundColor),
        density_scale: value.densityScale,
        links: value.links.map(transformLinkToJSON),
        grid: value.grid && transformGridToJSON(value.grid),
        layers: value.layers.map(transformLayerToJSON),
        assets: value.assets.map(transformAssetToJSON),
        created: value.created
    }
}

export const transformJSONToComponentVersion = function (value: any): ComponentVersion {
    return {
        id: value.id,
        creator: value.creator && transformJSONToUser(value.creator),
        imageUrl: value.image_url,
        thumbnails: value.thumbnails && transformJSONToThumbnails(value.thumbnails),
        source: transformJSONToSourceEnum(value.source),
        width: value.width,
        height: value.height,
        backgroundColor: value.background_color && transformJSONToColorData(value.background_color),
        densityScale: value.density_scale,
        links: value.links.map(transformJSONToLink),
        grid: value.grid && transformJSONToGrid(value.grid),
        layers: value.layers.map(transformJSONToLayer),
        assets: value.assets.map(transformJSONToAsset),
        created: value.created
    }
}

/**
 * 
 * @export
 * @interface ComponentVersion
 */
export interface ComponentVersion {
    /**
     * The unique id of the version
     * @type {string}
     * @memberof ComponentVersion
     */
    id: string;
    /**
     * 
     * @type {User}
     * @memberof ComponentVersion
     */
    creator?: User;
    /**
     * URL of the image for the version
     * @type {string}
     * @memberof ComponentVersion
     */
    imageUrl?: string;
    /**
     * 
     * @type {Thumbnails}
     * @memberof ComponentVersion
     */
    thumbnails?: Thumbnails;
    /**
     * 
     * @type {SourceEnum}
     * @memberof ComponentVersion
     */
    source: SourceEnum;
    /**
     * Width of the version
     * @type {number}
     * @memberof ComponentVersion
     */
    width: number;
    /**
     * Height of the version
     * @type {number}
     * @memberof ComponentVersion
     */
    height: number;
    /**
     * 
     * @type {ColorData}
     * @memberof ComponentVersion
     */
    backgroundColor?: ColorData;
    /**
     * Pixel density
     * @type {number}
     * @memberof ComponentVersion
     */
    densityScale: number;
    /**
     * 
     * @type {Array<Link>}
     * @memberof ComponentVersion
     */
    links: Array<Link>;
    /**
     * 
     * @type {Grid}
     * @memberof ComponentVersion
     */
    grid?: Grid;
    /**
     * Layers of the component version
     * @type {Array<Layer>}
     * @memberof ComponentVersion
     */
    layers: Array<Layer>;
    /**
     * Assets of the component version
     * @type {Array<Asset>}
     * @memberof ComponentVersion
     */
    assets: Array<Asset>;
    /**
     * The unix timestamp when the component version was created
     * @type {number}
     * @memberof ComponentVersion
     */
    created: number;
}


