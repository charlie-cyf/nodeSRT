const SRTlib = require('SRT-util');

const cuid = require('cuid');
const STATE_UPDATE = 'uppy/STATE_UPDATE';
const defaultSelector = id => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"defaultSelector","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"defaultSelector"},');

  return state => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

    return state.uppy[id];
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"defaultSelector"},');

};
class ReduxStore {
  static VERSION = require('../package.json').version
  constructor(opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"ReduxStore"}},`);

    this._store = opts.store;
    this._id = opts.id || cuid();
    this._selector = opts.selector || defaultSelector(this._id);
    this.setState({});
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  setState(patch) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setState","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"ReduxStore"}},`);

    this._store.dispatch({
      type: STATE_UPDATE,
      id: this._id,
      payload: patch
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"setState"},');

  }
  getState() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getState","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ReduxStore"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getState"},');

    return this._selector(this._store.getState());
        SRTlib.send('{"type":"FUNCTIONEND","function":"getState"},');

  }
  subscribe(cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"subscribe","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"ReduxStore"}},`);

    let prevState = this.getState();
        SRTlib.send('{"type":"FUNCTIONEND","function":"subscribe"},');

    return this._store.subscribe(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement._store.subscribe","fileName":"${__filename}","paramsNumber":0},`);

      const nextState = this.getState();
      if (prevState !== nextState) {
        const patch = getPatch(prevState, nextState);
        cb(prevState, nextState, patch);
        prevState = nextState;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement._store.subscribe"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"subscribe"},');

  }
}
function getPatch(prev, next) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getPatch","fileName":"${__filename}","paramsNumber":2},`);

  const nextKeys = Object.keys(next);
  const patch = {};
  nextKeys.forEach(k => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"nextKeys.forEach","fileName":"${__filename}","paramsNumber":1},`);

    if (prev[k] !== next[k]) patch[k] = next[k];
        SRTlib.send('{"type":"FUNCTIONEND","function":"nextKeys.forEach"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"getPatch"},');

  return patch;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getPatch","paramsNumber":2},');

}
function reducer(state = {}, action) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"reducer","fileName":"${__filename}","paramsNumber":2},`);

  if (action.type === STATE_UPDATE) {
    const newState = Object.assign({}, state[action.id], action.payload);
        SRTlib.send('{"type":"FUNCTIONEND","function":"reducer"},');

    return Object.assign({}, state, {
      [action.id]: newState
    });
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"reducer"},');

  return state;
    SRTlib.send('{"type":"FUNCTIONEND","function":"reducer","paramsNumber":2},');

}
function middleware() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"middleware","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"middleware"},');

  return () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

    return next => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey###3","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###3"},');

      return action => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey###2","fileName":"${__filename}","paramsNumber":1},`);

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
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return new ReduxStore(opts);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
module.exports.STATE_UPDATE = STATE_UPDATE;
module.exports.reducer = reducer;
module.exports.middleware = middleware;
