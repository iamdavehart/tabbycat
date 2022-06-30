import { TableauRestRequestBuilder, TableauRestRequest } from "./request";

describe("Tableau Rest Request Builder Tests", () => {
    describe.each([
        ["http://localhost", "http", "localhost", 80],
        ["https://tableauserver.tableau.com", "https", "tableauserver.tableau.com", 443],
        ["https://tableauserver.tableau.com:8003", "https", "tableauserver.tableau.com", 8003],
    ])("TableauRestRequestBuilder construtor tests", (url, scheme, host, port) => {
        test("${url} is parsed to internal properties scheme,host,port", () => {
            const rqb = new TableauRestRequestBuilder(url);
            expect(rqb.scheme).toBe(scheme);
            expect(rqb.host).toBe(host);
            expect(rqb.port).toBe(port);
        });
    });
    describe("Chained withXxxx methods to set properties", ()=> {
        test("withHost sets host property and can be chained / returns this", ()=> {
            const rqb = new TableauRestRequestBuilder();
            const ret = rqb.withHost("somevalue");
            expect(ret).toBe(rqb);
            expect(rqb.host).toBe("somevalue");
        });
        test("withPort sets port property and can be chained / returns this", ()=> {
            const rqb = new TableauRestRequestBuilder();
            const ret = rqb.withPort(245);
            expect(ret).toBe(rqb);
            expect(rqb.port).toBe(245);
        });
        test("withScheme sets port property and can be chained / returns this", ()=> {
            const rqb = new TableauRestRequestBuilder();
            const ret = rqb.withScheme("scp");
            expect(ret).toBe(rqb);
            expect(rqb.scheme).toBe("scp");
        });
        test("withVersion sets version property and can be chained / returns this", ()=> {
            const rqb = new TableauRestRequestBuilder();
            const ret = rqb.withVersion("9.9");
            expect(ret).toBe(rqb);
            expect(rqb.version).toBe("9.9");
        });  
        test("withPath sets path property and can be chained / returns this", ()=> {
            const rqb = new TableauRestRequestBuilder();
            const ret = rqb.withPath("api/madeup/resource/id");
            expect(ret).toBe(rqb);
            expect(rqb.path).toBe("api/madeup/resource/id");
        });
        test("withAuthToken defers to withHeaders and can be chained / returns this", ()=> {
            const rqb = new TableauRestRequestBuilder();
            rqb.withHeaders = jest.fn();
            const ret = rqb.withAuthenticationToken("someverylongrandomauthtoken");
            expect(ret).toBe(rqb);
            expect(rqb.withHeaders).toHaveBeenCalled();
            expect(rqb.withHeaders).toHaveBeenCalledWith({ "X-Tableau-Auth": "someverylongrandomauthtoken" });
        });  
        test("withHeaders sets header object and can be chained / returns this", ()=> {
            const rqb = new TableauRestRequestBuilder();
            const ret = rqb.withHeaders({ "name": "topcat" });
            expect(ret).toBe(rqb);
            expect(rqb.headers).toEqual({ "name": "topcat" });
        });        
        test("withHeaders merges header object on multiple calls", ()=> {
            const rqb = new TableauRestRequestBuilder();
            rqb.withHeaders({ "name": "topcat" });
            rqb.withHeaders({ "bestfriend": "benny" });
            expect(rqb.headers).toEqual({ "name": "topcat", "bestfriend": "benny" });
        }); 
        test("withFileParameters adds to array and can be chained / returns this", ()=> {
            const rqb = new TableauRestRequestBuilder();
            const ret = rqb.withFileParameters("./localfile/path");
            expect(ret).toBe(rqb);
            expect(rqb.fileParameters).toHaveLength(1);
            expect(rqb.fileParameters).toEqual([ "./localfile/path" ]);
        });
        test("withFileParameters appends when called multiple times", ()=> {
            const rqb = new TableauRestRequestBuilder();
            rqb.withFileParameters("./localfile/path");
            expect(rqb.fileParameters).toHaveLength(1);
            expect(rqb.fileParameters).toEqual([ "./localfile/path" ]);
            rqb.withFileParameters("./anotherdirectory/path");
            expect(rqb.fileParameters).toHaveLength(2);
            expect(rqb.fileParameters).toEqual([ "./localfile/path" , "./anotherdirectory/path" ]);
        });
        test("withQueryParameters sets query params object and can be chained / returns this", ()=> {
            const rqb = new TableauRestRequestBuilder();
            const ret = rqb.withQueryParameters({ "name": "topcat" });
            expect(ret).toBe(rqb);
            expect(rqb.queryParameters).toEqual({ "name": "topcat" });
        });      
    })
    describe("Request Builder build tests", ()=> {
        test("build should return a new TableauRestRequest", ()=> {
            const rqb = new TableauRestRequestBuilder();
            const ret = rqb.build();
            expect(ret).toBeInstanceOf(TableauRestRequest);
        });
        test("build method should process the path as part of its build", ()=> {
            const rqb = new TableauRestRequestBuilder();
            rqb.processPath = jest.fn();
            rqb.build();
            expect(rqb.processPath).toHaveBeenCalled();
        })
    })
});
