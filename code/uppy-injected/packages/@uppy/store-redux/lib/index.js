var SRTlib = require('SRT-util');
function _extends() {
    SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{ "anonymous": true, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send('], "end": "_extends"},');

    return target;
        SRTlib.send('], "end": "_extends"},');

  });
    SRTlib.send('], "end": "_extends"},');

  return _extends.apply(this, arguments);
    SRTlib.send('], "end": "_extends"},');

}
var cuid = require('cuid');
var STATE_UPDATE = 'uppy/STATE_UPDATE';
var defaultSelector = function defaultSelector(id) {
    SRTlib.send(`{ "anonymous": false, "function": "defaultSelector", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "defaultSelector"},');

  return function (state) {
        SRTlib.send(`{ "anonymous": true, "function": "defaultSelector.defaultSelector.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "defaultSelector.defaultSelector.ReturnStatement"},');

    return state.uppy[id];
        SRTlib.send('], "end": "defaultSelector.defaultSelector.ReturnStatement"},');

  };
    SRTlib.send('], "end": "defaultSelector"},');

};
var ReduxStore = (function () {
    SRTlib.send(`{ "anonymous": true, "function": "ReduxStore", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  function ReduxStore(opts) {
        SRTlib.send(`{ "anonymous": false, "function": "ReduxStore", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this._store = opts.store;
    this._id = opts.id || cuid();
    this._selector = opts.selector || defaultSelector(this._id);
    this.setState({});
        SRTlib.send('], "end": "ReduxStore"},');

  }
  var _proto = ReduxStore.prototype;
  _proto.setState = function setState(patch) {
        SRTlib.send(`{ "anonymous": true, "function": "ReduxStore._proto.setState.setState", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this._store.dispatch({
      type: STATE_UPDATE,
      id: this._id,
      payload: patch
    });
        SRTlib.send('], "end": "ReduxStore._proto.setState.setState"},');

  };
  _proto.getState = function getState() {
        SRTlib.send(`{ "anonymous": true, "function": "ReduxStore._proto.getState.getState", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "ReduxStore._proto.getState.getState"},');

    return this._selector(this._store.getState());
        SRTlib.send('], "end": "ReduxStore._proto.getState.getState"},');

  };
  _proto.subscribe = function subscribe(cb) {
        SRTlib.send(`{ "anonymous": true, "function": "ReduxStore._proto.subscribe.subscribe", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this = this;
    var prevState = this.getState();
        SRTlib.send('], "end": "ReduxStore._proto.subscribe.subscribe"},');

    return this._store.subscribe(function () {
            SRTlib.send(`{ "anonymous": true, "function": "ReduxStore._proto.subscribe.subscribe.ReturnStatement._store.subscribe", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var nextState = _this.getState();
      if (prevState !== nextState) {
        var patch = getPatch(prevState, nextState);
        cb(prevState, nextState, patch);
        prevState = nextState;
      }
            SRTlib.send('], "end": "ReduxStore._proto.subscribe.subscribe.ReturnStatement._store.subscribe"},');

    });
        SRTlib.send('], "end": "ReduxStore._proto.subscribe.subscribe"},');

  };
    SRTlib.send('], "end": "ReduxStore"},');

  return ReduxStore;
    SRTlib.send('], "end": "ReduxStore"},');

})();
ReduxStore.VERSION = require('../package.json').version;
function getPatch(prev, next) {
    SRTlib.send(`{ "anonymous": false, "function": "getPatch", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  var nextKeys = Object.keys(next);
  var patch = {};
  nextKeys.forEach(function (k) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (prev[k] !== next[k]) patch[k] = next[k];
        SRTlib.send('], "end": "emptyKey"},');

  });
    SRTlib.send('], "end": "getPatch"},');

  return patch;
    SRTlib.send('], "end": "getPatch"},');

}
function reducer(state, action) {
    SRTlib.send(`{ "anonymous": false, "function": "reducer", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  if (state === void 0) {
    state = {};
  }
  if (action.type === STATE_UPDATE) {
    var _extends2;
    var newState = _extends({}, state[action.id], action.payload);
        SRTlib.send('], "end": "reducer"},');

    return _extends({}, state, (_extends2 = {}, _extends2[action.id] = newState, _extends2));
  }
    SRTlib.send('], "end": "reducer"},');

  return state;
    SRTlib.send('], "end": "reducer"},');

}
function middleware() {
    SRTlib.send(`{ "anonymous": false, "function": "middleware", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send('], "end": "middleware"},');

  return function () {
        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "ReturnStatement"},');

    return function (next) {
            SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "ReturnStatement.ReturnStatement"},');

      return function (action) {
                SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.ReturnStatement.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        next(action);
                SRTlib.send('], "end": "ReturnStatement.ReturnStatement.ReturnStatement"},');

      };
            SRTlib.send('], "end": "ReturnStatement.ReturnStatement"},');

    };
        SRTlib.send('], "end": "ReturnStatement"},');

  };
    SRTlib.send('], "end": "middleware"},');

}
module.exports = function createReduxStore(opts) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.createReduxStore", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "module.exports.createReduxStore"},');

  return new ReduxStore(opts);
    SRTlib.send('], "end": "module.exports.createReduxStore"},');

};
module.exports.STATE_UPDATE = STATE_UPDATE;
module.exports.reducer = reducer;
module.exports.middleware = middleware;
