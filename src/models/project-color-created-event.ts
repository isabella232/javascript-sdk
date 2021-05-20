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
    ProjectColorCreatedEventResource,
    transformProjectColorCreatedEventResourceToJSON,
    transformJSONToProjectColorCreatedEventResource
} from './project-color-created-event-resource';
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


export const transformProjectColorCreatedEventToJSON = function (value: ProjectColorCreatedEvent): any {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformProjectColorCreatedEventResourceToJSON(value.resource),
        context: transformProjectColorEventContextToJSON(value.context),
        actor: transformWebhookEventActorToJSON(value.actor)
    }
}

export const transformJSONToProjectColorCreatedEvent = function (value: any): ProjectColorCreatedEvent {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformJSONToProjectColorCreatedEventResource(value.resource),
        context: transformJSONToProjectColorEventContext(value.context),
        actor: transformJSONToWebhookEventActor(value.actor)
    }
}

/**
 * 
 * @export
 * @interface ProjectColorCreatedEvent
 */
export interface ProjectColorCreatedEvent {
    /**
     * 
     * @type {string}
     * @memberof ProjectColorCreatedEvent
     */
    event: 'project.color';
    /**
     * 
     * @type {string}
     * @memberof ProjectColorCreatedEvent
     */
    action: 'created';
    /**
     * 
     * @type {number}
     * @memberof ProjectColorCreatedEvent
     */
    timestamp: number;
    /**
     * 
     * @type {ProjectColorCreatedEventResource}
     * @memberof ProjectColorCreatedEvent
     */
    resource: ProjectColorCreatedEventResource;
    /**
     * 
     * @type {ProjectColorEventContext}
     * @memberof ProjectColorCreatedEvent
     */
    context: ProjectColorEventContext;
    /**
     * 
     * @type {WebhookEventActor}
     * @memberof ProjectColorCreatedEvent
     */
    actor: WebhookEventActor;
}


