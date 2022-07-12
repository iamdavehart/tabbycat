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
 * Creates a project on the specified site. You can also create project hierarchies by
 * creating a project under the specified parent project on the site. To make changes to an
 * existing project, call Update Project.
 */
export function createProject(project, queryOptions, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/projects`)
            .withQueryParameters(queryOptions)
            .withBodyParameters(project)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes the specified project on a specific site. When a project is deleted, all Tableau
 * assets inside of it are also deleted, including assets like associated workbooks, data
 * sources, project view options, and rights.
 */
export function deleteProject(projectLuid, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteLuid) return Promise.reject(new MissingPathParameterException("siteLuid"));
	if (!projectLuid) return Promise.reject(new MissingPathParameterException("projectLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectLuid}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of projects on the specified site, with optional parameters for specifying
 * the paging of large results.
 */
export function queryProjects(queryOptions, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/projects`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Updates the name, description, or project hierarchy of the specified project. You can
 * create or update project hierarchies by specifying a parent project for the project that
 * you are updating using this method.
 */
export function updateProject(projectId, project, queryOptions, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!projectId) return Promise.reject(new MissingPathParameterException("projectId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectId}`)
            .withQueryParameters(queryOptions)
            .withBodyParameters(project)
            .withAuthenticationToken(token)
            .build()
    );
}
