/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { DatasourcesRequest } from "tabbycat/types";
import { JobResponse } from "tabbycat/types";

/**
 * Create an extract for a data source in a site. Optionally, encrypt the extract if the
 * site and workbooks using it are configured to allow it.
 * @param {string} datasourceId The LUID of the datasource.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean} queryOptions.encrypt If true, then Tableau will attempt to encrypt
 * 		the created extracts. If false, or no encrypt parameter is appended to the URI, then the
 * 		extract won't be encrypted, unless encryption is enforced by site or workbook
 * 		configuration. An error will be returned when encrypt equals true and encryption is
 * 		disabled in the site or workbook.
 * @returns {Promise<JobResponse>} Promise | undefined
 */
export function createExtractForDatasource(datasourceId: string, queryOptions?: { encrypt: boolean }, client?: ClientLite) : Promise<JobResponse>;

/**
 * Create extracts for all embedded data sources of a workbook. Optionally, encrypt the
 * extracts if the site and workbook using them are configured to allow it.
 * @param {string} workbookId The LUID of the workbook.
 * @param {DatasourcesRequest} datasources datasources
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean} queryOptions.encrypt If true, then Tableau will attempt to encrypt
 * 		the created extracts. If false, or no encrypt parameter is appended to the URI, then the
 * 		extract won't be encrypted, unless encryption is enforced by site or workbook
 * 		configuration. An error will be returned when encrypt equals true and encryption is
 * 		disabled in the site or workbook.
 * @returns {Promise<JobResponse>} Promise | undefined
 */
export function createExtractsForWorkbook(workbookId: string, datasources: DatasourcesRequest, queryOptions?: { encrypt: boolean }, client?: ClientLite) : Promise<JobResponse>;

/**
 * Extract encryption at rest is a data security feature that allows you to encrypt .hyper
 * extracts while they are stored on Tableau Server. For more information, see Extract
 * Encryption at Rest(Link opens in a new window).
 * @returns {Promise<>} Promise | undefined
 */
export function decryptExtracts(client?: ClientLite) : Promise<any>;

/**
 * Delete the extract of a data source in a site.
 * @param {string} datasourceId The LUID of the datasource whose extract is to be
 * 		deleted.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteExtractFromDatasource(datasourceId: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes an extract refresh task.
 * @param {string} taskId The ID of the extract refresh task to remove.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteExtractRefreshTask(taskId: string, client?: ClientLite) : Promise<any>;

/**
 * Delete all extracts of embedded data sources in a workbook.
 * @param {string} workbookId <parameter documentation missing>
 * @param {DatasourcesRequest} datasources datasources
 * @returns {Promise<>} Promise | undefined
 */
export function deleteExtractsFromWorkbook(workbookId: string, datasources: DatasourcesRequest, client?: ClientLite) : Promise<any>;

/**
 * Extract encryption at rest is a data security feature that allows you to encrypt .hyper
 * extracts while they are stored on Tableau Server. For more information, see Extract
 * Encryption at Rest(Link opens in a new window).
 * @returns {Promise<>} Promise | undefined
 */
export function encryptExtracts(client?: ClientLite) : Promise<any>;

/**
 * Extract encryption at rest is a data security feature that allows you to encrypt .hyper
 * extracts while they are stored on Tableau Server. For more information, see Extract
 * Encryption at Rest(Link opens in a new window).
 * @returns {Promise<>} Promise | undefined
 */
export function reencryptExtracts(client?: ClientLite) : Promise<any>;
