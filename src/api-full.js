/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */


import { AuthenticationRequest, AuthenticatedRequest } from './request'
import * as methods from './execute'

/* 
the base url and authentication token can be stored here at a module level
if you are choosing to access the api methods directly for convenience, but the
baseURL and token will usually be managed by the client or on a per-request basis
*/

let baseURL;
let authenticationToken;
const defaultOptions = { baseURL: null, http:methods };
export function setBaseURL(url) { baseURL=url; }
export function setToken(token) { authenticationToken=token; }
export function getBaseURL(options) { return getOpt("baseURL", options, baseURL); }
export function getToken(options) { return getOpt("token", options, authenticationToken); }
function getOpt(name,opts,dflt) { return (opts && opts.hasOwnProperty(name)) ? opts[name] : dflt; }

export function signIn(credentials, options=defaultOptions) { 
    return AuthenticationRequest.builder(getBaseURL(options))
        .withPath(`/api/{apiVersion}/auth/signin`)
        .withBodyParameters(credentials)
        .build()
        .execute(options.http.post, options.callback);
}

export function signOut(options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/auth/signout`)
        .build()
        .execute(options.http.post, options.callback);
}

export function switchSite(site, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/auth/switchSite`)
        .withBodyParameters(site)
        .build()
        .execute(options.http.post, options.callback);
}

export function createSite(site, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites`)
        .withBodyParameters(site)
        .build()
        .execute(options.http.post, options.callback);
}

export function querySite(siteId, siteName, contentUrl, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function querySiteByID(siteId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function querySiteByName(siteName, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteName}`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function querySiteByContentUrl(contentUrl, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${contentUrl}`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function querySites(queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function getRecentlyViewedForSite(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/content/recent`)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryViewsForSite(siteId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function updateSite(siteId, site, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}`)
        .withBodyParameters(site)
        .build()
        .execute(options.http.put, options.callback);
}

export function deleteSite(siteId, siteName, contentUrl, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteSiteByID(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteSiteByName(siteName, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteName}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteSiteByContentUrl(contentUrl, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${contentUrl}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteDataDrivenAlert(siteId, dataAlertId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/dataAlerts/${dataAlertId}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function queryDataDrivenAlertDetails(siteId, dataAlertId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/dataAlerts/${dataAlertId}`)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryDataDrivenAlerts(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/dataAlerts`)
        .build()
        .execute(options.http.get, options.callback);
}

export function addUserToDataDrivenAlert(siteId, dataAlertId, user, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/dataAlerts/${dataAlertId}/users`)
        .withBodyParameters(user)
        .build()
        .execute(options.http.post, options.callback);
}

export function deleteUserFromDataDrivenAlert(siteId, dataAlertId, userId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/dataAlerts/${dataAlertId}/users/${userId}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function updateDataDrivenAlert(siteId, dataAlertId, dataAlert, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/dataAlerts/${dataAlertId}`)
        .withBodyParameters(dataAlert)
        .build()
        .execute(options.http.put, options.callback);
}

export function addFlowPermissions(siteId, flowId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows/${flowId}/permissions`)
        .withQueryParameters(queryOptions)
        .withBodyParameters(permissions)
        .build()
        .execute(options.http.put, options.callback);
}

export function addFlowTaskToSchedule(siteId, scheduleId, task, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/schedules/${scheduleId}/flows`)
        .withBodyParameters(task)
        .build()
        .execute(options.http.put, options.callback);
}

export function deleteFlow(siteId, flowId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows/${flowId}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteFlowPermission(siteId, flowId, groupId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows/${flowId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteFlowPermissionsForGroup(siteId, flowId, groupId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows/${flowId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteFlowPermissionsForUser(siteId, flowId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows/${flowId}/permissions/users/${userId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function downloadFlow(siteId, flowId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows/${flowId}/content`)
        .build()
        .execute(options.http.get, options.callback);
}

