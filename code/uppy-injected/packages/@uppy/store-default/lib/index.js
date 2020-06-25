const SRTlib = require('SRT-util');
function _extends() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"${__filename}","paramsNumber":0},`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends","fileName":"${__filename}","paramsNumber":1},`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

    return target;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  return _extends.apply(this, arguments);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');

}
/**
* Default store that keeps state in a simple object.
*/
var DefaultStore = (function () {
  /*#__PURE__*/
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DefaultStore","fileName":"${__filename}","paramsNumber":0},`);

  function DefaultStore() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"DefaultStore","fileName":"${__filename}","paramsNumber":0},`);

    this.state = {};
    this.callbacks = [];
        SRTlib.send('{"type":"FUNCTIONEND","function":"DefaultStore","paramsNumber":0},');

  }
  var _proto = DefaultStore.prototype;
  _proto.getState = function getState() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DefaultStore._proto.getState.getState","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"DefaultStore._proto.getState.getState"},');

    return this.state;
        SRTlib.send('{"type":"FUNCTIONEND","function":"DefaultStore._proto.getState.getState"},');

  };
  _proto.setState = function setState(patch) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DefaultStore._proto.setState.setState","fileName":"${__filename}","paramsNumber":1},`);

    var prevState = _extends({}, this.state);
    var nextState = _extends({}, this.state, patch);
    this.state = nextState;
    this._publish(prevState, nextState, patch);
        SRTlib.send('{"type":"FUNCTIONEND","function":"DefaultStore._proto.setState.setState"},');

  };
  _proto.subscribe = function subscribe(listener) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DefaultStore._proto.subscribe.subscribe","fileName":"${__filename}","paramsNumber":1},`);

    var _this = this;
    this.callbacks.push(listener);
        SRTlib.send('{"type":"FUNCTIONEND","function":"DefaultStore._proto.subscribe.subscribe"},');

    return function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DefaultStore._proto.subscribe.subscribe.ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

      // Remove the listener.
      _this.callbacks.splice(_this.callbacks.indexOf(listener), 1);
            SRTlib.send('{"type":"FUNCTIONEND","function":"DefaultStore._proto.subscribe.subscribe.ReturnStatement"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"DefaultStore._proto.subscribe.subscribe"},');

  };
  _proto._publish = function _publish() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DefaultStore._proto._publish._publish","fileName":"${__filename}","paramsNumber":0},`);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    this.callbacks.forEach(function (listener) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DefaultStore._proto._publish._publish.callbacks.forEach","fileName":"${__filename}","paramsNumber":1},`);

      listener.apply(void 0, args);
            SRTlib.send('{"type":"FUNCTIONEND","function":"DefaultStore._proto._publish._publish.callbacks.forEach"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"DefaultStore._proto._publish._publish"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"DefaultStore"},');

  return DefaultStore;
    SRTlib.send('{"type":"FUNCTIONEND","function":"DefaultStore"},');

})();
DefaultStore.VERSION = require('../package.json').version;
module.exports = function defaultStore() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.defaultStore","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.defaultStore"},');

  return new DefaultStore();
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.defaultStore"},');

};
