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
 * Create an ask data lens.
 */
export function createLens(createLensRequest, client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/-/askdata/lenses`)
            .withHeaders({"Content-Type":"application/vnd.tableau.nlp.lens.publicrest.v1.CreateLensRequest+json"})
            .withBodyParameters(createLensRequest)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Delete an ask data lens.
 */
export function deleteLens(lens_id, client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!lens_id) return Promise.reject(new MissingPathParameterException("lens_id"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/-/askdata/lenses/${lens_id}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Get the details of the specified ask data lens.
 */
export function getLens(lens_id, client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!lens_id) return Promise.reject(new MissingPathParameterException("lens_id"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/-/askdata/lenses/${lens_id}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Import an existing ask data lens on a server to a site, and optionally transform the
 * metadata of the lens in the process.
 */
export function importLens(importLensRequest, client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/-/askdata/lenses/import`)
            .withHeaders({"Content-Type":"application/vnd.tableau.nlp.lens.publicrest.v1.ImportLensRequest+json"})
            .withBodyParameters(importLensRequest)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of ask data lenses in a site.
 */
export function listLenses(client) {
    const minVersion = "2020.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/-/askdata/lenses`)
            .withAuthenticationToken(token)
            .build()
    );
}
