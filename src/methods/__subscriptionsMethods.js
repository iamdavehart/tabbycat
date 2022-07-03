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
 * Creates a new, unsuspended subscription to a view or workbook for a specific user. When a
 * user is subscribed to the content, Tableau Server sends the content to the user in email
 * on the schedule that's defined in Tableau Server and specified in this call.
 */
export function createSubscription(subscription, client) {
    const minVersion = "2.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/subscriptions`)
            .withBodyParameters(subscription)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes the specified subscription.
 */
export function deleteSubscription(subscriptionId, client) {
    const minVersion = "2.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!subscriptionId) return Promise.reject(new MissingPathParameterException("subscriptionId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/subscriptions/${subscriptionId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns information about the specified subscription.
 */
export function querySubscription(subscriptionId, client) {
    const minVersion = "2.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!subscriptionId) return Promise.reject(new MissingPathParameterException("subscriptionId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/subscriptions/${subscriptionId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of all the subscriptions on the specified site.
 */
export function querySubscriptions(queryOptions, client) {
    const minVersion = "2.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/subscriptions`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Modifies an existing subscription, allowing you to change the subject, schedule, and
 * suspension state for the subscription.
 */
export function updateSubscription(subscriptionId, subscription, client) {
    const minVersion = "2.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!subscriptionId) return Promise.reject(new MissingPathParameterException("subscriptionId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/subscriptions/${subscriptionId}`)
            .withBodyParameters(subscription)
            .withAuthenticationToken(token)
            .build()
    );
}
