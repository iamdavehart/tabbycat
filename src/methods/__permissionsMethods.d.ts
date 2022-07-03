/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { PermissionsType } from "tabbycat/types";
import { TaskType } from "tabbycat/types";

/**
 * Adds permissions to the specified data source for a Tableau Server user or group. You can
 * specify multiple sets of permissions using one call.
 * @param {string} datasourceId The ID of the data source to set permissions for.
 * @param {PermissionsType} permissions permissions
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function addDataSourcePermissions(datasourceId: string, permissions: PermissionsType, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Adds default permission capabilities granted to a user or group, for metric, flow,
 * workbook, data source, data role, or lense resources in a project. After adding default
 * permissions, resources of the type you specify that are added to a project will have those
 * capabilities granted for a group or user. If permissions are locked to the project(Link
 * opens in a new window), then the same is true for all existing child content of the
 * project. For more information, see Permissions(Link opens in a new window).
 * @param {string} projectId The ID of the project to set default permissions for.
 * @param {PermissionsType} permissions permissions
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function addDefaultPermissionsForDataRoles(projectId: string, permissions: PermissionsType, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Adds default permission capabilities granted to a user or group, for metric, flow,
 * workbook, data source, data role, or lense resources in a project. After adding default
 * permissions, resources of the type you specify that are added to a project will have those
 * capabilities granted for a group or user. If permissions are locked to the project(Link
 * opens in a new window), then the same is true for all existing child content of the
 * project. For more information, see Permissions(Link opens in a new window).
 * @param {string} projectId The ID of the project to set default permissions for.
 * @param {PermissionsType} permissions permissions
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function addDefaultPermissionsForDatasources(projectId: string, permissions: PermissionsType, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Adds default permission capabilities granted to a user or group, for metric, flow,
 * workbook, data source, data role, or lense resources in a project. After adding default
 * permissions, resources of the type you specify that are added to a project will have those
 * capabilities granted for a group or user. If permissions are locked to the project(Link
 * opens in a new window), then the same is true for all existing child content of the
 * project. For more information, see Permissions(Link opens in a new window).
 * @param {string} projectId The ID of the project to set default permissions for.
 * @param {PermissionsType} permissions permissions
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function addDefaultPermissionsForFlows(projectId: string, permissions: PermissionsType, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Adds default permission capabilities granted to a user or group, for metric, flow,
 * workbook, data source, data role, or lense resources in a project. After adding default
 * permissions, resources of the type you specify that are added to a project will have those
 * capabilities granted for a group or user. If permissions are locked to the project(Link
 * opens in a new window), then the same is true for all existing child content of the
 * project. For more information, see Permissions(Link opens in a new window).
 * @param {string} projectId The ID of the project to set default permissions for.
 * @param {PermissionsType} permissions permissions
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function addDefaultPermissionsForLenses(projectId: string, permissions: PermissionsType, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Adds default permission capabilities granted to a user or group, for metric, flow,
 * workbook, data source, data role, or lense resources in a project. After adding default
 * permissions, resources of the type you specify that are added to a project will have those
 * capabilities granted for a group or user. If permissions are locked to the project(Link
 * opens in a new window), then the same is true for all existing child content of the
 * project. For more information, see Permissions(Link opens in a new window).
 * @param {string} projectId The ID of the project to set default permissions for.
 * @param {PermissionsType} permissions permissions
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function addDefaultPermissionsForMetrics(projectId: string, permissions: PermissionsType, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Adds default permission capabilities granted to a user or group, for metric, flow,
 * workbook, data source, data role, or lense resources in a project. After adding default
 * permissions, resources of the type you specify that are added to a project will have those
 * capabilities granted for a group or user. If permissions are locked to the project(Link
 * opens in a new window), then the same is true for all existing child content of the
 * project. For more information, see Permissions(Link opens in a new window).
 * @param {string} projectId The ID of the project to set default permissions for.
 * @param {PermissionsType} permissions permissions
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function addDefaultPermissionsForWorkbooks(projectId: string, permissions: PermissionsType, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Adds permissions to the specified project for a Tableau Server user or group. You can
 * specify multiple sets of permissions using one call.
 * @param {string} projectId The ID of the project to set permissions for.
 * @param {PermissionsType} permissions permissions
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function addProjectPermissions(projectId: string, permissions: PermissionsType, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Adds permissions to the specified view (also known as a sheet) for a Tableau Server user
 * or group. You can specify multiple sets of permissions using one call.
 * @param {string} viewId The ID of the view to set permissions for. You can obtain this
 * 		ID by calling Query Views for Site.
 * @param {PermissionsType} permissions permissions
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function addViewPermissions(viewId: string, permissions: PermissionsType, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Adds permissions to the specified workbook for a Tableau Server user or group. You can
 * specify multiple sets of permissions using one call.
 * @param {string} workbookId The ID of the workbook to set permissions for.
 * @param {PermissionsType} permissions permissions
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function addWorkbookPermissions(workbookId: string, permissions: PermissionsType, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Adds a task to refresh or accelerate a workbook to an existing schedule.
 * @param {string} scheduleId The ID of the schedule that you are associating with the
 * 		workbook.
 * @param {TaskType} task task
 * @returns {Promise<TaskType>} Promise | undefined
 */
