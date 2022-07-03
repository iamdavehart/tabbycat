/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { Paginated } from "tabbycat/types";
import { PermissionsType } from "tabbycat/types";
import { DataQualityWarningType } from "tabbycat/types";
import { ContentListType } from "tabbycat/types";
import { DataQualityTriggerType } from "tabbycat/types";
import { TagListType } from "tabbycat/types";
import { TagBatchType } from "tabbycat/types";
import { DatabaseAnchorRequestType } from "tabbycat/types";
import { ColumnType } from "tabbycat/types";
import { DatabaseType } from "tabbycat/types";
import { TableType } from "tabbycat/types";
import { DataQualityIndicatorListType } from "tabbycat/types";
import { DataQualityTriggerListType } from "tabbycat/types";
import { DataQualityWarningListType } from "tabbycat/types";
import { DatabaseAnchorResponseListType } from "tabbycat/types";
import { ColumnListType } from "tabbycat/types";
import { DatabaseListType } from "tabbycat/types";
import { DataQualityIndicatorType } from "tabbycat/types";
import { TableListType } from "tabbycat/types";

/**
 * Add permissions to a database asset. To add permissions, the database asset must be
 * associated with a published data source.
 * @param {string} databaseId The unique ID of the database asset.
 * @param {PermissionsType} permissions permissions
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function addDatabasePermissions(databaseId: string, permissions: PermissionsType, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Applying default permissions to a database functions as a permissions template for the
 * database's children table assets. How default permissions are enforced depends on whether
 * the database is locked or unlocked.
 * @param {string} databaseId The unique ID of the database asset to set default
 * 		permissions for.
 * @param {PermissionsType} permissions permissions
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function addDatabasePermsDefault(databaseId: string, permissions: PermissionsType, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Create and apply a data quality warning to a database, table, published data source,
 * flow, virtual connection, or virtual connection table.
 * @param {string} contentType The type of asset that the data quality warning is being
 * 		attached to. To specify the type, use: databasetabledatasourceflowvirtual
 * 		connectionvirtual connection tableThese values are not case sensitive.
 * @param {string} contentLuid The unique ID of the asset (database, table, published
 * 		data source, flow, virtual connection, or virtual connection table). This is the same as
 * 		the content ID.
 * @param {DataQualityWarningType} dataQualityWarning dataQualityWarning
 * @returns {Promise<DataQualityWarningType>} Promise | undefined
 */
export function addDataQualityWarning(contentType: string, contentLuid: string, dataQualityWarning: DataQualityWarningType, client?: ClientLite) : Promise<DataQualityWarningType>;

/**
 * Create or update one or more data quality certifications for different content and asset
 * items.
 * @param {ContentListType} contentList contentList
 * @returns {Promise<DataQualityIndicatorListType>} Promise | undefined
 */
export function addDataQualityWarningCertification(contentList: ContentListType, client?: ClientLite) : Promise<DataQualityIndicatorListType>;

/**
 * Create or update one or more quality warning triggers to monitor and display alerts for
 * the following events: refresh failures on extract data sources and flow run failures on
 * flows.
 * @param {string} contentType The type of content the quality warning trigger is being
 * 		applied to. Use one of the following values: datasource flow These values are not case
 * 		sensitive.
 * @param {DataQualityTriggerType} dataQualityTrigger dataQualityTrigger
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.contentLuid The unique ID of the asset. This is the same
 * 		as the content ID.
 * @returns {Promise<DataQualityTriggerListType>} Promise | undefined
 */
export function addDataQualityWarningTrigger(contentType: string, dataQualityTrigger: DataQualityTriggerType, queryOptions?: { : string }, client?: ClientLite) : Promise<DataQualityTriggerListType>;

/**
 * Add permissions to a table asset.
 * @param {string} tableId The unique ID of the table asset.
 * @param {PermissionsType} permissions permissions
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function addTablePermissions(tableId: string, permissions: PermissionsType, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Add one or more tags to a column.
 * @param {string} columnId The unique ID of the column asset.
 * @param {TagListType} tags tags
 * @returns {Promise<TagListType>} Promise | undefined
 */
export function addTagsColumn(columnId: string, tags: TagListType, client?: ClientLite) : Promise<TagListType>;

/**
 * Add one or more tags to a database.
 * @param {string} databaseId The unique ID of the database asset.
 * @param {TagListType} tags tags
 * @returns {Promise<TagListType>} Promise | undefined
 */
export function addTagsDatabase(databaseId: string, tags: TagListType, client?: ClientLite) : Promise<TagListType>;

/**
 * Add one or more tags to a table.
 * @param {string} tableId The unique ID of the column asset.
 * @param {TagListType} tags tags
 * @returns {Promise<TagListType>} Promise | undefined
 */
