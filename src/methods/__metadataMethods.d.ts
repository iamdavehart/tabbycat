/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { PermissionsRequest } from "tabbycat/types";
import { DataQualityWarningRequest } from "tabbycat/types";
import { ContentListRequest } from "tabbycat/types";
import { DataQualityTriggerRequest } from "tabbycat/types";
import { TagsRequest } from "tabbycat/types";
import { TagBatchRequest } from "tabbycat/types";
import { DatabaseAnchorRequest } from "tabbycat/types";
import { ContentLocationRequestRequest } from "tabbycat/types";
import { ColumnRequest } from "tabbycat/types";
import { DatabaseRequest } from "tabbycat/types";
import { LabelRequest } from "tabbycat/types";
import { TableRequest } from "tabbycat/types";
import { PermissionsResponse } from "tabbycat/types";
import { DataQualityWarningResponse } from "tabbycat/types";
import { DataQualityIndicatorListResponse } from "tabbycat/types";
import { DataQualityTriggerListResponse } from "tabbycat/types";
import { TagsResponse } from "tabbycat/types";
import { DataQualityWarningListResponse } from "tabbycat/types";
import { TagBatchResponse } from "tabbycat/types";
import { DatabaseAnchorsResponse } from "tabbycat/types";
import { LabelResponse } from "tabbycat/types";
import { LabelListResponse } from "tabbycat/types";
import { ColumnResponse } from "tabbycat/types";
import { ColumnsResponse } from "tabbycat/types";
import { DatabaseResponse } from "tabbycat/types";
import { DatabasesResponse } from "tabbycat/types";
import { DataQualityIndicatorResponse } from "tabbycat/types";
import { TableResponse } from "tabbycat/types";
import { TablesResponse } from "tabbycat/types";

/**
 * Add permissions to a database asset. To add permissions, the database asset must be
 * associated with a published data source.
 * @param {string} databaseLuid The LUID of the database asset.
 * @param {PermissionsRequest} permissions permissions
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function addDatabasePermissions(databaseLuid: string, permissions: PermissionsRequest, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Adds default permission capabilities to a user or group for table resources in that
 * database. These default permissions function as a permissions template for the database's
 * table assets.
 * @param {string} databaseLuid The LUID of the database asset to set default permissions
 * 		for.
 * @param {PermissionsRequest} permissions permissions
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function addDatabasePermsDefault(databaseLuid: string, permissions: PermissionsRequest, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Create and apply a data quality warning to a database, table, published data source,
 * flow, virtual connection, or virtual connection table.
 * @param {string} contentType The type of asset that the data quality warning is being
 * 		attached to. To specify the type, use: databasetabledatasourceflowvirtual
 * 		connectionvirtual connection tableThese values are not case sensitive.
 * @param {string} contentLuid The unique ID of the asset (database, table, published
 * 		data source, flow, virtual connection, or virtual connection table). This is the same as
 * 		the content ID.
 * @param {DataQualityWarningRequest} dataQualityWarning dataQualityWarning
 * @returns {Promise<DataQualityWarningResponse>} Promise | undefined
 */
export function addDataQualityWarning(contentType: string, contentLuid: string, dataQualityWarning: DataQualityWarningRequest, client?: ClientLite) : Promise<DataQualityWarningResponse>;

/**
 * Create or update one or more data quality certifications for different content and asset
 * items.
 * @param {ContentListRequest} contentList contentList
 * @returns {Promise<DataQualityIndicatorListResponse>} Promise | undefined
 */
export function addDataQualityWarningCertification(contentList: ContentListRequest, client?: ClientLite) : Promise<DataQualityIndicatorListResponse>;

/**
 * Create or update one or more quality warning triggers to monitor and display alerts for
 * the following events: refresh failures on extract data sources and flow run failures on
 * flows.
 * @param {string} contentType The type of content the quality warning trigger is being
 * 		applied to. Use one of the following values: datasource flow These values are not case
 * 		sensitive.
 * @param {DataQualityTriggerRequest} dataQualityTrigger dataQualityTrigger
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.filter <parameter documentation missing>
 * @returns {Promise<DataQualityTriggerListResponse>} Promise | undefined
 */
export function addDataQualityWarningTrigger(contentType: string, dataQualityTrigger: DataQualityTriggerRequest, queryOptions?: { filter: string }, client?: ClientLite) : Promise<DataQualityTriggerListResponse>;

/**
 * Add permissions to a table asset.
 * @param {string} tableLuid The LUID of the table asset.
 * @param {PermissionsRequest} permissions permissions
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function addTablePermissions(tableLuid: string, permissions: PermissionsRequest, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Add one or more tags to a column.
 * @param {string} columnId The unique ID of the column asset.
 * @param {TagsRequest} tags tags
 * @returns {Promise<TagsResponse>} Promise | undefined
 */
