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
 * Deletes a specified metric from a site.
 */
export function deleteMetric(metricLuid, client) {
    const minVersion = "3.9";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!metricLuid) return Promise.reject(new MissingPathParameterException("metricLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.DELETE)
            .withPath(`/api/${version}/sites/${siteId}/metrics/${metricLuid}`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns the details of the specified metric.
 */
export function getMetric(metricLuid, client) {
    const minVersion = "3.9";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!metricLuid) return Promise.reject(new MissingPathParameterException("metricLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/metrics/${metricLuid};`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Returns the metrics configured for a site.
 */
export function listMetricsForSite(queryOptions, client) {
    const minVersion = "3.9";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.GET)
            .withPath(`/api/${version}/sites/${siteId}/metrics`)
            .withQueryParameters(queryOptions)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Updates the owner, project, suspended status, or name of the specified metric.
 */
export function updateMetric(metricLuid, metric, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!metricLuid) return Promise.reject(new MissingPathParameterException("metricLuid"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/metrics/${metricLuid}`)
            .withBodyParameters(metric)
            .withAuthenticationToken(token)
            .build()
    );
}