export function addWorkbookToSchedule(scheduleId: string, task: TaskType, client?: ClientLite) : Promise<TaskType>;

/**
 * Removes the specified data source permission for the specified group or user.
 * @param {string} datasourceId The ID of the data source to remove the permission for.
 * @param {string} groupId The ID of the group to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. Valid
 * 		capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read
 * 		(view), Write, and SaveAs. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDataSourcePermissionForGroup(datasourceId: string, groupId: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Removes the specified data source permission for the specified group or user.
 * @param {string} datasourceId The ID of the data source to remove the permission for.
 * @param {string} userId The ID of the user to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. Valid
 * 		capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read
 * 		(view), Write, and SaveAs. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDataSourcePermissionForUser(datasourceId: string, userId: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Removes default permission capabilities granted to a user or group, for metric, flow,
 * workbook, data source, data role, or lense resources in a project. After deleting default
 * permissions, resources of the type you specify that are added to a project will not have
 * the those capabilities granted for a group or user. If permissions are locked to the
 * project(Link opens in a new window), then the same is true for all existing child content
 * of the project.
 * @param {string} projectId The ID of the project to remove the default permission for.
 * @param {string} groupId The ID of the group to remove the default permission for.
 * @param {string} capabilityName The capability to remove the permissions for. Valid
 * 		capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete,
 * 		ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments,
 * 		ViewUnderlyingData, WebAuthoring, Write, RunExplainData, and CreateRefreshMetrics. Valid
 * 		capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, SaveAs,
 * 		Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDefaultWorkbookPermissionForGroup(projectId: string, groupId: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Removes default permission capabilities granted to a user or group, for metric, flow,
 * workbook, data source, data role, or lense resources in a project. After deleting default
 * permissions, resources of the type you specify that are added to a project will not have
 * the those capabilities granted for a group or user. If permissions are locked to the
 * project(Link opens in a new window), then the same is true for all existing child content
 * of the project.
 * @param {string} projectId The ID of the project to remove the default permission for.
 * @param {string} userId The ID of the user to remove default permission for.
 * @param {string} capabilityName The capability to remove the permissions for. Valid
 * 		capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete,
 * 		ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments,
 * 		ViewUnderlyingData, WebAuthoring, Write, RunExplainData, and CreateRefreshMetrics. Valid
 * 		capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, SaveAs,
 * 		Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDefaultWorkbookPermissionForUser(projectId: string, userId: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Removes the specified project permission for the specified group or user.
 * @param {string} projectId The ID of the project to remove the permission for.
 * @param {string} groupId The ID of the group to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. In Tableau
 * 		Server 10.0, valid capabilities for a project are ProjectLeader, Read (view), and Write.
 * 		For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteProjectPermissionForGroup(projectId: string, groupId: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Removes the specified project permission for the specified group or user.
 * @param {string} projectId The ID of the project to remove the permission for.
 * @param {string} userId The ID of the user to remove project the permission for.
 * @param {string} capabilityName The capability to remove the permission for. In Tableau
 * 		Server 10.0, valid capabilities for a project are ProjectLeader, Read (view), and Write.
 * 		For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteProjectPermissionForUser(projectId: string, userId: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes permission to the specified view (also known as a sheet) for a Tableau Server
 * user or group.
 * @param {string} viewId The ID of the view to delete permissions for. You can obtain
 * 		this ID by calling Query Views for Site.
 * @param {string} groupId The ID of the group to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. The valid
 * 		capabilities for a view are AddComment, ChangePermissions, Delete, ExportData,
 * 		ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData,
 * 		WebAuthoring, and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteViewPermissionForGroup(viewId: string, groupId: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes permission to the specified view (also known as a sheet) for a Tableau Server
 * user or group.
 * @param {string} viewId The ID of the view to delete permissions for. You can obtain
 * 		this ID by calling Query Views for Site.
 * @param {string} userId The ID of the user to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. The valid
 * 		capabilities for a view are AddComment, ChangePermissions, Delete, ExportData,
 * 		ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData,
 * 		WebAuthoring, and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteViewPermissionForUser(viewId: string, userId: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes the specified permission from the specified workbook for a group or user.
 * @param {string} workbookId The ID of the workbook to remove the permission for.
 * @param {string} groupId The ID of the group to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. Valid
 * 		capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete,
 * 		ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments,
 * 		ViewUnderlyingData, WebAuthoring, Write, RunExplainData, and CreateRefreshMetrics. For
 * 		more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteWorkbookPermissionForGroup(workbookId: string, groupId: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes the specified permission from the specified workbook for a group or user.
 * @param {string} workbookId The ID of the workbook to remove the permission for.
 * @param {string} userId The ID of the user to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. Valid
 * 		capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete,
 * 		ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments,
 * 		ViewUnderlyingData, WebAuthoring, Write, RunExplainData, and CreateRefreshMetrics. For
 * 		more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteWorkbookPermissionForUser(workbookId: string, userId: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Returns a list of permissions for a specific data source.
 * @param {string} datasourceId The ID of the data source to get permissions for.
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function queryDataSourcePermissions(datasourceId: string, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Returns details of default permission capabilities granted to users and groups for
 * metric, flow, workbook, data source, data role, or lense resources in a project.
 * @param {string} projectId The project to get default permissions for.
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function queryDefaultPermissionsForDataRoles(projectId: string, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Returns details of default permission capabilities granted to users and groups for
 * metric, flow, workbook, data source, data role, or lense resources in a project.
 * @param {string} projectId The project to get default permissions for.
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function queryDefaultPermissionsForDatasources(projectId: string, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Returns details of default permission capabilities granted to users and groups for
 * metric, flow, workbook, data source, data role, or lense resources in a project.
 * @param {string} projectId The project to get default permissions for.
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function queryDefaultPermissionsForFlows(projectId: string, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Returns details of default permission capabilities granted to users and groups for
 * metric, flow, workbook, data source, data role, or lense resources in a project.
 * @param {string} projectId The project to get default permissions for.
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function queryDefaultPermissionsForLenses(projectId: string, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Returns details of default permission capabilities granted to users and groups for
 * metric, flow, workbook, data source, data role, or lense resources in a project.
 * @param {string} projectId The project to get default permissions for.
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function queryDefaultPermissionsForMetrics(projectId: string, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Returns details of default permission capabilities granted to users and groups for
 * metric, flow, workbook, data source, data role, or lense resources in a project.
 * @param {string} projectId The project to get default permissions for.
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function queryDefaultPermissionsForWorkbooks(projectId: string, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Returns information about the set of permissions allowed or denied for groups and users
 * in a project.
 * @param {string} projectId The project to get permissions for.
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function queryProjectPermissions(projectId: string, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Returns a list of permissions for the specific view.
 * @param {string} viewId The ID of the view to get permissions for.
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function queryViewPermissions(viewId: string, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Returns a list of permissions for the specific workbook.
 * @param {string} workbookId The ID of the workbook to get permissions for.
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function queryWorkbookPermissions(workbookId: string, client?: ClientLite) : Promise<PermissionsType>;
