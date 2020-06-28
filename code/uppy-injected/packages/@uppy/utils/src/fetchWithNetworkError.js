const SRTlib = require('SRT-util');

const NetworkError = require('@uppy/utils/lib/NetworkError');
/**
* Wrapper around window.fetch that throws a NetworkError when appropriate
*/
module.exports = function fetchWithNetworkError(...options) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.fetchWithNetworkError","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.fetchWithNetworkError"},');

  return fetch(...options).catch(err => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

    if (err.name === 'AbortError') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

      throw err;
    } else {
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

      throw new NetworkError(err);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.fetchWithNetworkError"},');

};