export function getFlowRunTask(siteId, taskId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/tasks/runFlow/${taskId}`)
        .build()
        .execute(options.http.get, options.callback);
}

export function getFlowRunTasks(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/tasks/runFlow`)
        .build()
        .execute(options.http.get, options.callback);
}

export function publishFlow(siteId, flow, file, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows`)
        .withHeaders({ "Content-Type": "multipart/mixed" })
        .withQueryParameters(queryOptions)
        .withBodyParameters(flow)
        .withFileParameters({ name: "tableau_flow", file: file })
        .build()
        .execute(options.http.post, options.callback);
}

export function queryFlow(siteId, flowId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows/${flowId}`)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryFlowConnections(siteId, flowId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows/${flowId}/connections`)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryFlowPermissions(siteId, flowId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows/${flowId}/permissions`)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryFlowsForSite(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryFlowsForUser(siteId, userId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/users/${userId}/flows`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function runFlowTask(siteId, taskId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/tasks/runFlow/${taskId}/runNow`)
        .build()
        .execute(options.http.post, options.callback);
}

export function updateFlow(siteId, flowId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows/${flowId}`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.put, options.callback);
}

export function updateFlowConnection(siteId, flowId, connectionId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows/${flowId}/connections/${connectionId}`)
        .build()
        .execute(options.http.put, options.callback);
}

export function createProject(siteId, project, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects`)
        .withQueryParameters(queryOptions)
        .withBodyParameters(project)
        .build()
        .execute(options.http.post, options.callback);
}

export function queryProjects(siteId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function updateProject(siteId, projectId, project, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}`)
        .withQueryParameters(queryOptions)
        .withBodyParameters(project)
        .build()
        .execute(options.http.put, options.callback);
}

export function deleteProject(siteId, projectId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function publishWorkbook(siteId, workbook, file, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks`)
        .withHeaders({ "Content-Type": "multipart/mixed" })
        .withQueryParameters(queryOptions)
        .withBodyParameters(workbook)
        .withFileParameters({ name: "tableau_workbook", file: file })
        .build()
        .execute(options.http.post, options.callback);
}

export function addTagsToView(siteId, viewId, tags, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}/tags`)
        .withBodyParameters(tags)
        .build()
        .execute(options.http.put, options.callback);
}

export function addTagsToWorkbook(siteId, workbookId, tags, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/tags`)
        .withBodyParameters(tags)
        .build()
        .execute(options.http.put, options.callback);
}

export function queryViewsForWorkbook(siteId, workbookId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/views`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryViewData(siteId, viewId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}/data`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryViewImage(siteId, viewId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}/image`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryViewPDF(siteId, viewId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}/pdf`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryViewPreviewImage(siteId, workbookId, viewId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/views/${viewId}/previewImage`)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryWorkbook(siteId, workbookId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}`)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryWorkbookConnections(siteId, workbookId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/connections`)
        .build()
        .execute(options.http.get, options.callback);
}

export function getView(siteId, viewId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}`)
        .build()
        .execute(options.http.get, options.callback);
}

export function getViewByPath(siteId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function getViewRecommendations(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/recommendations/`)
        .build()
        .execute(options.http.get, options.callback);
}

export function getWorkbookRevisions(siteId, workbookId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/revisions`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function hideViewRecommendations(siteId, recommendationDismissal, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/recommendations/dismissals`)
        .withBodyParameters(recommendationDismissal)
        .build()
        .execute(options.http.put, options.callback);
}

