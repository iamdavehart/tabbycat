import { TableauRestApiClientLite } from "./client";
import * as api from "./methods";

/**
 * A REST Api Client built on axios that handles calls to the Tableau Server REST API
 */
export class TableauRestApiClient extends TableauRestApiClientLite {
    constructor(opts) {
        super(opts);
        for (const apiCall in api) this[apiCall] = api[apiCall].bind(this);
    }
}



