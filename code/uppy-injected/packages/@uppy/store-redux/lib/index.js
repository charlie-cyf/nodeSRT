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
var cuid = require('cuid');
var STATE_UPDATE = 'uppy/STATE_UPDATE';
var defaultSelector = function defaultSelector(id) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"defaultSelector","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"defaultSelector"},');

  return function (state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"defaultSelector.defaultSelector.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultSelector.defaultSelector.ReturnStatement"},');

    return state.uppy[id];
        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultSelector.defaultSelector.ReturnStatement"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"defaultSelector"},');

};
var ReduxStore = (function () {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReduxStore","fileName":"${__filename}","paramsNumber":0},`);

  function ReduxStore(opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"ReduxStore","fileName":"${__filename}","paramsNumber":1},`);

    this._store = opts.store;
    this._id = opts.id || cuid();
    this._selector = opts.selector || defaultSelector(this._id);
    this.setState({});
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReduxStore","paramsNumber":1},');

  }
  var _proto = ReduxStore.prototype;
  _proto.setState = function setState(patch) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReduxStore._proto.setState","fileName":"${__filename}","paramsNumber":1},`);

    this._store.dispatch({
      type: STATE_UPDATE,
      id: this._id,
      payload: patch
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReduxStore._proto.setState"},');

  };
  _proto.getState = function getState() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReduxStore._proto.getState","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReduxStore._proto.getState"},');

    return this._selector(this._store.getState());
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReduxStore._proto.getState"},');

  };
  _proto.subscribe = function subscribe(cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReduxStore._proto.subscribe","fileName":"${__filename}","paramsNumber":1},`);

    var _this = this;
    var prevState = this.getState();
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReduxStore._proto.subscribe"},');

    return this._store.subscribe(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReduxStore._proto.subscribe.subscribe.ReturnStatement._store.subscribe","fileName":"${__filename}","paramsNumber":0},`);

      var nextState = _this.getState();
      if (prevState !== nextState) {
        var patch = getPatch(prevState, nextState);
        cb(prevState, nextState, patch);
        prevState = nextState;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReduxStore._proto.subscribe.subscribe.ReturnStatement._store.subscribe"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReduxStore._proto.subscribe"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"ReduxStore"},');

  return ReduxStore;
    SRTlib.send('{"type":"FUNCTIONEND","function":"ReduxStore"},');

})();
ReduxStore.VERSION = require('../package.json').version;
function getPatch(prev, next) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getPatch","fileName":"${__filename}","paramsNumber":2},`);

  var nextKeys = Object.keys(next);
  var patch = {};
  nextKeys.forEach(function (k) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"nextKeys.forEach","fileName":"${__filename}","paramsNumber":1},`);

    if (prev[k] !== next[k]) patch[k] = next[k];
        SRTlib.send('{"type":"FUNCTIONEND","function":"nextKeys.forEach"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"getPatch"},');

  return patch;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getPatch","paramsNumber":2},');

}
function reducer(state, action) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"reducer","fileName":"${__filename}","paramsNumber":2},`);

  if (state === void 0) {
    state = {};
  }
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
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"middleware","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"middleware"},');

  return function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

    return function (next) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ReturnStatement"},');

      return function (action) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.ReturnStatement.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

        next(action);
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ReturnStatement.ReturnStatement"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ReturnStatement"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"middleware","paramsNumber":0},');

}
module.exports = function createReduxStore(opts) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return new ReduxStore(opts);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
module.exports.STATE_UPDATE = STATE_UPDATE;
module.exports.reducer = reducer;
module.exports.middleware = middleware;
