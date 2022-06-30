import axios, { AxiosRequestConfig } from "axios";
import qs from 'qs';
import { TableauRestRequest } from './request';
import { execute } from "./execute";

/**
 * A TableauRestExecutive class wraps a specific instance to axios and defaults the
 * Tableau Auth header
 */
export class TableauRestExecutive {
    /**
     * Creates an executive object that wraps an axios instance to access authorised routes
     * @param {AxiosRequestConfig} options an options object that is passed to the underlying axios instance
     */
    constructor(options = {}) {
        this.axiosInstance = axios.create({ paramsSerializer: this.serializeQueryOptions, ...options });
        this.setAccessToken = this.setAccessToken.bind(this);
    }

    /**
     * Serializes Query Options into URL parameters
     * Note: this is overridden to allow control over encoding which has an effect on how expressions with embedded spaces are parsed
     * @param {Object} params an object representing the query parameters
     */
    serializeQueryOptions(params) {
        return qs.stringify(params, { format: "RFC3986" });
    }

    /**
     * Sets the security token to be used
     * @param {string} token security token
     */
    setAccessToken(token) {
        this.axiosInstance.defaults.headers.common["X-Tableau-Auth"] = token;
    }

    /**
     * Executes a request
     * @param {TableauRestRequest} request the request
     */
    execute(request) {
        return execute(request, this.axiosInstance);
    }

}

/**
 * An Executive to manage secured Tableau REST API routes
 */
export class TableauAuthorisedRestExecutive extends TableauRestExecutive {
    /**
     * Creates an executive object that wraps an axios instance to access authorised routes
     * @param {AxiosRequestConfig} options an options object that is passed to the underlying axios instance
     */
    constructor(options) {
        super(options);
        this.axiosInstance.interceptors.response.use((response) => response.data);
    }
}

/**
 * An Executive to manage authorisation Tableau REST API routes such as Sign In and Switch Site
 */
export class TableauAuthorisationRestExecutive extends TableauRestExecutive {
    /**
     * Creates an executive object that wraps an axios instance to access authorisations routes
     * and handle their credentials response with a callback
     * @param {AxiosRequestConfig} options an options object that is passed to the underlying axios instance
     * @param {Function} updateCredsCallback a callback that can set the credentials when they are returned
     */
    constructor(options, updateCredsCallback) {
        super(options);
        this.axiosInstance.interceptors.response.use((response) => {
            if (response.data && response.data.credentials) {
                updateCredsCallback(response.data.credentials);
            }
            return response.data;
        });
    }
}


