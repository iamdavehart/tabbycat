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

/** @type {string} */
let baseURL = "";
/** @type {string} */
let authenticationToken = "";
/** @type {ExecOptions} */
const defaultOptions = { baseURL: "", http:methods };
/**
 * Sets the Base URL
 * @param {string} url the base URl
 */
export function setBaseURL(url) { baseURL=url; }
/**
 * Sets the security Token
 * @param {string} token the security token
 */
export function setToken(token) { authenticationToken=token; }
/**
 * Gets the base url from either provided  opts or baseURL property
 * @param {ExecOptions} options options object
 */
export function getBaseURL(options) { return getOpt("baseURL", options, baseURL); }
/**
 * Gets the token from either provided opts or authenticationToken property
 * @param {ExecOptions} options options object
 */
export function getToken(options) { return getOpt("token", options, authenticationToken); }
/**
 * Retrieves an option from either opts object or default value
 * @param {string} name the name of the option
 * @param {ExecOptions} opts an existing opts object
 * @param {string} dflt a default value to be returned if object does not have the property
 */
function getOpt(name,opts,dflt) { return (opts && opts.hasOwnProperty(name)) ? opts[name] : dflt; }


/**
    * @typedef {import("index").CredentialsRequest} CredentialsRequest
    * @typedef {import("index").SiteRequest} SiteRequest
    * @typedef {import("index").UserRequest} UserRequest
    * @typedef {import("index").DataAlertRequest} DataAlertRequest
    * @typedef {import("index").PermissionsRequest} PermissionsRequest
    * @typedef {import("index").TaskRequest} TaskRequest
    * @typedef {import("index").FlowRequest} FlowRequest
    * @typedef {import("index").ProjectRequest} ProjectRequest
    * @typedef {import("index").WorkbookRequest} WorkbookRequest
    * @typedef {import("index").TagsRequest} TagsRequest
    * @typedef {import("index").RecommendationDismissalRequest} RecommendationDismissalRequest
    * @typedef {import("index").ConnectionRequest} ConnectionRequest
    * @typedef {import("index").DatasourceRequest} DatasourceRequest
    * @typedef {import("index").GroupRequest} GroupRequest
    * @typedef {import("index").TableRequest} TableRequest
    * @typedef {import("index").ColumnRequest} ColumnRequest
    * @typedef {import("index").DataQualityWarningRequest} DataQualityWarningRequest
    * @typedef {import("index").TagBatchRequest} TagBatchRequest
    * @typedef {import("index").ScheduleRequest} ScheduleRequest
    * @typedef {import("index").SubscriptionRequest} SubscriptionRequest
    * @typedef {import("index").FavoriteRequest} FavoriteRequest
    * @typedef {import("index").DatasourcesRequest} DatasourcesRequest
    * @typedef {import("index").CredentialsResponse} CredentialsResponse
    * @typedef {import("index").SiteResponse} SiteResponse
    * @typedef {import("index").SitesResponse} SitesResponse
    * @typedef {import("index").ViewsResponse} ViewsResponse
    * @typedef {import("index").DataAlertResponse} DataAlertResponse
    * @typedef {import("index").DataAlertsResponse} DataAlertsResponse
    * @typedef {import("index").UserResponse} UserResponse
    * @typedef {import("index").PermissionsResponse} PermissionsResponse
    * @typedef {import("index").ProjectResponse} ProjectResponse
    * @typedef {import("index").ProjectsResponse} ProjectsResponse
    * @typedef {import("index").WorkbookResponse} WorkbookResponse
    * @typedef {import("index").TagsResponse} TagsResponse
    * @typedef {import("index").ConnectionsResponse} ConnectionsResponse
    * @typedef {import("index").ViewResponse} ViewResponse
    * @typedef {import("index").RevisionsResponse} RevisionsResponse
    * @typedef {import("index").WorkbooksResponse} WorkbooksResponse
    * @typedef {import("index").ConnectionResponse} ConnectionResponse
    * @typedef {import("index").JobResponse} JobResponse
    * @typedef {import("index").DataAccelerationReportResponse} DataAccelerationReportResponse
    * @typedef {import("index").DatasourceResponse} DatasourceResponse
    * @typedef {import("index").DatasourcesResponse} DatasourcesResponse
    * @typedef {import("index").GroupResponse} GroupResponse
    * @typedef {import("index").GroupsResponse} GroupsResponse
    * @typedef {import("index").UsersResponse} UsersResponse
    * @typedef {import("index").TaskResponse} TaskResponse
    * @typedef {import("index").ParentResponse} ParentResponse
    * @typedef {import("index").BackgroundJobsResponse} BackgroundJobsResponse
    * @typedef {import("index").TasksResponse} TasksResponse
    * @typedef {import("index").ScheduleResponse} ScheduleResponse
    * @typedef {import("index").ExtractsResponse} ExtractsResponse
    * @typedef {import("index").SchedulesResponse} SchedulesResponse
    * @typedef {import("index").SubscriptionResponse} SubscriptionResponse
    * @typedef {import("index").SubscriptionsResponse} SubscriptionsResponse
    * @typedef {import("index").FavoritesResponse} FavoritesResponse
    * @typedef {import("index").FileUploadResponse} FileUploadResponse
    * @typedef {import("index").ServerInfoResponse} ServerInfoResponse
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
 * @property {HttpManager=} http Object containing standard http methods for GET,POST,PUT,DELETE
 * @property {boolean=} [authentication] states that the route returns authentication information
 * @property {string=} [baseURL] specifies the url to run this request against
 * @property {string=} [version] specifies a particular version of the api to run this request on
 */

/**
 * Signs you in as a user on the specified site on Tableau Server. This call returns a credentials token that you use in subsequent calls to the server. Typically, a credentials token is valid for 240 minutes. You can change this timeout by using the tsm configuration set(Link opens in a new window) command and setting the wgserver.session.idle_limit option.
 * Note: The token is valid for REST API calls and Tableau Metadata API (GraphQL) queries. You cannot use the token as authentication for other operations with Tableau Server. In addition, the token is good only for operations in the site that you're signed in to. You cannot sign in to one site and then use the token you get back to send requests to a different site. If you do, the server returns an HTTP 403 (Forbidden) error.
 * If you are a system administrator, you can use your username and password to sign in and impersonate a specific user. You might do this if you want manage sign in using a centralized delegation strategy.
 * For more information about authentication, see Signing In and Signing Out (Authentication).
 * Note: SAML single sign on (SSO) authentication does not validate REST API requests. Even if you are manually signed in to your server through SSO, REST API request authentication requires that you first make a REST sign in request, and then use the credentials token from its response in the header of subsequent requests. For information about the requirements for using SAML, see SAML Requirements.(Link opens in a new window)
 * @param {CredentialsRequest} credentials credentials
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<CredentialsResponse>} Promise | undefined
 */
export function signIn(credentials, options=defaultOptions) { 
    return AuthenticationRequest.builder(getBaseURL(options))
        .withPath(`/api/{apiVersion}/auth/signin`)
        .withBodyParameters(credentials)
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Signs you out of the current session. This call invalidates the authentication token that is created by a call to Sign In.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function signOut(options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/auth/signout`)
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Switches you onto another site without having to provide a user name and password again.
 * This method allows an authenticated user to switch sites that they have access to. When you call this method, you must provide the current authorization token as the value of the X-Tableau-Auth header. Using the current authentication token, the method signs you in as a user on the site specified in the request payload. The method returns a new authentication token and invalidates the old one. You have the permissions of the user associated with the authorization token. By default, the token is good for 240 minutes. (You can specify a different timeout value for the token by calling the tsm configuration set command to change the wgserver.session.idle_limit setting.)
 * Note This method is not available on Tableau Online.
 * @param {SiteRequest} site site
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<CredentialsResponse>} Promise | undefined
 */
export function switchSite(site, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/auth/switchSite`)
        .withBodyParameters(site)
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Creates a site on Tableau Server. To make changes to an existing site, call Update Site. This method is not available for Tableau Online.
 * For more information, see Work with Sites(Link opens in a new window) and Add or Edit Sites(Link opens in a new window) in the Tableau Server documentation.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * @param {SiteRequest} site site
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<SiteResponse>} Promise | undefined
 */
export function createSite(site, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites`)
        .withBodyParameters(site)
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Returns information about the specified site, with the option to return information about the storage space and user count for the site.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * You can specify the site to delete by using the site ID, the site name, or the content URL. You use the key query string parameter to indicate how you are specifying the site, as shown in the URIs.
 * Note: You can only get site information for the site that you have signed in to.
 * @param {string} siteId The ID of the site to get information for.
 * @param {string} siteName The name of the site to get information for. If you specify a site name, you must also include the parameter key=name.
 * @param {string} contentUrl The URL of the site to get information for. If you specify a content URL, you must also include the parameter key=contentUrl.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean=} [queryOptions.includeUsage] The boolean flag to include site usage metrics in the response body. If true, then the site element of the response will contain a usage node with the attributes numUsers (number of users) and storage (storage in megabytes). To set the flag to include usage in the response, append includeUsage=true as a querystring element any valid query site URI.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<SiteResponse>} Promise | undefined
 */
export function querySite(siteId, siteName, contentUrl, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns information about the specified site, with the option to return information about the storage space and user count for the site.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * You can specify the site to delete by using the site ID, the site name, or the content URL. You use the key query string parameter to indicate how you are specifying the site, as shown in the URIs.
 * Note: You can only get site information for the site that you have signed in to.
 * @param {string} siteId The ID of the site to get information for.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean=} [queryOptions.includeUsage] The boolean flag to include site usage metrics in the response body. If true, then the site element of the response will contain a usage node with the attributes numUsers (number of users) and storage (storage in megabytes). To set the flag to include usage in the response, append includeUsage=true as a querystring element any valid query site URI.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<SiteResponse>} Promise | undefined
 */
export function querySiteByID(siteId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns information about the specified site, with the option to return information about the storage space and user count for the site.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * You can specify the site to delete by using the site ID, the site name, or the content URL. You use the key query string parameter to indicate how you are specifying the site, as shown in the URIs.
 * Note: You can only get site information for the site that you have signed in to.
 * @param {string} siteName The name of the site to get information for. If you specify a site name, you must also include the parameter key=name.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean=} [queryOptions.includeUsage] The boolean flag to include site usage metrics in the response body. If true, then the site element of the response will contain a usage node with the attributes numUsers (number of users) and storage (storage in megabytes). To set the flag to include usage in the response, append includeUsage=true as a querystring element any valid query site URI.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<SiteResponse>} Promise | undefined
 */
export function querySiteByName(siteName, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteName}`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns information about the specified site, with the option to return information about the storage space and user count for the site.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * You can specify the site to delete by using the site ID, the site name, or the content URL. You use the key query string parameter to indicate how you are specifying the site, as shown in the URIs.
 * Note: You can only get site information for the site that you have signed in to.
 * @param {string} contentUrl The URL of the site to get information for. If you specify a content URL, you must also include the parameter key=contentUrl.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean=} [queryOptions.includeUsage] The boolean flag to include site usage metrics in the response body. If true, then the site element of the response will contain a usage node with the attributes numUsers (number of users) and storage (storage in megabytes). To set the flag to include usage in the response, append includeUsage=true as a querystring element any valid query site URI.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<SiteResponse>} Promise | undefined
 */
export function querySiteByContentUrl(contentUrl, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${contentUrl}`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns a list of the sites on the server that the caller of this method has access to. This method is not available for Tableau Online.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number=} [queryOptions.pageSize] (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
 * @param {number=} [queryOptions.pageNumber] (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<SitesResponse>} Promise | undefined
 */
export function querySites(queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Gets the details of the views and workbooks on a site that have been most recently created, updated, or accessed by the signed in user. The 24 most recently viewed items are returned, though it may take some minutes after being viewed for an item to appear in the results.
 * @param {string} siteId The ID of the site that contains the views and workbooks.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function getRecentlyViewedForSite(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/content/recent`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns all the views for the specified site, optionally including usage statistics.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * @param {string} siteId The ID of the site that contains the views.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean=} [queryOptions.includeUsageStatistics] (Optional) true to return usage statistics. The default is false.
 * @param {number=} [queryOptions.pageSize] (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
 * @param {number=} [queryOptions.pageNumber] (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
 * @param {string=} [queryOptions.fields] (Optional) An expression that lets you specify the set of available fields to return. You can qualify the return values based upon predefined keywords such as _all_ or _default_, and you can specify individual fields for the workbooks or other supported resources. You can include multiple field expressions in a request. For more information, see Using Fields in the REST API.
 * @param {string=} [queryOptions.filter] <parameter documentation missing>
 * @param {string=} [queryOptions.sort] <parameter documentation missing>
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<ViewsResponse>} Promise | undefined
 */
export function queryViewsForSite(siteId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Modifies settings for the specified site, including the content URL, administration mode, user quota, state (active or suspended), storage quota, whether flows are enabled, whether subscriptions are enabled, and whether revisions are enabled. If you're working with Tableau Online, this method can also be used to upload a new logo image for the site.
 * Note: You must be signed in to a site in order to update it.
 * @param {string} siteId The ID of the site to update.
 * @param {SiteRequest} site site
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<SiteResponse>} Promise | undefined
 */
export function updateSite(siteId, site, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}`)
        .withBodyParameters(site)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Deletes the specified site.
 * You can specify the site to delete by using the site ID, the site name, or the content URL. You use the key query string parameter to indicate how you are specifying the site, as shown in the URIs.
 * Note: You must have previously called Sign In and signed in to a site in order to delete the site. (When you call this method, you must include the authentication token that you got back when you signed into the site.)
 * @param {string} siteId The ID of the site to delete.
 * @param {string} siteName The name of the site to delete. If you specify a site name, you must also include the parameter key=name.
 * @param {string} contentUrl The URL of the site to delete. If you specify a content URL, you must also include the parameter key=contentUrl.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteSite(siteId, siteName, contentUrl, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Deletes the specified site.
 * You can specify the site to delete by using the site ID, the site name, or the content URL. You use the key query string parameter to indicate how you are specifying the site, as shown in the URIs.
 * Note: You must have previously called Sign In and signed in to a site in order to delete the site. (When you call this method, you must include the authentication token that you got back when you signed into the site.)
 * @param {string} siteId The ID of the site to delete.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteSiteByID(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Deletes the specified site.
 * You can specify the site to delete by using the site ID, the site name, or the content URL. You use the key query string parameter to indicate how you are specifying the site, as shown in the URIs.
 * Note: You must have previously called Sign In and signed in to a site in order to delete the site. (When you call this method, you must include the authentication token that you got back when you signed into the site.)
 * @param {string} siteName The name of the site to delete. If you specify a site name, you must also include the parameter key=name.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteSiteByName(siteName, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteName}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Deletes the specified site.
 * You can specify the site to delete by using the site ID, the site name, or the content URL. You use the key query string parameter to indicate how you are specifying the site, as shown in the URIs.
 * Note: You must have previously called Sign In and signed in to a site in order to delete the site. (When you call this method, you must include the authentication token that you got back when you signed into the site.)
 * @param {string} contentUrl The URL of the site to delete. If you specify a content URL, you must also include the parameter key=contentUrl.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteSiteByContentUrl(contentUrl, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${contentUrl}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Deletes the specified data-driven alert from the specified site.
 * @param {string} siteId The ID of the site that contains the specified data-driven alert.
 * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by calling Query Data-Driven Alerts.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDataDrivenAlert(siteId, dataAlertId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/dataAlerts/${dataAlertId}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Returns details on a specified data-driven alert, including the recipients of the alert.
 * @param {string} siteId The ID of the site that contains the specified data-driven alert.
 * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by calling Query Data-Driven Alerts.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<DataAlertResponse>} Promise | undefined
 */
export function queryDataDrivenAlertDetails(siteId, dataAlertId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/dataAlerts/${dataAlertId}`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns a list of data-driven alerts in use on the specified site.
 * @param {string} siteId The ID of the site that contains data-driven alerts.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<DataAlertsResponse>} Promise | undefined
 */
