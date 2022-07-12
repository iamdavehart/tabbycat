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
 * Adds permissions to the specified ask data lens for a user or group. You can specify
 * multiple sets of permissions using one request.
 */
export function addAskDataLensPermissions(lensLuid, permissions, client) {
    const minVersion = "";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteLuid) return Promise.reject(new MissingPathParameterException("siteLuid"));
	if (!lensLuid) return Promise.reject(new MissingPathParameterException("lensLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/lenses/${lensLuid}/permissions`)
            .withBodyParameters(permissions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds permissions to the specified data source for a user or group. You can specify
 * multiple sets of permissions using one call.
 */
export function addDataSourcePermissions(datasourceId, permissions, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!datasourceId) return Promise.reject(new MissingPathParameterException("datasourceId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/datasources/${datasourceId}/permissions`)
            .withBodyParameters(permissions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * adds default permission rules for database or table resources in a project for a user or
 * group. After adding default permission rules, new resources of the type you specify that
 * are added to the project will have those permission rules. If permissions are locked to
 * the project(Link opens in a new window), then the same is true for all existing child
 * content of the project. For more information, see Permissions(Link opens in a new window).
 */
export function addDefaultPermissionsForDatabases(projectLuid, permissions, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteLuid) return Promise.reject(new MissingPathParameterException("siteLuid"));
	if (!projectLuid) return Promise.reject(new MissingPathParameterException("projectLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectLuid}/default-permissions/databases`)
            .withBodyParameters(permissions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * adds default permission rules for database or table resources in a project for a user or
 * group. After adding default permission rules, new resources of the type you specify that
 * are added to the project will have those permission rules. If permissions are locked to
 * the project(Link opens in a new window), then the same is true for all existing child
 * content of the project. For more information, see Permissions(Link opens in a new window).
 */
export function addDefaultPermissionsForDataRoles(projectLuid, permissions, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteLuid) return Promise.reject(new MissingPathParameterException("siteLuid"));
	if (!projectLuid) return Promise.reject(new MissingPathParameterException("projectLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectLuid}/default-permissions/dataroles`)
            .withBodyParameters(permissions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * adds default permission rules for database or table resources in a project for a user or
 * group. After adding default permission rules, new resources of the type you specify that
 * are added to the project will have those permission rules. If permissions are locked to
 * the project(Link opens in a new window), then the same is true for all existing child
 * content of the project. For more information, see Permissions(Link opens in a new window).
 */
export function addDefaultPermissionsForDatasources(projectLuid, permissions, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteLuid) return Promise.reject(new MissingPathParameterException("siteLuid"));
	if (!projectLuid) return Promise.reject(new MissingPathParameterException("projectLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectLuid}/default-permissions/datasources`)
            .withBodyParameters(permissions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * adds default permission rules for database or table resources in a project for a user or
 * group. After adding default permission rules, new resources of the type you specify that
 * are added to the project will have those permission rules. If permissions are locked to
 * the project(Link opens in a new window), then the same is true for all existing child
 * content of the project. For more information, see Permissions(Link opens in a new window).
 */
export function addDefaultPermissionsForFlows(projectLuid, permissions, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteLuid) return Promise.reject(new MissingPathParameterException("siteLuid"));
	if (!projectLuid) return Promise.reject(new MissingPathParameterException("projectLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectLuid}/default-permissions/flows`)
            .withBodyParameters(permissions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * adds default permission rules for database or table resources in a project for a user or
 * group. After adding default permission rules, new resources of the type you specify that
 * are added to the project will have those permission rules. If permissions are locked to
 * the project(Link opens in a new window), then the same is true for all existing child
 * content of the project. For more information, see Permissions(Link opens in a new window).
 */
export function addDefaultPermissionsForLenses(projectLuid, permissions, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteLuid) return Promise.reject(new MissingPathParameterException("siteLuid"));
	if (!projectLuid) return Promise.reject(new MissingPathParameterException("projectLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectLuid}/default-permissions/lenses`)
            .withBodyParameters(permissions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * adds default permission rules for database or table resources in a project for a user or
 * group. After adding default permission rules, new resources of the type you specify that
 * are added to the project will have those permission rules. If permissions are locked to
 * the project(Link opens in a new window), then the same is true for all existing child
 * content of the project. For more information, see Permissions(Link opens in a new window).
 */
export function addDefaultPermissionsForMetrics(projectLuid, permissions, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteLuid) return Promise.reject(new MissingPathParameterException("siteLuid"));
	if (!projectLuid) return Promise.reject(new MissingPathParameterException("projectLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectLuid}/default-permissions/metrics`)
            .withBodyParameters(permissions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * adds default permission rules for database or table resources in a project for a user or
 * group. After adding default permission rules, new resources of the type you specify that
 * are added to the project will have those permission rules. If permissions are locked to
 * the project(Link opens in a new window), then the same is true for all existing child
 * content of the project. For more information, see Permissions(Link opens in a new window).
 */
export function addDefaultPermissionsForTables(projectLuid, permissions, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteLuid) return Promise.reject(new MissingPathParameterException("siteLuid"));
	if (!projectLuid) return Promise.reject(new MissingPathParameterException("projectLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectLuid}/default-permissions/tables`)
            .withBodyParameters(permissions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * adds default permission rules for database or table resources in a project for a user or
 * group. After adding default permission rules, new resources of the type you specify that
 * are added to the project will have those permission rules. If permissions are locked to
 * the project(Link opens in a new window), then the same is true for all existing child
 * content of the project. For more information, see Permissions(Link opens in a new window).
 */
export function addDefaultPermissionsForWorkbooks(projectLuid, permissions, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteLuid) return Promise.reject(new MissingPathParameterException("siteLuid"));
	if (!projectLuid) return Promise.reject(new MissingPathParameterException("projectLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectLuid}/default-permissions/workbooks`)
            .withBodyParameters(permissions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds permissions to the specified project for a user or group. You can specify multiple
 * sets of permissions using one call.
 */
export function addProjectPermissions(projectId, permissions, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!projectId) return Promise.reject(new MissingPathParameterException("projectId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectId}/permissions`)
            .withBodyParameters(permissions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds permissions to the specified view (also known as a sheet) for a user or group. You
 * can specify multiple sets of permissions using one call.
 */
export function addViewPermissions(viewId, permissions, client) {
    const minVersion = "3.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!viewId) return Promise.reject(new MissingPathParameterException("viewId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/views/${viewId}/permissions`)
            .withBodyParameters(permissions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds permissions to the specified workbook for a user or group. You can specify multiple
 * sets of permissions using one call.
 */
export function addWorkbookPermissions(workbookId, permissions, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}/permissions`)
            .withBodyParameters(permissions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes the specified permissions to the specified ask data lens for a user or group.
 */
export function deleteAskDataLensPermissionForGroup(lensLuid, groupLuid, capabilityName, capabilityMode, client) {
    const minVersion = "";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteLuid) return Promise.reject(new MissingPathParameterException("siteLuid"));
	if (!lensLuid) return Promise.reject(new MissingPathParameterException("lensLuid"));
	if (!groupLuid) return Promise.reject(new MissingPathParameterException("groupLuid"));
	if (!capabilityName) return Promise.reject(new MissingPathParameterException("capabilityName"));
	if (!capabilityMode) return Promise.reject(new MissingPathParameterException("capabilityMode"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/lenses/${lensLuid}/permissions/groups/${groupLuid}/${capabilityName}/${capabilityMode}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes the specified permissions to the specified ask data lens for a user or group.
 */
export function deleteAskDataLensPermissionForUser(lensLuid, userLuid, capabilityName, capabilityMode, client) {
    const minVersion = "";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteLuid) return Promise.reject(new MissingPathParameterException("siteLuid"));
	if (!lensLuid) return Promise.reject(new MissingPathParameterException("lensLuid"));
	if (!userLuid) return Promise.reject(new MissingPathParameterException("userLuid"));
	if (!capabilityName) return Promise.reject(new MissingPathParameterException("capabilityName"));
	if (!capabilityMode) return Promise.reject(new MissingPathParameterException("capabilityMode"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/lenses/${lensLuid}/permissions/users/${userLuid}/${capabilityName}/${capabilityMode}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Removes the specified data source permission for the specified group or user.
 */
export function deleteDataSourcePermissionForGroup(datasourceId, groupId, capabilityName, capabilityMode, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!datasourceId) return Promise.reject(new MissingPathParameterException("datasourceId"));
	if (!groupId) return Promise.reject(new MissingPathParameterException("groupId"));
	if (!capabilityName) return Promise.reject(new MissingPathParameterException("capabilityName"));
	if (!capabilityMode) return Promise.reject(new MissingPathParameterException("capabilityMode"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/datasources/${datasourceId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Removes the specified data source permission for the specified group or user.
 */
export function deleteDataSourcePermissionForUser(datasourceId, userId, capabilityName, capabilityMode, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!datasourceId) return Promise.reject(new MissingPathParameterException("datasourceId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));
	if (!capabilityName) return Promise.reject(new MissingPathParameterException("capabilityName"));
	if (!capabilityMode) return Promise.reject(new MissingPathParameterException("capabilityMode"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/datasources/${datasourceId}/permissions/users/${userId}/${capabilityName}/${capabilityMode}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Removes default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * removes default permission rules for database or table resources in a project for a user
 * or group. After removing default permission rules, new resources of the type you specify
 * that are added to the project will no longer have those permission rules. If permissions
 * are locked to the project(Link opens in a new window), then the same is true for all
 * existing child content of the project.
 */
export function deleteDefaultWorkbookPermissionForGroup(capabilityName, capabilityMode, projectLuid, groupLuid, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!capabilityName) return Promise.reject(new MissingPathParameterException("capabilityName"));
	if (!capabilityMode) return Promise.reject(new MissingPathParameterException("capabilityMode"));
	if (!siteLuid) return Promise.reject(new MissingPathParameterException("siteLuid"));
	if (!projectLuid) return Promise.reject(new MissingPathParameterException("projectLuid"));
	if (!groupLuid) return Promise.reject(new MissingPathParameterException("groupLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectLuid}/default-permissions/workbooks/groups/${groupLuid}/${capabilityName}/${capabilityMode}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Removes default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * removes default permission rules for database or table resources in a project for a user
 * or group. After removing default permission rules, new resources of the type you specify
 * that are added to the project will no longer have those permission rules. If permissions
 * are locked to the project(Link opens in a new window), then the same is true for all
 * existing child content of the project.
 */
export function deleteDefaultWorkbookPermissionForUser(capabilityName, capabilityMode, projectLuid, userLuid, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!capabilityName) return Promise.reject(new MissingPathParameterException("capabilityName"));
	if (!capabilityMode) return Promise.reject(new MissingPathParameterException("capabilityMode"));
	if (!siteLuid) return Promise.reject(new MissingPathParameterException("siteLuid"));
	if (!projectLuid) return Promise.reject(new MissingPathParameterException("projectLuid"));
	if (!userLuid) return Promise.reject(new MissingPathParameterException("userLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectLuid}/default-permissions/workbooks/users/${userLuid}/${capabilityName}/${capabilityMode}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Removes the specified project permission for the specified group or user.
 */
export function deleteProjectPermissionForGroup(projectId, groupId, capabilityName, capabilityMode, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!projectId) return Promise.reject(new MissingPathParameterException("projectId"));
	if (!groupId) return Promise.reject(new MissingPathParameterException("groupId"));
	if (!capabilityName) return Promise.reject(new MissingPathParameterException("capabilityName"));
	if (!capabilityMode) return Promise.reject(new MissingPathParameterException("capabilityMode"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Removes the specified project permission for the specified group or user.
 */
export function deleteProjectPermissionForUser(projectId, userId, capabilityName, capabilityMode, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!projectId) return Promise.reject(new MissingPathParameterException("projectId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));
	if (!capabilityName) return Promise.reject(new MissingPathParameterException("capabilityName"));
	if (!capabilityMode) return Promise.reject(new MissingPathParameterException("capabilityMode"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectId}/permissions/users/${userId}/${capabilityName}/${capabilityMode}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes permission to the specified view (also known as a sheet) for a Tableau Server
 * user or group.
 */
export function deleteViewPermissionForGroup(viewId, groupId, capabilityName, capabilityMode, client) {
    const minVersion = "3.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!viewId) return Promise.reject(new MissingPathParameterException("viewId"));
	if (!groupId) return Promise.reject(new MissingPathParameterException("groupId"));
	if (!capabilityName) return Promise.reject(new MissingPathParameterException("capabilityName"));
	if (!capabilityMode) return Promise.reject(new MissingPathParameterException("capabilityMode"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/views/${viewId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes permission to the specified view (also known as a sheet) for a Tableau Server
 * user or group.
 */
export function deleteViewPermissionForUser(viewId, userId, capabilityName, capabilityMode, client) {
    const minVersion = "3.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!viewId) return Promise.reject(new MissingPathParameterException("viewId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));
	if (!capabilityName) return Promise.reject(new MissingPathParameterException("capabilityName"));
	if (!capabilityMode) return Promise.reject(new MissingPathParameterException("capabilityMode"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/views/${viewId}/permissions/users/${userId}/${capabilityName}/${capabilityMode}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes the specified permission from the specified workbook for a group or user.
 */
export function deleteWorkbookPermissionForGroup(workbookId, groupId, capabilityName, capabilityMode, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));
	if (!groupId) return Promise.reject(new MissingPathParameterException("groupId"));
	if (!capabilityName) return Promise.reject(new MissingPathParameterException("capabilityName"));
	if (!capabilityMode) return Promise.reject(new MissingPathParameterException("capabilityMode"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes the specified permission from the specified workbook for a group or user.
 */
export function deleteWorkbookPermissionForUser(workbookId, userId, capabilityName, capabilityMode, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));
	if (!capabilityName) return Promise.reject(new MissingPathParameterException("capabilityName"));
	if (!capabilityMode) return Promise.reject(new MissingPathParameterException("capabilityMode"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}/permissions/users/${userId}/${capabilityName}/${capabilityMode}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * List all permissions configured for the specified ask data lens that the user has read
 * capability for.
 */
export function listAskDataLensPermissionss(client) {
    const minVersion = "";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteLuid) return Promise.reject(new MissingPathParameterException("siteLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/lens/${lensLuid}/permissions`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of permissions for a specific data source.
 */
export function queryDataSourcePermissions(datasourceId, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!datasourceId) return Promise.reject(new MissingPathParameterException("datasourceId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/datasources/${datasourceId}/permissions`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns details of default permission rules granted to users and groups for workbook,
 * data source, data role, lens, flow, or metric resources in a project for a user or group.
 * If Tableau Catalog is enabled, this method can also return details of default permission
 * rules granted to users and groups for database or table resources in a project.
 */
export function queryDefaultPermissionsForDatabases(projectLuid, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteLuid) return Promise.reject(new MissingPathParameterException("siteLuid"));
	if (!projectLuid) return Promise.reject(new MissingPathParameterException("projectLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectLuid}/default-permissions/databases`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns details of default permission rules granted to users and groups for workbook,
 * data source, data role, lens, flow, or metric resources in a project for a user or group.
 * If Tableau Catalog is enabled, this method can also return details of default permission
 * rules granted to users and groups for database or table resources in a project.
 */
export function queryDefaultPermissionsForDataRoles(projectLuid, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteLuid) return Promise.reject(new MissingPathParameterException("siteLuid"));
	if (!projectLuid) return Promise.reject(new MissingPathParameterException("projectLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectLuid}/default-permissions/dataroles`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns details of default permission rules granted to users and groups for workbook,
 * data source, data role, lens, flow, or metric resources in a project for a user or group.
 * If Tableau Catalog is enabled, this method can also return details of default permission
 * rules granted to users and groups for database or table resources in a project.
 */
export function queryDefaultPermissionsForDatasources(projectLuid, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteLuid) return Promise.reject(new MissingPathParameterException("siteLuid"));
	if (!projectLuid) return Promise.reject(new MissingPathParameterException("projectLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectLuid}/default-permissions/datasources`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns details of default permission rules granted to users and groups for workbook,
 * data source, data role, lens, flow, or metric resources in a project for a user or group.
 * If Tableau Catalog is enabled, this method can also return details of default permission
 * rules granted to users and groups for database or table resources in a project.
 */
export function queryDefaultPermissionsForFlows(projectLuid, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteLuid) return Promise.reject(new MissingPathParameterException("siteLuid"));
	if (!projectLuid) return Promise.reject(new MissingPathParameterException("projectLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectLuid}/default-permissions/flows`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns details of default permission rules granted to users and groups for workbook,
 * data source, data role, lens, flow, or metric resources in a project for a user or group.
 * If Tableau Catalog is enabled, this method can also return details of default permission
 * rules granted to users and groups for database or table resources in a project.
 */
export function queryDefaultPermissionsForLenses(projectLuid, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteLuid) return Promise.reject(new MissingPathParameterException("siteLuid"));
	if (!projectLuid) return Promise.reject(new MissingPathParameterException("projectLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectLuid}/default-permissions/lenses`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns details of default permission rules granted to users and groups for workbook,
 * data source, data role, lens, flow, or metric resources in a project for a user or group.
 * If Tableau Catalog is enabled, this method can also return details of default permission
 * rules granted to users and groups for database or table resources in a project.
 */
export function queryDefaultPermissionsForMetrics(projectLuid, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteLuid) return Promise.reject(new MissingPathParameterException("siteLuid"));
	if (!projectLuid) return Promise.reject(new MissingPathParameterException("projectLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectLuid}/default-permissions/metrics`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns details of default permission rules granted to users and groups for workbook,
 * data source, data role, lens, flow, or metric resources in a project for a user or group.
 * If Tableau Catalog is enabled, this method can also return details of default permission
 * rules granted to users and groups for database or table resources in a project.
 */
export function queryDefaultPermissionsForTables(projectLuid, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteLuid) return Promise.reject(new MissingPathParameterException("siteLuid"));
	if (!projectLuid) return Promise.reject(new MissingPathParameterException("projectLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectLuid}/default-permissions/tables`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns details of default permission rules granted to users and groups for workbook,
 * data source, data role, lens, flow, or metric resources in a project for a user or group.
 * If Tableau Catalog is enabled, this method can also return details of default permission
 * rules granted to users and groups for database or table resources in a project.
 */
export function queryDefaultPermissionsForWorkbooks(projectLuid, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteLuid) return Promise.reject(new MissingPathParameterException("siteLuid"));
	if (!projectLuid) return Promise.reject(new MissingPathParameterException("projectLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectLuid}/default-permissions/workbooks`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns information about the set of permissions allowed or denied for groups and users
 * in a project.
 */
export function queryProjectPermissions(projectId, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!projectId) return Promise.reject(new MissingPathParameterException("projectId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectId}/permissions`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of permissions for the specific view.
 */
export function queryViewPermissions(viewId, client) {
    const minVersion = "3.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!viewId) return Promise.reject(new MissingPathParameterException("viewId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/views/${viewId}/permissions`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of permissions for the specific workbook.
 */
export function queryWorkbookPermissions(workbookId, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}/permissions`)
            .withAuthenticationToken(token)
            .build()
    );
}
