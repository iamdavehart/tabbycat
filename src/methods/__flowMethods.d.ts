/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { Paginated } from "tabbycat/types";
import { PermissionsType } from "tabbycat/types";
import { TaskType } from "tabbycat/types";
import { FlowRunSpecType } from "tabbycat/types";
import { FlowType } from "tabbycat/types";
import { ConnectionType } from "tabbycat/types";
import { FlowRunType } from "tabbycat/types";
import { FlowRunListType } from "tabbycat/types";
import { TaskListType } from "tabbycat/types";
import { FlowOutputStepListType } from "tabbycat/types";
import { ConnectionListType } from "tabbycat/types";
import { FlowListType } from "tabbycat/types";
import { JobType } from "tabbycat/types";
import { LinkedTaskJobType } from "tabbycat/types";

/**
 * Adds permissions to the specified flow for a Tableau Server user or group. You can
 * specify multiple sets of permissions using one call.
 * @param {string} flowId <parameter documentation missing>
 * @param {PermissionsType} permissions permissions
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function addFlowPermissions(flowId: string, permissions: PermissionsType, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Adds a task to run a flow to an existing schedule.
 * @param {string} scheduleId The ID of the schedule that you are associating with the
 * 		flow. The schedule that you are adding to must have Flow as the schedule type.
 * @param {TaskType} task task
 * @returns {Promise<any>} Promise | undefined
 */
export function addFlowTaskToSchedule(scheduleId: string, task: TaskType, client?: ClientLite) : Promise<any>;

/**
 * Cancels a flow run that is in progress.
 * @param {string} flowRunId The ID of the flow run.
 * @returns {Promise<any>} Promise | undefined
 */
export function cancelFlowRun(flowRunId: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes a flow. When a flow is deleted, its associated connections, the output and input
 * steps, any associated scheduled tasks, and run history are also deleted.
 * @param {string} flowId The ID of the flow to delete.
 * @returns {Promise<any>} Promise | undefined
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
 * @returns {Promise<any>} Promise | undefined
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
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteFlowPermissionsForUser(flowId: string, userId: string, capabilityName: string, capabilityMode: string, client?: ClientLite) : Promise<any>;

/**
 * Downloads a flow in .tfl or .tflx format.
 * @param {string} flowId The ID of the flow to download.
 * @returns {Promise<any>} Promise | undefined
 */
export function downloadFlow(flowId: string, client?: ClientLite) : Promise<any>;

/**
 * Gets a flow run.
 * @param {string} flowRunId The ID of the flow run.
 * @returns {Promise<FlowRunType>} Promise | undefined
 */
export function getFlowRun(flowRunId: string, client?: ClientLite) : Promise<FlowRunType>;

/**
 * Get flow runs.
 * @returns {Promise<FlowRunListType>} Promise | undefined
 */
export function getFlowRuns(client?: ClientLite) : Promise<FlowRunListType>;

/**
 * Returns information about the specified flow run task. This method shows you information
 * about the scheduled task for the flow.
 * @param {string} taskId The ID of the scheduled flow run task that you want information
 * 		about.
 * @returns {Promise<TaskType>} Promise | undefined
 */
export function getFlowRunTask(taskId: string, client?: ClientLite) : Promise<TaskType>;

/**
 * Returns information about the specified flow run task. This method shows you information
 * about the scheduled task for the flow.
 * @param {string} taskId The ID of the scheduled flow run task that you want information
 * 		about.
 * @returns {Promise<TaskType>} Promise | undefined
 */
export function getFlowRunTask(taskId: string, client?: ClientLite) : Promise<TaskType>;

/**
 * Returns a list of scheduled flow tasks for the site.
 * @returns {Promise<TaskListType>} Promise | undefined
 */
export function getFlowRunTasks(client?: ClientLite) : Promise<TaskListType>;

/**
 * Returns a list of scheduled flow tasks for the site.
 * @returns {Promise<TaskListType>} Promise | undefined
 */
export function getFlowRunTasks(client?: ClientLite) : Promise<TaskListType>;

/**
 * Publishes a flow on the specified site. To make other changes to a published flow, call
 * Update Flow or Update Flow Connection.
 * @returns {Promise<FlowType>} Promise | undefined
 */
export function publishFlow(client?: ClientLite) : Promise<FlowType>;

/**
 * Returns information about the specified flow, including information about the project,
 * owner, and output steps.
 * @param {string} flowId The ID of the flow to return information about.
 * @returns {Promise<FlowOutputStepListType>} Promise | undefined
 */
export function queryFlow(flowId: string, client?: ClientLite) : Promise<FlowOutputStepListType>;

/**
 * Returns a list of data connections for the specific flow.
 * @param {string} flowId The ID of the flow to return connection information about.
 * @returns {Promise<ConnectionListType>} Promise | undefined
 */
export function queryFlowConnections(flowId: string, client?: ClientLite) : Promise<ConnectionListType>;

/**
 * Returns a list of permissions for the specific flow.
 * @param {string} flowId The ID of the flow to get permissions for.
 * @returns {Promise<PermissionsType>} Promise | undefined
 */
export function queryFlowPermissions(flowId: string, client?: ClientLite) : Promise<PermissionsType>;

/**
 * Returns the flows on a site. If the user is not an administrator, the method returns just
 * the flows that the user has permissions to view.
 * @returns {Promise<Paginated<FlowListType>>} Promise | undefined
 */
export function queryFlowsForSite(client?: ClientLite) : Promise<Paginated<FlowListType>>;

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
 * @returns {Promise<Paginated<FlowListType>>} Promise | undefined
 */
export function queryFlowsForUser(userId: string, queryOptions?: { isOwner: boolean, pageSize: number, pageNumber: number }, client?: ClientLite) : Promise<Paginated<FlowListType>>;

/**
 * Runs the specified flow.
 * @param {string} flowId The ID of the flow to update.
 * @param {FlowRunSpecType} flowRunSpec flowRunSpec
 * @returns {Promise<JobType>} Promise | undefined
 */
export function runFlowNow(flowId: string, flowRunSpec: FlowRunSpecType, client?: ClientLite) : Promise<JobType>;

/**
 * Runs the specified flow run task.
 * @param {string} taskId The ID of the flow run task that you want to run.
 * @returns {Promise<JobType>} Promise | undefined
 */
export function runFlowTask(taskId: string, client?: ClientLite) : Promise<JobType>;

/**
 * Runs the specified linked task.
 * @param {string} linkedTaskId The ID of the linked task to run.
 * @returns {Promise<LinkedTaskJobType>} Promise | undefined
 */
export function runLinkedTaskNow(linkedTaskId: string, client?: ClientLite) : Promise<LinkedTaskJobType>;

/**
 * Updates the owner, project, of the specified flow.
 * @param {string} flowId <parameter documentation missing>
 * @param {FlowType} flow flow
 * @returns {Promise<FlowType>} Promise | undefined
 */
export function updateFlow(flowId: string, flow: FlowType, client?: ClientLite) : Promise<FlowType>;

/**
 * Updates the server address, port, username, or password for the specified flow
 * connection. The connection can be an input or an output connection.
 * @param {string} flowId The ID of the flow to update.
 * @param {string} connectionId The ID of the connection to update. To determine what
 * 		connections are available for a flow, call Query Flow Connections.
 * @param {ConnectionType} connection connection
 * @returns {Promise<ConnectionType>} Promise | undefined
 */
export function updateFlowConnection(flowId: string, connectionId: string, connection: ConnectionType, client?: ClientLite) : Promise<ConnectionType>;