export function queryDataDrivenAlerts(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/dataAlerts`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Adds a specified user to the recipients list for a data-driven alert.
 * @param {string} siteId The ID of the site that contains the specified data-driven alert.
 * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by calling Query Data-Driven Alerts.
 * @param {UserRequest} user user
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<UserResponse>} Promise | undefined
 */
export function addUserToDataDrivenAlert(siteId, dataAlertId, user, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/dataAlerts/${dataAlertId}/users`)
        .withBodyParameters(user)
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Removes a specified user from the recipients list for a data-driven alert.
 * @param {string} siteId The ID of the site that contains the specified data-driven alert.
 * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by calling Query Data-Driven Alerts.
 * @param {string} userId The ID (not name) of the user to remove from the data-driven alert.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteUserFromDataDrivenAlert(siteId, dataAlertId, userId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/dataAlerts/${dataAlertId}/users/${userId}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Update one or more settings for the specified data-driven alert; including the alert subject, frequency, and owner.
 * @param {string} siteId The ID of the site that contains the data-driven alert.
 * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by calling Query Data-Driven Alerts.
 * @param {DataAlertRequest} dataAlert dataAlert
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<DataAlertResponse>} Promise | undefined
 */
export function updateDataDrivenAlert(siteId, dataAlertId, dataAlert, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/dataAlerts/${dataAlertId}`)
        .withBodyParameters(dataAlert)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Adds permissions to the specified flow for a Tableau Server user or group. You can specify multiple sets of permissions using one call.
 * @param {string} siteId The ID of the site that contains the flow.
 * @param {string} flowId <parameter documentation missing>
 * @param {PermissionsRequest} permissions permissions
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function addFlowPermissions(siteId, flowId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows/${flowId}/permissions`)
        .withBodyParameters(permissions)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Note: This method is unavailable if you do not have the Data Management Add-on or Tableau Prep Conductor is disabled for your site.
 * Adds a task to run a flow to an existing schedule.
 * @param {string} siteId The ID of the site that contains the flow.
 * @param {string} scheduleId The ID of the schedule that you are associating with the flow. The schedule that you are adding to must have Flow as the schedule type.
 * @param {TaskRequest} task task
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function addFlowTaskToSchedule(siteId, scheduleId, task, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/schedules/${scheduleId}/flows`)
        .withBodyParameters(task)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Deletes a flow. When a flow is deleted, its associated connections, the output and input steps, any associated scheduled tasks, and run history are also deleted.
 * @param {string} siteId The ID of the site that contains the flow.
 * @param {string} flowId The ID of the flow to delete.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteFlow(siteId, flowId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows/${flowId}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Deletes the specified permission from the specified flow for a group or user.
 * @param {string} siteId The ID of the site that contains the flow.
 * @param {string} flowId The ID of the flow to remove the permission for.
 * @param {string} groupId The ID of the group to remove the permission for.
 * @param {string} userId The ID of the user to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a flow are ChangeHierarchy, ChangePermissions, Delete, Execute, ExportXml (Download), Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteFlowPermission(siteId, flowId, groupId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows/${flowId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Deletes the specified permission from the specified flow for a group or user.
 * @param {string} siteId The ID of the site that contains the flow.
 * @param {string} flowId The ID of the flow to remove the permission for.
 * @param {string} groupId The ID of the group to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a flow are ChangeHierarchy, ChangePermissions, Delete, Execute, ExportXml (Download), Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteFlowPermissionsForGroup(siteId, flowId, groupId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows/${flowId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Deletes the specified permission from the specified flow for a group or user.
 * @param {string} siteId The ID of the site that contains the flow.
 * @param {string} flowId The ID of the flow to remove the permission for.
 * @param {string} userId The ID of the user to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a flow are ChangeHierarchy, ChangePermissions, Delete, Execute, ExportXml (Download), Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteFlowPermissionsForUser(siteId, flowId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows/${flowId}/permissions/users/${userId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Downloads a flow in .tlsx format.
 * @param {string} siteId The ID of the site that contains the flow.
 * @param {string} flowId The ID of the flow to download.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function downloadFlow(siteId, flowId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows/${flowId}/content`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns information about the specified flow run task. This method shows you information about the scheduled task for the flow.
 * @param {string} siteId The ID of the site that the user is a member of.
 * @param {string} taskId The ID of the scheduled flow run task that you want information about.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function getFlowRunTask(siteId, taskId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/tasks/runFlow/${taskId}`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns a list of scheduled flow tasks for the site.
 * @param {string} siteId The ID of the site that the user is a member of.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function getFlowRunTasks(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/tasks/runFlow`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Publishes a flow on the specified site. To make other changes to a published flow, call Update Flow or Update Flow Connection.
 * You can do publish a flow in a single request or in multiple parts.
 * To publish a flow in a single request you include the content of the workbook file in the body of the request. The maximum size of a file that can be published in a single request is 64 MB.
 * To publish a flow in multiple parts, you initiate a file upload by calling Initiate File Upload(Link opens in a new window), send portions of the file to the server using Append to File Upload(Link opens in a new window), and then commit the upload by calling Publish Flow. In this case, Publish Flow doesn't contain the file to publish but the uploadSessionId and the flowType parameters are required.
 * Note: This method is unavailable if you do not have the Data Management Add-on license or Tableau Prep Conductor is disabled for your site.
 * @param {string} siteId The ID of the site to publish to.
 * @param {FlowRequest} flow flow
 * @param {Object} file File Contents
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function publishFlow(siteId, flow, file, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows`)
        .withHeaders({ "Content-Type": "multipart/mixed" })
        .withBodyParameters(flow)
        .withFileParameters({ name: "tableau_flow", file: file })
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Returns information about the specified flow, including information about the project, owner, and output steps.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * @param {string} siteId The ID of the site that contains the flow.
 * @param {string} flowId The ID of the flow to return information about.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function queryFlow(siteId, flowId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows/${flowId}`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns a list of data connections for the specific flow.
 * @param {string} siteId The ID of the site that contains the flow.
 * @param {string} flowId The ID of the flow to return connection information about.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function queryFlowConnections(siteId, flowId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows/${flowId}/connections`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns a list of permissions for the specific flow.
 * @param {string} siteId The ID of the site that contains the flow.
 * @param {string} flowId The ID of the flow to get permissions for.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function queryFlowPermissions(siteId, flowId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows/${flowId}/permissions`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns the flows on a site. If the user is not an administrator, the method returns just the flows that the user has permissions to view.
 * @param {string} siteId The ID of the site that contains the flows.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function queryFlowsForSite(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns the flows that the specified user owns in addition to those that the user has Read (view) permissions for.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * @param {string} siteId The ID of the site that contains the user.
 * @param {string} userId The ID of the user to get flows for.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean=} [queryOptions.isOwner] (Optional) trueto return only flows that the specified user owns, or falseto return all flows that the specified user has at least read access to. The default is false.
 * @param {number=} [queryOptions.pageSize] (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
 * @param {number=} [queryOptions.pageNumber] (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function queryFlowsForUser(siteId, userId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/users/${userId}/flows`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Runs the specified flow run task.
 * Note:  - This method is unavailable if you do not have the Data Management Add-on or Tableau Prep Conductor is disabled for your site.- This method will fail and result in an error if your Server Administrator has disabled the RunNow setting for the site. For more information, see Tableau Server Settings(Link opens in a new window).
 * This method runs the scheduled task for the flow. You must first schedule the task for the flow. You can do this using the Create Schedule(Link opens in a new window) method to create the task. The Run Flow task requires you to provide a task id. To get the task-id, use the Get Flow Run Tasks method, which returns the flowRun ID. The value of the flowRun ID is what you use as the task-id.
 * The method adds the flow run task to the backgrounder queue. Depending upon the backgrounder load, the task might not run immediately. The method returns information about the backgrounder job responsible for running the flow run task, including a job id that can be used with the Query Job method to query the status of the flow run.
 * A flow task can be initiated by a REST API call, a tabcmd command, or a job calling the task on a schedule. A REST request to start a flow task will often fail if the task has been put in the task queue in any of these ways, or is already in progress. If your request results in an error code 403102, it means that there is already a scheduled task for this within a very close time period (seconds). In this case, if the task is currently in a suspended state, it will resume.
 * @param {string} siteId The ID of the site that the user is a member of.
 * @param {string} taskId The ID of the flow run task that you want to run.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function runFlowTask(siteId, taskId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/tasks/runFlow/${taskId}/runNow`)
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Updates the owner, project, of the specified flow.
 * @param {string} siteId The ID of the site that contains the flow.
 * @param {string} flowId <parameter documentation missing>
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function updateFlow(siteId, flowId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows/${flowId}`)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Updates the server address, port, username, or password for the specified flow connection. The connection can be an input or an output connection.
 * @param {string} siteId The ID of the site that contains the flow.
 * @param {string} flowId The ID of the flow to update.
 * @param {string} connectionId The ID of the connection to update. To determine what connections are available for a flow, call Query Flow Connections.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function updateFlowConnection(siteId, flowId, connectionId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/flows/${flowId}/connections/${connectionId}`)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Creates a project on the specified site. You can also create project hierarchies by creating a project under the specified parent project on the site. To make changes to an existing project, call Update Project.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * @param {string} siteId The ID of the site to create the project in.
 * @param {ProjectRequest} project project
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean=} [queryOptions.publishSamples] (Optional) A Boolean value that specifies whether to publish the sample workbooks provided by Tableau to the project. When the publish-value is not specified in the request, or the publishSamples parameter is missing, no samples will be published. To publish the sample workbooks, set publishSamples parameter to true. This option is equivalent to the tabcmd command-line utility option, publishsamples. For more information, see tabcmd(Link opens in a new window).
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<ProjectResponse>} Promise | undefined
 */
export function createProject(siteId, project, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects`)
        .withQueryParameters(queryOptions)
        .withBodyParameters(project)
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Returns a list of projects on the specified site, with optional parameters for specifying the paging of large results.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * @param {string} siteId The ID of the site that contains the projects.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number=} [queryOptions.pageSize] (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
 * @param {number=} [queryOptions.pageNumber] (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
 * @param {string=} [queryOptions.filter] (Optional) An expression that lets you specify a subset of data sources to return. You can filter on predefined fields such as name, ownerName, and parentProjectId. You can include multiple filter expressions. For more information, see Filtering and Sorting.
 * @param {string=} [queryOptions.sort] (Optional) An expression that lets you specify the order in which user information is returned. If you do not specify a sort expression, the sort order of the information that's returned is undefined. For more information, see Filtering and Sorting.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<ProjectsResponse>} Promise | undefined
 */
export function queryProjects(siteId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Updates the name, description, or project hierarchy of the specified project. You can create or update project hierarchies by specifying a parent project for the project that you are updating using this method.
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} projectId The ID of the project to update.
 * @param {ProjectRequest} project project
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean=} [queryOptions.publishSamples] (Optional) A Boolean value that specifies whether to publish the sample workbooks provided by Tableau to the project when you update the project. When the publish-value is not specified in the request, or the publishSamples parameter is missing, no samples will be published. To publish the sample workbooks, set publishSamples parameter to true. This option is equivalent to the tabcmd command-line utility option, publishsamples. For more information, see tabcmd(Link opens in a new window).
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<ProjectResponse>} Promise | undefined
 */
export function updateProject(siteId, projectId, project, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}`)
        .withQueryParameters(queryOptions)
        .withBodyParameters(project)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Deletes the specified project on a specific site. When a project is deleted, all of its assets are also deleted: associated workbooks, data sources, project view options, and rights. Use this method with caution.
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} projectId The ID of the project to delete.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteProject(siteId, projectId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Publishes a workbook on the specified site. To make changes to a published workbook, call Update Workbook or Update Workbook Connection.
 * This method is used in two ways. You can call it to publish a workbook in a single request. To do that, you include the content of the workbook file in the body of the request. The maximum size of a file that can be published in a single request is 64 MB. If you want to avoid having the publishing process time out, you can use the asJob parameter to make workbook publication asynchronous.
 * Alternatively, you can publish a workbook in multiple parts. To do that, you initiate a file upload by calling Initiate File Upload, send portions of the file to the server using Append to File Upload, and then commit the upload by calling Publish Workbook. In this case, Publish Workbook doesn't contain the file to publish.
 * Hiding views in a published workbook To exclude certain sheets (also known as views) when you publish a workbook, configure them in the request as hidden. You cannot publish a workbook if all sheets are hidden.
 * Extracts with multiple table options If an extract was stored using the multiple tables option, you can't append data to it.
 * Workbooks that rely on external local resources When you publish a workbook from your local computer to the server, the publish process will fail if the workbook relies on resources (such as an Excel file or other data file) that are on your local computer but are not available on the server. (Unlike the publish process that is used in Tableau Desktop, the REST API publish process cannot automatically include extracts or other resources that the workbook uses.) If you are publishing a workbook that gets its data from a source on your computer, save the workbook as a packaged workbook (.twbx file) and publish the package so that workbook has all the resources it needs on the server.
 * For more information, see Publishing Resources.
 * @param {string} siteId The ID of the site to publish to.
 * @param {WorkbookRequest} workbook workbook
 * @param {Object} file File Contents
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean=} [queryOptions.overwrite] (Optional) true to overwrite a workbook that has the same name, or false to fail if the specified workbook already exists. The default is false. If overwrite-flag is set to true but the workbook doesn't already exist, the operation succeeds.
 * @param {boolean=} [queryOptions.asJob] (Optional, boolean) If false, the workbook publishing process runs as a synchronous process. If a workbook is very large, the process might time out before it finishes. If you set this value to true, the process runs asynchronously, and a job will start to perform the publishing process and return the job ID. You can check the status of the import job by calling Query Job. Default value is false.
 * @param {boolean=} [queryOptions.skipConnectionCheck] (Optional, boolean) If true, then the Tableau server will not check if a non-published connection of a workbook is reachable. Publishing will succeed but unchecked connection issues may result in a non-functioning workbook. If you encounter this issue, follow Keep Data Fresh guidelines(Link opens in a new window). Default value is false.
 * @param {string=} [queryOptions.uploadSessionId] If you are calling this method to commit a file that was uploaded in parts, this value contains the upload session ID that was generated by a call to Initiate File Upload. If this value is not included, the server assumes that the body of the request contains the file to be published.
 * @param {string=} [queryOptions.workbookType] twb or twbx to indicate whether you have uploaded a workbook file (twb) or a packaged workbook file (twbx). This value is required if you are calling Publish Workbook in order to commit a file that was previously uploaded using Append to File Upload. The value is not used if you upload a file in the body of the request.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<WorkbookResponse>} Promise | undefined
 */
export function publishWorkbook(siteId, workbook, file, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks`)
        .withHeaders({ "Content-Type": "multipart/mixed" })
        .withQueryParameters(queryOptions)
        .withBodyParameters(workbook)
        .withFileParameters({ name: "tableau_workbook", file: file })
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Adds one or more tags to the specified view.
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} viewId The ID of the views to add tags to.
 * @param {TagsRequest} tags tags
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<TagsResponse>} Promise | undefined
 */
export function addTagsToView(siteId, viewId, tags, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}/tags`)
        .withBodyParameters(tags)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Adds one or more tags to the specified workbook.
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} workbookId The ID of the workbook to add tags to.
 * @param {TagsRequest} tags tags
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<TagsResponse>} Promise | undefined
 */
