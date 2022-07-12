/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { SiteRequest } from "tabbycat/types";
import { SiteResponse } from "tabbycat/types";
import { DataAccelerationReportResponse } from "tabbycat/types";
import { RecentsResponse } from "tabbycat/types";
import { SitesResponse } from "tabbycat/types";
import { ViewsResponse } from "tabbycat/types";

/**
 * Creates a site on Tableau Server. To make changes to an existing site, call Update Site.
 * This method is not available for Tableau Online.
 * @param {SiteRequest} site site
 * @returns {Promise<SiteResponse>} Promise | undefined
 */
export function createSite(site: SiteRequest, client?: ClientLite) : Promise<SiteResponse>;

/**
 * Deletes the specified site.
 * @param {string} contentUrl The URL of the site to delete. If you specify a content
 * 		URL, you must also include the parameter key=contentUrl.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteSiteByContentUrl(contentUrl: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes the specified site.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteSiteByID(client?: ClientLite) : Promise<any>;

/**
 * Deletes the specified site.
 * @param {string} siteName The name of the site to delete. If you specify a site name,
 * 		you must also include the parameter key=name.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteSiteByName(siteName: string, client?: ClientLite) : Promise<any>;

/**
 * Returns a report about data acceleration for the site. It lets you compare page load
 * times for before and after data acceleration is enabled.
 * @returns {Promise<DataAccelerationReportResponse>} Promise | undefined
 */
export function getDataAccelerationReport(client?: ClientLite) : Promise<DataAccelerationReportResponse>;

/**
 * Returns the current embedding settings for a specific site. Embedding settings can be
 * used to restrict embedding Tableau views to only certain domains. This setting impacts all
 * embedding scenarios that are not set up to use connected apps for authentication,
 * including, Tableau Javascript API v2, Embedding API v3, and the embed code from the share
 * dialog. For more information, see Tableau Site Settings for Embedding.
 * @returns {Promise<SiteResponse>} Promise | undefined
 */
export function getEmbeddingSettingsForSite(client?: ClientLite) : Promise<SiteResponse>;

/**
 * Gets the details of the views and workbooks on a site that have been most recently
 * created, updated, or accessed by the signed in user. The 24 most recently viewed items are
 * returned, though it may take some minutes after being viewed for an item to appear in the
 * results.
 * @returns {Promise<RecentsResponse>} Promise | undefined
 */
export function getRecentlyViewed(client?: ClientLite) : Promise<RecentsResponse>;

/**
 * Returns information about the specified site, with the option to return information about
 * the storage space and user count for the site.
 * @param {string} contentUrl The URL of the site to get information for. If you specify
 * 		a content URL, you must also include the parameter key=contentUrl.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean} queryOptions.includeUsage The boolean flag to include site usage
 * 		metrics in the response body. If true, then the site element of the response will contain
 * 		a usage node with the attributes numUsers (number of users) and storage (storage in
 * 		megabytes). To set the flag to include usage in the response, append includeUsage=true as
 * 		a querystring element any valid query site URI.
 * @returns {Promise<SiteResponse>} Promise | undefined
 */
export function querySiteByContentUrl(contentUrl: string, queryOptions?: { includeUsage: boolean }, client?: ClientLite) : Promise<SiteResponse>;

/**
 * Returns information about the specified site, with the option to return information about
 * the storage space and user count for the site.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean} queryOptions.includeUsage The boolean flag to include site usage
 * 		metrics in the response body. If true, then the site element of the response will contain
 * 		a usage node with the attributes numUsers (number of users) and storage (storage in
 * 		megabytes). To set the flag to include usage in the response, append includeUsage=true as
 * 		a querystring element any valid query site URI.
 * @returns {Promise<SiteResponse>} Promise | undefined
 */
export function querySiteByID(queryOptions?: { includeUsage: boolean }, client?: ClientLite) : Promise<SiteResponse>;

/**
 * Returns information about the specified site, with the option to return information about
 * the storage space and user count for the site.
 * @param {string} siteName The name of the site to get information for. If you specify a
 * 		site name, you must also include the parameter key=name.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean} queryOptions.includeUsage The boolean flag to include site usage
 * 		metrics in the response body. If true, then the site element of the response will contain
 * 		a usage node with the attributes numUsers (number of users) and storage (storage in
 * 		megabytes). To set the flag to include usage in the response, append includeUsage=true as
 * 		a querystring element any valid query site URI.
 * @returns {Promise<SiteResponse>} Promise | undefined
 */
export function querySiteByName(siteName: string, queryOptions?: { includeUsage: boolean }, client?: ClientLite) : Promise<SiteResponse>;

/**
 * Returns a list of the sites on the server that the caller of this method has access to.
 * This method is not available for Tableau Online.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one
 * 		response. The minimum is 1. The maximum is 1000. The default is 100. For more information,
 * 		see Paginating Results.
 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default
 * 		is 1. For more information, see Paginating Results.
 * @returns {Promise<SitesResponse>} Promise | undefined
 */
export function querySites(queryOptions?: { pageSize: number, pageNumber: number }, client?: ClientLite) : Promise<SitesResponse>;

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
 * @returns {Promise<ViewsResponse>} Promise | undefined
 */
export function queryViewsForSite(queryOptions?: { includeUsageStatistics: boolean, pageSize: number, pageNumber: number, fields: string, filter: string, sort: string }, client?: ClientLite) : Promise<ViewsResponse>;

/**
 * Updates the embedding settings for a site. Embedding settings can be used to restrict
 * embedding Tableau views to only certain domains. This setting impacts all embedding
 * scenarios that are not set up to use connected apps for authentication, including, Tableau
 * Javascript API v2, Embedding API v3, and the embed code from the share dialog. For more
 * information, see Tableau Site Settings for Embedding.
 * @param {SiteRequest} site site
 * @returns {Promise<SiteResponse>} Promise | undefined
 */
export function updateEmbeddingSettingsForSite(site: SiteRequest, client?: ClientLite) : Promise<SiteResponse>;

/**
 * Modifies settings for the specified site, including the content URL, administration mode,
 * user quota, state (active or suspended), storage quota, whether flows are enabled, whether
 * subscriptions are enabled, and whether revisions are enabled. If you're working with
 * Tableau Online, this method can also be used to upload a new logo image for the site.
 * @param {SiteRequest} site site
 * @returns {Promise<SiteResponse>} Promise | undefined
 */
export function updateSite(site: SiteRequest, client?: ClientLite) : Promise<SiteResponse>;
