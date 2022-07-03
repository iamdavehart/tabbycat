/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { Paginated } from "tabbycat/types";
import { MetricType } from "tabbycat/types";
import { MetricListType } from "tabbycat/types";

/**
 * Deletes a specified metric from a site.
 * @param {string} metricLuid The unique ID of the metric to remove.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteMetric(metricLuid: string, client?: ClientLite) : Promise<any>;

/**
 * Returns the details of the specified metric.
 * @param {string} metricLuid The unique ID of the metric.
 * @returns {Promise<MetricType>} Promise | undefined
 */
export function getMetric(metricLuid: string, client?: ClientLite) : Promise<MetricType>;

/**
 * Returns the metrics configured for a site.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.filter (Optional) An expression that lets you specify a
 * 		subset of metrics to return. You can filter on predefined fields such as metric name, or
 * 		attributes of the associated owner or project. You can include multiple filter
 * 		expressions. For more information, see Filtering and Sorting.
 * @param {string} queryOptions.sort (Optional) An expression that lets you specify the
 * 		order in which metric information is returned. If you do not specify a sort expression,
 * 		the sort order of the information that's returned is undefined. For more information, see
 * 		Filtering and Sorting.
 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one
 * 		response. The minimum is 1. The maximum is 1000. The default is 100. For more information,
 * 		see Paginating Results.
 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default
 * 		is 1. For more information, see Paginating Results.
 * @param {string} queryOptions.fields (Optional) An expression that lets you specify the
 * 		set of available fields to return. You can qualify the return values based upon predefined
 * 		keywords such as _all_ or _default_, and you can specify individual fields for the metrics
 * 		or other supported resources. You can include multiple field expressions in a request. For
 * 		more information, see Using Fields in the REST API.
 * @returns {Promise<Paginated<MetricListType>>} Promise | undefined
 */
export function listMetricsForSite(queryOptions?: { filter: string, sort: string, pageSize: number, pageNumber: number, fields: string }, client?: ClientLite) : Promise<Paginated<MetricListType>>;

/**
 * Updates the owner, project, suspended status, or name of the specified metric.
 * @param {string} metricLuid The unique ID of the data source to update.
 * @param {MetricType} metric metric
 * @returns {Promise<MetricType>} Promise | undefined
 */
export function updateMetric(metricLuid: string, metric: MetricType, client?: ClientLite) : Promise<MetricType>;
