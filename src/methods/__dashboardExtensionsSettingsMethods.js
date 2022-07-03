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
 * Adds a dashboard extension to the block list of a server.  
 */
export function createDashboardExtensionsBlockListItem(blockListItem, client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/-/settings/server/extensions/dashboard/blockListItems`)
            .withHeaders({"Content-Type":"application/vnd.tableau.extensions.dashboard.v1.BlockListItem+json"})
            .withBodyParameters(blockListItem)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds a dashboard extension to the safe list of the site you are  signed into. 
 */
export function createDashboardExtensionsSafeListItem(safeListItem, client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/-/settings/site/extensions/dashboard/safeListItems`)
            .withHeaders({"Content-Type":"application/vnd.tableau.extensions.dashboard.v1.SafeListItem+json"})
            .withBodyParameters(safeListItem)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes a specific extension from the block list of a server. 
 */
export function deleteDashboardExtensionsBlockListItem(block_list_item_luid, client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!block_list_item_luid) return Promise.reject(new MissingPathParameterException("block_list_item_luid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/-/settings/server/extensions/dashboard/blockListItems/{block_list_item_luid}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes a specific dashboard extension from the safe list of the site you are signed
 * into. 
 */
export function deleteDashboardExtensionsSafeListItem(safe_list_item_luid, client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!safe_list_item_luid) return Promise.reject(new MissingPathParameterException("safe_list_item_luid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/-/settings/site/extensions/dashboard/safeListItems/{safe_list_item_luid}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Gets the details of a specific dashboard extension on the blocked list of a server. 
 */
export function getDashboardExtensionsBlockListItem(block_list_item_luid, client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!block_list_item_luid) return Promise.reject(new MissingPathParameterException("block_list_item_luid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/-/settings/server/extensions/dashboard/blockListItems/{block_list_item_luid}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Lists the dashboard extensions on the blocked list of a server. 
 */
export function getDashboardExtensionsBlockListItems(client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/-/settings/server/extensions/dashboard/blockListItems`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Gets the details of a specific dashboard extension on the safe list of the site you are
 * signed into. 
 */
export function getDashboardExtensionsSafeListItem(safe_list_item_luid, client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!safe_list_item_luid) return Promise.reject(new MissingPathParameterException("safe_list_item_luid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/-/settings/site/extensions/dashboard/safeListItems/{safe_list_item_luid}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Lists the dashboard extensions on the safe list of the site you are signed into. 
 */
export function getDashboardExtensionsSafeListItems(client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/-/settings/site/extensions/dashboard/safeListItems`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Lists the dashboard extension settings of a server. 
 */
export function getDashboardExtensionsServerSettings(client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/-/settings/server/extensions/dashboard`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Lists the dashboard extension settings of the site you are signed into. 
 */
export function getDashboardExtensionsSiteSettings(client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/-/settings/site/extensions/dashboard`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Updates the settings of a specific dashboard extension in the safe list of the site you
 * are signed into. 
 */
export function updateDashboardExtensionsSafeListItem(safe_list_item_luid, safeListItem, client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!safe_list_item_luid) return Promise.reject(new MissingPathParameterException("safe_list_item_luid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/-/settings/site/extensions/dashboard/safeListItems/{safe_list_item_luid}`)
            .withHeaders({"Content-Type":"application/vnd.tableau.extensions.dashboard.v1.SafeListItem+json"})
            .withBodyParameters(safeListItem)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Updates the settings for dashboard extensions of a server 
 */
export function updateDashboardExtensionsServerSettings(serverSettings, client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/-/settings/server/extensions/dashboard`)
            .withHeaders({"Content-Type":"application/vnd.tableau.extensions.dashboard.v1.ServerSettings+json"})
            .withBodyParameters(serverSettings)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Updates the settings for dashboard extensions for the site you are signed into. 
 */
export function updateDashboardExtensionsSiteSettings(siteSettings, client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/-/settings/site/extensions/dashboard`)
            .withHeaders({"Content-Type":"application/vnd.tableau.extensions.dashboard.v1.SiteSettings+json"})
            .withBodyParameters(siteSettings)
            .withAuthenticationToken(token)
            .build()
    );
}
