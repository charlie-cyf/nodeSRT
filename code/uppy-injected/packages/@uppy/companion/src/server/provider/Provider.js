var SRTlib = require('SRT-util');
class Provider {
  constructor(options) {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.constructor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.needsCookieAuth = false;
        SRTlib.send('], "end": "constructor"},');

    return this;
        SRTlib.send('], "end": "constructor"},');

  }
  static getExtraConfig() {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.getExtraConfig", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "getExtraConfig"},');

    return {};
        SRTlib.send('], "end": "getExtraConfig"},');

  }
  list(options, cb) {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.list", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send('], "end": "list"},');

    throw new Error('method not implemented');
        SRTlib.send('], "end": "list"},');

  }
  download(options, cb) {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.download", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send('], "end": "download"},');

    throw new Error('method not implemented');
        SRTlib.send('], "end": "download"},');

  }
  thumbnail(options, cb) {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.thumbnail", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send('], "end": "thumbnail"},');

    throw new Error('method not implemented');
        SRTlib.send('], "end": "thumbnail"},');

  }
  size(options, cb) {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.size", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send('], "end": "size"},');

    throw new Error('method not implemented');
        SRTlib.send('], "end": "size"},');

  }
  static get authProvider() {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.authProvider", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "authProvider"},');

    return '';
        SRTlib.send('], "end": "authProvider"},');

  }
}
module.exports = Provider;
