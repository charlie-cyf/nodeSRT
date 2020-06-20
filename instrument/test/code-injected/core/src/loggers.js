var SRTlib = require('SRT-util');
const getTimeStamp = require('@uppy/utils/lib/getTimeStamp');
const justErrorsLogger = {
  debug: (...args) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

  },
  warn: (...args) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

  },
  error: (...args) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return console.error(`[Uppy] [${getTimeStamp()}]`, ...args);
        SRTlib.send("]},");

  }
};
const debugLogger = {
  debug: (...args) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const debug = console.debug || console.log;
    debug.call(console, `[Uppy] [${getTimeStamp()}]`, ...args);
        SRTlib.send("]},");

  },
  warn: (...args) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return console.warn(`[Uppy] [${getTimeStamp()}]`, ...args);
        SRTlib.send("]},");

  },
  error: (...args) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return console.error(`[Uppy] [${getTimeStamp()}]`, ...args);
        SRTlib.send("]},");

  }
};
module.exports = {
  justErrorsLogger,
  debugLogger
};
