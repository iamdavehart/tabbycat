/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { TagsRequest } from "tabbycat/types";
import { DatasourceRequest } from "tabbycat/types";
import { ActionsRequest } from "tabbycat/types";
import { ConnectionRequest } from "tabbycat/types";
import { TagsResponse } from "tabbycat/types";
import { RevisionsResponse } from "tabbycat/types";
import { DatasourceResponse } from "tabbycat/types";
import { ConnectionsResponse } from "tabbycat/types";
import { DatasourcesResponse } from "tabbycat/types";
import { JobResponse } from "tabbycat/types";
import { ConnectionResponse } from "tabbycat/types";

/**
 * Adds one or more tags to the specified data source.
 * @param {string} datasourceId The ID of the data source to add tags to.
 * @param {TagsRequest} tags tags
 * @returns {Promise<TagsResponse>} Promise | undefined
 */
export function addTagsToDataSource(datasourceId: string, tags: TagsRequest, client?: ClientLite) : Promise<TagsResponse>;

/**
 * Deletes the specified data source from a site. When a data source is deleted, its
 * associated data connection is also deleted. Workbooks that use the data source are not
 * deleted, but they will no longer work properly.
 * @param {string} datasourceId The ID of the data source to delete.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDataSource(datasourceId: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes a tag from the specified data source.
 * @param {string} datasourceId The ID of the data source to remove the tag from.
 * @param {string} tagName The name of the tag to remove from the data source.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteTagFromDataSource(datasourceId: string, tagName: string, client?: ClientLite) : Promise<any>;

/**
 * Downloads a data source in .tdsx format.
 * @param {string} datasourceId The ID of the data source to download.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.includeExtract (Optional) The extract-value is a Boolean
 * 		value (False or True). When the data source specified for download has an extract, if you
 * 		add the parameter ?includeExtract=False, the extract is not included when you download the
 * 		data source. You can use this parameter to improve performance if you are downloading
 * 		workbooks or data sources that have large extracts.
 * @returns {Promise<>} Promise | undefined
 */
export function downloadDataSource(datasourceId: string, queryOptions?: { includeExtract: string }, client?: ClientLite) : Promise<any>;

/**
 * Downloads a specific version of a data source prior to the current one in .tdsx format.
 * To down load the current version of a data source use the Download Data Source method.
 * @param {string} datasourceId The ID of the data source to download.
 * @param {number} revisionNumber The revision number of the data source to download. To
 * 		determine what versions are available, call Get Data Source Revisions.
 * @returns {Promise<>} Promise | undefined
 */
export function downloadDataSourceRevision(datasourceId: string, revisionNumber: number, client?: ClientLite) : Promise<any>;

/**
 * Returns a list of revision information (history) for the specified data source.
 * @param {string} datasourceId The ID of the data source to get revisions for.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one
 * 		response. The minimum is 1. The maximum is 1000. The default is 100. For more information,
 * 		see Paginating Results.
 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default
 * 		is 1. For more information, see Paginating Results.
 * @returns {Promise<RevisionsResponse>} Promise | undefined
 */
export function getDataSourceRevisions(datasourceId: string, queryOptions?: { pageSize: number, pageNumber: number }, client?: ClientLite) : Promise<RevisionsResponse>;

/**
 * Publishes a data source on the specified site, or appends data to an existing data
 * source. To make other changes to a published data source, call Update Data Source or
 * Update Data Source Connection.
 * @param {DatasourceRequest} datasource datasource
 * @param {Object} file File Contents
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean} queryOptions.overwrite (Optional) true to overwrite a data source
 * 		that has the same name, or false to fail if the specified data source already exists. The
 * 		default is false. If overwrite-flag is set to true but the data source doesn't already
 * 		exist, the operation succeeds. You can include both the overwrite and append parameters in
 * 		a request, but they cannot both be true.
 * @param {boolean} queryOptions.asJob (Optional) A Boolean value that is used to publish
 * 		data sources asynchronously. If you set this value to false (the default), the publishing
 * 		process runs as a synchronous process. If a data source is very large, the process might
 * 		time out before it finishes. If you set this value to true, the process runs
 * 		asynchronously, and a job will start to perform the publishing process and return the job
 * 		ID. You can check the status of the import job by calling Query Job.
 * @param {boolean} queryOptions.append (Optional) true to append the data being
 * 		published to an existing data source that has the same name. The default is false. If
 * 		append-flag is set to true but the data source doesn't already exist, the operation fails.
 * 		In order to append data to a published data source on Tableau Server, both the source file
 * 		and the published file must be an extract with the file extension .hyper or .tde. The
 * 		schema of the source and the published extract must match. If an extract was stored using
 * 		the multiple tables option, you can't append data to it.You can include both the overwrite
 * 		and append parameters in a request, but they cannot both be true.
 * @param {string} queryOptions.uploadSessionId If you are calling this method to commit
 * 		a file that was uploaded in parts, this value contains the upload session ID that was
 * 		generated by a call to Initiate File Upload. If this value is not included, the server
 * 		assumes that the body of the request contains the file to be published.
 * @param {string} queryOptions.datasourceType hyper, tds, tdsx, or tde the kind of file
 * 		that you are uploading. This value is required if you are calling Publish Data Source in
 * 		order to commit a file that was previously uploaded using Append to File Upload. The value
 * 		is not used if you upload a file in the body of the request.
 * @returns {Promise<DatasourceResponse>} Promise | undefined
 */
export function publishDataSource(datasource: DatasourceRequest, file: Object, queryOptions?: { overwrite: boolean, asJob: boolean, append: boolean, uploadSessionId: string, datasourceType: string }, client?: ClientLite) : Promise<DatasourceResponse>;

