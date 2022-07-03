/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { DomainType } from "tabbycat/types";
import { SessionType } from "tabbycat/types";
import { DomainListType } from "tabbycat/types";
import { ServerInfo } from "tabbycat/types";

/**
 * Deletes a specified session. This method is not available for Tableau Online and is
 * typically used in programmatic management of the life cycles of embedded Tableau sessions.
 * @param {string} sessionId The unique ID of the session to be deleted. A session's ID
 * 		and other metadata can be queried from the Tableau Server Postgres repository. Reading the
 * 		Postgres repository excessively can impact performance and that writing directly to the
 * 		repository is not supported in any form. For more information, see Collect Data with the
 * 		Tableau Server Repository and Tableau Server Postgres Data Dictionary.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteServerSession(sessionId: string, client?: ClientLite) : Promise<any>;

/**
 * Returns details of the current session of Tableau Server.
 * @returns {Promise<SessionType>} Promise | undefined
 */
export function getCurrentServerSession(client?: ClientLite) : Promise<SessionType>;

/**
 * Returns the details of the Active Directory domains that are in use on the server,
 * including their full domain names, nicknames and IDs. If the server is configured to use
 * local authentication, the command returns only the domain name local.
 * @returns {Promise<DomainListType>} Promise | undefined
 */
export function listServerActiveDirectoryDomains(client?: ClientLite) : Promise<DomainListType>;

/**
 * Returns the version of Tableau Server and the supported version of the REST API.
 * @returns {Promise<ServerInfo>} Promise | undefined
 */
export function serverInfo(client?: ClientLite) : Promise<ServerInfo>;

/**
 * Changes the nickname or full domain name of an Active Directory domain on the server.
 * This method is not available on Tableau Online.
 * @param {string} domainId The integer ID of the of the Active Directory domain being
 * 		updated. Find a domain's ID using List Server Active Directory Domains.
 * @param {DomainType} domain domain
 * @returns {Promise<DomainType>} Promise | undefined
 */
export function updateServerActiveDirectoryDomain(domainId: string, domain: DomainType, client?: ClientLite) : Promise<DomainType>;
