const SRTlib = require('SRT-util');

var ProgressTimeout = (function () {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ProgressTimeout","fileName":"${__filename}","paramsNumber":0},`);

  function ProgressTimeout(timeout, timeoutHandler) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"ProgressTimeout","fileName":"${__filename}","paramsNumber":2},`);

    this._timeout = timeout;
    this._onTimedOut = timeoutHandler;
    this._isDone = false;
    this._aliveTimer = null;
    this._onTimedOut = this._onTimedOut.bind(this);
        SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressTimeout","paramsNumber":2},');

  }
  var _proto = ProgressTimeout.prototype;
  _proto.progress = function progress() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ProgressTimeout._proto.progress","fileName":"${__filename}","paramsNumber":0},`);

    if (this._isDone) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressTimeout._proto.progress"},');

      return;
    }
    if (this._timeout > 0) {
      if (this._aliveTimer) clearTimeout(this._aliveTimer);
      this._aliveTimer = setTimeout(this._onTimedOut, this._timeout);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressTimeout._proto.progress"},');

  };
  _proto.done = function done() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ProgressTimeout._proto.done","fileName":"${__filename}","paramsNumber":0},`);

    if (this._aliveTimer) {
      clearTimeout(this._aliveTimer);
      this._aliveTimer = null;
    }
    this._isDone = true;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressTimeout._proto.done"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressTimeout"},');

  return ProgressTimeout;
    SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressTimeout"},');

})();
module.exports = ProgressTimeout;
