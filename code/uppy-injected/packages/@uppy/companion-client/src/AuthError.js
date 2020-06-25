const SRTlib = require('SRT-util');
'use strict';
class AuthError extends Error {
  constructor() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"AuthError","superClass":"Error"}},`);

    super('Authorization required');
    this.name = 'AuthError';
    this.isAuthError = true;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
}
module.exports = AuthError;
