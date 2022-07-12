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
 * Adds a user to the specified group.
 */
export function addUserToGroup(groupId, user, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!groupId) return Promise.reject(new MissingPathParameterException("groupId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/groups/${groupId}/users`)
            .withBodyParameters(user)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds a user to Tableau Server or Tableau and assigns the user to the specified site.
 */
export function addUserToSite(user, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/users`)
            .withBodyParameters(user)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Creates a group.
 */
export function createGroup(group, queryOptions, client) {
    const minVersion = "3.9";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/groups`)
            .withQueryParameters(queryOptions)
            .withBodyParameters(group)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes the group on a specific site. Deleting a group does not delete the users in
 * group, but users are no longer members of the group. Any permissions that were previously
 * assigned to the group no longer apply.
 */
export function deleteGroup(groupId, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!groupId) return Promise.reject(new MissingPathParameterException("groupId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/groups/${groupId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Creates a job to remove a list of users, specified in a .csv file, from a site.
 */
export function deleteUsersFromSiteWithCsv(file, client) {
    const minVersion = "3.15";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/users/delete`)
            .withHeaders({"Content-Type":"multipart/mixed"})
            .withBodyParameters(file)
            .withFileParameters({ name: "tableau_file", file: file })
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Gets a list of groups of which the specified user is a member.
 */
export function getGroupsForAUser(userId, queryOptions, client) {
    const minVersion = "3.7";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/users/${userId}/groups`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Gets a list of users in the specified group.
 */
export function getUsersInGroup(groupId, queryOptions, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!groupId) return Promise.reject(new MissingPathParameterException("groupId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/groups/${groupId}/users`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns the users associated with the specified site.
 */
export function getUsersOnSite(queryOptions, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/users`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Creates a job to import the users listed in a specified .csv file to a site, and assign
 * their roles and authorization settings.
 */
export function importUsersToSiteFromCsv(file, client) {
    const minVersion = "3.15";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/users/import`)
            .withHeaders({"Content-Type":"multipart/mixed"})
            .withBodyParameters(file)
            .withFileParameters({ name: "tableau_file", file: file })
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of groups on the specified site, with optional parameters for specifying
 * the paging of large results.
 */
export function queryGroups(queryOptions, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/groups`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns information about the specified user.
 */
export function queryUserOnSite(userId, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/users/${userId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Removes a user from the specified group.
 */
export function removeUserFromGroup(groupId, userId, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!groupId) return Promise.reject(new MissingPathParameterException("groupId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/groups/${groupId}/users/${userId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Removes a user from the specified site. The user will be deleted if they do not own any
 * other assets other than subscriptions. If a user still owns content (assets) on Tableau
 * Server, the user cannot be deleted unless the ownership is reassigned first.
 */
export function removeUserFromSite(userId, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/users/${userId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Updates a group.
 */
export function updateGroup(groupId, group, client) {
    const minVersion = "3.9";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!groupId) return Promise.reject(new MissingPathParameterException("groupId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/groups/${groupId}`)
            .withBodyParameters(group)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Modifies information about the specified user.
 */
export function updateUser(userId, user, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/users/${userId}`)
            .withBodyParameters(user)
            .withAuthenticationToken(token)
            .build()
    );
}
