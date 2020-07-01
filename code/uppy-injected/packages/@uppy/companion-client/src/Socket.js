const SRTlib = require('SRT-util');

const ee = require('namespace-emitter');
module.exports = class UppySocket {
  constructor(opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"UppySocket"}},`);

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  open() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"open","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"UppySocket"}},`);

    this.socket = new WebSocket(this.opts.target);
    this.socket.onopen = e => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.socket.onopen","fileName":"${__filename}","paramsNumber":1},`);

      this.isOpen = true;
      while (this._queued.length > 0 && this.isOpen) {
        const first = this._queued[0];
        this.send(first.action, first.payload);
        this._queued = this._queued.slice(1);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.socket.onopen"},');

    };
    this.socket.onclose = e => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.socket.onclose","fileName":"${__filename}","paramsNumber":1},`);

      this.isOpen = false;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.socket.onclose"},');

    };
    this.socket.onmessage = this._handleMessage;
        SRTlib.send('{"type":"FUNCTIONEND","function":"open"},');

  }
  close() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"close","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"UppySocket"}},`);

    if (this.socket) {
      this.socket.close();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"close"},');

  }
  send(action, payload) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"send","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"UppySocket"}},`);

    if (!this.isOpen) {
      this._queued.push({
        action,
        payload
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"send"},');

      return;
    }
    this.socket.send(JSON.stringify({
      action,
      payload
    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"send"},');

  }
  on(action, handler) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"on","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"UppySocket"}},`);

    this.emitter.on(action, handler);
        SRTlib.send('{"type":"FUNCTIONEND","function":"on"},');

  }
  emit(action, payload) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"emit","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"UppySocket"}},`);

    this.emitter.emit(action, payload);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emit"},');

  }
  once(action, handler) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"once","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"UppySocket"}},`);

    this.emitter.once(action, handler);
        SRTlib.send('{"type":"FUNCTIONEND","function":"once"},');

  }
  _handleMessage(e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_handleMessage","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"UppySocket"}},`);

    try {
      const message = JSON.parse(e.data);
      this.emit(message.action, message.payload);
    } catch (err) {
      console.log(err);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_handleMessage"},');

  }
};
