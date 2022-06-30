
import axios from 'axios';
import { execute } from 'tabbycat/execute';
import { TableauRestRequest } from 'tabbycat/request';

jest.mock('axios');
jest.mock('tabbycat/request')

describe("Execute Method Tests", ()=> {
    beforeEach(()=> { jest.resetAllMocks(); })
    test("execute method should execute a get request on axios", async ()=> {
        const rqst = new TableauRestRequest();
        const response = await execute(rqst);
        expect(axios.request).toHaveBeenCalled();
    })    
})