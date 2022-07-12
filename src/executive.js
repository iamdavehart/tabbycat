import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import { TableauRestRequest } from "./request";
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
    constructor(options = {}, authCallback = () => {}) {
        this.axiosInstance = axios.create({ paramsSerializer: this.serializeQueryOptions, ...options });
        this.execute = this.execute.bind(this);
        this.setAccessToken = this.setAccessToken.bind(this);
        this.axiosInstance.interceptors.response.use((r) => {
            if (this.isAuthResponse(r)) {
                this.setAccessToken(r?.data?.credentials?.token);
                if (authCallback) authCallback(r.data?.credentials);
            }
            return r.data;
        });
    }

    /**
     * Serializes Query Options into URL parameters
     * Note: this is overridden to allow control over encoding which has an effect on how expressions with embedded spaces are parsed
     * @param {Object} params an object representing the query parameters
     */
    serializeQueryOptions(params) {
        return qs.stringify(params, { format: "RFC3986" });
    }

    isAuthResponse(response) {
        const requestUrl = String(response?.request?.url).toLowerCase();
        return requestUrl && (
            requestUrl.endsWith("auth/signin") ||
            requestUrl.endsWith("auth/switchsite") ||
            requestUrl.endsWith("auth/signout") ||
            requestUrl.endsWith("auth/serverAdminAccessTokens")
        );
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
