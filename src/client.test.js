const { TableauRestApiClient } = require("tabbycat/client");
const { TableauRestExecutive } = require("tabbycat/executive");

jest.mock("tabbycat/defaults", () => ({ DEFAULT_URL: "http://localhost", DEFAULT_VERSION: "9.9" }));
jest.mock("tabbycat/executive");

describe("Rest API Client Tests", () => {
    describe("Constructor Tests", () => {
        beforeEach(() => {
            jest.resetAllMocks();
        });
        test("Construction with default options should set localhost and default version", () => {
            const client = new TableauRestApiClient();
            expect(client.url).toBe("http://localhost");
            expect(client.apiVersion).toBe("9.9");
        });
        test("Construction with a baseURL the internal property", () => {
            const client = new TableauRestApiClient({ url: "https://anotherhost.com" });
            expect(client.url).toBe("https://anotherhost.com");
        });
        test("Construction with a version sets the internal property", () => {
            const client = new TableauRestApiClient({ version: "10.23" });
            expect(client.apiVersion).toBe("10.23");
        });
        test("Construction with an options object for axios passes that object to executives", () => {
            const axiosOpts = { timeout: 2000 };
            const client = new TableauRestApiClient({ axiosOptions: axiosOpts });
            expect(TableauRestExecutive).toHaveBeenCalledWith(axiosOpts);
        });
    });
});
