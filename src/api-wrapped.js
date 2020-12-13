/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */


import * as api from './api-full'

export class WrappedApiCalls {
    
    constructor() {
        this.execOpts = this.execOpts.bind(this);
        this.getSite = this.getSite.bind(this);
    }

    /** retrieves a cached site id (overridden in clients) */
    getSite() { return; }

    /** retrieves an exec options object (overridden in clients) */
    execOpts(obj) { return { ...obj } }

    signIn(credentials, callback) {
        const opts = this.execOpts({ authentication: true, callback: callback });
        return api.signIn(credentials, opts);
    }

	signOut(callback) {
        const opts = this.execOpts({ callback: callback });
        return api.signOut(opts);
    }

	switchSite(site, callback) {
        const opts = this.execOpts({ callback: callback });
        return api.switchSite(site, opts);
    }

	createSite(site, callback) {
        const opts = this.execOpts({ callback: callback });
        return api.createSite(site, opts);
    }

	querySite(siteName, contentUrl, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.querySite(siteId, siteName, contentUrl, queryOptions, opts);
    }

	querySiteByID(queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.querySiteByID(siteId, queryOptions, opts);
    }

	querySiteByName(siteName, queryOptions, callback) {
        const opts = this.execOpts({ callback: callback });
        return api.querySiteByName(siteName, queryOptions, opts);
    }

	querySiteByContentUrl(contentUrl, queryOptions, callback) {
        const opts = this.execOpts({ callback: callback });
        return api.querySiteByContentUrl(contentUrl, queryOptions, opts);
    }

	querySites(queryOptions, callback) {
        const opts = this.execOpts({ callback: callback });
        return api.querySites(queryOptions, opts);
    }

	getRecentlyViewedForSite(callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.getRecentlyViewedForSite(siteId, opts);
    }

	queryViewsForSite(queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryViewsForSite(siteId, queryOptions, opts);
    }

	updateSite(site, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.updateSite(siteId, site, opts);
    }

	deleteSite(siteName, contentUrl, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteSite(siteId, siteName, contentUrl, opts);
    }

	deleteSiteByID(callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteSiteByID(siteId, opts);
    }

	deleteSiteByName(siteName, callback) {
        const opts = this.execOpts({ callback: callback });
        return api.deleteSiteByName(siteName, opts);
    }

	deleteSiteByContentUrl(contentUrl, callback) {
        const opts = this.execOpts({ callback: callback });
        return api.deleteSiteByContentUrl(contentUrl, opts);
    }

	deleteDataDrivenAlert(dataAlertId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteDataDrivenAlert(siteId, dataAlertId, opts);
    }

	queryDataDrivenAlertDetails(dataAlertId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryDataDrivenAlertDetails(siteId, dataAlertId, opts);
    }

	queryDataDrivenAlerts(callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryDataDrivenAlerts(siteId, opts);
    }

	addUserToDataDrivenAlert(dataAlertId, user, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addUserToDataDrivenAlert(siteId, dataAlertId, user, opts);
    }

	deleteUserFromDataDrivenAlert(dataAlertId, userId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteUserFromDataDrivenAlert(siteId, dataAlertId, userId, opts);
    }

	updateDataDrivenAlert(dataAlertId, dataAlert, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.updateDataDrivenAlert(siteId, dataAlertId, dataAlert, opts);
    }

	addFlowPermissions(flowId, permissions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addFlowPermissions(siteId, flowId, permissions, opts);
    }

	addFlowTaskToSchedule(scheduleId, task, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addFlowTaskToSchedule(siteId, scheduleId, task, opts);
    }

	deleteFlow(flowId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteFlow(siteId, flowId, opts);
    }

	deleteFlowPermission(flowId, groupId, userId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteFlowPermission(siteId, flowId, groupId, userId, capabilityName, capabilityMode, opts);
    }

	deleteFlowPermissionsForGroup(flowId, groupId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteFlowPermissionsForGroup(siteId, flowId, groupId, capabilityName, capabilityMode, opts);
    }

