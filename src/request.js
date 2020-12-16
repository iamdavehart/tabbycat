export const DEFAULT_API_VERSION = "3.8";

export class AuthenticatedRequest {
    /**
     * Returns a builder to construct your authenticated request
     * @param {string} baseUrl The baseUrl for the request to use
     * @param {string} token The security token returned from the APIs signin method
     */
    static builder(baseUrl, token) {
        return new TableauRestRequestBuilder(baseUrl)
            .withVersion(DEFAULT_API_VERSION)
            .withAuthToken(token);
    }
}

export class AuthenticationRequest {
    /**
     * Returns a builder to construct your authenticated request
     * @param {string} baseUrl The baseUrl for the request to use
     */
    static builder(baseUrl) {
        return new TableauRestRequestBuilder(baseUrl).withVersion(DEFAULT_API_VERSION);
    }
}

/**
 * Creates a request to execute against the Tableau Rest API
 */
export class TableauRestRequest {
    /**
     * Creates a new Tableau Rest Request with an appropriate builder
     * @param {TableauRestRequestBuilder} builder A Builder object configured for the specific request
     */
    constructor(builder) {
        if (!builder) {
            throw new Error("requests must be constructed with a builder object");
        }
        this.host = builder.host;
        this.port = builder.port;
        this.scheme = builder.scheme;
        this.version = builder.version;
        this.queryParameters = builder.queryParameters;
        this.bodyParameters = builder.bodyParameters;
        this.fileParameters = builder.fileParameters;
        this.headers = builder.headers;
        this.path = builder.path;
    }

    /** The api or resource version for the request */
    version;

    /** The host server for the api request */
    host;

    /** The port to communicate the api request over, defaults to 80 or 443 if omitted depending on the scheme */
    port;

    /** The scheme to communicate the api request over ie 'http' or 'https' */
    scheme;

    /** An object containing all the keys to be supplied as query paramteters */
    queryParameters;

    /** An object to be added to the body of the request, usually as a JSON object */
    bodyParameters;

    /** Any file data to be added to the body of the request */
    fileParameters;

    /** An object containing headers as key value pairs to be added to the request */
    headers;

    /** the path of the request */
    path;

    /**
     * Returns the full URI of the request, from the scheme, port, host and path properties
     */
    getURI() {
        if (!this.scheme || !this.host || !this.port) {
            throw new Error("Missing URI Components");
        }
        const port =
            (this.scheme === "http" && this.port !== 80) ||
            (this.scheme === "https" && this.port != 443)
                ? `:${this.port}`
                : "";
        return `${this.scheme}://${this.host}${port}${this.path}`;
    }

    /**
     * Returns the full URL of the request, which includes the URI and all necessary query string parameters
     */
    getURL() {
        const uri = this.getURI();
        return this.queryParameters ? uri + this.formatQueryString(this.queryParameters) : uri;
    }

    /**
     * Formats the query string object into a properly encoded query string
     * @param {object} qs An object that represents the query string key/value pairs
     */
    formatQueryString(qs) {
        return (
            "?" +
            Object.keys(qs)
                .filter((k) => qs[k] !== undefined)
                .map((k) => `${k}=${encodeURIComponent(qs[k])}`)
                .join("&")
        );
    }

    /**
     * Executes the method and retuns a promise.
     * @param {function} method The Http method handler that is used to execute the request
     */
    execute(method) {
        return method(this);
    }
}

/**
 * Provides a building interface to create tableau rest requests
 */
export class TableauRestRequestBuilder {
    /**
     * Creates a new Request Builder with default parameters
     * @param {string=} url optional url to build the request with
     */
    constructor(url) {
        /** @property {string} host The host server for the api request */
        this.host = "";
        /** @property {number} port The port to communicate the api request over, defaults to 80 or 443 if omitted depending on the scheme */
        this.port = 0;
        /** @property {string} scheme The scheme to communicate the api request over ie 'http' or 'https' */
        this.scheme = "";
        /** @property {string} path the path of the request */
        this.path = "";
        /** @property {string} version api or resource version for the request */
        this.version = "";
        /** @property {Object} headers An object containing headers as key value pairs to be added to the request */
        this.headers = {};
        /** @property {Object} queryParameters An object containing all the keys to be supplied as query paramteters */
        this.queryParameters = {};
        /** @property {Object} bodyParameters An object to be added to the body of the request, usually as a JSON object */
        this.bodyParameters = {};
        /** @property {Object[]} fileParameters Any file data to be added to the body of the request */
        this.fileParameters = [];
        this.processUrl(url);
    }

    /**
     * Processes a supplied base uri into scheme,host,port properties
     * @param {string=} url The base uri for the server request
     */
    processUrl(url) {
        if (!url) {
            return;
        }
        try {
            const u = new URL(url);
            this.scheme = u.protocol.replace(":", "");
            this.host = u.host && u.host.indexOf(":") > -1 ? u.host.split(":")[0] : u.host;
            this.port = u.port
                ? parseInt(u.port)
                : this.scheme.toLowerCase() === "https"
                ? 443
                : 80;
        } catch (e) {
            throw e;
        }
    }

    /**
     * performs internal replacement on the path before it is built
     * this allows parameters from the builder to affect how the path is built
     */
    processPath() {
        this.path = this.path.replace(/\{apiVersion\}/, encodeURIComponent(this.version));
    }

    /**
     * adds a host value to the builder
     * @param {string} host the host server for the request
     */
    withHost(host) {
        this.host = host;
        return this;
    }

    /**
     * adds a port value to the builder
     * @param {number} port The port to be used
     */
    withPort(port) {
        this.port = port;
        return this;
    }

    /**
     * adds a scheme to the builder (use either 'http' or 'https')
     * @param {string} scheme The scheme for the request
     */
    withScheme(scheme) {
        this.scheme = scheme;
        return this;
    }

    /**
     * adds a version number to the api request
     * @param {string} version The api or resource version for the request
     */
    withVersion(version) {
        this.version = version;
        return this;
    }

    /**
     * adds a path to the builder
     * @param {string} path The path from the request
     */
    withPath(path) {
        this.path = path;
        return this;
    }

    /**
     * adds a security token into the headers of the request
     * @param {string} token The security token required for authorising the request
     */
    withAuthToken(token) {
        if (token) {
            this.withHeaders({ "X-Tableau-Auth": token });
        }
        return this;
    }

    /**
     * adds custom headers into the request
     * @param {object} headers An object containg the headers as key/value pairs
     */
    withHeaders(headers) {
        this.headers = { ...this.headers, ...headers };
        return this;
    }

    /**
     * adds a body parameter to the request.
     * @param {object} [body] the content of the body being addd to the request
     */
    withBodyParameters(body) {
        this.bodyParameters = { ...this.bodyParameters, ...body };
        return this;
    }

    /**
     * adds a file parameter to the request.
     * @param {object} [file] the file being addd to the request
     */
    withFileParameters(file) {
        this.fileParameters.push(file);
        return this;
    }

    /**
     * adds query string values to the path for the request
     * @param {object} query An object containing the query string values as key/value pairs
     */
    withQueryParameters(query) {
        this.queryParameters = query;
        return this;
    }

    /**
     * Builds the final request with all parameters
     */
    build() {
        this.processPath();
        return new TableauRestRequest(this);
    }
}
