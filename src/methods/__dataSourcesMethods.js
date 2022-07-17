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
 * Adds one or more tags to the specified data source.
 */
export function addTagsToDataSource(datasourceId, tags, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!datasourceId) return Promise.reject(new MissingPathParameterException("datasourceId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/datasources/${datasourceId}/tags`)
            .withBodyParameters(tags)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes the specified data source from a site. When a data source is deleted, its
 * associated data connection is also deleted. Workbooks that use the data source are not
 * deleted, but they will no longer work properly.
 */
export function deleteDataSource(datasourceId, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!datasourceId) return Promise.reject(new MissingPathParameterException("datasourceId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/datasources/${datasourceId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes a tag from the specified data source.
 */
export function deleteTagFromDataSource(datasourceId, tagName, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!datasourceId) return Promise.reject(new MissingPathParameterException("datasourceId"));
	if (!tagName) return Promise.reject(new MissingPathParameterException("tagName"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/datasources/${datasourceId}/tags/${tagName}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Downloads a data source in .tdsx format.
 */
export function downloadDataSource(datasourceId, queryOptions, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!datasourceId) return Promise.reject(new MissingPathParameterException("datasourceId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/datasources/${datasourceId}/content`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

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
 * Publishes a data source on the specified site, or appends data to an existing data
 * source. To make other changes to a published data source, call Update Data Source or
 * Update Data Source Connection.
 */
export function publishDataSource(datasource, file, queryOptions, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/datasources`)
            .withHeaders({"Content-Type":"multipart/mixed"})
            .withQueryParameters(queryOptions)
            .withBodyParameters(datasource)
            .withFileParameters({ name: "tableau_datasource", file: file })
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns information about the specified data source.
 */
export function queryDataSource(datasourceId, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!datasourceId) return Promise.reject(new MissingPathParameterException("datasourceId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/datasources/${datasourceId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of data connections for the specified data source.
 */
export function queryDataSourceConnections(datasourceId, client) {
    const minVersion = "2.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!datasourceId) return Promise.reject(new MissingPathParameterException("datasourceId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/datasources/${datasourceId}/connections`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of published data sources on the specified site, with optional parameters
 * for specifying the paging of large results. To get a list of data sources embedded in a
 * workbook, use the Query Workbook Connections method.
 */
export function queryDataSources(queryOptions, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/datasources`)
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
 * Modifies defined portions of published live-to-Hyper data from a specified data source.
 * This method enables you to update your target published Hyper data from a specified
 * connection, where a data source has a multiple connections. For a data source with a
 * single connection, you can use Update Data in Hyper Data Source without specifying the
 * connection-id.
 */
export function updateDataInHyperConnection(datasourceId, connectionId, actions, queryOptions, client) {
    const minVersion = "2021.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!datasourceId) return Promise.reject(new MissingPathParameterException("datasourceId"));
	if (!connectionId) return Promise.reject(new MissingPathParameterException("connectionId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PATCH)
            .withPath(`/api/${version}/sites/${siteId}/datasources/${datasourceId}/connections/${connectionId}data`)
            .withQueryParameters(queryOptions)
            .withBodyParameters(actions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Modifies defined portions of published live-to-Hyper data from a specified data source.
 * This method enables you to update your target published Hyper data, where a data source
 * has a single connection. For a data source with multiple connections use Update Data in
 * Hyper Connection.
 */
export function updateDataInHyperDataSource(datasourceId, actions, queryOptions, client) {
    const minVersion = "2021.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!datasourceId) return Promise.reject(new MissingPathParameterException("datasourceId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PATCH)
            .withPath(`/api/${version}/sites/${siteId}/datasources/${datasourceId}/data`)
            .withQueryParameters(queryOptions)
            .withBodyParameters(actions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Updates the owner, project or certification status of the specified data source.
 */
export function updateDataSource(datasourceId, datasource, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!datasourceId) return Promise.reject(new MissingPathParameterException("datasourceId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/datasources/${datasourceId}`)
            .withBodyParameters(datasource)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Updates the server address, port, username, or password for the specified data source
 * connection.
 */
export function updateDataSourceConnection(datasourceId, connectionId, connection, client) {
    const minVersion = "2.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!datasourceId) return Promise.reject(new MissingPathParameterException("datasourceId"));
	if (!connectionId) return Promise.reject(new MissingPathParameterException("connectionId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/datasources/${datasourceId}/connections/${connectionId}`)
            .withBodyParameters(connection)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Runs an extract refresh on the specified data source.
 */
export function updateDataSourceNow(datasourceId, client) {
    const minVersion = "2.8";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!datasourceId) return Promise.reject(new MissingPathParameterException("datasourceId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/datasources/${datasourceId}/refresh`)
            .withBodyParameters({})
            .withAuthenticationToken(token)
            .build()
    );
}
