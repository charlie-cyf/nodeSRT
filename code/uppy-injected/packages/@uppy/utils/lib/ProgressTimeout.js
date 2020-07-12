var SRTlib = require('SRT-util');

var ProgressTimeout = /*#__PURE__*/function () {
  function ProgressTimeout(timeout, timeoutHandler) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"/packages/@uppy/utils/src/ProgressTimeout.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"ProgressTimeout\"}},");
    this._timeout = timeout;
    this._onTimedOut = timeoutHandler;
    this._isDone = false;
    this._aliveTimer = null;
    this._onTimedOut = this._onTimedOut.bind(this);
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
  }

  var _proto = ProgressTimeout.prototype;

  _proto.progress = function progress() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"progress\",\"fileName\":\"/packages/@uppy/utils/src/ProgressTimeout.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"ProgressTimeout\"}},");

    if (this._isDone) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"progress"},');
      return;
    }

    if (this._timeout > 0) {
      if (this._aliveTimer) clearTimeout(this._aliveTimer);
      this._aliveTimer = setTimeout(this._onTimedOut, this._timeout);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"progress"},');
  };

  _proto.done = function done() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"done\",\"fileName\":\"/packages/@uppy/utils/src/ProgressTimeout.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"ProgressTimeout\"}},");

    if (this._aliveTimer) {
      clearTimeout(this._aliveTimer);
      this._aliveTimer = null;
    }

    this._isDone = true;
    SRTlib.send('{"type":"FUNCTIONEND","function":"done"},');
  };

  return ProgressTimeout;
}();

module.exports = ProgressTimeout;