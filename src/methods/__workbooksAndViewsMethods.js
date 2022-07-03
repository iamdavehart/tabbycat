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
 * Adds one or more tags to the specified view.
 */
export function addTagsToView(viewId, tags, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!viewId) return Promise.reject(new MissingPathParameterException("viewId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/views/${viewId}/tags`)
            .withBodyParameters(tags)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds one or more tags to the specified workbook.
 */
export function addTagsToWorkbook(workbookId, tags, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}/tags`)
            .withBodyParameters(tags)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes a tag from the specified view.
 */
export function deleteTagFromView(viewId, tagName, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!viewId) return Promise.reject(new MissingPathParameterException("viewId"));
	if (!tagName) return Promise.reject(new MissingPathParameterException("tagName"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/views/${viewId}/tags/${tagName}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes a tag from the specified workbook.
 */
export function deleteTagFromWorkbook(workbookId, tagName, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));
	if (!tagName) return Promise.reject(new MissingPathParameterException("tagName"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}/tags/${tagName}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes a workbook. When a workbook is deleted, all of its assets are also deleted,
 * including associated views, data connections, and so on.
 */
export function deleteWorkbook(workbookId, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Downloads an Excel (.xlsx) file containing crosstab data from a view that the user has
 * permission to access in a workbook. If a crosstab is exported from a dashboard, data from
 * only the first view in the dashboard will appear in the .xlsx file. Downloads of data from
 * story dashboards are not supported at this time.
 */
export function downloadViewExcel(viewId, queryOptions, client) {
    const minVersion = "3.9";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!viewId) return Promise.reject(new MissingPathParameterException("viewId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/views/${viewId}/crosstab/excel`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Downloads a workbook in .twb or .twbx format.
 */
export function downloadWorkbook(workbookId, queryOptions, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}/content`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Downloads a .pdf containing images of the sheets that the user has permission to view in
 * a workbook. Download Images/PDF permissions must be enabled for the workbook (true by
 * default). If Show sheets in tabs is not selected for the workbook, only the default tab
 * will appear in the .pdf file.
 */
export function downloadWorkbookPdf(workbookId, queryOptions, client) {
    const minVersion = "3.4";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}/pdf`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Downloads a PowerPoint (.pptx) file containing slides with images of the sheets that the
 * user has permission to view in a workbook. Download Images/PDF permissions must be enabled
 * for the workbook (true by default). If Show sheets in tabs is not selected for the
 * workbook, only the default tab will appear in the .pptx file.
 */
export function downloadWorkbookPowerpoint(workbookId, queryOptions, client) {
    const minVersion = "3.8";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}/powerpoint`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Downloads a specific version of a workbook in .twb or .twbx format.
 */
export function downloadWorkbookRevision(workbookId, revisionNumber, queryOptions, client) {
    const minVersion = "2.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));
	if (!revisionNumber) return Promise.reject(new MissingPathParameterException("revisionNumber"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}/revisions/${revisionNumber}/content`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Gets the details of a specific view.
 */
export function getView(viewId, client) {
    const minVersion = "3.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!viewId) return Promise.reject(new MissingPathParameterException("viewId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/views/${viewId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Gets the details of all views in a site with a specified name.
 */
export function getViewByPath(queryOptions, client) {
    const minVersion = "3.6";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/views`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Gets a list of views that are recommended for a user. Using machine learning, the server
 * will match preferences between similar users and recommend content that is most popular
 * and recently viewed. When a recommended view is selected and not marked as hidden, it
 * appears on the server Home and Recommendations pages.
 */
export function getViewRecommendations(client) {
    const minVersion = "3.7";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/recommendations/`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of the features that would be impacted, and the severity of the impact,
 * when a workbook is exported as a downgraded version (for instance, exporting a v2019.3
 * workbook to a v10.5 version).
 */
export function getWorkbookDowngradeInfo(workbookId, queryOptions, client) {
    const minVersion = "3.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}/downGradeInfo`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of revision information (history) for the specified workbook.
 */
export function getWorkbookRevisions(workbookId, queryOptions, client) {
    const minVersion = "2.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}/revisions`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Hides a view from being recommended by the server by adding it to a list of views that
 * are dismissed for a user. If hidden, a view will not be displayed on the server Home or
 * Recommendation pages.
 */
export function hideViewRecommendation(recommendationDismissal, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/recommendations/dismissals`)
            .withBodyParameters(recommendationDismissal)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Publishes a workbook on the specified site. To make changes to a published workbook, call
 * Update Workbook or Update Workbook Connection.
 */
export function publishWorkbook(workbook, file, queryOptions, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/workbooks`)
            .withHeaders({"Content-Type":"multipart/mixed"})
            .withQueryParameters(queryOptions)
            .withBodyParameters(workbook)
            .withBodyParameters(file)
            .withFileParameters({ name: "tableau_workbook", file: file })
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a specified view rendered as data in comma-separated-value (CSV) format.
 */
export function queryViewData(viewId, queryOptions, client) {
    const minVersion = "2.8";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!viewId) return Promise.reject(new MissingPathParameterException("viewId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/views/${viewId}/data`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns an image of the specified view.
 */
export function queryViewImage(viewId, queryOptions, client) {
    const minVersion = "2.5";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!viewId) return Promise.reject(new MissingPathParameterException("viewId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/views/${viewId}/image`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a specified view rendered as a .pdf file.
 */
export function queryViewPdf(viewId, queryOptions, client) {
    const minVersion = "2.8";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!viewId) return Promise.reject(new MissingPathParameterException("viewId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/views/${viewId}/pdf`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns all the views for the specified site, optionally including usage statistics.
 */
export function queryViewsForSite(queryOptions, client) {
    const minVersion = "2.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/views`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns all the views for the specified workbook, optionally including usage statistics.
 */
export function queryViewsForWorkbook(workbookId, queryOptions, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}/views`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns the thumbnail image for the specified view.
 */
export function queryViewWithPreview(workbookId, viewId, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));
	if (!viewId) return Promise.reject(new MissingPathParameterException("viewId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}/views/${viewId}/previewImage`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns information about the specified workbook, including information about views and
 * tags.
 */
export function queryWorkbook(workbookId, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of data connections for the specific workbook.
 */
export function queryWorkbookConnections(workbookId, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}/connections`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns the thumbnail image as a PNG file for the specified workbook. Usually the image
 * that is returned is for the first sheet in the workbook.
 */
export function queryWorkbookPreviewImage(workbookId, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}/previewImage`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns the workbooks on a site.
 */
export function queryWorkbooksForSite(queryOptions, client) {
    const minVersion = "2.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/workbooks`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns the workbooks that the specified user owns in addition to those that the user has
 * Read (view) permissions for.
 */
export function queryWorkbooksForUser(userId, queryOptions, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/users/${userId}/workbooks`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Unhides a view from being recommended by the server by removing it from the list of views
 * that are dimissed for a user. If the unhidden view meets the criteria for being
 * recommended, then it will be displayed on the server Home or Recommendation pages.
 */
export function unhideViewRecommendation(queryOptions, client) {
    const minVersion = "1.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/recommendations/dismissals/`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Modifies an existing workbook, allowing you to change the owner or project that the
 * workbook belongs to and whether the workbook shows views in tabs. Updated workbooks can
 * optionally be marked to appear in the recently viewed list.
 */
export function updateWorkbook(workbookId, workbook, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}`)
            .withBodyParameters(workbook)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Updates the server address, port, username, or password for the specified workbook
 * connection.
 */
export function updateWorkbookConnection(workbookId, connectionId, connection, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));
	if (!connectionId) return Promise.reject(new MissingPathParameterException("connectionId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}/connections/${connectionId}`)
            .withBodyParameters(connection)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Refreshes the specified workbook.
 */
export function updateWorkbookNow(workbookId, client) {
    const minVersion = "2.8";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!workbookId) return Promise.reject(new MissingPathParameterException("workbookId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/workbooks/${workbookId}/refresh`)
            .withBodyParameters({})
            .withAuthenticationToken(token)
            .build()
    );
}
