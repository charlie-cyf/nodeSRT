var SRTlib = require('SRT-util');

var getTimeStamp = require('@uppy/utils/lib/getTimeStamp');

var justErrorsLogger = {
  debug: function debug() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"justErrorsLogger.debug\",\"fileName\":\"/packages/@uppy/core/src/loggers.js\",\"paramsNumber\":1},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"justErrorsLogger.debug"},');
  },
  warn: function warn() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"justErrorsLogger.warn\",\"fileName\":\"/packages/@uppy/core/src/loggers.js\",\"paramsNumber\":1},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"justErrorsLogger.warn"},');
  },
  error: function error() {
    var _console;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"justErrorsLogger.error\",\"fileName\":\"/packages/@uppy/core/src/loggers.js\",\"paramsNumber\":1},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"justErrorsLogger.error"},');

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_console = console).error.apply(_console, ["[Uppy] [" + getTimeStamp() + "]"].concat(args));
    SRTlib.send('{"type":"FUNCTIONEND","function":"justErrorsLogger.error"},');
  }
};
var debugLogger = {
  debug: function debug() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"debugLogger.debug\",\"fileName\":\"/packages/@uppy/core/src/loggers.js\",\"paramsNumber\":1},");
    var debug = console.debug || console.log;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    debug.call.apply(debug, [console, "[Uppy] [" + getTimeStamp() + "]"].concat(args));
    SRTlib.send('{"type":"FUNCTIONEND","function":"debugLogger.debug"},');
  },
  warn: function warn() {
    var _console2;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"debugLogger.warn\",\"fileName\":\"/packages/@uppy/core/src/loggers.js\",\"paramsNumber\":1},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"debugLogger.warn"},');

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return (_console2 = console).warn.apply(_console2, ["[Uppy] [" + getTimeStamp() + "]"].concat(args));
    SRTlib.send('{"type":"FUNCTIONEND","function":"debugLogger.warn"},');
  },
  error: function error() {
    var _console3;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"debugLogger.error\",\"fileName\":\"/packages/@uppy/core/src/loggers.js\",\"paramsNumber\":1},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"debugLogger.error"},');

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return (_console3 = console).error.apply(_console3, ["[Uppy] [" + getTimeStamp() + "]"].concat(args));
    SRTlib.send('{"type":"FUNCTIONEND","function":"debugLogger.error"},');
  }
};
module.exports = {
  justErrorsLogger: justErrorsLogger,
  debugLogger: debugLogger
};