	deleteFlowPermissionsForUser(flowId, userId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteFlowPermissionsForUser(siteId, flowId, userId, capabilityName, capabilityMode, opts);
    }

	downloadFlow(flowId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.downloadFlow(siteId, flowId, opts);
    }

	getFlowRunTask(taskId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.getFlowRunTask(siteId, taskId, opts);
    }

	getFlowRunTasks(callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.getFlowRunTasks(siteId, opts);
    }

	publishFlow(flow, file, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.publishFlow(siteId, flow, file, opts);
    }

	queryFlow(flowId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryFlow(siteId, flowId, opts);
    }

	queryFlowConnections(flowId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryFlowConnections(siteId, flowId, opts);
    }

	queryFlowPermissions(flowId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryFlowPermissions(siteId, flowId, opts);
    }

	queryFlowsForSite(callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryFlowsForSite(siteId, opts);
    }

	queryFlowsForUser(userId, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryFlowsForUser(siteId, userId, queryOptions, opts);
    }

	runFlowTask(taskId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.runFlowTask(siteId, taskId, opts);
    }

	updateFlow(flowId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.updateFlow(siteId, flowId, opts);
    }

	updateFlowConnection(flowId, connectionId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.updateFlowConnection(siteId, flowId, connectionId, opts);
    }

	createProject(project, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.createProject(siteId, project, queryOptions, opts);
    }

	queryProjects(queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryProjects(siteId, queryOptions, opts);
    }

	updateProject(projectId, project, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.updateProject(siteId, projectId, project, queryOptions, opts);
    }

	deleteProject(projectId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteProject(siteId, projectId, opts);
    }

	publishWorkbook(workbook, file, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.publishWorkbook(siteId, workbook, file, queryOptions, opts);
    }

	addTagsToView(viewId, tags, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addTagsToView(siteId, viewId, tags, opts);
    }

	addTagsToWorkbook(workbookId, tags, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addTagsToWorkbook(siteId, workbookId, tags, opts);
    }

	queryViewsForWorkbook(workbookId, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryViewsForWorkbook(siteId, workbookId, queryOptions, opts);
    }

	queryViewData(viewId, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryViewData(siteId, viewId, queryOptions, opts);
    }

	queryViewImage(viewId, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryViewImage(siteId, viewId, queryOptions, opts);
    }

	queryViewPDF(viewId, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryViewPDF(siteId, viewId, queryOptions, opts);
    }

	queryViewPreviewImage(workbookId, viewId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryViewPreviewImage(siteId, workbookId, viewId, opts);
    }

	queryWorkbook(workbookId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryWorkbook(siteId, workbookId, opts);
    }

	queryWorkbookConnections(workbookId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryWorkbookConnections(siteId, workbookId, opts);
    }

	getView(viewId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.getView(siteId, viewId, opts);
    }

	getViewByPath(queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.getViewByPath(siteId, queryOptions, opts);
    }

	getViewRecommendations(callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.getViewRecommendations(siteId, opts);
    }

	getWorkbookRevisions(workbookId, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.getWorkbookRevisions(siteId, workbookId, queryOptions, opts);
    }

	hideViewRecommendations(recommendationDismissal, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.hideViewRecommendations(siteId, recommendationDismissal, opts);
    }

	unhideViewRecommendations(queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.unhideViewRecommendations(siteId, queryOptions, opts);
    }

	queryWorkbookPreviewImage(workbookId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryWorkbookPreviewImage(siteId, workbookId, opts);
    }

	queryWorkbooksForSite(queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryWorkbooksForSite(siteId, queryOptions, opts);
    }

	queryWorkbooksForUser(userId, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryWorkbooksForUser(siteId, userId, queryOptions, opts);
    }

	downloadViewCrosstabExcel(viewId, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.downloadViewCrosstabExcel(siteId, viewId, queryOptions, opts);
    }

	downloadWorkbook(workbookId, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.downloadWorkbook(siteId, workbookId, queryOptions, opts);
    }

