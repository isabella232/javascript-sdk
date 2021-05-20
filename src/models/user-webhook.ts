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
    User,
    transformUserToJSON,
    transformJSONToUser
} from './user';
import {
    UserWebhookEventEnum,
    transformUserWebhookEventEnumToJSON,
    transformJSONToUserWebhookEventEnum
} from './user-webhook-event-enum';
import {
    WebhookHealthEnum,
    transformWebhookHealthEnumToJSON,
    transformJSONToWebhookHealthEnum
} from './webhook-health-enum';
import {
    WebhookStatusEnum,
    transformWebhookStatusEnumToJSON,
    transformJSONToWebhookStatusEnum
} from './webhook-status-enum';
import {
    ZeplinApplication,
    transformZeplinApplicationToJSON,
    transformJSONToZeplinApplication
} from './zeplin-application';


export const transformUserWebhookToJSON = function (value: UserWebhook): any {
    return {
        id: value.id,
        url: value.url,
        name: value.name,
        status: transformWebhookStatusEnumToJSON(value.status),
        url_health: transformWebhookHealthEnumToJSON(value.urlHealth),
        created: value.created,
        updated: value.updated,
        created_by: transformUserToJSON(value.createdBy),
        updated_by: transformUserToJSON(value.updatedBy),
        zeplin_app: value.zeplinApp && transformZeplinApplicationToJSON(value.zeplinApp),
        events: [...value.events].map(transformUserWebhookEventEnumToJSON),
        project_ids: [...value.projectIds],
        styleguide_ids: [...value.styleguideIds]
    }
}

export const transformJSONToUserWebhook = function (value: any): UserWebhook {
    return {
        id: value.id,
        url: value.url,
        name: value.name,
        status: transformJSONToWebhookStatusEnum(value.status),
        urlHealth: transformJSONToWebhookHealthEnum(value.url_health),
        created: value.created,
        updated: value.updated,
        createdBy: transformJSONToUser(value.created_by),
        updatedBy: transformJSONToUser(value.updated_by),
        zeplinApp: value.zeplin_app && transformJSONToZeplinApplication(value.zeplin_app),
        events: new Set(value.events.map(transformJSONToUserWebhookEventEnum)),
        projectIds: new Set(value.project_ids),
        styleguideIds: new Set(value.styleguide_ids)
    }
}

/**
 * 
 * @export
 * @interface UserWebhook
 */
export interface UserWebhook {
    /**
     * The unique id of the webhook
     * @type {string}
     * @memberof UserWebhook
     */
    id: string;
    /**
     * The URL of the webhook
     * @type {string}
     * @memberof UserWebhook
     */
    url: string;
    /**
     * The name of the webhook
     * @type {string}
     * @memberof UserWebhook
     */
    name?: string;
    /**
     * 
     * @type {WebhookStatusEnum}
     * @memberof UserWebhook
     */
    status: WebhookStatusEnum;
    /**
     * 
     * @type {WebhookHealthEnum}
     * @memberof UserWebhook
     */
    urlHealth: WebhookHealthEnum;
    /**
     * The unix timestamp when the webhook was created
     * @type {number}
     * @memberof UserWebhook
     */
    created: number;
    /**
     * The unix timestamp when the webhook was updated
     * @type {number}
     * @memberof UserWebhook
     */
    updated: number;
    /**
     * 
     * @type {User}
     * @memberof UserWebhook
     */
    createdBy: User;
    /**
     * 
     * @type {User}
     * @memberof UserWebhook
     */
    updatedBy: User;
    /**
     * 
     * @type {ZeplinApplication}
     * @memberof UserWebhook
     */
    zeplinApp?: ZeplinApplication;
    /**
     * The events of the webhook
     * @type {Set<UserWebhookEventEnum>}
     * @memberof UserWebhook
     */
    events: Set<UserWebhookEventEnum>;
    /**
     * The project ids of the webhooks. Note: `*` wildcard denotes all project_ids
     * @type {Set<string>}
     * @memberof UserWebhook
     */
    projectIds: Set<string>;
    /**
     * The styleguide ids of the webhooks. Note: `*` wildcard denotes all styleguide_ids
     * @type {Set<string>}
     * @memberof UserWebhook
     */
    styleguideIds: Set<string>;
}


