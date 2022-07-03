/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { Paginated } from "tabbycat/types";
import { RevisionListType } from "tabbycat/types";

/**
 * Downloads a specific version of a data source prior to the current one in .tdsx format.
 * To down load the current version of a data source use the Download Data Source method.
 * @param {string} datasourceId The ID of the data source to download.
 * @param {number} revisionNumber The revision number of the data source to download. To
 * 		determine what versions are available, call Get Data Source Revisions.
 * @returns {Promise<any>} Promise | undefined
 */
export function downloadDataSourceRevision(datasourceId: string, revisionNumber: number, client?: ClientLite) : Promise<any>;

/**
 * Downloads a specific version of a workbook in .twb or .twbx format.
 * @param {string} workbookId The ID of the workbook to download.
 * @param {number} revisionNumber The revision number of the workbook to download. To
 * 		determine what versions are available, call Get Workbook Revisions. Note that the current
 * 		revision of a workbook cannot be accessed by this call; use Download Workbook instead.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.includeExtract (Optional) The extract-value is a Boolean
 * 		value (False or True). When the workbook specified for download has an extract, if you add
 * 		the parameter ?includeExtract=False, the extract is not included when you download the
 * 		workbook. You can use this option to improve performance if you are downloading workbooks
 * 		or data sources that have large extracts.
 * @returns {Promise<any>} Promise | undefined
 */
export function downloadWorkbookRevision(workbookId: string, revisionNumber: number, queryOptions?: { includeExtract: string }, client?: ClientLite) : Promise<any>;

/**
 * Returns a list of revision information (history) for the specified data source.
 * @param {string} datasourceId The ID of the data source to get revisions for.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one
 * 		response. The minimum is 1. The maximum is 1000. The default is 100. For more information,
 * 		see Paginating Results.
 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default
 * 		is 1. For more information, see Paginating Results.
 * @returns {Promise<Paginated<RevisionListType>>} Promise | undefined
 */
export function getDataSourceRevisions(datasourceId: string, queryOptions?: { pageSize: number, pageNumber: number }, client?: ClientLite) : Promise<Paginated<RevisionListType>>;

/**
 * Returns a list of revision information (history) for the specified workbook.
 * @param {string} workbookId The ID of the workbook to get revisions for.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one
 * 		response. The minimum is 1. The maximum is 1000. The default is 100. For more information,
 * 		see Paginating Results.
 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default
 * 		is 1. For more information, see Paginating Results.
 * @returns {Promise<Paginated<RevisionListType>>} Promise | undefined
 */
export function getWorkbookRevisions(workbookId: string, queryOptions?: { pageSize: number, pageNumber: number }, client?: ClientLite) : Promise<Paginated<RevisionListType>>;

/**
 * Removes a specific version of a data source from the specified site.
 * @param {string} datasourceId The ID of the data source to remove the revision for.
 * @param {number} revisionNumber The revision number of the data source to remove. To
 * 		determine what versions are available, call Get Data Source Revisions.
 * @returns {Promise<any>} Promise | undefined
 */
export function removeDataSourceRevision(datasourceId: string, revisionNumber: number, client?: ClientLite) : Promise<any>;

/**
 * Removes a specific version of a workbook from the specified site.
 * @param {string} workbookId The ID of the workbook to remove the revision for.
 * @param {number} revisionNumber The revision number of the workbook to remove. To
 * 		determine what versions are available, call Get Workbook Revisions.
 * @returns {Promise<any>} Promise | undefined
 */
export function removeWorkbookRevision(workbookId: string, revisionNumber: number, client?: ClientLite) : Promise<any>;
