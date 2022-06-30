import { DEFAULT_URL, DEFAULT_VERSION } from "./defaults";

describe("Default Value Tests", () => {
    test("the default url for the library is localhost", ()=> {
        expect(DEFAULT_URL).toBe("http://localhost");
    });
    test("the default version for the library should be 3.15", () => {
        expect(DEFAULT_VERSION).toBe("3.15");
    })
})