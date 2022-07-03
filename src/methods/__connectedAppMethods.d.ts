/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { ConnectedApplicationType } from "tabbycat/types";
import { ConnectedApplicationSecretType } from "tabbycat/types";
import { ConnectedApplicationListType } from "tabbycat/types";

/**
 * Create a connected app.
 * @param {ConnectedApplicationType} connectedApplication connectedApplication
 * @returns {Promise<ConnectedApplicationType>} Promise | undefined
 */
export function createConnectedApplication(connectedApplication: ConnectedApplicationType, client?: ClientLite) : Promise<ConnectedApplicationType>;

/**
 * Generate a secret for a connected app.
 * @param {string} clientId The unique ID of the connected app.
 * @returns {Promise<ConnectedApplicationSecretType>} Promise | undefined
 */
export function createConnectedApplicationSecret(clientId: string, client?: ClientLite) : Promise<ConnectedApplicationSecretType>;

/**
 * Permanently remove a connected app.
 * @param {string} clientId The unique ID of the connected app.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteConnectedApplication(clientId: string, client?: ClientLite) : Promise<any>;

/**
 * Permanently remove a secret associated with a connected app.
 * @param {string} clientId The unique ID of the connected app.
 * @param {string} secretId The unique ID of the connected app secret.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteConnectedApplicationSecret(clientId: string, secretId: string, client?: ClientLite) : Promise<any>;

/**
 * Query a connected app by its ID.
 * @param {string} clientId The unique ID of the connected app.
 * @returns {Promise<ConnectedApplicationListType>} Promise | undefined
 */
export function getConnectedApplication(clientId: string, client?: ClientLite) : Promise<ConnectedApplicationListType>;

/**
 * Query all connected apps configured on a site.
 * @returns {Promise<ConnectedApplicationListType>} Promise | undefined
 */
export function getConnectedApplications(client?: ClientLite) : Promise<ConnectedApplicationListType>;

/**
 * Query a connected app secret and the token value using the connected app's ID.
 * @param {string} clientId The unique ID of the connected app.
 * @param {string} secretId The unique ID of the connected app secret.
 * @returns {Promise<ConnectedApplicationSecretType>} Promise | undefined
 */
export function getConnectedApplicationSecret(clientId: string, secretId: string, client?: ClientLite) : Promise<ConnectedApplicationSecretType>;

/**
 * Update a connected app.
 * @param {string} clientId The unique ID of the connected app.
 * @param {ConnectedApplicationType} connectedApplication connectedApplication
 * @returns {Promise<ConnectedApplicationType>} Promise | undefined
 */
export function updateConnectedApplicationSecret(clientId: string, connectedApplication: ConnectedApplicationType, client?: ClientLite) : Promise<ConnectedApplicationType>;
