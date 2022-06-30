/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { TableauCredentialsType } from "tabbycat/types";

/**
 * Signs you in as a user on the specified site on Tableau Server or Tableau Online. This call returns a credentials token that you use in subsequent calls to the server. Typically, a credentials token is valid for 240 minutes. With administrator permissions on Tableau Server, you can change this timeout by using the tsm configuration set(Link opens in a new window) command and setting the wgserver.session.idle_limit option.
 * @param {TableauCredentialsType} credentials credentials
 * @returns {Promise<TableauCredentialsType>} Promise | undefined
 */
export function signIn(credentials: TableauCredentialsType, client?: ClientLite) : Promise<TableauCredentialsType>;
