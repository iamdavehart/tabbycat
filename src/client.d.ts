import { AxiosRequestConfig } from "axios";

export declare type ClientLite = {
    url: string;
    version: string;
    siteId: string;
    token: string;
    execute: Function;
}

/**
 * A REST Api Client that handles calls to the Tableau Server REST API
 */
export declare class TableauRestApiClientLite implements ClientLite {
    /**
     * Builds the Tableau Rest API client
     * @param {ClientConstructorOptions} options An options object containing the baseURL and version number
     */
    constructor(options?: ClientConstructorOptions);

    url: string;

    version: string;

    siteId: string;

    token: string;

    execute: Function;
    
}

/**
 * Options Object used to configure the client
 */
declare type ClientConstructorOptions = {
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
    axiosOptions?: AxiosRequestConfig;
}
