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
    ProjectColorDeletedEventResource,
    transformProjectColorDeletedEventResourceToJSON,
    transformJSONToProjectColorDeletedEventResource
} from './project-color-deleted-event-resource';
import {
    ProjectColorEventContext,
    transformProjectColorEventContextToJSON,
    transformJSONToProjectColorEventContext
} from './project-color-event-context';
import {
    WebhookEventActor,
    transformWebhookEventActorToJSON,
    transformJSONToWebhookEventActor
} from './webhook-event-actor';


export const transformProjectColorDeletedEventToJSON = function (value: ProjectColorDeletedEvent): any {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformProjectColorDeletedEventResourceToJSON(value.resource),
        context: transformProjectColorEventContextToJSON(value.context),
        actor: transformWebhookEventActorToJSON(value.actor)
    }
}

export const transformJSONToProjectColorDeletedEvent = function (value: any): ProjectColorDeletedEvent {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformJSONToProjectColorDeletedEventResource(value.resource),
        context: transformJSONToProjectColorEventContext(value.context),
        actor: transformJSONToWebhookEventActor(value.actor)
    }
}

/**
 * 
 * @export
 * @interface ProjectColorDeletedEvent
 */
export interface ProjectColorDeletedEvent {
    /**
     * 
     * @type {string}
     * @memberof ProjectColorDeletedEvent
     */
    event: 'project.color';
    /**
     * 
     * @type {string}
     * @memberof ProjectColorDeletedEvent
     */
    action: 'deleted';
    /**
     * 
     * @type {number}
     * @memberof ProjectColorDeletedEvent
     */
    timestamp: number;
    /**
     * 
     * @type {ProjectColorDeletedEventResource}
     * @memberof ProjectColorDeletedEvent
     */
    resource: ProjectColorDeletedEventResource;
    /**
     * 
     * @type {ProjectColorEventContext}
     * @memberof ProjectColorDeletedEvent
     */
    context: ProjectColorEventContext;
    /**
     * 
     * @type {WebhookEventActor}
     * @memberof ProjectColorDeletedEvent
     */
    actor: WebhookEventActor;
}


