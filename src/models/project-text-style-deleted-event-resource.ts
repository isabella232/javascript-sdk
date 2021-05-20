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




export const transformProjectTextStyleDeletedEventResourceToJSON = function (value: ProjectTextStyleDeletedEventResource): any {
    return {
        id: value.id,
        type: value.type
    }
}

export const transformJSONToProjectTextStyleDeletedEventResource = function (value: any): ProjectTextStyleDeletedEventResource {
    return {
        id: value.id,
        type: value.type
    }
}

/**
 * 
 * @export
 * @interface ProjectTextStyleDeletedEventResource
 */
export interface ProjectTextStyleDeletedEventResource {
    /**
     * 
     * @type {string}
     * @memberof ProjectTextStyleDeletedEventResource
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectTextStyleDeletedEventResource
     */
    type: 'TextStyle';
}


