/**
* ProviderApiError is error returned when an adapter encounters
* an http error while communication with its corresponding provider
*/
const SRTlib = require('SRT-util');
class ProviderApiError extends Error {
    constructor(message, statusCode) {
        /**
        * @param {string} message error message
        * @param {number} statusCode the http status code from the provider api
        */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"ProviderApiError","superClass":"Error"}},`);
        super(message);
        this.name = 'ProviderApiError';
        this.statusCode = statusCode;
        this.isAuthError = false;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    }
}
/**
* AuthError is error returned when an adapter encounters
* an authorization error while communication with its corresponding provider
*/
class ProviderAuthError extends ProviderApiError {
    constructor() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ProviderAuthError","superClass":"ProviderApiError"}},`);
        super('invalid access token detected by Provider', 401);
        this.name = 'AuthError';
        this.isAuthError = true;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    }
}
/**
* Convert an error instance to an http response if possible
* @param {Error | ProviderApiError} err the error instance to convert to an http json response
*/
function errorToResponse(err) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"errorToResponse","fileName":"${__filename}","paramsNumber":1},`);
    if (err instanceof ProviderAuthError && err.isAuthError) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"errorToResponse"},');
        return {
            code: 401,
            message: err.message
        };
    }
    if (err instanceof ProviderApiError) {
        if (err.statusCode >= 500) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"errorToResponse"},');
            // bad gateway i.e the provider APIs gateway
            return {
                code: 502,
                message: err.message
            };
        }
        if (err.statusCode >= 400) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"errorToResponse"},');
            // 424 Failed Dependency
            return {
                code: 424,
                message: err.message
            };
        }
    }
    SRTlib.send('{"type":"FUNCTIONEND","function":"errorToResponse","paramsNumber":1},');
}
module.exports = {
    ProviderAuthError,
    ProviderApiError,
    errorToResponse
};
