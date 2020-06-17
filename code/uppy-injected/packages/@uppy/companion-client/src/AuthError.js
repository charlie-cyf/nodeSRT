var SRTlib = require('SRT-util');
'use strict';
class AuthError extends Error {
  constructor() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    super('Authorization required');
    this.name = 'AuthError';
    this.isAuthError = true;
        SRTlib.send("]},");

  }
}
module.exports = AuthError;