export function addTagsToWorkbook(siteId, workbookId, tags, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/tags`)
        .withBodyParameters(tags)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Returns all the views for the specified workbook, optionally including usage statistics.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} workbookId The ID of the workbook to get the views for.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean=} [queryOptions.includeUsageStatistics] true to return usage statistics. The default is false.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<ViewsResponse>} Promise | undefined
 */
export function queryViewsForWorkbook(siteId, workbookId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/views`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns a specified view rendered as data in comma-separated-value (CSV) format.
 * CSV data is provided in the response body, rather than as a download. If you make multiple requests for CSV data, subsequent calls return a cached version of the data. This means that the returned data file might not include the latest changes to the view
 * If you make multiple requests for a view's data, subsequent calls return a cached version of the data. This means that the returned data might not include the latest changes to the view. To decrease the amount of time that an data is cached, use the maxAge parameter.
 * This method includes the ability to filter a view using fields in the underlying workbook data. To learn more about filtering query views, see Filtering and Sorting in the REST API.
 * @param {string} siteId The ID of the site that contains the view.
 * @param {string} viewId The ID of the view to render as data.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number=} [queryOptions.maxAge] (Optional) The maximum number of minutes view data will be cached before being refreshed. To prevent multiple view data requests from overloading the server, the shortest interval you can set is one minute. There is no maximum value, but the server job enacting the caching action may expire before a long cache period is reached.
 * @param {string=} [queryOptions.vf_<fieldname>] The value of the field that you want to use to filter the workbook view. For example, a workbook with the filter /data?vf_year=2017 would only display data from the year 2017. To learn more, see Filter query views.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function queryViewData(siteId, viewId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}/data`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns an image of the specified view.
 * If you make multiple requests for an image, subsequent calls return a cached version of the image. This means that the returned image might not include the latest changes to the view. To decrease the amount of time that an image is cached, use the maxAge parameter.
 * This method includes the ability to filter a view using fields in the underlying workbook data. To learn more about filtering query views, see Filtering and Sorting in the REST API.
 * Note: If you want to disable this endpoint, use TSM to set the sheet_image.enabled setting to false. For more information, see tsm configuration set options in the Tableau Server help.
 * @param {string} siteId The ID of the site that contains the view.
 * @param {string} viewId The ID of the view to return an image for.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string=} [queryOptions.resolution] (Optional) The resolution of the image. Image width and actual pixel density are determined by the display context of the image. Aspect ratio is always preserved. Set the value to high to ensure maximum pixel density.
 * @param {number=} [queryOptions.maxAge] (Optional) The maximum number of minutes a view image will be cached before being refreshed. To prevent multiple image requests from overloading the server, the shortest interval you can set is one minute. There is no maximum value, but the server job enacting the caching action may expire before a long cache period is reached.
 * @param {string=} [queryOptions.vf_<fieldname>] The value of the field that you want to use to filter the workbook view. For example, a workbook with the filter /data?vf_year=2017 would only display data from the year 2017. To learn more, see Filter query views.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function queryViewImage(siteId, viewId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}/image`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns a specified view rendered as a .pdf file.
 * If you make multiple requests for a PDF, subsequent calls return a cached version of the file. This means that the returned PDF might not include the latest changes to the view. To decrease the amount of time that an PDF is cached, use the maxAge parameter.
 * This method includes the ability to filter a view using fields in the underlying workbook data. To learn more about filtering query views, see Filtering and Sorting in the REST API.
 * @param {string} siteId The ID of the site that contains the view.
 * @param {string} viewId The ID of the view to render as a .pdf file.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string=} [queryOptions.vf_<fieldname>] The value of the field that you want to use to filter the workbook view. For example, a workbook with the filter /data?vf_year=2017 would only display data from the year 2017. To learn more, see Filter query views.
 * @param {number=} [queryOptions.maxAge] (Optional) The maximum number of minutes a view PDF will be cached before being refreshed. To prevent multiple PDF requests from overloading the server, the shortest interval you can set is one minute. There is no maximum value, but the server job enacting the caching action may expire before a long cache period is reached.
 * @param {string=} [queryOptions.orientation] (Optional) The orientation of the pages in the .pdf file produced. The value can be Portrait or Landscape. If this parameter is not present the page orientation will default to Portrait.
 * @param {string=} [queryOptions.type] (Optional) The type of page, which determines the page dimensions of the .pdf file returned. The value can be: A3, A4, A5, B5, Executive, Folio, Ledger, Legal, Letter, Note, Quarto, or Tabloid. If this parameter is not present the page type will default to Legal.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function queryViewPDF(siteId, viewId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}/pdf`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns the thumbnail image for the specified view.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * @param {string} siteId The ID of the site that contains the view.
 * @param {string} workbookId The ID of the workbook that contains the view to return a thumbnail image for.
 * @param {string} viewId The ID of the view to return a thumbnail image for.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function queryViewPreviewImage(siteId, workbookId, viewId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/views/${viewId}/previewImage`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns information about the specified workbook, including information about views and tags.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} workbookId The ID of the workbook to return information about.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<WorkbookResponse>} Promise | undefined
 */
export function queryWorkbook(siteId, workbookId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns a list of data connections for the specific workbook.
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} workbookId The ID of the workbook to return connection information about.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<ConnectionsResponse>} Promise | undefined
 */
export function queryWorkbookConnections(siteId, workbookId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/connections`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Gets the details of a specific view.
 * @param {string} siteId The ID of the site that contains the group.
 * @param {string} viewId The ID of the view whose details are requested.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<ViewResponse>} Promise | undefined
 */
export function getView(siteId, viewId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Gets the details of all views in a site with a specified name.
 * @param {string} siteId The ID of the site that contains the group.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string=} [queryOptions.viewName] The name of the view as it appears in the URL to the view. For https://MY_SERVER/#/MY_SITE/views/workbook-name/Sheet1?:iid=1, the name would be Sheet1.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<ViewResponse>} Promise | undefined
 */
export function getViewByPath(siteId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Gets a list of views that are recommended for a user. Using machine learning, the server will match preferences between similar users and recommend content that is most popular and recently viewed. When a recommended view is selected and not marked as hidden, it appears on the server Home and Recommendations pages.
 * @param {string} siteId <parameter documentation missing>
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function getViewRecommendations(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/recommendations/`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns a list of revision information (history) for the specified workbook.
 * Note: This method is available only if version history is enabled for the specified site.
 * To get a specific version of the workbook from revision history, use the Download Workbook Revision method. For more information, see Maintain a History of Revisions(Link opens in a new window) in the Tableau Server Help.
 * @param {string} siteId The ID of the site that contains the workbook to get revisions for.
 * @param {string} workbookId The ID of the workbook to get revisions for.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number=} [queryOptions.pageSize] (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
 * @param {number=} [queryOptions.pageNumber] (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<RevisionsResponse>} Promise | undefined
 */
export function getWorkbookRevisions(siteId, workbookId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/revisions`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Hides a view from being recommended by the server by adding it to a list of views that are dismissed for a user. If hidden, a view will not be displayed on the server Home or Recommendation pages.
 * @param {string} siteId The ID of the site that contains the group.
 * @param {RecommendationDismissalRequest} recommendationDismissal recommendationDismissal
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function hideViewRecommendations(siteId, recommendationDismissal, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/recommendations/dismissals`)
        .withBodyParameters(recommendationDismissal)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Unhides a view from being recommended by the server by removing it from the list of views that are dimissed for a user. If the unhidden view meets the criteria for being recommended, then it will be displayed on the server Home or Recommendation pages.
 * @param {string} siteId The ID of the site that contains the group.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string=} [queryOptions.id] The LUID of the view to be removed from the list of views hidden from recommendation for a user.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function unhideViewRecommendations(siteId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/recommendations/dismissals/`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Returns the thumbnail image as a PNG file for the specified workbook. Usually the image that is returned is for the first sheet in the workbook.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} workbookId The ID of the workbook to return the thumbnail image for.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function queryWorkbookPreviewImage(siteId, workbookId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/previewImage`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns the workbooks on a site.
 * If the user is not an administrator, the method returns just the workbooks that the user has permissions to view.
 * @param {string} siteId The ID of the site that contains the workbooks.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string=} [queryOptions.filter] (Optional) An expression that lets you specify a subset of workbooks to return. You can filter on predefined fields such as name, tags, and createdAt. You can include multiple filter expressions. For more information, see Filtering and Sorting.
 * @param {string=} [queryOptions.sort] (Optional) An expression that lets you specify the order in which workbook information is returned. If you do not specify a sort expression, the sort order of the information that's returned is undefined. For more information, see Filtering and Sorting.
 * @param {number=} [queryOptions.pageSize] (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
 * @param {number=} [queryOptions.pageNumber] (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
 * @param {string=} [queryOptions.fields] (Optional) An expression that lets you specify the set of available fields to return. You can qualify the return values based upon predefined keywords such as _all_ or _default_, and you can specify individual fields for the workbooks or other supported resources. You can include multiple field expressions in a request. For more information, see Using Fields in the REST API.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<WorkbooksResponse>} Promise | undefined
 */
export function queryWorkbooksForSite(siteId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns the workbooks that the specified user owns in addition to those that the user has Read (view) permissions for.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * @param {string} siteId The ID of the site that contains the user.
 * @param {string} userId The ID of the user to get workbooks for.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean=} [queryOptions.ownedBy] (Optional) true to return only workbooks that the specified user owns, or false to return all workbooks that the specified user has at least read access to. The default is false.
 * @param {number=} [queryOptions.pageSize] (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
 * @param {number=} [queryOptions.pageNumber] (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<WorkbooksResponse>} Promise | undefined
 */
export function queryWorkbooksForUser(siteId, userId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/users/${userId}/workbooks`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Downloads an Excel (.xlsx) file containing crosstab data from a view that the user has permission to access in a workbook. If a crosstab is exported from a dashboard, data from only the first view in the dashboard will appear in the .xlsx file. Downloads of data from story dashboards are not supported at this time.
 * If you make multiple requests for an .xlsx, subsequent calls return a cached version of the file. This means that the returned .xlsx might not include the latest changes to the workbook. To decrease the amount of time that a workbook is cached, use the maxAge parameter.
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} viewId The ID of the view to use as the source of the crosstab to be downloaded as an .xlsx file.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number=} [queryOptions.maxAge] (Optional) The maximum number of minutes an .xlsx file will be cached on the server before being refreshed. To prevent multiple .xlsx requests from overloading the server, the shortest interval you can set is one minute. There is no maximum value, but the server job enacting the caching action may expire before a long cache period is reached.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function downloadViewCrosstabExcel(siteId, viewId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}/crosstab/excel`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Downloads a workbook in .twb or .twbx format.
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} workbookId The ID of the workbook to download.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string=} [queryOptions.includeExtract] (Optional) The extract-value is a Boolean value (False or True). When the workbook specified for download has an extract, if you add the parameter ?includeExtract=False, the extract is not included when you download the workbook. You can use this option to improve performance if you are downloading workbooks or data sources that have large extracts.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function downloadWorkbook(siteId, workbookId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/content`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Downloads a .pdf containing images of the sheets that the user has permission to view in a workbook. Download Images/PDF permissions must be enabled for the workbook (true by default). If Show sheets in tabs is not selected for the workbook, only the default tab will appear in the .pdf file.
 * If you make multiple requests for a PDF, subsequent calls return a cached version of the file. This means that the returned PDF might not include the latest changes to the workbook. To decrease the amount of time that a workbook is cached, use the maxAge parameter.
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} workbookId The ID of the workbook to use as the source of the .pdf file to be downloaded.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number=} [queryOptions.maxAge] (Optional) The maximum number of minutes a workbook PDF will be cached before being refreshed. To prevent multiple PDF requests from overloading the server, the shortest interval you can set is one minute. There is no maximum value, but the server job enacting the caching action may expire before a long cache period is reached.
 * @param {string=} [queryOptions.orientation] (Optional) The orientation of the pages in the .pdf file produced. The value can be Portrait or Landscape. If this parameter is not present the page orientation will default to Portrait.
 * @param {string=} [queryOptions.type] (Optional) The type of page, which determines the page dimensions of the .pdf file returned. The value can be: A3, A4, A5, B5, Executive, Folio, Ledger, Legal, Letter, Note, Quarto, or Tabloid. If this parameter is not present the page type will default to Legal.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function downloadWorkbookPDF(siteId, workbookId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/pdf`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Downloads a PowerPoint (.pptx) file containing slides with images of the sheets that the user has permission to view in a workbook. Download Images/PDF permissions must be enabled for the workbook (true by default). If Show sheets in tabs is not selected for the workbook, only the default tab will appear in the .pptx file.
 * If you make multiple requests for a .pptx, subsequent calls return a cached version of the file. This means that the returned .pptx might not include the latest changes to the workbook. To decrease the amount of time that a workbook is cached, use the maxAge parameter.
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} workbookId The ID of the workbook to use as the source of the .pptx file to be downloaded.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number=} [queryOptions.maxAge] (Optional) The maximum number of minutes a workbook .pptx will be cached before being refreshed. To prevent multiple .pptx requests from overloading the server, the shortest interval you can set is one minute. There is no maximum value, but the server job enacting the caching action may expire before a long cache period is reached.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function downloadWorkbookPowerpoint(siteId, workbookId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/powerpoint`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Downloads a specific version of a workbook in .twb or .twbx format.
 * Note: This method is available only if version history is enabled for the specified site. For more information, see Maintain a History of Revisions(Link opens in a new window) in the Tableau Server Help.
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} workbookId The ID of the workbook to download.
 * @param {number} revisionNumber The revision number of the workbook to download. To determine what versions are available, call Get Workbook Revisions. Note that the current revision of a workbook cannot be accessed by this call; use Download Workbook instead.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string=} [queryOptions.includeExtract] (Optional) The extract-value is a Boolean value (False or True). When the workbook specified for download has an extract, if you add the parameter ?includeExtract=False, the extract is not included when you download the workbook. You can use this option to improve performance if you are downloading workbooks or data sources that have large extracts.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function downloadWorkbookRevision(siteId, workbookId, revisionNumber, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/revisions/${revisionNumber}/content`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Modifies an existing workbook, allowing you to change the owner or project that the workbook belongs to and whether the workbook shows views in tabs. Updated workbooks can optionally be marked to appear in the recently viewed list.
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} workbookId The ID of the workbook to update.
 * @param {WorkbookRequest} workbook workbook
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<WorkbookResponse>} Promise | undefined
 */
