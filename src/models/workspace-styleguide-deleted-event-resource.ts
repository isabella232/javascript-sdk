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




export const transformWorkspaceStyleguideDeletedEventResourceToJSON = function (value: WorkspaceStyleguideDeletedEventResource): any {
    return {
        id: value.id,
        type: value.type
    }
}

export const transformJSONToWorkspaceStyleguideDeletedEventResource = function (value: any): WorkspaceStyleguideDeletedEventResource {
    return {
        id: value.id,
        type: value.type
    }
}

/**
 * 
 * @export
 * @interface WorkspaceStyleguideDeletedEventResource
 */
export interface WorkspaceStyleguideDeletedEventResource {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceStyleguideDeletedEventResource
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceStyleguideDeletedEventResource
     */
    type: 'Styleguide';
}


