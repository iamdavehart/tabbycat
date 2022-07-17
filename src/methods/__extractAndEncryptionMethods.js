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
 * Create an extract for a data source in a site. Optionally, encrypt the extract if the
 * site and workbooks using it are configured to allow it.
 */
export function createExtractForDatasource(datasourceId, queryOptions, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!datasourceId) return Promise.reject(new MissingPathParameterException("datasourceId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/datasources/${datasourceId}/createExtract`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Create extracts for all embedded data sources of a workbook. Optionally, encrypt the
 * extracts if the site and workbook using them are configured to allow it.
 */
export function createExtractsForWorkbook(workbookId, datasources, queryOptions, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}/createExtract`)
            .withQueryParameters(queryOptions)
            .withBodyParameters(datasources)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Extract encryption at rest is a data security feature that allows you to encrypt .hyper
 * extracts while they are stored on Tableau Server. For more information, see Extract
 * Encryption at Rest(Link opens in a new window).
 */
export function decryptExtracts(client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/decrypt-extracts`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Delete the extract of a data source in a site.
 */
export function deleteExtractFromDatasource(datasourceId, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!datasourceId) return Promise.reject(new MissingPathParameterException("datasourceId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/datasources/${datasourceId}/deleteExtract`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes an extract refresh task.
 */
export function deleteExtractRefreshTask(taskId, client) {
    const minVersion = "3.6";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!taskId) return Promise.reject(new MissingPathParameterException("taskId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/tasks/extractRefreshes/${taskId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Delete all extracts of embedded data sources in a workbook.
 */
export function deleteExtractsFromWorkbook(workbookId, datasources, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}/deleteExtract`)
            .withBodyParameters(datasources)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Extract encryption at rest is a data security feature that allows you to encrypt .hyper
 * extracts while they are stored on Tableau Server. For more information, see Extract
 * Encryption at Rest(Link opens in a new window).
 */
export function encryptExtracts(client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/encrypt-extracts`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Extract encryption at rest is a data security feature that allows you to encrypt .hyper
 * extracts while they are stored on Tableau Server. For more information, see Extract
 * Encryption at Rest(Link opens in a new window).
 */
export function reencryptExtracts(client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/reencrypt-extracts`)
            .withAuthenticationToken(token)
            .build()
    );
}