export function unhideViewRecommendations(siteId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/recommendations/dismissals/`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.del, options.callback);
}

export function queryWorkbookPreviewImage(siteId, workbookId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/previewImage`)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryWorkbooksForSite(siteId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryWorkbooksForUser(siteId, userId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/users/${userId}/workbooks`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function downloadViewCrosstabExcel(siteId, viewId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}/crosstab/excel`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function downloadWorkbook(siteId, workbookId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/content`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function downloadWorkbookPDF(siteId, workbookId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/pdf`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function downloadWorkbookPowerpoint(siteId, workbookId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/powerpoint`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function downloadWorkbookRevision(siteId, workbookId, revisionNumber, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/revisions/${revisionNumber}/content`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function updateWorkbook(siteId, workbookId, workbook, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}`)
        .withBodyParameters(workbook)
        .build()
        .execute(options.http.put, options.callback);
}

export function updateWorkbookConnection(siteId, workbookId, connectionId, connection, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/connections/${connectionId}`)
        .withBodyParameters(connection)
        .build()
        .execute(options.http.put, options.callback);
}

export function updateWorkbookNow(siteId, workbookId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/refresh`)
        .withBodyParameters()
        .build()
        .execute(options.http.post, options.callback);
}

export function deleteWorkbook(siteId, workbookId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteTagFromView(siteId, viewId, tagName, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}/tags/${tagName}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteTagFromWorkbook(siteId, workbookId, tagName, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/tags/${tagName}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function getDataAccelerationReportForASite(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/dataAccelerationReport`)
        .build()
        .execute(options.http.get, options.callback);
}

export function publishDataSource(siteId, datasource, file, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources`)
        .withHeaders({ "Content-Type": "multipart/mixed" })
        .withQueryParameters(queryOptions)
        .withBodyParameters(datasource)
        .withFileParameters({ name: "tableau_datasource", file: file })
        .build()
        .execute(options.http.post, options.callback);
}

export function addTagsToDataSource(siteId, datasourceId, tags, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/tags`)
        .withBodyParameters(tags)
        .build()
        .execute(options.http.put, options.callback);
}

export function deleteTagFromDataSource(siteId, datasourceId, tagName, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/tags/${tagName}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function queryDataSource(siteId, datasourceId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}`)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryDataSources(siteId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryDataSourceConnections(siteId, datasourceId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/connections`)
        .build()
        .execute(options.http.get, options.callback);
}

export function getDataSourceRevisions(siteId, datasourceId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/revisions`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function downloadDataSource(siteId, datasourceId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/content`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function downloadDataSourceRevision(siteId, datasourceId, revisionNumber, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/revisions/${revisionNumber}/content`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function updateDataSource(siteId, datasourceId, datasource, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}`)
        .withBodyParameters(datasource)
        .build()
        .execute(options.http.put, options.callback);
}

export function updateDataSourceConnection(siteId, datasourceId, connectionId, connection, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/connections/${connectionId}`)
        .withBodyParameters(connection)
        .build()
        .execute(options.http.put, options.callback);
}

export function updateDataSourceNow(siteId, datasourceId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/refresh`)
        .withBodyParameters()
        .build()
        .execute(options.http.post, options.callback);
}

