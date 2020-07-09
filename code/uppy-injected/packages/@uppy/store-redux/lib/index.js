function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SRTlib = require('SRT-util');

var cuid = require('cuid');

var STATE_UPDATE = 'uppy/STATE_UPDATE';

var defaultSelector = function defaultSelector(id) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"defaultSelector\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"defaultSelector"},');
  return function (state) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
    return state.uppy[id];
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
  };
  SRTlib.send('{"type":"FUNCTIONEND","function":"defaultSelector"},');
};

var ReduxStore = /*#__PURE__*/function () {
  function ReduxStore(opts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"ReduxStore\"}},");
    this._store = opts.store;
    this._id = opts.id || cuid();
    this._selector = opts.selector || defaultSelector(this._id);
    this.setState({});
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
  }

  var _proto = ReduxStore.prototype;

  _proto.setState = function setState(patch) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"setState\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"ReduxStore\"}},");

    this._store.dispatch({
      type: STATE_UPDATE,
      id: this._id,
      payload: patch
    });

    SRTlib.send('{"type":"FUNCTIONEND","function":"setState"},');
  };

  _proto.getState = function getState() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getState\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"ReduxStore\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"getState"},');
    return this._selector(this._store.getState());
    SRTlib.send('{"type":"FUNCTIONEND","function":"getState"},');
  };

  _proto.subscribe = function subscribe(cb) {
    var _this = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"subscribe\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"ReduxStore\"}},");
    var prevState = this.getState();
    SRTlib.send('{"type":"FUNCTIONEND","function":"subscribe"},');
    return this._store.subscribe(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement._store.subscribe\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");

      var nextState = _this.getState();

      if (prevState !== nextState) {
        var patch = getPatch(prevState, nextState);
        cb(prevState, nextState, patch);
        prevState = nextState;
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement._store.subscribe"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"subscribe"},');
  };

  return ReduxStore;
}();

ReduxStore.VERSION = require('../package.json').version;

function getPatch(prev, next) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getPatch\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
  var nextKeys = Object.keys(next);
  var patch = {};
  nextKeys.forEach(function (k) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"nextKeys.forEach\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
    if (prev[k] !== next[k]) patch[k] = next[k];
    SRTlib.send('{"type":"FUNCTIONEND","function":"nextKeys.forEach"},');
  });
  SRTlib.send('{"type":"FUNCTIONEND","function":"getPatch"},');
  return patch;
  SRTlib.send('{"type":"FUNCTIONEND","function":"getPatch","paramsNumber":2},');
}

function reducer(state, action) {
  if (state === void 0) {
    state = {};
  }

  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"reducer\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");

  if (action.type === STATE_UPDATE) {
    var _extends2;

    var newState = _extends({}, state[action.id], action.payload);

    SRTlib.send('{"type":"FUNCTIONEND","function":"reducer"},');
    return _extends({}, state, (_extends2 = {}, _extends2[action.id] = newState, _extends2));
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"reducer"},');
  return state;
  SRTlib.send('{"type":"FUNCTIONEND","function":"reducer","paramsNumber":2},');
}

function middleware() {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"middleware\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"middleware"},');
  return function () {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');
    return function (next) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey###3\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###3"},');
      return function (action) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey###2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        next(action);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###2"},');
      };
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###3"},');
    };
    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');
  };
  SRTlib.send('{"type":"FUNCTIONEND","function":"middleware","paramsNumber":0},');
}

module.exports = function createReduxStore(opts) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return new ReduxStore(opts);
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};

module.exports.STATE_UPDATE = STATE_UPDATE;
module.exports.reducer = reducer;
module.exports.middleware = middleware;