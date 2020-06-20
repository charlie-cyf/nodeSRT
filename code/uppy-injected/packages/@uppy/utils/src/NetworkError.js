var SRTlib = require('SRT-util');
class NetworkError extends Error {
  constructor(error, xhr = null) {
        SRTlib.send(`{ "anonymous": false, "function": "NetworkError.constructor", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    super(`This looks like a network error, the endpoint might be blocked by an internet provider or a firewall.\n\nSource error: [${error}]`);
    this.isNetworkError = true;
    this.request = xhr;
        SRTlib.send("]},");

  }
}
module.exports = NetworkError;
