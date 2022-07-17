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
 * Adds the specified data source to the user's favorites.
 */
export function addDataSourceToFavorites(userId, favorite, client) {
    const minVersion = "2.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/favorites/${userId}`)
            .withBodyParameters(favorite)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds the specified flow to the user's favorites.
 */
export function addFlowToFavorites(userId, favorite, client) {
    const minVersion = "3.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/favorites/${userId}`)
            .withBodyParameters(favorite)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds the specified project to a user's favorites.
 */
export function addProjectToFavorites(userId, favorite, client) {
    const minVersion = "3.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/favorites/${userId}`)
            .withBodyParameters(favorite)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds the specified view to a user's favorites.
 */
export function addViewToFavorites(userId, favorite, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/favorites/${userId}`)
            .withBodyParameters(favorite)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds the specified workbook to a user's favorites.
 */
export function addWorkbookToFavorites(userId, favorite, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/favorites/${userId}`)
            .withBodyParameters(favorite)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes the specified data source from the user's favorites. If the specified data source
 * is not a favorite, the operation has no effect.
 */
export function deleteDataSourceFromFavorites(userId, datasourceId, client) {
    const minVersion = "2.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));
	if (!datasourceId) return Promise.reject(new MissingPathParameterException("datasourceId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/favorites/${userId}/datasources/${datasourceId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes the specified flow from the user's favorites. If the specified flow is not a
 * favorite, the operation has no effect.
 */
export function deleteFlowFromFavorites(userId, datasourceId, client) {
    const minVersion = "3.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));
	if (!datasourceId) return Promise.reject(new MissingPathParameterException("datasourceId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/favorites/${userId}/datasources/${datasourceId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes the specified project from the user's favorites. If the specified project is not
 * a favorite, the operation has no effect.
 */
export function deleteProjectFromFavorites(userId, projectId, client) {
    const minVersion = "3.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));
	if (!projectId) return Promise.reject(new MissingPathParameterException("projectId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/favorites/${userId}/projects/${projectId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes the specified view from user's favorites. If the specified view is not a
 * favorite, the operation has no effect.
 */
export function deleteViewFromFavorites(userId, viewId, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));
	if (!viewId) return Promise.reject(new MissingPathParameterException("viewId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/favorites/${userId}/views/${viewId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes a workbook from a user's favorites. If the specified workbook is not a favorite
 * of the specified user, this call has no effect.
 */
export function deleteWorkbookFromFavorites(userId, workbookId, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/favorites/${userId}/workbooks/${workbookId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of favorite projects, data sources, views, workbooks, and flows for a
 * user.
 */
export function getFavoritesForUser(userId, queryOptions, client) {
    const minVersion = "2.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/favorites/${userId}`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Move an item to organize a user's favorites.
 */
export function updateFavorites(userId, favoriteOrderings, client) {
    const minVersion = "3.8";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/orderFavorites/${userId}`)
            .withBodyParameters(favoriteOrderings)
            .withAuthenticationToken(token)
            .build()
    );
}
