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
 * Uploads a block of data and appends it to the data that is already uploaded. This method
 * is called after an upload has been initiated using Initiate File Upload.
 */
export function appendToFileUpload(uploadSessionId, file, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));
	if (!uploadSessionId) return Promise.reject(new MissingPathParameterException("uploadSessionId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.PUT)
            .withPath(`/api/${version}/sites/${siteId}/fileUploads/${uploadSessionId}`)
            .withHeaders({"Content-Type":"multipart/mixed"})
            .withFileParameters({ name: "tableau_file", file: file })
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Initiates the upload process for a file. After the upload has been initiated, you call
 * Append to File Upload to send individual blocks of the file to the server. When the
 * complete file has been sent to the server, you call Publish Data Source, Publish Flow, or
 * Publish Workbook to commit the upload.
 */
export function initiateFileUpload(client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/fileUploads`)
            .withAuthenticationToken(token)
            .build()
    );
}

/**
 * Publishes a workbook on the specified site. To make changes to a published workbook, call
 * Update Workbook or Update Workbook Connection.
 */
export function publishWorkbook(workbook, file, queryOptions, client) {
    const minVersion = "2.0";
    const { url, version, siteId, token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());
	if (!siteId) return Promise.reject(new MissingPathParameterException("siteId"));  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.POST)
            .withPath(`/api/${version}/sites/${siteId}/workbooks`)
            .withHeaders({"Content-Type":"multipart/mixed"})
            .withQueryParameters(queryOptions)
            .withBodyParameters(workbook)
            .withFileParameters({ name: "tableau_workbook", file: file })
            .withAuthenticationToken(token)
            .build()
    );
}
