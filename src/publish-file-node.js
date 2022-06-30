const fs = require('fs');
const FormData = require('form-data');
import { TableauRestRequest } from "./request";

/**
 * Extracts the body parameters from the request to be used in the axios options
 * @param {TableauRestRequest} request the TableauRestRequest that is being called
 */
export function getMultipartDataFromRequest(request) {
    const data = new FormData({});

    const request_payload = JSON.stringify(request.bodyParameters);
    data.append("request_payload", request_payload, {
        contentType: "application/json",
    });

    const fileParam = request.fileParameters[0];
    const filedata = fs.readFileSync(fileParam.file);
    const filelength = filedata.length;
    data.append(fileParam.name, filedata, {
        contentType: "application/octet-stream",
        filepath: fileParam.file,
        knownLength: filelength,
    });

    const headers = {
        ...request.headers,
        ...data.getHeaders({
            "content-type": "multipart/mixed; boundary=" + data.getBoundary(),
        }),
    };

    return {
        url: request.getURI(),
        method: request.method,
        headers: headers,
        params: request.queryParameters,
        data: data,
    };
}
