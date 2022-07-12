/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { CreateLensRequest } from "tabbycat/types";
import { ImportLensRequest } from "tabbycat/types";
import { CreateLensResponse } from "tabbycat/types";
import { GetLensResponse } from "tabbycat/types";
import { ImportLensResponse } from "tabbycat/types";
import { ListLensesResponse } from "tabbycat/types";

/**
 * Create an ask data lens.
 * @param {CreateLensRequest} createLensRequest CreateLensRequest
 * @returns {Promise<CreateLensResponse>} Promise | undefined
 */
export function createLens(createLensRequest: CreateLensRequest, client?: ClientLite) : Promise<CreateLensResponse>;

/**
 * Delete an ask data lens.
 * @param {string} lens_id undefined
 * @returns {Promise<GetLensResponse>} Promise | undefined
 */
export function deleteLens(lens_id: string, client?: ClientLite) : Promise<GetLensResponse>;

/**
 * Get the details of the specified ask data lens.
 * @param {string} lens_id undefined
 * @returns {Promise<GetLensResponse>} Promise | undefined
 */
export function getLens(lens_id: string, client?: ClientLite) : Promise<GetLensResponse>;

/**
 * Import an existing ask data lens on a server to a site, and optionally transform the
 * metadata of the lens in the process.
 * @param {ImportLensRequest} importLensRequest ImportLensRequest
 * @returns {Promise<ImportLensResponse>} Promise | undefined
 */
export function importLens(importLensRequest: ImportLensRequest, client?: ClientLite) : Promise<ImportLensResponse>;

/**
 * Returns a list of ask data lenses in a site.
 * @returns {Promise<ListLensesResponse>} Promise | undefined
 */
export function listLenses(client?: ClientLite) : Promise<ListLensesResponse>;
