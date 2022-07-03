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
 * Add permissions to a database asset. To add permissions, the database asset must be
 * associated with a published data source.
 */
export function addDatabasePermissions(databaseId, permissions, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!databaseId) return Promise.reject(new MissingPathParameterException("databaseId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/databases/${databaseId}/permissions`)
            .withBodyParameters(permissions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Applying default permissions to a database functions as a permissions template for the
 * database's children table assets. How default permissions are enforced depends on whether
 * the database is locked or unlocked.
 */
export function addDatabasePermsDefault(databaseId, permissions, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!databaseId) return Promise.reject(new MissingPathParameterException("databaseId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/databases/${databaseId}/default-permissions/tables`)
            .withBodyParameters(permissions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Create and apply a data quality warning to a database, table, published data source,
 * flow, virtual connection, or virtual connection table.
 */
export function addDataQualityWarning(contentType, contentLuid, dataQualityWarning, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!contentType) return Promise.reject(new MissingPathParameterException("contentType"));
	if (!contentLuid) return Promise.reject(new MissingPathParameterException("contentLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/dataQualityWarnings/${contentType}/${contentLuid}`)
            .withBodyParameters(dataQualityWarning)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Create or update one or more data quality certifications for different content and asset
 * items.
 */
export function addDataQualityWarningCertification(contentList, client) {
    const minVersion = "3.13";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/dataQualityCertifications`)
            .withBodyParameters(contentList)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Create or update one or more quality warning triggers to monitor and display alerts for
 * the following events: refresh failures on extract data sources and flow run failures on
 * flows.
 */
export function addDataQualityWarningTrigger(contentType, dataQualityTrigger, queryOptions, client) {
    const minVersion = "3.11";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!contentType) return Promise.reject(new MissingPathParameterException("contentType"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/dataQualityTriggers/${contentType}/contentIds`)
            .withQueryParameters(queryOptions)
            .withBodyParameters(dataQualityTrigger)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Add permissions to a table asset.
 */
export function addTablePermissions(tableId, permissions, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!tableId) return Promise.reject(new MissingPathParameterException("tableId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/tables/${tableId}/permissions`)
            .withBodyParameters(permissions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Add one or more tags to a column.
 */
export function addTagsColumn(columnId, tags, client) {
    const minVersion = "3.9";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!columnId) return Promise.reject(new MissingPathParameterException("columnId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/columns/${columnId}/tags`)
            .withBodyParameters(tags)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Add one or more tags to a database.
 */
export function addTagsDatabase(databaseId, tags, client) {
    const minVersion = "3.9";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!databaseId) return Promise.reject(new MissingPathParameterException("databaseId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/databases/${databaseId}/tags`)
            .withBodyParameters(tags)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Add one or more tags to a table.
 */
export function addTagsTable(tableId, tags, client) {
    const minVersion = "3.9";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!tableId) return Promise.reject(new MissingPathParameterException("tableId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/tables/${tableId}/tags`)
            .withBodyParameters(tags)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Add or update multiple data quality warnings (DQWs) for different content and asset
 * items.
 */
export function batchAddDataQualityWarnings(contentList, client) {
    const minVersion = "3.12";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/dataQualityWarnings/createOrUpdate`)
            .withBodyParameters(contentList)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Add multiple tags to items that are different content and asset types.
 */
export function batchAddTags(tagBatch, client) {
    const minVersion = "3.9";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/tags:batchCreate`)
            .withBodyParameters(tagBatch)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Permanently remove multiple data quality warning (DQW) items from different content and
 * asset types.
 */
export function batchDeleteDataQualityWarnings(contentList, client) {
    const minVersion = "3.12";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/dataQualityWarnings/batchDelete`)
            .withBodyParameters(contentList)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Delete multiple tags from items that are different content and asset types.
 */
export function batchDeleteTags(tagBatch, client) {
    const minVersion = "3.9";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/tags:BatchDelete`)
            .withBodyParameters(tagBatch)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Permanently remove the permissions applied to a database asset.
 */
export function deleteDatabasePermissionsForGroup(databaseId, groupId, capabilityName, capabilityMode, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!databaseId) return Promise.reject(new MissingPathParameterException("databaseId"));
	if (!groupId) return Promise.reject(new MissingPathParameterException("groupId"));
	if (!capabilityName) return Promise.reject(new MissingPathParameterException("capabilityName"));
	if (!capabilityMode) return Promise.reject(new MissingPathParameterException("capabilityMode"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/databases/${databaseId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Permanently remove the permissions applied to a database asset.
 */
export function deleteDatabasePermissionsForUser(databaseId, userId, capabilityName, capabilityMode, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!databaseId) return Promise.reject(new MissingPathParameterException("databaseId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));
	if (!capabilityName) return Promise.reject(new MissingPathParameterException("capabilityName"));
	if (!capabilityMode) return Promise.reject(new MissingPathParameterException("capabilityMode"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/databases/${databaseId}/permissions/users/${userId}/${capabilityName}/${capabilityMode}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Permanently remove a data quality warning.
 */
export function deleteDataQualityWarning(dataqualitywarningId, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!dataqualitywarningId) return Promise.reject(new MissingPathParameterException("dataqualitywarningId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/dataQualityWarnings/${dataqualitywarningId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Permanently remove a data quality certification from a content or asset item using the
 * data quality certification ID.
 */
export function deleteDataQualityWarningCertification(certificationLuid, client) {
    const minVersion = "3.13";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!certificationLuid) return Promise.reject(new MissingPathParameterException("certificationLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/dataQualityCertifications/${certificationLuid}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Permanently remove all data quality certifications from multiple content or asset items.
 */
export function deleteDataQualityWarningCertifications(client) {
    const minVersion = "3.13";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/dataQualityCertifications`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Permanently remove the data quality warning from the database, table, published data
 * source, flow, virtual connection, or virtual connection table.
 */
export function deleteDataQualityWarnings(contentType, contentLuid, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!contentType) return Promise.reject(new MissingPathParameterException("contentType"));
	if (!contentLuid) return Promise.reject(new MissingPathParameterException("contentLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/dataQualityWarnings/${contentType}/${contentLuid}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Permanently remove a quality warning trigger using the quality warning trigger ID.
 */
export function deleteDataQualityWarningTrigger(triggerId, client) {
    const minVersion = "3.11";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!triggerId) return Promise.reject(new MissingPathParameterException("triggerId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/dataQualityTriggers/${triggerId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Permanently remove all quality warning triggers for one or more data sources or flows, or
 * both.
 */
export function deleteDataQualityWarningTriggers(contentType, queryOptions, client) {
    const minVersion = "3.10";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!contentType) return Promise.reject(new MissingPathParameterException("contentType"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/dataQualityTriggers/${contentType}/contentIds`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Permanently remove the default permissions on a database asset.
 */
export function deleteDefaultDatabasePermissionsForGroup(databaseId, groupId, capabilityName, capabilityMode, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!databaseId) return Promise.reject(new MissingPathParameterException("databaseId"));
	if (!groupId) return Promise.reject(new MissingPathParameterException("groupId"));
	if (!capabilityName) return Promise.reject(new MissingPathParameterException("capabilityName"));
	if (!capabilityMode) return Promise.reject(new MissingPathParameterException("capabilityMode"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/databases/${databaseId}/default-permissions/tables/groups/${groupId}/${capabilityName}/${capabilityMode}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Permanently remove the default permissions on a database asset.
 */
export function deleteDefaultDatabasePermissionsForUser(databaseId, userId, capabilityName, capabilityMode, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!databaseId) return Promise.reject(new MissingPathParameterException("databaseId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));
	if (!capabilityName) return Promise.reject(new MissingPathParameterException("capabilityName"));
	if (!capabilityMode) return Promise.reject(new MissingPathParameterException("capabilityMode"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/databases/${databaseId}/default-permissions/tables/users/${userId}/${capabilityName}/${capabilityMode}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Permanently remove the permissions applied to a table asset.
 */
export function deleteTablePerms(tableId, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!tableId) return Promise.reject(new MissingPathParameterException("tableId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/table/${tableId}/permissions`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Delete a tag from a column.
 */
export function deleteTagsDatabase(columnId, tagName, client) {
    const minVersion = "3.9";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!columnId) return Promise.reject(new MissingPathParameterException("columnId"));
	if (!tagName) return Promise.reject(new MissingPathParameterException("tagName"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/columns/${columnId}/tags/${tagName}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Delete a tag from a column.
 */
export function deleteTagsDatabase(columnId, tagName, client) {
    const minVersion = "3.9";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!columnId) return Promise.reject(new MissingPathParameterException("columnId"));
	if (!tagName) return Promise.reject(new MissingPathParameterException("tagName"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/columns/${columnId}/tags/${tagName}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Delete a tag from a column.
 */
export function deleteTagsDatabase(columnId, tagName, client) {
    const minVersion = "3.9";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!columnId) return Promise.reject(new MissingPathParameterException("columnId"));
	if (!tagName) return Promise.reject(new MissingPathParameterException("tagName"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/columns/${columnId}/tags/${tagName}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Query databases and tables from the connection information in the data source (.tds or
 * .tdsx) or workbook (.tws or .twbx) file's XML.
 */
export function getDatabasesAndTablesFromConnection(databaseAnchor, client) {
    const minVersion = "3.13";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/databaseAndTables/lookup`)
            .withBodyParameters(databaseAnchor)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Get information about a column in a table asset.
 */
export function queryColumn(tableId, columnId, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!tableId) return Promise.reject(new MissingPathParameterException("tableId"));
	if (!columnId) return Promise.reject(new MissingPathParameterException("columnId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/tables/${tableId}/columns/${columnId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Get information about the columns in a table asset.
 */
export function queryColumns(tableId, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!tableId) return Promise.reject(new MissingPathParameterException("tableId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/tables/${tableId}/columns`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Get information about a database asset.
 */
export function queryDatabase(databaseId, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!databaseId) return Promise.reject(new MissingPathParameterException("databaseId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/databases/${databaseId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Get information about the permissions on a database asset.
 */
export function queryDatabasePerms(databaseId, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!databaseId) return Promise.reject(new MissingPathParameterException("databaseId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/databases/${databaseId}/permissions`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Get the default permissions applied to the database asset and its children tables.
 */
export function queryDatabasePermsDefault(databaseId, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!databaseId) return Promise.reject(new MissingPathParameterException("databaseId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/databases/${databaseId}/default-permissions/tables`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Get information about all database assets for a site.
 */
export function queryDatabases(client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/databases`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Get information about a specific data quality warning.
 */
export function queryDataQualityWarning(dataqualitywarningId, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!dataqualitywarningId) return Promise.reject(new MissingPathParameterException("dataqualitywarningId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/dataQualityWarnings/${dataqualitywarningId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Get information about a data quality certification.
 */
export function queryDataQualityWarningCertification(certificationLuid, client) {
    const minVersion = "3.13";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!certificationLuid) return Promise.reject(new MissingPathParameterException("certificationLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/dataQualityCertification/${certificationLuid}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Get all data quality certifications for content or asset items.
 */
export function queryDataQualityWarningCertifications(contentType, contentLuid, client) {
    const minVersion = "3.13";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!contentType) return Promise.reject(new MissingPathParameterException("contentType"));
	if (!contentLuid) return Promise.reject(new MissingPathParameterException("contentLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/dataQualityCertifications/${contentType}/${contentLuid}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Get information about the data quality warning for the database, table, published data
 * source, flow, virtual connection, or virtual connection table.
 */
export function queryDataQualityWarnings(contentType, contentLuid, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!contentType) return Promise.reject(new MissingPathParameterException("contentType"));
	if (!contentLuid) return Promise.reject(new MissingPathParameterException("contentLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/dataQualityWarnings/${contentType}/${contentLuid}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Get information about all quality warning triggers for a content item.
 */
export function queryDataQualityWarningTriggers(contentType, contentLuid, client) {
    const minVersion = "3.11";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!contentType) return Promise.reject(new MissingPathParameterException("contentType"));
	if (!contentLuid) return Promise.reject(new MissingPathParameterException("contentLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/dataQualityTriggers/${contentType}/${contentLuid}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Get information about all quality warning triggers for a content item.
 */
export function queryDataQualityWarningTriggers(contentType, contentLuid, client) {
    const minVersion = "3.11";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!contentType) return Promise.reject(new MissingPathParameterException("contentType"));
	if (!contentLuid) return Promise.reject(new MissingPathParameterException("contentLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/dataQualityTriggers/${contentType}/${contentLuid}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Get information about a table asset.
 */
export function queryTable(tableId, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!tableId) return Promise.reject(new MissingPathParameterException("tableId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/tables/${tableId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Get information about the permissions on a table asset.
 */
export function queryTablePermissions(tableId, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!tableId) return Promise.reject(new MissingPathParameterException("tableId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/tables/${tableId}/permissions`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Get information about all table assets for a site.
 */
export function queryTables(client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/tables`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Permanently remove the column from a table asset.
 */
export function removeColumn(tableId, columnId, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!tableId) return Promise.reject(new MissingPathParameterException("tableId"));
	if (!columnId) return Promise.reject(new MissingPathParameterException("columnId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/tables/${tableId}/columns/${columnId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Permanently remove the database asset.
 */
export function removeDatabase(databaseId, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!databaseId) return Promise.reject(new MissingPathParameterException("databaseId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/databases/${databaseId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Permanently remove the table asset.
 */
export function removeTable(tableId, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!tableId) return Promise.reject(new MissingPathParameterException("tableId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/tables/${tableId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Update the description of the column.
 */
export function updateColumn(tableId, columnId, column, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!tableId) return Promise.reject(new MissingPathParameterException("tableId"));
	if (!columnId) return Promise.reject(new MissingPathParameterException("columnId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/tables/${tableId}/columns/${columnId}`)
            .withBodyParameters(column)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Update the database description, certify a database, or assign a contact (must be a
 * Tableau Server or Tableau Online user) to the database asset.
 */
export function updateDatabase(databaseId, database, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!databaseId) return Promise.reject(new MissingPathParameterException("databaseId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/databases/${databaseId}`)
            .withBodyParameters(database)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Update the warning type, status, and message of a data quality warning.
 */
export function updateDataQualityWarning(dataqualitywarningId, dataQualityWarning, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!dataqualitywarningId) return Promise.reject(new MissingPathParameterException("dataqualitywarningId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/dataQualityWarnings/${dataqualitywarningId}`)
            .withBodyParameters(dataQualityWarning)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Update a quality warning trigger.
 */
export function updateDataQualityWarningTrigger(triggerId, dataQualityTrigger, client) {
    const minVersion = "3.11";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!triggerId) return Promise.reject(new MissingPathParameterException("triggerId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/dataQualityTriggers/${triggerId}`)
            .withBodyParameters(dataQualityTrigger)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Update the table description, certify a table, or a assign a user contact to the table
 * asset.
 */
export function updateTable(tableId, table, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!tableId) return Promise.reject(new MissingPathParameterException("tableId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/tables/${tableId}`)
            .withBodyParameters(table)
            .withAuthenticationToken(token)
            .build()
    );
}
