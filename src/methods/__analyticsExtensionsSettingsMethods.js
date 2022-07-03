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
 * Adds an analytics extensions connection for an external service to a site. 
 */
export function addAnalyticsExtensionsConnection(connectionItem, client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/-/settings/site/extensions/analytics/connections`)
            .withHeaders({"Content-Type":"application/vnd.tableau.analyticsextensions.v1.ConnectionItem+json"})
            .withBodyParameters(connectionItem)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes a specific analytics extension connection for an external service from a site. 
 */
export function deleteAnalyticsExtensionsConnection(connection_luid, client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!connection_luid) return Promise.reject(new MissingPathParameterException("connection_luid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/-/settings/site/extensions/analytics/connections/{connection_luid}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Remove the currently used analytics extension connection to an external service  from the
 * specified workbook. The connection remains configured, and is available for further usage
 * by the workbook. 
 */
export function deleteConnectionFromWorkbook(workbook_luid, client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!workbook_luid) return Promise.reject(new MissingPathParameterException("workbook_luid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/selected_connection`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Get the details of a specified analytics extension connection to an external service. 
 */
export function getAnalyticsExtensionsConnection(connection_luid, client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!connection_luid) return Promise.reject(new MissingPathParameterException("connection_luid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/-/settings/site/extensions/analytics/connections/{connection_luid}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Lists a site's analytics extension connections for external services. 
 */
export function getAnalyticsExtensionsConnections(client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/-/settings/site/extensions/analytics/connections`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Gets the enabled/disabled state of analytics extensions on a server. 
 */
export function getAnalyticsExtensionsServerSettings(client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/-/settings/server/extensions/analytics`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Gets the enabled/disabled state of analytics extensions on a site. 
 */
export function getAnalyticsExtensionsSiteSettings(client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/-/settings/site/extensions/analytics`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Lists basic details of each analytics extension connection available for a specified
 * workbook, including connection type and name. 
 */
export function getConnectionOptionsForWorkbook(workbook_luid, client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!workbook_luid) return Promise.reject(new MissingPathParameterException("workbook_luid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/connections`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Gets basic details, including connection type and name, of the analytics extension
 * connection to an external service that the specified workbook is currently using. 
 */
export function getSelectedConnectionForWorkbook(workbook_luid, client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!workbook_luid) return Promise.reject(new MissingPathParameterException("workbook_luid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/selected_connection`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Updates the details of specified analytics extension connection for an external service
 * to a site. 
 */
export function updateAnalyticsExtensionsConnection(connection_luid, connectionItem, client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!connection_luid) return Promise.reject(new MissingPathParameterException("connection_luid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/-/settings/site/extensions/analytics/connections/{connection_luid}`)
            .withHeaders({"Content-Type":"application/vnd.tableau.analyticsextensions.v1.ConnectionItem+json"})
            .withBodyParameters(connectionItem)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Enables or disables analytics extensions on a server. 
 */
export function updateAnalyticsExtensionsServerSettings(serverSettings, client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/-/settings/server/extensions/analytics`)
            .withHeaders({"Content-Type":"application/vnd.tableau.analyticsextensions.v1.ServerSettings+json"})
            .withBodyParameters(serverSettings)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Enables or disables analytics extensions on a site. 
 */
export function updateAnalyticsExtensionsSiteSettings(siteSettings, client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/-/settings/site/extensions/analytics`)
            .withHeaders({"Content-Type":"application/vnd.tableau.analyticsextensions.v1.SiteSettings+json"})
            .withBodyParameters(siteSettings)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Updates the analytics extension connection to external service currently used by a
 * workbook. 
 */
export function updateWorkbookWithConnection(workbook_luid, connectionMapping, client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!workbook_luid) return Promise.reject(new MissingPathParameterException("workbook_luid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/selected_connection`)
            .withHeaders({"Content-Type":"application/vnd.tableau.analyticsextensions.v1.ConnectionMapping+json"})
            .withBodyParameters(connectionMapping)
            .withAuthenticationToken(token)
            .build()
    );
}
