/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { ConnectionItem } from "tabbycat/types";
import { ServerSettings } from "tabbycat/types";
import { SiteSettings } from "tabbycat/types";
import { ConnectionMapping } from "tabbycat/types";
import { ConnectionMetadataList } from "tabbycat/types";

/**
 * Adds an analytics extensions connection for an external service to a site. 
 * @param {ConnectionItem} connectionItem ConnectionItem
 * @returns {Promise<ConnectionMetadataList>} Promise | undefined
 */
export function addAnalyticsExtensionsConnection(connectionItem: ConnectionItem, client?: ClientLite) : Promise<ConnectionMetadataList>;

/**
 * Deletes a specific analytics extension connection for an external service from a site. 
 * @param {string} connection_luid 
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteAnalyticsExtensionsConnection(connection_luid: string, client?: ClientLite) : Promise<any>;

/**
 * Remove the currently used analytics extension connection to an external service  from the
 * specified workbook. The connection remains configured, and is available for further usage
 * by the workbook. 
 * @param {string} workbook_luid 
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteConnectionFromWorkbook(workbook_luid: string, client?: ClientLite) : Promise<any>;

/**
 * Get the details of a specified analytics extension connection to an external service. 
 * @param {string} connection_luid 
 * @returns {Promise<ConnectionItem>} Promise | undefined
 */
export function getAnalyticsExtensionsConnection(connection_luid: string, client?: ClientLite) : Promise<ConnectionItem>;

/**
 * Lists a site's analytics extension connections for external services. 
 * @returns {Promise<ConnectionMetadataList>} Promise | undefined
 */
export function getAnalyticsExtensionsConnections(client?: ClientLite) : Promise<ConnectionMetadataList>;

/**
 * Gets the enabled/disabled state of analytics extensions on a server. 
 * @returns {Promise<ConnectionMetadataList>} Promise | undefined
 */
export function getAnalyticsExtensionsServerSettings(client?: ClientLite) : Promise<ConnectionMetadataList>;

/**
 * Gets the enabled/disabled state of analytics extensions on a site. 
 * @returns {Promise<ConnectionMetadataList>} Promise | undefined
 */
export function getAnalyticsExtensionsSiteSettings(client?: ClientLite) : Promise<ConnectionMetadataList>;

/**
 * Lists basic details of each analytics extension connection available for a specified
 * workbook, including connection type and name. 
 * @param {string} workbook_luid 
 * @returns {Promise<ConnectionMetadataList>} Promise | undefined
 */
export function getConnectionOptionsForWorkbook(workbook_luid: string, client?: ClientLite) : Promise<ConnectionMetadataList>;

/**
 * Gets basic details, including connection type and name, of the analytics extension
 * connection to an external service that the specified workbook is currently using. 
 * @param {string} workbook_luid 
 * @returns {Promise<ConnectionMetadataList>} Promise | undefined
 */
export function getSelectedConnectionForWorkbook(workbook_luid: string, client?: ClientLite) : Promise<ConnectionMetadataList>;

/**
 * Updates the details of specified analytics extension connection for an external service
 * to a site. 
 * @param {string} connection_luid 
 * @param {ConnectionItem} connectionItem ConnectionItem
 * @returns {Promise<ConnectionItem>} Promise | undefined
 */
export function updateAnalyticsExtensionsConnection(connection_luid: string, connectionItem: ConnectionItem, client?: ClientLite) : Promise<ConnectionItem>;

/**
 * Enables or disables analytics extensions on a server. 
 * @param {ServerSettings} serverSettings ServerSettings
 * @returns {Promise<ConnectionMetadataList>} Promise | undefined
 */
export function updateAnalyticsExtensionsServerSettings(serverSettings: ServerSettings, client?: ClientLite) : Promise<ConnectionMetadataList>;

/**
 * Enables or disables analytics extensions on a site. 
 * @param {SiteSettings} siteSettings SiteSettings
 * @returns {Promise<ConnectionMetadataList>} Promise | undefined
 */
export function updateAnalyticsExtensionsSiteSettings(siteSettings: SiteSettings, client?: ClientLite) : Promise<ConnectionMetadataList>;

/**
 * Updates the analytics extension connection to external service currently used by a
 * workbook. 
 * @param {string} workbook_luid 
 * @param {ConnectionMapping} connectionMapping ConnectionMapping
 * @returns {Promise<ConnectionMetadataList>} Promise | undefined
 */
export function updateWorkbookWithConnection(workbook_luid: string, connectionMapping: ConnectionMapping, client?: ClientLite) : Promise<ConnectionMetadataList>;
