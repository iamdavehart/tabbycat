/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { ProjectRequest } from "tabbycat/types";
import { ProjectResponse } from "tabbycat/types";
import { ProjectsResponse } from "tabbycat/types";

/**
 * Creates a project on the specified site. You can also create project hierarchies by
 * creating a project under the specified parent project on the site. To make changes to an
 * existing project, call Update Project.
 * @param {ProjectRequest} project project
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean} queryOptions.publishSamples (Optional) A Boolean value that specifies
 * 		whether to publish the sample workbooks provided by Tableau to the project. When the
 * 		publish-value is not specified in the request, or the publishSamples parameter is missing,
 * 		no samples will be published. To publish the sample workbooks, set publishSamples
 * 		parameter to true. This option is equivalent to the tabcmd command-line utility option,
 * 		publishsamples. For more information, see tabcmd(Link opens in a new window).
 * @returns {Promise<ProjectResponse>} Promise | undefined
 */
export function createProject(project: ProjectRequest, queryOptions?: { publishSamples: boolean }, client?: ClientLite) : Promise<ProjectResponse>;

/**
 * Deletes the specified project on a specific site. When a project is deleted, all Tableau
 * assets inside of it are also deleted, including assets like associated workbooks, data
 * sources, project view options, and rights.
 * @param {string} projectLuid The LUID of the project to delete.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteProject(projectLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Returns a list of projects on the specified site, with optional parameters for specifying
 * the paging of large results.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one
 * 		response. The minimum is 1. The maximum is 1000. The default is 100. For more information,
 * 		see Paginating Results.
 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default
 * 		is 1. For more information, see Paginating Results.
 * @param {string} queryOptions.filter (Optional) An expression that lets you specify a
 * 		subset of data sources to return. You can filter on predefined fields such as name,
 * 		ownerName, and parentProjectId. You can include multiple filter expressions. For more
 * 		information, see Filtering and Sorting.
 * @param {string} queryOptions.sort (Optional) An expression that lets you specify the
 * 		order in which user information is returned. If you do not specify a sort expression, the
 * 		sort order of the information that's returned is undefined. For more information, see
 * 		Filtering and Sorting.
 * @returns {Promise<ProjectsResponse>} Promise | undefined
 */
export function queryProjects(queryOptions?: { pageSize: number, pageNumber: number, filter: string, sort: string }, client?: ClientLite) : Promise<ProjectsResponse>;

/**
 * Updates the name, description, or project hierarchy of the specified project. You can
 * create or update project hierarchies by specifying a parent project for the project that
 * you are updating using this method.
 * @param {string} projectId The ID of the project to update.
 * @param {ProjectRequest} project project
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean} queryOptions.publishSamples (Optional) A Boolean value that specifies
 * 		whether to publish the sample workbooks provided by Tableau to the project when you update
 * 		the project. When the publish-value is not specified in the request, or the publishSamples
 * 		parameter is missing, no samples will be published. To publish the sample workbooks, set
 * 		publishSamples parameter to true. This option is equivalent to the tabcmd command-line
 * 		utility option, publishsamples. For more information, see tabcmd(Link opens in a new
 * 		window).
 * @returns {Promise<ProjectResponse>} Promise | undefined
 */
export function updateProject(projectId: string, project: ProjectRequest, queryOptions?: { publishSamples: boolean }, client?: ClientLite) : Promise<ProjectResponse>;
