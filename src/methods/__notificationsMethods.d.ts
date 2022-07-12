/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { UserRequest } from "tabbycat/types";
import { WebhookRequest } from "tabbycat/types";
import { DataAlertRequest } from "tabbycat/types";
import { UserNotificationsPreferencesRequest } from "tabbycat/types";
import { UserResponse } from "tabbycat/types";
import { WebhookResponse } from "tabbycat/types";
import { UserNotificationsPreferencesResponse } from "tabbycat/types";
import { WebhooksResponse } from "tabbycat/types";
import { DataAlertResponse } from "tabbycat/types";
import { DataAlertsResponse } from "tabbycat/types";
import { WebhookTestResultResponse } from "tabbycat/types";
import { NotificationUpdateResultResponse } from "tabbycat/types";

/**
 * Adds a specified user to the recipients list for a data-driven alert.
 * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by
 * 		calling Query Data-Driven Alerts.
 * @param {UserRequest} user user
 * @returns {Promise<UserResponse>} Promise | undefined
 */
export function addUserToDataDrivenAlert(dataAlertId: string, user: UserRequest, client?: ClientLite) : Promise<UserResponse>;

/**
 * Creates a new webhook for a site.
 * @param {WebhookRequest} webhook webhook
 * @returns {Promise<WebhookResponse>} Promise | undefined
 */
export function createWebhook(webhook: WebhookRequest, client?: ClientLite) : Promise<WebhookResponse>;

/**
 * Deletes the specified data-driven alert from the specified site.
 * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by
 * 		calling Query Data-Driven Alerts.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDataDrivenAlert(dataAlertId: string, client?: ClientLite) : Promise<any>;

/**
 * Removes a specified user from the recipients list for a data-driven alert.
 * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by
 * 		calling Query Data-Driven Alerts.
 * @param {string} userId The ID (not name) of the user to remove from the data-driven
 * 		alert.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteUserFromDataDrivenAlert(dataAlertId: string, userId: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes the specified webhook.
 * @param {string} webhookId The ID of the webhook.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteWebhook(webhookId: string, client?: ClientLite) : Promise<any>;

/**
 * Returns the notification preferences for the specified site. You can filter by channel
 * and notification type. For more information about notifications, see Manage Your Account
 * Settings.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.filter <parameter documentation missing>
 * @returns {Promise<UserNotificationsPreferencesResponse>} Promise | undefined
 */
export function getUserNotificationPreferences(queryOptions?: { filter: string }, client?: ClientLite) : Promise<UserNotificationsPreferencesResponse>;

/**
 * Returns information about the specified webhook.
 * @param {string} webhookId The ID of the webhook.
 * @returns {Promise<WebhookResponse>} Promise | undefined
 */
export function getWebhook(webhookId: string, client?: ClientLite) : Promise<WebhookResponse>;

/**
 * Returns a list of all the webhooks on the specified site.
 * @returns {Promise<WebhooksResponse>} Promise | undefined
 */
export function listWebhooksForSite(client?: ClientLite) : Promise<WebhooksResponse>;

/**
 * Returns details on a specified data-driven alert, including the recipients of the alert.
 * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by
 * 		calling Query Data-Driven Alerts.
 * @returns {Promise<DataAlertResponse>} Promise | undefined
 */
export function queryDataDrivenAlertDetails(dataAlertId: string, client?: ClientLite) : Promise<DataAlertResponse>;

/**
 * Returns a list of data-driven alerts in use on the specified site.
 * @returns {Promise<DataAlertsResponse>} Promise | undefined
 */
export function queryDataDrivenAlerts(client?: ClientLite) : Promise<DataAlertsResponse>;

/**
 * Tests the specified webhook. Sends an empty payload to the configured destination URL of
 * the webhook and returns the response from the server. This is useful for testing, to
 * ensure that things are being sent from Tableau and received back as expected.
 * @param {string} webhookId The ID of the webhook.
 * @returns {Promise<WebhookTestResultResponse>} Promise | undefined
 */
export function testWebhook(webhookId: string, client?: ClientLite) : Promise<WebhookTestResultResponse>;

/**
 * Update one or more settings for the specified data-driven alert; including the alert
 * subject, frequency, and owner.
 * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by
 * 		calling Query Data-Driven Alerts.
 * @param {DataAlertRequest} dataAlert dataAlert
 * @returns {Promise<DataAlertResponse>} Promise | undefined
 */
export function updateDataDrivenAlert(dataAlertId: string, dataAlert: DataAlertRequest, client?: ClientLite) : Promise<DataAlertResponse>;

/**
 * Updates user notifications preferences to enabled or disabled on the specified site. For
 * more information about notifications, see Manage Your Account Settings.
 * @param {UserNotificationsPreferencesRequest} userNotificationsPreferences
 * 		userNotificationsPreferences
 * @returns {Promise<NotificationUpdateResultResponse>} Promise | undefined
 */
export function updateUserNotificationPreferences(userNotificationsPreferences: UserNotificationsPreferencesRequest, client?: ClientLite) : Promise<NotificationUpdateResultResponse>;

/**
 * Modify the properties of an existing webhook.
 * @param {string} webhookId The ID of the webhook.
 * @param {WebhookRequest} webhook webhook
 * @returns {Promise<WebhookResponse>} Promise | undefined
 */
export function updateWebhook(webhookId: string, webhook: WebhookRequest, client?: ClientLite) : Promise<WebhookResponse>;
