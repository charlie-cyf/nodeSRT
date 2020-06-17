var SRTlib = require('SRT-util');
class Provider {
  constructor(options) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.needsCookieAuth = false;
        SRTlib.send("]},");

    return this;
        SRTlib.send("]},");

  }
  static getExtraConfig() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return {};
        SRTlib.send("]},");

  }
  list(options, cb) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    throw new Error('method not implemented');
        SRTlib.send("]},");

  }
  download(options, cb) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    throw new Error('method not implemented');
        SRTlib.send("]},");

  }
  thumbnail(options, cb) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    throw new Error('method not implemented');
        SRTlib.send("]},");

  }
  size(options, cb) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    throw new Error('method not implemented');
        SRTlib.send("]},");

  }
  static get authProvider() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return '';
        SRTlib.send("]},");

  }
}
module.exports = Provider;
