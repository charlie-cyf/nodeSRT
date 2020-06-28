const SRTlib = require('SRT-util');

const NetworkError = require('@uppy/utils/lib/NetworkError');
/**
* Wrapper around window.fetch that throws a NetworkError when appropriate
*/
module.exports = function fetchWithNetworkError(...options) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return fetch(...options).catch(err => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.fetchWithNetworkError.ReturnStatement.fetch.catch","fileName":"${__filename}","paramsNumber":1},`);

    if (err.name === 'AbortError') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.fetchWithNetworkError.ReturnStatement.fetch.catch"},');

      throw err;
    } else {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.fetchWithNetworkError.ReturnStatement.fetch.catch"},');

      throw new NetworkError(err);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.fetchWithNetworkError.ReturnStatement.fetch.catch"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
