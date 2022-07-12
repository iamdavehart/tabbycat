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
 * Adds a task to refresh a data source to an existing schedule. This method is not
 * available for Tableau Online.
 */
export function addDataSourceToSchedule(scheduleId, task, client) {
    const minVersion = "2.8";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!scheduleId) return Promise.reject(new MissingPathParameterException("scheduleId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/schedules/${scheduleId}/datasources`)
            .withBodyParameters(task)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Adds a task to refresh or accelerate a workbook to an existing schedule.
 */
export function addWorkbookToSchedule(scheduleId, task, client) {
    const minVersion = "2022.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!scheduleId) return Promise.reject(new MissingPathParameterException("scheduleId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/schedules/${scheduleId}/workbooks`)
            .withBodyParameters(task)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Cancels a job specified by job ID. To get a list of job IDs for jobs that are currently
 * queued or in-progress, use the Query Jobs method.
 */
export function cancelJob(jobId, client) {
    const minVersion = "3.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!jobId) return Promise.reject(new MissingPathParameterException("jobId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/jobs/${jobId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Creates a new schedule on Tableau Server.
 */
export function createSchedule(schedule, client) {
    const minVersion = "2.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/schedules`)
            .withBodyParameters(schedule)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes a data acceleration task.
 */
export function deleteDataAccelerationTask(dataAccelerationId, client) {
    const minVersion = "2022.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!dataAccelerationId) return Promise.reject(new MissingPathParameterException("dataAccelerationId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/tasks/dataAcceleration/${dataAccelerationId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Deletes the specified schedule.
 */
export function deleteSchedule(scheduleId, client) {
    const minVersion = "2.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!scheduleId) return Promise.reject(new MissingPathParameterException("scheduleId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/schedules/${scheduleId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of data acceleration tasks for the site.
 */
export function getDataAccelerationTasks(client) {
    const minVersion = "2022.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/tasks/dataAcceleration`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns information about the specified extract refresh task.
 */
export function getExtractRefreshTask(taskId, client) {
    const minVersion = "2.6";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!taskId) return Promise.reject(new MissingPathParameterException("taskId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/tasks/extractRefreshes/${taskId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of extract refresh tasks for the site.
 */
export function getExtractRefreshTasks(client) {
    const minVersion = "2.6";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/tasks/extractRefreshes`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns detailed information about the specified schedule.
 */
export function getSchedule(scheduleId, client) {
    const minVersion = "3.8";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!scheduleId) return Promise.reject(new MissingPathParameterException("scheduleId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/schedules/${scheduleId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of the extract refresh tasks for a specified schedule on the specified
 * site.
 */
export function queryExtractRefreshTasks(scheduleId, queryOptions, client) {
    const minVersion = "2.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!scheduleId) return Promise.reject(new MissingPathParameterException("scheduleId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/schedules/${scheduleId}/extracts`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns status information about an asynchronous process that is tracked using a job.
 * This method can be used to query jobs that are used to do the following:
 */
export function queryJob(jobId, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!jobId) return Promise.reject(new MissingPathParameterException("jobId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/jobs/${jobId}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of active jobs on the specified site. To get details on a specific job,
 * pass a job ID returned by this method to the Query Job method. To cancel an active job,
 * pass a job ID returned by this method to the Cancel Job method.
 */
export function queryJobs(client) {
    const minVersion = "3.1";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/jobs`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns a list of flows, extract and subscription schedules. For each schedule, the API
 * returns the name, frequency, priority, and other information.
 */
export function querySchedules(queryOptions, client) {
    const minVersion = "2.2";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/schedules`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Runs the specified extract refresh task.
 */
export function runExtractRefreshTask(taskId, client) {
    const minVersion = "2.6";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!taskId) return Promise.reject(new MissingPathParameterException("taskId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/tasks/extractRefreshes/${taskId}/runNow`)
            .withBodyParameters({})
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Modifies settings for the specified schedule, including the name, priority, and frequency
 * details.
 */
export function updateSchedule(scheduleId, schedule, client) {
    const minVersion = "2.3";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!scheduleId) return Promise.reject(new MissingPathParameterException("scheduleId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/schedules/${scheduleId}`)
            .withBodyParameters(schedule)
            .withAuthenticationToken(token)
            .build()
    );
}
