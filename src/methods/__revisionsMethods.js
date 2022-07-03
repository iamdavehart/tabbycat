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
 * Downloads a specific version of a data source prior to the current one in .tdsx format.
 * To down load the current version of a data source use the Download Data Source method.
 */
export function downloadDataSourceRevision(datasourceId, revisionNumber, client) {
    const minVersion = "2.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!datasourceId) return Promise.reject(new MissingPathParameterException("datasourceId"));
	if (!revisionNumber) return Promise.reject(new MissingPathParameterException("revisionNumber"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/datasources/${datasourceId}/revisions/${revisionNumber}/content`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Downloads a specific version of a workbook in .twb or .twbx format.
 */
export function downloadWorkbookRevision(workbookId, revisionNumber, queryOptions, client) {
    const minVersion = "2.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));
	if (!revisionNumber) return Promise.reject(new MissingPathParameterException("revisionNumber"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}/revisions/${revisionNumber}/content`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of revision information (history) for the specified data source.
 */
export function getDataSourceRevisions(datasourceId, queryOptions, client) {
    const minVersion = "2.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!datasourceId) return Promise.reject(new MissingPathParameterException("datasourceId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/datasources/${datasourceId}/revisions`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of revision information (history) for the specified workbook.
 */
export function getWorkbookRevisions(workbookId, queryOptions, client) {
    const minVersion = "2.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}/revisions`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Removes a specific version of a data source from the specified site.
 */
export function removeDataSourceRevision(datasourceId, revisionNumber, client) {
    const minVersion = "2.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!datasourceId) return Promise.reject(new MissingPathParameterException("datasourceId"));
	if (!revisionNumber) return Promise.reject(new MissingPathParameterException("revisionNumber"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/datasources/${datasourceId}/revisions/${revisionNumber}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Removes a specific version of a workbook from the specified site.
 */
export function removeWorkbookRevision(workbookId, revisionNumber, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));
	if (!revisionNumber) return Promise.reject(new MissingPathParameterException("revisionNumber"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}/revisions/${revisionNumber}`)
            .withAuthenticationToken(token)
            .build()
    );
}
