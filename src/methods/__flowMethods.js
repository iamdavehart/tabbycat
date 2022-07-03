/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { TableauRestRequest } from "tabbycat/request";
import { VersionException, MissingExecutiveException, MissingPathParameterException } from "tabbycat/exceptions";
import { failsVersionCheck } from "tabbycat/utils";
import * as http from "tabbycat/httpMethods";

/**
 * Adds permissions to the specified flow for a Tableau Server user or group. You can
 * specify multiple sets of permissions using one call.
 */
export function addFlowPermissions(flowId, permissions, client) {
    const minVersion = "3.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!flowId) return Promise.reject(new MissingPathParameterException("flowId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/flows/${flowId}/permissions`)
            .withBodyParameters(permissions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds a task to run a flow to an existing schedule.
 */
export function addFlowTaskToSchedule(scheduleId, task, client) {
    const minVersion = "3.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!scheduleId) return Promise.reject(new MissingPathParameterException("scheduleId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/schedules/${scheduleId}/flows`)
            .withBodyParameters(task)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Cancels a flow run that is in progress.
 */
export function cancelFlowRun(flowRunId, client) {
    const minVersion = "3.10";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!flowRunId) return Promise.reject(new MissingPathParameterException("flowRunId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/flows/runs/${flowRunId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes a flow. When a flow is deleted, its associated connections, the output and input
 * steps, any associated scheduled tasks, and run history are also deleted.
 */
export function deleteFlow(flowId, client) {
    const minVersion = "3.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!flowId) return Promise.reject(new MissingPathParameterException("flowId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/flows/${flowId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes the specified permission from the specified flow for a group or user.
 */
export function deleteFlowPermissionsForGroup(flowId, groupId, capabilityName, capabilityMode, client) {
    const minVersion = "3.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!flowId) return Promise.reject(new MissingPathParameterException("flowId"));
	if (!groupId) return Promise.reject(new MissingPathParameterException("groupId"));
	if (!capabilityName) return Promise.reject(new MissingPathParameterException("capabilityName"));
	if (!capabilityMode) return Promise.reject(new MissingPathParameterException("capabilityMode"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/flows/${flowId}/permissions/groups/${groupId}/${capabilityName}/${capabilityMode}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes the specified permission from the specified flow for a group or user.
 */
export function deleteFlowPermissionsForUser(flowId, userId, capabilityName, capabilityMode, client) {
    const minVersion = "3.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!flowId) return Promise.reject(new MissingPathParameterException("flowId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));
	if (!capabilityName) return Promise.reject(new MissingPathParameterException("capabilityName"));
	if (!capabilityMode) return Promise.reject(new MissingPathParameterException("capabilityMode"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/flows/${flowId}/permissions/users/${userId}/${capabilityName}/${capabilityMode}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Downloads a flow in .tfl or .tflx format.
 */
export function downloadFlow(flowId, client) {
    const minVersion = "3.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!flowId) return Promise.reject(new MissingPathParameterException("flowId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/flows/${flowId}/content`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Gets a flow run.
 */
export function getFlowRun(flowRunId, client) {
    const minVersion = "3.10";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!flowRunId) return Promise.reject(new MissingPathParameterException("flowRunId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/flows/runs/${flowRunId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Get flow runs.
 */
export function getFlowRuns(client) {
    const minVersion = "3.10";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/flows/runs`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns information about the specified flow run task. This method shows you information
 * about the scheduled task for the flow.
 */
export function getFlowRunTask(taskId, client) {
    const minVersion = "3.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!taskId) return Promise.reject(new MissingPathParameterException("taskId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/tasks/runFlow/${taskId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns information about the specified flow run task. This method shows you information
 * about the scheduled task for the flow.
 */
export function getFlowRunTask(taskId, client) {
    const minVersion = "3.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!taskId) return Promise.reject(new MissingPathParameterException("taskId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/tasks/runFlow/${taskId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of scheduled flow tasks for the site.
 */
export function getFlowRunTasks(client) {
    const minVersion = "3.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/tasks/runFlow`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of scheduled flow tasks for the site.
 */
export function getFlowRunTasks(client) {
    const minVersion = "3.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/tasks/runFlow`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Publishes a flow on the specified site. To make other changes to a published flow, call
 * Update Flow or Update Flow Connection.
 */
export function publishFlow(client) {
    const minVersion = "3.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/flows`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns information about the specified flow, including information about the project,
 * owner, and output steps.
 */
export function queryFlow(flowId, client) {
    const minVersion = "3.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!flowId) return Promise.reject(new MissingPathParameterException("flowId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/flows/${flowId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of data connections for the specific flow.
 */
export function queryFlowConnections(flowId, client) {
    const minVersion = "3.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!flowId) return Promise.reject(new MissingPathParameterException("flowId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/flows/${flowId}/connections`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of permissions for the specific flow.
 */
export function queryFlowPermissions(flowId, client) {
    const minVersion = "3.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!flowId) return Promise.reject(new MissingPathParameterException("flowId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/flows/${flowId}/permissions`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns the flows on a site. If the user is not an administrator, the method returns just
 * the flows that the user has permissions to view.
 */
export function queryFlowsForSite(client) {
    const minVersion = "3.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/flows`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns the flows that the specified user owns in addition to those that the user has
 * Read (view) permissions for.
 */
export function queryFlowsForUser(userId, queryOptions, client) {
    const minVersion = "3.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!userId) return Promise.reject(new MissingPathParameterException("userId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/users/${userId}/flows`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Runs the specified flow.
 */
export function runFlowNow(flowId, flowRunSpec, client) {
    const minVersion = "3.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!flowId) return Promise.reject(new MissingPathParameterException("flowId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/flows/${flowId}/run`)
            .withBodyParameters(flowRunSpec)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Runs the specified flow run task.
 */
export function runFlowTask(taskId, client) {
    const minVersion = "3.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!taskId) return Promise.reject(new MissingPathParameterException("taskId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/tasks/runFlow/${taskId}/runNow`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Runs the specified linked task.
 */
export function runLinkedTaskNow(linkedTaskId, client) {
    const minVersion = "3.15";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!linkedTaskId) return Promise.reject(new MissingPathParameterException("linkedTaskId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/tasks/${linkedTaskId}/runNow`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Updates the owner, project, of the specified flow.
 */
export function updateFlow(flowId, flow, client) {
    const minVersion = "3.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!flowId) return Promise.reject(new MissingPathParameterException("flowId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/flows/${flowId}`)
            .withBodyParameters(flow)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Updates the server address, port, username, or password for the specified flow
 * connection. The connection can be an input or an output connection.
 */
export function updateFlowConnection(flowId, connectionId, connection, client) {
    const minVersion = "3.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!flowId) return Promise.reject(new MissingPathParameterException("flowId"));
	if (!connectionId) return Promise.reject(new MissingPathParameterException("connectionId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/flows/${flowId}/connections/${connectionId}`)
            .withBodyParameters(connection)
            .withAuthenticationToken(token)
            .build()
    );
}
