var SRTlib = require('SRT-util');
const getTimeStamp = require('@uppy/utils/lib/getTimeStamp');
const justErrorsLogger = {
  debug: (...args) => {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]}");

  },
  warn: (...args) => {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]}");

  },
  error: (...args) => {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    console.error(`[Uppy] [${getTimeStamp()}]`, ...args);
        SRTlib.send("]}");

  }
};
const debugLogger = {
  debug: (...args) => {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const debug = console.debug || console.log;
    debug.call(console, `[Uppy] [${getTimeStamp()}]`, ...args);
        SRTlib.send("]}");

  },
  warn: (...args) => {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    console.warn(`[Uppy] [${getTimeStamp()}]`, ...args);
        SRTlib.send("]}");

  },
  error: (...args) => {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    console.error(`[Uppy] [${getTimeStamp()}]`, ...args);
        SRTlib.send("]}");

  }
};
module.exports = {
  justErrorsLogger,
  debugLogger
};
