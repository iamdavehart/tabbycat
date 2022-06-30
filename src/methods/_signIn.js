/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { DEFAULT_URL, DEFAULT_VERSION } from 'tabbycat/defaults';
import { TableauRestRequest } from 'tabbycat/request';
import { VersionException, MissingPathParameterException } from 'tabbycat/exceptions';
import { failsVersionCheck } from 'tabbycat/utils';
import * as http from 'tabbycat/httpMethods';

/**
 * Signs you in as a user on the specified site on Tableau Server or Tableau Online. This call returns a credentials token that you use in subsequent calls to the server. Typically, a credentials token is valid for 240 minutes. With administrator permissions on Tableau Server, you can change this timeout by using the tsm configuration set(Link opens in a new window) command and setting the wgserver.session.idle_limit option.
 * @param {TableauCredentialsType} credentials credentials
 * @returns {Promise<TableauCredentialsType>} Promise | undefined
 */
export function signIn(credentials, client) {
    const minVersion = "1.0";
    const { url = DEFAULT_URL, apiVersion = DEFAULT_VERSION, siteId, token, execute } = (client ?? this ?? {});
    if (!execute) return Promise.reject(new ExecutiveException());
    if (failsVersionCheck(apiVersion, minVersion)) return Promise.reject(new VersionException(apiVersion, minVersion));
  
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${apiVersion}/auth/signin`)
            .withBodyParameters(credentials)
            .build()
        );
}
