var SRTlib = require('SRT-util');
class ProviderApiError extends Error {
  constructor(message, statusCode) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    super(message);
    this.name = 'ProviderApiError';
    this.statusCode = statusCode;
    this.isAuthError = false;
        SRTlib.send("]},");

  }
}
class ProviderAuthError extends ProviderApiError {
  constructor() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    super('invalid access token detected by Provider', 401);
    this.name = 'AuthError';
    this.isAuthError = true;
        SRTlib.send("]},");

  }
}
function errorToResponse(err) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (err instanceof ProviderAuthError && err.isAuthError) {
        SRTlib.send("]},");

    return {
      code: 401,
      message: err.message
    };
  }
  if (err instanceof ProviderApiError) {
    if (err.statusCode >= 500) {
            SRTlib.send("]},");

      return {
        code: 502,
        message: err.message
      };
    }
    if (err.statusCode >= 400) {
            SRTlib.send("]},");

      return {
        code: 424,
        message: err.message
      };
    }
  }
    SRTlib.send("]},");

}
module.exports = {
  ProviderAuthError,
  ProviderApiError,
  errorToResponse
};
