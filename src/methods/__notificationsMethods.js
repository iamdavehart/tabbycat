/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { TableauRestRequest } from "tabbycat/request";
import { VersionException, MissingExecutiveException, MissingPathParameterException } from "tabbycat/exceptions";
import { failsVersionCheck } from "tabbycat/utils";
import * as http from "tabbycat/httpMethods";

/**
 * Adds a specified user to the recipients list for a data-driven alert.
 */
export function addUserToDataDrivenAlert(dataAlertId, user, client) {
    const minVersion = "3.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!dataAlertId) return Promise.reject(new MissingPathParameterException("dataAlertId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/dataAlerts/${dataAlertId}/users`)
            .withBodyParameters(user)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Creates a new webhook for a site.
 */
export function createWebhook(webhook, client) {
    const minVersion = "3.6";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/webhooks/`)
            .withBodyParameters(webhook)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes the specified data-driven alert from the specified site.
 */
export function deleteDataDrivenAlert(dataAlertId, client) {
    const minVersion = "3.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!dataAlertId) return Promise.reject(new MissingPathParameterException("dataAlertId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/dataAlerts/${dataAlertId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Removes a specified user from the recipients list for a data-driven alert.
 */
export function deleteUserFromDataDrivenAlert(dataAlertId, userId, client) {
    const minVersion = "3.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!dataAlertId) return Promise.reject(new MissingPathParameterException("dataAlertId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/dataAlerts/${dataAlertId}/users/${userId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes the specified webhook.
 */
export function deleteWebhook(webhookId, client) {
    const minVersion = "3.6";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!webhookId) return Promise.reject(new MissingPathParameterException("webhookId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/webhooks/${webhookId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns the notification preferences for the specified site. You can filter by channel
 * and notification type. For more information about notifications, see Manage Your Account
 * Settings.
 */
export function getUserNotificationPreferences(queryOptions, client) {
    const minVersion = "3.15";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/settings/notifications`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns information about the specified webhook.
 */
export function getWebhook(webhookId, client) {
    const minVersion = "3.6";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!webhookId) return Promise.reject(new MissingPathParameterException("webhookId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/webhooks/${webhookId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of all the webhooks on the specified site.
 */
export function listWebhooksForSite(client) {
    const minVersion = "3.6";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/webhooks`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns details on a specified data-driven alert, including the recipients of the alert.
 */
export function queryDataDrivenAlertDetails(dataAlertId, client) {
    const minVersion = "3.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!dataAlertId) return Promise.reject(new MissingPathParameterException("dataAlertId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/dataAlerts/${dataAlertId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of data-driven alerts in use on the specified site.
 */
export function queryDataDrivenAlerts(client) {
    const minVersion = "3.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/dataAlerts`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Tests the specified webhook. Sends an empty payload to the configured destination URL of
 * the webhook and returns the response from the server. This is useful for testing, to
 * ensure that things are being sent from Tableau and received back as expected.
 */
export function testWebhook(webhookId, client) {
    const minVersion = "3.6";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!webhookId) return Promise.reject(new MissingPathParameterException("webhookId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/webhooks/${webhookId}/test`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Update one or more settings for the specified data-driven alert; including the alert
 * subject, frequency, and owner.
 */
export function updateDataDrivenAlert(dataAlertId, dataAlert, client) {
    const minVersion = "3.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!dataAlertId) return Promise.reject(new MissingPathParameterException("dataAlertId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/dataAlerts/${dataAlertId}`)
            .withBodyParameters(dataAlert)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Updates user notifications preferences to enabled or disabled on the specified site. For
 * more information about notifications, see Manage Your Account Settings.
 */
export function updateUserNotificationPreferences(userNotificationsPreferences, client) {
    const minVersion = "3.15";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PATCH)
            .withPath(`/api/${version}/sites/${siteId}/settings/notifications`)
            .withBodyParameters(userNotificationsPreferences)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Modify the properties of an existing webhook.
 */
export function updateWebhook(webhookId, webhook, client) {
    const minVersion = "3.8";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!webhookId) return Promise.reject(new MissingPathParameterException("webhookId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/webhooks/${webhookId}`)
            .withBodyParameters(webhook)
            .withAuthenticationToken(token)
            .build()
    );
}
