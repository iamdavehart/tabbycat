import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, Method } from "axios";
import { getMultipartDataFromRequest } from "./publish-file-node";
import { TableauRestRequest } from "./request";

const HTTP_METHODS = { 
    GET: "get", 
    PUT: "put", 
    POST: "post", 
    DELETE: "delete" 
};

/**
 * Execute an Http GET request
 * @param {TableauRestRequest} request the TableauRestRequest that is being called
 * @param {AxiosInstance=} [axiosInstance] A specific axios instance to process the request
 * @returns {Promise<AxiosResponse>} an axios response 
 */
export function get(request, axiosInstance) {
    return execute(request, "get", axiosInstance);
}

/**
 * Execute an Http POST request
 * @param {TableauRestRequest} request the TableauRestRequest that is being called
 * @param {AxiosInstance=} [axiosInstance] A specific axios instance to process the request
 * @returns {Promise<AxiosResponse>} an axios response 
 */
export function post(request, axiosInstance) {
    return execute(request, "post", axiosInstance);
}

/**
 * Execute an Http PUT request
 * @param {TableauRestRequest} request the TableauRestRequest that is being called
 * @param {AxiosInstance=} [axiosInstance] A specific axios instance to process the request
 * @returns {Promise<AxiosResponse>} an axios response 
 */
export function put(request, axiosInstance) {
    return execute(request, "put", axiosInstance);
}

/**
 * Execute an Http DELETE request
 * @param {TableauRestRequest} request the TableauRestRequest that is being called
 * @param {AxiosInstance=} [axiosInstance] A specific axios instance to process the request
 * @returns {Promise<AxiosResponse>} an axios response 
 */
export function del(request, axiosInstance) {
    return execute(request, "delete", axiosInstance);
}

/**
 * Executes an HTTP request
 * @param {TableauRestRequest} request The Tableau Rest Request definition
 * @param {Method=} method HTTP method to use in the request
 * @param {AxiosInstance=} axiosInstance A specific axios instance to process the request
 * @returns {Promise<AxiosResponse>} an axios response 
 */
function execute(request, method, axiosInstance) {
    const ax = axiosInstance || axios;
    const options = createAxiosOptionsFromRequest(request, method);
    return ax.request(options);
}

/**
 * Extracts relevant details from the request to be used in the axios options
 * @param {TableauRestRequest} request the TableauRestRequest that is being called
 * @param {Method=} method HTTP method to use in the request
 * @returns {AxiosRequestConfig} an axios configuration object
 */
function createAxiosOptionsFromRequest(request, method) {
    if (request.fileParameters && request.fileParameters.length) {
        return getMultipartDataFromRequest(method, request);
    } else {
        return {
            url: request.getURI(),
            method: method,
            headers: request.headers,
            params: request.queryParameters,
            data: request.bodyParameters
        };
    }
}

