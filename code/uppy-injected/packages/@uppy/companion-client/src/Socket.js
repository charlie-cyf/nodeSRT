var SRTlib = require('SRT-util');
const ee = require('namespace-emitter');
module.exports = class UppySocket {
  constructor(opts) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.opts = opts;
    this._queued = [];
    this.isOpen = false;
    this.emitter = ee();
    this._handleMessage = this._handleMessage.bind(this);
    this.close = this.close.bind(this);
    this.emit = this.emit.bind(this);
    this.on = this.on.bind(this);
    this.once = this.once.bind(this);
    this.send = this.send.bind(this);
    if (!opts || opts.autoOpen !== false) {
      this.open();
    }
        SRTlib.send("]},");

  }
  open() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.socket = new WebSocket(this.opts.target);
    this.socket.onopen = e => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this.isOpen = true;
      while (this._queued.length > 0 && this.isOpen) {
        const first = this._queued[0];
        this.send(first.action, first.payload);
        this._queued = this._queued.slice(1);
      }
            SRTlib.send("]},");

    };
    this.socket.onclose = e => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this.isOpen = false;
            SRTlib.send("]},");

    };
    this.socket.onmessage = this._handleMessage;
        SRTlib.send("]},");

  }
  close() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (this.socket) {
      this.socket.close();
    }
        SRTlib.send("]},");

  }
  send(action, payload) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports4", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (!this.isOpen) {
      this._queued.push({
        action,
        payload
      });
            SRTlib.send("]},");

      return;
    }
    this.socket.send(JSON.stringify({
      action,
      payload
    }));
        SRTlib.send("]},");

  }
  on(action, handler) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports5", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.emitter.on(action, handler);
        SRTlib.send("]},");

  }
  emit(action, payload) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports6", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.emitter.emit(action, payload);
        SRTlib.send("]},");

  }
  once(action, handler) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports7", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.emitter.once(action, handler);
        SRTlib.send("]},");

  }
  _handleMessage(e) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    try {
      const message = JSON.parse(e.data);
      this.emit(message.action, message.payload);
    } catch (err) {
      console.log(err);
    }
        SRTlib.send("]},");

  }
};
