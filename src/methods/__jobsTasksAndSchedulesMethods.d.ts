/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { Paginated } from "tabbycat/types";
import { TaskType } from "tabbycat/types";
import { ScheduleType } from "tabbycat/types";
import { TaskListType } from "tabbycat/types";
import { ExtractListType } from "tabbycat/types";
import { JobType } from "tabbycat/types";
import { BackgroundJobListType } from "tabbycat/types";
import { ScheduleListType } from "tabbycat/types";

/**
 * Adds a task to refresh a data source to an existing schedule. This method is not
 * available for Tableau Online.
 * @param {string} scheduleId The ID of the schedule that you are associating with the
 * 		data source.
 * @param {TaskType} task task
 * @returns {Promise<TaskType>} Promise | undefined
 */
export function addDataSourceToSchedule(scheduleId: string, task: TaskType, client?: ClientLite) : Promise<TaskType>;

/**
 * Adds a task to refresh or accelerate a workbook to an existing schedule.
 * @param {string} scheduleId The ID of the schedule that you are associating with the
 * 		workbook.
 * @param {TaskType} task task
 * @returns {Promise<TaskType>} Promise | undefined
 */
export function addWorkbookToSchedule(scheduleId: string, task: TaskType, client?: ClientLite) : Promise<TaskType>;

/**
 * Cancels a job specified by job ID. To get a list of job IDs for jobs that are currently
 * queued or in-progress, use the Query Jobs method.
 * @param {string} jobId The ID of the job to cancel.
 * @returns {Promise<any>} Promise | undefined
 */
export function cancelJob(jobId: string, client?: ClientLite) : Promise<any>;

/**
 * Creates a new schedule on Tableau Server.
 * @param {ScheduleType} schedule schedule
 * @returns {Promise<ScheduleType>} Promise | undefined
 */
export function createSchedule(schedule: ScheduleType, client?: ClientLite) : Promise<ScheduleType>;

/**
 * Deletes a data acceleration task.
 * @param {string} dataAccelerationId The ID of the task to remove.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteDataAccelerationTask(dataAccelerationId: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes an extract refresh task.
 * @param {string} taskId The ID of the extract refresh task to remove.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteExtractRefreshTask(taskId: string, client?: ClientLite) : Promise<any>;

/**
 * Deletes the specified schedule.
 * @param {string} scheduleId The ID of the schedule to delete. To determine what
 * 		schedules are available, call Query Schedules.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteSchedule(scheduleId: string, client?: ClientLite) : Promise<any>;

/**
 * Returns a list of data acceleration tasks for the site.
 * @returns {Promise<TaskListType>} Promise | undefined
 */
export function getDataAccelerationTasks(client?: ClientLite) : Promise<TaskListType>;

/**
 * Returns information about the specified extract refresh task.
 * @param {string} taskId The ID of the extract refresh that you want information about.
 * @returns {Promise<TaskType>} Promise | undefined
 */
export function getExtractRefreshTask(taskId: string, client?: ClientLite) : Promise<TaskType>;

/**
 * Returns a list of extract refresh tasks for the site.
 * @returns {Promise<TaskListType>} Promise | undefined
 */
export function getExtractRefreshTasks(client?: ClientLite) : Promise<TaskListType>;

/**
 * Returns detailed information about the specified schedule.
 * @param {string} scheduleId The ID of the specific schedule.Note: You can get the
 * 		schedule id from running the Query Schedules method. For more information, see Jobs,
 * 		Tasks, and Schedules Methods
 * @returns {Promise<ScheduleType>} Promise | undefined
 */
export function getSchedule(scheduleId: string, client?: ClientLite) : Promise<ScheduleType>;

/**
 * Returns a list of the extract refresh tasks for a specified schedule on the specified
 * site.
 * @param {string} scheduleId The ID of the schedule to get extract information for.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one
 * 		response. The minimum is 1. The maximum is 1000. The default is 100. For more information,
 * 		see Paginating Results.
 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default
 * 		is 1. For more information, see Paginating Results.
 * @returns {Promise<Paginated<ExtractListType>>} Promise | undefined
 */
export function queryExtractRefreshTasks(scheduleId: string, queryOptions?: { pageSize: number, pageNumber: number }, client?: ClientLite) : Promise<Paginated<ExtractListType>>;

/**
 * Returns status information about an asynchronous process that is tracked using a job.
 * This method can be used to query jobs that are used to do the following:
 * @param {string} jobId The ID of the job to get status information for.
 * @returns {Promise<JobType>} Promise | undefined
 */
export function queryJob(jobId: string, client?: ClientLite) : Promise<JobType>;

/**
 * Returns a list of active jobs on the specified site. To get details on a specific job,
 * pass a job ID returned by this method to the Query Job method. To cancel an active job,
 * pass a job ID returned by this method to the Cancel Job method.
 * @returns {Promise<Paginated<BackgroundJobListType>>} Promise | undefined
 */
export function queryJobs(client?: ClientLite) : Promise<Paginated<BackgroundJobListType>>;

/**
 * Returns a list of flows, extract and subscription schedules. For each schedule, the API
 * returns the name, frequency, priority, and other information.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one
 * 		response. The minimum is 1. The maximum is 1000. The default is 100. For more information,
 * 		see Paginating Results.
 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default
 * 		is 1. For more information, see Paginating Results.
 * @returns {Promise<Paginated<ScheduleListType>>} Promise | undefined
 */
export function querySchedules(queryOptions?: { pageSize: number, pageNumber: number }, client?: ClientLite) : Promise<Paginated<ScheduleListType>>;

/**
 * Runs the specified extract refresh task.
 * @param {string} taskId The ID of the extract refresh task that you want to run.
 * @returns {Promise<JobType>} Promise | undefined
 */
export function runExtractRefreshTask(taskId: string, client?: ClientLite) : Promise<JobType>;

/**
 * Modifies settings for the specified schedule, including the name, priority, and frequency
 * details.
 * @param {string} scheduleId The ID of the schedule to update. To determine what
 * 		schedules are available, call Query Schedules.
 * @param {ScheduleType} schedule schedule
 * @returns {Promise<ScheduleType>} Promise | undefined
 */
export function updateSchedule(scheduleId: string, schedule: ScheduleType, client?: ClientLite) : Promise<ScheduleType>;
