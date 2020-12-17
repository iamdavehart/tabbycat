
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
     * @param {string=} options.baseURL the baseURL for the server requests(defaults to localhost if not set)
     * @param {string=} options.version the default version to use (defaults to latest if not set)
     * @param {Object=} options.axios an options object that is passed to the underlying axios executives
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
        this.http = new TableauAuthorisationRestExecutive(
            axiosOptions,
            this.updateCurrentCredentials
        );
    }

    /**
     * Creates the execute options for the clients api requests
     * @param {Object} opts an existing options object
     * @param {boolean=} opts.authentication whether the route retunrs authentication information
     */
    execOpts(opts = {}) {
        return {
            baseURL: this.baseURL,
            version: this.version,
            http: opts && opts.authentication ? this.http : this.authHttp,
            ...opts,
        };
    }

    /**
     * Updates the credentials stored in the client
     * @param {Object} creds the credentials object returned by Tableau Server
     * @param {Object} creds.user the current logged-in user object returned by Tableau Server
     * @param {string=} creds.user.id the current logged-in user id returned by Tableau Server
     * @param {Object} creds.site the current logged-in site object returned by Tableau Server
     * @param {string=} creds.site.id the current logged-in site id returned by Tableau Server
     * @param {string} creds.token the token returned by Tableau Server
     */
    updateCurrentCredentials(creds) {
        if (!creds) {
            return;
        }
        this.currentUser = creds.user;
        this.currentSite = creds.site;
        this.http.setAccessToken(creds.token);
        this.authHttp.setAccessToken(creds.token);
    }

    /**
     * Get the id of the current site that the client is logged in to
     * @returns {string}
     */
    getSite() {
        return this.currentSite ? this.currentSite.id || "" : "";
    }
}
