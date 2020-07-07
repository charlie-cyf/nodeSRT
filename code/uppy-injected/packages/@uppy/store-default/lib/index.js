function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SRTlib = require('SRT-util');

var DefaultStore = /*#__PURE__*/function () {
  function DefaultStore() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"DefaultStore\"}},");
    this.state = {};
    this.callbacks = [];
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
  }

  var _proto = DefaultStore.prototype;

  _proto.getState = function getState() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getState\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"DefaultStore\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"getState"},');
    return this.state;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getState"},');
  };

  _proto.setState = function setState(patch) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"setState\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"DefaultStore\"}},");

    var prevState = _extends({}, this.state);

    var nextState = _extends({}, this.state, patch);

    this.state = nextState;

    this._publish(prevState, nextState, patch);

    SRTlib.send('{"type":"FUNCTIONEND","function":"setState"},');
  };

  _proto.subscribe = function subscribe(listener) {
    var _this = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"subscribe\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"DefaultStore\"}},");
    this.callbacks.push(listener);
    SRTlib.send('{"type":"FUNCTIONEND","function":"subscribe"},');
    return function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");

      _this.callbacks.splice(_this.callbacks.indexOf(listener), 1);

      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');
    };
    SRTlib.send('{"type":"FUNCTIONEND","function":"subscribe"},');
  };

  _proto._publish = function _publish() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_publish\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"DefaultStore\"}},");
    this.callbacks.forEach(function (listener) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"callbacks.forEach\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      listener.apply(void 0, args);
      SRTlib.send('{"type":"FUNCTIONEND","function":"callbacks.forEach"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_publish"},');
  };

  return DefaultStore;
}();

DefaultStore.VERSION = require('../package.json').version;

module.exports = function defaultStore() {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return new DefaultStore();
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};