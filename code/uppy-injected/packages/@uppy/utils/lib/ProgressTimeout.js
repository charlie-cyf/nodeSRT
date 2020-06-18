var SRTlib = require('SRT-util');

var ProgressTimeout = /*#__PURE__*/function () {
  function ProgressTimeout(timeout, timeoutHandler) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    this._timeout = timeout;
    this._onTimedOut = timeoutHandler;
    this._isDone = false;
    this._aliveTimer = null;
    this._onTimedOut = this._onTimedOut.bind(this);
    SRTlib.send("]},");
  }

  var _proto = ProgressTimeout.prototype;

  _proto.progress = function progress() {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

    if (this._isDone) {
      SRTlib.send("]},");
      return;
    }

    if (this._timeout > 0) {
      if (this._aliveTimer) clearTimeout(this._aliveTimer);
      this._aliveTimer = setTimeout(this._onTimedOut, this._timeout);
    }

    SRTlib.send("]},");
  };

  _proto.done = function done() {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey3\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

    if (this._aliveTimer) {
      clearTimeout(this._aliveTimer);
      this._aliveTimer = null;
    }

    this._isDone = true;
    SRTlib.send("]},");
  };

  return ProgressTimeout;
}();

module.exports = ProgressTimeout;