/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { Paginated } from "tabbycat/types";
import { UserType } from "tabbycat/types";
import { WebhookType } from "tabbycat/types";
import { DataAlertType } from "tabbycat/types";
import { UserNotificationsPreferenceListType } from "tabbycat/types";
import { WebhookListType } from "tabbycat/types";
import { DataAlertListType } from "tabbycat/types";
import { WebhookTestResultType } from "tabbycat/types";
import { NotificationUpdateResultType } from "tabbycat/types";

/**
 * Adds a specified user to the recipients list for a data-driven alert.
 * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by
 * 		calling Query Data-Driven Alerts.
 * @param {UserType} user user
 * @returns {Promise<UserType>} Promise | undefined
 */
export function addUserToDataDrivenAlert(dataAlertId: string, user: UserType, client?: ClientLite) : Promise<UserType>;

/**
 * Creates a new webhook for a site.
 * @param {WebhookType} webhook webhook
 * @returns {Promise<WebhookType>} Promise | undefined
 */
export function createWebhook(webhook: WebhookType, client?: ClientLite) : Promise<WebhookType>;

/**
 * Deletes the specified data-driven alert from the specified site.
 * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by
 * 		calling Query Data-Driven Alerts.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDataDrivenAlert(dataAlertId: string, client?: ClientLite) : Promise<any>;

/**
 * Removes a specified user from the recipients list for a data-driven alert.
 * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by
 * 		calling Query Data-Driven Alerts.
 * @param {string} userId The ID (not name) of the user to remove from the data-driven
 * 		alert.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteUserFromDataDrivenAlert(dataAlertId: string, userId: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes the specified webhook.
 * @param {string} webhookId The ID of the webhook.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteWebhook(webhookId: string, client?: ClientLite) : Promise<any>;

/**
 * Returns the notification preferences for the specified site. You can filter by channel
 * and notification type. For more information about notifications, see Manage Your Account
 * Settings.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.filter <parameter documentation missing>
 * @returns {Promise<UserNotificationsPreferenceListType>} Promise | undefined
 */
export function getUserNotificationPreferences(queryOptions?: { filter: string }, client?: ClientLite) : Promise<UserNotificationsPreferenceListType>;

/**
 * Returns information about the specified webhook.
 * @param {string} webhookId The ID of the webhook.
 * @returns {Promise<WebhookType>} Promise | undefined
 */
export function getWebhook(webhookId: string, client?: ClientLite) : Promise<WebhookType>;

/**
 * Returns a list of all the webhooks on the specified site.
 * @returns {Promise<WebhookListType>} Promise | undefined
 */
export function listWebhooksForSite(client?: ClientLite) : Promise<WebhookListType>;

/**
 * Returns details on a specified data-driven alert, including the recipients of the alert.
 * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by
 * 		calling Query Data-Driven Alerts.
 * @returns {Promise<DataAlertType>} Promise | undefined
 */
export function queryDataDrivenAlertDetails(dataAlertId: string, client?: ClientLite) : Promise<DataAlertType>;

/**
 * Returns a list of data-driven alerts in use on the specified site.
 * @returns {Promise<Paginated<DataAlertListType>>} Promise | undefined
 */
export function queryDataDrivenAlerts(client?: ClientLite) : Promise<Paginated<DataAlertListType>>;

/**
 * Tests the specified webhook. Sends an empty payload to the configured destination URL of
 * the webhook and returns the response from the server. This is useful for testing, to
 * ensure that things are being sent from Tableau and received back as expected.
 * @param {string} webhookId The ID of the webhook.
 * @returns {Promise<WebhookTestResultType>} Promise | undefined
 */
export function testWebhook(webhookId: string, client?: ClientLite) : Promise<WebhookTestResultType>;

/**
 * Update one or more settings for the specified data-driven alert; including the alert
 * subject, frequency, and owner.
 * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by
 * 		calling Query Data-Driven Alerts.
 * @param {DataAlertType} dataAlert dataAlert
 * @returns {Promise<DataAlertType>} Promise | undefined
 */
export function updateDataDrivenAlert(dataAlertId: string, dataAlert: DataAlertType, client?: ClientLite) : Promise<DataAlertType>;

/**
 * Updates user notifications preferences to enabled or disabled on the specified site. For
 * more information about notifications, see Manage Your Account Settings.
 * @param {UserNotificationsPreferenceListType} userNotificationsPreferences
 * 		userNotificationsPreferences
 * @returns {Promise<NotificationUpdateResultType>} Promise | undefined
 */
export function updateUserNotificationPreferences(userNotificationsPreferences: UserNotificationsPreferenceListType, client?: ClientLite) : Promise<NotificationUpdateResultType>;

/**
 * Modify the properties of an existing webhook.
 * @param {string} webhookId The ID of the webhook.
 * @param {WebhookType} webhook webhook
 * @returns {Promise<WebhookType>} Promise | undefined
 */
export function updateWebhook(webhookId: string, webhook: WebhookType, client?: ClientLite) : Promise<WebhookType>;
