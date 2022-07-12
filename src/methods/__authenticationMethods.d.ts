/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { CredentialsRequest } from "tabbycat/types";
import { SiteRequest } from "tabbycat/types";
import { CredentialsResponse } from "tabbycat/types";

/**
 * Revokes all personal access tokens(Link opens in a new window) (PATs) created by server
 * administrators. This method is not available for Tableau Online.
 * @returns {Promise<>} Promise | undefined
 */
export function revokeAdministratorPersonalAccessTokens(client?: ClientLite) : Promise<any>;

/**
 * Signs you in as a user on the specified site on Tableau Server or Tableau Online. This
 * call returns a credentials token that you use in subsequent calls to the server.
 * Typically, a credentials token is valid for 240 minutes. With administrator permissions on
 * Tableau Server, you can change this timeout by using the tsm configuration set(Link opens
 * in a new window) command and setting the wgserver.session.idle_limit option.
 * @param {CredentialsRequest} credentials credentials
 * @returns {Promise<CredentialsResponse>} Promise | undefined
 */
export function signIn(credentials: CredentialsRequest, client?: ClientLite) : Promise<CredentialsResponse>;

/**
 * Signs you out of the current session. This call invalidates the authentication token that
 * is created by a call to Sign In.
 * @returns {Promise<>} Promise | undefined
 */
export function signOut(client?: ClientLite) : Promise<any>;

/**
 * Switches you onto another site without having to provide a user name and password again.
 * @param {SiteRequest} site site
 * @returns {Promise<CredentialsResponse>} Promise | undefined
 */
export function switchSite(site: SiteRequest, client?: ClientLite) : Promise<CredentialsResponse>;