export function addTagsColumn(columnId: string, tags: TagsRequest, client?: ClientLite) : Promise<TagsResponse>;

/**
 * Add one or more tags to a database.
 * @param {string} databaseId The unique ID of the database asset.
 * @param {TagsRequest} tags tags
 * @returns {Promise<TagsResponse>} Promise | undefined
 */
export function addTagsDatabase(databaseId: string, tags: TagsRequest, client?: ClientLite) : Promise<TagsResponse>;

/**
 * Add one or more tags to a table.
 * @param {string} tableId The unique ID of the column asset.
 * @param {TagsRequest} tags tags
 * @returns {Promise<TagsResponse>} Promise | undefined
 */
export function addTagsTable(tableId: string, tags: TagsRequest, client?: ClientLite) : Promise<TagsResponse>;

/**
 * Add or update multiple data quality warnings (DQWs) for different content and asset
 * items.
 * @param {ContentListRequest} contentList contentList
 * @returns {Promise<DataQualityWarningListResponse>} Promise | undefined
 */
export function batchAddDataQualityWarnings(contentList: ContentListRequest, client?: ClientLite) : Promise<DataQualityWarningListResponse>;

/**
 * Add multiple tags to items that are different content and asset types.
 * @param {TagBatchRequest} tagBatch tagBatch
 * @returns {Promise<TagBatchResponse>} Promise | undefined
 */
export function batchAddTags(tagBatch: TagBatchRequest, client?: ClientLite) : Promise<TagBatchResponse>;

/**
 * Permanently remove multiple data quality warning (DQW) items from different content and
 * asset types.
 * @param {ContentListRequest} contentList contentList
 * @returns {Promise<>} Promise | undefined
 */
export function batchDeleteDataQualityWarnings(contentList: ContentListRequest, client?: ClientLite) : Promise<any>;

/**
 * Delete multiple tags from items that are different content and asset types.
 * @param {TagBatchRequest} tagBatch tagBatch
 * @returns {Promise<TagBatchResponse>} Promise | undefined
 */
export function batchDeleteTags(tagBatch: TagBatchRequest, client?: ClientLite) : Promise<TagBatchResponse>;

