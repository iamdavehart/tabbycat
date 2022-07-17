/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { FavoriteRequest } from "tabbycat/types";
import { FavoriteOrderingsRequest } from "tabbycat/types";
import { FavoritesResponse } from "tabbycat/types";

/**
 * Adds the specified data source to the user's favorites.
 * @param {string} userId The ID of the user to add the favorite for.
 * @param {FavoriteRequest} favorite favorite
 * @returns {Promise<FavoritesResponse>} Promise | undefined
 */
export function addDataSourceToFavorites(userId: string, favorite: FavoriteRequest, client?: ClientLite) : Promise<FavoritesResponse>;

/**
 * Adds the specified flow to the user's favorites.
 * @param {string} userId The ID of the user to add the favorite for.
 * @param {FavoriteRequest} favorite favorite
 * @returns {Promise<FavoritesResponse>} Promise | undefined
 */
export function addFlowToFavorites(userId: string, favorite: FavoriteRequest, client?: ClientLite) : Promise<FavoritesResponse>;

/**
 * Adds the specified project to a user's favorites.
 * @param {string} userId The ID of the user to add the favorite for.
 * @param {FavoriteRequest} favorite favorite
 * @returns {Promise<FavoritesResponse>} Promise | undefined
 */
export function addProjectToFavorites(userId: string, favorite: FavoriteRequest, client?: ClientLite) : Promise<FavoritesResponse>;

/**
 * Adds the specified view to a user's favorites.
 * @param {string} userId The ID of the user to add the favorite for.
 * @param {FavoriteRequest} favorite favorite
 * @returns {Promise<FavoritesResponse>} Promise | undefined
 */
export function addViewToFavorites(userId: string, favorite: FavoriteRequest, client?: ClientLite) : Promise<FavoritesResponse>;

/**
 * Adds the specified workbook to a user's favorites.
 * @param {string} userId The ID of the user to add the favorite for.
 * @param {FavoriteRequest} favorite favorite
 * @returns {Promise<FavoritesResponse>} Promise | undefined
 */
export function addWorkbookToFavorites(userId: string, favorite: FavoriteRequest, client?: ClientLite) : Promise<FavoritesResponse>;

/**
 * Deletes the specified data source from the user's favorites. If the specified data source
 * is not a favorite, the operation has no effect.
 * @param {string} userId The ID of the user to remove the favorite from.
 * @param {string} datasourceId The ID of the data source to remove from the user's
 * 		favorites.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteDataSourceFromFavorites(userId: string, datasourceId: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes the specified flow from the user's favorites. If the specified flow is not a
 * favorite, the operation has no effect.
 * @param {string} userId The ID of the user to remove the favorite from.
 * @param {string} datasourceId The ID of the data source to remove from the user's
 * 		favorites.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteFlowFromFavorites(userId: string, datasourceId: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes the specified project from the user's favorites. If the specified project is not
 * a favorite, the operation has no effect.
 * @param {string} userId The ID of the user to remove the favorite from.
 * @param {string} projectId The ID of the project to remove from the user's favorites.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteProjectFromFavorites(userId: string, projectId: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes the specified view from user's favorites. If the specified view is not a
 * favorite, the operation has no effect.
 * @param {string} userId The ID of the user to remove the favorite from.
 * @param {string} viewId The ID of the view to remove from the user's favorites.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteViewFromFavorites(userId: string, viewId: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes a workbook from a user's favorites. If the specified workbook is not a favorite
 * of the specified user, this call has no effect.
 * @param {string} userId The ID of the user to remove the favorite from.
 * @param {string} workbookId The ID of the workbook to remove from the user's favorites.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteWorkbookFromFavorites(userId: string, workbookId: string, client?: ClientLite) : Promise<any>;

/**
 * Returns a list of favorite projects, data sources, views, workbooks, and flows for a
 * user.
 * @param {string} userId The ID of the user for which you want to get a list favorites.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one
 * 		response. The minimum is 1. The maximum is 1000. The default is 100. For more information,
 * 		see Paginating Results.
 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default
 * 		is 1. For more information, see Paginating Results.
 * @returns {Promise<FavoritesResponse>} Promise | undefined
 */
export function getFavoritesForUser(userId: string, queryOptions?: { pageSize: number, pageNumber: number }, client?: ClientLite) : Promise<FavoritesResponse>;

/**
 * Move an item to organize a user's favorites.
 * @param {string} userId The ID of the user for which you want to get a list favorites.
 * @param {FavoriteOrderingsRequest} favoriteOrderings favoriteOrderings
 * @returns {Promise<>} Promise | undefined
 */
export function updateFavorites(userId: string, favoriteOrderings: FavoriteOrderingsRequest, client?: ClientLite) : Promise<any>;
