export * as api from "tabbycat/api-full";
import { WrappedApiCalls } from "./api-wrapped";
import { TableauAuthorisationRestExecutive, TableauAuthorisedRestExecutive } from "./executive";
import { DEFAULT_API_VERSION } from "./request";

/**
 * A REST Api Client that handles calls to the Tableau Server REST API
 */
export class TableauRestApiClient extends WrappedApiCalls {
    /**
     * Builds the Tableau Rest API client
     * @param {Object} options An options object containing the baseURL and version number
     */
    constructor(options = { baseURL: "http://localhost", version: DEFAULT_API_VERSION }) {
        super();
        this.baseURL = options.baseURL;
        this.version = options.version;
        this.currentUser = null;
        this.currentSite = null;
        // bind
        this.execOpts = this.execOpts.bind(this);
        this.getSite = this.getSite.bind(this);
        this.updateCurrentCredentials = this.updateCurrentCredentials.bind(this);
        // set up api executives
        const axiosOptions = options.axios || {};
        this.authHttp = new TableauAuthorisedRestExecutive(axiosOptions);
        this.http = new TableauAuthorisationRestExecutive(axiosOptions, this.updateCurrentCredentials);
    }

    execOpts(opts = {}) {
        return {
            baseURL: this.baseURL,
            version: this.version,
            http: opts && opts.authentication ? this.http : this.authHttp,
            ...opts,
        };
    }

    updateCurrentCredentials(creds) {
        if (!creds) {
            return;
        }
        this.currentUser = creds.user;
        this.currentSite = creds.site;
        this.http.setAccessToken(creds.token);
        this.authHttp.setAccessToken(creds.token);
    }

    getSite() {
        return this.currentSite.id;
    }

}
