/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { Paginated } from "tabbycat/types";
import { TagListType } from "tabbycat/types";
import { RecommendationDismissalType } from "tabbycat/types";
import { WorkbookType } from "tabbycat/types";
import { ConnectionType } from "tabbycat/types";
import { ViewType } from "tabbycat/types";
import { RecommendedViewListType } from "tabbycat/types";
import { DowngradeInfoListType } from "tabbycat/types";
import { RevisionListType } from "tabbycat/types";
import { ViewListType } from "tabbycat/types";
import { ConnectionListType } from "tabbycat/types";
import { WorkbookListType } from "tabbycat/types";
import { JobType } from "tabbycat/types";

/**
 * Adds one or more tags to the specified view.
 * @param {string} viewId The ID of the views to add tags to.
 * @param {TagListType} tags tags
 * @returns {Promise<TagListType>} Promise | undefined
 */
export function addTagsToView(viewId: string, tags: TagListType, client?: ClientLite) : Promise<TagListType>;

/**
 * Adds one or more tags to the specified workbook.
 * @param {string} workbookId The ID of the workbook to add tags to.
 * @param {TagListType} tags tags
 * @returns {Promise<TagListType>} Promise | undefined
 */
export function addTagsToWorkbook(workbookId: string, tags: TagListType, client?: ClientLite) : Promise<TagListType>;

/**
 * Deletes a tag from the specified view.
 * @param {string} viewId The ID of the view to remove the tag from.
 * @param {string} tagName The name of the tag to remove from the view.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteTagFromView(viewId: string, tagName: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes a tag from the specified workbook.
 * @param {string} workbookId The ID of the workbook to remove the tag from.
 * @param {string} tagName The name of the tag to remove from the workbook.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteTagFromWorkbook(workbookId: string, tagName: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes a workbook. When a workbook is deleted, all of its assets are also deleted,
 * including associated views, data connections, and so on.
 * @param {string} workbookId The ID of the workbook to remove.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteWorkbook(workbookId: string, client?: ClientLite) : Promise<any>;

/**
 * Downloads an Excel (.xlsx) file containing crosstab data from a view that the user has
 * permission to access in a workbook. If a crosstab is exported from a dashboard, data from
 * only the first view in the dashboard will appear in the .xlsx file. Downloads of data from
 * story dashboards are not supported at this time.
 * @param {string} viewId The ID of the view to use as the source of the crosstab to be
 * 		downloaded as an .xlsx file.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number} queryOptions.maxAge (Optional) The maximum number of minutes an .xlsx
 * 		file will be cached on the server before being refreshed. To prevent multiple .xlsx
 * 		requests from overloading the server, the shortest interval you can set is one minute.
 * 		There is no maximum value, but the server job enacting the caching action may expire
 * 		before a long cache period is reached.
 * @returns {Promise<any>} Promise | undefined
 */
export function downloadViewExcel(viewId: string, queryOptions?: { maxAge: number }, client?: ClientLite) : Promise<any>;

/**
 * Downloads a workbook in .twb or .twbx format.
 * @param {string} workbookId The ID of the workbook to download.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.includeExtract (Optional) The extract-value is a Boolean
 * 		value (False or True). When the workbook specified for download has an extract, if you add
 * 		the parameter ?includeExtract=False, the extract is not included when you download the
 * 		workbook. You can use this option to improve performance if you are downloading workbooks
 * 		or data sources that have large extracts.
 * @returns {Promise<any>} Promise | undefined
 */
export function downloadWorkbook(workbookId: string, queryOptions?: { includeExtract: string }, client?: ClientLite) : Promise<any>;

/**
 * Downloads a .pdf containing images of the sheets that the user has permission to view in
 * a workbook. Download Images/PDF permissions must be enabled for the workbook (true by
 * default). If Show sheets in tabs is not selected for the workbook, only the default tab
 * will appear in the .pdf file.
 * @param {string} workbookId The ID of the workbook to use as the source of the .pdf
 * 		file to be downloaded.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number} queryOptions.maxAge (Optional) The maximum number of minutes a
 * 		workbook PDF will be cached before being refreshed. To prevent multiple PDF requests from
 * 		overloading the server, the shortest interval you can set is one minute. There is no
 * 		maximum value, but the server job enacting the caching action may expire before a long
 * 		cache period is reached.
 * @param {string} queryOptions.orientation (Optional) The orientation of the pages in
 * 		the .pdf file produced. The value can be Portrait or Landscape. If this parameter is not
 * 		present the page orientation will default to Portrait.
 * @param {string} queryOptions.type (Optional) The type of page, which determines the
 * 		page dimensions of the .pdf file returned. The value can be: A3, A4, A5, B5, Executive,
 * 		Folio, Ledger, Legal, Letter, Note, Quarto, or Tabloid. If this parameter is not present
 * 		the page type will default to Legal.
 * @returns {Promise<any>} Promise | undefined
 */