export function addTagsTable(tableId: string, tags: TagListType, client?: ClientLite) : Promise<TagListType>;

/**
 * Add or update multiple data quality warnings (DQWs) for different content and asset
 * items.
 * @param {ContentListType} contentList contentList
 * @returns {Promise<DataQualityWarningListType>} Promise | undefined
 */
export function batchAddDataQualityWarnings(contentList: ContentListType, client?: ClientLite) : Promise<DataQualityWarningListType>;

/**
 * Add multiple tags to items that are different content and asset types.
 * @param {TagBatchType} tagBatch tagBatch
 * @returns {Promise<TagBatchType>} Promise | undefined
 */
export function batchAddTags(tagBatch: TagBatchType, client?: ClientLite) : Promise<TagBatchType>;

/**
 * Permanently remove multiple data quality warning (DQW) items from different content and
 * asset types.
 * @param {ContentListType} contentList contentList
 * @returns {Promise<any>} Promise | undefined
 */
export function batchDeleteDataQualityWarnings(contentList: ContentListType, client?: ClientLite) : Promise<any>;

/**
 * Delete multiple tags from items that are different content and asset types.
 * @param {TagBatchType} tagBatch tagBatch
 * @returns {Promise<TagBatchType>} Promise | undefined
 */
export function batchDeleteTags(tagBatch: TagBatchType, client?: ClientLite) : Promise<TagBatchType>;

/**
 * Permanently remove the permissions applied to a database asset.
 * @param {string} databaseId The unique ID of the database asset.
 * @param {string} groupId The unique ID of the group to remove the permissions for.
 * @param {string} capabilityName The explicit permissions capability to remove.
 * 		Capabilities that can be removed are Read, Write, or ChangePermissions.
 * @param {string} capabilityMode The permissions mode to remove. Modes that can be
 * 		removed are Allow or Deny.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDatabasePermissionsForGroup(databaseId: string, groupId: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove the permissions applied to a database asset.
 * @param {string} databaseId The unique ID of the database asset.
 * @param {string} userId The unique ID of the user to remove the permissions for.
 * @param {string} capabilityName The explicit permissions capability to remove.
 * 		Capabilities that can be removed are Read, Write, or ChangePermissions.
 * @param {string} capabilityMode The permissions mode to remove. Modes that can be
 * 		removed are Allow or Deny.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDatabasePermissionsForUser(databaseId: string, userId: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove a data quality warning.
 * @param {string} dataqualitywarningId The unique ID of the data quality warning.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDataQualityWarning(dataqualitywarningId: string, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove a data quality certification from a content or asset item using the
 * data quality certification ID.
 * @param {string} certificationLuid The unique ID of the data quality certification.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDataQualityWarningCertification(certificationLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove all data quality certifications from multiple content or asset items.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDataQualityWarningCertifications(client?: ClientLite) : Promise<any>;

/**
 * Permanently remove the data quality warning from the database, table, published data
 * source, flow, virtual connection, or virtual connection table.
 * @param {string} contentType The type of asset that the data quality warning is being
 * 		attached to. To specify the type, use: database table datasource flow virtualconnection
 * 		virtualconnectiontable Types are not case sensitive.
 * @param {string} contentLuid The LUID of the content (database, table, published data
 * 		source, flow, virtual connection, or virtual connection table).
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDataQualityWarnings(contentType: string, contentLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove a quality warning trigger using the quality warning trigger ID.
 * @param {string} triggerId The unique ID of the quality warning trigger.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDataQualityWarningTrigger(triggerId: string, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove all quality warning triggers for one or more data sources or flows, or
 * both.
 * @param {string} contentType The type of content the quality warning trigger has been
 * 		applied to. In this case, use one of the following values: datasource flow These values
 * 		are not case sensitive.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.contentLuid The unique ID of the asset. This is the same
 * 		as the content ID.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDataQualityWarningTriggers(contentType: string, queryOptions?: { : string }, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove the default permissions on a database asset.
 * @param {string} databaseId The unique ID of the database asset.
 * @param {string} groupId The ID of the group to remove the default permission for.
 * @param {string} capabilityName The capability to remove the permissions for. Valid
 * 		capabilities for databases are the following: Read (view) Write (edit) ChangePermissions
 * 		(manage permissions) For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDefaultDatabasePermissionsForGroup(databaseId: string, groupId: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove the default permissions on a database asset.
 * @param {string} databaseId The unique ID of the database asset.
 * @param {string} userId The ID of the user to remove the default permission for.
 * @param {string} capabilityName The capability to remove the permissions for. Valid
 * 		capabilities for databases are the following: Read (view) Write (edit) ChangePermissions
 * 		(manage permissions) For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDefaultDatabasePermissionsForUser(databaseId: string, userId: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove the permissions applied to a table asset.
 * @param {string} tableId The unique ID of the table asset.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteTablePerms(tableId: string, client?: ClientLite) : Promise<any>;

/**
 * Delete a tag from a column.
 * @param {string} columnId The unique ID of the column asset.
 * @param {string} tagName The keyword text of the tag.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteTagsDatabase(columnId: string, tagName: string, client?: ClientLite) : Promise<any>;

/**
 * Delete a tag from a column.
 * @param {string} columnId The unique ID of the column asset.
 * @param {string} tagName The keyword text of the tag.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteTagsDatabase(columnId: string, tagName: string, client?: ClientLite) : Promise<any>;

/**
 * Delete a tag from a column.
 * @param {string} columnId The unique ID of the column asset.
 * @param {string} tagName The keyword text of the tag.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteTagsDatabase(columnId: string, tagName: string, client?: ClientLite) : Promise<any>;

/**
 * Query databases and tables from the connection information in the data source (.tds or
 * .tdsx) or workbook (.tws or .twbx) file's XML.
 * @param {DatabaseAnchorRequestType} databaseAnchor databaseAnchor
 * @returns {Promise<DatabaseAnchorResponseListType>} Promise | undefined
 */
