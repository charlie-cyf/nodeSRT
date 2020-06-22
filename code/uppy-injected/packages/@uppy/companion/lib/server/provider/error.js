var SRTlib = require('SRT-util');
class ProviderApiError extends Error {
  constructor(message, statusCode) {
        SRTlib.send(`{ "anonymous": false, "function": "ProviderApiError.constructor", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    super(message);
    this.name = 'ProviderApiError';
    this.statusCode = statusCode;
    this.isAuthError = false;
        SRTlib.send('], "end": "constructor"},');

  }
}
class ProviderAuthError extends ProviderApiError {
  constructor() {
        SRTlib.send(`{ "anonymous": false, "function": "ProviderAuthError.constructor", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    super('invalid access token detected by Provider', 401);
    this.name = 'AuthError';
    this.isAuthError = true;
        SRTlib.send('], "end": "constructor"},');

  }
}
function errorToResponse(err) {
    SRTlib.send(`{ "anonymous": false, "function": "errorToResponse", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (err instanceof ProviderAuthError && err.isAuthError) {
        SRTlib.send('], "end": "errorToResponse"},');

    return {
      code: 401,
      message: err.message
    };
  }
  if (err instanceof ProviderApiError) {
    if (err.statusCode >= 500) {
            SRTlib.send('], "end": "errorToResponse"},');

      return {
        code: 502,
        message: err.message
      };
    }
    if (err.statusCode >= 400) {
            SRTlib.send('], "end": "errorToResponse"},');

      return {
        code: 424,
        message: err.message
      };
    }
  }
    SRTlib.send('], "end": "errorToResponse"},');

}
module.exports = {
  ProviderAuthError,
  ProviderApiError,
  errorToResponse
};
