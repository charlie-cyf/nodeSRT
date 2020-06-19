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
var cuid = require('cuid');
var STATE_UPDATE = 'uppy/STATE_UPDATE';
var defaultSelector = function defaultSelector(id) {
    SRTlib.send(`{ "anonymous": true, "function": "defaultSelector.defaultSelector", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return function (state) {
        SRTlib.send(`{ "anonymous": true, "function": "defaultSelector.defaultSelector.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return state.uppy[id];
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

};
var ReduxStore = (function () {
    SRTlib.send(`{ "anonymous": true, "function": "ReduxStore", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  function ReduxStore(opts) {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this._store = opts.store;
    this._id = opts.id || cuid();
    this._selector = opts.selector || defaultSelector(this._id);
    this.setState({});
        SRTlib.send("]},");

  }
  var _proto = ReduxStore.prototype;
  _proto.setState = function setState(patch) {
        SRTlib.send(`{ "anonymous": true, "function": "ReduxStore._proto.setState.setState", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this._store.dispatch({
      type: STATE_UPDATE,
      id: this._id,
      payload: patch
    });
        SRTlib.send("]},");

  };
  _proto.getState = function getState() {
        SRTlib.send(`{ "anonymous": true, "function": "ReduxStore._proto.getState.getState", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return this._selector(this._store.getState());
        SRTlib.send("]},");

  };
  _proto.subscribe = function subscribe(cb) {
        SRTlib.send(`{ "anonymous": true, "function": "ReduxStore._proto.subscribe.subscribe", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this = this;
    var prevState = this.getState();
        SRTlib.send("]},");

    return this._store.subscribe(function () {
            SRTlib.send(`{ "anonymous": true, "function": "ReduxStore._proto.subscribe.subscribe.ReturnStatement._store.subscribe", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var nextState = _this.getState();
      if (prevState !== nextState) {
        var patch = getPatch(prevState, nextState);
        cb(prevState, nextState, patch);
        prevState = nextState;
      }
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return ReduxStore;
    SRTlib.send("]},");

})();
ReduxStore.VERSION = require('../package.json').version;
function getPatch(prev, next) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  var nextKeys = Object.keys(next);
  var patch = {};
  nextKeys.forEach(function (k) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (prev[k] !== next[k]) patch[k] = next[k];
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

  return patch;
    SRTlib.send("]},");

}
function reducer(state, action) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  if (state === void 0) {
    state = {};
  }
  if (action.type === STATE_UPDATE) {
    var _extends2;
    var newState = _extends({}, state[action.id], action.payload);
        SRTlib.send("]},");

    return _extends({}, state, (_extends2 = {}, _extends2[action.id] = newState, _extends2));
  }
    SRTlib.send("]},");

  return state;
    SRTlib.send("]},");

}
function middleware() {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send("]},");

  return function () {
        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return function (next) {
            SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return function (action) {
                SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.ReturnStatement.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        next(action);
                SRTlib.send("]},");

      };
            SRTlib.send("]},");

    };
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

}
module.exports = function createReduxStore(opts) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.createReduxStore", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return new ReduxStore(opts);
    SRTlib.send("]},");

};
module.exports.STATE_UPDATE = STATE_UPDATE;
module.exports.reducer = reducer;
module.exports.middleware = middleware;
