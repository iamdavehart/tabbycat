/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { ConnectedApplicationRequest } from "tabbycat/types";
import { ConnectedApplicationResponse } from "tabbycat/types";
import { ConnectedApplicationSecretResponse } from "tabbycat/types";
import { ConnectedApplicationsResponse } from "tabbycat/types";

/**
 * Create a connected app.
 * @param {ConnectedApplicationRequest} connectedApplication connectedApplication
 * @returns {Promise<ConnectedApplicationResponse>} Promise | undefined
 */
export function createConnectedApplication(connectedApplication: ConnectedApplicationRequest, client?: ClientLite) : Promise<ConnectedApplicationResponse>;

/**
 * Generate a secret for a connected app.
 * @param {string} clientId The unique ID of the connected app.
 * @returns {Promise<ConnectedApplicationSecretResponse>} Promise | undefined
 */
export function createConnectedApplicationSecret(clientId: string, client?: ClientLite) : Promise<ConnectedApplicationSecretResponse>;

/**
 * Permanently remove a connected app.
 * @param {string} clientId The unique ID of the connected app.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteConnectedApplication(clientId: string, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove a secret associated with a connected app.
 * @param {string} clientId The unique ID of the connected app.
 * @param {string} secretId The unique ID of the connected app secret.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteConnectedApplicationSecret(clientId: string, secretId: string, client?: ClientLite) : Promise<any>;

/**
 * Query a connected app by its ID.
 * @param {string} clientId The unique ID of the connected app.
 * @returns {Promise<ConnectedApplicationsResponse>} Promise | undefined
 */
export function getConnectedApplication(clientId: string, client?: ClientLite) : Promise<ConnectedApplicationsResponse>;

/**
 * Query all connected apps configured on a site.
 * @returns {Promise<ConnectedApplicationsResponse>} Promise | undefined
 */
export function getConnectedApplications(client?: ClientLite) : Promise<ConnectedApplicationsResponse>;

/**
 * Query a connected app secret and the token value using the connected app's ID.
 * @param {string} clientId The unique ID of the connected app.
 * @param {string} secretId The unique ID of the connected app secret.
 * @returns {Promise<ConnectedApplicationSecretResponse>} Promise | undefined
 */
export function getConnectedApplicationSecret(clientId: string, secretId: string, client?: ClientLite) : Promise<ConnectedApplicationSecretResponse>;

/**
 * Update a connected app.
 * @param {string} clientId The unique ID of the connected app.
 * @param {ConnectedApplicationRequest} connectedApplication connectedApplication
 * @returns {Promise<ConnectedApplicationResponse>} Promise | undefined
 */
export function updateConnectedApplicationSecret(clientId: string, connectedApplication: ConnectedApplicationRequest, client?: ClientLite) : Promise<ConnectedApplicationResponse>;
