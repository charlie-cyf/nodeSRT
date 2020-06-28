const SRTlib = require('SRT-util');

const getTimeStamp = require('@uppy/utils/lib/getTimeStamp');
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
const debugLogger = {
  debug: (...args) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"debugLogger.debug","fileName":"${__filename}","paramsNumber":1},`);

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