export function getDatabasesAndTablesFromConnection(databaseAnchor: DatabaseAnchorRequestType, client?: ClientLite) : Promise<DatabaseAnchorResponseListType>;

/**
 * Get information about a column in a table asset.
 * @param {string} tableId The unique ID of the table asset.
 * @param {string} columnId The unique ID of the column asset.
 * @returns {Promise<ColumnType>} Promise | undefined
 */
export function queryColumn(tableId: string, columnId: string, client?: ClientLite) : Promise<ColumnType>;

/**
 * Get information about the columns in a table asset.
 * @param {string} tableId The unique ID of the table asset.
 * @returns {Promise<ColumnListType>} Promise | undefined
 */
export function queryColumns(tableId: string, client?: ClientLite) : Promise<ColumnListType>;

/**
 * Get information about a database asset.
 * @param {string} databaseId The unique ID of the database asset.
 * @returns {Promise<DatabaseType>} Promise | undefined
 */
export function queryDatabase(databaseId: string, client?: ClientLite) : Promise<DatabaseType>;

/**
 * Get information about the permissions on a database asset.
 * @param {string} databaseId The unique ID of the database asset.
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function queryDatabasePerms(databaseId: string, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Get the default permissions applied to the database asset and its children tables.
 * @param {string} databaseId The unique ID of the database asset to set default
 * 		permissions for.
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function queryDatabasePermsDefault(databaseId: string, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Get information about all database assets for a site.
 * @returns {Promise<Paginated<DatabaseListType>>} Promise | undefined
 */
export function queryDatabases(client?: ClientLite) : Promise<Paginated<DatabaseListType>>;

/**
 * Get information about a specific data quality warning.
 * @param {string} dataqualitywarningId The unique ID of the data quality warning.
 * @returns {Promise<DataQualityWarningType>} Promise | undefined
 */
export function queryDataQualityWarning(dataqualitywarningId: string, client?: ClientLite) : Promise<DataQualityWarningType>;

/**
 * Get information about a data quality certification.
 * @param {string} certificationLuid The unique ID of the data quality certification.
 * @returns {Promise<DataQualityIndicatorType>} Promise | undefined
 */
export function queryDataQualityWarningCertification(certificationLuid: string, client?: ClientLite) : Promise<DataQualityIndicatorType>;

/**
 * Get all data quality certifications for content or asset items.
 * @param {string} contentType The type of content the data quality certification has
 * 		been applied to. To specify the type, use one of the following values: database table
 * 		datasource virtualconnection virtualconnectiontable These values are not case sensitive.
 * @param {string} contentLuid The LUID of the content (database, table, published data
 * 		source, flow, virtual connection, or virtual connection table).
 * @returns {Promise<DataQualityIndicatorType>} Promise | undefined
 */
export function queryDataQualityWarningCertifications(contentType: string, contentLuid: string, client?: ClientLite) : Promise<DataQualityIndicatorType>;

/**
 * Get information about the data quality warning for the database, table, published data
 * source, flow, virtual connection, or virtual connection table.
 * @param {string} contentType The type of asset that the data quality warning is being
 * 		attached to. To specify the type, use one of the following values:
 * 		databasetabledatasourceflowvirtualconnectionvirtualconnectiontableThese values are not
 * 		case sensitive.
 * @param {string} contentLuid The LUID of the content (database, table, published data
 * 		source, flow, virtual connection, or virtual connection table).
 * @returns {Promise<DataQualityWarningListType>} Promise | undefined
 */
