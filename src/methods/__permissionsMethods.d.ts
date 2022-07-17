/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { PermissionsRequest } from "tabbycat/types";
import { PermissionsResponse } from "tabbycat/types";

/**
 * Adds permissions to the specified ask data lens for a user or group. You can specify
 * multiple sets of permissions using one request.
 * @param {string} lensLuid The LUID of the data source to set permissions for.
 * @param {PermissionsRequest} permissions permissions
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function addAskDataLensPermissions(lensLuid: string, permissions: PermissionsRequest, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Adds permissions to the specified data source for a user or group. You can specify
 * multiple sets of permissions using one call.
 * @param {string} datasourceId The ID of the data source to set permissions for.
 * @param {PermissionsRequest} permissions permissions
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function addDataSourcePermissions(datasourceId: string, permissions: PermissionsRequest, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Adds default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * adds default permission rules for database or table resources in a project for a user or
 * group. After adding default permission rules, new resources of the type you specify that
 * are added to the project will have those permission rules. If permissions are locked to
 * the project(Link opens in a new window), then the same is true for all existing child
 * content of the project. For more information, see Permissions(Link opens in a new window).
 * @param {string} projectLuid The LUID of the project to set default permissions for.
 * @param {PermissionsRequest} permissions permissions
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function addDefaultPermissionsForDatabases(projectLuid: string, permissions: PermissionsRequest, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Adds default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * adds default permission rules for database or table resources in a project for a user or
 * group. After adding default permission rules, new resources of the type you specify that
 * are added to the project will have those permission rules. If permissions are locked to
 * the project(Link opens in a new window), then the same is true for all existing child
 * content of the project. For more information, see Permissions(Link opens in a new window).
 * @param {string} projectLuid The LUID of the project to set default permissions for.
 * @param {PermissionsRequest} permissions permissions
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function addDefaultPermissionsForDataRoles(projectLuid: string, permissions: PermissionsRequest, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Adds default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * adds default permission rules for database or table resources in a project for a user or
 * group. After adding default permission rules, new resources of the type you specify that
 * are added to the project will have those permission rules. If permissions are locked to
 * the project(Link opens in a new window), then the same is true for all existing child
 * content of the project. For more information, see Permissions(Link opens in a new window).
 * @param {string} projectLuid The LUID of the project to set default permissions for.
 * @param {PermissionsRequest} permissions permissions
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function addDefaultPermissionsForDatasources(projectLuid: string, permissions: PermissionsRequest, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Adds default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * adds default permission rules for database or table resources in a project for a user or
 * group. After adding default permission rules, new resources of the type you specify that
 * are added to the project will have those permission rules. If permissions are locked to
 * the project(Link opens in a new window), then the same is true for all existing child
 * content of the project. For more information, see Permissions(Link opens in a new window).
 * @param {string} projectLuid The LUID of the project to set default permissions for.
 * @param {PermissionsRequest} permissions permissions
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function addDefaultPermissionsForFlows(projectLuid: string, permissions: PermissionsRequest, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Adds default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * adds default permission rules for database or table resources in a project for a user or
 * group. After adding default permission rules, new resources of the type you specify that
 * are added to the project will have those permission rules. If permissions are locked to
 * the project(Link opens in a new window), then the same is true for all existing child
 * content of the project. For more information, see Permissions(Link opens in a new window).
 * @param {string} projectLuid The LUID of the project to set default permissions for.
 * @param {PermissionsRequest} permissions permissions
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function addDefaultPermissionsForLenses(projectLuid: string, permissions: PermissionsRequest, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Adds default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * adds default permission rules for database or table resources in a project for a user or
 * group. After adding default permission rules, new resources of the type you specify that
 * are added to the project will have those permission rules. If permissions are locked to
 * the project(Link opens in a new window), then the same is true for all existing child
 * content of the project. For more information, see Permissions(Link opens in a new window).
 * @param {string} projectLuid The LUID of the project to set default permissions for.
 * @param {PermissionsRequest} permissions permissions
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function addDefaultPermissionsForMetrics(projectLuid: string, permissions: PermissionsRequest, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Adds default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * adds default permission rules for database or table resources in a project for a user or
 * group. After adding default permission rules, new resources of the type you specify that
 * are added to the project will have those permission rules. If permissions are locked to
 * the project(Link opens in a new window), then the same is true for all existing child
 * content of the project. For more information, see Permissions(Link opens in a new window).
 * @param {string} projectLuid The LUID of the project to set default permissions for.
 * @param {PermissionsRequest} permissions permissions
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function addDefaultPermissionsForTables(projectLuid: string, permissions: PermissionsRequest, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Adds default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * adds default permission rules for database or table resources in a project for a user or
 * group. After adding default permission rules, new resources of the type you specify that
 * are added to the project will have those permission rules. If permissions are locked to
 * the project(Link opens in a new window), then the same is true for all existing child
 * content of the project. For more information, see Permissions(Link opens in a new window).
 * @param {string} projectLuid The LUID of the project to set default permissions for.
 * @param {PermissionsRequest} permissions permissions
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function addDefaultPermissionsForWorkbooks(projectLuid: string, permissions: PermissionsRequest, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Adds permissions to the specified project for a user or group. You can specify multiple
 * sets of permissions using one call.
 * @param {string} projectId The ID of the project to set permissions for.
 * @param {PermissionsRequest} permissions permissions
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function addProjectPermissions(projectId: string, permissions: PermissionsRequest, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Adds permissions to the specified view (also known as a sheet) for a user or group. You
 * can specify multiple sets of permissions using one call.
 * @param {string} viewId The ID of the view to set permissions for. You can obtain this
 * 		ID by calling Query Views for Site.
 * @param {PermissionsRequest} permissions permissions
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function addViewPermissions(viewId: string, permissions: PermissionsRequest, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Adds permissions to the specified workbook for a user or group. You can specify multiple
 * sets of permissions using one call.
 * @param {string} workbookId The ID of the workbook to set permissions for.
 * @param {PermissionsRequest} permissions permissions
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function addWorkbookPermissions(workbookId: string, permissions: PermissionsRequest, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Deletes the specified permissions to the specified ask data lens for a user or group.
 * @param {string} lensLuid Required. The LUID of the lens to delete permissions for.
 * @param {string} groupLuid Optional (one user or group must be specified). The LUID of
 * 		the group to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. The valid
 * 		capabilities for a view are ChangePermissions, Delete, Move, Read, Write. For more
 * 		information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteAskDataLensPermissionForGroup(lensLuid: string, groupLuid: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes the specified permissions to the specified ask data lens for a user or group.
 * @param {string} lensLuid Required. The LUID of the lens to delete permissions for.
 * @param {string} userLuid Optional. The LUID of the user to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. The valid
 * 		capabilities for a view are ChangePermissions, Delete, Move, Read, Write. For more
 * 		information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteAskDataLensPermissionForUser(lensLuid: string, userLuid: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Removes the specified data source permission for the specified group or user.
 * @param {string} datasourceId The ID of the data source to remove the permission for.
 * @param {string} groupId The ID of the group to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. Valid
 * 		capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read
 * 		(view), Write, and SaveAs. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @returns {Promise<>} Promise | undefined
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
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDataSourcePermissionForUser(datasourceId: string, userId: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Removes default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * removes default permission rules for database or table resources in a project for a user
 * or group. After removing default permission rules, new resources of the type you specify
 * that are added to the project will no longer have those permission rules. If permissions
 * are locked to the project(Link opens in a new window), then the same is true for all
 * existing child content of the project.
 * @param {string} capabilityName The capability to remove the permissions for. Valid
 * 		capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete,
 * 		ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments,
 * 		ViewUnderlyingData, WebAuthoring, Write, RunExplainData, and CreateRefreshMetrics. Valid
 * 		capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, SaveAs,
 * 		Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @param {string} projectLuid <parameter documentation missing>
 * @param {string} groupLuid <parameter documentation missing>
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDefaultDatasourcePermissionsForGroup(capabilityName: string, capabilityMode: string, projectLuid: string, groupLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Removes default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * removes default permission rules for database or table resources in a project for a user
 * or group. After removing default permission rules, new resources of the type you specify
 * that are added to the project will no longer have those permission rules. If permissions
 * are locked to the project(Link opens in a new window), then the same is true for all
 * existing child content of the project.
 * @param {string} capabilityName The capability to remove the permissions for. Valid
 * 		capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete,
 * 		ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments,
 * 		ViewUnderlyingData, WebAuthoring, Write, RunExplainData, and CreateRefreshMetrics. Valid
 * 		capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, SaveAs,
 * 		Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @param {string} projectLuid <parameter documentation missing>
 * @param {string} groupLuid <parameter documentation missing>
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDefaultFlowPermissionForGroup(capabilityName: string, capabilityMode: string, projectLuid: string, groupLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Removes default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * removes default permission rules for database or table resources in a project for a user
 * or group. After removing default permission rules, new resources of the type you specify
 * that are added to the project will no longer have those permission rules. If permissions
 * are locked to the project(Link opens in a new window), then the same is true for all
 * existing child content of the project.
 * @param {string} capabilityName The capability to remove the permissions for. Valid
 * 		capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete,
 * 		ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments,
 * 		ViewUnderlyingData, WebAuthoring, Write, RunExplainData, and CreateRefreshMetrics. Valid
 * 		capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, SaveAs,
 * 		Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @param {string} projectLuid <parameter documentation missing>
 * @param {string} userLuid <parameter documentation missing>
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDefaultFlowPermissionForUser(capabilityName: string, capabilityMode: string, projectLuid: string, userLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Removes default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * removes default permission rules for database or table resources in a project for a user
 * or group. After removing default permission rules, new resources of the type you specify
 * that are added to the project will no longer have those permission rules. If permissions
 * are locked to the project(Link opens in a new window), then the same is true for all
 * existing child content of the project.
 * @param {string} capabilityName The capability to remove the permissions for. Valid
 * 		capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete,
 * 		ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments,
 * 		ViewUnderlyingData, WebAuthoring, Write, RunExplainData, and CreateRefreshMetrics. Valid
 * 		capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, SaveAs,
 * 		Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @param {string} projectLuid <parameter documentation missing>
 * @param {string} userLuid <parameter documentation missing>
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDefaultPermission_12(capabilityName: string, capabilityMode: string, projectLuid: string, userLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Removes default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * removes default permission rules for database or table resources in a project for a user
 * or group. After removing default permission rules, new resources of the type you specify
 * that are added to the project will no longer have those permission rules. If permissions
 * are locked to the project(Link opens in a new window), then the same is true for all
 * existing child content of the project.
 * @param {string} capabilityName The capability to remove the permissions for. Valid
 * 		capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete,
 * 		ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments,
 * 		ViewUnderlyingData, WebAuthoring, Write, RunExplainData, and CreateRefreshMetrics. Valid
 * 		capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, SaveAs,
 * 		Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @param {string} projectLuid <parameter documentation missing>
 * @param {string} groupLuid <parameter documentation missing>
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDefaultPermission_13(capabilityName: string, capabilityMode: string, projectLuid: string, groupLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Removes default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * removes default permission rules for database or table resources in a project for a user
 * or group. After removing default permission rules, new resources of the type you specify
 * that are added to the project will no longer have those permission rules. If permissions
 * are locked to the project(Link opens in a new window), then the same is true for all
 * existing child content of the project.
 * @param {string} capabilityName The capability to remove the permissions for. Valid
 * 		capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete,
 * 		ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments,
 * 		ViewUnderlyingData, WebAuthoring, Write, RunExplainData, and CreateRefreshMetrics. Valid
 * 		capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, SaveAs,
 * 		Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @param {string} projectLuid <parameter documentation missing>
 * @param {string} userLuid <parameter documentation missing>
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDefaultPermission_14(capabilityName: string, capabilityMode: string, projectLuid: string, userLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Removes default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * removes default permission rules for database or table resources in a project for a user
 * or group. After removing default permission rules, new resources of the type you specify
 * that are added to the project will no longer have those permission rules. If permissions
 * are locked to the project(Link opens in a new window), then the same is true for all
 * existing child content of the project.
 * @param {string} capabilityName The capability to remove the permissions for. Valid
 * 		capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete,
 * 		ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments,
 * 		ViewUnderlyingData, WebAuthoring, Write, RunExplainData, and CreateRefreshMetrics. Valid
 * 		capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, SaveAs,
 * 		Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @param {string} projectLuid <parameter documentation missing>
 * @param {string} groupLuid <parameter documentation missing>
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDefaultPermission_15(capabilityName: string, capabilityMode: string, projectLuid: string, groupLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Removes default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * removes default permission rules for database or table resources in a project for a user
 * or group. After removing default permission rules, new resources of the type you specify
 * that are added to the project will no longer have those permission rules. If permissions
 * are locked to the project(Link opens in a new window), then the same is true for all
 * existing child content of the project.
 * @param {string} capabilityName The capability to remove the permissions for. Valid
 * 		capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete,
 * 		ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments,
 * 		ViewUnderlyingData, WebAuthoring, Write, RunExplainData, and CreateRefreshMetrics. Valid
 * 		capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, SaveAs,
 * 		Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @param {string} projectLuid <parameter documentation missing>
 * @param {string} userLuid <parameter documentation missing>
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDefaultPermission_2(capabilityName: string, capabilityMode: string, projectLuid: string, userLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Removes default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * removes default permission rules for database or table resources in a project for a user
 * or group. After removing default permission rules, new resources of the type you specify
 * that are added to the project will no longer have those permission rules. If permissions
 * are locked to the project(Link opens in a new window), then the same is true for all
 * existing child content of the project.
 * @param {string} capabilityName The capability to remove the permissions for. Valid
 * 		capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete,
 * 		ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments,
 * 		ViewUnderlyingData, WebAuthoring, Write, RunExplainData, and CreateRefreshMetrics. Valid
 * 		capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, SaveAs,
 * 		Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @param {string} projectLuid <parameter documentation missing>
 * @param {string} userLuid <parameter documentation missing>
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDefaultPermission_4(capabilityName: string, capabilityMode: string, projectLuid: string, userLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Removes default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * removes default permission rules for database or table resources in a project for a user
 * or group. After removing default permission rules, new resources of the type you specify
 * that are added to the project will no longer have those permission rules. If permissions
 * are locked to the project(Link opens in a new window), then the same is true for all
 * existing child content of the project.
 * @param {string} capabilityName The capability to remove the permissions for. Valid
 * 		capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete,
 * 		ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments,
 * 		ViewUnderlyingData, WebAuthoring, Write, RunExplainData, and CreateRefreshMetrics. Valid
 * 		capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, SaveAs,
 * 		Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @param {string} projectLuid <parameter documentation missing>
 * @param {string} groupLuid <parameter documentation missing>
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDefaultPermission_5(capabilityName: string, capabilityMode: string, projectLuid: string, groupLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Removes default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * removes default permission rules for database or table resources in a project for a user
 * or group. After removing default permission rules, new resources of the type you specify
 * that are added to the project will no longer have those permission rules. If permissions
 * are locked to the project(Link opens in a new window), then the same is true for all
 * existing child content of the project.
 * @param {string} capabilityName The capability to remove the permissions for. Valid
 * 		capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete,
 * 		ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments,
 * 		ViewUnderlyingData, WebAuthoring, Write, RunExplainData, and CreateRefreshMetrics. Valid
 * 		capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, SaveAs,
 * 		Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @param {string} projectLuid <parameter documentation missing>
 * @param {string} userLuid <parameter documentation missing>
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDefaultPermission_6(capabilityName: string, capabilityMode: string, projectLuid: string, userLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Removes default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * removes default permission rules for database or table resources in a project for a user
 * or group. After removing default permission rules, new resources of the type you specify
 * that are added to the project will no longer have those permission rules. If permissions
 * are locked to the project(Link opens in a new window), then the same is true for all
 * existing child content of the project.
 * @param {string} capabilityName The capability to remove the permissions for. Valid
 * 		capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete,
 * 		ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments,
 * 		ViewUnderlyingData, WebAuthoring, Write, RunExplainData, and CreateRefreshMetrics. Valid
 * 		capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, SaveAs,
 * 		Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @param {string} projectLuid <parameter documentation missing>
 * @param {string} groupLuid <parameter documentation missing>
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDefaultPermission_7(capabilityName: string, capabilityMode: string, projectLuid: string, groupLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Removes default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * removes default permission rules for database or table resources in a project for a user
 * or group. After removing default permission rules, new resources of the type you specify
 * that are added to the project will no longer have those permission rules. If permissions
 * are locked to the project(Link opens in a new window), then the same is true for all
 * existing child content of the project.
 * @param {string} capabilityName The capability to remove the permissions for. Valid
 * 		capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete,
 * 		ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments,
 * 		ViewUnderlyingData, WebAuthoring, Write, RunExplainData, and CreateRefreshMetrics. Valid
 * 		capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, SaveAs,
 * 		Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @param {string} projectLuid <parameter documentation missing>
 * @param {string} userLuid <parameter documentation missing>
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDefaultPermission_8(capabilityName: string, capabilityMode: string, projectLuid: string, userLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Removes default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * removes default permission rules for database or table resources in a project for a user
 * or group. After removing default permission rules, new resources of the type you specify
 * that are added to the project will no longer have those permission rules. If permissions
 * are locked to the project(Link opens in a new window), then the same is true for all
 * existing child content of the project.
 * @param {string} capabilityName The capability to remove the permissions for. Valid
 * 		capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete,
 * 		ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments,
 * 		ViewUnderlyingData, WebAuthoring, Write, RunExplainData, and CreateRefreshMetrics. Valid
 * 		capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, SaveAs,
 * 		Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @param {string} projectLuid <parameter documentation missing>
 * @param {string} groupLuid <parameter documentation missing>
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDefaultPermission_9(capabilityName: string, capabilityMode: string, projectLuid: string, groupLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Removes default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * removes default permission rules for database or table resources in a project for a user
 * or group. After removing default permission rules, new resources of the type you specify
 * that are added to the project will no longer have those permission rules. If permissions
 * are locked to the project(Link opens in a new window), then the same is true for all
 * existing child content of the project.
 * @param {string} capabilityName The capability to remove the permissions for. Valid
 * 		capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete,
 * 		ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments,
 * 		ViewUnderlyingData, WebAuthoring, Write, RunExplainData, and CreateRefreshMetrics. Valid
 * 		capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, SaveAs,
 * 		Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @param {string} projectLuid <parameter documentation missing>
 * @param {string} groupLuid <parameter documentation missing>
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDefaultWorkbookPermissionForGroup(capabilityName: string, capabilityMode: string, projectLuid: string, groupLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Removes default permission rules for workbook, data source, data role, lens, flow, and
 * metric resources in a project for a user or group. If Tableau Catalog is enabled, also
 * removes default permission rules for database or table resources in a project for a user
 * or group. After removing default permission rules, new resources of the type you specify
 * that are added to the project will no longer have those permission rules. If permissions
 * are locked to the project(Link opens in a new window), then the same is true for all
 * existing child content of the project.
 * @param {string} capabilityName The capability to remove the permissions for. Valid
 * 		capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete,
 * 		ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments,
 * 		ViewUnderlyingData, WebAuthoring, Write, RunExplainData, and CreateRefreshMetrics. Valid
 * 		capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, SaveAs,
 * 		Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @param {string} projectLuid <parameter documentation missing>
 * @param {string} userLuid <parameter documentation missing>
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDefaultWorkbookPermissionForUser(capabilityName: string, capabilityMode: string, projectLuid: string, userLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Removes the specified project permission for the specified group or user.
 * @param {string} projectId The ID of the project to remove the permission for.
 * @param {string} groupId The ID of the group to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. In Tableau
 * 		Server 10.0, valid capabilities for a project are ProjectLeader, Read (view), and Write.
 * 		For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @returns {Promise<>} Promise | undefined
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
 * @returns {Promise<>} Promise | undefined
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
 * @returns {Promise<>} Promise | undefined
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
 * @returns {Promise<>} Promise | undefined
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
 * @returns {Promise<>} Promise | undefined
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
 * @returns {Promise<>} Promise | undefined
 */