export function updateWorkbook(siteId, workbookId, workbook, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}`)
        .withBodyParameters(workbook)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Updates the server address, port, username, or password for the specified workbook connection.
 * If the workbook contains multiple connections to the same data source type, all the connections are updated. For example, if the workbook contains three connections to the same PostgreSQL database, and you attempt to update the user name of one of the connections, the user name is updated for all three connections.
 * Any combination of the attributes inside the <connection> element is valid. If no attributes are included, no update is made.
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} workbookId The ID of the workbook to update.
 * @param {string} connectionId The ID of the connection to update.
 * @param {ConnectionRequest} connection connection
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<ConnectionResponse>} Promise | undefined
 */
export function updateWorkbookConnection(siteId, workbookId, connectionId, connection, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/connections/${connectionId}`)
        .withBodyParameters(connection)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Refreshes the specified workbook.
 * This method refreshes the specified workbook, with no need to associate the workbook refresh with a scheduled task. This method is the equivalent of selecting a workbook using the Tableau Server UI, and then selecting Refresh Extracts from the menu (also known as a "manual refresh").
 * Note: This method will fail and result in an error if your Server Administrator has disabled the RunNow setting for the site. For more information, see Tableau Server Settings(Link opens in a new window).
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} workbookId The ID of the workbook to refresh.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<JobResponse>} Promise | undefined
 */
export function updateWorkbookNow(siteId, workbookId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/refresh`)
        .withBodyParameters()
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Deletes a workbook. When a workbook is deleted, all of its assets are also deleted, including associated views, data connections, and so on.
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} workbookId The ID of the workbook to remove.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteWorkbook(siteId, workbookId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Deletes a tag from the specified view.
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} viewId The ID of the view to remove the tag from.
 * @param {string} tagName The name of the tag to remove from the view.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteTagFromView(siteId, viewId, tagName, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}/tags/${tagName}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Deletes a tag from the specified workbook.
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} workbookId The ID of the workbook to remove the tag from.
 * @param {string} tagName The name of the tag to remove from the workbook.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteTagFromWorkbook(siteId, workbookId, tagName, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/tags/${tagName}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Returns a report about data acceleration for the site. It lets you compare page load times for before and after data acceleration is enabled.
 * @param {string} siteId The ID of the site that contains the task.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<DataAccelerationReportResponse>} Promise | undefined
 */
export function getDataAccelerationReportForASite(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/dataAccelerationReport`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Publishes a data source on the specified site, or appends data to an existing data source. To make other changes to a published data source, call Update Data Source or Update Data Source Connection.
 * This method is used in two ways. You can call it to publish a data source in a single request. To do that, you include the content of the data source file in the body of the request. The maximum size of a file that can be published in a single request is 64 MB. If you want to avoid having the publishing process time out, you can use the asJob parameter to make data source publication asynchronous.
 * Alternatively, you can publish a data source in multiple parts. To do that, you initiate a file upload by calling Initiate File Upload, send portions of the file to the server using Append to File Upload, and then commit the upload by calling Publish Data Source. In this case, Publish Data Source doesn't contain the file to publish.
 * Extracts with multiple table options If an extract was stored using the multiple tables option, you can't append data to it.
 * Data Sources stored locally When you publish a data source from your local computer to the server, you must make sure that the server has all the components that are required in order for other users to see and interact with the data source. For example, if the data source is based on an Excel spreadsheet, you typically publish a packaged data source (.tdsx file) that contains all the components for that data source.
 * For more information, see Publishing Resources.
 * @param {string} siteId The ID of the site to publish to.
 * @param {DatasourceRequest} datasource datasource
 * @param {Object} file File Contents
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean=} [queryOptions.overwrite] (Optional) true to overwrite a data source that has the same name, or false to fail if the specified data source already exists. The default is false. If overwrite-flag is set to true but the data source doesn't already exist, the operation succeeds. You can include both the overwrite and append parameters in a request, but they cannot both be true.
 * @param {boolean=} [queryOptions.asJob] (Optional) A Boolean value that is used to publish data sources asynchronously. If you set this value to false (the default), the publishing process runs as a synchronous process. If a data source is very large, the process might time out before it finishes. If you set this value to true, the process runs asynchronously, and a job will start to perform the publishing process and return the job ID. You can check the status of the import job by calling Query Job.
 * @param {boolean=} [queryOptions.append] (Optional) true to append the data being published to an existing data source that has the same name. The default is false. If append-flag is set to true but the data source doesn't already exist, the operation fails. In order to append data to an existing data source, both the data source on the server and the data source you are publishing must be extracts (.tde and .hyper files). The schemas of the two extracts must match. If an extract was stored using the multiple tables option, you can't append data to it.You can include both the overwrite and append parameters in a request, but they cannot both be true.
 * @param {string=} [queryOptions.uploadSessionId] If you are calling this method to commit a file that was uploaded in parts, this value contains the upload session ID that was generated by a call to Initiate File Upload. If this value is not included, the server assumes that the body of the request contains the file to be published.
 * @param {string=} [queryOptions.datasourceType] hyper, tds, tdsx, or tde the kind of file that you are uploading. This value is required if you are calling Publish Data Source in order to commit a file that was previously uploaded using Append to File Upload. The value is not used if you upload a file in the body of the request.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<DatasourceResponse>} Promise | undefined
 */
export function publishDataSource(siteId, datasource, file, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources`)
        .withHeaders({ "Content-Type": "multipart/mixed" })
        .withQueryParameters(queryOptions)
        .withBodyParameters(datasource)
        .withFileParameters({ name: "tableau_datasource", file: file })
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Adds one or more tags to the specified data source.
 * @param {string} siteId The ID of the site that contains the data source.
 * @param {string} datasourceId The ID of the data source to add tags to.
 * @param {TagsRequest} tags tags
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<TagsResponse>} Promise | undefined
 */
export function addTagsToDataSource(siteId, datasourceId, tags, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/tags`)
        .withBodyParameters(tags)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Deletes a tag from the specified data source.
 * @param {string} siteId The ID of the site that contains the data source.
 * @param {string} datasourceId The ID of the data source to remove the tag from.
 * @param {string} tagName The name of the tag to remove from the data source.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteTagFromDataSource(siteId, datasourceId, tagName, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/tags/${tagName}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Returns information about the specified data source.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * @param {string} siteId The site that contains the data source.
 * @param {string} datasourceId The ID of the data source to get.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<DatasourceResponse>} Promise | undefined
 */
export function queryDataSource(siteId, datasourceId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns a list of published data sources on the specified site, with optional parameters for specifying the paging of large results. To get a list of data sources embedded in a workbook, use the Query Workbook Connections method.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * @param {string} siteId The ID of the site that contains the data sources.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number=} [queryOptions.pageSize] (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
 * @param {number=} [queryOptions.pageNumber] (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
 * @param {string=} [queryOptions.filter] (Optional) An expression that lets you specify a subset of data sources to return. You can filter on predefined fields such as name and updatedAt. You can include multiple filter expressions. For more information, see Filtering and Sorting.
 * @param {string=} [queryOptions.sort] (Optional) An expression that lets you specify the order in which user information is returned. If you do not specify a sort expression, the sort order of the information that's returned is undefined. For more information, see Filtering and Sorting.
 * @param {string=} [queryOptions.fields] (Optional) An expression that lets you specify the set of available fields to return. You can qualify the return values based upon predefined keywords such as _all_ or _default_, and you can specify individual fields for the data sources or other supported resources. You can include multiple field expressions in a request. For more information, see Using Fields in the Rest API.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<DatasourcesResponse>} Promise | undefined
 */
export function queryDataSources(siteId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns a list of data connections for the specified data source.
 * @param {string} siteId The ID of the site that contains the data source.
 * @param {string} datasourceId The ID of the data source to return connection information about.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<ConnectionsResponse>} Promise | undefined
 */
export function queryDataSourceConnections(siteId, datasourceId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/connections`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns a list of revision information (history) for the specified data source.
 * Note: This method is available only if version history is enabled for the specified site. For more information, see Maintain a History of Revisions(Link opens in a new window) in the Tableau Server Help.
 * To get a specific version of the data source from revision history, use the Download Data Source Revision method.
 * @param {string} siteId The ID of the site that contains the data source to get revisions for.
 * @param {string} datasourceId The ID of the data source to get revisions for.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number=} [queryOptions.pageSize] (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
 * @param {number=} [queryOptions.pageNumber] (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<RevisionsResponse>} Promise | undefined
 */
export function getDataSourceRevisions(siteId, datasourceId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/revisions`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Downloads a data source in .tdsx format.
 * @param {string} siteId The ID of the site that contains the data source.
 * @param {string} datasourceId The ID of the data source to download.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string=} [queryOptions.includeExtract] (Optional) The extract-value is a Boolean value (False or True). When the data source specified for download has an extract, if you add the parameter ?includeExtract=False, the extract is not included when you download the data source. You can use this parameter to improve performance if you are downloading workbooks or data sources that have large extracts.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function downloadDataSource(siteId, datasourceId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/content`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Downloads a specific version of a data source in .tdsx format.
 * Note: This method is available only if version history is enabled for the specified site. For more information, see Maintain a History of Revisions(Link opens in a new window) in the Tableau Server Help.
 * @param {string} siteId The ID of the site that contains the data source.
 * @param {string} datasourceId The ID of the data source to download.
 * @param {number} revisionNumber The revision number of the data source to download. To determine what versions are available, call Get Data Source Revisions.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string=} [queryOptions.includeExtract] (Optional) The extract-value is a Boolean value (False or True). When the data source specified for download has an extract, if you add the parameter ?includeExtract=False, the extract is not included when you download the data source. You can use this parameter to improve performance if you are downloading workbooks or data sources that have large extracts.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function downloadDataSourceRevision(siteId, datasourceId, revisionNumber, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/revisions/${revisionNumber}/content`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Updates the owner, project or certification status of the specified data source.
 * @param {string} siteId The ID of the site that contains the data source.
 * @param {string} datasourceId The ID of the data source to update.
 * @param {DatasourceRequest} datasource datasource
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<DatasourceResponse>} Promise | undefined
 */
export function updateDataSource(siteId, datasourceId, datasource, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}`)
        .withBodyParameters(datasource)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Updates the server address, port, username, or password for the specified data source connection.
 * @param {string} siteId The ID of the site that contains the data source.
 * @param {string} datasourceId The ID of the data source to update.
 * @param {string} connectionId The ID of the connection to update. To determine what connections are available for a data source, call Query Data Source Connections.
 * @param {ConnectionRequest} connection connection
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<ConnectionResponse>} Promise | undefined
 */
export function updateDataSourceConnection(siteId, datasourceId, connectionId, connection, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/connections/${connectionId}`)
        .withBodyParameters(connection)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Runs an extract refresh on the specified data source.
 * Note: This method will fail and result in an error if your Server Administrator has disabled the RunNow setting for the site. For more information, see Tableau Server Settings(Link opens in a new window).
 * This method runs an extract refresh for the specified data source, with no need to associate that extract refresh with a scheduled task. This method is the equivalent of selecting a data source using the Tableau Server UI, and then selecting Refresh Extracts from the menu (also known as a "manual refresh"), however, the REST method always runs a full refresh even if the refresh type is set to incremental. Similar to a manual refresh, if the extract is a .tde file, it will be converted to a .hyper file as a result of the refresh. To learn more about extract upgrades to the .hyper file format, see Extract Upgrade to .hyper Format.
 * @param {string} siteId The ID of the site that contains the data source.
 * @param {string} datasourceId The ID of the data source to refresh.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<JobResponse>} Promise | undefined
 */
export function updateDataSourceNow(siteId, datasourceId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/refresh`)
        .withBodyParameters()
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Deletes the specified data source from a site. When a data source is deleted, its associated data connection is also deleted. Workbooks that use the data source are not deleted, but they will no longer work properly.
 * @param {string} siteId The ID of the site that contains the data source.
 * @param {string} datasourceId The ID of the data source to delete.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDataSource(siteId, datasourceId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Removes a specific version of a data source from the specified site.
 * The content is removed, and the specified revision can no longer be downloaded using Download Data Source Revision. If you call Get Data Source Revisions, the revision that's been removed is listed with the attribute IsDeleted="true".
 * Note: Calling this method permanently removes the specified data source revision.
 * @param {string} siteId The ID of the site that contains the group.
 * @param {string} datasourceId The ID of the data source to remove the revision for.
 * @param {number} revisionNumber The revision number of the data source to remove. To determine what versions are available, call Get Data Source Revisions.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function removeDataSourceRevision(siteId, datasourceId, revisionNumber, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/revisions/${revisionNumber}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Creates a group in Tableau Server. If the server is configured to use Active Directory for authentication, this method can create a group in Tableau Server and then import users from an Active Directory group.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * To add users to a group, call Add User To Group. To make changes to an existing group, call Update Group.
 * If you use the method to import users from an Active Directory, the import process can be performed immediately (synchronously) or as a background job (asynchronously).
 * Note: If Active Directory contains a large number of users, you should import them asynchronously; otherwise, the process can time out.
 * The Create Group response returns information in two ways: in the response header and in the response body. The ID of the new group is always returned as the value of the Location header. If you create a local group or import an Active Directory group immediately, the response body contains the name and ID of the new group. If you import an Active Directory group using a background process, the response body contains a <job> element that includes a job ID. You can use the job ID to check the status of the operation by calling Query Job.
 * @param {string} siteId The ID of the site to create the group in.
 * @param {GroupRequest} group group
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean=} [queryOptions.asJob] A Boolean value that is used if you are importing from Active Directory. If you set this to false (the default), the import process runs as a synchronous process. If the Active Directory group contains many users, the process might time out before it finishes.  If you set this to true, the process runs asynchronously. In that case, Tableau Server starts a job to perform the import and returns the job ID in the Location header. You can check the status of the import job by calling Query Job. Note: This parameter has no effect if the server is configured to use local authentication.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<GroupResponse>} Promise | undefined
 */
export function createGroup(siteId, group, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/groups`)
        .withQueryParameters(queryOptions)
        .withBodyParameters(group)
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Adds a user to the specified group.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * @param {string} siteId The ID of the site that contains the group.
 * @param {string} groupId The ID of the group to add the user to.
 * @param {UserRequest} user user
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<UserResponse>} Promise | undefined
 */
