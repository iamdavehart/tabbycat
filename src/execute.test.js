
import axios from 'axios';
import { get, post, put, del } from 'tabbycat/execute';
import { TableauRestRequest } from 'tabbycat/request';

jest.mock('axios');
jest.mock('tabbycat/request')

describe("Execute Method Tests", ()=> {
    beforeEach(()=> { jest.resetAllMocks(); })
    test("GET method should execute a get request on axios", async ()=> {
        const rqst = new TableauRestRequest();
        rqst.getURI = jest.fn();
        const promise = await get(rqst);
        expect(axios.request).toHaveBeenCalledWith({ method: "get" });
    })
    test("PUT method should execute a get request on axios", async ()=> {
        const rqst = new TableauRestRequest();
        rqst.getURI = jest.fn();
        const promise = await put(rqst);
        expect(axios.request).toHaveBeenCalledWith({ method: "put" });
    })
    test("POST method should execute a get request on axios", async ()=> {
        const rqst = new TableauRestRequest();
        rqst.getURI = jest.fn();
        const promise = await post(rqst);
        expect(axios.request).toHaveBeenCalledWith({ method: "post" });
    })
    test("DELETE method should execute a get request on axios", async ()=> {
        const rqst = new TableauRestRequest();
        rqst.getURI = jest.fn();
        const promise = await del(rqst);
        expect(axios.request).toHaveBeenCalledWith({ method: "delete" });
    });
    
})