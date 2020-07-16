const SRTlib = require('SRT-util');

const {AbortController, AbortSignal} = require('abortcontroller-polyfill/dist/abortcontroller');
function createAbortError(message = 'Aborted') {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createAbortError","fileName":"/packages/@uppy/utils/src/AbortController.js","paramsNumber":1},`);

  try {
        SRTlib.send('{"type":"FUNCTIONEND","function":"createAbortError"},');

    return new DOMException(message, 'AbortError');
  } catch {
    const error = new Error(message);
    error.name = 'AbortError';
        SRTlib.send('{"type":"FUNCTIONEND","function":"createAbortError"},');

    return error;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"createAbortError","paramsNumber":1},');

}
exports.AbortController = AbortController;
exports.AbortSignal = AbortSignal;
exports.createAbortError = createAbortError;