	downloadWorkbookPDF(workbookId, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.downloadWorkbookPDF(siteId, workbookId, queryOptions, opts);
    }

	downloadWorkbookPowerpoint(workbookId, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.downloadWorkbookPowerpoint(siteId, workbookId, queryOptions, opts);
    }

	downloadWorkbookRevision(workbookId, revisionNumber, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.downloadWorkbookRevision(siteId, workbookId, revisionNumber, queryOptions, opts);
    }

	updateWorkbook(workbookId, workbook, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.updateWorkbook(siteId, workbookId, workbook, opts);
    }

	updateWorkbookConnection(workbookId, connectionId, connection, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.updateWorkbookConnection(siteId, workbookId, connectionId, connection, opts);
    }

	updateWorkbookNow(workbookId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.updateWorkbookNow(siteId, workbookId, opts);
    }

	deleteWorkbook(workbookId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteWorkbook(siteId, workbookId, opts);
    }

	deleteTagFromView(viewId, tagName, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteTagFromView(siteId, viewId, tagName, opts);
    }

	deleteTagFromWorkbook(workbookId, tagName, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteTagFromWorkbook(siteId, workbookId, tagName, opts);
    }

	getDataAccelerationReportForASite(callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.getDataAccelerationReportForASite(siteId, opts);
    }

	publishDataSource(datasource, file, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.publishDataSource(siteId, datasource, file, queryOptions, opts);
    }

	addTagsToDataSource(datasourceId, tags, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addTagsToDataSource(siteId, datasourceId, tags, opts);
    }

	deleteTagFromDataSource(datasourceId, tagName, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteTagFromDataSource(siteId, datasourceId, tagName, opts);
    }

	queryDataSource(datasourceId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryDataSource(siteId, datasourceId, opts);
    }

	queryDataSources(queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryDataSources(siteId, queryOptions, opts);
    }

	queryDataSourceConnections(datasourceId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryDataSourceConnections(siteId, datasourceId, opts);
    }

	getDataSourceRevisions(datasourceId, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.getDataSourceRevisions(siteId, datasourceId, queryOptions, opts);
    }

	downloadDataSource(datasourceId, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.downloadDataSource(siteId, datasourceId, queryOptions, opts);
    }

	downloadDataSourceRevision(datasourceId, revisionNumber, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.downloadDataSourceRevision(siteId, datasourceId, revisionNumber, queryOptions, opts);
    }

	updateDataSource(datasourceId, datasource, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.updateDataSource(siteId, datasourceId, datasource, opts);
    }

	updateDataSourceConnection(datasourceId, connectionId, connection, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.updateDataSourceConnection(siteId, datasourceId, connectionId, connection, opts);
    }

	updateDataSourceNow(datasourceId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.updateDataSourceNow(siteId, datasourceId, opts);
    }

	deleteDataSource(datasourceId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteDataSource(siteId, datasourceId, opts);
    }

	removeDataSourceRevision(datasourceId, revisionNumber, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.removeDataSourceRevision(siteId, datasourceId, revisionNumber, opts);
    }

	createGroup(group, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.createGroup(siteId, group, queryOptions, opts);
    }

	addUserToGroup(groupId, user, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addUserToGroup(siteId, groupId, user, opts);
    }

	addUserToSite(user, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addUserToSite(siteId, user, opts);
    }

	getGroupsForAUser(userId, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.getGroupsForAUser(siteId, userId, queryOptions, opts);
    }

	getUsersInGroup(groupId, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.getUsersInGroup(siteId, groupId, queryOptions, opts);
    }

	getUsersOnSite(queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.getUsersOnSite(siteId, queryOptions, opts);
    }

	queryGroups(queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryGroups(siteId, queryOptions, opts);
    }

	queryUserOnSite(userId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryUserOnSite(siteId, userId, opts);
    }

	updateGroup(groupId, group, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.updateGroup(siteId, groupId, group, opts);
    }

