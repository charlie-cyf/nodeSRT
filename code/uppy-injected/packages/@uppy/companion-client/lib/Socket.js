var SRTlib = require('SRT-util');

var ee = require('namespace-emitter');

module.exports = /*#__PURE__*/function () {
  function UppySocket(opts) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"UppySocket.constructor\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
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

    SRTlib.send('], "end": "constructor"},');
  }

  var _proto = UppySocket.prototype;

  _proto.open = function open() {
    var _this = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"UppySocket.open\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this.socket = new WebSocket(this.opts.target);

    this.socket.onopen = function (e) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      _this.isOpen = true;

      while (_this._queued.length > 0 && _this.isOpen) {
        var first = _this._queued[0];

        _this.send(first.action, first.payload);

        _this._queued = _this._queued.slice(1);
      }

      SRTlib.send('], "end": "emptyKey"},');
    };

    this.socket.onclose = function (e) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      _this.isOpen = false;
      SRTlib.send('], "end": "emptyKey2"},');
    };

    this.socket.onmessage = this._handleMessage;
    SRTlib.send('], "end": "open"},');
  };

  _proto.close = function close() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"UppySocket.close\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

    if (this.socket) {
      this.socket.close();
    }

    SRTlib.send('], "end": "close"},');
  };

  _proto.send = function send(action, payload) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"UppySocket.send\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");

    if (!this.isOpen) {
      this._queued.push({
        action: action,
        payload: payload
      });

      SRTlib.send('], "end": "send"},');
      return;
    }

    this.socket.send(JSON.stringify({
      action: action,
      payload: payload
    }));
    SRTlib.send('], "end": "send"},');
  };

  _proto.on = function on(action, handler) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"UppySocket.on\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    this.emitter.on(action, handler);
    SRTlib.send('], "end": "on"},');
  };

  _proto.emit = function emit(action, payload) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"UppySocket.emit\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    this.emitter.emit(action, payload);
    SRTlib.send('], "end": "emit"},');
  };

  _proto.once = function once(action, handler) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"UppySocket.once\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    this.emitter.once(action, handler);
    SRTlib.send('], "end": "once"},');
  };

  _proto._handleMessage = function _handleMessage(e) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"UppySocket._handleMessage\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

    try {
      var message = JSON.parse(e.data);
      this.emit(message.action, message.payload);
    } catch (err) {
      console.log(err);
    }

    SRTlib.send('], "end": "_handleMessage"},');
  };

  return UppySocket;
}();