/**
 * Permanently remove the permissions applied to a database asset.
 * @param {string} databaseLuid The LUID of the database asset.
 * @param {string} groupLuid The LUID of the group to remove the permissions for.
 * @param {string} capabilityName The explicit permissions capability to remove.
 * 		Capabilities that can be removed are Read, Write, ChangePermissions, or ChangeHierarchy.
 * @param {string} capabilityMode The permissions mode to remove. Modes that can be
 * 		removed are Allow or Deny.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDatabasePermissionsForGroup(databaseLuid: string, groupLuid: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove the permissions applied to a database asset.
 * @param {string} databaseLuid The LUID of the database asset.
 * @param {string} userLuid The LUID of the user to remove the permissions for.
 * @param {string} capabilityName The explicit permissions capability to remove.
 * 		Capabilities that can be removed are Read, Write, ChangePermissions, or ChangeHierarchy.
 * @param {string} capabilityMode The permissions mode to remove. Modes that can be
 * 		removed are Allow or Deny.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDatabasePermissionsForUser(databaseLuid: string, userLuid: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove a data quality warning.
 * @param {string} dataqualitywarningId The unique ID of the data quality warning.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDataQualityWarning(dataqualitywarningId: string, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove a data quality certification from a content or asset item using the
 * data quality certification ID.
 * @param {string} certificationLuid The unique ID of the data quality certification.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDataQualityWarningCertification(certificationLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove all data quality certifications from multiple content or asset items.
 * @returns {Promise<>} Promise | undefined
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
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDataQualityWarnings(contentType: string, contentLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove a quality warning trigger using the quality warning trigger ID.
 * @param {string} triggerId The unique ID of the quality warning trigger.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDataQualityWarningTrigger(triggerId: string, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove all quality warning triggers for one or more data sources or flows, or
 * both.
 * @param {string} contentType The type of content the quality warning trigger has been
 * 		applied to. In this case, use one of the following values: datasource flow These values
 * 		are not case sensitive.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.filter <parameter documentation missing>
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDataQualityWarningTriggers(contentType: string, queryOptions?: { filter: string }, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove the default permissions on a database asset.
 * @param {string} databaseLuid The LUID of the database asset.
 * @param {string} capabilityName The capability to remove the permissions for. Valid
 * 		capabilities for databases are the following: Read (view) Write (edit) ChangePermissions
 * 		(set permissions) ChangeHierarchy (move) For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission.
 * @param {string} groupLuid The LUID of the group to remove the default permission for
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDefaultDatabasePermissionsForGroup(databaseLuid: string, capabilityName: string, capabilityMode: string, groupLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove the default permissions on a database asset.
 * @param {string} databaseLuid The LUID of the database asset.
 * @param {string} userLuid The LUID of the user to remove the default permission for.
 * @param {string} capabilityName The capability to remove the permissions for. Valid
 * 		capabilities for databases are the following: Read (view) Write (edit) ChangePermissions
 * 		(set permissions) ChangeHierarchy (move) For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDefaultDatabasePermissionsForUser(databaseLuid: string, userLuid: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes a data label by its LUID.
 * @param {string} labelLuid The unique LUID of the label asset.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteLabel(labelLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes the data labels on one or more assets.
 * @param {ContentListRequest} contentList contentList
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.categories (Optional) A comma-separated list of
 * 		categories used to limit the label deletions to only the listed categories. Valid
 * 		categories are warning and certification.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteLabelsOnAssets(contentList: ContentListRequest, queryOptions?: { categories: string }, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove the permissions applied to a table asset.
 * @param {string} tableLuid The LUID of the table asset.
 * @param {string} groupLuid The LUID of the group to remove the permissions for.
 * @param {string} capabilityName The explicit permissions capability to remove.
 * 		Capabilities that can be removed are Read, Write, ChangePermissions, or ChangeHierarchy.
 * @param {string} capabilityMode The permissions mode to remove. Modes that can be
 * 		removed are Allow or Deny.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteTablePermissionsForGroup(tableLuid: string, groupLuid: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove the permissions applied to a table asset.
 * @param {string} tableLuid The LUID of the table asset.
 * @param {string} userLuid The LUID of the user to remove the permissions for.
 * @param {string} capabilityName The explicit permissions capability to remove.
 * 		Capabilities that can be removed are Read, Write, ChangePermissions, or ChangeHierarchy.
 * @param {string} capabilityMode The permissions mode to remove. Modes that can be
 * 		removed are Allow or Deny.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteTablePermissionsForUser(tableLuid: string, userLuid: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Delete a tag from a table.
 * @param {string} tableId The unique ID of the table asset.
 * @param {string} tagName The keyword text of the tag.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteTagsFromColumn(tableId: string, tagName: string, client?: ClientLite) : Promise<any>;

/**
 * Delete a tag from a column.
 * @param {string} columnId The unique ID of the column asset.
 * @param {string} tagName The keyword text of the tag.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteTagsFromDatabase(columnId: string, tagName: string, client?: ClientLite) : Promise<any>;

/**
 * Delete a tag from a database.
 * @param {string} databaseId The unique ID of the database asset.
 * @param {string} tagName The keyword text of the tag.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteTagsFromTable(databaseId: string, tagName: string, client?: ClientLite) : Promise<any>;

/**
 * Query databases and tables from the connection information in the data source (.tds or
 * .tdsx) or workbook (.tws or .twbx) file's XML.
 * @param {DatabaseAnchorRequest} databaseAnchor databaseAnchor
 * @returns {Promise<DatabaseAnchorsResponse>} Promise | undefined
 */
export function getDatabasesAndTablesFromConnection(databaseAnchor: DatabaseAnchorRequest, client?: ClientLite) : Promise<DatabaseAnchorsResponse>;

/**
 * Gets a data label by its LUID.
 * @param {string} labelLuid The unique LUID of the label asset.
 * @returns {Promise<LabelResponse>} Promise | undefined
 */
export function getLabel(labelLuid: string, client?: ClientLite) : Promise<LabelResponse>;

/**
 * Displays information about the data labels on one or more assets.
 * @param {ContentListRequest} contentList contentList
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.categories (Optional) A comma-separated list of
 * 		categories used to limit the labels shown to only the listed categories. Valid categories
 * 		are warning and certification.
 * @returns {Promise<LabelListResponse>} Promise | undefined
 */
export function getLabelsOnAssets(contentList: ContentListRequest, queryOptions?: { categories: string }, client?: ClientLite) : Promise<LabelListResponse>;

/**
 * Move one or more databases to a project. You can move the database and its tables, or
 * move only the database. To move a table independently of its database, use the Move Table
 * method.
 * @param {ContentLocationRequestRequest} contentLocationRequest contentLocationRequest
 * @returns {Promise<>} Promise | undefined
 */
