const { TableauRestApiClient } = require("tabbycat/client");
const {
    TableauAuthorisationRestExecutive,
    TableauAuthorisedRestExecutive,
} = require("tabbycat/executive");
const { DEFAULT_API_VERSION } = require("tabbycat/request");

jest.mock("tabbycat/request", () => ({ DEFAULT_API_VERSION: "9.9" }));
jest.mock("tabbycat/executive");

describe("Rest API Client Tests", () => {
    describe("Constructor Tests", () => {
        beforeEach(() => {
            jest.resetAllMocks();
        });
        test("Construction with default options should set localhost and default version", () => {
            const client = new TableauRestApiClient();
            expect(client.baseURL).toBe("http://localhost");
            expect(client.version).toBe("9.9");
        });
        test("Construction with a baseURL the internal property", () => {
            const client = new TableauRestApiClient({ baseURL: "https://anotherhost.com" });
            expect(client.baseURL).toBe("https://anotherhost.com");
        });
        test("Construction with a version sets the internal property", () => {
            const client = new TableauRestApiClient({ version: "10.23" });
            expect(client.version).toBe("10.23");
        });
        test("Construction with an options object for axios passes that object to executives", () => {
            const axiosOpts = { timeout: 2000 };
            const client = new TableauRestApiClient({ axios: axiosOpts });
            expect(TableauAuthorisedRestExecutive).toHaveBeenCalledWith(axiosOpts);
            expect(TableauAuthorisationRestExecutive).toHaveBeenCalledWith(
                axiosOpts,
                client.updateCurrentCredentials
            );
        });
    });
    describe("Authorisation Callback Tests", ()=> {
        test("updating with a null object does not cause an error",()=> {
            const client = new TableauRestApiClient();
            expect(()=> client.updateCurrentCredentials()).not.toThrowError();
        });
        test("updating creds object should set user and site properties",()=> {
            const client = new TableauRestApiClient();
            const user = { name: "topcat" };
            const site = { name: "alley" };
            const creds = { user: user, site: site };
            client.updateCurrentCredentials(creds);
            expect(client.currentUser).toBe(user);
            expect(client.currentSite).toBe(site);
        });
        test("updating creds object should set token on executives",()=> {
            const client = new TableauRestApiClient();
            const user = { name: "topcat" };
            const site = { name: "alley" };
            const creds = { user: user, site: site, token: "secrettokenforaccess" };
            client.updateCurrentCredentials(creds);
            expect(client.http.setAccessToken).toHaveBeenCalledWith("secrettokenforaccess");
            expect(client.authHttp.setAccessToken).toHaveBeenCalledWith("secrettokenforaccess");
        });
    });
    describe("Override option methods for api execution",()=> {
        test("GetSite method returns the current site's id", ()=> {
            const client = new TableauRestApiClient();
            const site = { id:"hoagys-alley-id", name: "alley" };
            client.currentSite = site;
            const s = client.getSite();
            expect(s).toBe("hoagys-alley-id");
        });
        test("execOptions returns an object with url, version and http agent", ()=> {
            const client = new TableauRestApiClient({ baseURL: "http://topcatserver.com", version: "9.9" });
            const opts = client.execOpts();
            expect(opts).toBeTruthy();
            expect(opts.baseURL).toBe("http://topcatserver.com");
            expect(opts.version).toBe("9.9");
            expect(opts.http).toBeDefined();
        });
        test("execOptions returns the correct http agent based on authentication option", ()=> {
            const client = new TableauRestApiClient();
            const authRouteOpts = { authentication: true }
            const nonAuthRouteOpts = { authentication: false }
            const authorisationRouteExec = client.execOpts(authRouteOpts);
            const nonAuthorisationRouteExec = client.execOpts(nonAuthRouteOpts);
            expect(authorisationRouteExec.http).toBe(client.http);
            expect(nonAuthorisationRouteExec.http).toBe(client.authHttp);
        });
        test("execOptions properties are preserved in returned object",()=> {
            const client = new TableauRestApiClient();
            const opts = { favouriteFood: "fish" };
            const execOpts = client.execOpts(opts);
            expect(execOpts.favouriteFood).toBe("fish");
        })
    });
});
