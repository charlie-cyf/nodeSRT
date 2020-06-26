var SRTlib = require('SRT-util');

var ee = require('namespace-emitter');

module.exports = /*#__PURE__*/function () {
  function UppySocket(opts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"UppySocket\"}},");
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

  var _proto = UppySocket.prototype;

  _proto.open = function open() {
    var _this = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"open\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"UppySocket\"}},");
    this.socket = new WebSocket(this.opts.target);

    this.socket.onopen = function (e) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      _this.isOpen = true;

      while (_this._queued.length > 0 && _this.isOpen) {
        var first = _this._queued[0];

        _this.send(first.action, first.payload);

        _this._queued = _this._queued.slice(1);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
    };

    this.socket.onclose = function (e) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      _this.isOpen = false;
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');
    };

    this.socket.onmessage = this._handleMessage;
    SRTlib.send('{"type":"FUNCTIONEND","function":"open"},');
  };

  _proto.close = function close() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"close\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"UppySocket\"}},");

    if (this.socket) {
      this.socket.close();
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"close"},');
  };

  _proto.send = function send(action, payload) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"send\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"UppySocket\"}},"); // attach uuid

    if (!this.isOpen) {
      this._queued.push({
        action: action,
        payload: payload
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"send"},');
      return;
    }

    this.socket.send(JSON.stringify({
      action: action,
      payload: payload
    }));
    SRTlib.send('{"type":"FUNCTIONEND","function":"send"},');
  };

  _proto.on = function on(action, handler) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"on\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"UppySocket\"}},");
    this.emitter.on(action, handler);
    SRTlib.send('{"type":"FUNCTIONEND","function":"on"},');
  };

  _proto.emit = function emit(action, payload) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"emit\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"UppySocket\"}},");
    this.emitter.emit(action, payload);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emit"},');
  };

  _proto.once = function once(action, handler) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"once\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"UppySocket\"}},");
    this.emitter.once(action, handler);
    SRTlib.send('{"type":"FUNCTIONEND","function":"once"},');
  };

  _proto._handleMessage = function _handleMessage(e) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_handleMessage\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"UppySocket\"}},");

    try {
      var message = JSON.parse(e.data);
      this.emit(message.action, message.payload);
    } catch (err) {
      console.log(err);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"_handleMessage"},');
  };

  return UppySocket;
}();