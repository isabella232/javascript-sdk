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


export const transformWorkspaceStyleguideUpdatedEventToJSON = function (value: WorkspaceStyleguideUpdatedEvent): any {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformWorkspaceStyleguideCreatedEventResourceToJSON(value.resource),
        actor: transformWebhookEventActorToJSON(value.actor)
    }
}

export const transformJSONToWorkspaceStyleguideUpdatedEvent = function (value: any): WorkspaceStyleguideUpdatedEvent {
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
 * @interface WorkspaceStyleguideUpdatedEvent
 */
export interface WorkspaceStyleguideUpdatedEvent {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceStyleguideUpdatedEvent
     */
    event: 'workspace.styleguide';
    /**
     * 
     * @type {string}
     * @memberof WorkspaceStyleguideUpdatedEvent
     */
    action: 'updated';
    /**
     * 
     * @type {number}
     * @memberof WorkspaceStyleguideUpdatedEvent
     */
    timestamp: number;
    /**
     * 
     * @type {WorkspaceStyleguideCreatedEventResource}
     * @memberof WorkspaceStyleguideUpdatedEvent
     */
    resource: WorkspaceStyleguideCreatedEventResource;
    /**
     * 
     * @type {WebhookEventActor}
     * @memberof WorkspaceStyleguideUpdatedEvent
     */
    actor: WebhookEventActor;
}


