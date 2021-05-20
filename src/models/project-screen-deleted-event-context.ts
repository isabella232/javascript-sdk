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
    Project,
    transformProjectToJSON,
    transformJSONToProject
} from './project';


export const transformProjectScreenDeletedEventContextToJSON = function (value: ProjectScreenDeletedEventContext): any {
    return {
        project: transformProjectToJSON(value.project)
    }
}

export const transformJSONToProjectScreenDeletedEventContext = function (value: any): ProjectScreenDeletedEventContext {
    return {
        project: transformJSONToProject(value.project)
    }
}

/**
 * 
 * @export
 * @interface ProjectScreenDeletedEventContext
 */
export interface ProjectScreenDeletedEventContext {
    /**
     * 
     * @type {Project}
     * @memberof ProjectScreenDeletedEventContext
     */
    project: Project;
}


