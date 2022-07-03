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
 * Create a connected app.
 */
export function createConnectedApplication(connectedApplication, client) {
    const minVersion = "3.14";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/connected-applications`)
            .withBodyParameters(connectedApplication)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Generate a secret for a connected app.
 */
export function createConnectedApplicationSecret(clientId, client) {
    const minVersion = "3.14";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!clientId) return Promise.reject(new MissingPathParameterException("clientId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/connected-applications/${clientId}/secrets`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Permanently remove a connected app.
 */
export function deleteConnectedApplication(clientId, client) {
    const minVersion = "3.14";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!clientId) return Promise.reject(new MissingPathParameterException("clientId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/connected-applications/${clientId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Permanently remove a secret associated with a connected app.
 */
export function deleteConnectedApplicationSecret(clientId, secretId, client) {
    const minVersion = "3.14";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!clientId) return Promise.reject(new MissingPathParameterException("clientId"));
	if (!secretId) return Promise.reject(new MissingPathParameterException("secretId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/connected-applications/${clientId}/secrets/${secretId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Query a connected app by its ID.
 */
export function getConnectedApplication(clientId, client) {
    const minVersion = "3.14";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!clientId) return Promise.reject(new MissingPathParameterException("clientId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/connected-applications/${clientId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Query all connected apps configured on a site.
 */
export function getConnectedApplications(client) {
    const minVersion = "3.14";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/connected-applications`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Query a connected app secret and the token value using the connected app's ID.
 */
export function getConnectedApplicationSecret(clientId, secretId, client) {
    const minVersion = "3.14";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!clientId) return Promise.reject(new MissingPathParameterException("clientId"));
	if (!secretId) return Promise.reject(new MissingPathParameterException("secretId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/connected-applications/${clientId}/secrets/${secretId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Update a connected app.
 */
export function updateConnectedApplicationSecret(clientId, connectedApplication, client) {
    const minVersion = "3.14";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!clientId) return Promise.reject(new MissingPathParameterException("clientId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/connected-applications/${clientId}`)
            .withBodyParameters(connectedApplication)
            .withAuthenticationToken(token)
            .build()
    );
}