export function moveDatabase(contentLocationRequest: ContentLocationRequestRequest, client?: ClientLite) : Promise<any>;

/**
 * Moves one or more tables to a project.
 * @param {ContentLocationRequestRequest} contentLocationRequest contentLocationRequest
 * @returns {Promise<>} Promise | undefined
 */
export function moveTable(contentLocationRequest: ContentLocationRequestRequest, client?: ClientLite) : Promise<any>;

/**
 * Get information about a column in a table asset.
 * @param {string} tableId The unique ID of the table asset.
 * @param {string} columnId The unique ID of the column asset.
 * @returns {Promise<ColumnResponse>} Promise | undefined
 */
export function queryColumn(tableId: string, columnId: string, client?: ClientLite) : Promise<ColumnResponse>;

/**
 * Get information about the columns in a table asset.
 * @param {string} tableId The unique ID of the table asset.
 * @returns {Promise<ColumnsResponse>} Promise | undefined
 */
export function queryColumns(tableId: string, client?: ClientLite) : Promise<ColumnsResponse>;

/**
 * Get information about a database asset.
 * @param {string} databaseLuid The LUID of the database asset.
 * @returns {Promise<DatabaseResponse>} Promise | undefined
 */
export function queryDatabase(databaseLuid: string, client?: ClientLite) : Promise<DatabaseResponse>;

/**
 * Get information about the permissions on a database asset.
 * @param {string} databaseLuid The LUID of the database asset.
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function queryDatabasePerms(databaseLuid: string, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Get the default permissions applied to the database asset and its children tables.
 * @param {string} databaseLuid The LUID of the database asset to set default permissions
 * 		for.
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function queryDatabasePermsDefault(databaseLuid: string, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Get information about all database assets for a site.
 * @returns {Promise<DatabasesResponse>} Promise | undefined
 */
export function queryDatabases(client?: ClientLite) : Promise<DatabasesResponse>;

/**
 * Get information about a specific data quality warning.
 * @param {string} dataqualitywarningId The unique ID of the data quality warning.
 * @returns {Promise<DataQualityWarningResponse>} Promise | undefined
 */
export function queryDataQualityWarning(dataqualitywarningId: string, client?: ClientLite) : Promise<DataQualityWarningResponse>;

/**
 * Get information about a data quality certification.
 * @param {string} certificationLuid The unique ID of the data quality certification.
 * @returns {Promise<DataQualityIndicatorResponse>} Promise | undefined
 */
export function queryDataQualityWarningCertification(certificationLuid: string, client?: ClientLite) : Promise<DataQualityIndicatorResponse>;

/**
 * Get all data quality certifications for content or asset items.
 * @param {string} contentType The type of content the data quality certification has
 * 		been applied to. To specify the type, use one of the following values: database table
 * 		datasource virtualconnection virtualconnectiontable These values are not case sensitive.
 * @param {string} contentLuid The LUID of the content (database, table, published data
 * 		source, flow, virtual connection, or virtual connection table).
 * @returns {Promise<DataQualityIndicatorResponse>} Promise | undefined
 */
export function queryDataQualityWarningCertifications(contentType: string, contentLuid: string, client?: ClientLite) : Promise<DataQualityIndicatorResponse>;

/**
 * Get information about the data quality warning for the database, table, published data
 * source, flow, virtual connection, or virtual connection table.
 * @param {string} contentType The type of asset that the data quality warning is being
 * 		attached to. To specify the type, use one of the following values:
 * 		databasetabledatasourceflowvirtualconnectionvirtualconnectiontableThese values are not
 * 		case sensitive.
 * @param {string} contentLuid The LUID of the content (database, table, published data
 * 		source, flow, virtual connection, or virtual connection table).
 * @returns {Promise<DataQualityWarningListResponse>} Promise | undefined
 */
export function queryDataQualityWarnings(contentType: string, contentLuid: string, client?: ClientLite) : Promise<DataQualityWarningListResponse>;

/**
 * Get information about all quality warning triggers for a content item.
 * @param {string} contentType The type of content that the quality warning trigger has
 * 		been applied to. To specify the type, use one of the following values: datasource flow
 * 		These values are not case sensitive.
 * @param {string} contentLuid The unique ID of the asset. This is the same as the
 * 		content ID.
 * @returns {Promise<DataQualityTriggerListResponse>} Promise | undefined
 */
export function queryDataQualityWarningTriggers(contentType: string, contentLuid: string, client?: ClientLite) : Promise<DataQualityTriggerListResponse>;

/**
 * Get information about a quality warning trigger.
 * @param {string} triggerId The unique ID of the quality warning trigger.
 * @returns {Promise<DataQualityTriggerListResponse>} Promise | undefined
 */