export function downloadWorkbookPdf(workbookId: string, queryOptions?: { maxAge: number, orientation: string, type: string }, client?: ClientLite) : Promise<any>;

/**
 * Downloads a PowerPoint (.pptx) file containing slides with images of the sheets that the
 * user has permission to view in a workbook. Download Images/PDF permissions must be enabled
 * for the workbook (true by default). If Show sheets in tabs is not selected for the
 * workbook, only the default tab will appear in the .pptx file.
 * @param {string} workbookId The ID of the workbook to use as the source of the .pptx
 * 		file to be downloaded.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number} queryOptions.maxAge (Optional) The maximum number of minutes a
 * 		workbook .pptx will be cached before being refreshed. To prevent multiple .pptx requests
 * 		from overloading the server, the shortest interval you can set is one minute. There is no
 * 		maximum value, but the server job enacting the caching action may expire before a long
 * 		cache period is reached.
 * @returns {Promise<any>} Promise | undefined
 */
export function downloadWorkbookPowerpoint(workbookId: string, queryOptions?: { maxAge: number }, client?: ClientLite) : Promise<any>;

/**
 * Downloads a specific version of a workbook in .twb or .twbx format.
 * @param {string} workbookId The ID of the workbook to download.
 * @param {number} revisionNumber The revision number of the workbook to download. To
 * 		determine what versions are available, call Get Workbook Revisions. Note that the current
 * 		revision of a workbook cannot be accessed by this call; use Download Workbook instead.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.includeExtract (Optional) The extract-value is a Boolean
 * 		value (False or True). When the workbook specified for download has an extract, if you add
 * 		the parameter ?includeExtract=False, the extract is not included when you download the
 * 		workbook. You can use this option to improve performance if you are downloading workbooks
 * 		or data sources that have large extracts.
 * @returns {Promise<any>} Promise | undefined
 */
export function downloadWorkbookRevision(workbookId: string, revisionNumber: number, queryOptions?: { includeExtract: string }, client?: ClientLite) : Promise<any>;

/**
 * Gets the details of a specific view.
 * @param {string} viewId The ID of the view whose details are requested.
 * @returns {Promise<ViewType>} Promise | undefined
 */
export function getView(viewId: string, client?: ClientLite) : Promise<ViewType>;

/**
 * Gets the details of all views in a site with a specified name.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.viewName The name of the view as it appears in the URL to
 * 		the view. For https://MY_SERVER/#/MY_SITE/views/workbook-name/Sheet1?:iid=1, the name
 * 		would be Sheet1.
 * @returns {Promise<ViewType>} Promise | undefined
 */
export function getViewByPath(queryOptions?: { : string }, client?: ClientLite) : Promise<ViewType>;

/**
 * Gets a list of views that are recommended for a user. Using machine learning, the server
 * will match preferences between similar users and recommend content that is most popular
 * and recently viewed. When a recommended view is selected and not marked as hidden, it
 * appears on the server Home and Recommendations pages.
 * @returns {Promise<RecommendedViewListType>} Promise | undefined
 */
export function getViewRecommendations(client?: ClientLite) : Promise<RecommendedViewListType>;

/**
 * Returns a list of the features that would be impacted, and the severity of the impact,
 * when a workbook is exported as a downgraded version (for instance, exporting a v2019.3
 * workbook to a v10.5 version).
 * @param {string} workbookId The ID of the workbook being downgraded.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number} queryOptions.productVersion The Tableau release version number the
 * 		workbook is being downgraded to.
 * @returns {Promise<DowngradeInfoListType>} Promise | undefined
 */
export function getWorkbookDowngradeInfo(workbookId: string, queryOptions?: { productVersion: number }, client?: ClientLite) : Promise<DowngradeInfoListType>;

/**
 * Returns a list of revision information (history) for the specified workbook.
 * @param {string} workbookId The ID of the workbook to get revisions for.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one
 * 		response. The minimum is 1. The maximum is 1000. The default is 100. For more information,
 * 		see Paginating Results.
 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default
 * 		is 1. For more information, see Paginating Results.
 * @returns {Promise<Paginated<RevisionListType>>} Promise | undefined
 */
