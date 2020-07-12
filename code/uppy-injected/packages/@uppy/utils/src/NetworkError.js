const SRTlib = require('SRT-util');

class NetworkError extends Error {
  constructor(error, xhr = null) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/utils/src/NetworkError.js","paramsNumber":2,"classInfo":{"className":"NetworkError","superClass":"Error"}},`);

    super(`This looks like a network error, the endpoint might be blocked by an internet provider or a firewall.\n\nSource error: [${error}]`);
    this.isNetworkError = true;
    this.request = xhr;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
}
module.exports = NetworkError;