export function addUserToGroup(siteId, groupId, user, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/groups/${groupId}/users`)
        .withBodyParameters(user)
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Adds a user to Tableau Server and assigns the user to the specified site.
 * If Tableau Server is configured to use local authentication, the information you specify is used to create a new user in Tableau Server.
 * Note: After creating the user, you must set a full name, password, and email address for the user with the call to Update User. If you are using SAML with local authentication, the user information that you add is not synchronized with the SAML IdP, as it would be if you were using Active Directory. Even if it is not used by SAML, the user information must be present.
 * If Tableau Server is configured to use Active Directory for authentication, the user you specify is imported from Active Directory into Tableau Server.
 * When you add user to Tableau Online, the name of the user must be the email address that is used to sign in to Tableau Online. After you add a user, Tableau Online sends the user an email invitation. The user can click the link in the invitation to sign in and update their full name and password.
 * If you try to add a user using a specific site role but you have already reached the limit on the number of licenses for your users, the user is added as an unlicensed user. In that case, the response code is 201 (which indicates success), but the siteRole value in the response body is set to Unlicensed.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * @param {string} siteId The ID of the site to add users to.
 * @param {UserRequest} user user
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<UserResponse>} Promise | undefined
 */
export function addUserToSite(siteId, user, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/users`)
        .withBodyParameters(user)
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Gets a list of groups of which the specified user is a member.
 * @param {string} siteId The ID of the site that contains the group.
 * @param {string} userId The ID of the user whose group memberships are listed.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number=} [queryOptions.pageSize] (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
 * @param {number=} [queryOptions.pageNumber] (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<GroupsResponse>} Promise | undefined
 */
export function getGroupsForAUser(siteId, userId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/users/${userId}/groups`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Gets a list of users in the specified group.
 * @param {string} siteId The ID of the site that contains the group.
 * @param {string} groupId The ID of the group to get the users for.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number=} [queryOptions.pageSize] (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
 * @param {number=} [queryOptions.pageNumber] (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<UsersResponse>} Promise | undefined
 */
export function getUsersInGroup(siteId, groupId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/groups/${groupId}/users`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns the users associated with the specified site.
 * @param {string} siteId The ID of the site that contains the users.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string=} [queryOptions.filter] (Optional) An expression that lets you specify a subset of users to return. You can filter on predefined fields such as name and lastLogin. You can include multiple filter expressions. For more information, see Filtering and Sorting.
 * @param {string=} [queryOptions.sort] (Optional) An expression that lets you specify the order in which user information is returned. If you do not specify a sort expression, the sort order of the information that's returned is undefined. For more information, see Filtering and Sorting.
 * @param {number=} [queryOptions.pageSize] (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
 * @param {number=} [queryOptions.pageNumber] (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
 * @param {string=} [queryOptions.fields] (Optional) An expression that lets you specify the set of available fields to return. You can qualify the return values based upon predefined keywords such as _all_ or _default_, and you can specify individual fields for the views or other supported resources. You can include multiple field expressions in a request. For more information, see Using Fields in the REST API.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<UsersResponse>} Promise | undefined
 */
export function getUsersOnSite(siteId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/users`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns a list of groups on the specified site, with optional parameters for specifying the paging of large results.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * @param {string} siteId The ID of the site that contains the groups.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number=} [queryOptions.pageSize] (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
 * @param {number=} [queryOptions.pageNumber] (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
 * @param {string=} [queryOptions.filter] (Optional) An expression that lets you specify a subset of groups to return. You can filter on predefined fields such as name. You can include multiple filter expressions. For more information, see Filtering and Sorting.
 * @param {string=} [queryOptions.sort] (Optional) An expression that lets you specify the order in which user information is returned. If you do not specify a sort expression, the sort order of the information that's returned is undefined. For more information, see Filtering and Sorting.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<GroupsResponse>} Promise | undefined
 */
export function queryGroups(siteId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/groups`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns information about the specified user.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * @param {string} siteId The ID of the site that contains the user.
 * @param {string} userId The ID of the user to get information for.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<UserResponse>} Promise | undefined
 */
export function queryUserOnSite(siteId, userId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/users/${userId}`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Updates a group in Tableau Server.
 * If the server is configured to use local authentication, the method lets you update the group name. If the server is configured to use Active Directory authentication, the method synchronizes the Tableau Server group with Active Directory.
 * During synchronization, the method updates the group in Tableau Server and modifies the set of users in the group to be the same as those in Active Directory. Users in Active Directory that are not in the group on Tableau Server are added to the group, and users in Tableau Server that are not in the Active Directory group are removed from the Tableau Server group. Users that are no longer in Active Directory at all are unlicensed.
 * If the update synchronizes with Active Directory, Tableau Server can perform the update either immediately (synchronously) or by using a background job (asynchronously). If Active Directory contains a large number of users, you should perform the synchronization process as a background job so that the process doesn't time out. By default, synchronizing with Active Directory is performed immediately (synchronously).
 * @param {string} siteId The ID of the site that contains the group.
 * @param {string} groupId The ID of the group to update.
 * @param {GroupRequest} group group
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function updateGroup(siteId, groupId, group, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/groups/${groupId}`)
        .withBodyParameters(group)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Modifies information about the specified user.
 * If Tableau Server is configured to use local authentication, you can update the user's name, email address, password, or site role.
 * If Tableau Server is configured to use Active Directory for authentication, you can change the user's display name (full name), email address, and site role. However, if you synchronize the user with Active Directory, the display name and email address will be overwritten with the information that's in Active Directory.
 * For Tableau Online, you can update the site role for a user, but you cannot update or change a user's password, user name (email address), or full name.
 * @param {string} siteId The ID of the site that contains the user.
 * @param {string} userId The ID of the user to update.
 * @param {UserRequest} user user
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<UserResponse>} Promise | undefined
 */
export function updateUser(siteId, userId, user, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/users/${userId}`)
        .withBodyParameters(user)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Removes a user from the specified group.
 * @param {string} siteId The ID of the site that contains the group.
 * @param {string} groupId The ID of the group to remove the user from.
 * @param {string} userId The ID of the user to remove.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function removeUserFromGroup(siteId, groupId, userId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/groups/${groupId}/users/${userId}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Removes a user from the specified site. If a user still owns content (assets) on Tableau Server, the user cannot be deleted unless the ownership is reassigned first.
 * If a user is removed from all sites that the user is a member of, the user is deleted.
 * @param {string} siteId The ID of the site that contains the user.
 * @param {string} userId The ID of the user to remove.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function removeUserFromSite(siteId, userId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/users/${userId}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Deletes the group on a specific site. Deleting a group does not delete the users in group, but users are no longer members of the group. Any permissions that were previously assigned to the group no longer apply.
 * Note: You cannot delete the All Users group.
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} groupId The ID of the group to delete.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteGroup(siteId, groupId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/groups/${groupId}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Get information about a database asset.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} databaseId The unique ID of the database asset.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function queryDatabase(siteId, databaseId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Get information about all database assets for a site.
 * @param {string} siteId The unique ID of the site asset.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function queryDatabases(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Update the database description, certify a database, or assign a contact (must be a Tableau Server or Tableau Online user) to the database asset.
 * This method is available if your Tableau Online site or Tableau Server is licensed with the Data Management Add-on.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} databaseId The unique ID of the database asset.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function updateDatabase(siteId, databaseId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}`)
        .withBodyParameters()
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Permanently remove the database asset.
 * This method is available if your Tableau Online site or Tableau Server is licensed with the Data Management Add-on.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} databaseId The unique ID of the database asset.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function removeDatabase(siteId, databaseId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Add permissions to a database asset. To add permissions, the database asset must be associated with a published data source.
 * This method is available if your Tableau Online site or Tableau Server is licensed with the Data Management Add-on.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} databaseId The unique ID of the database asset.
 * @param {PermissionsRequest} permissions permissions
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function addDatabasePermissions(siteId, databaseId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}/permissions`)
        .withBodyParameters(permissions)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Get information about the permissions on a database asset.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} databaseId The unique ID of the database asset.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function queryDatabasePermissions(siteId, databaseId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}/permissions`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Applying default permissions to a database functions as a permissions template for the database's children table assets. How default permissions are enforced depends on whether the database is locked or unlocked.
 * Locked to the database: If the permissions on a database are locked or Locked to the database, existing child table assets and new child table assets that get indexed by Catalog will inherit the default permissions applied to the parent database asset. Note: If the database is locked, explicit permissions cannot be made for individual tables.  Managed by the owner: If the permissions on a database are unlocked or Managed by the owner, only new child table assets that get indexed by Catalog will inherit the default permissions applied to the parent database asset. Note: If the database is unlocked, explicit permissions for the table can be made in a separate request.
 * This method is available if your Tableau Online site or Tableau Server is licensed with the Data Management Add-on.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} databaseId The unique ID of the database asset to set default permissions for.
 * @param {PermissionsRequest} permissions permissions
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function addDefaultDatabasePermissions(siteId, databaseId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/databases/${databaseId}/default-permissions/tables`)
        .withBodyParameters(permissions)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Get the default permissions applied to the database asset and its children tables.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} databaseId The unique ID of the database asset to set default permissions for.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function queryDefaultDatabasePermissions(siteId, databaseId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/databases/${databaseId}/default-permissions/tables`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Permanently remove the permissions applied to a database asset.
 * This method is available if your Tableau Online site or Tableau Server is licensed with the Data Management Add-on.
 * @param {string} siteId The unique ID of the site.
 * @param {string} databaseId The unique ID of the database asset.
 * @param {string} userId The unique ID of the user to remove the permissions for.
 * @param {string} groupId The unique ID of the group to remove the permissions for.
 * @param {string} capabilityName The explicit permissions capability to remove. Capabilities that can be removed are Read, Write, or ChangePermissions.
 * @param {string} capabilityMode The permissions mode to remove. Modes that can be removed are Allow or Deny.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDatabasePermissions(siteId, databaseId, userId, groupId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}/permissions/users/${userId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Permanently remove the permissions applied to a database asset.
 * This method is available if your Tableau Online site or Tableau Server is licensed with the Data Management Add-on.
 * @param {string} siteId The unique ID of the site.
 * @param {string} databaseId The unique ID of the database asset.
 * @param {string} userId The unique ID of the user to remove the permissions for.
 * @param {string} capabilityName The explicit permissions capability to remove. Capabilities that can be removed are Read, Write, or ChangePermissions.
 * @param {string} capabilityMode The permissions mode to remove. Modes that can be removed are Allow or Deny.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDatabasePermissionsForGroup(siteId, databaseId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}/permissions/users/${userId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Permanently remove the permissions applied to a database asset.
 * This method is available if your Tableau Online site or Tableau Server is licensed with the Data Management Add-on.
 * @param {string} siteId The unique ID of the site.
 * @param {string} databaseId The unique ID of the database asset.
 * @param {string} groupId The unique ID of the group to remove the permissions for.
 * @param {string} capabilityName The explicit permissions capability to remove. Capabilities that can be removed are Read, Write, or ChangePermissions.
 * @param {string} capabilityMode The permissions mode to remove. Modes that can be removed are Allow or Deny.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDatabasePermissionsForUser(siteId, databaseId, groupId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Permanently remove the default permissions on a database asset. Removing the default permissions from the database asset means that any new child table assets that are indexed by Catalog won't have any default permissions set.
 * This method is available if your Tableau Online site or Tableau Server is licensed with the Data Management Add-on.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} databaseId The unique ID of the database asset.
 * @param {string} userId <parameter documentation missing>
 * @param {string} capabilityMode <parameter documentation missing>
 * @param {string} groupId <parameter documentation missing>
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDefaultDatabasePermissions(siteId, databaseId, userId, capabilityMode, groupId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}/default-permissions/tables/users/${userId}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Permanently remove the default permissions on a database asset. Removing the default permissions from the database asset means that any new child table assets that are indexed by Catalog won't have any default permissions set.
 * This method is available if your Tableau Online site or Tableau Server is licensed with the Data Management Add-on.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} databaseId The unique ID of the database asset.
 * @param {string} userId <parameter documentation missing>
 * @param {string} capabilityMode <parameter documentation missing>
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDefaultDatabasePermissionsForUser(siteId, databaseId, userId, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}/default-permissions/tables/users/${userId}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Permanently remove the default permissions on a database asset. Removing the default permissions from the database asset means that any new child table assets that are indexed by Catalog won't have any default permissions set.
 * This method is available if your Tableau Online site or Tableau Server is licensed with the Data Management Add-on.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} databaseId The unique ID of the database asset.
 * @param {string} capabilityMode <parameter documentation missing>
 * @param {string} groupId <parameter documentation missing>
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDefaultDatabasePermissionsForGroup(siteId, databaseId, capabilityMode, groupId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}/default-permissions/tables/groups/${groupId}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Get information about a table asset.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} tableId The unique ID of the table asset.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function queryTable(siteId, tableId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables/${tableId}`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Get information about all table assets for a site.
 * @param {string} siteId The unique ID of the site asset.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function queryTables(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Update the table description, certify a table, or a assign a user contact to the table asset.
 * This method is available if your Tableau Online site or Tableau Server is licensed with the Data Management Add-on.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} tableId The unique ID of the table asset.
 * @param {TableRequest} table table
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function updateTable(siteId, tableId, table, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables/${tableId}`)
        .withBodyParameters(table)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Permanently remove the table asset.
 * This method is available if your Tableau Online site or Tableau Server is licensed with the Data Management Add-on.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} tableId The unique ID of the table asset.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function removeTable(siteId, tableId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables/${tableId}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Add permissions to a table asset.
 * This method is available if your Tableau Online site or Tableau Server is licensed with the Data Management Add-on.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} tableId The unique ID of the table asset.
 * @param {PermissionsRequest} permissions permissions
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function addTablePermissions(siteId, tableId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables/${tableId}/permissions`)
        .withBodyParameters(permissions)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Get information about the permissions on a table asset.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} tableId The unique ID of the table asset.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function queryTablePermissions(siteId, tableId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables/${tableId}/permissions`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Permanently remove the permissions applied to a table asset.
 * This method is available if your Tableau Online site or Tableau Server is licensed with the Data Management Add-on.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} tableId The unique ID of the table asset.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteTablePermissions(siteId, tableId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/table/${tableId}/permissions`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Get information about a column in a table asset.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} tableId The unique ID of the table asset.
 * @param {string} columnId The unique ID of the column asset.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function queryColumnInATable(siteId, tableId, columnId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables/${tableId}/columns/${columnId}`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Get information about the columns in a table asset.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} tableId The unique ID of the table asset.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function queryColumnsInATable(siteId, tableId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables/${tableId}/columns`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Update the description of the column.
 * This method is available if your Tableau Online site or Tableau Server is licensed with the Data Management Add-on.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} tableId The unique ID of the table asset.
 * @param {string} columnId The unique ID of the column asset.
 * @param {ColumnRequest} column column
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function updateColumn(siteId, tableId, columnId, column, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables/${tableId}/columns/${columnId}`)
        .withBodyParameters(column)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Permanently remove the column from a table asset.
 * This method is available if your Tableau Online site or Tableau Server is licensed with the Data Management Add-on.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} tableId The unique ID of the table asset.
 * @param {string} columnId The unique ID of the column asset.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function removeColumn(siteId, tableId, columnId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables/${tableId}/columns/${columnId}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Create and apply a data quality warning to a database, table, published data source, or flow. Only one data quality warning can be applied to the asset. Adding a data quality warning to the asset that already has one causes an error.
 * This method is available if your Tableau Online site or Tableau Server is licensed with the Data Management Add-on.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} contentType The type of asset that the data quality warning is being attached to. To specify the type, use: databasetabledatasourceflowTypes are not case sensitive.
 * @param {string} contentLuid The unique ID of the asset (database, table, published data source, or flow). This is the same as the content ID.
 * @param {DataQualityWarningRequest} dataQualityWarning dataQualityWarning
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function addDataQualityWarning(siteId, contentType, contentLuid, dataQualityWarning, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/dataQualityWarnings/${contentType}/${contentLuid}`)
        .withBodyParameters(dataQualityWarning)
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Get information about a specific data quality warning.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} dataqualitywarningId The unique ID of the data quality warning attached to the asset (database, table, published data source, or flow).
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function queryDataQualityWarningByID(siteId, dataqualitywarningId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/dataQualityWarnings/${dataqualitywarningId}`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Get information about the data quality warning for the database, table, published data source, or flow.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} contentType The type of asset that the data quality warning is being attached to. To specify the type, use one of the following values: databasetabledatasourceflowTypes are not case sensitive.
 * @param {string} contentLuid The unique ID of the content type (database, table, published data source, or flow). This is the same as the content ID.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function queryDataQualityWarningByContent(siteId, contentType, contentLuid, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/dataQualityWarnings/${contentType}/${contentLuid}`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Update the warning type, status, and message of a data quality warning.
 * This method is available if your Tableau Online site or Tableau Server is licensed with the Data Management Add-on.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} dataqualitywarningId The unique ID of the data quality warning attached to the asset (database, table, published data source, or flow).
 * @param {DataQualityWarningRequest} dataQualityWarning dataQualityWarning
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function updateDataQualityWarning(siteId, dataqualitywarningId, dataQualityWarning, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/dataQualityWarnings/${dataqualitywarningId}`)
        .withBodyParameters(dataQualityWarning)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Permanently remove a data quality warning.
 * This method is available if your Tableau Online site or Tableau Server is licensed with the Data Management Add-on.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} dataqualitywarningId The unique ID of the data quality warning attached to the asset (database, table, published data source, or flow).
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDataQualityWarningByID(siteId, dataqualitywarningId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/dataQualityWarnings/${dataqualitywarningId}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Permanently remove the data quality warning from the database, table, published data source, or flow.
 * This method is available if your Tableau Online site or Tableau Server is licensed with the Data Management Add-on.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} contentType The type of asset that the data quality warning is being attached to. To specify the type, use:   database  table  datasource  flow   Types are not case sensitive.
 * @param {string} contentLuid The unique ID of the content type(database, table, published data source, or flow). This is the same as the content ID.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDataQualityWarningByContent(siteId, contentType, contentLuid, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/dataQualityWarnings/${contentType}/${contentLuid}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Add one or more tags to a database.
 * For more information about tags, see Tag Items(Link opens in a new window) in the Tableau User Help.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} databaseId The unique ID of the database asset.
 * @param {TagsRequest} tags tags
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function addTagsToDatabase(siteId, databaseId, tags, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}/tags`)
        .withBodyParameters(tags)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Add one or more tags to a table.
 * For more information about tags, see Tag Items(Link opens in a new window) in the Tableau User Help.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} tableId The unique ID of the column asset.
 * @param {TagsRequest} tags tags
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function addTagsToTable(siteId, tableId, tags, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables/${tableId}/tags`)
        .withBodyParameters(tags)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Add one or more tags to a column.
 * For more information about tags, see Tag Items(Link opens in a new window) in the Tableau User Help.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} columnId The unique ID of the column asset.
 * @param {TagsRequest} tags tags
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function addTagsToColumn(siteId, columnId, tags, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/columns/${columnId}/tags`)
        .withBodyParameters(tags)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Add multiple tags to items that are different content and asset types.
 * For more information about tags, see Tag Items(Link opens in a new window) in the Tableau User Help.
 * @param {string} siteId The unique ID of the site asset.
 * @param {TagBatchRequest} tagBatch tagBatch
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function batchAddTags(siteId, tagBatch, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tags:batchCreate`)
        .withBodyParameters(tagBatch)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Delete a tag from a database.
 * For more information about tags, see Tag Items(Link opens in a new window) in the Tableau User Help.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} databaseId The unique ID of the database asset.
 * @param {string} tagName The keyword text of the tag.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteTagFromDatabase(siteId, databaseId, tagName, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/databases/${databaseId}/tags/${tagName}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Delete a tag from a table.
 * For more information about tags, see Tag Items(Link opens in a new window) in the Tableau User Help.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} tableId The unique ID of the table asset.
 * @param {string} tagName The keyword text of the tag.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteTagFromTable(siteId, tableId, tagName, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tables/${tableId}/tags/${tagName}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Delete a tag from a column.
 * For more information about tags, see Tag Items(Link opens in a new window) in the Tableau User Help.
 * @param {string} siteId The unique ID of the site asset.
 * @param {string} columnId The unique ID of the column asset.
 * @param {string} tagName The keyword text of the tag.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteTagFromColumn(siteId, columnId, tagName, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/columns/${columnId}/tags/${tagName}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Delete multiple tags from items that are different content and asset types.
 * For more information about tags, see Tag Items(Link opens in a new window) in the Tableau User Help.
 * @param {string} siteId The unique ID of the site asset.
 * @param {TagBatchRequest} tagBatch tagBatch
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function batchDeleteTags(siteId, tagBatch, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`api/{apiVersion}/sites/${siteId}/tags:BatchDelete`)
        .withBodyParameters(tagBatch)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Removes a specific version of a workbook from the specified site.
 * The content is removed, and the specified revision can no longer be downloaded using Download Workbook Revision. If you call Get Workbook Revisions, the revision that's been removed is listed with the attribute IsDeleted="true".
 * Note: Calling this method permanently removes the specified workbook revision.
 * @param {string} siteId The ID of the site that contains the group.
 * @param {string} workbookId The ID of the workbook to remove the revision for.
 * @param {number} revisionNumber The revision number of the workbook to remove. To determine what versions are available, call Get Workbook Revisions.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function removeWorkbookRevision(siteId, workbookId, revisionNumber, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/revisions/${revisionNumber}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Adds permissions to the specified data source for a Tableau Server user or group. You can specify multiple sets of permissions using one call.
 * If a specified permission has already been granted or denied for a given user or group, the system ignores it.
 * If the request body includes a child workbook or <project> element, the request is invalid.
 * @param {string} siteId The ID of the site that contains the data source.
 * @param {string} datasourceId The ID of the data source to set permissions for.
 * @param {PermissionsRequest} permissions permissions
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function addDataSourcePermissions(siteId, datasourceId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/permissions`)
        .withBodyParameters(permissions)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Adds permissions to the specified project for a Tableau Server user or group. You can specify multiple sets of permissions using one call.
 * If the request body includes a child datasource or <project> element, the request is invalid.
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} projectId The ID of the project to set permissions for.
 * @param {PermissionsRequest} permissions permissions
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function addProjectPermissions(siteId, projectId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/permissions`)
        .withBodyParameters(permissions)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Adds permissions to the specified project that will be applied by default to new flows, workbooks, and data sources as they are added to the project. You make separate requests to set default permissions for flows, workbooks, and data sources. Flows require Tableau Prep Conductor to be enabled on your Tableau Server. For more information, see Enable Tableau Prep Conductor(Link opens in a new window).
 * Content owners can override default permissions for their content, but only if project permissions have not been locked. Project permissions can be locked for a new project when you call Create Project or for an existing project by calling Update Project. For more information, see Lock Content Permissions to the Project(Link opens in a new window).
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} projectId The ID of the project to set default permissions for.
 * @param {PermissionsRequest} permissions permissions
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function addDefaultPermissions(siteId, projectId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/workbooks`)
        .withBodyParameters(permissions)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Adds permissions to the specified project that will be applied by default to new flows, workbooks, and data sources as they are added to the project. You make separate requests to set default permissions for flows, workbooks, and data sources. Flows require Tableau Prep Conductor to be enabled on your Tableau Server. For more information, see Enable Tableau Prep Conductor(Link opens in a new window).
 * Content owners can override default permissions for their content, but only if project permissions have not been locked. Project permissions can be locked for a new project when you call Create Project or for an existing project by calling Update Project. For more information, see Lock Content Permissions to the Project(Link opens in a new window).
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} projectId The ID of the project to set default permissions for.
 * @param {PermissionsRequest} permissions permissions
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function addDefaultPermissionsForWorkbooks(siteId, projectId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/workbooks`)
        .withBodyParameters(permissions)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Adds permissions to the specified project that will be applied by default to new flows, workbooks, and data sources as they are added to the project. You make separate requests to set default permissions for flows, workbooks, and data sources. Flows require Tableau Prep Conductor to be enabled on your Tableau Server. For more information, see Enable Tableau Prep Conductor(Link opens in a new window).
 * Content owners can override default permissions for their content, but only if project permissions have not been locked. Project permissions can be locked for a new project when you call Create Project or for an existing project by calling Update Project. For more information, see Lock Content Permissions to the Project(Link opens in a new window).
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} projectId The ID of the project to set default permissions for.
 * @param {PermissionsRequest} permissions permissions
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function addDefaultPermissionsForDatasources(siteId, projectId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/datasources`)
        .withBodyParameters(permissions)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Adds permissions to the specified project that will be applied by default to new flows, workbooks, and data sources as they are added to the project. You make separate requests to set default permissions for flows, workbooks, and data sources. Flows require Tableau Prep Conductor to be enabled on your Tableau Server. For more information, see Enable Tableau Prep Conductor(Link opens in a new window).
 * Content owners can override default permissions for their content, but only if project permissions have not been locked. Project permissions can be locked for a new project when you call Create Project or for an existing project by calling Update Project. For more information, see Lock Content Permissions to the Project(Link opens in a new window).
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} projectId The ID of the project to set default permissions for.
 * @param {PermissionsRequest} permissions permissions
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function addDefaultPermissionsForFlows(siteId, projectId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/flows`)
        .withBodyParameters(permissions)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Adds permissions to the specified view (also known as a sheet) for a Tableau Server user or group. You can specify multiple sets of permissions using one call.
 * @param {string} siteId The ID of the site that contains the workbook view.
 * @param {string} viewId The ID of the view to set permissions for. You can obtain this ID by calling Query Views for Site.
 * @param {PermissionsRequest} permissions permissions
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function addViewPermissions(siteId, viewId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}/permissions`)
        .withBodyParameters(permissions)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Adds permissions to the specified workbook for a Tableau Server user or group. You can specify multiple sets of permissions using one call.
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} workbookId The ID of the workbook to set permissions for.
 * @param {PermissionsRequest} permissions permissions
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function addWorkbookPermissions(siteId, workbookId, permissions, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/permissions`)
        .withBodyParameters(permissions)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Adds a task to refresh or accelerate a workbook to an existing schedule. This method is not available for Tableau Online.
 * The task type must match the schedule type. For a list of schedule types, see Create a Schedule.
 * @param {string} siteId The ID of the site that contains the view.
 * @param {string} scheduleId The ID of the schedule that you are associating with the workbook.
 * @param {TaskRequest} task task
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<TaskResponse>} Promise | undefined
 */
