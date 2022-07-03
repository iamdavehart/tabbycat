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
 * Deletes a specified session. This method is not available for Tableau Online and is
 * typically used in programmatic management of the life cycles of embedded Tableau sessions.
 */
export function deleteServerSession(sessionId, client) {
    const minVersion = "3.9";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!sessionId) return Promise.reject(new MissingPathParameterException("sessionId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sessions/${sessionId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns details of the current session of Tableau Server.
 */
export function getCurrentServerSession(client) {
    const minVersion = "3.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sessions/current`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns the details of the Active Directory domains that are in use on the server,
 * including their full domain names, nicknames and IDs. If the server is configured to use
 * local authentication, the command returns only the domain name local.
 */
export function listServerActiveDirectoryDomains(client) {
    const minVersion = "3.11";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/domains/`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns the version of Tableau Server and the supported version of the REST API.
 */
export function serverInfo(client) {
    const minVersion = "2.4";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/serverinfo`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Changes the nickname or full domain name of an Active Directory domain on the server.
 * This method is not available on Tableau Online.
 */
export function updateServerActiveDirectoryDomain(domainId, domain, client) {
    const minVersion = "3.11";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!domainId) return Promise.reject(new MissingPathParameterException("domainId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/domains/${domainId}`)
            .withBodyParameters(domain)
            .withAuthenticationToken(token)
            .build()
    );
}
