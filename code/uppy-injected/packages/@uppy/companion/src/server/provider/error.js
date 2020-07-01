const SRTlib = require('SRT-util');

class ProviderApiError extends Error {
  constructor(message, statusCode) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"ProviderApiError","superClass":"Error"}},`);

    super(message);
    this.name = 'ProviderApiError';
    this.statusCode = statusCode;
    this.isAuthError = false;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
}
class ProviderAuthError extends ProviderApiError {
  constructor() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ProviderAuthError","superClass":"ProviderApiError"}},`);

    super('invalid access token detected by Provider', 401);
    this.name = 'AuthError';
    this.isAuthError = true;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
}
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

      return {
        code: 502,
        message: err.message
      };
    }
    if (err.statusCode >= 400) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"errorToResponse"},');

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
