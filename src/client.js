import { DEFAULT_URL, DEFAULT_VERSION } from "./defaults";
import { TableauRestExecutive } from "./executive";

/**
 * A REST Api Client built on axios that handles calls to the Tableau Server REST API
 */
export class TableauRestApiClientLite {
    /**
     * Builds the Tableau Rest API client
     * @param {Object=} options An options object containing the baseURL and version number
     * @param {string=} options.baseURL the baseURL for the server requests(defaults to localhost if not set)
     * @param {string=} options.version the default version to use (defaults to latest if not set)
     * @param {Object=} options.axios an options object that is passed to the underlying axios executives
     */
    constructor({ url = DEFAULT_URL, version = DEFAULT_VERSION, axiosOptions = {} } = {}) {
        this.url = url;
        this.version = version;
        this.siteId = null;
        this.userId = null;
        this.token = null;
        this.executive = new TableauRestExecutive(axiosOptions, (creds) => {
            this.userId = creds?.user?.id;
            this.siteId = creds?.site?.id;
            this.token = creds?.token;
        });
        this.execute = this.executive.execute;
    }
}