	updateUser(userId, user, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.updateUser(siteId, userId, user, opts);
    }

	removeUserFromGroup(groupId, userId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.removeUserFromGroup(siteId, groupId, userId, opts);
    }

	removeUserFromSite(userId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.removeUserFromSite(siteId, userId, opts);
    }

	deleteGroup(groupId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteGroup(siteId, groupId, opts);
    }

	queryDatabase(databaseId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryDatabase(siteId, databaseId, opts);
    }

	queryDatabases(callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryDatabases(siteId, opts);
    }

	updateDatabase(databaseId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.updateDatabase(siteId, databaseId, opts);
    }

	removeDatabase(databaseId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.removeDatabase(siteId, databaseId, opts);
    }

	addDatabasePermissions(databaseId, permissions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addDatabasePermissions(siteId, databaseId, permissions, opts);
    }

	queryDatabasePermissions(databaseId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryDatabasePermissions(siteId, databaseId, opts);
    }

	addDefaultDatabasePermissions(databaseId, permissions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addDefaultDatabasePermissions(siteId, databaseId, permissions, opts);
    }

	queryDefaultDatabasePermissions(databaseId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryDefaultDatabasePermissions(siteId, databaseId, opts);
    }

	deleteDatabasePermissions(databaseId, userId, groupId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteDatabasePermissions(siteId, databaseId, userId, groupId, capabilityName, capabilityMode, opts);
    }

	deleteDatabasePermissionsForGroup(databaseId, userId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteDatabasePermissionsForGroup(siteId, databaseId, userId, capabilityName, capabilityMode, opts);
    }

	deleteDatabasePermissionsForUser(databaseId, groupId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteDatabasePermissionsForUser(siteId, databaseId, groupId, capabilityName, capabilityMode, opts);
    }

	deleteDefaultDatabasePermissions(databaseId, userId, capabilityMode, groupId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteDefaultDatabasePermissions(siteId, databaseId, userId, capabilityMode, groupId, opts);
    }

	deleteDefaultDatabasePermissionsForUser(databaseId, userId, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteDefaultDatabasePermissionsForUser(siteId, databaseId, userId, capabilityMode, opts);
    }

	deleteDefaultDatabasePermissionsForGroup(databaseId, capabilityMode, groupId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteDefaultDatabasePermissionsForGroup(siteId, databaseId, capabilityMode, groupId, opts);
    }

	queryTable(tableId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryTable(siteId, tableId, opts);
    }

	queryTables(callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryTables(siteId, opts);
    }

	updateTable(tableId, table, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.updateTable(siteId, tableId, table, opts);
    }

	removeTable(tableId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.removeTable(siteId, tableId, opts);
    }

	addTablePermissions(tableId, permissions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addTablePermissions(siteId, tableId, permissions, opts);
    }

	queryTablePermissions(tableId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryTablePermissions(siteId, tableId, opts);
    }

	deleteTablePermissions(tableId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteTablePermissions(siteId, tableId, opts);
    }

	queryColumnInATable(tableId, columnId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryColumnInATable(siteId, tableId, columnId, opts);
    }

	queryColumnsInATable(tableId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryColumnsInATable(siteId, tableId, opts);
    }

	updateColumn(tableId, columnId, column, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.updateColumn(siteId, tableId, columnId, column, opts);
    }

	removeColumn(tableId, columnId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.removeColumn(siteId, tableId, columnId, opts);
    }

	addDataQualityWarning(contentType, contentLuid, dataQualityWarning, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addDataQualityWarning(siteId, contentType, contentLuid, dataQualityWarning, opts);
    }

	queryDataQualityWarningByID(dataqualitywarningId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryDataQualityWarningByID(siteId, dataqualitywarningId, opts);
    }

	queryDataQualityWarningByContent(contentType, contentLuid, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryDataQualityWarningByContent(siteId, contentType, contentLuid, opts);
    }

	updateDataQualityWarning(dataqualitywarningId, dataQualityWarning, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.updateDataQualityWarning(siteId, dataqualitywarningId, dataQualityWarning, opts);
    }

