
import { ApiCalls } from "./api-unified";
import { TableauAuthorisationRestExecutive, TableauAuthorisedRestExecutive } from "./executive";

/**
 * A REST Api Client that handles calls to the Tableau Server REST API
 */
export class TableauRestApiClient extends ApiCalls {
    /**
     * Builds the Tableau Rest API client
     * @param {Object=} options An options object containing the baseURL and version number
     * @param {string=} options.baseURL the baseURL for the server requests(defaults to localhost if not set)
     * @param {string=} options.version the default version to use (defaults to latest if not set)
     * @param {Object=} options.axios an options object that is passed to the underlying axios executives
     */
    constructor(options) {
        super();
        // use passed-in options if applicable
        if (options?.baseURL) { this.baseURL = options.baseURL; }
        if (options?.version) { this.version = options.version; }
        // initialise state for users and site options
        this.currentUser = null;
        this.currentSite = null;
        this.currentSiteId = null;
        // set up api executives
        const axiosOptions = options.axios || {};
        this.updateCurrentCredentials = this.updateCurrentCredentials.bind(this);
        this.authenticatedHttp = new TableauAuthorisedRestExecutive(axiosOptions);
        this.authenticationHttp = new TableauAuthorisationRestExecutive(axiosOptions, this.updateCurrentCredentials);
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
        this.currentSiteId = creds.site?.id;
        this.authenticatedHttp.setAccessToken(creds.token);
        this.authenticationHttp.setAccessToken(creds.token);
    }

}