export function getWorkbookRevisions(workbookId: string, queryOptions?: { pageSize: number, pageNumber: number }, client?: ClientLite) : Promise<Paginated<RevisionListType>>;

/**
 * Hides a view from being recommended by the server by adding it to a list of views that
 * are dismissed for a user. If hidden, a view will not be displayed on the server Home or
 * Recommendation pages.
 * @param {RecommendationDismissalType} recommendationDismissal recommendationDismissal
 * @returns {Promise<any>} Promise | undefined
 */
export function hideViewRecommendation(recommendationDismissal: RecommendationDismissalType, client?: ClientLite) : Promise<any>;

/**
 * Publishes a workbook on the specified site. To make changes to a published workbook, call
 * Update Workbook or Update Workbook Connection.
 * @param {WorkbookType} workbook workbook
 * @param {Object} file File Contents
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean} queryOptions.overwrite (Optional) true to overwrite a workbook that
 * 		has the same name, or false to fail if the specified workbook already exists. The default
 * 		is false. If overwrite-flag is set to true but the workbook doesn't already exist, the
 * 		operation succeeds.
 * @param {boolean} queryOptions.asJob (Optional, boolean) If false, the workbook
 * 		publishing process runs as a synchronous process. If a workbook is very large, the process
 * 		might time out before it finishes. If you set this value to true, the process runs
 * 		asynchronously, and a job will start to perform the publishing process and return the job
 * 		ID. You can check the status of the import job by calling Query Job. Default value is
 * 		false.
 * @param {boolean} queryOptions.skipConnectionCheck (Optional, boolean) If true, then
 * 		the Tableau server will not check if a non-published connection of a workbook is
 * 		reachable. Publishing will succeed but unchecked connection issues may result in a
 * 		non-functioning workbook. If you encounter this issue, follow Keep Data Fresh
 * 		guidelines(Link opens in a new window). Default value is false.
 * @param {string} queryOptions.uploadSessionId If you are calling this method to commit
 * 		a file that was uploaded in parts, this value contains the upload session ID that was
 * 		generated by a call to Initiate File Upload. If this value is not included, the server
 * 		assumes that the body of the request contains the file to be published.
 * @param {string} queryOptions.workbookType twb or twbx to indicate whether you have
 * 		uploaded a workbook file (twb) or a packaged workbook file (twbx). This value is required
 * 		if you are calling Publish Workbook in order to commit a file that was previously uploaded
 * 		using Append to File Upload. The value is not used if you upload a file in the body of the
 * 		request.
 * @returns {Promise<WorkbookType>} Promise | undefined
 */
export function publishWorkbook(workbook: WorkbookType, file: Object, queryOptions?: { overwrite: boolean, asJob: boolean, skipConnectionCheck: boolean, uploadSessionId: string, workbookType: string }, client?: ClientLite) : Promise<WorkbookType>;

/**
 * Returns a specified view rendered as data in comma-separated-value (CSV) format.
 * @param {string} viewId The ID of the view to render as data.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number} queryOptions.maxAge (Optional) The maximum number of minutes view data
 * 		will be cached before being refreshed. To prevent multiple view data requests from
 * 		overloading the server, the shortest interval you can set is one minute. There is no
 * 		maximum value, but the server job enacting the caching action may expire before a long
 * 		cache period is reached.
 * @param {string} queryOptions.vf_<fieldname> The value of the field that you want to
 * 		use to filter the workbook view. For example, a workbook with the filter
 * 		/data?vf_year=2017 would only display data from the year 2017. To learn more, see View
 * 		filter queries.
 * @returns {Promise<any>} Promise | undefined
 */
export function queryViewData(viewId: string, queryOptions?: { maxAge: number, vf_<fieldname>: string }, client?: ClientLite) : Promise<any>;

/**
 * Returns an image of the specified view.
 * @param {string} viewId The ID of the view to return an image for.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.resolution (Optional) The resolution of the image. Image
 * 		width and actual pixel density are determined by the display context of the image. Aspect
 * 		ratio is always preserved. Set the value to high to ensure maximum pixel density.
 * @param {number} queryOptions.maxAge (Optional) The maximum number of minutes a view
 * 		image will be cached before being refreshed. To prevent multiple image requests from
 * 		overloading the server, the shortest interval you can set is one minute. There is no
 * 		maximum value, but the server job enacting the caching action may expire before a long
 * 		cache period is reached.
 * @param {string} queryOptions.vf_<fieldname> The value of the field that you want to
 * 		use to filter the workbook view. For example, a workbook with the filter
 * 		/data?vf_year=2017 would only display data from the year 2017. To learn more, see View
 * 		filter queries.
 * @returns {Promise<any>} Promise | undefined
 */