	deleteDataQualityWarningByID(dataqualitywarningId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteDataQualityWarningByID(siteId, dataqualitywarningId, opts);
    }

	deleteDataQualityWarningByContent(contentType, contentLuid, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteDataQualityWarningByContent(siteId, contentType, contentLuid, opts);
    }

	addTagsToDatabase(databaseId, tags, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addTagsToDatabase(siteId, databaseId, tags, opts);
    }

	addTagsToTable(tableId, tags, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addTagsToTable(siteId, tableId, tags, opts);
    }

	addTagsToColumn(columnId, tags, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addTagsToColumn(siteId, columnId, tags, opts);
    }

	batchAddTags(tagBatch, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.batchAddTags(siteId, tagBatch, opts);
    }

	deleteTagFromDatabase(databaseId, tagName, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteTagFromDatabase(siteId, databaseId, tagName, opts);
    }

	deleteTagFromTable(tableId, tagName, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteTagFromTable(siteId, tableId, tagName, opts);
    }

	deleteTagFromColumn(columnId, tagName, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteTagFromColumn(siteId, columnId, tagName, opts);
    }

	batchDeleteTags(tagBatch, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.batchDeleteTags(siteId, tagBatch, opts);
    }

	removeWorkbookRevision(workbookId, revisionNumber, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.removeWorkbookRevision(siteId, workbookId, revisionNumber, opts);
    }

	addDataSourcePermissions(datasourceId, permissions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addDataSourcePermissions(siteId, datasourceId, permissions, opts);
    }

	addProjectPermissions(projectId, permissions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addProjectPermissions(siteId, projectId, permissions, opts);
    }

	addDefaultPermissions(projectId, permissions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addDefaultPermissions(siteId, projectId, permissions, opts);
    }

	addDefaultPermissionsForWorkbooks(projectId, permissions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addDefaultPermissionsForWorkbooks(siteId, projectId, permissions, opts);
    }

	addDefaultPermissionsForDatasources(projectId, permissions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addDefaultPermissionsForDatasources(siteId, projectId, permissions, opts);
    }

	addDefaultPermissionsForFlows(projectId, permissions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addDefaultPermissionsForFlows(siteId, projectId, permissions, opts);
    }

	addViewPermissions(viewId, permissions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addViewPermissions(siteId, viewId, permissions, opts);
    }

	addWorkbookPermissions(workbookId, permissions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addWorkbookPermissions(siteId, workbookId, permissions, opts);
    }

	addWorkbookToSchedule(scheduleId, task, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addWorkbookToSchedule(siteId, scheduleId, task, opts);
    }

	queryDataSourcePermissions(datasourceId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryDataSourcePermissions(siteId, datasourceId, opts);
    }

	queryProjectPermissions(projectId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryProjectPermissions(siteId, projectId, opts);
    }

	queryDefaultPermissions(projectId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryDefaultPermissions(siteId, projectId, opts);
    }

	queryDefaultPermissionsForDatasources(projectId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryDefaultPermissionsForDatasources(siteId, projectId, opts);
    }

	queryDefaultPermissionsForWorkbooks(projectId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryDefaultPermissionsForWorkbooks(siteId, projectId, opts);
    }

	queryDefaultPermissionsForFlows(projectId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryDefaultPermissionsForFlows(siteId, projectId, opts);
    }

	queryViewPermissions(viewId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryViewPermissions(siteId, viewId, opts);
    }

	queryWorkbookPermissions(workbookId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryWorkbookPermissions(siteId, workbookId, opts);
    }

	deleteDataSourcePermission(datasourceId, groupId, userId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteDataSourcePermission(siteId, datasourceId, groupId, userId, capabilityName, capabilityMode, opts);
    }

	deleteDataSourcePermissionForGroup(datasourceId, groupId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteDataSourcePermissionForGroup(siteId, datasourceId, groupId, capabilityName, capabilityMode, opts);
    }

