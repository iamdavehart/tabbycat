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
 * Revokes all personal access tokens(Link opens in a new window) (PATs) created by server
 * administrators. This method is not available for Tableau Online.
 */
export function revokeAdministratorPersonalAccessTokens(client) {
    const minVersion = "3.11";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/auth/serverAdminAccessTokens`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Signs you in as a user on the specified site on Tableau Server or Tableau Online. This
 * call returns a credentials token that you use in subsequent calls to the server.
 * Typically, a credentials token is valid for 240 minutes. With administrator permissions on
 * Tableau Server, you can change this timeout by using the tsm configuration set(Link opens
 * in a new window) command and setting the wgserver.session.idle_limit option.
 */
export function signIn(credentials, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/auth/signin`)
            .withBodyParameters(credentials)
            .build()
    );
}

/**
 * Signs you out of the current session. This call invalidates the authentication token that
 * is created by a call to Sign In.
 */
export function signOut(client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/auth/signout`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Switches you onto another site without having to provide a user name and password again.
 */
export function switchSite(site, client) {
    const minVersion = "2.6";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/auth/switchSite`)
            .withBodyParameters(site)
            .build()
    );
}