export function queryViewImage(viewId: string, queryOptions?: { resolution: string, maxAge: number, vf_<fieldname>: string }, client?: ClientLite) : Promise<any>;

/**
 * Returns a specified view rendered as a .pdf file.
 * @param {string} viewId The ID of the view to render as a .pdf file.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.vf_<fieldname> The value of the field that you want to
 * 		use to filter the workbook view. For example, a workbook with the filter
 * 		/data?vf_year=2017 would only display data from the year 2017. To learn more, see View
 * 		filter queries.
 * @param {number} queryOptions.maxAge (Optional) The maximum number of minutes a view
 * 		PDF will be cached before being refreshed. To prevent multiple PDF requests from
 * 		overloading the server, the shortest interval you can set is one minute. There is no
 * 		maximum value, but the server job enacting the caching action may expire before a long
 * 		cache period is reached.
 * @param {string} queryOptions.orientation (Optional) The orientation of the pages in
 * 		the .pdf file produced. The value can be Portrait or Landscape. If this parameter is not
 * 		present the page orientation will default to Portrait.
 * @param {string} queryOptions.type (Optional) The type of page, which determines the
 * 		page dimensions of the .pdf file returned. The value can be: A3, A4, A5, B5, Executive,
 * 		Folio, Ledger, Legal, Letter, Note, Quarto, or Tabloid. If this parameter is not present
 * 		the page type will default to Legal.
 * @returns {Promise<any>} Promise | undefined
 */
export function queryViewPdf(viewId: string, queryOptions?: { vf_<fieldname>: string, maxAge: number, orientation: string, type: string }, client?: ClientLite) : Promise<any>;

/**
 * Returns all the views for the specified site, optionally including usage statistics.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean} queryOptions.includeUsageStatistics (Optional) true to return usage
 * 		statistics. The default is false.
 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one
 * 		response. The minimum is 1. The maximum is 1000. The default is 100. For more information,
 * 		see Paginating Results.
 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default
 * 		is 1. For more information, see Paginating Results.
 * @param {string} queryOptions.fields (Optional) An expression that lets you specify the
 * 		set of available fields to return. You can qualify the return values based upon predefined
 * 		keywords such as _all_ or _default_, and you can specify individual fields for the
 * 		workbooks or other supported resources. You can include multiple field expressions in a
 * 		request. For more information, see Using Fields in the REST API.
 * @param {string} queryOptions.filter <parameter documentation missing>
 * @param {string} queryOptions.sort <parameter documentation missing>
 * @returns {Promise<ViewListType>} Promise | undefined
 */
export function queryViewsForSite(queryOptions?: { includeUsageStatistics: boolean, pageSize: number, pageNumber: number, fields: string, filter: string, sort: string }, client?: ClientLite) : Promise<ViewListType>;

/**
 * Returns all the views for the specified workbook, optionally including usage statistics.
 * @param {string} workbookId The ID of the workbook to get the views for.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean} queryOptions.includeUsageStatistics true to return usage statistics.
 * 		The default is false.
 * @returns {Promise<ViewListType>} Promise | undefined
 */
export function queryViewsForWorkbook(workbookId: string, queryOptions?: { includeUsageStatistics: boolean }, client?: ClientLite) : Promise<ViewListType>;

/**
 * Returns the thumbnail image for the specified view.
 * @param {string} workbookId The ID of the workbook that contains the view to return a
 * 		thumbnail image for.
 * @param {string} viewId The ID of the view to return a thumbnail image for.
 * @returns {Promise<any>} Promise | undefined
 */
export function queryViewWithPreview(workbookId: string, viewId: string, client?: ClientLite) : Promise<any>;

/**
 * Returns information about the specified workbook, including information about views and
 * tags.
 * @param {string} workbookId The ID of the workbook to return information about.
 * @returns {Promise<WorkbookType>} Promise | undefined
 */
export function queryWorkbook(workbookId: string, client?: ClientLite) : Promise<WorkbookType>;

/**
 * Returns a list of data connections for the specific workbook.
 * @param {string} workbookId The ID of the workbook to return connection information
 * 		about.
 * @returns {Promise<ConnectionListType>} Promise | undefined
 */