	deleteDataSorucePermissionForUser(datasourceId, userId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteDataSorucePermissionForUser(siteId, datasourceId, userId, capabilityName, capabilityMode, opts);
    }

	deleteProjectPermission(projectId, groupId, userId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteProjectPermission(siteId, projectId, groupId, userId, capabilityName, capabilityMode, opts);
    }

	deleteProjectPermissionForGroup(projectId, groupId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteProjectPermissionForGroup(siteId, projectId, groupId, capabilityName, capabilityMode, opts);
    }

	deleteProjectPermissionForUser(projectId, userId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteProjectPermissionForUser(siteId, projectId, userId, capabilityName, capabilityMode, opts);
    }

	deleteDefaultPermission(projectId, groupId, userId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteDefaultPermission(siteId, projectId, groupId, userId, capabilityName, capabilityMode, opts);
    }

	deleteDefaultWorkbookPermissionForGroup(projectId, groupId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteDefaultWorkbookPermissionForGroup(siteId, projectId, groupId, capabilityName, capabilityMode, opts);
    }

	deleteDefaultWorkbookPermissionForUser(projectId, userId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteDefaultWorkbookPermissionForUser(siteId, projectId, userId, capabilityName, capabilityMode, opts);
    }

	deleteDefaultDatasourcePermissionsForGroup(projectId, groupId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteDefaultDatasourcePermissionsForGroup(siteId, projectId, groupId, capabilityName, capabilityMode, opts);
    }

	deleteDefaultFlowPermissionForGroup(projectId, groupId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteDefaultFlowPermissionForGroup(siteId, projectId, groupId, capabilityName, capabilityMode, opts);
    }

	deleteDefaultFlowPermissionForUser(projectId, userId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteDefaultFlowPermissionForUser(siteId, projectId, userId, capabilityName, capabilityMode, opts);
    }

	deleteViewPermission(viewId, groupId, userId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteViewPermission(siteId, viewId, groupId, userId, capabilityName, capabilityMode, opts);
    }

	deleteViewPermissionForGroup(viewId, groupId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteViewPermissionForGroup(siteId, viewId, groupId, capabilityName, capabilityMode, opts);
    }

	deleteViewPermissionForUser(viewId, userId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteViewPermissionForUser(siteId, viewId, userId, capabilityName, capabilityMode, opts);
    }

	deleteWorkbookPermission(workbookId, groupId, userId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteWorkbookPermission(siteId, workbookId, groupId, userId, capabilityName, capabilityMode, opts);
    }

	deleteWorkbookPermissionForGroup(workbookId, groupId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteWorkbookPermissionForGroup(siteId, workbookId, groupId, capabilityName, capabilityMode, opts);
    }

	deleteWorkbookPermissionForUser(workbookId, userId, capabilityName, capabilityMode, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteWorkbookPermissionForUser(siteId, workbookId, userId, capabilityName, capabilityMode, opts);
    }

	addDataSourceToSchedule(scheduleId, task, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addDataSourceToSchedule(siteId, scheduleId, task, opts);
    }

	cancelJob(jobId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.cancelJob(siteId, jobId, opts);
    }

	queryJob(jobId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryJob(siteId, jobId, opts);
    }

	queryJobs(callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryJobs(siteId, opts);
    }

	getExtractRefreshTask(taskId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.getExtractRefreshTask(siteId, taskId, opts);
    }

	getExtractRefreshTasks(callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.getExtractRefreshTasks(siteId, opts);
    }

	createSchedule(schedule, callback) {
        const opts = this.execOpts({ callback: callback });
        return api.createSchedule(schedule, opts);
    }

	queryExtractRefreshTasks(scheduleId, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.queryExtractRefreshTasks(siteId, scheduleId, queryOptions, opts);
    }

	querySchedules(queryOptions, callback) {
        const opts = this.execOpts({ callback: callback });
        return api.querySchedules(queryOptions, opts);
    }

	runExtractRefreshTask(taskId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.runExtractRefreshTask(siteId, taskId, opts);
    }