export function queryDataQualityWarnings(contentType: string, contentLuid: string, client?: ClientLite) : Promise<DataQualityWarningListType>;

/**
 * Get information about all quality warning triggers for a content item.
 * @param {string} contentType The type of content that the quality warning trigger has
 * 		been applied to. To specify the type, use one of the following values: datasource flow
 * 		These values are not case sensitive.
 * @param {string} contentLuid The unique ID of the asset. This is the same as the
 * 		content ID.
 * @returns {Promise<DataQualityTriggerListType>} Promise | undefined
 */
export function queryDataQualityWarningTriggers(contentType: string, contentLuid: string, client?: ClientLite) : Promise<DataQualityTriggerListType>;

/**
 * Get information about all quality warning triggers for a content item.
 * @param {string} contentType The type of content that the quality warning trigger has
 * 		been applied to. To specify the type, use one of the following values: datasource flow
 * 		These values are not case sensitive.
 * @param {string} contentLuid The unique ID of the asset. This is the same as the
 * 		content ID.
 * @returns {Promise<DataQualityTriggerListType>} Promise | undefined
 */
export function queryDataQualityWarningTriggers(contentType: string, contentLuid: string, client?: ClientLite) : Promise<DataQualityTriggerListType>;

/**
 * Get information about a table asset.
 * @param {string} tableId The unique ID of the table asset.
 * @returns {Promise<TableType>} Promise | undefined
 */
export function queryTable(tableId: string, client?: ClientLite) : Promise<TableType>;

/**
 * Get information about the permissions on a table asset.
 * @param {string} tableId The unique ID of the table asset.
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function queryTablePermissions(tableId: string, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Get information about all table assets for a site.
 * @returns {Promise<TableListType>} Promise | undefined
 */
export function queryTables(client?: ClientLite) : Promise<TableListType>;

/**
 * Permanently remove the column from a table asset.
 * @param {string} tableId The unique ID of the table asset.
 * @param {string} columnId The unique ID of the column asset.
 * @returns {Promise<any>} Promise | undefined
 */
export function removeColumn(tableId: string, columnId: string, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove the database asset.
 * @param {string} databaseId The unique ID of the database asset.
 * @returns {Promise<any>} Promise | undefined
 */
export function removeDatabase(databaseId: string, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove the table asset.
 * @param {string} tableId The unique ID of the table asset.
 * @returns {Promise<any>} Promise | undefined
 */
export function removeTable(tableId: string, client?: ClientLite) : Promise<any>;

/**
 * Update the description of the column.
 * @param {string} tableId The unique ID of the table asset.
 * @param {string} columnId The unique ID of the column asset.
 * @param {ColumnType} column column
 * @returns {Promise<ColumnType>} Promise | undefined
 */
export function updateColumn(tableId: string, columnId: string, column: ColumnType, client?: ClientLite) : Promise<ColumnType>;

/**
 * Update the database description, certify a database, or assign a contact (must be a
 * Tableau Server or Tableau Online user) to the database asset.
 * @param {string} databaseId The unique ID of the database asset.
 * @param {DatabaseType} database database
 * @returns {Promise<DatabaseType>} Promise | undefined
 */
export function updateDatabase(databaseId: string, database: DatabaseType, client?: ClientLite) : Promise<DatabaseType>;

/**
 * Update the warning type, status, and message of a data quality warning.
 * @param {string} dataqualitywarningId The unique ID of the data quality warning.
 * @param {DataQualityWarningType} dataQualityWarning dataQualityWarning
 * @returns {Promise<DataQualityWarningType>} Promise | undefined
 */
export function updateDataQualityWarning(dataqualitywarningId: string, dataQualityWarning: DataQualityWarningType, client?: ClientLite) : Promise<DataQualityWarningType>;

/**
 * Update a quality warning trigger.
 * @param {string} triggerId The unique ID of the quality warning trigger.
 * @param {DataQualityTriggerType} dataQualityTrigger dataQualityTrigger
 * @returns {Promise<DataQualityTriggerListType>} Promise | undefined
 */
export function updateDataQualityWarningTrigger(triggerId: string, dataQualityTrigger: DataQualityTriggerType, client?: ClientLite) : Promise<DataQualityTriggerListType>;

/**
 * Update the table description, certify a table, or a assign a user contact to the table
 * asset.
 * @param {string} tableId The unique ID of the table asset.
 * @param {TableType} table table
 * @returns {Promise<TableType>} Promise | undefined
 */
export function updateTable(tableId: string, table: TableType, client?: ClientLite) : Promise<TableType>;
