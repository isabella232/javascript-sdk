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
    WebhookEventActor,
    transformWebhookEventActorToJSON,
    transformJSONToWebhookEventActor
} from './webhook-event-actor';
import {
    WorkspaceStyleguideCreatedEventResource,
    transformWorkspaceStyleguideCreatedEventResourceToJSON,
    transformJSONToWorkspaceStyleguideCreatedEventResource
} from './workspace-styleguide-created-event-resource';


export const transformWorkspaceStyleguideArchivedEventToJSON = function (value: WorkspaceStyleguideArchivedEvent): any {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformWorkspaceStyleguideCreatedEventResourceToJSON(value.resource),
        actor: transformWebhookEventActorToJSON(value.actor)
    }
}

export const transformJSONToWorkspaceStyleguideArchivedEvent = function (value: any): WorkspaceStyleguideArchivedEvent {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformJSONToWorkspaceStyleguideCreatedEventResource(value.resource),
        actor: transformJSONToWebhookEventActor(value.actor)
    }
}

/**
 * 
 * @export
 * @interface WorkspaceStyleguideArchivedEvent
 */
export interface WorkspaceStyleguideArchivedEvent {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceStyleguideArchivedEvent
     */
    event: 'workspace.styleguide';
    /**
     * 
     * @type {string}
     * @memberof WorkspaceStyleguideArchivedEvent
     */
    action: 'archived';
    /**
     * 
     * @type {number}
     * @memberof WorkspaceStyleguideArchivedEvent
     */
    timestamp: number;
    /**
     * 
     * @type {WorkspaceStyleguideCreatedEventResource}
     * @memberof WorkspaceStyleguideArchivedEvent
     */
    resource: WorkspaceStyleguideCreatedEventResource;
    /**
     * 
     * @type {WebhookEventActor}
     * @memberof WorkspaceStyleguideArchivedEvent
     */
    actor: WebhookEventActor;
}


