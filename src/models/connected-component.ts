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
    Code,
    transformCodeToJSON,
    transformJSONToCode
} from './code';
import {
    ConnectedComponentLink,
    transformConnectedComponentLinkToJSON,
    transformJSONToConnectedComponentLink
} from './connected-component-link';
import {
    EntityReference,
    transformEntityReferenceToJSON,
    transformJSONToEntityReference
} from './entity-reference';
import {
    ResourceSource,
    transformResourceSourceToJSON,
    transformJSONToResourceSource
} from './resource-source';


export const transformConnectedComponentToJSON = function (value: ConnectedComponent): any {
    return {
        compontents: value.compontents && value.compontents.map(transformEntityReferenceToJSON),
        file_path: value.filePath,
        name: value.name,
        description: value.description,
        code: value.code && transformCodeToJSON(value.code),
        links: value.links.map(transformConnectedComponentLinkToJSON),
        source: value.source && transformResourceSourceToJSON(value.source)
    }
}

export const transformJSONToConnectedComponent = function (value: any): ConnectedComponent {
    return {
        compontents: value.compontents && value.compontents.map(transformJSONToEntityReference),
        filePath: value.file_path,
        name: value.name,
        description: value.description,
        code: value.code && transformJSONToCode(value.code),
        links: value.links.map(transformJSONToConnectedComponentLink),
        source: value.source && transformJSONToResourceSource(value.source)
    }
}

/**
 * 
 * @export
 * @interface ConnectedComponent
 */
export interface ConnectedComponent {
    /**
     * Components that are connected
     * @type {Array<EntityReference>}
     * @memberof ConnectedComponent
     */
    compontents?: Array<EntityReference>;
    /**
     * File path of the connected component from the source code
     * @type {string}
     * @memberof ConnectedComponent
     */
    filePath?: string;
    /**
     * Name of the connected component
     * @type {string}
     * @memberof ConnectedComponent
     */
    name?: string;
    /**
     * Description of the connected component
     * @type {string}
     * @memberof ConnectedComponent
     */
    description?: string;
    /**
     * 
     * @type {Code}
     * @memberof ConnectedComponent
     */
    code?: Code;
    /**
     * Links of the connected component
     * @type {Array<ConnectedComponentLink>}
     * @memberof ConnectedComponent
     */
    links: Array<ConnectedComponentLink>;
    /**
     * 
     * @type {ResourceSource}
     * @memberof ConnectedComponent
     */
    source?: ResourceSource;
}


