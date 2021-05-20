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
import {
    Screen,
    transformScreenToJSON,
    transformJSONToScreen
} from './screen';


export const transformProjectScreenVersionEventContextToJSON = function (value: ProjectScreenVersionEventContext): any {
    return {
        project: transformProjectToJSON(value.project),
        screen: transformScreenToJSON(value.screen)
    }
}

export const transformJSONToProjectScreenVersionEventContext = function (value: any): ProjectScreenVersionEventContext {
    return {
        project: transformJSONToProject(value.project),
        screen: transformJSONToScreen(value.screen)
    }
}

/**
 * 
 * @export
 * @interface ProjectScreenVersionEventContext
 */
export interface ProjectScreenVersionEventContext {
    /**
     * 
     * @type {Project}
     * @memberof ProjectScreenVersionEventContext
     */
    project: Project;
    /**
     * 
     * @type {Screen}
     * @memberof ProjectScreenVersionEventContext
     */
    screen: Screen;
}


