import { ApiCalls } from "../api-unified";

const api = new ApiCalls();
describe("Api Definition Tests", () => {
    test("signIn is defined", () => {
        expect(api.signIn).toBeDefined();
    });
    test("signOut is defined", () => {
        expect(api.signOut).toBeDefined();
    });
    test("switchSite is defined", () => {
        expect(api.switchSite).toBeDefined();
    });
    test("createSite is defined", () => {
        expect(api.createSite).toBeDefined();
    });
    test("querySite is defined", () => {
        expect(api.querySite).toBeDefined();
    });
    test("querySiteByID is defined", () => {
        expect(api.querySiteByID).toBeDefined();
    });
    test("querySiteByName is defined", () => {
        expect(api.querySiteByName).toBeDefined();
    });
    test("querySiteByContentUrl is defined", () => {
        expect(api.querySiteByContentUrl).toBeDefined();
    });
    test("querySites is defined", () => {
        expect(api.querySites).toBeDefined();
    });
    test("getRecentlyViewedForSite is defined", () => {
        expect(api.getRecentlyViewedForSite).toBeDefined();
    });
    test("queryViewsForSite is defined", () => {
        expect(api.queryViewsForSite).toBeDefined();
    });
    test("updateSite is defined", () => {
        expect(api.updateSite).toBeDefined();
    });
    test("deleteSite is defined", () => {
        expect(api.deleteSite).toBeDefined();
    });
    test("deleteSiteByID is defined", () => {
        expect(api.deleteSiteByID).toBeDefined();
    });
    test("deleteSiteByName is defined", () => {
        expect(api.deleteSiteByName).toBeDefined();
    });
    test("deleteSiteByContentUrl is defined", () => {
        expect(api.deleteSiteByContentUrl).toBeDefined();
    });
    test("deleteDataDrivenAlert is defined", () => {
        expect(api.deleteDataDrivenAlert).toBeDefined();
    });
    test("queryDataDrivenAlertDetails is defined", () => {
        expect(api.queryDataDrivenAlertDetails).toBeDefined();
    });
    test("queryDataDrivenAlerts is defined", () => {
        expect(api.queryDataDrivenAlerts).toBeDefined();
    });
    test("addUserToDataDrivenAlert is defined", () => {
        expect(api.addUserToDataDrivenAlert).toBeDefined();
    });
    test("deleteUserFromDataDrivenAlert is defined", () => {
        expect(api.deleteUserFromDataDrivenAlert).toBeDefined();
    });
    test("updateDataDrivenAlert is defined", () => {
        expect(api.updateDataDrivenAlert).toBeDefined();
    });
    test("addFlowPermissions is defined", () => {
        expect(api.addFlowPermissions).toBeDefined();
    });
    test("addFlowTaskToSchedule is defined", () => {
        expect(api.addFlowTaskToSchedule).toBeDefined();
    });
    test("deleteFlow is defined", () => {
        expect(api.deleteFlow).toBeDefined();
    });
    test("deleteFlowPermission is defined", () => {
        expect(api.deleteFlowPermission).toBeDefined();
    });
    test("deleteFlowPermissionsForGroup is defined", () => {
        expect(api.deleteFlowPermissionsForGroup).toBeDefined();
    });
    test("deleteFlowPermissionsForUser is defined", () => {
        expect(api.deleteFlowPermissionsForUser).toBeDefined();
    });
    test("downloadFlow is defined", () => {
        expect(api.downloadFlow).toBeDefined();
    });
    test("getFlowRunTask is defined", () => {
        expect(api.getFlowRunTask).toBeDefined();
    });
    test("getFlowRunTasks is defined", () => {
        expect(api.getFlowRunTasks).toBeDefined();
    });
    test("publishFlow is defined", () => {
        expect(api.publishFlow).toBeDefined();
    });
    test("queryFlow is defined", () => {
        expect(api.queryFlow).toBeDefined();
    });
    test("queryFlowConnections is defined", () => {
        expect(api.queryFlowConnections).toBeDefined();
    });
    test("queryFlowPermissions is defined", () => {
        expect(api.queryFlowPermissions).toBeDefined();
    });
    test("queryFlowsForSite is defined", () => {
        expect(api.queryFlowsForSite).toBeDefined();
    });
    test("queryFlowsForUser is defined", () => {
        expect(api.queryFlowsForUser).toBeDefined();
    });
    test("runFlowTask is defined", () => {
        expect(api.runFlowTask).toBeDefined();
    });
    test("updateFlow is defined", () => {
        expect(api.updateFlow).toBeDefined();
    });
    test("updateFlowConnection is defined", () => {
        expect(api.updateFlowConnection).toBeDefined();
    });
    test("createProject is defined", () => {
        expect(api.createProject).toBeDefined();
    });
    test("queryProjects is defined", () => {
        expect(api.queryProjects).toBeDefined();
    });
    test("updateProject is defined", () => {
        expect(api.updateProject).toBeDefined();
    });
    test("deleteProject is defined", () => {
        expect(api.deleteProject).toBeDefined();
    });
    test("publishWorkbook is defined", () => {
        expect(api.publishWorkbook).toBeDefined();
    });
    test("addTagsToView is defined", () => {
        expect(api.addTagsToView).toBeDefined();
    });
    test("addTagsToWorkbook is defined", () => {
        expect(api.addTagsToWorkbook).toBeDefined();
    });
    test("queryViewsForWorkbook is defined", () => {
        expect(api.queryViewsForWorkbook).toBeDefined();
    });
    test("queryViewData is defined", () => {
        expect(api.queryViewData).toBeDefined();
    });
    test("queryViewImage is defined", () => {
        expect(api.queryViewImage).toBeDefined();
    });
    test("queryViewPDF is defined", () => {
        expect(api.queryViewPDF).toBeDefined();
    });
    test("queryViewPreviewImage is defined", () => {
        expect(api.queryViewPreviewImage).toBeDefined();
    });
    test("queryWorkbook is defined", () => {
        expect(api.queryWorkbook).toBeDefined();
    });
    test("queryWorkbookConnections is defined", () => {
        expect(api.queryWorkbookConnections).toBeDefined();
    });
    test("getView is defined", () => {
        expect(api.getView).toBeDefined();
    });
    test("getViewByPath is defined", () => {
        expect(api.getViewByPath).toBeDefined();
    });
    test("getViewRecommendations is defined", () => {
        expect(api.getViewRecommendations).toBeDefined();
    });
    test("getWorkbookRevisions is defined", () => {
        expect(api.getWorkbookRevisions).toBeDefined();
    });
    test("hideViewRecommendations is defined", () => {
        expect(api.hideViewRecommendations).toBeDefined();
    });
    test("unhideViewRecommendations is defined", () => {
        expect(api.unhideViewRecommendations).toBeDefined();
    });
    test("queryWorkbookPreviewImage is defined", () => {
        expect(api.queryWorkbookPreviewImage).toBeDefined();
    });
    test("queryWorkbooksForSite is defined", () => {
        expect(api.queryWorkbooksForSite).toBeDefined();
    });
    test("queryWorkbooksForUser is defined", () => {
        expect(api.queryWorkbooksForUser).toBeDefined();
    });
    test("downloadViewCrosstabExcel is defined", () => {
        expect(api.downloadViewCrosstabExcel).toBeDefined();
    });
    test("downloadWorkbook is defined", () => {
        expect(api.downloadWorkbook).toBeDefined();
    });
    test("downloadWorkbookPDF is defined", () => {
        expect(api.downloadWorkbookPDF).toBeDefined();
    });
    test("downloadWorkbookPowerpoint is defined", () => {
        expect(api.downloadWorkbookPowerpoint).toBeDefined();
    });
    test("downloadWorkbookRevision is defined", () => {
        expect(api.downloadWorkbookRevision).toBeDefined();
    });
    test("updateWorkbook is defined", () => {
        expect(api.updateWorkbook).toBeDefined();
    });
    test("updateWorkbookConnection is defined", () => {
        expect(api.updateWorkbookConnection).toBeDefined();
    });
    test("updateWorkbookNow is defined", () => {
        expect(api.updateWorkbookNow).toBeDefined();
    });
    test("deleteWorkbook is defined", () => {
        expect(api.deleteWorkbook).toBeDefined();
    });
    test("deleteTagFromView is defined", () => {
        expect(api.deleteTagFromView).toBeDefined();
    });
    test("deleteTagFromWorkbook is defined", () => {
        expect(api.deleteTagFromWorkbook).toBeDefined();
    });
    test("getDataAccelerationReportForASite is defined", () => {
        expect(api.getDataAccelerationReportForASite).toBeDefined();
    });
    test("publishDataSource is defined", () => {
        expect(api.publishDataSource).toBeDefined();
    });
    test("addTagsToDataSource is defined", () => {
        expect(api.addTagsToDataSource).toBeDefined();
    });
    test("deleteTagFromDataSource is defined", () => {
        expect(api.deleteTagFromDataSource).toBeDefined();
    });
    test("queryDataSource is defined", () => {
        expect(api.queryDataSource).toBeDefined();
    });
    test("queryDataSources is defined", () => {
        expect(api.queryDataSources).toBeDefined();
    });
    test("queryDataSourceConnections is defined", () => {
        expect(api.queryDataSourceConnections).toBeDefined();
    });
    test("getDataSourceRevisions is defined", () => {
        expect(api.getDataSourceRevisions).toBeDefined();
    });
    test("downloadDataSource is defined", () => {
        expect(api.downloadDataSource).toBeDefined();
    });
    test("downloadDataSourceRevision is defined", () => {
        expect(api.downloadDataSourceRevision).toBeDefined();
    });
    test("updateDataSource is defined", () => {
        expect(api.updateDataSource).toBeDefined();
    });
    test("updateDataSourceConnection is defined", () => {
        expect(api.updateDataSourceConnection).toBeDefined();
    });
    test("updateDataSourceNow is defined", () => {
        expect(api.updateDataSourceNow).toBeDefined();
    });
    test("deleteDataSource is defined", () => {
        expect(api.deleteDataSource).toBeDefined();
    });
    test("removeDataSourceRevision is defined", () => {
        expect(api.removeDataSourceRevision).toBeDefined();
    });
    test("createGroup is defined", () => {
        expect(api.createGroup).toBeDefined();
    });
    test("addUserToGroup is defined", () => {
        expect(api.addUserToGroup).toBeDefined();
    });
    test("addUserToSite is defined", () => {
        expect(api.addUserToSite).toBeDefined();
    });
    test("getGroupsForAUser is defined", () => {
        expect(api.getGroupsForAUser).toBeDefined();
    });
    test("getUsersInGroup is defined", () => {
        expect(api.getUsersInGroup).toBeDefined();
    });
    test("getUsersOnSite is defined", () => {
        expect(api.getUsersOnSite).toBeDefined();
    });
    test("queryGroups is defined", () => {
        expect(api.queryGroups).toBeDefined();
    });
    test("queryUserOnSite is defined", () => {
        expect(api.queryUserOnSite).toBeDefined();
    });
    test("updateGroup is defined", () => {
        expect(api.updateGroup).toBeDefined();
    });
    test("updateUser is defined", () => {
        expect(api.updateUser).toBeDefined();
    });
    test("removeUserFromGroup is defined", () => {
        expect(api.removeUserFromGroup).toBeDefined();
    });
    test("removeUserFromSite is defined", () => {
        expect(api.removeUserFromSite).toBeDefined();
    });
    test("deleteGroup is defined", () => {
        expect(api.deleteGroup).toBeDefined();
    });
    test("queryDatabase is defined", () => {
        expect(api.queryDatabase).toBeDefined();
    });
    test("queryDatabases is defined", () => {
        expect(api.queryDatabases).toBeDefined();
    });
    test("updateDatabase is defined", () => {
        expect(api.updateDatabase).toBeDefined();
    });
    test("removeDatabase is defined", () => {
        expect(api.removeDatabase).toBeDefined();
    });
    test("addDatabasePermissions is defined", () => {
        expect(api.addDatabasePermissions).toBeDefined();
    });
    test("queryDatabasePermissions is defined", () => {
        expect(api.queryDatabasePermissions).toBeDefined();
    });
    test("addDefaultDatabasePermissions is defined", () => {
        expect(api.addDefaultDatabasePermissions).toBeDefined();
    });
    test("queryDefaultDatabasePermissions is defined", () => {
        expect(api.queryDefaultDatabasePermissions).toBeDefined();
    });
    test("deleteDatabasePermissions is defined", () => {
        expect(api.deleteDatabasePermissions).toBeDefined();
    });
    test("deleteDatabasePermissionsForGroup is defined", () => {
        expect(api.deleteDatabasePermissionsForGroup).toBeDefined();
    });
    test("deleteDatabasePermissionsForUser is defined", () => {
        expect(api.deleteDatabasePermissionsForUser).toBeDefined();
    });
    test("deleteDefaultDatabasePermissions is defined", () => {
        expect(api.deleteDefaultDatabasePermissions).toBeDefined();
    });
    test("deleteDefaultDatabasePermissionsForUser is defined", () => {
        expect(api.deleteDefaultDatabasePermissionsForUser).toBeDefined();
    });
    test("deleteDefaultDatabasePermissionsForGroup is defined", () => {
        expect(api.deleteDefaultDatabasePermissionsForGroup).toBeDefined();
    });
    test("queryTable is defined", () => {
        expect(api.queryTable).toBeDefined();
    });
    test("queryTables is defined", () => {
        expect(api.queryTables).toBeDefined();
    });
    test("updateTable is defined", () => {
        expect(api.updateTable).toBeDefined();
    });
    test("removeTable is defined", () => {
        expect(api.removeTable).toBeDefined();
    });
    test("addTablePermissions is defined", () => {
        expect(api.addTablePermissions).toBeDefined();
    });
    test("queryTablePermissions is defined", () => {
        expect(api.queryTablePermissions).toBeDefined();
    });
    test("deleteTablePermissions is defined", () => {
        expect(api.deleteTablePermissions).toBeDefined();
    });
    test("queryColumnInATable is defined", () => {
        expect(api.queryColumnInATable).toBeDefined();
    });
    test("queryColumnsInATable is defined", () => {
        expect(api.queryColumnsInATable).toBeDefined();
    });
    test("updateColumn is defined", () => {
        expect(api.updateColumn).toBeDefined();
    });
    test("removeColumn is defined", () => {
        expect(api.removeColumn).toBeDefined();
    });
    test("addDataQualityWarning is defined", () => {
        expect(api.addDataQualityWarning).toBeDefined();
    });
    test("queryDataQualityWarningByID is defined", () => {
        expect(api.queryDataQualityWarningByID).toBeDefined();
    });
    test("queryDataQualityWarningByContent is defined", () => {
        expect(api.queryDataQualityWarningByContent).toBeDefined();
    });
    test("updateDataQualityWarning is defined", () => {
        expect(api.updateDataQualityWarning).toBeDefined();
    });
    test("deleteDataQualityWarningByID is defined", () => {
        expect(api.deleteDataQualityWarningByID).toBeDefined();
    });
    test("deleteDataQualityWarningByContent is defined", () => {
        expect(api.deleteDataQualityWarningByContent).toBeDefined();
    });
    test("addTagsToDatabase is defined", () => {
        expect(api.addTagsToDatabase).toBeDefined();
    });
    test("addTagsToTable is defined", () => {
        expect(api.addTagsToTable).toBeDefined();
    });
    test("addTagsToColumn is defined", () => {
        expect(api.addTagsToColumn).toBeDefined();
    });
    test("batchAddTags is defined", () => {
        expect(api.batchAddTags).toBeDefined();
    });
    test("deleteTagFromDatabase is defined", () => {
        expect(api.deleteTagFromDatabase).toBeDefined();
    });
    test("deleteTagFromTable is defined", () => {
        expect(api.deleteTagFromTable).toBeDefined();
    });
    test("deleteTagFromColumn is defined", () => {
        expect(api.deleteTagFromColumn).toBeDefined();
    });
    test("batchDeleteTags is defined", () => {
        expect(api.batchDeleteTags).toBeDefined();
    });
    test("removeWorkbookRevision is defined", () => {
        expect(api.removeWorkbookRevision).toBeDefined();
    });
    test("addDataSourcePermissions is defined", () => {
        expect(api.addDataSourcePermissions).toBeDefined();
    });
    test("addProjectPermissions is defined", () => {
        expect(api.addProjectPermissions).toBeDefined();
    });
    test("addDefaultPermissions is defined", () => {
        expect(api.addDefaultPermissions).toBeDefined();
    });
    test("addDefaultPermissionsForWorkbooks is defined", () => {
        expect(api.addDefaultPermissionsForWorkbooks).toBeDefined();
    });
    test("addDefaultPermissionsForDatasources is defined", () => {
        expect(api.addDefaultPermissionsForDatasources).toBeDefined();
    });
    test("addDefaultPermissionsForFlows is defined", () => {
        expect(api.addDefaultPermissionsForFlows).toBeDefined();
    });
    test("addViewPermissions is defined", () => {
        expect(api.addViewPermissions).toBeDefined();
    });
    test("addWorkbookPermissions is defined", () => {
        expect(api.addWorkbookPermissions).toBeDefined();
    });
    test("addWorkbookToSchedule is defined", () => {
        expect(api.addWorkbookToSchedule).toBeDefined();
    });
    test("queryDataSourcePermissions is defined", () => {
        expect(api.queryDataSourcePermissions).toBeDefined();
    });
    test("queryProjectPermissions is defined", () => {
        expect(api.queryProjectPermissions).toBeDefined();
    });
    test("queryDefaultPermissions is defined", () => {
        expect(api.queryDefaultPermissions).toBeDefined();
    });
    test("queryDefaultPermissionsForDatasources is defined", () => {
        expect(api.queryDefaultPermissionsForDatasources).toBeDefined();
    });
    test("queryDefaultPermissionsForWorkbooks is defined", () => {
        expect(api.queryDefaultPermissionsForWorkbooks).toBeDefined();
    });
    test("queryDefaultPermissionsForFlows is defined", () => {
        expect(api.queryDefaultPermissionsForFlows).toBeDefined();
    });
    test("queryViewPermissions is defined", () => {
        expect(api.queryViewPermissions).toBeDefined();
    });
    test("queryWorkbookPermissions is defined", () => {
        expect(api.queryWorkbookPermissions).toBeDefined();
    });
    test("deleteDataSourcePermission is defined", () => {
        expect(api.deleteDataSourcePermission).toBeDefined();
    });
    test("deleteDataSourcePermissionForGroup is defined", () => {
        expect(api.deleteDataSourcePermissionForGroup).toBeDefined();
    });
    test("deleteDataSorucePermissionForUser is defined", () => {
        expect(api.deleteDataSorucePermissionForUser).toBeDefined();
    });
    test("deleteProjectPermission is defined", () => {
        expect(api.deleteProjectPermission).toBeDefined();
    });
    test("deleteProjectPermissionForGroup is defined", () => {
        expect(api.deleteProjectPermissionForGroup).toBeDefined();
    });
    test("deleteProjectPermissionForUser is defined", () => {
        expect(api.deleteProjectPermissionForUser).toBeDefined();
    });
    test("deleteDefaultPermission is defined", () => {
        expect(api.deleteDefaultPermission).toBeDefined();
    });
    test("deleteDefaultWorkbookPermissionForGroup is defined", () => {
        expect(api.deleteDefaultWorkbookPermissionForGroup).toBeDefined();
    });
    test("deleteDefaultWorkbookPermissionForUser is defined", () => {
        expect(api.deleteDefaultWorkbookPermissionForUser).toBeDefined();
    });
    test("deleteDefaultDatasourcePermissionsForGroup is defined", () => {
        expect(api.deleteDefaultDatasourcePermissionsForGroup).toBeDefined();
    });
    test("deleteDefaultFlowPermissionForGroup is defined", () => {
        expect(api.deleteDefaultFlowPermissionForGroup).toBeDefined();
    });
    test("deleteDefaultFlowPermissionForUser is defined", () => {
        expect(api.deleteDefaultFlowPermissionForUser).toBeDefined();
    });
    test("deleteViewPermission is defined", () => {
        expect(api.deleteViewPermission).toBeDefined();
    });
    test("deleteViewPermissionForGroup is defined", () => {
        expect(api.deleteViewPermissionForGroup).toBeDefined();
    });
    test("deleteViewPermissionForUser is defined", () => {
        expect(api.deleteViewPermissionForUser).toBeDefined();
    });
    test("deleteWorkbookPermission is defined", () => {
        expect(api.deleteWorkbookPermission).toBeDefined();
    });
    test("deleteWorkbookPermissionForGroup is defined", () => {
        expect(api.deleteWorkbookPermissionForGroup).toBeDefined();
    });
    test("deleteWorkbookPermissionForUser is defined", () => {
        expect(api.deleteWorkbookPermissionForUser).toBeDefined();
    });
    test("addDataSourceToSchedule is defined", () => {
        expect(api.addDataSourceToSchedule).toBeDefined();
    });
    test("cancelJob is defined", () => {
        expect(api.cancelJob).toBeDefined();
    });
    test("queryJob is defined", () => {
        expect(api.queryJob).toBeDefined();
    });
    test("queryJobs is defined", () => {
        expect(api.queryJobs).toBeDefined();
    });
    test("getExtractRefreshTask is defined", () => {
        expect(api.getExtractRefreshTask).toBeDefined();
    });
    test("getExtractRefreshTasks is defined", () => {
        expect(api.getExtractRefreshTasks).toBeDefined();
    });
    test("createSchedule is defined", () => {
        expect(api.createSchedule).toBeDefined();
    });
    test("queryExtractRefreshTasks is defined", () => {
        expect(api.queryExtractRefreshTasks).toBeDefined();
    });
    test("querySchedules is defined", () => {
        expect(api.querySchedules).toBeDefined();
    });
    test("runExtractRefreshTask is defined", () => {
        expect(api.runExtractRefreshTask).toBeDefined();
    });
    test("updateSchedule is defined", () => {
        expect(api.updateSchedule).toBeDefined();
    });
    test("deleteSchedule is defined", () => {
        expect(api.deleteSchedule).toBeDefined();
    });
    test("deleteDataAccelerationTask is defined", () => {
        expect(api.deleteDataAccelerationTask).toBeDefined();
    });
    test("getDataAccelerationTasks is defined", () => {
        expect(api.getDataAccelerationTasks).toBeDefined();
    });
    test("createSubscription is defined", () => {
        expect(api.createSubscription).toBeDefined();
    });
    test("querySubscription is defined", () => {
        expect(api.querySubscription).toBeDefined();
    });
    test("querySubscriptions is defined", () => {
        expect(api.querySubscriptions).toBeDefined();
    });
    test("updateSubscription is defined", () => {
        expect(api.updateSubscription).toBeDefined();
    });
    test("deleteSubscription is defined", () => {
        expect(api.deleteSubscription).toBeDefined();
    });
    test("addDataSourceToFavorites is defined", () => {
        expect(api.addDataSourceToFavorites).toBeDefined();
    });
    test("addProjectToFavorites is defined", () => {
        expect(api.addProjectToFavorites).toBeDefined();
    });
    test("addViewToFavorites is defined", () => {
        expect(api.addViewToFavorites).toBeDefined();
    });
    test("addWorkbookToFavorites is defined", () => {
        expect(api.addWorkbookToFavorites).toBeDefined();
    });
    test("deleteDataSourceFromFavorites is defined", () => {
        expect(api.deleteDataSourceFromFavorites).toBeDefined();
    });
    test("deleteProjectFromFavorites is defined", () => {
        expect(api.deleteProjectFromFavorites).toBeDefined();
    });
    test("deleteViewFromFavorites is defined", () => {
        expect(api.deleteViewFromFavorites).toBeDefined();
    });
    test("deleteWorkbookFromFavorites is defined", () => {
        expect(api.deleteWorkbookFromFavorites).toBeDefined();
    });
    test("getFavoritesForUser is defined", () => {
        expect(api.getFavoritesForUser).toBeDefined();
    });
    test("initiateFileUpload is defined", () => {
        expect(api.initiateFileUpload).toBeDefined();
    });
    test("appendToFileUpload is defined", () => {
        expect(api.appendToFileUpload).toBeDefined();
    });
    test("serverInfo is defined", () => {
        expect(api.serverInfo).toBeDefined();
    });
    test("getCurrentServerSessionDetails is defined", () => {
        expect(api.getCurrentServerSessionDetails).toBeDefined();
    });
    test("createAnExtractForADataSource is defined", () => {
        expect(api.createAnExtractForADataSource).toBeDefined();
    });
    test("deleteAnExtractFromADataSource is defined", () => {
        expect(api.deleteAnExtractFromADataSource).toBeDefined();
    });
    test("createExtractsForEmbeddedDataSourcesInAWorkbook is defined", () => {
        expect(
            api.createExtractsForEmbeddedDataSourcesInAWorkbook
        ).toBeDefined();
    });
    test("deleteExtractsForEmbeddedDataSourcesInAWorkbook is defined", () => {
        expect(
            api.deleteExtractsForEmbeddedDataSourcesInAWorkbook
        ).toBeDefined();
    });
    test("deleteExtractRefreshTask is defined", () => {
        expect(api.deleteExtractRefreshTask).toBeDefined();
    });
    test("encryptExtractsInASite is defined", () => {
        expect(api.encryptExtractsInASite).toBeDefined();
    });
    test("decryptExtractsInASite is defined", () => {
        expect(api.decryptExtractsInASite).toBeDefined();
    });
    test("reencryptExtractsInASite is defined", () => {
        expect(api.reencryptExtractsInASite).toBeDefined();
   
    });
});
