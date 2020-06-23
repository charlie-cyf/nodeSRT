var SRTlib = require('SRT-util');
const getTimeStamp = require('@uppy/utils/lib/getTimeStamp');
const justErrorsLogger = {
  debug: (...args) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  },
  warn: (...args) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  },
  error: (...args) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

    return console.error(`[Uppy] [${getTimeStamp()}]`, ...args);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

  }
};
const debugLogger = {
  debug: (...args) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);

    const debug = console.debug || console.log;
    debug.call(console, `[Uppy] [${getTimeStamp()}]`, ...args);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

  },
  warn: (...args) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

    return console.warn(`[Uppy] [${getTimeStamp()}]`, ...args);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

  },
  error: (...args) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

    return console.error(`[Uppy] [${getTimeStamp()}]`, ...args);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

  }
};
module.exports = {
  justErrorsLogger,
  debugLogger
};