export function queryWorkbookConnections(workbookId: string, client?: ClientLite) : Promise<ConnectionListType>;

/**
 * Returns the thumbnail image as a PNG file for the specified workbook. Usually the image
 * that is returned is for the first sheet in the workbook.
 * @param {string} workbookId The ID of the workbook to return the thumbnail image for.
 * @returns {Promise<any>} Promise | undefined
 */
export function queryWorkbookPreviewImage(workbookId: string, client?: ClientLite) : Promise<any>;

/**
 * Returns the workbooks on a site.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.filter (Optional) An expression that lets you specify a
 * 		subset of workbooks to return. You can filter on predefined fields such as name, tags, and
 * 		createdAt. You can include multiple filter expressions. For more information, see
 * 		Filtering and Sorting.
 * @param {string} queryOptions.sort (Optional) An expression that lets you specify the
 * 		order in which workbook information is returned. If you do not specify a sort expression,
 * 		the sort order of the information that's returned is undefined. For more information, see
 * 		Filtering and Sorting.
 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one
 * 		response. The minimum is 1. The maximum is 1000. The default is 100. For more information,
 * 		see Paginating Results.
 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default
 * 		is 1. For more information, see Paginating Results.
 * @param {string} queryOptions.fields (Optional) An expression that lets you specify the
 * 		set of available fields to return. You can qualify the return values based upon predefined
 * 		keywords such as _all_ or _default_, and you can specify individual fields for the
 * 		workbooks or other supported resources. You can include multiple field expressions in a
 * 		request. For more information, see Using Fields in the REST API.
 * @returns {Promise<Paginated<WorkbookListType>>} Promise | undefined
 */
export function queryWorkbooksForSite(queryOptions?: { filter: string, sort: string, pageSize: number, pageNumber: number, fields: string }, client?: ClientLite) : Promise<Paginated<WorkbookListType>>;

/**
 * Returns the workbooks that the specified user owns in addition to those that the user has
 * Read (view) permissions for.
 * @param {string} userId The ID of the user to get workbooks for.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean} queryOptions.ownedBy (Optional) true to return only workbooks that
 * 		the specified user owns, or false to return all workbooks that the specified user has at
 * 		least read access to. The default is false.
 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one
 * 		response. The minimum is 1. The maximum is 1000. The default is 100. For more information,
 * 		see Paginating Results.
 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default
 * 		is 1. For more information, see Paginating Results.
 * @returns {Promise<Paginated<WorkbookListType>>} Promise | undefined
 */
export function queryWorkbooksForUser(userId: string, queryOptions?: { ownedBy: boolean, pageSize: number, pageNumber: number }, client?: ClientLite) : Promise<Paginated<WorkbookListType>>;

/**
 * Unhides a view from being recommended by the server by removing it from the list of views
 * that are dimissed for a user. If the unhidden view meets the criteria for being
 * recommended, then it will be displayed on the server Home or Recommendation pages.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.id The LUID of the view to be removed from the list of
 * 		views hidden from recommendation for a user.
 * @returns {Promise<any>} Promise | undefined
 */
export function unhideViewRecommendation(queryOptions?: { id: string }, client?: ClientLite) : Promise<any>;

/**
 * Modifies an existing workbook, allowing you to change the owner or project that the
 * workbook belongs to and whether the workbook shows views in tabs. Updated workbooks can
 * optionally be marked to appear in the recently viewed list.
 * @param {string} workbookId The ID of the workbook to update.
 * @param {WorkbookType} workbook workbook
 * @returns {Promise<WorkbookType>} Promise | undefined
 */
export function updateWorkbook(workbookId: string, workbook: WorkbookType, client?: ClientLite) : Promise<WorkbookType>;

/**
 * Updates the server address, port, username, or password for the specified workbook
 * connection.
 * @param {string} workbookId The ID of the workbook to update.
 * @param {string} connectionId The ID of the connection to update.
 * @param {ConnectionType} connection connection
 * @returns {Promise<ConnectionType>} Promise | undefined
 */
export function updateWorkbookConnection(workbookId: string, connectionId: string, connection: ConnectionType, client?: ClientLite) : Promise<ConnectionType>;

/**
 * Refreshes the specified workbook.
 * @param {string} workbookId The ID of the workbook to refresh.
 * @returns {Promise<JobType>} Promise | undefined
 */
export function updateWorkbookNow(workbookId: string, client?: ClientLite) : Promise<JobType>;
