const SRTlib = require('SRT-util');
// Swallow all logs, except errors.
var getTimeStamp = require('@uppy/utils/lib/getTimeStamp');
// default if logger is not set or debug: false
// Print logs to console with namespace + timestamp,
var justErrorsLogger = {
  debug: function debug() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"justErrorsLogger.debug.debug","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"justErrorsLogger.debug.debug"},');

  },
  warn: function warn() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"justErrorsLogger.warn.warn","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"justErrorsLogger.warn.warn"},');

  },
  error: function error() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"justErrorsLogger.error.error","fileName":"${__filename}","paramsNumber":0},`);

    var _console;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"justErrorsLogger.error.error"},');

    return (_console = console).error.apply(_console, ["[Uppy] [" + getTimeStamp() + "]"].concat(args));
        SRTlib.send('{"type":"FUNCTIONEND","function":"justErrorsLogger.error.error"},');

  }
};
// set by logger: Uppy.debugLogger or debug: true
var debugLogger = {
  debug: function debug() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"debugLogger.debug.debug","fileName":"${__filename}","paramsNumber":0},`);

    // IE 10 doesn’t support console.debug
    var debug = console.debug || console.log;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    debug.call.apply(debug, [console, "[Uppy] [" + getTimeStamp() + "]"].concat(args));
        SRTlib.send('{"type":"FUNCTIONEND","function":"debugLogger.debug.debug"},');

  },
  warn: function warn() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"debugLogger.warn.warn","fileName":"${__filename}","paramsNumber":0},`);

    var _console2;
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"debugLogger.warn.warn"},');

    return (_console2 = console).warn.apply(_console2, ["[Uppy] [" + getTimeStamp() + "]"].concat(args));
        SRTlib.send('{"type":"FUNCTIONEND","function":"debugLogger.warn.warn"},');

  },
  error: function error() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"debugLogger.error.error","fileName":"${__filename}","paramsNumber":0},`);

    var _console3;
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"debugLogger.error.error"},');

    return (_console3 = console).error.apply(_console3, ["[Uppy] [" + getTimeStamp() + "]"].concat(args));
        SRTlib.send('{"type":"FUNCTIONEND","function":"debugLogger.error.error"},');

  }
};
module.exports = {
  justErrorsLogger: justErrorsLogger,
  debugLogger: debugLogger
};
