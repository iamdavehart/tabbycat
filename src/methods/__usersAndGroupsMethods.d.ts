/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { Paginated } from "tabbycat/types";
import { UserType } from "tabbycat/types";
import { GroupType } from "tabbycat/types";
import { file } from "tabbycat/types";
import { GroupListType } from "tabbycat/types";
import { UserListType } from "tabbycat/types";
import { JobType } from "tabbycat/types";

/**
 * Adds a user to the specified group.
 * @param {string} groupId The ID of the group to add the user to.
 * @param {UserType} user user
 * @returns {Promise<UserType>} Promise | undefined
 */
export function addUserToGroup(groupId: string, user: UserType, client?: ClientLite) : Promise<UserType>;

/**
 * Adds a user to Tableau Server and assigns the user to the specified site.
 * @param {UserType} user user
 * @returns {Promise<UserType>} Promise | undefined
 */
export function addUserToSite(user: UserType, client?: ClientLite) : Promise<UserType>;

/**
 * Creates a group.
 * @param {GroupType} group group
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean} queryOptions.asJob A Boolean value that is used if you are importing
 * 		from Active Directory. If you set this to false (the default), the import process runs as
 * 		a synchronous process. If the Active Directory group contains many users, the process
 * 		might time out before it finishes. If you set this to true, the process runs
 * 		asynchronously. In that case, Tableau Server starts a job to perform the import and
 * 		returns the job ID in the Location header. You can check the status of the import job by
 * 		calling Query Job. Note: This parameter has no effect if the server is configured to use
 * 		local authentication.
 * @returns {Promise<GroupType>} Promise | undefined
 */
export function createGroup(group: GroupType, queryOptions?: { asJob: boolean }, client?: ClientLite) : Promise<GroupType>;

/**
 * Deletes the group on a specific site. Deleting a group does not delete the users in
 * group, but users are no longer members of the group. Any permissions that were previously
 * assigned to the group no longer apply.
 * @param {string} groupId The ID of the group to delete.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteGroup(groupId: string, client?: ClientLite) : Promise<any>;

/**
 * Creates a job to remove a list of users, specified in a .csv file, from a site.
 * @param {Object} file File Contents
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteUsersFromSiteWithCsv(file: Object, client?: ClientLite) : Promise<any>;

/**
 * Gets a list of groups of which the specified user is a member.
 * @param {string} userId The ID of the user whose group memberships are listed.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one
 * 		response. The minimum is 1. The maximum is 1000. The default is 100. For more information,
 * 		see Paginating Results.
 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default
 * 		is 1. For more information, see Paginating Results.
 * @returns {Promise<Paginated<GroupListType>>} Promise | undefined
 */
export function getGroupsForAUser(userId: string, queryOptions?: { pageSize: number, pageNumber: number }, client?: ClientLite) : Promise<Paginated<GroupListType>>;

/**
 * Gets a list of users in the specified group.
 * @param {string} groupId The ID of the group to get the users for.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one
 * 		response. The minimum is 1. The maximum is 1000. The default is 100. For more information,
 * 		see Paginating Results.
 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default
 * 		is 1. For more information, see Paginating Results.
 * @returns {Promise<Paginated<UserListType>>} Promise | undefined
 */
export function getUsersInGroup(groupId: string, queryOptions?: { pageSize: number, pageNumber: number }, client?: ClientLite) : Promise<Paginated<UserListType>>;

/**
 * Returns the users associated with the specified site.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.filter (Optional) An expression that lets you specify a
 * 		subset of users to return. You can filter on predefined fields such as name and lastLogin.
 * 		You can include multiple filter expressions. For more information, see Filtering and
 * 		Sorting.
 * @param {string} queryOptions.sort (Optional) An expression that lets you specify the
 * 		order in which user information is returned. If you do not specify a sort expression, the
 * 		sort order of the information that's returned is undefined. For more information, see
 * 		Filtering and Sorting.
 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one
 * 		response. The minimum is 1. The maximum is 1000. The default is 100. For more information,
 * 		see Paginating Results.
 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default
 * 		is 1. For more information, see Paginating Results.
 * @param {string} queryOptions.fields (Optional) An expression that lets you specify the
 * 		set of available fields to return. You can qualify the return values based upon predefined
 * 		keywords such as _all_ or _default_, and you can specify individual fields for the views
 * 		or other supported resources. You can include multiple field expressions in a request. For
 * 		more information, see Using Fields in the REST API.
 * @returns {Promise<Paginated<UserListType>>} Promise | undefined
 */
export function getUsersOnSite(queryOptions?: { filter: string, sort: string, pageSize: number, pageNumber: number, fields: string }, client?: ClientLite) : Promise<Paginated<UserListType>>;

/**
 * Creates a job to import the users listed in a specified .csv file to a site, and assign
 * their roles and authorization settings.
 * @param {Object} file File Contents
 * @returns {Promise<JobType>} Promise | undefined
 */
export function importUsersToSiteFromCsv(file: Object, client?: ClientLite) : Promise<JobType>;

/**
 * Returns a list of groups on the specified site, with optional parameters for specifying
 * the paging of large results.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one
 * 		response. The minimum is 1. The maximum is 1000. The default is 100. For more information,
 * 		see Paginating Results.
 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default
 * 		is 1. For more information, see Paginating Results.
 * @param {string} queryOptions.filter (Optional) An expression that lets you specify a
 * 		subset of groups to return. You can filter on predefined fields such as name. You can
 * 		include multiple filter expressions. For more information, see Filtering and Sorting.
 * @param {string} queryOptions.sort (Optional) An expression that lets you specify the
 * 		order in which user information is returned. If you do not specify a sort expression, the
 * 		sort order of the information that's returned is undefined. For more information, see
 * 		Filtering and Sorting.
 * @returns {Promise<Paginated<GroupListType>>} Promise | undefined
 */
export function queryGroups(queryOptions?: { pageSize: number, pageNumber: number, filter: string, sort: string }, client?: ClientLite) : Promise<Paginated<GroupListType>>;

/**
 * Returns information about the specified user.
 * @param {string} userId The ID of the user to get information for.
 * @returns {Promise<UserType>} Promise | undefined
 */
export function queryUserOnSite(userId: string, client?: ClientLite) : Promise<UserType>;

/**
 * Removes a user from the specified group.
 * @param {string} groupId The ID of the group to remove the user from.
 * @param {string} userId The ID of the user to remove.
 * @returns {Promise<any>} Promise | undefined
 */
export function removeUserFromGroup(groupId: string, userId: string, client?: ClientLite) : Promise<any>;

/**
 * Removes a user from the specified site. The user will be deleted if they do not own any
 * other assets other than subscriptions. If a user still owns content (assets) on Tableau
 * Server, the user cannot be deleted unless the ownership is reassigned first.
 * @param {string} userId The ID of the user to remove.
 * @returns {Promise<any>} Promise | undefined
 */
export function removeUserFromSite(userId: string, client?: ClientLite) : Promise<any>;

/**
 * Updates a group.
 * @param {string} groupId The ID of the group to update.
 * @param {GroupType} group group
 * @returns {Promise<GroupType>} Promise | undefined
 */
export function updateGroup(groupId: string, group: GroupType, client?: ClientLite) : Promise<GroupType>;

/**
 * Modifies information about the specified user.
 * @param {string} userId The ID of the user to update.
 * @param {UserType} user user
 * @returns {Promise<UserType>} Promise | undefined
 */
export function updateUser(userId: string, user: UserType, client?: ClientLite) : Promise<UserType>;