export function addWorkbookToSchedule(siteId, scheduleId, task, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/schedules/${scheduleId}/workbooks`)
        .withBodyParameters(task)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Returns a list of permissions for a specific data source.
 * @param {string} siteId The ID of the site that contains the data source.
 * @param {string} datasourceId The ID of the data source to get permissions for.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function queryDataSourcePermissions(siteId, datasourceId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/permissions`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns information about the set of permissions allowed or denied for groups and users in a project.
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} projectId The project to get permissions for.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function queryProjectPermissions(siteId, projectId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/permissions`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns information about the default permissions for a project that is, the permissions that will be set by default for flows, workbooks, and data sources that are added to the project. You make separate requests to query the default permissions for flows, workbooks, and data sources.
 * Flows require Tableau Prep Conductor to be enabled on your Tableau Server. For more information, see Enable Tableau Prep Conductor(Link opens in a new window).
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} projectId The project to get default permissions for.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function queryDefaultPermissions(siteId, projectId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/datasources`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns information about the default permissions for a project that is, the permissions that will be set by default for flows, workbooks, and data sources that are added to the project. You make separate requests to query the default permissions for flows, workbooks, and data sources.
 * Flows require Tableau Prep Conductor to be enabled on your Tableau Server. For more information, see Enable Tableau Prep Conductor(Link opens in a new window).
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} projectId The project to get default permissions for.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function queryDefaultPermissionsForDatasources(siteId, projectId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/datasources`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns information about the default permissions for a project that is, the permissions that will be set by default for flows, workbooks, and data sources that are added to the project. You make separate requests to query the default permissions for flows, workbooks, and data sources.
 * Flows require Tableau Prep Conductor to be enabled on your Tableau Server. For more information, see Enable Tableau Prep Conductor(Link opens in a new window).
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} projectId The project to get default permissions for.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function queryDefaultPermissionsForWorkbooks(siteId, projectId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/workbooks`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns information about the default permissions for a project that is, the permissions that will be set by default for flows, workbooks, and data sources that are added to the project. You make separate requests to query the default permissions for flows, workbooks, and data sources.
 * Flows require Tableau Prep Conductor to be enabled on your Tableau Server. For more information, see Enable Tableau Prep Conductor(Link opens in a new window).
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} projectId The project to get default permissions for.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function queryDefaultPermissionsForFlows(siteId, projectId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/flows`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns a list of permissions for the specific view.
 * @param {string} siteId The ID of the site that contains the view.
 * @param {string} viewId The ID of the view to get permissions for.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<ParentResponse>} Promise | undefined
 */
export function queryViewPermissions(siteId, viewId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}/permissions`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns a list of permissions for the specific workbook.
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} workbookId The ID of the workbook to get permissions for.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<ParentResponse>} Promise | undefined
 */
