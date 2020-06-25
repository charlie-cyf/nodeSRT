/**
* Helper to abort upload requests if there has not been any progress for `timeout` ms.
* Create an instance using `timer = new ProgressTimeout(10000, onTimeout)`
* Call `timer.progress()` to signal that there has been progress of any kind.
* Call `timer.done()` when the upload has completed.
*/
const SRTlib = require('SRT-util');
var ProgressTimeout = (function () {
  /*#__PURE__*/
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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ProgressTimeout._proto.progress.progress","fileName":"${__filename}","paramsNumber":0},`);

    // Some browsers fire another progress event when the upload is
    // cancelled, so we have to ignore progress after the timer was
    // told to stop.
    if (this._isDone) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressTimeout._proto.progress.progress"},');

      return;
    }
    if (this._timeout > 0) {
      if (this._aliveTimer) clearTimeout(this._aliveTimer);
      this._aliveTimer = setTimeout(this._onTimedOut, this._timeout);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressTimeout._proto.progress.progress"},');

  };
  _proto.done = function done() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ProgressTimeout._proto.done.done","fileName":"${__filename}","paramsNumber":0},`);

    if (this._aliveTimer) {
      clearTimeout(this._aliveTimer);
      this._aliveTimer = null;
    }
    this._isDone = true;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressTimeout._proto.done.done"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressTimeout"},');

  return ProgressTimeout;
    SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressTimeout"},');

})();
module.exports = ProgressTimeout;