export function deleteDataSource(siteId, datasourceId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function removeDataSourceRevision(siteId, datasourceId, revisionNumber, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/revisions/${revisionNumber}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function createGroup(siteId, group, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/groups`)
        .withQueryParameters(queryOptions)
        .withBodyParameters(group)
        .build()
        .execute(options.http.post, options.callback);
}

export function addUserToGroup(siteId, groupId, user, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/groups/${groupId}/users`)
        .withBodyParameters(user)
        .build()
        .execute(options.http.post, options.callback);
}

export function addUserToSite(siteId, user, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/users`)
        .withBodyParameters(user)
        .build()
        .execute(options.http.post, options.callback);
}

export function getGroupsForAUser(siteId, userId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/users/${userId}/groups`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function getUsersInGroup(siteId, groupId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/groups/${groupId}/users`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function getUsersOnSite(siteId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/users`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryGroups(siteId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/groups`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryUserOnSite(siteId, userId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/users/${userId}`)
        .build()
        .execute(options.http.get, options.callback);
}

export function updateGroup(siteId, groupId, group, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/groups/${groupId}`)
        .withQueryParameters(queryOptions)
        .withBodyParameters(group)
        .build()
        .execute(options.http.put, options.callback);
}

export function updateUser(siteId, userId, user, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/users/${userId}`)
        .withBodyParameters(user)
        .build()
        .execute(options.http.put, options.callback);
}

export function removeUserFromGroup(siteId, groupId, userId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/groups/${groupId}/users/${userId}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function removeUserFromSite(siteId, userId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/users/${userId}`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteGroup(siteId, groupId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/groups/${groupId}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function queryDatabase(siteId, databaseId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}`)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryDatabases(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases`)
        .build()
        .execute(options.http.get, options.callback);
}

export function updateDatabase(siteId, databaseId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}`)
        .withBodyParameters()
        .build()
        .execute(options.http.put, options.callback);
}

export function removeDatabase(siteId, databaseId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function addDatabasePermissions(siteId, databaseId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}/permissions`)
        .withBodyParameters(permissions)
        .build()
        .execute(options.http.put, options.callback);
}

export function queryDatabasePermissions(siteId, databaseId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}/permissions`)
        .build()
        .execute(options.http.get, options.callback);
}

export function addDefaultDatabasePermissions(siteId, databaseId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/databases/${databaseId}/default-permissions/tables`)
        .withBodyParameters(permissions)
        .build()
        .execute(options.http.put, options.callback);
}

export function queryDefaultDatabasePermissions(siteId, databaseId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/databases/${databaseId}/default-permissions/tables`)
        .build()
        .execute(options.http.get, options.callback);
}

export function deleteDatabasePermissions(siteId, databaseId, userId, groupId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}/permissions/users/${userId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteDatabasePermissionsForGroup(siteId, databaseId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}/permissions/users/${userId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteDatabasePermissionsForUser(siteId, databaseId, groupId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteDefaultDatabasePermissions(siteId, databaseId, userId, capabilityMode, groupId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}/default-permissions/tables/users/${userId}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteDefaultDatabasePermissionsForUser(siteId, databaseId, userId, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}/default-permissions/tables/users/${userId}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteDefaultDatabasePermissionsForGroup(siteId, databaseId, capabilityMode, groupId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}/default-permissions/tables/groups/${groupId}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function queryTable(siteId, tableId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables/${tableId}`)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryTables(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables`)
        .build()
        .execute(options.http.get, options.callback);
}

export function updateTable(siteId, tableId, table, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables/${tableId}`)
        .withBodyParameters(table)
        .build()
        .execute(options.http.put, options.callback);
}

export function removeTable(siteId, tableId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables/${tableId}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function addTablePermissions(siteId, tableId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables/${tableId}/permissions`)
        .withBodyParameters(permissions)
        .build()
        .execute(options.http.put, options.callback);
}

export function queryTablePermissions(siteId, tableId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables/${tableId}/permissions`)
        .build()
        .execute(options.http.get, options.callback);
}

export function deleteTablePermissions(siteId, tableId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/table/${tableId}/permissions`)
        .build()
        .execute(options.http.del, options.callback);
}

export function queryColumnInATable(siteId, tableId, columnId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables/${tableId}/columns/${columnId}`)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryColumnsInATable(siteId, tableId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables/${tableId}/columns`)
        .build()
        .execute(options.http.get, options.callback);
}

export function updateColumn(siteId, tableId, columnId, column, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables/${tableId}/columns/${columnId}`)
        .withBodyParameters(column)
        .build()
        .execute(options.http.put, options.callback);
}

export function removeColumn(siteId, tableId, columnId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables/${tableId}/columns/${columnId}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function addDataQualityWarning(siteId, contentType, contentLuid, dataQualityWarning, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/dataQualityWarnings/${contentType}/${contentLuid}`)
        .withBodyParameters(dataQualityWarning)
        .build()
        .execute(options.http.post, options.callback);
}

