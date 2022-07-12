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
 * Creates a site on Tableau Server. To make changes to an existing site, call Update Site.
 * This method is not available for Tableau Online.
 */
export function createSite(site, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites`)
            .withBodyParameters(site)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes the specified site.
 */
export function deleteSiteByContentUrl(contentUrl, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!contentUrl) return Promise.reject(new MissingPathParameterException("contentUrl"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteName}?key=contentUrl`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes the specified site.
 */
export function deleteSiteByID(siteId, client) {
    const minVersion = "1.0";
    const { url, version, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes the specified site.
 */
export function deleteSiteByName(siteName, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteName) return Promise.reject(new MissingPathParameterException("siteName"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteName}?key=name`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a report about data acceleration for the site. It lets you compare page load
 * times for before and after data acceleration is enabled.
 */
export function getDataAccelerationReport(client) {
    const minVersion = "2022.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/dataAccelerationReport`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns the current embedding settings for a specific site. Embedding settings can be
 * used to restrict embedding Tableau views to only certain domains. This setting impacts all
 * embedding scenarios that are not set up to use connected apps for authentication,
 * including, Tableau Javascript API v2, Embedding API v3, and the embed code from the share
 * dialog. For more information, see Tableau Site Settings for Embedding.
 */
export function getEmbeddingSettingsForSite(client) {
    const minVersion = "3.16";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/settings/embedding`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Gets the details of the views and workbooks on a site that have been most recently
 * created, updated, or accessed by the signed in user. The 24 most recently viewed items are
 * returned, though it may take some minutes after being viewed for an item to appear in the
 * results.
 */
export function getRecentlyViewed(client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/content/recent`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns information about the specified site, with the option to return information about
 * the storage space and user count for the site.
 */
export function querySiteByContentUrl(contentUrl, queryOptions, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!contentUrl) return Promise.reject(new MissingPathParameterException("contentUrl"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteName}?key=contentUrl`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns information about the specified site, with the option to return information about
 * the storage space and user count for the site.
 */
export function querySiteByID(siteId, queryOptions, client) {
    const minVersion = "1.0";
    const { url, version, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns information about the specified site, with the option to return information about
 * the storage space and user count for the site.
 */
export function querySiteByName(siteName, queryOptions, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteName) return Promise.reject(new MissingPathParameterException("siteName"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteName}?key=name`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of the sites on the server that the caller of this method has access to.
 * This method is not available for Tableau Online.
 */
export function querySites(queryOptions, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns all the views for the specified site, optionally including usage statistics.
 */
export function queryViewsForSite(queryOptions, client) {
    const minVersion = "2.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/views`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Updates the embedding settings for a site. Embedding settings can be used to restrict
 * embedding Tableau views to only certain domains. This setting impacts all embedding
 * scenarios that are not set up to use connected apps for authentication, including, Tableau
 * Javascript API v2, Embedding API v3, and the embed code from the share dialog. For more
 * information, see Tableau Site Settings for Embedding.
 */
export function updateEmbeddingSettingsForSite(site, client) {
    const minVersion = "3.16";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/settings/embedding`)
            .withBodyParameters(site)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Modifies settings for the specified site, including the content URL, administration mode,
 * user quota, state (active or suspended), storage quota, whether flows are enabled, whether
 * subscriptions are enabled, and whether revisions are enabled. If you're working with
 * Tableau Online, this method can also be used to upload a new logo image for the site.
 */
export function updateSite(site, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}`)
            .withBodyParameters(site)
            .withAuthenticationToken(token)
            .build()
    );
}
