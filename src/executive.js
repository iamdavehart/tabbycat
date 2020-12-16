import axios, { AxiosRequestConfig } from "axios";
import { TableauRestRequest } from './request';
import * as methods from "./execute";

/**
 * A TableauRestExecutive class wraps a specific instance to axios and defaults the
 * Tableau Auth header
 */
export class TableauRestExecutive {
    /**
     * Creates an executive object that wraps an axios instance to access authorised routes
     * @param {AxiosRequestConfig} options an options object that is passed to the underlying axios instance
     */
    constructor(options) {
        this.axiosInstance = axios.create(options);
        this.setAccessToken = this.setAccessToken.bind(this);
        this.get = this.get.bind(this);
        this.put = this.put.bind(this);
        this.post = this.post.bind(this);
        this.del = this.del.bind(this);
    }

    /**
     * Sets the security token to be used
     * @param {string} token security token
     */
    setAccessToken(token) {
        this.axiosInstance.defaults.headers.common["X-Tableau-Auth"] = token;
    }

    /**
     * Executes a GET request
     * @param {TableauRestRequest} request the request
     */
    get(request) {
        return methods.get(request, this.axiosInstance);
    }

    /**
     * Executes a PUT request
     * @param {TableauRestRequest} request the request
     */
    put(request) {
        return methods.put(request, this.axiosInstance);
    }

    /**
     * Executes a POST request
     * @param {TableauRestRequest} request the request
     */
    post(request) {
        return methods.post(request, this.axiosInstance);
    }

    /**
     * Executes a DELETE request
     * @param {TableauRestRequest} request the request
     */
    del(request) {
        return methods.del(request, this.axiosInstance);
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