export function queryWorkbookPermissions(siteId, workbookId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/permissions`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Removes the specified data source permission for the specified group or user.
 * @param {string} siteId The ID of the site that contains the data source.
 * @param {string} datasourceId The ID of the data source to remove the permission for.
 * @param {string} groupId The ID of the group to remove the permission for.
 * @param {string} userId The ID of the user to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDataSourcePermission(siteId, datasourceId, groupId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Removes the specified data source permission for the specified group or user.
 * @param {string} siteId The ID of the site that contains the data source.
 * @param {string} datasourceId The ID of the data source to remove the permission for.
 * @param {string} groupId The ID of the group to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDataSourcePermissionForGroup(siteId, datasourceId, groupId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Removes the specified data source permission for the specified group or user.
 * @param {string} siteId The ID of the site that contains the data source.
 * @param {string} datasourceId The ID of the data source to remove the permission for.
 * @param {string} userId The ID of the user to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDataSorucePermissionForUser(siteId, datasourceId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/permissions/users/${userId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Removes the specified project permission for the specified group or user.
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} projectId The ID of the project to remove the permission for.
 * @param {string} groupId The ID of the group to remove the permission for.
 * @param {string} userId The ID of the user to remove project the permission for.
 * @param {string} capabilityName The capability to remove the permission for. In Tableau Server 10.0, valid capabilities for a project are ProjectLeader, Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteProjectPermission(siteId, projectId, groupId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Removes the specified project permission for the specified group or user.
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} projectId The ID of the project to remove the permission for.
 * @param {string} groupId The ID of the group to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. In Tableau Server 10.0, valid capabilities for a project are ProjectLeader, Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteProjectPermissionForGroup(siteId, projectId, groupId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Removes the specified project permission for the specified group or user.
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} projectId The ID of the project to remove the permission for.
 * @param {string} userId The ID of the user to remove project the permission for.
 * @param {string} capabilityName The capability to remove the permission for. In Tableau Server 10.0, valid capabilities for a project are ProjectLeader, Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteProjectPermissionForUser(siteId, projectId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/permissions/users/${userId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Removes default permissions from a project. After the default permission has been removed, flows, workbooks, or data sources that are added to the project do not get the specified permission by default. You make separate requests to remove default permissions for flows, workbooks, and data sources, and you make separate requests to remove default permissions for a specific group or user.
 * Flows require Tableau Prep Conductor to be enabled on your Tableau Server. For more information, see Enable Tableau Prep Conductor(Link opens in a new window).
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} projectId The ID of the project to remove the default permission for.
 * @param {string} groupId The ID of the group to remove the default permission for.
 * @param {string} userId The ID of the user to remove default permission for.
 * @param {string} capabilityName The capability to remove the permissions for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDefaultPermission(siteId, projectId, groupId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/workbooks/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Removes default permissions from a project. After the default permission has been removed, flows, workbooks, or data sources that are added to the project do not get the specified permission by default. You make separate requests to remove default permissions for flows, workbooks, and data sources, and you make separate requests to remove default permissions for a specific group or user.
 * Flows require Tableau Prep Conductor to be enabled on your Tableau Server. For more information, see Enable Tableau Prep Conductor(Link opens in a new window).
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} projectId The ID of the project to remove the default permission for.
 * @param {string} groupId The ID of the group to remove the default permission for.
 * @param {string} capabilityName The capability to remove the permissions for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDefaultWorkbookPermissionForGroup(siteId, projectId, groupId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/workbooks/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Removes default permissions from a project. After the default permission has been removed, flows, workbooks, or data sources that are added to the project do not get the specified permission by default. You make separate requests to remove default permissions for flows, workbooks, and data sources, and you make separate requests to remove default permissions for a specific group or user.
 * Flows require Tableau Prep Conductor to be enabled on your Tableau Server. For more information, see Enable Tableau Prep Conductor(Link opens in a new window).
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} projectId The ID of the project to remove the default permission for.
 * @param {string} userId The ID of the user to remove default permission for.
 * @param {string} capabilityName The capability to remove the permissions for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDefaultWorkbookPermissionForUser(siteId, projectId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/workbooks/users/${userId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Removes default permissions from a project. After the default permission has been removed, flows, workbooks, or data sources that are added to the project do not get the specified permission by default. You make separate requests to remove default permissions for flows, workbooks, and data sources, and you make separate requests to remove default permissions for a specific group or user.
 * Flows require Tableau Prep Conductor to be enabled on your Tableau Server. For more information, see Enable Tableau Prep Conductor(Link opens in a new window).
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} projectId The ID of the project to remove the default permission for.
 * @param {string} groupId The ID of the group to remove the default permission for.
 * @param {string} capabilityName The capability to remove the permissions for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDefaultDatasourcePermissionsForGroup(siteId, projectId, groupId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/datasources/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Removes default permissions from a project. After the default permission has been removed, flows, workbooks, or data sources that are added to the project do not get the specified permission by default. You make separate requests to remove default permissions for flows, workbooks, and data sources, and you make separate requests to remove default permissions for a specific group or user.
 * Flows require Tableau Prep Conductor to be enabled on your Tableau Server. For more information, see Enable Tableau Prep Conductor(Link opens in a new window).
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} projectId The ID of the project to remove the default permission for.
 * @param {string} groupId The ID of the group to remove the default permission for.
 * @param {string} capabilityName The capability to remove the permissions for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDefaultFlowPermissionForGroup(siteId, projectId, groupId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/flows/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Removes default permissions from a project. After the default permission has been removed, flows, workbooks, or data sources that are added to the project do not get the specified permission by default. You make separate requests to remove default permissions for flows, workbooks, and data sources, and you make separate requests to remove default permissions for a specific group or user.
 * Flows require Tableau Prep Conductor to be enabled on your Tableau Server. For more information, see Enable Tableau Prep Conductor(Link opens in a new window).
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} projectId The ID of the project to remove the default permission for.
 * @param {string} userId The ID of the user to remove default permission for.
 * @param {string} capabilityName The capability to remove the permissions for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDefaultFlowPermissionForUser(siteId, projectId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/projects/${projectId}/default-permissions/flows/users/${userId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Deletes permission to the specified view (also known as a sheet) for a Tableau Server user or group.
 * @param {string} siteId The ID of the site that contains the view.
 * @param {string} viewId The ID of the view to delete permissions for. You can obtain this ID by calling Query Views for Site.
 * @param {string} groupId The ID of the group to remove the permission for.
 * @param {string} userId The ID of the user to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. The valid capabilities for a view are AddComment, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteViewPermission(siteId, viewId, groupId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Deletes permission to the specified view (also known as a sheet) for a Tableau Server user or group.
 * @param {string} siteId The ID of the site that contains the view.
 * @param {string} viewId The ID of the view to delete permissions for. You can obtain this ID by calling Query Views for Site.
 * @param {string} groupId The ID of the group to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. The valid capabilities for a view are AddComment, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteViewPermissionForGroup(siteId, viewId, groupId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Deletes permission to the specified view (also known as a sheet) for a Tableau Server user or group.
 * @param {string} siteId The ID of the site that contains the view.
 * @param {string} viewId The ID of the view to delete permissions for. You can obtain this ID by calling Query Views for Site.
 * @param {string} userId The ID of the user to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. The valid capabilities for a view are AddComment, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteViewPermissionForUser(siteId, viewId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/views/${viewId}/permissions/users/${userId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Deletes the specified permission from the specified workbook for a group or user.
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} workbookId The ID of the workbook to remove the permission for.
 * @param {string} groupId The ID of the group to remove the permission for.
 * @param {string} userId The ID of the user to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write.  For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteWorkbookPermission(siteId, workbookId, groupId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Deletes the specified permission from the specified workbook for a group or user.
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} workbookId The ID of the workbook to remove the permission for.
 * @param {string} groupId The ID of the group to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write.  For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteWorkbookPermissionForGroup(siteId, workbookId, groupId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Deletes the specified permission from the specified workbook for a group or user.
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} workbookId The ID of the workbook to remove the permission for.
 * @param {string} userId The ID of the user to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write.  For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteWorkbookPermissionForUser(siteId, workbookId, userId, capabilityName, capabilityMode, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/permissions/users/${userId}/${capabilityName}/${capabilityMode}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Adds a task to refresh a data source to an existing schedule. This method is not available for Tableau Online.
 * @param {string} siteId The ID of the site that contains the view.
 * @param {string} scheduleId The ID of the schedule that you are associating with the data source.
 * @param {TaskRequest} task task
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<TaskResponse>} Promise | undefined
 */
export function addDataSourceToSchedule(siteId, scheduleId, task, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/schedules/${scheduleId}/datasources`)
        .withBodyParameters(task)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Cancels a job specified by job ID. To get a list of job IDs for jobs that are currently queued or in-progress, use the Query Jobs method.
 * The following jobs can be canceled using the Cancel Job method:
 * Full extract refresh Incremental extract refresh Subscription Flow Run Data Acceleration Bridge full extract refresh Bridge incremental extract refresh Queue upgrade Thumbnail (Job that puts the upgrade thumbnail job on the queue) Upgrade Thumbnail
 * @param {string} siteId The ID of the site where the job is running.
 * @param {string} jobId The ID of the job to cancel.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function cancelJob(siteId, jobId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/jobs/${jobId}`)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Returns status information about an asynchronous process that is tracked using a job. This method can be used to query jobs that are used to do the following:
 * Import users from Active Directory (the result of a call to Create Group). Synchronize an existing Tableau Server group with Active Directory (the result of a call to Update Group). Run extract refresh tasks (the result of a call to Run Extract Refresh Task). Publish a workbook asynchronously (the result of a call to Publish Workbook). Run workbook or view subscriptions (the result of a call to Create Subscrtiption or Update Subscription)  Run a flow task (the result of a call to Run Flow Task)
 * @param {string} siteId The ID of the site where the job is running.
 * @param {string} jobId The ID of the job to get status information for.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<JobResponse>} Promise | undefined
 */
export function queryJob(siteId, jobId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/jobs/${jobId}`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns a list of active jobs on the specified site. To get details on a specific job, pass a job ID returned by this method to the Query Job method. To cancel an active job, pass a job ID returned by this method to the Cancel Job method.
 * Calls to this method can be filtered, as shown in the URI examples shown below. To learn more about filtering, see Filtering and Sorting in the REST API.
 * @param {string} siteId The ID of the site where the job is running.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<BackgroundJobsResponse>} Promise | undefined
 */
export function queryJobs(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/jobs`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns information about the specified extract refresh task.
 * This method shows you information about the scheduled task for the data source extract or a published workbook that connects to the data extract.
 * @param {string} siteId The ID of the site that the user is a member of.
 * @param {string} taskId The ID of the extract refresh that you want information about.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<TaskResponse>} Promise | undefined
 */
export function getExtractRefreshTask(siteId, taskId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/tasks/extractRefreshes/${taskId}`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns a list of extract refresh tasks for the site.
 * This method shows you information about the scheduled tasks on the specified site for data source extracts or a published workbooks that connect to data extracts.
 * @param {string} siteId The ID of the site that the user is a member of.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<TasksResponse>} Promise | undefined
 */
