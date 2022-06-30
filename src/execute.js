import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
import { getMultipartDataFromRequest } from "./publish-file-node";
import { TableauRestRequest } from "./request";

/**
 * Executes an HTTP request
 * @param {TableauRestRequest} request The Tableau Rest Request definition
 * @param {AxiosInstance=} axiosInstance A specific axios instance to process the request
 * @returns {Promise<AxiosResponse>} an axios response 
 */
export function execute(request, axiosInstance) {
    const ax = axiosInstance ?? axios;
    const options = createAxiosOptionsFromRequest(request);
    return ax.request(options);
}

/**
 * Extracts relevant details from the request to be used in the axios options
 * @param {TableauRestRequest} request the TableauRestRequest that is being called
 * @returns {AxiosRequestConfig} an axios configuration object
 */
function createAxiosOptionsFromRequest(request) {
    if (request.fileParameters && request.fileParameters.length) {
        return getMultipartDataFromRequest(method, request);
    } else {
        return {
            url: request.getURI(),
            method: request.method,
            headers: request.headers,
            params: request.queryParameters,
            data: request.bodyParameters
        };
    }
}

