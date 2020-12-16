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

    /** 
     * retrieves a cached site id (overridden in clients) 
     * @returns {string} the siteId
     */
    getSite() { return ""; }

    /** 
     * retrieves an exec options object (overridden in clients) 
     * @returns {ExecOptions} executeOptions
     */
    execOpts(obj) { return { ...obj } }

    /**
    * @typedef {import("./types/api-requests").CredentialsRequest} CredentialsRequest
    * @typedef {import("./types/api-requests").SiteRequest} SiteRequest
    * @typedef {import("./types/api-requests").UserRequest} UserRequest
    * @typedef {import("./types/api-requests").DataAlertRequest} DataAlertRequest
    * @typedef {import("./types/api-requests").PermissionsRequest} PermissionsRequest
    * @typedef {import("./types/api-requests").TaskRequest} TaskRequest
    * @typedef {import("./types/api-requests").FlowRequest} FlowRequest
    * @typedef {import("./types/api-requests").ProjectRequest} ProjectRequest
    * @typedef {import("./types/api-requests").WorkbookRequest} WorkbookRequest
    * @typedef {import("./types/api-requests").TagsRequest} TagsRequest
    * @typedef {import("./types/api-requests").RecommendationDismissalRequest} RecommendationDismissalRequest
    * @typedef {import("./types/api-requests").ConnectionRequest} ConnectionRequest
    * @typedef {import("./types/api-requests").DatasourceRequest} DatasourceRequest
    * @typedef {import("./types/api-requests").GroupRequest} GroupRequest
    * @typedef {import("./types/api-requests").TableRequest} TableRequest
    * @typedef {import("./types/api-requests").ColumnRequest} ColumnRequest
    * @typedef {import("./types/api-requests").DataQualityWarningRequest} DataQualityWarningRequest
    * @typedef {import("./types/api-requests").TagBatchRequest} TagBatchRequest
    * @typedef {import("./types/api-requests").ScheduleRequest} ScheduleRequest
    * @typedef {import("./types/api-requests").SubscriptionRequest} SubscriptionRequest
    * @typedef {import("./types/api-requests").FavoriteRequest} FavoriteRequest
    * @typedef {import("./types/api-requests").DatasourcesRequest} DatasourcesRequest
    * @typedef {import("./types/api-responses").CredentialsResponse} CredentialsResponse
    * @typedef {import("./types/api-responses").SiteResponse} SiteResponse
    * @typedef {import("./types/api-responses").SitesResponse} SitesResponse
    * @typedef {import("./types/api-responses").ViewsResponse} ViewsResponse
    * @typedef {import("./types/api-responses").DataAlertResponse} DataAlertResponse
    * @typedef {import("./types/api-responses").DataAlertsResponse} DataAlertsResponse
    * @typedef {import("./types/api-responses").UserResponse} UserResponse
    * @typedef {import("./types/api-responses").PermissionsResponse} PermissionsResponse
    * @typedef {import("./types/api-responses").ProjectResponse} ProjectResponse
    * @typedef {import("./types/api-responses").ProjectsResponse} ProjectsResponse
    * @typedef {import("./types/api-responses").WorkbookResponse} WorkbookResponse
    * @typedef {import("./types/api-responses").TagsResponse} TagsResponse
    * @typedef {import("./types/api-responses").ConnectionsResponse} ConnectionsResponse
    * @typedef {import("./types/api-responses").ViewResponse} ViewResponse
    * @typedef {import("./types/api-responses").RevisionsResponse} RevisionsResponse
    * @typedef {import("./types/api-responses").WorkbooksResponse} WorkbooksResponse
    * @typedef {import("./types/api-responses").ConnectionResponse} ConnectionResponse
    * @typedef {import("./types/api-responses").JobResponse} JobResponse
    * @typedef {import("./types/api-responses").DataAccelerationReportResponse} DataAccelerationReportResponse
    * @typedef {import("./types/api-responses").DatasourceResponse} DatasourceResponse
    * @typedef {import("./types/api-responses").DatasourcesResponse} DatasourcesResponse
    * @typedef {import("./types/api-responses").GroupResponse} GroupResponse
    * @typedef {import("./types/api-responses").GroupsResponse} GroupsResponse
    * @typedef {import("./types/api-responses").UsersResponse} UsersResponse
    * @typedef {import("./types/api-responses").TaskResponse} TaskResponse
    * @typedef {import("./types/api-responses").ParentResponse} ParentResponse
    * @typedef {import("./types/api-responses").BackgroundJobsResponse} BackgroundJobsResponse
    * @typedef {import("./types/api-responses").TasksResponse} TasksResponse
    * @typedef {import("./types/api-responses").ScheduleResponse} ScheduleResponse
    * @typedef {import("./types/api-responses").ExtractsResponse} ExtractsResponse
    * @typedef {import("./types/api-responses").SchedulesResponse} SchedulesResponse
    * @typedef {import("./types/api-responses").SubscriptionResponse} SubscriptionResponse
    * @typedef {import("./types/api-responses").SubscriptionsResponse} SubscriptionsResponse
    * @typedef {import("./types/api-responses").FavoritesResponse} FavoritesResponse
    * @typedef {import("./types/api-responses").FileUploadResponse} FileUploadResponse
    * @typedef {import("./types/api-responses").ServerInfoResponse} ServerInfoResponse
    */

/**
 * HttpManager object containing standard http methods for GET,POST,PUT,DELETE
 * @typedef {Object} HttpManager
 * @property {Function} get HTTP GET method
 * @property {Function} put HTTP PUT method
 * @property {Function} post HTTP POST method
 * @property {Function} del HTTP DEL method
 */
    
/**
 * Execute Options allow fine-grained control over each request
 * @typedef {Object} ExecOptions
 * @property {HttpManager} http Object containing standard http methods for GET,POST,PUT,DELETE
 * @property {boolean} [authentication] states that the route returns authentication information
 * @property {string} [baseURL] specifies the url to run this request against
 * @property {string} [version] specifies a particular version of the api to run this request on
 */