export function getExtractRefreshTasks(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/tasks/extractRefreshes`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Creates a new schedule on Tableau Server.
 * Schedules are not specific to sites. For more information, see Creating a Flow Schedule(Link opens in a new window), Extracts and Refresh Schedules(Link opens in a new window) and Create or Modify a Schedule(Link opens in a new window) in the Tableau Server documentation. Flows require Tableau Prep Conductor to be enabled on your Tableau Server. For more information, see Enable Tableau Prep Conductor(Link opens in a new window).
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * @param {ScheduleRequest} schedule schedule
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<ScheduleResponse>} Promise | undefined
 */
export function createSchedule(schedule, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/schedules`)
        .withBodyParameters(schedule)
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Returns a list of the extract refresh tasks for a specified schedule on the specified site.
 * To get the ID of a schedule, call the Query Schedules method. Note that the Query Schedules method is global to the server; schedules are not specific to a site. Therefore, the URI for the Query Schedules method does not include /sites/ or a site ID. However, individual scheduled tasks are specific to a site, and the URI for Query Extract Refresh Tasks must include the site information.
 * For more information about refresh tasks, see Manage Refresh Tasks(Link opens in a new window).
 * @param {string} siteId The ID of the site that contains the refresh tasks.
 * @param {string} scheduleId The ID of the schedule to get extract information for.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number=} [queryOptions.pageSize] (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
 * @param {number=} [queryOptions.pageNumber] (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<ExtractsResponse>} Promise | undefined
 */
export function queryExtractRefreshTasks(siteId, scheduleId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/schedules/${scheduleId}/extracts`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns a list of flows, extract and subscription schedules. For each schedule, the API returns the name, frequency, priority, and other information.
 * For more information about schedules, see Create or Modify a Schedule(Link opens in a new window).
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number=} [queryOptions.pageSize] (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
 * @param {number=} [queryOptions.pageNumber] (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<SchedulesResponse>} Promise | undefined
 */
export function querySchedules(queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/schedules`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Runs the specified extract refresh task.
 * Note: This method will fail and result in an error if your Server Administrator has disabled the RunNow setting for the site. For more information, see Tableau Server Settings(Link opens in a new window).
 * This method runs the scheduled task for the data source extract or the published workbook that connects to the data extract. You must first schedule the task for the extract refresh. You can do this using the Create Schedule method to create the task. To get information about the extract refresh task, use the Get Extract Refresh Tasks method, which returns the extractRefresh ID that you use as the task-id.
 * The method adds the refresh task to the backgrounder queue. Depending upon the backgrounder load, the task might not run immediately. The method returns information about the backgrounder job responsible for running the extract refresh task, including a job id that can be used with the Query Job method to query the status of the extract refresh.
 * An extract refresh task can be initiated by a REST API call, a tabcmd command, or a job calling the task on a schedule. A REST request to start a refresh task will fail if the task has been put in the task queue in any of these ways, or is already in progress.
 * @param {string} siteId The ID of the site that the user is a member of.
 * @param {string} taskId The ID of the extract refresh task that you want to run.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<JobResponse>} Promise | undefined
 */
export function runExtractRefreshTask(siteId, taskId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/tasks/extractRefreshes/${taskId}/runNow`)
        .withBodyParameters()
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Modifies settings for the specified schedule, including the name, priority, and frequency details.
 * @param {string} scheduleId The ID of the schedule to update. To determine what schedules are available, call Query Schedules.
 * @param {ScheduleRequest} schedule schedule
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<ScheduleResponse>} Promise | undefined
 */
export function updateSchedule(scheduleId, schedule, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/schedules/${scheduleId}`)
        .withBodyParameters(schedule)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Deletes the specified schedule.
 * @param {string} scheduleId The ID of the schedule to delete. To determine what schedules are available, call Query Schedules.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteSchedule(scheduleId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/schedules/${scheduleId}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Deletes a data acceleration task.
 * @param {string} siteId The ID of the site that contains the task.
 * @param {string} dataAccelerationId The ID of the task to remove.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDataAccelerationTask(siteId, dataAccelerationId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/tasks/dataAcceleration/${dataAccelerationId}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Returns a list of data acceleration tasks for the site.
 * @param {string} siteId The ID of the site that contains the task.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<TasksResponse>} Promise | undefined
 */
export function getDataAccelerationTasks(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/tasks/dataAcceleration`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Creates a new, unsuspended subscription to a view or workbook for a specific user. When a user is subscribed to the content, Tableau Server sends the content to the user in email on the schedule that's defined in Tableau Server and specified in this call.
 * For more information, see Subscribe to Views(Link opens in a new window) in the Tableau Server documentation.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * @param {string} siteId The ID of the site to create the subscription in.
 * @param {SubscriptionRequest} subscription subscription
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<SubscriptionResponse>} Promise | undefined
 */
export function createSubscription(siteId, subscription, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/subscriptions`)
        .withBodyParameters(subscription)
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Returns information about the specified subscription.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * @param {string} siteId The ID of the site that contains the subscriptions.
 * @param {string} subscriptionId The ID of the subscription to get information for.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<SubscriptionResponse>} Promise | undefined
 */
export function querySubscription(siteId, subscriptionId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/subscriptions/${subscriptionId}`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns a list of all the subscriptions on the specified site.
 * Note: After you create a resource, the server updates its search index. If you make a query immediately to see a new resource, the query results might not be up to date.
 * @param {string} siteId The ID of the site that contains the subscriptions.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number=} [queryOptions.pageSize] (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
 * @param {number=} [queryOptions.pageNumber] (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<SubscriptionsResponse>} Promise | undefined
 */
export function querySubscriptions(siteId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/subscriptions`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Modifies an existing subscription, allowing you to change the subject, schedule, and suspension state for the subscription.
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} subscriptionId The ID of the subscription to update.
 * @param {SubscriptionRequest} subscription subscription
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<SubscriptionResponse>} Promise | undefined
 */
export function updateSubscription(siteId, subscriptionId, subscription, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/subscriptions/${subscriptionId}`)
        .withBodyParameters(subscription)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Deletes the specified subscription.
 * @param {string} siteId The ID of the site that contains the subscription.
 * @param {string} subscriptionId The ID of the subscription to delete. To determine what subscriptions are available, call Query Subscriptions.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteSubscription(siteId, subscriptionId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/subscriptions/${subscriptionId}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Adds the specified data source to the user's favorites.
 * If the user already has the data source listed as a favorite with the same label, the operation has no effect. If the label differs, the original favorite is overwritten.
 * @param {string} siteId The ID of the site that contains the data source.
 * @param {string} userId The ID of the user to add the favorite for.
 * @param {FavoriteRequest} favorite favorite
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<FavoritesResponse>} Promise | undefined
 */
export function addDataSourceToFavorites(siteId, userId, favorite, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/favorites/${userId}`)
        .withBodyParameters(favorite)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Adds the specified project to a user's favorites.
 * If the user already has the project listed as a favorite with the same label, the operation has no effect. If the label differs, the original favorite is overwritten.
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} userId The ID of the user to add the favorite for.
 * @param {FavoriteRequest} favorite favorite
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<FavoritesResponse>} Promise | undefined
 */
export function addProjectToFavorites(siteId, userId, favorite, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/favorites/${userId}`)
        .withBodyParameters(favorite)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Adds the specified view to a user's favorites.
 * If the user already has the view listed as a favorite with the same label, the operation has no effect. If the label differs, the original favorite is overwritten.
 * @param {string} siteId The ID of the site that contains the view.
 * @param {string} userId The ID of the user to add the favorite for.
 * @param {FavoriteRequest} favorite favorite
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<FavoritesResponse>} Promise | undefined
 */
export function addViewToFavorites(siteId, userId, favorite, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/favorites/${userId}`)
        .withBodyParameters(favorite)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Adds the specified workbook to a user's favorites.
 * If the user already has the workbook listed as a favorite with the same label, the operation has no effect. If the label differs, the original favorite is overwritten.
 * @param {string} siteId The ID of the site that contains the workbook.
 * @param {string} userId The ID of the user to add the favorite for.
 * @param {FavoriteRequest} favorite favorite
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<FavoritesResponse>} Promise | undefined
 */
export function addWorkbookToFavorites(siteId, userId, favorite, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/favorites/${userId}`)
        .withBodyParameters(favorite)
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Deletes the specified data source from the user's favorites. If the specified data source is not a favorite, the operation has no effect.
 * @param {string} siteId The ID of the site that contains the data source.
 * @param {string} userId The ID of the user to remove the favorite from.
 * @param {string} datasourceId The ID of the data source to remove from the user's favorites.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDataSourceFromFavorites(siteId, userId, datasourceId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/favorites/${userId}/datasources/${datasourceId}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Deletes the specified project from the user's favorites. If the specified project is not a favorite, the operation has no effect.
 * @param {string} siteId The ID of the site that contains the project.
 * @param {string} userId The ID of the user to remove the favorite from.
 * @param {string} projectId The ID of the project to remove from the user's favorites.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteProjectFromFavorites(siteId, userId, projectId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/favorites/${userId}/projects/${projectId}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Deletes the specified view from user's favorites. If the specified view is not a favorite, the operation has no effect.
 * @param {string} siteId The ID of the site that contains the view.
 * @param {string} userId The ID of the user to remove the favorite from.
 * @param {string} viewId The ID of the view to remove from the user's favorites.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteViewFromFavorites(siteId, userId, viewId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/favorites/${userId}/views/${viewId}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Deletes a workbook from a user's favorites. If the specified workbook is not a favorite of the specified user, this call has no effect.
 * @param {string} siteId The ID of the site that contains the user.
 * @param {string} userId The ID of the user to remove the favorite from.
 * @param {string} workbookId The ID of the workbook to remove from the user's favorites.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteWorkbookFromFavorites(siteId, userId, workbookId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/favorites/${userId}/workbooks/${workbookId}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Returns a list of favorite projects, data sources, views and workbooks for a user.
 * @param {string} siteId The ID of the site that the user is a member of.
 * @param {string} userId The ID of the user for which you want to get a list favorites.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function getFavoritesForUser(siteId, userId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/favorites/${userId}`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Initiates the upload process for a file. After the upload has been initiated, you call Append to File Upload to send individual blocks of the file to the server. When the complete file has been sent to the server, you call Publish Data Source, Publish Flow, or Publish Workbook to commit the upload.
 * Initiate File Upload returns an upload session ID that you pass to Append to File Upload or one of the publishing methods in order to identify the upload session.
 * The file size that is returned in the response is initialized to zero (0) megabytes, because no data has yet been loaded. Subsequent calls to Append to File Upload or the publishing APIs update this value.
 * For more information, see Publishing Resources.
 * @param {string} siteId The ID of the site to upload the file to.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<FileUploadResponse>} Promise | undefined
 */
export function initiateFileUpload(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/fileUploads`)
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Uploads a block of data and appends it to the data that is already uploaded. This method is called after an upload has been initiated using Initiate File Upload.
 * You call Append to File Upload as many times as needed in order to upload the complete contents of a file. When the final block of data has been uploaded, you call Publish Data Source, Publish Flow, or Publish Workbook to commit the file.
 * For more information, see Publishing Resources.
 * @param {string} siteId The ID of the site to upload the file to.
 * @param {string} uploadSessionId The ID of the upload session. You get this value when you start an upload session using Initiate File Upload.
 * @param {Object} file File Contents
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<FileUploadResponse>} Promise | undefined
 */
export function appendToFileUpload(siteId, uploadSessionId, file, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/fileUploads/${uploadSessionId}`)
        .withHeaders({ "Content-Type": "multipart/mixed" })
        .withBodyParameters()
        .withFileParameters({ name: "tableau_file", file: file })
        .build()
        .execute(options?.http?.put ?? methods.put);
}

/**
 * Returns the version of Tableau Server and the supported version of the REST API.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<ServerInfoResponse>} Promise | undefined
 */
export function serverInfo(options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/serverinfo`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Returns details of the current session of Tableau Server.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function getCurrentServerSessionDetails(options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sessions/current`)
        .build()
        .execute(options?.http?.get ?? methods.get);
}

/**
 * Create an extract for a data source in a site. Optionally, encrypt the extract if the site and workbooks using it are configured to allow it.
 * @param {string} siteId The LUID of the site.
 * @param {string} datasourceId The LUID of the datasource.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean=} [queryOptions.encrypt] If true, then Tableau will attempt to encrypt the created extracts. If false, or no encrypt parameter is appended to the URI, then the extract won't be encrypted, unless encryption is enforced by site or workbook configuration. An error will be returned when encrypt equals true and encryption is disabled in the site or workbook.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function createAnExtractForADataSource(siteId, datasourceId, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/createExtract`)
        .withQueryParameters(queryOptions)
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Delete the extract of a data source in a site.
 * @param {string} siteId The LUID of the site.
 * @param {string} datasourceId The LUID of the datasource whose extract is to be deleted.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteAnExtractFromADataSource(siteId, datasourceId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/datasources/${datasourceId}/deleteExtract`)
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Create extracts for all embedded data sources of a workbook. Optionally, encrypt the extracts if the site and workbook using them are configured to allow it.
 * When you create an extract for a data source in a workbook, the extract is available only to the workbook and may have configuration specific to the workbook, such as hiding of unused fields.  You can create workbook extracts for both embedded and published data sources used by the workbook. When you create a workbook data source for a published data source, then refreshing the workbook extract will retrieve any changes to data from the published datasource, or from the published data source's extract if it is using one.
 * Note: This method will fail and result in an error if your Server Administrator has disabled the RunNow setting for the site. For more information, see Tableau Server Settings(Link opens in a new window).
 * @param {string} siteId The LUID of the site.
 * @param {string} workbookId The LUID of the workbook.
 * @param {DatasourcesRequest} datasources datasources
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean=} [queryOptions.encrypt] If true, then Tableau will attempt to encrypt the created extracts. If false, or no encrypt parameter is appended to the URI, then the extract won't be encrypted, unless encryption is enforced by site or workbook configuration. An error will be returned when encrypt equals true and encryption is disabled in the site or workbook.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function createExtractsForEmbeddedDataSourcesInAWorkbook(siteId, workbookId, datasources, queryOptions={}, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbooks/${workbookId}/createExtract`)
        .withQueryParameters(queryOptions)
        .withBodyParameters(datasources)
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Delete all extracts of embedded data sources in a workbook.
 * Note: Depending on the number and size of extracts, this operation may consume significant server resources. Consider running this command outside of normal business hours.
 * @param {string} siteId The LUID of the site.
 * @param {string} workbookId <parameter documentation missing>
 * @param {DatasourcesRequest} datasources datasources
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteExtractsForEmbeddedDataSourcesInAWorkbook(siteId, workbookId, datasources, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/workbookss/${workbookId}/deleteExtract`)
        .withBodyParameters(datasources)
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Deletes an extract refresh task.
 * @param {string} siteId The ID of the site that contains the extract refresh task.
 * @param {string} taskId The ID of the extract refresh task to remove.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteExtractRefreshTask(siteId, taskId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/tasks/extractRefreshes/${taskId}`)
        .build()
        .execute(options?.http?.del ?? methods.del);
}

/**
 * Extract encryption at rest is a data security feature that allows you to encrypt .hyper extracts while they are stored on Tableau Server. For more information, see Extract Encryption at Rest(Link opens in a new window).
 * Encrypts all extracts on a site.
 * Note: Depending on the number and size of extracts, this operation may consume significant server resources. Consider running this command outside of normal business hours.
 * @param {string} siteId The ID of the site.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function encryptExtractsInASite(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/encrypt-extracts`)
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Extract encryption at rest is a data security feature that allows you to encrypt .hyper extracts while they are stored on Tableau Server. For more information, see Extract Encryption at Rest(Link opens in a new window).
 * Decrypts all extracts on a site.
 * Note: Depending on the number and size of extracts, this operation may consume significant server resources. Consider running this command outside of normal business hours.
 * @param {string} siteId The ID of the site.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function decryptExtractsInASite(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/decrypt-extracts`)
        .build()
        .execute(options?.http?.post ?? methods.post);
}

/**
 * Extract encryption at rest is a data security feature that allows you to encrypt .hyper extracts while they are stored on Tableau Server. For more information, see Extract Encryption at Rest(Link opens in a new window).
 * Reencrypt all extracts on a site with new encryption keys. If no site is specified, extracts on the default site will be reencrypted.
 * Note: Depending on the number and size of extracts, this operation may consume significant server resources. Consider running this command outside of normal business hours.
 * @param {string} siteId The ID of the site.
 * @param {ExecOptions=} [options] an object containing the execution options for this request
 * @returns {Promise<any>} Promise | undefined
 */
export function reencryptExtractsInASite(siteId, options=defaultOptions) { 
    return AuthenticatedRequest.builder(getBaseURL(options), getToken(options))
        .withPath(`/api/{apiVersion}/sites/${siteId}/reencrypt-extracts`)
        .build()
        .execute(options?.http?.post ?? methods.post);
}