export function queryDataQualityWarningByID(siteId, dataqualitywarningId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/dataQualityWarnings/${dataqualitywarningId}`)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryDataQualityWarningByContent(siteId, contentType, contentLuid, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/dataQualityWarnings/${contentType}/${contentLuid}`)
        .build()
        .execute(options.http.get, options.callback);
}

export function updateDataQualityWarning(siteId, dataqualitywarningId, dataQualityWarning, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/dataQualityWarnings/${dataqualitywarningId}`)
        .withBodyParameters(dataQualityWarning)
        .build()
        .execute(options.http.put, options.callback);
}

export function deleteDataQualityWarningByID(siteId, dataqualitywarningId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/dataQualityWarnings/${dataqualitywarningId}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteDataQualityWarningByContent(siteId, contentType, contentLuid, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/dataQualityWarnings/${contentType}/${contentLuid}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function addTagsToDatabase(siteId, databaseId, tags, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}/tags`)
        .withBodyParameters(tags)
        .build()
        .execute(options.http.put, options.callback);
}

export function addTagsToTable(siteId, tableId, tags, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables/${tableId}/tags`)
        .withBodyParameters(tags)
        .build()
        .execute(options.http.put, options.callback);
}

export function addTagsToColumn(siteId, columnId, tags, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/columns/${columnId}/tags`)
        .withBodyParameters(tags)
        .build()
        .execute(options.http.put, options.callback);
}

export function batchAddTags(siteId, tagBatch, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tags:batchCreate`)
        .withBodyParameters(tagBatch)
        .build()
        .execute(options.http.put, options.callback);
}

export function deleteTagFromDatabase(siteId, databaseId, tagName, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}/tags/${tagName}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteTagFromTable(siteId, tableId, tagName, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables/${tableId}/tags/${tagName}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteTagFromColumn(siteId, columnId, tagName, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/columns/${columnId}/tags/${tagName}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function batchDeleteTags(siteId, tagBatch, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tags:BatchDelete`)
        .withBodyParameters(tagBatch)
        .build()
        .execute(options.http.del, options.callback);
}

export function removeWorkbookRevision(siteId, workbookId, revisionNumber, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/revisions/${revisionNumber}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function addDataSourcePermissions(siteId, datasourceId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/permissions`)
        .withBodyParameters(permissions)
        .build()
        .execute(options.http.put, options.callback);
}

export function addProjectPermissions(siteId, projectId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/permissions`)
        .withBodyParameters(permissions)
        .build()
        .execute(options.http.put, options.callback);
}

export function addDefaultPermissions(siteId, projectId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/workbooks`)
        .withBodyParameters(permissions)
        .build()
        .execute(options.http.put, options.callback);
}

export function addDefaultPermissionsForWorkbooks(siteId, projectId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/workbooks`)
        .withBodyParameters(permissions)
        .build()
        .execute(options.http.put, options.callback);
}

export function addDefaultPermissionsForDatasources(siteId, projectId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/datasources`)
        .withBodyParameters(permissions)
        .build()
        .execute(options.http.put, options.callback);
}

export function addDefaultPermissionsForFlows(siteId, projectId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/flows`)
        .withBodyParameters(permissions)
        .build()
        .execute(options.http.put, options.callback);
}

export function addViewPermissions(siteId, viewId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}/permissions`)
        .withBodyParameters(permissions)
        .build()
        .execute(options.http.put, options.callback);
}

export function addWorkbookPermissions(siteId, workbookId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/permissions`)
        .withBodyParameters(permissions)
        .build()
        .execute(options.http.put, options.callback);
}

