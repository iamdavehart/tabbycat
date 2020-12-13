import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
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
 * @param {Function} callback An optional callback to run after the request has been made
 * @param {AxiosInstance} [axios] A specific axios instance to process the request
 * @returns {Promise<AxiosResponse>} an axios response 
 */
export function get(request, callback, axiosInstance) {
    return execute(HTTP_METHODS.GET, request, callback, axiosInstance);
}

/**
 * Execute an Http POST request
 * @param {TableauRestRequest} request the TableauRestRequest that is being called
 * @param {Function} callback An optional callback to run after the request has been made
 * @param {AxiosInstance} [axios] A specific axios instance to process the request
 * @returns {Promise<AxiosResponse>} an axios response 
 */
export function post(request, callback, axiosInstance) {
    return execute(HTTP_METHODS.POST, request, callback, axiosInstance);
}

/**
 * Execute an Http PUT request
 * @param {TableauRestRequest} request the TableauRestRequest that is being called
 * @param {Function} callback An optional callback to run after the request has been made
 * @param {AxiosInstance} [axios] A specific axios instance to process the request
 * @returns {Promise<AxiosResponse>} an axios response 
 */
export function put(request, callback, axiosInstance) {
    return execute(HTTP_METHODS.PUT, request, callback, axiosInstance);
}

/**
 * Execute an Http DELETE request
 * @param {TableauRestRequest} request the TableauRestRequest that is being called
 * @param {Function} callback An optional callback to run after the request has been made
 * @param {AxiosInstance} [axios] A specific axios instance to process the request
 * @returns {Promise<AxiosResponse>} an axios response 
 */
export function del(request, callback, axiosInstance) {
    return execute(HTTP_METHODS.DELETE, request, callback, axiosInstance);
}

/**
 * Executes an HTTP request
 * @param {string} method HTTP method to use in the request
 * @param {TableauRestRequest} request The Tableau Rest Request definition
 * @param {Function} callback An optional callback that may have been requested instead of a promise-based
 * @param {AxiosInstance} [axios] A specific axios instance to process the request
 * @returns {Promise<AxiosResponse>} an axios response 
 */
function execute(method, request, callback, axiosInstance) {
    const ax = axiosInstance || axios;
    const options = createAxiosOptionsFromRequest(method, request);
    if (callback) {
        ax.request(options).then(callback).catch(callback);
        return;
    }
    return ax.request(options);
}

/**
 * Extracts relevant details from the request to be used in the axios options
 * @param {string} method HTTP method to use in the request
 * @param {TableauRestRequest} request the TableauRestRequest that is being called
 * @returns {AxiosRequestConfig} an axios configuration object
 */
function createAxiosOptionsFromRequest(method, request) {
    if (request.fileParameters.length) {
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

