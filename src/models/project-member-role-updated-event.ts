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
    ProjectMemberEventContext,
    transformProjectMemberEventContextToJSON,
    transformJSONToProjectMemberEventContext
} from './project-member-event-context';
import {
    ProjectMemberInvitedEventResource,
    transformProjectMemberInvitedEventResourceToJSON,
    transformJSONToProjectMemberInvitedEventResource
} from './project-member-invited-event-resource';
import {
    WebhookEventActor,
    transformWebhookEventActorToJSON,
    transformJSONToWebhookEventActor
} from './webhook-event-actor';


export const transformProjectMemberRoleUpdatedEventToJSON = function (value: ProjectMemberRoleUpdatedEvent): any {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformProjectMemberInvitedEventResourceToJSON(value.resource),
        context: transformProjectMemberEventContextToJSON(value.context),
        actor: transformWebhookEventActorToJSON(value.actor)
    }
}

export const transformJSONToProjectMemberRoleUpdatedEvent = function (value: any): ProjectMemberRoleUpdatedEvent {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformJSONToProjectMemberInvitedEventResource(value.resource),
        context: transformJSONToProjectMemberEventContext(value.context),
        actor: transformJSONToWebhookEventActor(value.actor)
    }
}

/**
 * 
 * @export
 * @interface ProjectMemberRoleUpdatedEvent
 */
export interface ProjectMemberRoleUpdatedEvent {
    /**
     * 
     * @type {string}
     * @memberof ProjectMemberRoleUpdatedEvent
     */
    event: 'project.member';
    /**
     * 
     * @type {string}
     * @memberof ProjectMemberRoleUpdatedEvent
     */
    action: 'role_updated';
    /**
     * 
     * @type {number}
     * @memberof ProjectMemberRoleUpdatedEvent
     */
    timestamp: number;
    /**
     * 
     * @type {ProjectMemberInvitedEventResource}
     * @memberof ProjectMemberRoleUpdatedEvent
     */
    resource: ProjectMemberInvitedEventResource;
    /**
     * 
     * @type {ProjectMemberEventContext}
     * @memberof ProjectMemberRoleUpdatedEvent
     */
    context: ProjectMemberEventContext;
    /**
     * 
     * @type {WebhookEventActor}
     * @memberof ProjectMemberRoleUpdatedEvent
     */
    actor: WebhookEventActor;
}


