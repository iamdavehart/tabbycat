import { AxiosRequestConfig } from "axios";

export interface ClientLite {
    url: string;
    version: string;
    siteId: string;
    token: string;
    execute: Function;
}

/**
 * A REST Api Client that handles calls to the Tableau Server REST API
 */
export class TableauRestApiClient implements ClientLite {
    /**
     * Builds the Tableau Rest API client
     * @param {ClientConstructorOptions} options An options object containing the baseURL and version number
     */
    constructor(options?: ClientConstructorOptions);

}

/**
 * Options Object used to configure the client
 */
declare interface ClientConstructorOptions {
    /**
     * The base URI for the server (e.g. https://tableauserver.com)
     */
    url?: string;
    /**
     * The specific version of the REST API to use (defaults to latest)
     */
    version?: string;
    /**
     * An object that is passed directly to the internal axios executive
     */
    axios?: AxiosRequestConfig;
}