/**
 * Returns information about the specified data source.
 * @param {string} datasourceId The ID of the data source to get.
 * @returns {Promise<DatasourceResponse>} Promise | undefined
 */
export function queryDataSource(datasourceId: string, client?: ClientLite) : Promise<DatasourceResponse>;

/**
 * Returns a list of data connections for the specified data source.
 * @param {string} datasourceId The ID of the data source to return connection
 * 		information about.
 * @returns {Promise<ConnectionsResponse>} Promise | undefined
 */
export function queryDataSourceConnections(datasourceId: string, client?: ClientLite) : Promise<ConnectionsResponse>;

/**
 * Returns a list of published data sources on the specified site, with optional parameters
 * for specifying the paging of large results. To get a list of data sources embedded in a
 * workbook, use the Query Workbook Connections method.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one
 * 		response. The minimum is 1. The maximum is 1000. The default is 100. For more information,
 * 		see Paginating Results.
 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default
 * 		is 1. For more information, see Paginating Results.
 * @param {string} queryOptions.filter (Optional) An expression that lets you specify a
 * 		subset of data sources to return. You can filter on predefined fields such as name and
 * 		updatedAt. You can include multiple filter expressions. For more information, see
 * 		Filtering and Sorting.
 * @param {string} queryOptions.sort (Optional) An expression that lets you specify the
 * 		order in which user information is returned. If you do not specify a sort expression, the
 * 		sort order of the information that's returned is undefined. For more information, see
 * 		Filtering and Sorting.
 * @param {string} queryOptions.fields (Optional) An expression that lets you specify the
 * 		set of available fields to return. You can qualify the return values based upon predefined
 * 		keywords such as _all_ or _default_, and you can specify individual fields for the data
 * 		sources or other supported resources. You can include multiple field expressions in a
 * 		request. For more information, see Using Fields in the Rest API.
 * @returns {Promise<DatasourcesResponse>} Promise | undefined
 */
export function queryDataSources(queryOptions?: { pageSize: number, pageNumber: number, filter: string, sort: string, fields: string }, client?: ClientLite) : Promise<DatasourcesResponse>;

/**
 * Removes a specific version of a data source from the specified site.
 * @param {string} datasourceId The ID of the data source to remove the revision for.
 * @param {number} revisionNumber The revision number of the data source to remove. To
 * 		determine what versions are available, call Get Data Source Revisions.
 * @returns {Promise<>} Promise | undefined
 */
export function removeDataSourceRevision(datasourceId: string, revisionNumber: number, client?: ClientLite) : Promise<any>;

/**
 * Modifies defined portions of published live-to-Hyper data from a specified data source.
 * This method enables you to update your target published Hyper data from a specified
 * connection, where a data source has a multiple connections. For a data source with a
 * single connection, you can use Update Data in Hyper Data Source without specifying the
 * connection-id.
 * @param {string} datasourceId The ID of the data source to update.
 * @param {string} connectionId The ID of the connection. To determine what connections
 * 		are available for a data source, call Query Data Source Connections.
 * @param {ActionsRequest} actions actions
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.uploadSessionId The upload session ID. A user-generated
 * 		identifier that is unique to a request. If the server receives more than one request with
 * 		the same ID within 24 hours, all subsequent requests will be treated as duplicates and
 * 		ignored by the server. This can be used to guarantee idempotency of requests.
 * @returns {Promise<JobResponse>} Promise | undefined
 */
export function updateDataInHyperConnection(datasourceId: string, connectionId: string, actions: ActionsRequest, queryOptions?: { uploadSessionId: string }, client?: ClientLite) : Promise<JobResponse>;

/**
 * Modifies defined portions of published live-to-Hyper data from a specified data source.
 * This method enables you to update your target published Hyper data, where a data source
 * has a single connection. For a data source with multiple connections use Update Data in
 * Hyper Connection.
 * @param {string} datasourceId The ID of the data source to update.
 * @param {ActionsRequest} actions actions
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.uploadSessionId The upload session ID. A user-generated
 * 		identifier that is unique to a request. If the server receives more than one request with
 * 		the same ID within 24 hours, all subsequent requests will be treated as duplicates and
 * 		ignored by the server. This can be used to guarantee idempotency of requests.
 * @returns {Promise<JobResponse>} Promise | undefined
 */
export function updateDataInHyperDataSource(datasourceId: string, actions: ActionsRequest, queryOptions?: { uploadSessionId: string }, client?: ClientLite) : Promise<JobResponse>;

/**
 * Updates the owner, project or certification status of the specified data source.
 * @param {string} datasourceId The ID of the data source to update.
 * @param {DatasourceRequest} datasource datasource
 * @returns {Promise<DatasourceResponse>} Promise | undefined
 */
export function updateDataSource(datasourceId: string, datasource: DatasourceRequest, client?: ClientLite) : Promise<DatasourceResponse>;

/**
 * Updates the server address, port, username, or password for the specified data source
 * connection.
 * @param {string} datasourceId The ID of the data source to update.
 * @param {string} connectionId The ID of the connection to update. To determine what
 * 		connections are available for a data source, call Query Data Source Connections.
 * @param {ConnectionRequest} connection connection
 * @returns {Promise<ConnectionResponse>} Promise | undefined
 */
export function updateDataSourceConnection(datasourceId: string, connectionId: string, connection: ConnectionRequest, client?: ClientLite) : Promise<ConnectionResponse>;

/**
 * Runs an extract refresh on the specified data source.
 * @param {string} datasourceId The ID of the data source to refresh.
 * @returns {Promise<JobResponse>} Promise | undefined
 */
export function updateDataSourceNow(datasourceId: string, client?: ClientLite) : Promise<JobResponse>;
