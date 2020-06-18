var SRTlib = require('SRT-util');

var ee = require('namespace-emitter');

module.exports = /*#__PURE__*/function () {
  function UppySocket(opts) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
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

  var _proto = UppySocket.prototype;

  _proto.open = function open() {
    var _this = this;

    SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this.socket = new WebSocket(this.opts.target);

    this.socket.onopen = function (e) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      _this.isOpen = true;

      while (_this._queued.length > 0 && _this.isOpen) {
        var first = _this._queued[0];

        _this.send(first.action, first.payload);

        _this._queued = _this._queued.slice(1);
      }

      SRTlib.send("]},");
    };

    this.socket.onclose = function (e) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      _this.isOpen = false;
      SRTlib.send("]},");
    };

    this.socket.onmessage = this._handleMessage;
    SRTlib.send("]},");
  };

  _proto.close = function close() {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports3\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

    if (this.socket) {
      this.socket.close();
    }

    SRTlib.send("]},");
  };

  _proto.send = function send(action, payload) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports4\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");

    if (!this.isOpen) {
      this._queued.push({
        action: action,
        payload: payload
      });

      SRTlib.send("]},");
      return;
    }

    this.socket.send(JSON.stringify({
      action: action,
      payload: payload
    }));
    SRTlib.send("]},");
  };

  _proto.on = function on(action, handler) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports5\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    this.emitter.on(action, handler);
    SRTlib.send("]},");
  };

  _proto.emit = function emit(action, payload) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports6\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    this.emitter.emit(action, payload);
    SRTlib.send("]},");
  };

  _proto.once = function once(action, handler) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports7\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    this.emitter.once(action, handler);
    SRTlib.send("]},");
  };

  _proto._handleMessage = function _handleMessage(e) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports8\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

    try {
      var message = JSON.parse(e.data);
      this.emit(message.action, message.payload);
    } catch (err) {
      console.log(err);
    }

    SRTlib.send("]},");
  };

  return UppySocket;
}();