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
 * Adds permissions to the specified data source for a Tableau Server user or group. You can
 * specify multiple sets of permissions using one call.
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
 * Adds default permission capabilities granted to a user or group, for metric, flow,
 * workbook, data source, data role, or lense resources in a project. After adding default
 * permissions, resources of the type you specify that are added to a project will have those
 * capabilities granted for a group or user. If permissions are locked to the project(Link
 * opens in a new window), then the same is true for all existing child content of the
 * project. For more information, see Permissions(Link opens in a new window).
 */
export function addDefaultPermissionsForDataRoles(projectId, permissions, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!projectId) return Promise.reject(new MissingPathParameterException("projectId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectId}/default-permissions/dataroles`)
            .withBodyParameters(permissions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds default permission capabilities granted to a user or group, for metric, flow,
 * workbook, data source, data role, or lense resources in a project. After adding default
 * permissions, resources of the type you specify that are added to a project will have those
 * capabilities granted for a group or user. If permissions are locked to the project(Link
 * opens in a new window), then the same is true for all existing child content of the
 * project. For more information, see Permissions(Link opens in a new window).
 */
export function addDefaultPermissionsForDatasources(projectId, permissions, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!projectId) return Promise.reject(new MissingPathParameterException("projectId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectId}/default-permissions/datasources`)
            .withBodyParameters(permissions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds default permission capabilities granted to a user or group, for metric, flow,
 * workbook, data source, data role, or lense resources in a project. After adding default
 * permissions, resources of the type you specify that are added to a project will have those
 * capabilities granted for a group or user. If permissions are locked to the project(Link
 * opens in a new window), then the same is true for all existing child content of the
 * project. For more information, see Permissions(Link opens in a new window).
 */
export function addDefaultPermissionsForFlows(projectId, permissions, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!projectId) return Promise.reject(new MissingPathParameterException("projectId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectId}/default-permissions/flows`)
            .withBodyParameters(permissions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds default permission capabilities granted to a user or group, for metric, flow,
 * workbook, data source, data role, or lense resources in a project. After adding default
 * permissions, resources of the type you specify that are added to a project will have those
 * capabilities granted for a group or user. If permissions are locked to the project(Link
 * opens in a new window), then the same is true for all existing child content of the
 * project. For more information, see Permissions(Link opens in a new window).
 */
export function addDefaultPermissionsForLenses(projectId, permissions, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!projectId) return Promise.reject(new MissingPathParameterException("projectId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectId}/default-permissions/lenses`)
            .withBodyParameters(permissions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds default permission capabilities granted to a user or group, for metric, flow,
 * workbook, data source, data role, or lense resources in a project. After adding default
 * permissions, resources of the type you specify that are added to a project will have those
 * capabilities granted for a group or user. If permissions are locked to the project(Link
 * opens in a new window), then the same is true for all existing child content of the
 * project. For more information, see Permissions(Link opens in a new window).
 */
export function addDefaultPermissionsForMetrics(projectId, permissions, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!projectId) return Promise.reject(new MissingPathParameterException("projectId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectId}/default-permissions/metrics`)
            .withBodyParameters(permissions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds default permission capabilities granted to a user or group, for metric, flow,
 * workbook, data source, data role, or lense resources in a project. After adding default
 * permissions, resources of the type you specify that are added to a project will have those
 * capabilities granted for a group or user. If permissions are locked to the project(Link
 * opens in a new window), then the same is true for all existing child content of the
 * project. For more information, see Permissions(Link opens in a new window).
 */
export function addDefaultPermissionsForWorkbooks(projectId, permissions, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!projectId) return Promise.reject(new MissingPathParameterException("projectId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectId}/default-permissions/workbooks`)
            .withBodyParameters(permissions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds permissions to the specified project for a Tableau Server user or group. You can
 * specify multiple sets of permissions using one call.
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
 * Adds permissions to the specified view (also known as a sheet) for a Tableau Server user
 * or group. You can specify multiple sets of permissions using one call.
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
 * Adds permissions to the specified workbook for a Tableau Server user or group. You can
 * specify multiple sets of permissions using one call.
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
 * Adds a task to refresh or accelerate a workbook to an existing schedule.
 */
export function addWorkbookToSchedule(scheduleId, task, client) {
    const minVersion = "2022.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!scheduleId) return Promise.reject(new MissingPathParameterException("scheduleId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/schedules/${scheduleId}/workbooks`)
            .withBodyParameters(task)
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
 * Removes default permission capabilities granted to a user or group, for metric, flow,
 * workbook, data source, data role, or lense resources in a project. After deleting default
 * permissions, resources of the type you specify that are added to a project will not have
 * the those capabilities granted for a group or user. If permissions are locked to the
 * project(Link opens in a new window), then the same is true for all existing child content
 * of the project.
 */
export function deleteDefaultWorkbookPermissionForGroup(projectId, groupId, capabilityName, capabilityMode, client) {
    const minVersion = "2.1";
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
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectId}/default-permissions/workbooks/groups/${groupId}/${capabilityName}/${capabilityMode}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Removes default permission capabilities granted to a user or group, for metric, flow,
 * workbook, data source, data role, or lense resources in a project. After deleting default
 * permissions, resources of the type you specify that are added to a project will not have
 * the those capabilities granted for a group or user. If permissions are locked to the
 * project(Link opens in a new window), then the same is true for all existing child content
 * of the project.
 */
export function deleteDefaultWorkbookPermissionForUser(projectId, userId, capabilityName, capabilityMode, client) {
    const minVersion = "2.1";
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
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectId}/default-permissions/workbooks/users/${userId}/${capabilityName}/${capabilityMode}`)
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
 * Returns details of default permission capabilities granted to users and groups for
 * metric, flow, workbook, data source, data role, or lense resources in a project.
 */
export function queryDefaultPermissionsForDataRoles(projectId, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!projectId) return Promise.reject(new MissingPathParameterException("projectId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectId}/default-permissions/dataroles`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns details of default permission capabilities granted to users and groups for
 * metric, flow, workbook, data source, data role, or lense resources in a project.
 */
export function queryDefaultPermissionsForDatasources(projectId, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!projectId) return Promise.reject(new MissingPathParameterException("projectId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectId}/default-permissions/datasources`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns details of default permission capabilities granted to users and groups for
 * metric, flow, workbook, data source, data role, or lense resources in a project.
 */
export function queryDefaultPermissionsForFlows(projectId, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!projectId) return Promise.reject(new MissingPathParameterException("projectId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectId}/default-permissions/flows`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns details of default permission capabilities granted to users and groups for
 * metric, flow, workbook, data source, data role, or lense resources in a project.
 */
export function queryDefaultPermissionsForLenses(projectId, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!projectId) return Promise.reject(new MissingPathParameterException("projectId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectId}/default-permissions/lenses`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns details of default permission capabilities granted to users and groups for
 * metric, flow, workbook, data source, data role, or lense resources in a project.
 */
export function queryDefaultPermissionsForMetrics(projectId, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!projectId) return Promise.reject(new MissingPathParameterException("projectId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectId}/default-permissions/metrics`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns details of default permission capabilities granted to users and groups for
 * metric, flow, workbook, data source, data role, or lense resources in a project.
 */
export function queryDefaultPermissionsForWorkbooks(projectId, client) {
    const minVersion = "2.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!projectId) return Promise.reject(new MissingPathParameterException("projectId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/projects/${projectId}/default-permissions/workbooks`)
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
