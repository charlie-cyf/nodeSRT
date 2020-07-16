const SRTlib = require('SRT-util');

const {createAbortError} = require('./AbortController');
module.exports = function delay(ms, opts) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/utils/src/delay.js","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return new Promise((resolve, reject) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.delay.ReturnStatement.NewExpression","fileName":"/packages/@uppy/utils/src/delay.js","paramsNumber":2},`);

    if (opts && opts.signal && opts.signal.aborted) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.delay.ReturnStatement.NewExpression"},');

      return reject(createAbortError());
    }
    function onabort() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onabort","fileName":"/packages/@uppy/utils/src/delay.js","paramsNumber":0},`);

      clearTimeout(timeout);
      cleanup();
      reject(createAbortError());
            SRTlib.send('{"type":"FUNCTIONEND","function":"onabort","paramsNumber":0},');

    }
    const timeout = setTimeout(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"timeout.setTimeout","fileName":"/packages/@uppy/utils/src/delay.js","paramsNumber":0},`);

      cleanup();
      resolve();
            SRTlib.send('{"type":"FUNCTIONEND","function":"timeout.setTimeout"},');

    }, ms);
    if (opts && opts.signal) {
      opts.signal.addEventListener('abort', onabort);
    }
    function cleanup() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"cleanup","fileName":"/packages/@uppy/utils/src/delay.js","paramsNumber":0},`);

      if (opts && opts.signal) {
        opts.signal.removeEventListener('abort', onabort);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"cleanup","paramsNumber":0},');

    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.delay.ReturnStatement.NewExpression"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
