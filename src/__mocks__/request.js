

export const DEFAULT_SCHEME = "http://";
export const DEFAULT_HOST = "localhost";
export const DEFAULT_PORT = "80";
export const DEFAULT_API_VERSION = "1.0";

export const withPath = jest.fn();
export const withVersion = jest.fn();
export const withHeaders = jest.fn();
export const withBodyParameters = jest.fn();
export const withQueryParameters = jest.fn();
export const build = jest.fn().mockImplementation(()=> new TableauRestRequest());
export const execute = jest.fn();

const built = {
    withVersion: withVersion,
    withPath: withPath,
    withHeaders: withHeaders,
    withBodyParameters: withBodyParameters,
    withQueryParameters: withQueryParameters,
    build: build
};

withVersion.mockImplementation(()=>built);
withPath.mockImplementation(()=>built);
withHeaders.mockImplementation(()=>built);
withBodyParameters.mockImplementation(()=>built);
withQueryParameters.mockImplementation(()=>built);

export const AuthenticationRequest = jest.fn().mockImplementation(()=> {
    return {};
})

export const AuthenticatedRequest = jest.fn().mockImplementation(()=> {
    return {};
})

export const TableauRestRequestBuilder = jest.fn().mockImplementation(() => {
    return built;
});

export const TableauRestRequest = jest.fn().mockImplementation(() => {
    return {
        execute: execute
    }
})