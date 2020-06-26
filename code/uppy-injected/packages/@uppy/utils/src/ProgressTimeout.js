/**
* Helper to abort upload requests if there has not been any progress for `timeout` ms.
* Create an instance using `timer = new ProgressTimeout(10000, onTimeout)`
* Call `timer.progress()` to signal that there has been progress of any kind.
* Call `timer.done()` when the upload has completed.
*/
const SRTlib = require('SRT-util');

class ProgressTimeout {
  constructor(timeout, timeoutHandler) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"ProgressTimeout"}},`);

    this._timeout = timeout;
    this._onTimedOut = timeoutHandler;
    this._isDone = false;
    this._aliveTimer = null;
    this._onTimedOut = this._onTimedOut.bind(this);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  progress() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"progress","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ProgressTimeout"}},`);

    // Some browsers fire another progress event when the upload is
    // cancelled, so we have to ignore progress after the timer was
    // told to stop.
    if (this._isDone) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"progress"},');

      return;
    }
    if (this._timeout > 0) {
      if (this._aliveTimer) clearTimeout(this._aliveTimer);
      this._aliveTimer = setTimeout(this._onTimedOut, this._timeout);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"progress"},');

  }
  done() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"done","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ProgressTimeout"}},`);

    if (this._aliveTimer) {
      clearTimeout(this._aliveTimer);
      this._aliveTimer = null;
    }
    this._isDone = true;
        SRTlib.send('{"type":"FUNCTIONEND","function":"done"},');

  }
}
module.exports = ProgressTimeout;
