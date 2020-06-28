const SRTlib = require('SRT-util');

const getTimeStamp = require('@uppy/utils/lib/getTimeStamp');
// Swallow all logs, except errors.
// default if logger is not set or debug: false
const justErrorsLogger = {
  debug: (...args) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"justErrorsLogger.debug","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"justErrorsLogger.debug"},');

  },
  warn: (...args) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"justErrorsLogger.warn","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"justErrorsLogger.warn"},');

  },
  error: (...args) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"justErrorsLogger.error","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"justErrorsLogger.error"},');

    return console.error(`[Uppy] [${getTimeStamp()}]`, ...args);
        SRTlib.send('{"type":"FUNCTIONEND","function":"justErrorsLogger.error"},');

  }
};
// Print logs to console with namespace + timestamp,
// set by logger: Uppy.debugLogger or debug: true
const debugLogger = {
  debug: (...args) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"debugLogger.debug","fileName":"${__filename}","paramsNumber":1},`);

    // IE 10 doesn’t support console.debug
    const debug = console.debug || console.log;
    debug.call(console, `[Uppy] [${getTimeStamp()}]`, ...args);
        SRTlib.send('{"type":"FUNCTIONEND","function":"debugLogger.debug"},');

  },
  warn: (...args) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"debugLogger.warn","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"debugLogger.warn"},');

    return console.warn(`[Uppy] [${getTimeStamp()}]`, ...args);
        SRTlib.send('{"type":"FUNCTIONEND","function":"debugLogger.warn"},');

  },
  error: (...args) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"debugLogger.error","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"debugLogger.error"},');

    return console.error(`[Uppy] [${getTimeStamp()}]`, ...args);
        SRTlib.send('{"type":"FUNCTIONEND","function":"debugLogger.error"},');

  }
};
module.exports = {
  justErrorsLogger,
  debugLogger
};
