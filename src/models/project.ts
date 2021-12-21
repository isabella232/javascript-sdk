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
    EntityReference,
    transformEntityReferenceToJSON,
    transformJSONToEntityReference
} from './entity-reference';
import {
    OrganizationSummary,
    transformOrganizationSummaryToJSON,
    transformJSONToOrganizationSummary
} from './organization-summary';
import {
    ProjectStatusEnum,
    transformProjectStatusEnumToJSON,
    transformJSONToProjectStatusEnum
} from './project-status-enum';
import {
    RemPreferences,
    transformRemPreferencesToJSON,
    transformJSONToRemPreferences
} from './rem-preferences';
import {
    WorkflowStatus,
    transformWorkflowStatusToJSON,
    transformJSONToWorkflowStatus
} from './workflow-status';


export const transformProjectToJSON = function (value: Project): any {
    return {
        id: value.id,
        name: value.name,
        description: value.description,
        platform: value.platform,
        thumbnail: value.thumbnail,
        status: transformProjectStatusEnumToJSON(value.status),
        organization: value.organization && transformOrganizationSummaryToJSON(value.organization),
        rem_preferences: value.remPreferences && transformRemPreferencesToJSON(value.remPreferences),
        workflow_status: value.workflowStatus && transformWorkflowStatusToJSON(value.workflowStatus),
        scene_url: value.sceneUrl,
        created: value.created,
        updated: value.updated,
        number_of_members: value.numberOfMembers,
        number_of_screens: value.numberOfScreens,
        number_of_components: value.numberOfComponents,
        number_of_connected_components: value.numberOfConnectedComponents,
        number_of_text_styles: value.numberOfTextStyles,
        number_of_colors: value.numberOfColors,
        number_of_spacing_tokens: value.numberOfSpacingTokens,
        linked_styleguide: value.linkedStyleguide && transformEntityReferenceToJSON(value.linkedStyleguide)
    }
}

export const transformJSONToProject = function (value: any): Project {
    return {
        id: value.id,
        name: value.name,
        description: value.description,
        platform: value.platform,
        thumbnail: value.thumbnail,
        status: transformJSONToProjectStatusEnum(value.status),
        organization: value.organization && transformJSONToOrganizationSummary(value.organization),
        remPreferences: value.rem_preferences && transformJSONToRemPreferences(value.rem_preferences),
        workflowStatus: value.workflow_status && transformJSONToWorkflowStatus(value.workflow_status),
        sceneUrl: value.scene_url,
        created: value.created,
        updated: value.updated,
        numberOfMembers: value.number_of_members,
        numberOfScreens: value.number_of_screens,
        numberOfComponents: value.number_of_components,
        numberOfConnectedComponents: value.number_of_connected_components,
        numberOfTextStyles: value.number_of_text_styles,
        numberOfColors: value.number_of_colors,
        numberOfSpacingTokens: value.number_of_spacing_tokens,
        linkedStyleguide: value.linked_styleguide && transformJSONToEntityReference(value.linked_styleguide)
    }
}

/**
 * 
 * @export
 * @interface Project
 */
export interface Project {
    /**
     * The unique id of the project
     * @type {string}
     * @memberof Project
     */
    id: string;
    /**
     * The name of the project
     * @type {string}
     * @memberof Project
     */
    name: string;
    /**
     * The description of the project
     * @type {string}
     * @memberof Project
     */
    description?: string;
    /**
     * The target platform of the project
     * @type {string}
     * @memberof Project
     */
    platform: 'web' | 'ios' | 'android' | 'macos';
    /**
     * URL of the project\'s thumbnail image
     * @type {string}
     * @memberof Project
     */
    thumbnail?: string;
    /**
     * 
     * @type {ProjectStatusEnum}
     * @memberof Project
     */
    status: ProjectStatusEnum;
    /**
     * 
     * @type {OrganizationSummary}
     * @memberof Project
     */
    organization?: OrganizationSummary;
    /**
     * 
     * @type {RemPreferences}
     * @memberof Project
     */
    remPreferences?: RemPreferences;
    /**
     * 
     * @type {WorkflowStatus}
     * @memberof Project
     */
    workflowStatus?: WorkflowStatus;
    /**
     * URL of the project\'s scene (public projects only)
     * @type {string}
     * @memberof Project
     */
    sceneUrl?: string;
    /**
     * The unix timestamp when the project was created
     * @type {number}
     * @memberof Project
     */
    created: number;
    /**
     * The unix timestamp when the project was updated
     * @type {number}
     * @memberof Project
     */
    updated?: number;
    /**
     * The number of members of the project
     * @type {number}
     * @memberof Project
     */
    numberOfMembers: number;
    /**
     * The number of screens in the project
     * @type {number}
     * @memberof Project
     */
    numberOfScreens: number;
    /**
     * The number of components exported to the project
     * @type {number}
     * @memberof Project
     */
    numberOfComponents: number;
    /**
     * The number of connected components in the project
     * @type {number}
     * @memberof Project
     */
    numberOfConnectedComponents: number;
    /**
     * The number of text styles added to the project
     * @type {number}
     * @memberof Project
     */
    numberOfTextStyles: number;
    /**
     * The number of colors added to the project
     * @type {number}
     * @memberof Project
     */
    numberOfColors: number;
    /**
     * The number of spacing tokens added to the project
     * @type {number}
     * @memberof Project
     */
    numberOfSpacingTokens: number;
    /**
     * 
     * @type {EntityReference}
     * @memberof Project
     */
    linkedStyleguide?: EntityReference;
}


