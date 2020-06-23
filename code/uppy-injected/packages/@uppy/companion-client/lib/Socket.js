var SRTlib = require('SRT-util');
var ee = require('namespace-emitter');
module.exports = (function () {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":0},`);

  function UppySocket(opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"UppySocket","fileName":"${__filename}","paramsNumber":1},`);

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"UppySocket","paramsNumber":1},');

  }
  var _proto = UppySocket.prototype;
  _proto.open = function open() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.open.open","fileName":"${__filename}","paramsNumber":0},`);

    var _this = this;
    this.socket = new WebSocket(this.opts.target);
    this.socket.onopen = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.open.open.socket.onopen","fileName":"${__filename}","paramsNumber":1},`);

      _this.isOpen = true;
      while (_this._queued.length > 0 && _this.isOpen) {
        var first = _this._queued[0];
        _this.send(first.action, first.payload);
        _this._queued = _this._queued.slice(1);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.open.open.socket.onopen"},');

    };
    this.socket.onclose = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.open.open.socket.onclose","fileName":"${__filename}","paramsNumber":1},`);

      _this.isOpen = false;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.open.open.socket.onclose"},');

    };
    this.socket.onmessage = this._handleMessage;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.open.open"},');

  };
  _proto.close = function close() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.close.close","fileName":"${__filename}","paramsNumber":0},`);

    if (this.socket) {
      this.socket.close();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.close.close"},');

  };
  _proto.send = function send(action, payload) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.send.send","fileName":"${__filename}","paramsNumber":2},`);

    if (!this.isOpen) {
      this._queued.push({
        action: action,
        payload: payload
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.send.send"},');

      return;
    }
    this.socket.send(JSON.stringify({
      action: action,
      payload: payload
    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.send.send"},');

  };
  _proto.on = function on(action, handler) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.on.on","fileName":"${__filename}","paramsNumber":2},`);

    this.emitter.on(action, handler);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.on.on"},');

  };
  _proto.emit = function emit(action, payload) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.emit.emit","fileName":"${__filename}","paramsNumber":2},`);

    this.emitter.emit(action, payload);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.emit.emit"},');

  };
  _proto.once = function once(action, handler) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.once.once","fileName":"${__filename}","paramsNumber":2},`);

    this.emitter.once(action, handler);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.once.once"},');

  };
  _proto._handleMessage = function _handleMessage(e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto._handleMessage._handleMessage","fileName":"${__filename}","paramsNumber":1},`);

    try {
      var message = JSON.parse(e.data);
      this.emit(message.action, message.payload);
    } catch (err) {
      console.log(err);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._handleMessage._handleMessage"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return UppySocket;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

})();