export function queryQualityWarningTrigger(triggerId: string, client?: ClientLite) : Promise<DataQualityTriggerListResponse>;

/**
 * Get information about a table asset.
 * @param {string} tableId The unique ID of the table asset.
 * @returns {Promise<TableResponse>} Promise | undefined
 */
export function queryTable(tableId: string, client?: ClientLite) : Promise<TableResponse>;

/**
 * Get information about the permissions on a table asset.
 * @param {string} tableId The unique ID of the table asset.
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function queryTablePermissions(tableId: string, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Get information about all table assets for a site.
 * @returns {Promise<TablesResponse>} Promise | undefined
 */
export function queryTables(client?: ClientLite) : Promise<TablesResponse>;

/**
 * Permanently remove the column from a table asset.
 * @param {string} tableId The unique ID of the table asset.
 * @param {string} columnId The unique ID of the column asset.
 * @returns {Promise<>} Promise | undefined
 */
export function removeColumn(tableId: string, columnId: string, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove the database asset.
 * @param {string} databaseId The unique ID of the database asset.
 * @returns {Promise<>} Promise | undefined
 */
export function removeDatabase(databaseId: string, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove the table asset.
 * @param {string} tableId The unique ID of the table asset.
 * @returns {Promise<>} Promise | undefined
 */
export function removeTable(tableId: string, client?: ClientLite) : Promise<any>;

/**
 * Update the description of the column.
 * @param {string} tableId The unique ID of the table asset.
 * @param {string} columnId The unique ID of the column asset.
 * @param {ColumnRequest} column column
 * @returns {Promise<ColumnResponse>} Promise | undefined
 */
export function updateColumn(tableId: string, columnId: string, column: ColumnRequest, client?: ClientLite) : Promise<ColumnResponse>;

/**
 * Update the database description, certify a database, set content permissions, or assign a
 * contact (must be a Tableau Server or Tableau Online user) to the database asset.
 * @param {string} databaseLuid The LUID of the database asset.
 * @param {DatabaseRequest} database database
 * @returns {Promise<DatabaseResponse>} Promise | undefined
 */
export function updateDatabase(databaseLuid: string, database: DatabaseRequest, client?: ClientLite) : Promise<DatabaseResponse>;

/**
 * Update the warning type, status, and message of a data quality warning.
 * @param {string} dataqualitywarningId The unique ID of the data quality warning.
 * @param {DataQualityWarningRequest} dataQualityWarning dataQualityWarning
 * @returns {Promise<DataQualityWarningResponse>} Promise | undefined
 */
export function updateDataQualityWarning(dataqualitywarningId: string, dataQualityWarning: DataQualityWarningRequest, client?: ClientLite) : Promise<DataQualityWarningResponse>;

/**
 * Update a quality warning trigger.
 * @param {string} triggerId The unique ID of the quality warning trigger.
 * @param {DataQualityTriggerRequest} dataQualityTrigger dataQualityTrigger
 * @returns {Promise<DataQualityTriggerListResponse>} Promise | undefined
 */
export function updateDataQualityWarningTrigger(triggerId: string, dataQualityTrigger: DataQualityTriggerRequest, client?: ClientLite) : Promise<DataQualityTriggerListResponse>;

/**
 * Updates a label by its LUID. This method can update the label value, message, active
 * flag, and elevated flag.
 * @param {string} labelLuid The unique LUID of the label asset.
 * @param {LabelRequest} label label
 * @returns {Promise<LabelResponse>} Promise | undefined
 */
export function updateLabel(labelLuid: string, label: LabelRequest, client?: ClientLite) : Promise<LabelResponse>;

/**
 * Creates or updates labels on one or more assets. (An asset can be Tableau content or an
 * external asset.) Each asset listed in the request body is updated to have a label with the
 * specified value, message, active flag, and elevated flag. Assets without an existing label
 * of the corresponding category will have a new label created. Assets that already have a
 * label of the same category will have the label updated.
 * @param {ContentListRequest} contentList contentList
 * @returns {Promise<LabelListResponse>} Promise | undefined
 */
export function updatesLabelsOnAssets(contentList: ContentListRequest, client?: ClientLite) : Promise<LabelListResponse>;

/**
 * Update the table description, certify a table, or a assign a user contact to the table
 * asset.
 * @param {string} tableId The unique ID of the table asset.
 * @param {TableRequest} table table
 * @returns {Promise<TableResponse>} Promise | undefined
 */
export function updateTable(tableId: string, table: TableRequest, client?: ClientLite) : Promise<TableResponse>;