export function deleteWorkbookPermissionForUser(workbookId: string, userId: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * List all permissions configured for the specified ask data lens that the user has read
 * capability for.
 * @param {string} lensLuid The LUID of the ask data lens whose permissions are being
 * 		listed.
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function listAskDataLensPermissionss(lensLuid: string, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Returns a list of permissions for a specific data source.
 * @param {string} datasourceId The ID of the data source to get permissions for.
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function queryDataSourcePermissions(datasourceId: string, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Returns details of default permission rules granted to users and groups for workbook,
 * data source, data role, lens, flow, or metric resources in a project for a user or group.
 * If Tableau Catalog is enabled, this method can also return details of default permission
 * rules granted to users and groups for database or table resources in a project.
 * @param {string} projectLuid The LUID of the project to get default permissions for.
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function queryDefaultPermissionsForDatabases(projectLuid: string, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Returns details of default permission rules granted to users and groups for workbook,
 * data source, data role, lens, flow, or metric resources in a project for a user or group.
 * If Tableau Catalog is enabled, this method can also return details of default permission
 * rules granted to users and groups for database or table resources in a project.
 * @param {string} projectLuid The LUID of the project to get default permissions for.
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function queryDefaultPermissionsForDataRoles(projectLuid: string, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Returns details of default permission rules granted to users and groups for workbook,
 * data source, data role, lens, flow, or metric resources in a project for a user or group.
 * If Tableau Catalog is enabled, this method can also return details of default permission
 * rules granted to users and groups for database or table resources in a project.
 * @param {string} projectLuid The LUID of the project to get default permissions for.
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function queryDefaultPermissionsForDatasources(projectLuid: string, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Returns details of default permission rules granted to users and groups for workbook,
 * data source, data role, lens, flow, or metric resources in a project for a user or group.
 * If Tableau Catalog is enabled, this method can also return details of default permission
 * rules granted to users and groups for database or table resources in a project.
 * @param {string} projectLuid The LUID of the project to get default permissions for.
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function queryDefaultPermissionsForFlows(projectLuid: string, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Returns details of default permission rules granted to users and groups for workbook,
 * data source, data role, lens, flow, or metric resources in a project for a user or group.
 * If Tableau Catalog is enabled, this method can also return details of default permission
 * rules granted to users and groups for database or table resources in a project.
 * @param {string} projectLuid The LUID of the project to get default permissions for.
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function queryDefaultPermissionsForLenses(projectLuid: string, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Returns details of default permission rules granted to users and groups for workbook,
 * data source, data role, lens, flow, or metric resources in a project for a user or group.
 * If Tableau Catalog is enabled, this method can also return details of default permission
 * rules granted to users and groups for database or table resources in a project.
 * @param {string} projectLuid The LUID of the project to get default permissions for.
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function queryDefaultPermissionsForMetrics(projectLuid: string, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Returns details of default permission rules granted to users and groups for workbook,
 * data source, data role, lens, flow, or metric resources in a project for a user or group.
 * If Tableau Catalog is enabled, this method can also return details of default permission
 * rules granted to users and groups for database or table resources in a project.
 * @param {string} projectLuid The LUID of the project to get default permissions for.
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function queryDefaultPermissionsForTables(projectLuid: string, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Returns details of default permission rules granted to users and groups for workbook,
 * data source, data role, lens, flow, or metric resources in a project for a user or group.
 * If Tableau Catalog is enabled, this method can also return details of default permission
 * rules granted to users and groups for database or table resources in a project.
 * @param {string} projectLuid The LUID of the project to get default permissions for.
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function queryDefaultPermissionsForWorkbooks(projectLuid: string, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Returns information about the set of permissions allowed or denied for groups and users
 * in a project.
 * @param {string} projectId The project to get permissions for.
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function queryProjectPermissions(projectId: string, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Returns a list of permissions for the specific view.
 * @param {string} viewId The ID of the view to get permissions for.
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function queryViewPermissions(viewId: string, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Returns a list of permissions for the specific workbook.
 * @param {string} workbookId The ID of the workbook to get permissions for.
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function queryWorkbookPermissions(workbookId: string, client?: ClientLite) : Promise<PermissionsResponse>;