export function addWorkbookToSchedule(siteId, scheduleId, task, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/schedules/${scheduleId}/workbooks`)
        .withBodyParameters(task)
        .build()
        .execute(options.http.put, options.callback);
}

export function queryDataSourcePermissions(siteId, datasourceId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/permissions`)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryProjectPermissions(siteId, projectId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/permissions`)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryDefaultPermissions(siteId, projectId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/datasources`)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryDefaultPermissionsForDatasources(siteId, projectId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/datasources`)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryDefaultPermissionsForWorkbooks(siteId, projectId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/workbooks`)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryDefaultPermissionsForFlows(siteId, projectId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/flows`)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryViewPermissions(siteId, viewId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}/permissions`)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryWorkbookPermissions(siteId, workbookId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/permissions`)
        .build()
        .execute(options.http.get, options.callback);
}

export function deleteDataSourcePermission(siteId, datasourceId, groupId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteDataSourcePermissionForGroup(siteId, datasourceId, groupId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteDataSorucePermissionForUser(siteId, datasourceId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/permissions/users/${userId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteProjectPermission(siteId, projectId, groupId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteProjectPermissionForGroup(siteId, projectId, groupId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteProjectPermissionForUser(siteId, projectId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/permissions/users/${userId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteDefaultPermission(siteId, projectId, groupId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/workbooks/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteDefaultWorkbookPermissionForGroup(siteId, projectId, groupId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/workbooks/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteDefaultWorkbookPermissionForUser(siteId, projectId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/workbooks/users/${userId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteDefaultDatasourcePermissionsForGroup(siteId, projectId, groupId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/datasources/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteDefaultFlowPermissionForGroup(siteId, projectId, groupId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/flows/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteDefaultFlowPermissionForUser(siteId, projectId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/flows/users/${userId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteViewPermission(siteId, viewId, groupId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteViewPermissionForGroup(siteId, viewId, groupId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteViewPermissionForUser(siteId, viewId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}/permissions/users/${userId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteWorkbookPermission(siteId, workbookId, groupId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteWorkbookPermissionForGroup(siteId, workbookId, groupId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteWorkbookPermissionForUser(siteId, workbookId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/permissions/users/${userId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function addDataSourceToSchedule(siteId, scheduleId, task, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/schedules/${scheduleId}/datasources`)
        .withBodyParameters(task)
        .build()
        .execute(options.http.put, options.callback);
}

export function cancelJob(siteId, jobId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/jobs/${jobId}`)
        .build()
        .execute(options.http.put, options.callback);
}

export function queryJob(siteId, jobId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/jobs/${jobId}`)
        .build()
        .execute(options.http.get, options.callback);
}

export function queryJobs(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/jobs`)
        .build()
        .execute(options.http.get, options.callback);
}

export function getExtractRefreshTask(siteId, taskId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/tasks/extractRefreshes/${taskId}`)
        .build()
        .execute(options.http.get, options.callback);
}

export function getExtractRefreshTasks(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/tasks/extractRefreshes`)
        .build()
        .execute(options.http.get, options.callback);
}

export function createSchedule(schedule, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/schedules`)
        .withBodyParameters(schedule)
        .build()
        .execute(options.http.post, options.callback);
}

export function queryExtractRefreshTasks(siteId, scheduleId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/schedules/${scheduleId}/extracts`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function querySchedules(queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/schedules`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function runExtractRefreshTask(siteId, taskId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/tasks/extractRefreshes/${taskId}/runNow`)
        .withBodyParameters()
        .build()
        .execute(options.http.post, options.callback);
}

export function updateSchedule(scheduleId, schedule, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/schedules/${scheduleId}`)
        .withBodyParameters(schedule)
        .build()
        .execute(options.http.put, options.callback);
}

export function deleteSchedule(scheduleId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/schedules/${scheduleId}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteDataAccelerationTask(siteId, dataAccelerationId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/tasks/dataAcceleration/${dataAccelerationId}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function getDataAccelerationTasks(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/tasks/dataAcceleration`)
        .build()
        .execute(options.http.get, options.callback);
}

export function createSubscription(siteId, subscription, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/subscriptions`)
        .withBodyParameters(subscription)
        .build()
        .execute(options.http.post, options.callback);
}

export function querySubscription(siteId, subscriptionId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/subscriptions/${subscriptionId}`)
        .build()
        .execute(options.http.get, options.callback);
}

export function querySubscriptions(siteId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/subscriptions`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.get, options.callback);
}