/**
	 * Signs you in as a user on the specified site on Tableau Server. This call returns a credentials token that you use in subsequent calls to the server. Typically, a credentials token is valid for 240 minutes. You can change this timeout by using the tsm configuration set(Link opens in a new window) command and setting the wgserver.session.idle_limit option.
	 * @param {CredentialsRequest} credentials credentials
	 * @returns {Promise<CredentialsResponse>} Promise | undefined
	 */
	signIn(credentials) {
        const opts = this.execOpts({ authentication: true});
        return api.signIn(credentials, opts);
    }

	/**
	 * Signs you out of the current session. This call invalidates the authentication token that is created by a call to Sign In.
	 * @returns {Promise<any>} Promise | undefined
	 */
	signOut() {
        const opts = this.execOpts({ });
        return api.signOut(opts);
    }

	/**
	 * Switches you onto another site without having to provide a user name and password again.
	 * @param {SiteRequest} site site
	 * @returns {Promise<CredentialsResponse>} Promise | undefined
	 */
	switchSite(site) {
        const opts = this.execOpts({ });
        return api.switchSite(site, opts);
    }

	/**
	 * Creates a site on Tableau Server. To make changes to an existing site, call Update Site. This method is not available for Tableau Online.
	 * @param {SiteRequest} site site
	 * @returns {Promise<SiteResponse>} Promise | undefined
	 */
	createSite(site) {
        const opts = this.execOpts({ });
        return api.createSite(site, opts);
    }

	/**
	 * Returns information about the specified site, with the option to return information about the storage space and user count for the site.
	 * @param {string} siteName The name of the site to get information for. If you specify a site name, you must also include the parameter key=name.
	 * @param {string} contentUrl The URL of the site to get information for. If you specify a content URL, you must also include the parameter key=contentUrl.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {boolean} queryOptions.includeUsageFlag The boolean flag to include site usage metrics in the response body. If true, then the site element of the response will contain a usage node with the attributes numUsers (number of users) and storage (storage in megabytes). To set the flag to include usage in the response, append includeUsage=true as a querystring element any valid query site URI.
	 * @returns {Promise<SiteResponse>} Promise | undefined
	 */
	querySite(siteName, contentUrl, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.querySite(siteId, siteName, contentUrl, queryOptions, opts);
    }

	/**
	 * Returns information about the specified site, with the option to return information about the storage space and user count for the site.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {boolean} queryOptions.includeUsageFlag The boolean flag to include site usage metrics in the response body. If true, then the site element of the response will contain a usage node with the attributes numUsers (number of users) and storage (storage in megabytes). To set the flag to include usage in the response, append includeUsage=true as a querystring element any valid query site URI.
	 * @returns {Promise<SiteResponse>} Promise | undefined
	 */
	querySiteByID(queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.querySiteByID(siteId, queryOptions, opts);
    }

	/**
	 * Returns information about the specified site, with the option to return information about the storage space and user count for the site.
	 * @param {string} siteName The name of the site to get information for. If you specify a site name, you must also include the parameter key=name.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {boolean} queryOptions.includeUsageFlag The boolean flag to include site usage metrics in the response body. If true, then the site element of the response will contain a usage node with the attributes numUsers (number of users) and storage (storage in megabytes). To set the flag to include usage in the response, append includeUsage=true as a querystring element any valid query site URI.
	 * @returns {Promise<SiteResponse>} Promise | undefined
	 */
	querySiteByName(siteName, queryOptions) {
        const opts = this.execOpts({ });
        return api.querySiteByName(siteName, queryOptions, opts);
    }

	/**
	 * Returns information about the specified site, with the option to return information about the storage space and user count for the site.
	 * @param {string} contentUrl The URL of the site to get information for. If you specify a content URL, you must also include the parameter key=contentUrl.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {boolean} queryOptions.includeUsageFlag The boolean flag to include site usage metrics in the response body. If true, then the site element of the response will contain a usage node with the attributes numUsers (number of users) and storage (storage in megabytes). To set the flag to include usage in the response, append includeUsage=true as a querystring element any valid query site URI.
	 * @returns {Promise<SiteResponse>} Promise | undefined
	 */
	querySiteByContentUrl(contentUrl, queryOptions) {
        const opts = this.execOpts({ });
        return api.querySiteByContentUrl(contentUrl, queryOptions, opts);
    }

	/**
	 * Returns a list of the sites on the server that the caller of this method has access to. This method is not available for Tableau Online.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
	 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
	 * @returns {Promise<SitesResponse>} Promise | undefined
	 */
	querySites(queryOptions) {
        const opts = this.execOpts({ });
        return api.querySites(queryOptions, opts);
    }

	/**
	 * Gets the details of the views and workbooks on a site that have been most recently created, updated, or accessed by the signed in user. The 24 most recently viewed items are returned, though it may take some minutes after being viewed for an item to appear in the results.
	 * @returns {Promise<any>} Promise | undefined
	 */
	getRecentlyViewedForSite() {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.getRecentlyViewedForSite(siteId, opts);
    }

	/**
	 * Returns all the views for the specified site, optionally including usage statistics.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {boolean} queryOptions.getUsageInformation (Optional) true to return usage statistics. The default is false.
	 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
	 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
	 * @param {string} queryOptions.fieldExpression (Optional) An expression that lets you specify the set of available fields to return. You can qualify the return values based upon predefined keywords such as _all_ or _default_, and you can specify individual fields for the workbooks or other supported resources. You can include multiple field expressions in a request. For more information, see Using Fields in the REST API.
	 * @param {string} queryOptions.filterExpression <parameter documentation missing>
	 * @param {string} queryOptions.sortExpression <parameter documentation missing>
	 * @returns {Promise<ViewsResponse>} Promise | undefined
	 */
	queryViewsForSite(queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryViewsForSite(siteId, queryOptions, opts);
    }

	/**
	 * Modifies settings for the specified site, including the content URL, administration mode, user quota, state (active or suspended), storage quota, whether flows are enabled, whether subscriptions are enabled, and whether revisions are enabled. If you're working with Tableau Online, this method can also be used to upload a new logo image for the site.
	 * @param {SiteRequest} site site
	 * @returns {Promise<SiteResponse>} Promise | undefined
	 */
	updateSite(site) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.updateSite(siteId, site, opts);
    }

	/**
	 * Deletes the specified site.
	 * @param {string} siteName The name of the site to delete. If you specify a site name, you must also include the parameter key=name.
	 * @param {string} contentUrl The URL of the site to delete. If you specify a content URL, you must also include the parameter key=contentUrl.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteSite(siteName, contentUrl) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteSite(siteId, siteName, contentUrl, opts);
    }

	/**
	 * Deletes the specified site.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteSiteByID() {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteSiteByID(siteId, opts);
    }

	/**
	 * Deletes the specified site.
	 * @param {string} siteName The name of the site to delete. If you specify a site name, you must also include the parameter key=name.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteSiteByName(siteName) {
        const opts = this.execOpts({ });
        return api.deleteSiteByName(siteName, opts);
    }

	/**
	 * Deletes the specified site.
	 * @param {string} contentUrl The URL of the site to delete. If you specify a content URL, you must also include the parameter key=contentUrl.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteSiteByContentUrl(contentUrl) {
        const opts = this.execOpts({ });
        return api.deleteSiteByContentUrl(contentUrl, opts);
    }

	/**
	 * Deletes the specified data-driven alert from the specified site.
	 * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by calling Query Data-Driven Alerts.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteDataDrivenAlert(dataAlertId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteDataDrivenAlert(siteId, dataAlertId, opts);
    }

	/**
	 * Returns details on a specified data-driven alert, including the recipients of the alert.
	 * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by calling Query Data-Driven Alerts.
	 * @returns {Promise<DataAlertResponse>} Promise | undefined
	 */
	queryDataDrivenAlertDetails(dataAlertId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryDataDrivenAlertDetails(siteId, dataAlertId, opts);
    }

	/**
	 * Returns a list of data-driven alerts in use on the specified site.
	 * @returns {Promise<DataAlertsResponse>} Promise | undefined
	 */
	queryDataDrivenAlerts() {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryDataDrivenAlerts(siteId, opts);
    }

	/**
	 * Adds a specified user to the recipients list for a data-driven alert.
	 * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by calling Query Data-Driven Alerts.
	 * @param {UserRequest} user user
	 * @returns {Promise<UserResponse>} Promise | undefined
	 */
	addUserToDataDrivenAlert(dataAlertId, user) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addUserToDataDrivenAlert(siteId, dataAlertId, user, opts);
    }

	/**
	 * Removes a specified user from the recipients list for a data-driven alert.
	 * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by calling Query Data-Driven Alerts.
	 * @param {string} userId The ID (not name) of the user to remove from the data-driven alert.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteUserFromDataDrivenAlert(dataAlertId, userId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteUserFromDataDrivenAlert(siteId, dataAlertId, userId, opts);
    }

	/**
	 * Update one or more settings for the specified data-driven alert; including the alert subject, frequency, and owner.
	 * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by calling Query Data-Driven Alerts.
	 * @param {DataAlertRequest} dataAlert dataAlert
	 * @returns {Promise<DataAlertResponse>} Promise | undefined
	 */
	updateDataDrivenAlert(dataAlertId, dataAlert) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.updateDataDrivenAlert(siteId, dataAlertId, dataAlert, opts);
    }

	/**
	 * Adds permissions to the specified flow for a Tableau Server user or group. You can specify multiple sets of permissions using one call.
	 * @param {string} flowId <parameter documentation missing>
	 * @param {PermissionsRequest} permissions permissions
	 * @returns {Promise<PermissionsResponse>} Promise | undefined
	 */
	addFlowPermissions(flowId, permissions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addFlowPermissions(siteId, flowId, permissions, opts);
    }

	/**
	 * Note: This method is unavailable if you do not have the Data Management Add-on or Tableau Prep Conductor is disabled for your site.
	 * @param {string} scheduleId The ID of the schedule that you are associating with the flow. The schedule that you are adding to must have Flow as the schedule type.
	 * @param {TaskRequest} task task
	 * @returns {Promise<any>} Promise | undefined
	 */
	addFlowTaskToSchedule(scheduleId, task) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addFlowTaskToSchedule(siteId, scheduleId, task, opts);
    }

	/**
	 * Deletes a flow. When a flow is deleted, its associated connections, the output and input steps, any associated scheduled tasks, and run history are also deleted.
	 * @param {string} flowId The ID of the flow to delete.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteFlow(flowId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteFlow(siteId, flowId, opts);
    }

	/**
	 * Deletes the specified permission from the specified flow for a group or user.
	 * @param {string} flowId The ID of the flow to remove the permission for.
	 * @param {string} groupId The ID of the group to remove the permission for.
	 * @param {string} userId The ID of the user to remove the permission for.
	 * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a flow are ChangeHierarchy, ChangePermissions, Delete, Execute, ExportXml (Download), Read (view), and Write. For more information, see Permissions.
	 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteFlowPermission(flowId, groupId, userId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteFlowPermission(siteId, flowId, groupId, userId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Deletes the specified permission from the specified flow for a group or user.
	 * @param {string} flowId The ID of the flow to remove the permission for.
	 * @param {string} groupId The ID of the group to remove the permission for.
	 * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a flow are ChangeHierarchy, ChangePermissions, Delete, Execute, ExportXml (Download), Read (view), and Write. For more information, see Permissions.
	 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteFlowPermissionsForGroup(flowId, groupId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteFlowPermissionsForGroup(siteId, flowId, groupId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Deletes the specified permission from the specified flow for a group or user.
	 * @param {string} flowId The ID of the flow to remove the permission for.
	 * @param {string} userId The ID of the user to remove the permission for.
	 * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a flow are ChangeHierarchy, ChangePermissions, Delete, Execute, ExportXml (Download), Read (view), and Write. For more information, see Permissions.
	 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteFlowPermissionsForUser(flowId, userId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteFlowPermissionsForUser(siteId, flowId, userId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Downloads a flow in .tlsx format.
	 * @param {string} flowId The ID of the flow to download.
	 * @returns {Promise<any>} Promise | undefined
	 */
	downloadFlow(flowId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.downloadFlow(siteId, flowId, opts);
    }

	/**
	 * Returns information about the specified flow run task. This method shows you information about the scheduled task for the flow.
	 * @param {string} taskId The ID of the scheduled flow run task that you want information about.
	 * @returns {Promise<any>} Promise | undefined
	 */
	getFlowRunTask(taskId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.getFlowRunTask(siteId, taskId, opts);
    }

	/**
	 * Returns a list of scheduled flow tasks for the site.
	 * @returns {Promise<any>} Promise | undefined
	 */
	getFlowRunTasks() {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.getFlowRunTasks(siteId, opts);
    }

	/**
	 * Publishes a flow on the specified site. To make other changes to a published flow, call Update Flow or Update Flow Connection.
	 * @param {FlowRequest} flow flow
	 * @param {Object} file File Contents
	 * @returns {Promise<any>} Promise | undefined
	 */
	publishFlow(flow, file) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.publishFlow(siteId, flow, file, opts);
    }

	/**
	 * Returns information about the specified flow, including information about the project, owner, and output steps.
	 * @param {string} flowId The ID of the flow to return information about.
	 * @returns {Promise<any>} Promise | undefined
	 */
	queryFlow(flowId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryFlow(siteId, flowId, opts);
    }

	/**
	 * Returns a list of data connections for the specific flow.
	 * @param {string} flowId The ID of the flow to return connection information about.
	 * @returns {Promise<any>} Promise | undefined
	 */
	queryFlowConnections(flowId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryFlowConnections(siteId, flowId, opts);
    }

	/**
	 * Returns a list of permissions for the specific flow.
	 * @param {string} flowId The ID of the flow to get permissions for.
	 * @returns {Promise<any>} Promise | undefined
	 */
	queryFlowPermissions(flowId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryFlowPermissions(siteId, flowId, opts);
    }

	/**
	 * Returns the flows on a site. If the user is not an administrator, the method returns just the flows that the user has permissions to view.
	 * @returns {Promise<any>} Promise | undefined
	 */
	queryFlowsForSite() {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryFlowsForSite(siteId, opts);
    }

	/**
	 * Returns the flows that the specified user owns in addition to those that the user has Read (view) permissions for.
	 * @param {string} userId The ID of the user to get flows for.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {boolean} queryOptions.isOwner (Optional) trueto return only flows that the specified user owns, or falseto return all flows that the specified user has at least read access to. The default is false.
	 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
	 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
	 * @returns {Promise<any>} Promise | undefined
	 */
	queryFlowsForUser(userId, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryFlowsForUser(siteId, userId, queryOptions, opts);
    }

	/**
	 * Runs the specified flow run task.
	 * @param {string} taskId The ID of the flow run task that you want to run.
	 * @returns {Promise<any>} Promise | undefined
	 */
	runFlowTask(taskId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.runFlowTask(siteId, taskId, opts);
    }

	/**
	 * Updates the owner, project, of the specified flow.
	 * @param {string} flowId <parameter documentation missing>
	 * @returns {Promise<any>} Promise | undefined
	 */
	updateFlow(flowId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.updateFlow(siteId, flowId, opts);
    }

	/**
	 * Updates the server address, port, username, or password for the specified flow connection. The connection can be an input or an output connection.
	 * @param {string} flowId The ID of the flow to update.
	 * @param {string} connectionId The ID of the connection to update. To determine what connections are available for a flow, call Query Flow Connections.
	 * @returns {Promise<any>} Promise | undefined
	 */
	updateFlowConnection(flowId, connectionId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.updateFlowConnection(siteId, flowId, connectionId, opts);
    }

	/**
	 * Creates a project on the specified site. You can also create project hierarchies by creating a project under the specified parent project on the site. To make changes to an existing project, call Update Project.
	 * @param {ProjectRequest} project project
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {boolean} queryOptions.publishValue (Optional) A Boolean value that specifies whether to publish the sample workbooks provided by Tableau to the project. When the publish-value is not specified in the request, or the publishSamples parameter is missing, no samples will be published. To publish the sample workbooks, set publishSamples parameter to true. This option is equivalent to the tabcmd command-line utility option, publishsamples. For more information, see tabcmd(Link opens in a new window).
	 * @returns {Promise<ProjectResponse>} Promise | undefined
	 */
	createProject(project, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.createProject(siteId, project, queryOptions, opts);
    }

	/**
	 * Returns a list of projects on the specified site, with optional parameters for specifying the paging of large results.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
	 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
	 * @param {string} queryOptions.filterExpression (Optional) An expression that lets you specify a subset of data sources to return. You can filter on predefined fields such as name, ownerName, and parentProjectId. You can include multiple filter expressions. For more information, see Filtering and Sorting.
	 * @param {string} queryOptions.sortExpression (Optional) An expression that lets you specify the order in which user information is returned. If you do not specify a sort expression, the sort order of the information that's returned is undefined. For more information, see Filtering and Sorting.
	 * @returns {Promise<ProjectsResponse>} Promise | undefined
	 */
	queryProjects(queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryProjects(siteId, queryOptions, opts);
    }

	/**
	 * Updates the name, description, or project hierarchy of the specified project. You can create or update project hierarchies by specifying a parent project for the project that you are updating using this method.
	 * @param {string} projectId The ID of the project to update.
	 * @param {ProjectRequest} project project
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {boolean} queryOptions.publishValue (Optional) A Boolean value that specifies whether to publish the sample workbooks provided by Tableau to the project when you update the project. When the publish-value is not specified in the request, or the publishSamples parameter is missing, no samples will be published. To publish the sample workbooks, set publishSamples parameter to true. This option is equivalent to the tabcmd command-line utility option, publishsamples. For more information, see tabcmd(Link opens in a new window).
	 * @returns {Promise<ProjectResponse>} Promise | undefined
	 */
	updateProject(projectId, project, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.updateProject(siteId, projectId, project, queryOptions, opts);
    }

	/**
	 * Deletes the specified project on a specific site. When a project is deleted, all of its assets are also deleted: associated workbooks, data sources, project view options, and rights. Use this method with caution.
	 * @param {string} projectId The ID of the project to delete.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteProject(projectId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteProject(siteId, projectId, opts);
    }

	/**
	 * Publishes a workbook on the specified site. To make changes to a published workbook, call Update Workbook or Update Workbook Connection.
	 * @param {WorkbookRequest} workbook workbook
	 * @param {Object} file File Contents
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {boolean} queryOptions.overwriteFlag (Optional) true to overwrite a workbook that has the same name, or false to fail if the specified workbook already exists. The default is false. If overwrite-flag is set to true but the workbook doesn't already exist, the operation succeeds.
	 * @param {boolean} queryOptions.asJobValue (Optional, boolean) If false, the workbook publishing process runs as a synchronous process. If a workbook is very large, the process might time out before it finishes. If you set this value to true, the process runs asynchronously, and a job will start to perform the publishing process and return the job ID. You can check the status of the import job by calling Query Job. Default value is false.
	 * @param {boolean} queryOptions.skipConnectionCheckFlag (Optional, boolean) If true, then the Tableau server will not check if a non-published connection of a workbook is reachable. Publishing will succeed but unchecked connection issues may result in a non-functioning workbook. If you encounter this issue, follow Keep Data Fresh guidelines(Link opens in a new window). Default value is false.
	 * @param {string} queryOptions.uploadSessionId If you are calling this method to commit a file that was uploaded in parts, this value contains the upload session ID that was generated by a call to Initiate File Upload. If this value is not included, the server assumes that the body of the request contains the file to be published.
	 * @param {string} queryOptions.workbookFileType twb or twbx to indicate whether you have uploaded a workbook file (twb) or a packaged workbook file (twbx). This value is required if you are calling Publish Workbook in order to commit a file that was previously uploaded using Append to File Upload. The value is not used if you upload a file in the body of the request.
	 * @returns {Promise<WorkbookResponse>} Promise | undefined
	 */
	publishWorkbook(workbook, file, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.publishWorkbook(siteId, workbook, file, queryOptions, opts);
    }

	/**
	 * Adds one or more tags to the specified view.
	 * @param {string} viewId The ID of the views to add tags to.
	 * @param {TagsRequest} tags tags
	 * @returns {Promise<TagsResponse>} Promise | undefined
	 */
	addTagsToView(viewId, tags) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addTagsToView(siteId, viewId, tags, opts);
    }

	/**
	 * Adds one or more tags to the specified workbook.
	 * @param {string} workbookId The ID of the workbook to add tags to.
	 * @param {TagsRequest} tags tags
	 * @returns {Promise<TagsResponse>} Promise | undefined
	 */
	addTagsToWorkbook(workbookId, tags) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addTagsToWorkbook(siteId, workbookId, tags, opts);
    }

	/**
	 * Returns all the views for the specified workbook, optionally including usage statistics.
	 * @param {string} workbookId The ID of the workbook to get the views for.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {boolean} queryOptions.getUsageInformation true to return usage statistics. The default is false.
	 * @returns {Promise<ViewsResponse>} Promise | undefined
	 */
	queryViewsForWorkbook(workbookId, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryViewsForWorkbook(siteId, workbookId, queryOptions, opts);
    }

	/**
	 * Returns a specified view rendered as data in comma-separated-value (CSV) format.
	 * @param {string} viewId The ID of the view to render as data.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {number} queryOptions.maxAgeMinutes (Optional) The maximum number of minutes view data will be cached before being refreshed. To prevent multiple view data requests from overloading the server, the shortest interval you can set is one minute. There is no maximum value, but the server job enacting the caching action may expire before a long cache period is reached.
	 * @param {string} queryOptions.filterValue The value of the field that you want to use to filter the workbook view. For example, a workbook with the filter /data?vf_year=2017 would only display data from the year 2017. To learn more, see Filter query views.
	 * @returns {Promise<any>} Promise | undefined
	 */
	queryViewData(viewId, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryViewData(siteId, viewId, queryOptions, opts);
    }

	/**
	 * Returns an image of the specified view.
	 * @param {string} viewId The ID of the view to return an image for.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {string} queryOptions.imageResolution (Optional) The resolution of the image. Image width and actual pixel density are determined by the display context of the image. Aspect ratio is always preserved. Set the value to high to ensure maximum pixel density.
	 * @param {number} queryOptions.maxAgeMinutes (Optional) The maximum number of minutes a view image will be cached before being refreshed. To prevent multiple image requests from overloading the server, the shortest interval you can set is one minute. There is no maximum value, but the server job enacting the caching action may expire before a long cache period is reached.
	 * @param {string} queryOptions.filterValue The value of the field that you want to use to filter the workbook view. For example, a workbook with the filter /data?vf_year=2017 would only display data from the year 2017. To learn more, see Filter query views.
	 * @returns {Promise<any>} Promise | undefined
	 */
	queryViewImage(viewId, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryViewImage(siteId, viewId, queryOptions, opts);
    }

	/**
	 * Returns a specified view rendered as a .pdf file.
	 * @param {string} viewId The ID of the view to render as a .pdf file.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {string} queryOptions.filterValue The value of the field that you want to use to filter the workbook view. For example, a workbook with the filter /data?vf_year=2017 would only display data from the year 2017. To learn more, see Filter query views.
	 * @param {number} queryOptions.maxAgeMinutes (Optional) The maximum number of minutes a view PDF will be cached before being refreshed. To prevent multiple PDF requests from overloading the server, the shortest interval you can set is one minute. There is no maximum value, but the server job enacting the caching action may expire before a long cache period is reached.
	 * @param {string} queryOptions.pageOrientation (Optional) The orientation of the pages in the .pdf file produced. The value can be Portrait or Landscape. If this parameter is not present the page orientation will default to Portrait.
	 * @param {string} queryOptions.pageType (Optional) The type of page, which determines the page dimensions of the .pdf file returned. The value can be: A3, A4, A5, B5, Executive, Folio, Ledger, Legal, Letter, Note, Quarto, or Tabloid. If this parameter is not present the page type will default to Legal.
	 * @returns {Promise<any>} Promise | undefined
	 */
	queryViewPDF(viewId, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryViewPDF(siteId, viewId, queryOptions, opts);
    }

	/**
	 * Returns the thumbnail image for the specified view.
	 * @param {string} workbookId The ID of the workbook that contains the view to return a thumbnail image for.
	 * @param {string} viewId The ID of the view to return a thumbnail image for.
	 * @returns {Promise<any>} Promise | undefined
	 */
	queryViewPreviewImage(workbookId, viewId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryViewPreviewImage(siteId, workbookId, viewId, opts);
    }

	/**
	 * Returns information about the specified workbook, including information about views and tags.
	 * @param {string} workbookId The ID of the workbook to return information about.
	 * @returns {Promise<WorkbookResponse>} Promise | undefined
	 */
	queryWorkbook(workbookId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryWorkbook(siteId, workbookId, opts);
    }

	/**
	 * Returns a list of data connections for the specific workbook.
	 * @param {string} workbookId The ID of the workbook to return connection information about.
	 * @returns {Promise<ConnectionsResponse>} Promise | undefined
	 */
	queryWorkbookConnections(workbookId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryWorkbookConnections(siteId, workbookId, opts);
    }

	/**
	 * Gets the details of a specific view.
	 * @param {string} viewId The ID of the view whose details are requested.
	 * @returns {Promise<ViewResponse>} Promise | undefined
	 */
	getView(viewId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.getView(siteId, viewId, opts);
    }

	/**
	 * Gets the details of all views in a site with a specified name.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {string} queryOptions.viewName The name of the view as it appears in the URL to the view. For https://MY_SERVER/#/MY_SITE/views/workbook-name/Sheet1?:iid=1, the name would be Sheet1.
	 * @returns {Promise<ViewResponse>} Promise | undefined
	 */
	getViewByPath(queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.getViewByPath(siteId, queryOptions, opts);
    }

	/**
	 * Gets a list of views that are recommended for a user. Using machine learning, the server will match preferences between similar users and recommend content that is most popular and recently viewed. When a recommended view is selected and not marked as hidden, it appears on the server Home and Recommendations pages.
	 * @returns {Promise<any>} Promise | undefined
	 */
	getViewRecommendations() {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.getViewRecommendations(siteId, opts);
    }

	/**
	 * Returns a list of revision information (history) for the specified workbook.
	 * @param {string} workbookId The ID of the workbook to get revisions for.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
	 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
	 * @returns {Promise<RevisionsResponse>} Promise | undefined
	 */
	getWorkbookRevisions(workbookId, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.getWorkbookRevisions(siteId, workbookId, queryOptions, opts);
    }

	/**
	 * Hides a view from being recommended by the server by adding it to a list of views that are dismissed for a user. If hidden, a view will not be displayed on the server Home or Recommendation pages.
	 * @param {RecommendationDismissalRequest} recommendationDismissal recommendationDismissal
	 * @returns {Promise<any>} Promise | undefined
	 */
	hideViewRecommendations(recommendationDismissal) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.hideViewRecommendations(siteId, recommendationDismissal, opts);
    }

	/**
	 * Unhides a view from being recommended by the server by removing it from the list of views that are dimissed for a user. If the unhidden view meets the criteria for being recommended, then it will be displayed on the server Home or Recommendation pages.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {string} queryOptions.viewLuid The LUID of the view to be removed from the list of views hidden from recommendation for a user.
	 * @returns {Promise<any>} Promise | undefined
	 */
	unhideViewRecommendations(queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.unhideViewRecommendations(siteId, queryOptions, opts);
    }

	/**
	 * Returns the thumbnail image as a PNG file for the specified workbook. Usually the image that is returned is for the first sheet in the workbook.
	 * @param {string} workbookId The ID of the workbook to return the thumbnail image for.
	 * @returns {Promise<any>} Promise | undefined
	 */
	queryWorkbookPreviewImage(workbookId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryWorkbookPreviewImage(siteId, workbookId, opts);
    }

	/**
	 * Returns the workbooks on a site.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {string} queryOptions.filterExpression (Optional) An expression that lets you specify a subset of workbooks to return. You can filter on predefined fields such as name, tags, and createdAt. You can include multiple filter expressions. For more information, see Filtering and Sorting.
	 * @param {string} queryOptions.sortExpression (Optional) An expression that lets you specify the order in which workbook information is returned. If you do not specify a sort expression, the sort order of the information that's returned is undefined. For more information, see Filtering and Sorting.
	 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
	 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
	 * @param {string} queryOptions.fieldExpression (Optional) An expression that lets you specify the set of available fields to return. You can qualify the return values based upon predefined keywords such as _all_ or _default_, and you can specify individual fields for the workbooks or other supported resources. You can include multiple field expressions in a request. For more information, see Using Fields in the REST API.
	 * @returns {Promise<WorkbooksResponse>} Promise | undefined
	 */
	queryWorkbooksForSite(queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryWorkbooksForSite(siteId, queryOptions, opts);
    }

	/**
	 * Returns the workbooks that the specified user owns in addition to those that the user has Read (view) permissions for.
	 * @param {string} userId The ID of the user to get workbooks for.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {boolean} queryOptions.isOwner (Optional) true to return only workbooks that the specified user owns, or false to return all workbooks that the specified user has at least read access to. The default is false.
	 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
	 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
	 * @returns {Promise<WorkbooksResponse>} Promise | undefined
	 */
	queryWorkbooksForUser(userId, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryWorkbooksForUser(siteId, userId, queryOptions, opts);
    }

	/**
	 * Downloads an Excel (.xlsx) file containing crosstab data from a view that the user has permission to access in a workbook. If a crosstab is exported from a dashboard, data from only the first view in the dashboard will appear in the .xlsx file. Downloads of data from story dashboards are not supported at this time.
	 * @param {string} viewId The ID of the view to use as the source of the crosstab to be downloaded as an .xlsx file.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {number} queryOptions.maxAgeMinutes (Optional) The maximum number of minutes an .xlsx file will be cached on the server before being refreshed. To prevent multiple .xlsx requests from overloading the server, the shortest interval you can set is one minute. There is no maximum value, but the server job enacting the caching action may expire before a long cache period is reached.
	 * @returns {Promise<any>} Promise | undefined
	 */
	downloadViewCrosstabExcel(viewId, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.downloadViewCrosstabExcel(siteId, viewId, queryOptions, opts);
    }

	/**
	 * Downloads a workbook in .twb or .twbx format.
	 * @param {string} workbookId The ID of the workbook to download.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {string} queryOptions.extractValue (Optional) The extract-value is a Boolean value (False or True). When the workbook specified for download has an extract, if you add the parameter ?includeExtract=False, the extract is not included when you download the workbook. You can use this option to improve performance if you are downloading workbooks or data sources that have large extracts.
	 * @returns {Promise<any>} Promise | undefined
	 */
	downloadWorkbook(workbookId, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.downloadWorkbook(siteId, workbookId, queryOptions, opts);
    }

	/**
	 * Downloads a .pdf containing images of the sheets that the user has permission to view in a workbook. Download Images/PDF permissions must be enabled for the workbook (true by default). If Show sheets in tabs is not selected for the workbook, only the default tab will appear in the .pdf file.
	 * @param {string} workbookId The ID of the workbook to use as the source of the .pdf file to be downloaded.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {number} queryOptions.maxAgeMinutes (Optional) The maximum number of minutes a workbook PDF will be cached before being refreshed. To prevent multiple PDF requests from overloading the server, the shortest interval you can set is one minute. There is no maximum value, but the server job enacting the caching action may expire before a long cache period is reached.
	 * @param {string} queryOptions.pageOrientation (Optional) The orientation of the pages in the .pdf file produced. The value can be Portrait or Landscape. If this parameter is not present the page orientation will default to Portrait.
	 * @param {string} queryOptions.pageType (Optional) The type of page, which determines the page dimensions of the .pdf file returned. The value can be: A3, A4, A5, B5, Executive, Folio, Ledger, Legal, Letter, Note, Quarto, or Tabloid. If this parameter is not present the page type will default to Legal.
	 * @returns {Promise<any>} Promise | undefined
	 */
	downloadWorkbookPDF(workbookId, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.downloadWorkbookPDF(siteId, workbookId, queryOptions, opts);
    }

	/**
	 * Downloads a PowerPoint (.pptx) file containing slides with images of the sheets that the user has permission to view in a workbook. Download Images/PDF permissions must be enabled for the workbook (true by default). If Show sheets in tabs is not selected for the workbook, only the default tab will appear in the .pptx file.
	 * @param {string} workbookId The ID of the workbook to use as the source of the .pptx file to be downloaded.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {number} queryOptions.maxAgeMinutes (Optional) The maximum number of minutes a workbook .pptx will be cached before being refreshed. To prevent multiple .pptx requests from overloading the server, the shortest interval you can set is one minute. There is no maximum value, but the server job enacting the caching action may expire before a long cache period is reached.
	 * @returns {Promise<any>} Promise | undefined
	 */
	downloadWorkbookPowerpoint(workbookId, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.downloadWorkbookPowerpoint(siteId, workbookId, queryOptions, opts);
    }

	/**
	 * Downloads a specific version of a workbook in .twb or .twbx format.
	 * @param {string} workbookId The ID of the workbook to download.
	 * @param {number} revisionNumber The revision number of the workbook to download. To determine what versions are available, call Get Workbook Revisions. Note that the current revision of a workbook cannot be accessed by this call; use Download Workbook instead.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {string} queryOptions.extractValue (Optional) The extract-value is a Boolean value (False or True). When the workbook specified for download has an extract, if you add the parameter ?includeExtract=False, the extract is not included when you download the workbook. You can use this option to improve performance if you are downloading workbooks or data sources that have large extracts.
	 * @returns {Promise<any>} Promise | undefined
	 */
	downloadWorkbookRevision(workbookId, revisionNumber, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.downloadWorkbookRevision(siteId, workbookId, revisionNumber, queryOptions, opts);
    }

	/**
	 * Modifies an existing workbook, allowing you to change the owner or project that the workbook belongs to and whether the workbook shows views in tabs. Updated workbooks can optionally be marked to appear in the recently viewed list.
	 * @param {string} workbookId The ID of the workbook to update.
	 * @param {WorkbookRequest} workbook workbook
	 * @returns {Promise<WorkbookResponse>} Promise | undefined
	 */
	updateWorkbook(workbookId, workbook) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.updateWorkbook(siteId, workbookId, workbook, opts);
    }

	/**
	 * Updates the server address, port, username, or password for the specified workbook connection.
	 * @param {string} workbookId The ID of the workbook to update.
	 * @param {string} connectionId The ID of the connection to update.
	 * @param {ConnectionRequest} connection connection
	 * @returns {Promise<ConnectionResponse>} Promise | undefined
	 */
	updateWorkbookConnection(workbookId, connectionId, connection) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.updateWorkbookConnection(siteId, workbookId, connectionId, connection, opts);
    }

	/**
	 * Refreshes the specified workbook.
	 * @param {string} workbookId The ID of the workbook to refresh.
	 * @returns {Promise<JobResponse>} Promise | undefined
	 */
	updateWorkbookNow(workbookId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.updateWorkbookNow(siteId, workbookId, opts);
    }

	/**
	 * Deletes a workbook. When a workbook is deleted, all of its assets are also deleted, including associated views, data connections, and so on.
	 * @param {string} workbookId The ID of the workbook to remove.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteWorkbook(workbookId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteWorkbook(siteId, workbookId, opts);
    }

	/**
	 * Deletes a tag from the specified view.
	 * @param {string} viewId The ID of the view to remove the tag from.
	 * @param {string} tagName The name of the tag to remove from the view.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteTagFromView(viewId, tagName) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteTagFromView(siteId, viewId, tagName, opts);
    }

	/**
	 * Deletes a tag from the specified workbook.
	 * @param {string} workbookId The ID of the workbook to remove the tag from.
	 * @param {string} tagName The name of the tag to remove from the workbook.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteTagFromWorkbook(workbookId, tagName) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteTagFromWorkbook(siteId, workbookId, tagName, opts);
    }

	/**
	 * Returns a report about data acceleration for the site. It lets you compare page load times for before and after data acceleration is enabled.
	 * @returns {Promise<DataAccelerationReportResponse>} Promise | undefined
	 */
	getDataAccelerationReportForASite() {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.getDataAccelerationReportForASite(siteId, opts);
    }

	/**
	 * Publishes a data source on the specified site, or appends data to an existing data source. To make other changes to a published data source, call Update Data Source or Update Data Source Connection.
	 * @param {DatasourceRequest} datasource datasource
	 * @param {Object} file File Contents
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {boolean} queryOptions.overwriteFlag (Optional) true to overwrite a data source that has the same name, or false to fail if the specified data source already exists. The default is false. If overwrite-flag is set to true but the data source doesn't already exist, the operation succeeds. You can include both the overwrite and append parameters in a request, but they cannot both be true.
	 * @param {boolean} queryOptions.asJobValue (Optional) A Boolean value that is used to publish data sources asynchronously. If you set this value to false (the default), the publishing process runs as a synchronous process. If a data source is very large, the process might time out before it finishes. If you set this value to true, the process runs asynchronously, and a job will start to perform the publishing process and return the job ID. You can check the status of the import job by calling Query Job.
	 * @param {boolean} queryOptions.appendFlag (Optional) true to append the data being published to an existing data source that has the same name. The default is false. If append-flag is set to true but the data source doesn't already exist, the operation fails. In order to append data to an existing data source, both the data source on the server and the data source you are publishing must be extracts (.tde and .hyper files). The schemas of the two extracts must match. If an extract was stored using the multiple tables option, you can't append data to it.You can include both the overwrite and append parameters in a request, but they cannot both be true.
	 * @param {string} queryOptions.uploadSessionId If you are calling this method to commit a file that was uploaded in parts, this value contains the upload session ID that was generated by a call to Initiate File Upload. If this value is not included, the server assumes that the body of the request contains the file to be published.
	 * @param {string} queryOptions.datasourceFileType hyper, tds, tdsx, or tde the kind of file that you are uploading. This value is required if you are calling Publish Data Source in order to commit a file that was previously uploaded using Append to File Upload. The value is not used if you upload a file in the body of the request.
	 * @returns {Promise<DatasourceResponse>} Promise | undefined
	 */
	publishDataSource(datasource, file, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.publishDataSource(siteId, datasource, file, queryOptions, opts);
    }

	/**
	 * Adds one or more tags to the specified data source.
	 * @param {string} datasourceId The ID of the data source to add tags to.
	 * @param {TagsRequest} tags tags
	 * @returns {Promise<TagsResponse>} Promise | undefined
	 */
	addTagsToDataSource(datasourceId, tags) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addTagsToDataSource(siteId, datasourceId, tags, opts);
    }

	/**
	 * Deletes a tag from the specified data source.
	 * @param {string} datasourceId The ID of the data source to remove the tag from.
	 * @param {string} tagName The name of the tag to remove from the data source.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteTagFromDataSource(datasourceId, tagName) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteTagFromDataSource(siteId, datasourceId, tagName, opts);
    }

	/**
	 * Returns information about the specified data source.
	 * @param {string} datasourceId The ID of the data source to get.
	 * @returns {Promise<DatasourceResponse>} Promise | undefined
	 */
	queryDataSource(datasourceId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryDataSource(siteId, datasourceId, opts);
    }

	/**
	 * Returns a list of published data sources on the specified site, with optional parameters for specifying the paging of large results. To get a list of data sources embedded in a workbook, use the Query Workbook Connections method.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
	 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
	 * @param {string} queryOptions.filterExpression (Optional) An expression that lets you specify a subset of data sources to return. You can filter on predefined fields such as name and updatedAt. You can include multiple filter expressions. For more information, see Filtering and Sorting.
	 * @param {string} queryOptions.sortExpression (Optional) An expression that lets you specify the order in which user information is returned. If you do not specify a sort expression, the sort order of the information that's returned is undefined. For more information, see Filtering and Sorting.
	 * @param {string} queryOptions.fieldExpression (Optional) An expression that lets you specify the set of available fields to return. You can qualify the return values based upon predefined keywords such as _all_ or _default_, and you can specify individual fields for the data sources or other supported resources. You can include multiple field expressions in a request. For more information, see Using Fields in the Rest API.
	 * @returns {Promise<DatasourcesResponse>} Promise | undefined
	 */
	queryDataSources(queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryDataSources(siteId, queryOptions, opts);
    }

	/**
	 * Returns a list of data connections for the specified data source.
	 * @param {string} datasourceId The ID of the data source to return connection information about.
	 * @returns {Promise<ConnectionsResponse>} Promise | undefined
	 */
	queryDataSourceConnections(datasourceId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryDataSourceConnections(siteId, datasourceId, opts);
    }

	/**
	 * Returns a list of revision information (history) for the specified data source.
	 * @param {string} datasourceId The ID of the data source to get revisions for.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
	 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
	 * @returns {Promise<RevisionsResponse>} Promise | undefined
	 */
	getDataSourceRevisions(datasourceId, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.getDataSourceRevisions(siteId, datasourceId, queryOptions, opts);
    }

	/**
	 * Downloads a data source in .tdsx format.
	 * @param {string} datasourceId The ID of the data source to download.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {string} queryOptions.extractValue (Optional) The extract-value is a Boolean value (False or True). When the data source specified for download has an extract, if you add the parameter ?includeExtract=False, the extract is not included when you download the data source. You can use this parameter to improve performance if you are downloading workbooks or data sources that have large extracts.
	 * @returns {Promise<any>} Promise | undefined
	 */
	downloadDataSource(datasourceId, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.downloadDataSource(siteId, datasourceId, queryOptions, opts);
    }

	/**
	 * Downloads a specific version of a data source in .tdsx format.
	 * @param {string} datasourceId The ID of the data source to download.
	 * @param {number} revisionNumber The revision number of the data source to download. To determine what versions are available, call Get Data Source Revisions.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {string} queryOptions.extractValue (Optional) The extract-value is a Boolean value (False or True). When the data source specified for download has an extract, if you add the parameter ?includeExtract=False, the extract is not included when you download the data source. You can use this parameter to improve performance if you are downloading workbooks or data sources that have large extracts.
	 * @returns {Promise<any>} Promise | undefined
	 */
	downloadDataSourceRevision(datasourceId, revisionNumber, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.downloadDataSourceRevision(siteId, datasourceId, revisionNumber, queryOptions, opts);
    }

	/**
	 * Updates the owner, project or certification status of the specified data source.
	 * @param {string} datasourceId The ID of the data source to update.
	 * @param {DatasourceRequest} datasource datasource
	 * @returns {Promise<DatasourceResponse>} Promise | undefined
	 */
	updateDataSource(datasourceId, datasource) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.updateDataSource(siteId, datasourceId, datasource, opts);
    }

	/**
	 * Updates the server address, port, username, or password for the specified data source connection.
	 * @param {string} datasourceId The ID of the data source to update.
	 * @param {string} connectionId The ID of the connection to update. To determine what connections are available for a data source, call Query Data Source Connections.
	 * @param {ConnectionRequest} connection connection
	 * @returns {Promise<ConnectionResponse>} Promise | undefined
	 */
	updateDataSourceConnection(datasourceId, connectionId, connection) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.updateDataSourceConnection(siteId, datasourceId, connectionId, connection, opts);
    }

	/**
	 * Runs an extract refresh on the specified data source.
	 * @param {string} datasourceId The ID of the data source to refresh.
	 * @returns {Promise<JobResponse>} Promise | undefined
	 */
	updateDataSourceNow(datasourceId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.updateDataSourceNow(siteId, datasourceId, opts);
    }

	/**
	 * Deletes the specified data source from a site. When a data source is deleted, its associated data connection is also deleted. Workbooks that use the data source are not deleted, but they will no longer work properly.
	 * @param {string} datasourceId The ID of the data source to delete.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteDataSource(datasourceId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteDataSource(siteId, datasourceId, opts);
    }

	/**
	 * Removes a specific version of a data source from the specified site.
	 * @param {string} datasourceId The ID of the data source to remove the revision for.
	 * @param {number} revisionNumber The revision number of the data source to remove. To determine what versions are available, call Get Data Source Revisions.
	 * @returns {Promise<any>} Promise | undefined
	 */
	removeDataSourceRevision(datasourceId, revisionNumber) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.removeDataSourceRevision(siteId, datasourceId, revisionNumber, opts);
    }

	/**
	 * Creates a group in Tableau Server. If the server is configured to use Active Directory for authentication, this method can create a group in Tableau Server and then import users from an Active Directory group.
	 * @param {GroupRequest} group group
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {boolean} queryOptions.asJobValue A Boolean value that is used if you are importing from Active Directory. If you set this to false (the default), the import process runs as a synchronous process. If the Active Directory group contains many users, the process might time out before it finishes.  If you set this to true, the process runs asynchronously. In that case, Tableau Server starts a job to perform the import and returns the job ID in the Location header. You can check the status of the import job by calling Query Job. Note: This parameter has no effect if the server is configured to use local authentication.
	 * @returns {Promise<GroupResponse>} Promise | undefined
	 */
	createGroup(group, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.createGroup(siteId, group, queryOptions, opts);
    }

	/**
	 * Adds a user to the specified group.
	 * @param {string} groupId The ID of the group to add the user to.
	 * @param {UserRequest} user user
	 * @returns {Promise<UserResponse>} Promise | undefined
	 */
	addUserToGroup(groupId, user) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addUserToGroup(siteId, groupId, user, opts);
    }

	/**
	 * Adds a user to Tableau Server and assigns the user to the specified site.
	 * @param {UserRequest} user user
	 * @returns {Promise<UserResponse>} Promise | undefined
	 */
	addUserToSite(user) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addUserToSite(siteId, user, opts);
    }

	/**
	 * Gets a list of groups of which the specified user is a member.
	 * @param {string} userId The ID of the user whose group memberships are listed.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
	 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
	 * @returns {Promise<GroupsResponse>} Promise | undefined
	 */
	getGroupsForAUser(userId, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.getGroupsForAUser(siteId, userId, queryOptions, opts);
    }

	/**
	 * Gets a list of users in the specified group.
	 * @param {string} groupId The ID of the group to get the users for.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
	 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
	 * @returns {Promise<UsersResponse>} Promise | undefined
	 */
	getUsersInGroup(groupId, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.getUsersInGroup(siteId, groupId, queryOptions, opts);
    }

	/**
	 * Returns the users associated with the specified site.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {string} queryOptions.filterExpression (Optional) An expression that lets you specify a subset of users to return. You can filter on predefined fields such as name and lastLogin. You can include multiple filter expressions. For more information, see Filtering and Sorting.
	 * @param {string} queryOptions.sortExpression (Optional) An expression that lets you specify the order in which user information is returned. If you do not specify a sort expression, the sort order of the information that's returned is undefined. For more information, see Filtering and Sorting.
	 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
	 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
	 * @param {string} queryOptions.fieldExpression (Optional) An expression that lets you specify the set of available fields to return. You can qualify the return values based upon predefined keywords such as _all_ or _default_, and you can specify individual fields for the views or other supported resources. You can include multiple field expressions in a request. For more information, see Using Fields in the REST API.
	 * @returns {Promise<UsersResponse>} Promise | undefined
	 */
	getUsersOnSite(queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.getUsersOnSite(siteId, queryOptions, opts);
    }

	/**
	 * Returns a list of groups on the specified site, with optional parameters for specifying the paging of large results.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
	 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
	 * @param {string} queryOptions.filterExpression (Optional) An expression that lets you specify a subset of groups to return. You can filter on predefined fields such as name. You can include multiple filter expressions. For more information, see Filtering and Sorting.
	 * @param {string} queryOptions.sortExpression (Optional) An expression that lets you specify the order in which user information is returned. If you do not specify a sort expression, the sort order of the information that's returned is undefined. For more information, see Filtering and Sorting.
	 * @returns {Promise<GroupsResponse>} Promise | undefined
	 */
	queryGroups(queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryGroups(siteId, queryOptions, opts);
    }

	/**
	 * Returns information about the specified user.
	 * @param {string} userId The ID of the user to get information for.
	 * @returns {Promise<UserResponse>} Promise | undefined
	 */
	queryUserOnSite(userId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryUserOnSite(siteId, userId, opts);
    }

	/**
	 * Updates a group in Tableau Server.
	 * @param {string} groupId The ID of the group to update.
	 * @param {GroupRequest} group group
	 * @returns {Promise<any>} Promise | undefined
	 */
	updateGroup(groupId, group) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.updateGroup(siteId, groupId, group, opts);
    }

	/**
	 * Modifies information about the specified user.
	 * @param {string} userId The ID of the user to update.
	 * @param {UserRequest} user user
	 * @returns {Promise<UserResponse>} Promise | undefined
	 */
	updateUser(userId, user) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.updateUser(siteId, userId, user, opts);
    }

	/**
	 * Removes a user from the specified group.
	 * @param {string} groupId The ID of the group to remove the user from.
	 * @param {string} userId The ID of the user to remove.
	 * @returns {Promise<any>} Promise | undefined
	 */
	removeUserFromGroup(groupId, userId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.removeUserFromGroup(siteId, groupId, userId, opts);
    }

	/**
	 * Removes a user from the specified site. If a user still owns content (assets) on Tableau Server, the user cannot be deleted unless the ownership is reassigned first.
	 * @param {string} userId The ID of the user to remove.
	 * @returns {Promise<any>} Promise | undefined
	 */
	removeUserFromSite(userId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.removeUserFromSite(siteId, userId, opts);
    }

	/**
	 * Deletes the group on a specific site. Deleting a group does not delete the users in group, but users are no longer members of the group. Any permissions that were previously assigned to the group no longer apply.
	 * @param {string} groupId The ID of the group to delete.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteGroup(groupId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteGroup(siteId, groupId, opts);
    }

	/**
	 * Get information about a database asset.
	 * @param {string} databaseId The unique ID of the database asset.
	 * @returns {Promise<any>} Promise | undefined
	 */
	queryDatabase(databaseId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryDatabase(siteId, databaseId, opts);
    }

	/**
	 * Get information about all database assets for a site.
	 * @returns {Promise<any>} Promise | undefined
	 */
	queryDatabases() {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryDatabases(siteId, opts);
    }

	/**
	 * Update the database description, certify a database, or assign a contact (must be a Tableau Server or Tableau Online user) to the database asset.
	 * @param {string} databaseId The unique ID of the database asset.
	 * @returns {Promise<any>} Promise | undefined
	 */
	updateDatabase(databaseId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.updateDatabase(siteId, databaseId, opts);
    }

	/**
	 * Permanently remove the database asset.
	 * @param {string} databaseId The unique ID of the database asset.
	 * @returns {Promise<any>} Promise | undefined
	 */
	removeDatabase(databaseId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.removeDatabase(siteId, databaseId, opts);
    }

	/**
	 * Add permissions to a database asset. To add permissions, the database asset must be associated with a published data source.
	 * @param {string} databaseId The unique ID of the database asset.
	 * @param {PermissionsRequest} permissions permissions
	 * @returns {Promise<any>} Promise | undefined
	 */
	addDatabasePermissions(databaseId, permissions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addDatabasePermissions(siteId, databaseId, permissions, opts);
    }

	/**
	 * Get information about the permissions on a database asset.
	 * @param {string} databaseId The unique ID of the database asset.
	 * @returns {Promise<any>} Promise | undefined
	 */
	queryDatabasePermissions(databaseId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryDatabasePermissions(siteId, databaseId, opts);
    }

	/**
	 * Applying default permissions to a database functions as a permissions template for the database's children table assets. How default permissions are enforced depends on whether the database is locked or unlocked.
	 * @param {string} databaseId The unique ID of the database asset to set default permissions for.
	 * @param {PermissionsRequest} permissions permissions
	 * @returns {Promise<any>} Promise | undefined
	 */
	addDefaultDatabasePermissions(databaseId, permissions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addDefaultDatabasePermissions(siteId, databaseId, permissions, opts);
    }

	/**
	 * Get the default permissions applied to the database asset and its children tables.
	 * @param {string} databaseId The unique ID of the database asset to set default permissions for.
	 * @returns {Promise<any>} Promise | undefined
	 */
	queryDefaultDatabasePermissions(databaseId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryDefaultDatabasePermissions(siteId, databaseId, opts);
    }

	/**
	 * Permanently remove the permissions applied to a database asset.
	 * @param {string} databaseId The unique ID of the database asset.
	 * @param {string} userId The unique ID of the user to remove the permissions for.
	 * @param {string} groupId The unique ID of the group to remove the permissions for.
	 * @param {string} capabilityName The explicit permissions capability to remove. Capabilities that can be removed are Read, Write, or ChangePermissions.
	 * @param {string} capabilityMode The permissions mode to remove. Modes that can be removed are Allow or Deny.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteDatabasePermissions(databaseId, userId, groupId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteDatabasePermissions(siteId, databaseId, userId, groupId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Permanently remove the permissions applied to a database asset.
	 * @param {string} databaseId The unique ID of the database asset.
	 * @param {string} userId The unique ID of the user to remove the permissions for.
	 * @param {string} capabilityName The explicit permissions capability to remove. Capabilities that can be removed are Read, Write, or ChangePermissions.
	 * @param {string} capabilityMode The permissions mode to remove. Modes that can be removed are Allow or Deny.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteDatabasePermissionsForGroup(databaseId, userId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteDatabasePermissionsForGroup(siteId, databaseId, userId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Permanently remove the permissions applied to a database asset.
	 * @param {string} databaseId The unique ID of the database asset.
	 * @param {string} groupId The unique ID of the group to remove the permissions for.
	 * @param {string} capabilityName The explicit permissions capability to remove. Capabilities that can be removed are Read, Write, or ChangePermissions.
	 * @param {string} capabilityMode The permissions mode to remove. Modes that can be removed are Allow or Deny.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteDatabasePermissionsForUser(databaseId, groupId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteDatabasePermissionsForUser(siteId, databaseId, groupId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Permanently remove the default permissions on a database asset. Removing the default permissions from the database asset means that any new child table assets that are indexed by Catalog won't have any default permissions set.
	 * @param {string} databaseId The unique ID of the database asset.
	 * @param {string} userId <parameter documentation missing>
	 * @param {string} capabilityMode <parameter documentation missing>
	 * @param {string} groupId <parameter documentation missing>
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteDefaultDatabasePermissions(databaseId, userId, capabilityMode, groupId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteDefaultDatabasePermissions(siteId, databaseId, userId, capabilityMode, groupId, opts);
    }

	/**
	 * Permanently remove the default permissions on a database asset. Removing the default permissions from the database asset means that any new child table assets that are indexed by Catalog won't have any default permissions set.
	 * @param {string} databaseId The unique ID of the database asset.
	 * @param {string} userId <parameter documentation missing>
	 * @param {string} capabilityMode <parameter documentation missing>
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteDefaultDatabasePermissionsForUser(databaseId, userId, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteDefaultDatabasePermissionsForUser(siteId, databaseId, userId, capabilityMode, opts);
    }

	/**
	 * Permanently remove the default permissions on a database asset. Removing the default permissions from the database asset means that any new child table assets that are indexed by Catalog won't have any default permissions set.
	 * @param {string} databaseId The unique ID of the database asset.
	 * @param {string} capabilityMode <parameter documentation missing>
	 * @param {string} groupId <parameter documentation missing>
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteDefaultDatabasePermissionsForGroup(databaseId, capabilityMode, groupId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteDefaultDatabasePermissionsForGroup(siteId, databaseId, capabilityMode, groupId, opts);
    }

	/**
	 * Get information about a table asset.
	 * @param {string} tableId The unique ID of the table asset.
	 * @returns {Promise<any>} Promise | undefined
	 */
	queryTable(tableId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryTable(siteId, tableId, opts);
    }

	/**
	 * Get information about all table assets for a site.
	 * @returns {Promise<any>} Promise | undefined
	 */
	queryTables() {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryTables(siteId, opts);
    }

	/**
	 * Update the table description, certify a table, or a assign a user contact to the table asset.
	 * @param {string} tableId The unique ID of the table asset.
	 * @param {TableRequest} table table
	 * @returns {Promise<any>} Promise | undefined
	 */
	updateTable(tableId, table) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.updateTable(siteId, tableId, table, opts);
    }

	/**
	 * Permanently remove the table asset.
	 * @param {string} tableId The unique ID of the table asset.
	 * @returns {Promise<any>} Promise | undefined
	 */
	removeTable(tableId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.removeTable(siteId, tableId, opts);
    }

	/**
	 * Add permissions to a table asset.
	 * @param {string} tableId The unique ID of the table asset.
	 * @param {PermissionsRequest} permissions permissions
	 * @returns {Promise<any>} Promise | undefined
	 */
	addTablePermissions(tableId, permissions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addTablePermissions(siteId, tableId, permissions, opts);
    }

	/**
	 * Get information about the permissions on a table asset.
	 * @param {string} tableId The unique ID of the table asset.
	 * @returns {Promise<any>} Promise | undefined
	 */
	queryTablePermissions(tableId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryTablePermissions(siteId, tableId, opts);
    }

	/**
	 * Permanently remove the permissions applied to a table asset.
	 * @param {string} tableId The unique ID of the table asset.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteTablePermissions(tableId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteTablePermissions(siteId, tableId, opts);
    }

	/**
	 * Get information about a column in a table asset.
	 * @param {string} tableId The unique ID of the table asset.
	 * @param {string} columnId The unique ID of the column asset.
	 * @returns {Promise<any>} Promise | undefined
	 */
	queryColumnInATable(tableId, columnId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryColumnInATable(siteId, tableId, columnId, opts);
    }

	/**
	 * Get information about the columns in a table asset.
	 * @param {string} tableId The unique ID of the table asset.
	 * @returns {Promise<any>} Promise | undefined
	 */
	queryColumnsInATable(tableId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryColumnsInATable(siteId, tableId, opts);
    }

	/**
	 * Update the description of the column.
	 * @param {string} tableId The unique ID of the table asset.
	 * @param {string} columnId The unique ID of the column asset.
	 * @param {ColumnRequest} column column
	 * @returns {Promise<any>} Promise | undefined
	 */
	updateColumn(tableId, columnId, column) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.updateColumn(siteId, tableId, columnId, column, opts);
    }

	/**
	 * Permanently remove the column from a table asset.
	 * @param {string} tableId The unique ID of the table asset.
	 * @param {string} columnId The unique ID of the column asset.
	 * @returns {Promise<any>} Promise | undefined
	 */
	removeColumn(tableId, columnId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.removeColumn(siteId, tableId, columnId, opts);
    }

	/**
	 * Create and apply a data quality warning to a database, table, published data source, or flow. Only one data quality warning can be applied to the asset. Adding a data quality warning to the asset that already has one causes an error.
	 * @param {string} contentType The type of asset that the data quality warning is being attached to. To specify the type, use: databasetabledatasourceflowTypes are not case sensitive.
	 * @param {string} contentLuid The unique ID of the asset (database, table, published data source, or flow). This is the same as the content ID.
	 * @param {DataQualityWarningRequest} dataQualityWarning dataQualityWarning
	 * @returns {Promise<any>} Promise | undefined
	 */
	addDataQualityWarning(contentType, contentLuid, dataQualityWarning) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addDataQualityWarning(siteId, contentType, contentLuid, dataQualityWarning, opts);
    }

	/**
	 * Get information about a specific data quality warning.
	 * @param {string} dataqualitywarningId The unique ID of the data quality warning attached to the asset (database, table, published data source, or flow).
	 * @returns {Promise<any>} Promise | undefined
	 */
	queryDataQualityWarningByID(dataqualitywarningId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryDataQualityWarningByID(siteId, dataqualitywarningId, opts);
    }

	/**
	 * Get information about the data quality warning for the database, table, published data source, or flow.
	 * @param {string} contentType The type of asset that the data quality warning is being attached to. To specify the type, use one of the following values: databasetabledatasourceflowTypes are not case sensitive.
	 * @param {string} contentLuid The unique ID of the content type (database, table, published data source, or flow). This is the same as the content ID.
	 * @returns {Promise<any>} Promise | undefined
	 */
	queryDataQualityWarningByContent(contentType, contentLuid) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryDataQualityWarningByContent(siteId, contentType, contentLuid, opts);
    }

	/**
	 * Update the warning type, status, and message of a data quality warning.
	 * @param {string} dataqualitywarningId The unique ID of the data quality warning attached to the asset (database, table, published data source, or flow).
	 * @param {DataQualityWarningRequest} dataQualityWarning dataQualityWarning
	 * @returns {Promise<any>} Promise | undefined
	 */
	updateDataQualityWarning(dataqualitywarningId, dataQualityWarning) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.updateDataQualityWarning(siteId, dataqualitywarningId, dataQualityWarning, opts);
    }

	/**
	 * Permanently remove a data quality warning.
	 * @param {string} dataqualitywarningId The unique ID of the data quality warning attached to the asset (database, table, published data source, or flow).
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteDataQualityWarningByID(dataqualitywarningId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteDataQualityWarningByID(siteId, dataqualitywarningId, opts);
    }

	/**
	 * Permanently remove the data quality warning from the database, table, published data source, or flow.
	 * @param {string} contentType The type of asset that the data quality warning is being attached to. To specify the type, use:   database  table  datasource  flow   Types are not case sensitive.
	 * @param {string} contentLuid The unique ID of the content type(database, table, published data source, or flow). This is the same as the content ID.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteDataQualityWarningByContent(contentType, contentLuid) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteDataQualityWarningByContent(siteId, contentType, contentLuid, opts);
    }

	/**
	 * Add one or more tags to a database.
	 * @param {string} databaseId The unique ID of the database asset.
	 * @param {TagsRequest} tags tags
	 * @returns {Promise<any>} Promise | undefined
	 */
	addTagsToDatabase(databaseId, tags) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addTagsToDatabase(siteId, databaseId, tags, opts);
    }

	/**
	 * Add one or more tags to a table.
	 * @param {string} tableId The unique ID of the column asset.
	 * @param {TagsRequest} tags tags
	 * @returns {Promise<any>} Promise | undefined
	 */
	addTagsToTable(tableId, tags) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addTagsToTable(siteId, tableId, tags, opts);
    }

	/**
	 * Add one or more tags to a column.
	 * @param {string} columnId The unique ID of the column asset.
	 * @param {TagsRequest} tags tags
	 * @returns {Promise<any>} Promise | undefined
	 */
	addTagsToColumn(columnId, tags) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addTagsToColumn(siteId, columnId, tags, opts);
    }

	/**
	 * Add multiple tags to items that are different content and asset types.
	 * @param {TagBatchRequest} tagBatch tagBatch
	 * @returns {Promise<any>} Promise | undefined
	 */
	batchAddTags(tagBatch) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.batchAddTags(siteId, tagBatch, opts);
    }

	/**
	 * Delete a tag from a database.
	 * @param {string} databaseId The unique ID of the database asset.
	 * @param {string} tagName The keyword text of the tag.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteTagFromDatabase(databaseId, tagName) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteTagFromDatabase(siteId, databaseId, tagName, opts);
    }

	/**
	 * Delete a tag from a table.
	 * @param {string} tableId The unique ID of the table asset.
	 * @param {string} tagName The keyword text of the tag.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteTagFromTable(tableId, tagName) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteTagFromTable(siteId, tableId, tagName, opts);
    }

	/**
	 * Delete a tag from a column.
	 * @param {string} columnId The unique ID of the column asset.
	 * @param {string} tagName The keyword text of the tag.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteTagFromColumn(columnId, tagName) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteTagFromColumn(siteId, columnId, tagName, opts);
    }

	/**
	 * Delete multiple tags from items that are different content and asset types.
	 * @param {TagBatchRequest} tagBatch tagBatch
	 * @returns {Promise<any>} Promise | undefined
	 */
	batchDeleteTags(tagBatch) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.batchDeleteTags(siteId, tagBatch, opts);
    }

	/**
	 * Removes a specific version of a workbook from the specified site.
	 * @param {string} workbookId The ID of the workbook to remove the revision for.
	 * @param {number} revisionNumber The revision number of the workbook to remove. To determine what versions are available, call Get Workbook Revisions.
	 * @returns {Promise<any>} Promise | undefined
	 */
	removeWorkbookRevision(workbookId, revisionNumber) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.removeWorkbookRevision(siteId, workbookId, revisionNumber, opts);
    }

	/**
	 * Adds permissions to the specified data source for a Tableau Server user or group. You can specify multiple sets of permissions using one call.
	 * @param {string} datasourceId The ID of the data source to set permissions for.
	 * @param {PermissionsRequest} permissions permissions
	 * @returns {Promise<any>} Promise | undefined
	 */
	addDataSourcePermissions(datasourceId, permissions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addDataSourcePermissions(siteId, datasourceId, permissions, opts);
    }

	/**
	 * Adds permissions to the specified project for a Tableau Server user or group. You can specify multiple sets of permissions using one call.
	 * @param {string} projectId The ID of the project to set permissions for.
	 * @param {PermissionsRequest} permissions permissions
	 * @returns {Promise<PermissionsResponse>} Promise | undefined
	 */
	addProjectPermissions(projectId, permissions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addProjectPermissions(siteId, projectId, permissions, opts);
    }

	/**
	 * Adds permissions to the specified project that will be applied by default to new flows, workbooks, and data sources as they are added to the project. You make separate requests to set default permissions for flows, workbooks, and data sources. Flows require Tableau Prep Conductor to be enabled on your Tableau Server. For more information, see Enable Tableau Prep Conductor(Link opens in a new window).
	 * @param {string} projectId The ID of the project to set default permissions for.
	 * @param {PermissionsRequest} permissions permissions
	 * @returns {Promise<any>} Promise | undefined
	 */
	addDefaultPermissions(projectId, permissions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addDefaultPermissions(siteId, projectId, permissions, opts);
    }

	/**
	 * Adds permissions to the specified project that will be applied by default to new flows, workbooks, and data sources as they are added to the project. You make separate requests to set default permissions for flows, workbooks, and data sources. Flows require Tableau Prep Conductor to be enabled on your Tableau Server. For more information, see Enable Tableau Prep Conductor(Link opens in a new window).
	 * @param {string} projectId The ID of the project to set default permissions for.
	 * @param {PermissionsRequest} permissions permissions
	 * @returns {Promise<any>} Promise | undefined
	 */
	addDefaultPermissionsForWorkbooks(projectId, permissions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addDefaultPermissionsForWorkbooks(siteId, projectId, permissions, opts);
    }

	/**
	 * Adds permissions to the specified project that will be applied by default to new flows, workbooks, and data sources as they are added to the project. You make separate requests to set default permissions for flows, workbooks, and data sources. Flows require Tableau Prep Conductor to be enabled on your Tableau Server. For more information, see Enable Tableau Prep Conductor(Link opens in a new window).
	 * @param {string} projectId The ID of the project to set default permissions for.
	 * @param {PermissionsRequest} permissions permissions
	 * @returns {Promise<any>} Promise | undefined
	 */
	addDefaultPermissionsForDatasources(projectId, permissions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addDefaultPermissionsForDatasources(siteId, projectId, permissions, opts);
    }

	/**
	 * Adds permissions to the specified project that will be applied by default to new flows, workbooks, and data sources as they are added to the project. You make separate requests to set default permissions for flows, workbooks, and data sources. Flows require Tableau Prep Conductor to be enabled on your Tableau Server. For more information, see Enable Tableau Prep Conductor(Link opens in a new window).
	 * @param {string} projectId The ID of the project to set default permissions for.
	 * @param {PermissionsRequest} permissions permissions
	 * @returns {Promise<any>} Promise | undefined
	 */
	addDefaultPermissionsForFlows(projectId, permissions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addDefaultPermissionsForFlows(siteId, projectId, permissions, opts);
    }

	/**
	 * Adds permissions to the specified view (also known as a sheet) for a Tableau Server user or group. You can specify multiple sets of permissions using one call.
	 * @param {string} viewId The ID of the view to set permissions for. You can obtain this ID by calling Query Views for Site.
	 * @param {PermissionsRequest} permissions permissions
	 * @returns {Promise<PermissionsResponse>} Promise | undefined
	 */
	addViewPermissions(viewId, permissions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addViewPermissions(siteId, viewId, permissions, opts);
    }

	/**
	 * Adds permissions to the specified workbook for a Tableau Server user or group. You can specify multiple sets of permissions using one call.
	 * @param {string} workbookId The ID of the workbook to set permissions for.
	 * @param {PermissionsRequest} permissions permissions
	 * @returns {Promise<PermissionsResponse>} Promise | undefined
	 */
	addWorkbookPermissions(workbookId, permissions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addWorkbookPermissions(siteId, workbookId, permissions, opts);
    }

	/**
	 * Adds a task to refresh or accelerate a workbook to an existing schedule. This method is not available for Tableau Online.
	 * @param {string} scheduleId The ID of the schedule that you are associating with the workbook.
	 * @param {TaskRequest} task task
	 * @returns {Promise<TaskResponse>} Promise | undefined
	 */
	addWorkbookToSchedule(scheduleId, task) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addWorkbookToSchedule(siteId, scheduleId, task, opts);
    }

	/**
	 * Returns a list of permissions for a specific data source.
	 * @param {string} datasourceId The ID of the data source to get permissions for.
	 * @returns {Promise<PermissionsResponse>} Promise | undefined
	 */
	queryDataSourcePermissions(datasourceId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryDataSourcePermissions(siteId, datasourceId, opts);
    }

	/**
	 * Returns information about the set of permissions allowed or denied for groups and users in a project.
	 * @param {string} projectId The project to get permissions for.
	 * @returns {Promise<PermissionsResponse>} Promise | undefined
	 */
	queryProjectPermissions(projectId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryProjectPermissions(siteId, projectId, opts);
    }

	/**
	 * Returns information about the default permissions for a project that is, the permissions that will be set by default for flows, workbooks, and data sources that are added to the project. You make separate requests to query the default permissions for flows, workbooks, and data sources.
	 * @param {string} projectId The project to get default permissions for.
	 * @returns {Promise<PermissionsResponse>} Promise | undefined
	 */
	queryDefaultPermissions(projectId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryDefaultPermissions(siteId, projectId, opts);
    }

	/**
	 * Returns information about the default permissions for a project that is, the permissions that will be set by default for flows, workbooks, and data sources that are added to the project. You make separate requests to query the default permissions for flows, workbooks, and data sources.
	 * @param {string} projectId The project to get default permissions for.
	 * @returns {Promise<PermissionsResponse>} Promise | undefined
	 */
	queryDefaultPermissionsForDatasources(projectId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryDefaultPermissionsForDatasources(siteId, projectId, opts);
    }

	/**
	 * Returns information about the default permissions for a project that is, the permissions that will be set by default for flows, workbooks, and data sources that are added to the project. You make separate requests to query the default permissions for flows, workbooks, and data sources.
	 * @param {string} projectId The project to get default permissions for.
	 * @returns {Promise<PermissionsResponse>} Promise | undefined
	 */
	queryDefaultPermissionsForWorkbooks(projectId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryDefaultPermissionsForWorkbooks(siteId, projectId, opts);
    }

	/**
	 * Returns information about the default permissions for a project that is, the permissions that will be set by default for flows, workbooks, and data sources that are added to the project. You make separate requests to query the default permissions for flows, workbooks, and data sources.
	 * @param {string} projectId The project to get default permissions for.
	 * @returns {Promise<PermissionsResponse>} Promise | undefined
	 */
	queryDefaultPermissionsForFlows(projectId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryDefaultPermissionsForFlows(siteId, projectId, opts);
    }

	/**
	 * Returns a list of permissions for the specific view.
	 * @param {string} viewId The ID of the view to get permissions for.
	 * @returns {Promise<ParentResponse>} Promise | undefined
	 */
	queryViewPermissions(viewId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryViewPermissions(siteId, viewId, opts);
    }

	/**
	 * Returns a list of permissions for the specific workbook.
	 * @param {string} workbookId The ID of the workbook to get permissions for.
	 * @returns {Promise<ParentResponse>} Promise | undefined
	 */
	queryWorkbookPermissions(workbookId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryWorkbookPermissions(siteId, workbookId, opts);
    }

	/**
	 * Removes the specified data source permission for the specified group or user.
	 * @param {string} datasourceId The ID of the data source to remove the permission for.
	 * @param {string} groupId The ID of the group to remove the permission for.
	 * @param {string} userId The ID of the user to remove the permission for.
	 * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
	 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteDataSourcePermission(datasourceId, groupId, userId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteDataSourcePermission(siteId, datasourceId, groupId, userId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Removes the specified data source permission for the specified group or user.
	 * @param {string} datasourceId The ID of the data source to remove the permission for.
	 * @param {string} groupId The ID of the group to remove the permission for.
	 * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
	 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteDataSourcePermissionForGroup(datasourceId, groupId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteDataSourcePermissionForGroup(siteId, datasourceId, groupId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Removes the specified data source permission for the specified group or user.
	 * @param {string} datasourceId The ID of the data source to remove the permission for.
	 * @param {string} userId The ID of the user to remove the permission for.
	 * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
	 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteDataSorucePermissionForUser(datasourceId, userId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteDataSorucePermissionForUser(siteId, datasourceId, userId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Removes the specified project permission for the specified group or user.
	 * @param {string} projectId The ID of the project to remove the permission for.
	 * @param {string} groupId The ID of the group to remove the permission for.
	 * @param {string} userId The ID of the user to remove project the permission for.
	 * @param {string} capabilityName The capability to remove the permission for. In Tableau Server 10.0, valid capabilities for a project are ProjectLeader, Read (view), and Write. For more information, see Permissions.
	 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteProjectPermission(projectId, groupId, userId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteProjectPermission(siteId, projectId, groupId, userId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Removes the specified project permission for the specified group or user.
	 * @param {string} projectId The ID of the project to remove the permission for.
	 * @param {string} groupId The ID of the group to remove the permission for.
	 * @param {string} capabilityName The capability to remove the permission for. In Tableau Server 10.0, valid capabilities for a project are ProjectLeader, Read (view), and Write. For more information, see Permissions.
	 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteProjectPermissionForGroup(projectId, groupId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteProjectPermissionForGroup(siteId, projectId, groupId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Removes the specified project permission for the specified group or user.
	 * @param {string} projectId The ID of the project to remove the permission for.
	 * @param {string} userId The ID of the user to remove project the permission for.
	 * @param {string} capabilityName The capability to remove the permission for. In Tableau Server 10.0, valid capabilities for a project are ProjectLeader, Read (view), and Write. For more information, see Permissions.
	 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteProjectPermissionForUser(projectId, userId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteProjectPermissionForUser(siteId, projectId, userId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Removes default permissions from a project. After the default permission has been removed, flows, workbooks, or data sources that are added to the project do not get the specified permission by default. You make separate requests to remove default permissions for flows, workbooks, and data sources, and you make separate requests to remove default permissions for a specific group or user.
	 * @param {string} projectId The ID of the project to remove the default permission for.
	 * @param {string} groupId The ID of the group to remove the default permission for.
	 * @param {string} userId The ID of the user to remove default permission for.
	 * @param {string} capabilityName The capability to remove the permissions for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
	 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteDefaultPermission(projectId, groupId, userId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteDefaultPermission(siteId, projectId, groupId, userId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Removes default permissions from a project. After the default permission has been removed, flows, workbooks, or data sources that are added to the project do not get the specified permission by default. You make separate requests to remove default permissions for flows, workbooks, and data sources, and you make separate requests to remove default permissions for a specific group or user.
	 * @param {string} projectId The ID of the project to remove the default permission for.
	 * @param {string} groupId The ID of the group to remove the default permission for.
	 * @param {string} capabilityName The capability to remove the permissions for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
	 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteDefaultWorkbookPermissionForGroup(projectId, groupId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteDefaultWorkbookPermissionForGroup(siteId, projectId, groupId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Removes default permissions from a project. After the default permission has been removed, flows, workbooks, or data sources that are added to the project do not get the specified permission by default. You make separate requests to remove default permissions for flows, workbooks, and data sources, and you make separate requests to remove default permissions for a specific group or user.
	 * @param {string} projectId The ID of the project to remove the default permission for.
	 * @param {string} userId The ID of the user to remove default permission for.
	 * @param {string} capabilityName The capability to remove the permissions for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
	 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteDefaultWorkbookPermissionForUser(projectId, userId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteDefaultWorkbookPermissionForUser(siteId, projectId, userId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Removes default permissions from a project. After the default permission has been removed, flows, workbooks, or data sources that are added to the project do not get the specified permission by default. You make separate requests to remove default permissions for flows, workbooks, and data sources, and you make separate requests to remove default permissions for a specific group or user.
	 * @param {string} projectId The ID of the project to remove the default permission for.
	 * @param {string} groupId The ID of the group to remove the default permission for.
	 * @param {string} capabilityName The capability to remove the permissions for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
	 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteDefaultDatasourcePermissionsForGroup(projectId, groupId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteDefaultDatasourcePermissionsForGroup(siteId, projectId, groupId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Removes default permissions from a project. After the default permission has been removed, flows, workbooks, or data sources that are added to the project do not get the specified permission by default. You make separate requests to remove default permissions for flows, workbooks, and data sources, and you make separate requests to remove default permissions for a specific group or user.
	 * @param {string} projectId The ID of the project to remove the default permission for.
	 * @param {string} groupId The ID of the group to remove the default permission for.
	 * @param {string} capabilityName The capability to remove the permissions for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
	 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteDefaultFlowPermissionForGroup(projectId, groupId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteDefaultFlowPermissionForGroup(siteId, projectId, groupId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Removes default permissions from a project. After the default permission has been removed, flows, workbooks, or data sources that are added to the project do not get the specified permission by default. You make separate requests to remove default permissions for flows, workbooks, and data sources, and you make separate requests to remove default permissions for a specific group or user.
	 * @param {string} projectId The ID of the project to remove the default permission for.
	 * @param {string} userId The ID of the user to remove default permission for.
	 * @param {string} capabilityName The capability to remove the permissions for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
	 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteDefaultFlowPermissionForUser(projectId, userId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteDefaultFlowPermissionForUser(siteId, projectId, userId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Deletes permission to the specified view (also known as a sheet) for a Tableau Server user or group.
	 * @param {string} viewId The ID of the view to delete permissions for. You can obtain this ID by calling Query Views for Site.
	 * @param {string} groupId The ID of the group to remove the permission for.
	 * @param {string} userId The ID of the user to remove the permission for.
	 * @param {string} capabilityName The capability to remove the permission for. The valid capabilities for a view are AddComment, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. For more information, see Permissions.
	 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteViewPermission(viewId, groupId, userId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteViewPermission(siteId, viewId, groupId, userId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Deletes permission to the specified view (also known as a sheet) for a Tableau Server user or group.
	 * @param {string} viewId The ID of the view to delete permissions for. You can obtain this ID by calling Query Views for Site.
	 * @param {string} groupId The ID of the group to remove the permission for.
	 * @param {string} capabilityName The capability to remove the permission for. The valid capabilities for a view are AddComment, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. For more information, see Permissions.
	 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteViewPermissionForGroup(viewId, groupId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteViewPermissionForGroup(siteId, viewId, groupId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Deletes permission to the specified view (also known as a sheet) for a Tableau Server user or group.
	 * @param {string} viewId The ID of the view to delete permissions for. You can obtain this ID by calling Query Views for Site.
	 * @param {string} userId The ID of the user to remove the permission for.
	 * @param {string} capabilityName The capability to remove the permission for. The valid capabilities for a view are AddComment, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. For more information, see Permissions.
	 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteViewPermissionForUser(viewId, userId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteViewPermissionForUser(siteId, viewId, userId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Deletes the specified permission from the specified workbook for a group or user.
	 * @param {string} workbookId The ID of the workbook to remove the permission for.
	 * @param {string} groupId The ID of the group to remove the permission for.
	 * @param {string} userId The ID of the user to remove the permission for.
	 * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write.  For more information, see Permissions.
	 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteWorkbookPermission(workbookId, groupId, userId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteWorkbookPermission(siteId, workbookId, groupId, userId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Deletes the specified permission from the specified workbook for a group or user.
	 * @param {string} workbookId The ID of the workbook to remove the permission for.
	 * @param {string} groupId The ID of the group to remove the permission for.
	 * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write.  For more information, see Permissions.
	 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteWorkbookPermissionForGroup(workbookId, groupId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteWorkbookPermissionForGroup(siteId, workbookId, groupId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Deletes the specified permission from the specified workbook for a group or user.
	 * @param {string} workbookId The ID of the workbook to remove the permission for.
	 * @param {string} userId The ID of the user to remove the permission for.
	 * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write.  For more information, see Permissions.
	 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteWorkbookPermissionForUser(workbookId, userId, capabilityName, capabilityMode) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteWorkbookPermissionForUser(siteId, workbookId, userId, capabilityName, capabilityMode, opts);
    }

	/**
	 * Adds a task to refresh a data source to an existing schedule. This method is not available for Tableau Online.
	 * @param {string} scheduleId The ID of the schedule that you are associating with the data source.
	 * @param {TaskRequest} task task
	 * @returns {Promise<TaskResponse>} Promise | undefined
	 */
	addDataSourceToSchedule(scheduleId, task) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addDataSourceToSchedule(siteId, scheduleId, task, opts);
    }

	/**
	 * Cancels a job specified by job ID. To get a list of job IDs for jobs that are currently queued or in-progress, use the Query Jobs method.
	 * @param {string} jobId The ID of the job to cancel.
	 * @returns {Promise<any>} Promise | undefined
	 */
	cancelJob(jobId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.cancelJob(siteId, jobId, opts);
    }

	/**
	 * Returns status information about an asynchronous process that is tracked using a job. This method can be used to query jobs that are used to do the following:
	 * @param {string} jobId The ID of the job to get status information for.
	 * @returns {Promise<JobResponse>} Promise | undefined
	 */
	queryJob(jobId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryJob(siteId, jobId, opts);
    }

	/**
	 * Returns a list of active jobs on the specified site. To get details on a specific job, pass a job ID returned by this method to the Query Job method. To cancel an active job, pass a job ID returned by this method to the Cancel Job method.
	 * @returns {Promise<BackgroundJobsResponse>} Promise | undefined
	 */
	queryJobs() {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryJobs(siteId, opts);
    }

	/**
	 * Returns information about the specified extract refresh task.
	 * @param {string} taskId The ID of the extract refresh that you want information about.
	 * @returns {Promise<TaskResponse>} Promise | undefined
	 */
	getExtractRefreshTask(taskId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.getExtractRefreshTask(siteId, taskId, opts);
    }

	/**
	 * Returns a list of extract refresh tasks for the site.
	 * @returns {Promise<TasksResponse>} Promise | undefined
	 */
	getExtractRefreshTasks() {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.getExtractRefreshTasks(siteId, opts);
    }

	/**
	 * Creates a new schedule on Tableau Server.
	 * @param {ScheduleRequest} schedule schedule
	 * @returns {Promise<ScheduleResponse>} Promise | undefined
	 */
	createSchedule(schedule) {
        const opts = this.execOpts({ });
        return api.createSchedule(schedule, opts);
    }

	/**
	 * Returns a list of the extract refresh tasks for a specified schedule on the specified site.
	 * @param {string} scheduleId The ID of the schedule to get extract information for.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
	 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
	 * @returns {Promise<ExtractsResponse>} Promise | undefined
	 */
	queryExtractRefreshTasks(scheduleId, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.queryExtractRefreshTasks(siteId, scheduleId, queryOptions, opts);
    }

	/**
	 * Returns a list of flows, extract and subscription schedules. For each schedule, the API returns the name, frequency, priority, and other information.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
	 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
	 * @returns {Promise<SchedulesResponse>} Promise | undefined
	 */
	querySchedules(queryOptions) {
        const opts = this.execOpts({ });
        return api.querySchedules(queryOptions, opts);
    }

	/**
	 * Runs the specified extract refresh task.
	 * @param {string} taskId The ID of the extract refresh task that you want to run.
	 * @returns {Promise<JobResponse>} Promise | undefined
	 */
	runExtractRefreshTask(taskId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.runExtractRefreshTask(siteId, taskId, opts);
    }

	/**
	 * Modifies settings for the specified schedule, including the name, priority, and frequency details.
	 * @param {string} scheduleId The ID of the schedule to update. To determine what schedules are available, call Query Schedules.
	 * @param {ScheduleRequest} schedule schedule
	 * @returns {Promise<ScheduleResponse>} Promise | undefined
	 */
	updateSchedule(scheduleId, schedule) {
        const opts = this.execOpts({ });
        return api.updateSchedule(scheduleId, schedule, opts);
    }

	/**
	 * Deletes the specified schedule.
	 * @param {string} scheduleId The ID of the schedule to delete. To determine what schedules are available, call Query Schedules.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteSchedule(scheduleId) {
        const opts = this.execOpts({ });
        return api.deleteSchedule(scheduleId, opts);
    }

	/**
	 * Deletes a data acceleration task.
	 * @param {string} dataAccelerationId The ID of the task to remove.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteDataAccelerationTask(dataAccelerationId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteDataAccelerationTask(siteId, dataAccelerationId, opts);
    }

	/**
	 * Returns a list of data acceleration tasks for the site.
	 * @returns {Promise<TasksResponse>} Promise | undefined
	 */
	getDataAccelerationTasks() {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.getDataAccelerationTasks(siteId, opts);
    }

	/**
	 * Creates a new, unsuspended subscription to a view or workbook for a specific user. When a user is subscribed to the content, Tableau Server sends the content to the user in email on the schedule that's defined in Tableau Server and specified in this call.
	 * @param {SubscriptionRequest} subscription subscription
	 * @returns {Promise<SubscriptionResponse>} Promise | undefined
	 */
	createSubscription(subscription) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.createSubscription(siteId, subscription, opts);
    }

	/**
	 * Returns information about the specified subscription.
	 * @param {string} subscriptionId The ID of the subscription to get information for.
	 * @returns {Promise<SubscriptionResponse>} Promise | undefined
	 */
	querySubscription(subscriptionId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.querySubscription(siteId, subscriptionId, opts);
    }

	/**
	 * Returns a list of all the subscriptions on the specified site.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
	 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
	 * @returns {Promise<SubscriptionsResponse>} Promise | undefined
	 */
	querySubscriptions(queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.querySubscriptions(siteId, queryOptions, opts);
    }

	/**
	 * Modifies an existing subscription, allowing you to change the subject, schedule, and suspension state for the subscription.
	 * @param {string} subscriptionId The ID of the subscription to update.
	 * @param {SubscriptionRequest} subscription subscription
	 * @returns {Promise<SubscriptionResponse>} Promise | undefined
	 */
	updateSubscription(subscriptionId, subscription) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.updateSubscription(siteId, subscriptionId, subscription, opts);
    }

	/**
	 * Deletes the specified subscription.
	 * @param {string} subscriptionId The ID of the subscription to delete. To determine what subscriptions are available, call Query Subscriptions.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteSubscription(subscriptionId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteSubscription(siteId, subscriptionId, opts);
    }

	/**
	 * Adds the specified data source to the user's favorites.
	 * @param {string} userId The ID of the user to add the favorite for.
	 * @param {FavoriteRequest} favorite favorite
	 * @returns {Promise<FavoritesResponse>} Promise | undefined
	 */
	addDataSourceToFavorites(userId, favorite) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addDataSourceToFavorites(siteId, userId, favorite, opts);
    }

	/**
	 * Adds the specified project to a user's favorites.
	 * @param {string} userId The ID of the user to add the favorite for.
	 * @param {FavoriteRequest} favorite favorite
	 * @returns {Promise<FavoritesResponse>} Promise | undefined
	 */
	addProjectToFavorites(userId, favorite) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addProjectToFavorites(siteId, userId, favorite, opts);
    }

	/**
	 * Adds the specified view to a user's favorites.
	 * @param {string} userId The ID of the user to add the favorite for.
	 * @param {FavoriteRequest} favorite favorite
	 * @returns {Promise<FavoritesResponse>} Promise | undefined
	 */
	addViewToFavorites(userId, favorite) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addViewToFavorites(siteId, userId, favorite, opts);
    }

	/**
	 * Adds the specified workbook to a user's favorites.
	 * @param {string} userId The ID of the user to add the favorite for.
	 * @param {FavoriteRequest} favorite favorite
	 * @returns {Promise<FavoritesResponse>} Promise | undefined
	 */
	addWorkbookToFavorites(userId, favorite) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.addWorkbookToFavorites(siteId, userId, favorite, opts);
    }

	/**
	 * Deletes the specified data source from the user's favorites. If the specified data source is not a favorite, the operation has no effect.
	 * @param {string} userId The ID of the user to remove the favorite from.
	 * @param {string} datasourceId The ID of the data source to remove from the user's favorites.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteDataSourceFromFavorites(userId, datasourceId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteDataSourceFromFavorites(siteId, userId, datasourceId, opts);
    }

	/**
	 * Deletes the specified project from the user's favorites. If the specified project is not a favorite, the operation has no effect.
	 * @param {string} userId The ID of the user to remove the favorite from.
	 * @param {string} projectId The ID of the project to remove from the user's favorites.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteProjectFromFavorites(userId, projectId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteProjectFromFavorites(siteId, userId, projectId, opts);
    }

	/**
	 * Deletes the specified view from user's favorites. If the specified view is not a favorite, the operation has no effect.
	 * @param {string} userId The ID of the user to remove the favorite from.
	 * @param {string} viewId The ID of the view to remove from the user's favorites.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteViewFromFavorites(userId, viewId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteViewFromFavorites(siteId, userId, viewId, opts);
    }

	/**
	 * Deletes a workbook from a user's favorites. If the specified workbook is not a favorite of the specified user, this call has no effect.
	 * @param {string} userId The ID of the user to remove the favorite from.
	 * @param {string} workbookId The ID of the workbook to remove from the user's favorites.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteWorkbookFromFavorites(userId, workbookId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteWorkbookFromFavorites(siteId, userId, workbookId, opts);
    }

	/**
	 * Returns a list of favorite projects, data sources, views and workbooks for a user.
	 * @param {string} userId The ID of the user for which you want to get a list favorites.
	 * @returns {Promise<any>} Promise | undefined
	 */
	getFavoritesForUser(userId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.getFavoritesForUser(siteId, userId, opts);
    }

	/**
	 * Initiates the upload process for a file. After the upload has been initiated, you call Append to File Upload to send individual blocks of the file to the server. When the complete file has been sent to the server, you call Publish Data Source, Publish Flow, or Publish Workbook to commit the upload.
	 * @returns {Promise<FileUploadResponse>} Promise | undefined
	 */
	initiateFileUpload() {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.initiateFileUpload(siteId, opts);
    }

	/**
	 * Uploads a block of data and appends it to the data that is already uploaded. This method is called after an upload has been initiated using Initiate File Upload.
	 * @param {string} uploadSessionId The ID of the upload session. You get this value when you start an upload session using Initiate File Upload.
	 * @param {Object} file File Contents
	 * @returns {Promise<FileUploadResponse>} Promise | undefined
	 */
	appendToFileUpload(uploadSessionId, file) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.appendToFileUpload(siteId, uploadSessionId, file, opts);
    }

	/**
	 * Returns the version of Tableau Server and the supported version of the REST API.
	 * @returns {Promise<ServerInfoResponse>} Promise | undefined
	 */
	serverInfo() {
        const opts = this.execOpts({ });
        return api.serverInfo(opts);
    }

	/**
	 * Returns details of the current session of Tableau Server.
	 * @returns {Promise<any>} Promise | undefined
	 */
	getCurrentServerSessionDetails() {
        const opts = this.execOpts({ });
        return api.getCurrentServerSessionDetails(opts);
    }

	/**
	 * Create an extract for a data source in a site. Optionally, encrypt the extract if the site and workbooks using it are configured to allow it.
	 * @param {string} datasourceId The LUID of the datasource.
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {boolean} queryOptions.encryptionFlag If true, then Tableau will attempt to encrypt the created extracts. If false, or no encrypt parameter is appended to the URI, then the extract won't be encrypted, unless encryption is enforced by site or workbook configuration. An error will be returned when encrypt equals true and encryption is disabled in the site or workbook.
	 * @returns {Promise<any>} Promise | undefined
	 */
	createAnExtractForADataSource(datasourceId, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.createAnExtractForADataSource(siteId, datasourceId, queryOptions, opts);
    }

	/**
	 * Delete the extract of a data source in a site.
	 * @param {string} datasourceId The LUID of the datasource whose extract is to be deleted.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteAnExtractFromADataSource(datasourceId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteAnExtractFromADataSource(siteId, datasourceId, opts);
    }

	/**
	 * Create extracts for all embedded data sources of a workbook. Optionally, encrypt the extracts if the site and workbook using them are configured to allow it.
	 * @param {string} workbookId The LUID of the workbook.
	 * @param {DatasourcesRequest} datasources datasources
	 * @param {Object} [queryOptions] an object containing the query options for this request
	 * @param {boolean} queryOptions.encryptionFlag If true, then Tableau will attempt to encrypt the created extracts. If false, or no encrypt parameter is appended to the URI, then the extract won't be encrypted, unless encryption is enforced by site or workbook configuration. An error will be returned when encrypt equals true and encryption is disabled in the site or workbook.
	 * @returns {Promise<any>} Promise | undefined
	 */
	createExtractsForEmbeddedDataSourcesInAWorkbook(workbookId, datasources, queryOptions) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.createExtractsForEmbeddedDataSourcesInAWorkbook(siteId, workbookId, datasources, queryOptions, opts);
    }

	/**
	 * Delete all extracts of embedded data sources in a workbook.
	 * @param {string} workbookId <parameter documentation missing>
	 * @param {DatasourcesRequest} datasources datasources
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteExtractsForEmbeddedDataSourcesInAWorkbook(workbookId, datasources) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteExtractsForEmbeddedDataSourcesInAWorkbook(siteId, workbookId, datasources, opts);
    }

	/**
	 * Deletes an extract refresh task.
	 * @param {string} taskId The ID of the extract refresh task to remove.
	 * @returns {Promise<any>} Promise | undefined
	 */
	deleteExtractRefreshTask(taskId) {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.deleteExtractRefreshTask(siteId, taskId, opts);
    }

	/**
	 * Extract encryption at rest is a data security feature that allows you to encrypt .hyper extracts while they are stored on Tableau Server. For more information, see Extract Encryption at Rest(Link opens in a new window).
	 * @returns {Promise<any>} Promise | undefined
	 */
	encryptExtractsInASite() {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.encryptExtractsInASite(siteId, opts);
    }

	/**
	 * Extract encryption at rest is a data security feature that allows you to encrypt .hyper extracts while they are stored on Tableau Server. For more information, see Extract Encryption at Rest(Link opens in a new window).
	 * @returns {Promise<any>} Promise | undefined
	 */
	decryptExtractsInASite() {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.decryptExtractsInASite(siteId, opts);
    }

	/**
	 * Extract encryption at rest is a data security feature that allows you to encrypt .hyper extracts while they are stored on Tableau Server. For more information, see Extract Encryption at Rest(Link opens in a new window).
	 * @returns {Promise<any>} Promise | undefined
	 */
	reencryptExtractsInASite() {
        const siteId = this.getSite();
        const opts = this.execOpts({ });
        return api.reencryptExtractsInASite(siteId, opts);
    }
}
