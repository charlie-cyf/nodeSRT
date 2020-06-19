var SRTlib = require('SRT-util');
function _extends() {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send("]},");

    return target;
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

  return _extends.apply(this, arguments);
    SRTlib.send("]},");

}
var DefaultStore = (function () {
    SRTlib.send(`{ "anonymous": true, "function": "DefaultStore", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  function DefaultStore() {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.state = {};
    this.callbacks = [];
        SRTlib.send("]},");

  }
  var _proto = DefaultStore.prototype;
  _proto.getState = function getState() {
        SRTlib.send(`{ "anonymous": true, "function": "DefaultStore._proto.getState.getState", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return this.state;
        SRTlib.send("]},");

  };
  _proto.setState = function setState(patch) {
        SRTlib.send(`{ "anonymous": true, "function": "DefaultStore._proto.setState.setState", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var prevState = _extends({}, this.state);
    var nextState = _extends({}, this.state, patch);
    this.state = nextState;
    this._publish(prevState, nextState, patch);
        SRTlib.send("]},");

  };
  _proto.subscribe = function subscribe(listener) {
        SRTlib.send(`{ "anonymous": true, "function": "DefaultStore._proto.subscribe.subscribe", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this = this;
    this.callbacks.push(listener);
        SRTlib.send("]},");

    return function () {
            SRTlib.send(`{ "anonymous": true, "function": "DefaultStore._proto.subscribe.subscribe.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this.callbacks.splice(_this.callbacks.indexOf(listener), 1);
            SRTlib.send("]},");

    };
        SRTlib.send("]},");

  };
  _proto._publish = function _publish() {
        SRTlib.send(`{ "anonymous": true, "function": "DefaultStore._proto._publish._publish", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    this.callbacks.forEach(function (listener) {
            SRTlib.send(`{ "anonymous": true, "function": "DefaultStore._proto._publish._publish.callbacks.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      listener.apply(void 0, args);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return DefaultStore;
    SRTlib.send("]},");

})();
DefaultStore.VERSION = require('../package.json').version;
module.exports = function defaultStore() {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.defaultStore", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send("]},");

  return new DefaultStore();
    SRTlib.send("]},");

};
