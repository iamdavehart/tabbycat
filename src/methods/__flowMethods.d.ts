/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { PermissionsRequest } from "tabbycat/types";
import { TaskRequest } from "tabbycat/types";
import { FlowRequest } from "tabbycat/types";
import { FlowRunSpecRequest } from "tabbycat/types";
import { ConnectionRequest } from "tabbycat/types";
import { PermissionsResponse } from "tabbycat/types";
import { FlowRunResponse } from "tabbycat/types";
import { FlowRunsResponse } from "tabbycat/types";
import { TaskResponse } from "tabbycat/types";
import { TasksResponse } from "tabbycat/types";
import { LinkedTasksResponse } from "tabbycat/types";
import { FlowResponse } from "tabbycat/types";
import { FlowOutputStepsResponse } from "tabbycat/types";
import { ConnectionsResponse } from "tabbycat/types";
import { FlowsResponse } from "tabbycat/types";
import { JobResponse } from "tabbycat/types";
import { LinkedTaskJobResponse } from "tabbycat/types";
import { ConnectionResponse } from "tabbycat/types";

/**
 * Adds permissions to the specified flow for a Tableau Server user or group. You can
 * specify multiple sets of permissions using one call.
 * @param {string} flowId The ID of the flow
 * @param {PermissionsRequest} permissions permissions
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function addFlowPermissions(flowId: string, permissions: PermissionsRequest, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Adds a task to run a flow to an existing schedule.
 * @param {string} scheduleId The ID of the schedule that you are associating with the
 * 		flow. The schedule that you are adding to must have Flow as the schedule type.
 * @param {TaskRequest} task task
 * @returns {Promise<>} Promise | undefined
 */
export function addFlowTaskToSchedule(scheduleId: string, task: TaskRequest, client?: ClientLite) : Promise<any>;

/**
 * Cancels a flow run that is in progress.
 * @param {string} flowRunId The ID of the flow run.
 * @returns {Promise<>} Promise | undefined
 */