export function updateSubscription(siteId, subscriptionId, subscription, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/subscriptions/${subscriptionId}`)
        .withBodyParameters(subscription)
        .build()
        .execute(options.http.put, options.callback);
}

export function deleteSubscription(siteId, subscriptionId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/subscriptions/${subscriptionId}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function addDataSourceToFavorites(siteId, userId, favorite, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/favorites/${userId}`)
        .withBodyParameters(favorite)
        .build()
        .execute(options.http.put, options.callback);
}

export function addProjectToFavorites(siteId, userId, favorite, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/favorites/${userId}`)
        .withBodyParameters(favorite)
        .build()
        .execute(options.http.put, options.callback);
}

export function addViewToFavorites(siteId, userId, favorite, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/favorites/${userId}`)
        .withBodyParameters(favorite)
        .build()
        .execute(options.http.put, options.callback);
}

export function addWorkbookToFavorites(siteId, userId, favorite, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/favorites/${userId}`)
        .withBodyParameters(favorite)
        .build()
        .execute(options.http.put, options.callback);
}

export function deleteDataSourceFromFavorites(siteId, userId, datasourceId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/favorites/${userId}/datasources/${datasourceId}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteProjectFromFavorites(siteId, userId, projectId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/favorites/${userId}/projects/${projectId}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteViewFromFavorites(siteId, userId, viewId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/favorites/${userId}/views/${viewId}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function deleteWorkbookFromFavorites(siteId, userId, workbookId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/favorites/${userId}/workbooks/${workbookId}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function getFavoritesForUser(siteId, userId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/favorites/${userId}`)
        .build()
        .execute(options.http.get, options.callback);
}

export function initiateFileUpload(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/fileUploads`)
        .build()
        .execute(options.http.post, options.callback);
}

export function appendToFileUpload(siteId, uploadSessionId, file, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/fileUploads/${uploadSessionId}`)
        .withHeaders({ "Content-Type": "multipart/mixed" })
        .withBodyParameters()
        .withFileParameters({ name: "tableau_file", file: file })
        .build()
        .execute(options.http.put, options.callback);
}

export function serverInfo(options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/serverinfo`)
        .build()
        .execute(options.http.get, options.callback);
}

export function getCurrentServerSessionDetails(options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sessions/current`)
        .build()
        .execute(options.http.get, options.callback);
}

export function createAnExtractForADataSource(siteId, datasourceId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/createExtract`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options.http.post, options.callback);
}

export function deleteAnExtractFromADataSource(siteId, datasourceId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/deleteExtract`)
        .build()
        .execute(options.http.post, options.callback);
}

export function createExtractsForEmbeddedDataSourcesInAWorkbook(siteId, workbookId, datasources, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/createExtract`)
        .withQueryParameters(queryOptions)
        .withBodyParameters(datasources)
        .build()
        .execute(options.http.post, options.callback);
}

export function deleteExtractsForEmbeddedDataSourcesInAWorkbook(siteId, workbookId, datasources, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbookss/${workbookId}/deleteExtract`)
        .withQueryParameters(queryOptions)
        .withBodyParameters(datasources)
        .build()
        .execute(options.http.post, options.callback);
}

export function deleteExtractRefreshTask(siteId, taskId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/tasks/extractRefreshes/${taskId}`)
        .build()
        .execute(options.http.del, options.callback);
}

export function encryptExtractsInASite(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/encrypt-extracts`)
        .build()
        .execute(options.http.post, options.callback);
}

export function decryptExtractsInASite(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/decrypt-extracts`)
        .build()
        .execute(options.http.post, options.callback);
}

export function reencryptExtractsInASite(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/reencrypt-extracts`)
        .build()
        .execute(options.http.post, options.callback);
}