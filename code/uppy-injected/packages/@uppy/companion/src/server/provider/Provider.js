var SRTlib = require('SRT-util');
class Provider {
  constructor(options) {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.constructor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.needsCookieAuth = false;
        SRTlib.send("]},");

    return this;
        SRTlib.send("]},");

  }
  static getExtraConfig() {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.getExtraConfig", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return {};
        SRTlib.send("]},");

  }
  list(options, cb) {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.list", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    throw new Error('method not implemented');
        SRTlib.send("]},");

  }
  download(options, cb) {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.download", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    throw new Error('method not implemented');
        SRTlib.send("]},");

  }
  thumbnail(options, cb) {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.thumbnail", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    throw new Error('method not implemented');
        SRTlib.send("]},");

  }
  size(options, cb) {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.size", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    throw new Error('method not implemented');
        SRTlib.send("]},");

  }
  static get authProvider() {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.authProvider", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return '';
        SRTlib.send("]},");

  }
}
module.exports = Provider;
