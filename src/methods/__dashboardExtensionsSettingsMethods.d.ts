/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { BlockListItem } from "tabbycat/types";
import { SafeListItem } from "tabbycat/types";
import { ServerSettings } from "tabbycat/types";
import { SiteSettings } from "tabbycat/types";
import { ConnectionMetadataList } from "tabbycat/types";

/**
 * Adds a dashboard extension to the block list of a server.  
 * @param {BlockListItem} blockListItem BlockListItem
 * @returns {Promise<ConnectionMetadataList>} Promise | undefined
 */
export function createDashboardExtensionsBlockListItem(blockListItem: BlockListItem, client?: ClientLite) : Promise<ConnectionMetadataList>;

/**
 * Adds a dashboard extension to the safe list of the site you are  signed into. 
 * @param {SafeListItem} safeListItem SafeListItem
 * @returns {Promise<ConnectionMetadataList>} Promise | undefined
 */
export function createDashboardExtensionsSafeListItem(safeListItem: SafeListItem, client?: ClientLite) : Promise<ConnectionMetadataList>;

/**
 * Deletes a specific extension from the block list of a server. 
 * @param {string} block_list_item_luid 
 * @returns {Promise<ConnectionMetadataList>} Promise | undefined
 */
export function deleteDashboardExtensionsBlockListItem(block_list_item_luid: string, client?: ClientLite) : Promise<ConnectionMetadataList>;

/**
 * Deletes a specific dashboard extension from the safe list of the site you are signed
 * into. 
 * @param {string} safe_list_item_luid 
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDashboardExtensionsSafeListItem(safe_list_item_luid: string, client?: ClientLite) : Promise<any>;

/**
 * Gets the details of a specific dashboard extension on the blocked list of a server. 
 * @param {string} block_list_item_luid 
 * @returns {Promise<ConnectionMetadataList>} Promise | undefined
 */
export function getDashboardExtensionsBlockListItem(block_list_item_luid: string, client?: ClientLite) : Promise<ConnectionMetadataList>;

/**
 * Lists the dashboard extensions on the blocked list of a server. 
 * @returns {Promise<ConnectionMetadataList>} Promise | undefined
 */
export function getDashboardExtensionsBlockListItems(client?: ClientLite) : Promise<ConnectionMetadataList>;

/**
 * Gets the details of a specific dashboard extension on the safe list of the site you are
 * signed into. 
 * @param {string} safe_list_item_luid 
 * @returns {Promise<SafeListItem>} Promise | undefined
 */
export function getDashboardExtensionsSafeListItem(safe_list_item_luid: string, client?: ClientLite) : Promise<SafeListItem>;

/**
 * Lists the dashboard extensions on the safe list of the site you are signed into. 
 * @returns {Promise<ConnectionMetadataList>} Promise | undefined
 */
export function getDashboardExtensionsSafeListItems(client?: ClientLite) : Promise<ConnectionMetadataList>;

/**
 * Lists the dashboard extension settings of a server. 
 * @returns {Promise<ConnectionMetadataList>} Promise | undefined
 */
export function getDashboardExtensionsServerSettings(client?: ClientLite) : Promise<ConnectionMetadataList>;

/**
 * Lists the dashboard extension settings of the site you are signed into. 
 * @returns {Promise<ConnectionMetadataList>} Promise | undefined
 */
export function getDashboardExtensionsSiteSettings(client?: ClientLite) : Promise<ConnectionMetadataList>;

/**
 * Updates the settings of a specific dashboard extension in the safe list of the site you
 * are signed into. 
 * @param {string} safe_list_item_luid 
 * @param {SafeListItem} safeListItem SafeListItem
 * @returns {Promise<SafeListItem>} Promise | undefined
 */
export function updateDashboardExtensionsSafeListItem(safe_list_item_luid: string, safeListItem: SafeListItem, client?: ClientLite) : Promise<SafeListItem>;

/**
 * Updates the settings for dashboard extensions of a server 
 * @param {ServerSettings} serverSettings ServerSettings
 * @returns {Promise<ConnectionMetadataList>} Promise | undefined
 */
export function updateDashboardExtensionsServerSettings(serverSettings: ServerSettings, client?: ClientLite) : Promise<ConnectionMetadataList>;

/**
 * Updates the settings for dashboard extensions for the site you are signed into. 
 * @param {SiteSettings} siteSettings SiteSettings
 * @returns {Promise<any>} Promise | undefined
 */
export function updateDashboardExtensionsSiteSettings(siteSettings: SiteSettings, client?: ClientLite) : Promise<any>;
