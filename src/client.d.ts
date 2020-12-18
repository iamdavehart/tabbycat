import { AxiosRequestConfig } from "axios";
import { ApiCalls } from './api-unified';

/**
 * A REST Api Client that handles calls to the Tableau Server REST API
 */
export class TableauRestApiClient extends ApiCalls {
    /**
     * Builds the Tableau Rest API client
     * @param {ClientConstructorOptions} options An options object containing the baseURL and version number
     */
    constructor(options?: ClientConstructorOptions);
    /**
     * The base URI for the server (e.g. https://tableauserver.com)
     */
    baseURL: string;
    /**
     * The specific version of the REST API to use (defaults to latest)
     */
    version: string;
    /**
     * The Current authenticated user id (site specific) (null if not authenticated)
     */
    currentUser: any;
    /**
     * The Current authenticatd site (authentication is site-specific)
     */
    currentSite: any;
}

/**
 * Options Object used to configure the client
 */
declare interface ClientConstructorOptions {
    /**
     * The base URI for the server (e.g. https://tableauserver.com)
     */
    baseURL?: string;
    /**
     * The specific version of the REST API to use (defaults to latest)
     */
    version?: string;
    /**
     * An object that is passed directly to the internal axios executive
     */
    axios?: AxiosRequestConfig;
}