	updateSchedule(scheduleId, schedule, callback) {
        const opts = this.execOpts({ callback: callback });
        return api.updateSchedule(scheduleId, schedule, opts);
    }

	deleteSchedule(scheduleId, callback) {
        const opts = this.execOpts({ callback: callback });
        return api.deleteSchedule(scheduleId, opts);
    }

	deleteDataAccelerationTask(dataAccelerationId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteDataAccelerationTask(siteId, dataAccelerationId, opts);
    }

	getDataAccelerationTasks(callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.getDataAccelerationTasks(siteId, opts);
    }

	createSubscription(subscription, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.createSubscription(siteId, subscription, opts);
    }

	querySubscription(subscriptionId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.querySubscription(siteId, subscriptionId, opts);
    }

	querySubscriptions(queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.querySubscriptions(siteId, queryOptions, opts);
    }

	updateSubscription(subscriptionId, subscription, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.updateSubscription(siteId, subscriptionId, subscription, opts);
    }

	deleteSubscription(subscriptionId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteSubscription(siteId, subscriptionId, opts);
    }

	addDataSourceToFavorites(userId, favorite, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addDataSourceToFavorites(siteId, userId, favorite, opts);
    }

	addProjectToFavorites(userId, favorite, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addProjectToFavorites(siteId, userId, favorite, opts);
    }

	addViewToFavorites(userId, favorite, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addViewToFavorites(siteId, userId, favorite, opts);
    }

	addWorkbookToFavorites(userId, favorite, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.addWorkbookToFavorites(siteId, userId, favorite, opts);
    }

	deleteDataSourceFromFavorites(userId, datasourceId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteDataSourceFromFavorites(siteId, userId, datasourceId, opts);
    }

	deleteProjectFromFavorites(userId, projectId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteProjectFromFavorites(siteId, userId, projectId, opts);
    }

	deleteViewFromFavorites(userId, viewId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteViewFromFavorites(siteId, userId, viewId, opts);
    }

	deleteWorkbookFromFavorites(userId, workbookId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteWorkbookFromFavorites(siteId, userId, workbookId, opts);
    }

	getFavoritesForUser(userId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.getFavoritesForUser(siteId, userId, opts);
    }

	initiateFileUpload(callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.initiateFileUpload(siteId, opts);
    }

	appendToFileUpload(uploadSessionId, file, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.appendToFileUpload(siteId, uploadSessionId, file, opts);
    }

	serverInfo(callback) {
        const opts = this.execOpts({ callback: callback });
        return api.serverInfo(opts);
    }

	getCurrentServerSessionDetails(callback) {
        const opts = this.execOpts({ callback: callback });
        return api.getCurrentServerSessionDetails(opts);
    }

	createAnExtractForADataSource(datasourceId, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.createAnExtractForADataSource(siteId, datasourceId, queryOptions, opts);
    }

	deleteAnExtractFromADataSource(datasourceId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteAnExtractFromADataSource(siteId, datasourceId, opts);
    }

	createExtractsForEmbeddedDataSourcesInAWorkbook(workbookId, datasources, queryOptions, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.createExtractsForEmbeddedDataSourcesInAWorkbook(siteId, workbookId, datasources, queryOptions, opts);
    }

	deleteExtractsForEmbeddedDataSourcesInAWorkbook(workbookId, datasources, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteExtractsForEmbeddedDataSourcesInAWorkbook(siteId, workbookId, datasources, opts);
    }

	deleteExtractRefreshTask(taskId, callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.deleteExtractRefreshTask(siteId, taskId, opts);
    }

	encryptExtractsInASite(callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.encryptExtractsInASite(siteId, opts);
    }

	decryptExtractsInASite(callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.decryptExtractsInASite(siteId, opts);
    }

	reencryptExtractsInASite(callback) {
        const siteId = this.getSite();
        const opts = this.execOpts({ callback: callback });
        return api.reencryptExtractsInASite(siteId, opts);
    }
}