export function cancelFlowRun(flowRunId: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes a flow. When a flow is deleted, its associated connections, the output and input
 * steps, any associated scheduled tasks, and run history are also deleted.
 * @param {string} flowId The ID of the flow to delete.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteFlow(flowId: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes the specified permission from the specified flow for a group or user.
 * @param {string} flowId The ID of the flow to remove the permission for.
 * @param {string} groupId The ID of the group to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. Valid
 * 		capabilities for a flow are ChangeHierarchy, ChangePermissions, Delete, Execute, ExportXml
 * 		(Download), Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteFlowPermissionsForGroup(flowId: string, groupId: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes the specified permission from the specified flow for a group or user.
 * @param {string} flowId The ID of the flow to remove the permission for.
 * @param {string} userId The ID of the user to remove the permission for.
 * @param {string} capabilityName The capability to remove the permission for. Valid
 * 		capabilities for a flow are ChangeHierarchy, ChangePermissions, Delete, Execute, ExportXml
 * 		(Download), Read (view), and Write. For more information, see Permissions.
 * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove
 * 		the deny permission. This value is case sensitive.
 * @returns {Promise<>} Promise | undefined
 */
export function deleteFlowPermissionsForUser(flowId: string, userId: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Downloads a flow in .tfl or .tflx format.
 * @param {string} flowId The ID of the flow to download.
 * @returns {Promise<>} Promise | undefined
 */
export function downloadFlow(flowId: string, client?: ClientLite) : Promise<any>;

/**
 * Gets a flow run.
 * @param {string} flowRunId The ID of the flow run.
 * @returns {Promise<FlowRunResponse>} Promise | undefined
 */
export function getFlowRun(flowRunId: string, client?: ClientLite) : Promise<FlowRunResponse>;

/**
 * Get flow runs.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.filter (Optional) An expression that lets you specify a
 * 		subset to return. You can filter on predefined fields such as the userId of the user who
 * 		started the flow run, flowId, progress, startedAt, and completedAt. You can include
 * 		multiple filter expressions. For more information, see Filtering and Sorting.
 * @returns {Promise<FlowRunsResponse>} Promise | undefined
 */
export function getFlowRuns(queryOptions?: { filter: string }, client?: ClientLite) : Promise<FlowRunsResponse>;

/**
 * Returns information about the specified flow run task. This method shows you information
 * about the scheduled task for the flow.
 * @param {string} taskId The ID of the scheduled flow run task that you want information
 * 		about.
 * @returns {Promise<TaskResponse>} Promise | undefined
 */
export function getFlowRunTask(taskId: string, client?: ClientLite) : Promise<TaskResponse>;

/**
 * Returns a list of scheduled flow tasks for the site.
 * @returns {Promise<TasksResponse>} Promise | undefined
 */
export function getFlowRunTasks(client?: ClientLite) : Promise<TasksResponse>;

/**
 * Returns information about a specific linked task. This method shows you information about
 * the scheduled linked task
 * @param {string} linkedTaskId The ID of the scheduled linked task that you want
 * 		information about.
 * @returns {Promise<LinkedTasksResponse>} Promise | undefined
 */
export function getLinkedTask(linkedTaskId: string, client?: ClientLite) : Promise<LinkedTasksResponse>;

/**
 * Returns a list of scheduled linked tasks for a site.
 * @returns {Promise<LinkedTasksResponse>} Promise | undefined
 */
export function getLinkedTasks(client?: ClientLite) : Promise<LinkedTasksResponse>;

/**
 * Publishes a flow on the specified site. To make other changes to a published flow, call
 * Update Flow or Update Flow Connection.
 * @param {FlowRequest} flow flow
 * @param {Object} file File Contents
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean} queryOptions.overwrite (Optional) true to overwrite a flow that has
 * 		the same name, or false to fail if the specified flow already exists. The default is
 * 		false. If overwrite-flag is set to true but the flow doesn't already exist, the operation
 * 		succeeds.
 * @param {string} queryOptions.uploadSessionId If you are calling this method to commit
 * 		a file that was uploaded in parts, this value contains the upload session ID that was
 * 		generated by a call to Initiate File Upload. If this value is not included, the server
 * 		assumes that the body of the request contains the file to be published.
 * @param {string} queryOptions.flowFileType tfl or tflx to indicate whether you have
 * 		uploaded a flow file (tfl) or a packaged flow file (tflx). This value is only necessary
 * 		and required if you upload a file in multiple parts. In the Publish Flow call after
 * 		completing file upload, specify the file type.
 * @returns {Promise<FlowResponse>} Promise | undefined
 */
export function publishFlow(flow: FlowRequest, file: Object, queryOptions?: { overwrite: boolean, uploadSessionId: string, flowFileType: string }, client?: ClientLite) : Promise<FlowResponse>;

/**
 * Returns information about the specified flow, including information about the project,
 * owner, and output steps.
 * @param {string} flowId The ID of the flow to return information about.
 * @returns {Promise<FlowOutputStepsResponse>} Promise | undefined
 */
export function queryFlow(flowId: string, client?: ClientLite) : Promise<FlowOutputStepsResponse>;

/**
 * Returns a list of data connections for the specific flow.
 * @param {string} flowId The ID of the flow to return connection information about.
 * @returns {Promise<ConnectionsResponse>} Promise | undefined
 */
export function queryFlowConnections(flowId: string, client?: ClientLite) : Promise<ConnectionsResponse>;

/**
 * Returns a list of permissions for the specific flow.
 * @param {string} flowId The ID of the flow to get permissions for.
 * @returns {Promise<PermissionsResponse>} Promise | undefined
 */
export function queryFlowPermissions(flowId: string, client?: ClientLite) : Promise<PermissionsResponse>;

/**
 * Returns the flows on a site. If the user is not an administrator, the method returns just
 * the flows that the user has permissions to view.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.filter (Optional) An expression that lets you specify a
 * 		subset of flows to return. You can filter on predefined fields such as name, tags, and
 * 		createdAt. You can include multiple filter expressions. For more information, see
 * 		Filtering and Sorting.
 * @param {string} queryOptions.sort (Optional) An expression that lets you specify the
 * 		order in which flow information is returned. If you do not specify a sort expression, the
 * 		sort order of the information that's returned is undefined. For more information, see
 * 		Filtering and Sorting.
 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one
 * 		response. The minimum is 1. The maximum is 1000. The default is 100. For more information,
 * 		see Paginating Results.
 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default
 * 		is 1. For more information, see Paginating Results.
 * @returns {Promise<FlowsResponse>} Promise | undefined
 */
export function queryFlowsForSite(queryOptions?: { filter: string, sort: string, pageSize: number, pageNumber: number }, client?: ClientLite) : Promise<FlowsResponse>;

/**
 * Returns the flows that the specified user owns in addition to those that the user has
 * Read (view) permissions for.
 * @param {string} userId The ID of the user to get flows for.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {boolean} queryOptions.isOwner (Optional) trueto return only flows that the
 * 		specified user owns, or falseto return all flows that the specified user has at least read
 * 		access to. The default is false.
 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one
 * 		response. The minimum is 1. The maximum is 1000. The default is 100. For more information,
 * 		see Paginating Results.
 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default
 * 		is 1. For more information, see Paginating Results.
 * @returns {Promise<FlowsResponse>} Promise | undefined
 */
export function queryFlowsForUser(userId: string, queryOptions?: { isOwner: boolean, pageSize: number, pageNumber: number }, client?: ClientLite) : Promise<FlowsResponse>;

/**
 * Runs the specified flow.
 * @param {string} flowId The ID of the flow to update.
 * @param {FlowRunSpecRequest} flowRunSpec flowRunSpec
 * @returns {Promise<JobResponse>} Promise | undefined
 */
export function runFlowNow(flowId: string, flowRunSpec: FlowRunSpecRequest, client?: ClientLite) : Promise<JobResponse>;

/**
 * Runs the specified flow run task.
 * @param {string} taskId The ID of the flow run task that you want to run.
 * @returns {Promise<JobResponse>} Promise | undefined
 */
export function runFlowTask(taskId: string, client?: ClientLite) : Promise<JobResponse>;

/**
 * Runs the specified linked task.
 * @param {string} linkedTaskId The ID of the linked task to run.
 * @returns {Promise<LinkedTaskJobResponse>} Promise | undefined
 */
export function runLinkedTaskNow(linkedTaskId: string, client?: ClientLite) : Promise<LinkedTaskJobResponse>;

/**
 * Updates the owner, project, of the specified flow.
 * @param {string} flowId The ID of the flow to update
 * @param {FlowRequest} flow flow
 * @returns {Promise<FlowResponse>} Promise | undefined
 */
export function updateFlow(flowId: string, flow: FlowRequest, client?: ClientLite) : Promise<FlowResponse>;

/**
 * Updates the server address, port, username, or password for the specified flow
 * connection. The connection can be an input or an output connection.
 * @param {string} flowId The ID of the flow to update.
 * @param {string} connectionId The ID of the connection to update. To determine what
 * 		connections are available for a flow, call Query Flow Connections.
 * @param {ConnectionRequest} connection connection
 * @returns {Promise<ConnectionResponse>} Promise | undefined
 */
export function updateFlowConnection(flowId: string, connectionId: string, connection: ConnectionRequest, client?: ClientLite) : Promise<ConnectionResponse>;
