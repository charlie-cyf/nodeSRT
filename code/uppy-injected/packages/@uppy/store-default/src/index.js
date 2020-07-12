const SRTlib = require('SRT-util');

class DefaultStore {
  static VERSION = require('../package.json').version
  constructor() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/store-default/src/index.js","paramsNumber":0,"classInfo":{"className":"DefaultStore"}},`);

    this.state = {};
    this.callbacks = [];
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  getState() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getState","fileName":"/packages/@uppy/store-default/src/index.js","paramsNumber":0,"classInfo":{"className":"DefaultStore"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getState"},');

    return this.state;
        SRTlib.send('{"type":"FUNCTIONEND","function":"getState"},');

  }
  setState(patch) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setState","fileName":"/packages/@uppy/store-default/src/index.js","paramsNumber":1,"classInfo":{"className":"DefaultStore"}},`);

    const prevState = Object.assign({}, this.state);
    const nextState = Object.assign({}, this.state, patch);
    this.state = nextState;
    this._publish(prevState, nextState, patch);
        SRTlib.send('{"type":"FUNCTIONEND","function":"setState"},');

  }
  subscribe(listener) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"subscribe","fileName":"/packages/@uppy/store-default/src/index.js","paramsNumber":1,"classInfo":{"className":"DefaultStore"}},`);

    this.callbacks.push(listener);
        SRTlib.send('{"type":"FUNCTIONEND","function":"subscribe"},');

    return () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"/packages/@uppy/store-default/src/index.js","paramsNumber":0},`);

      this.callbacks.splice(this.callbacks.indexOf(listener), 1);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"subscribe"},');

  }
  _publish(...args) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_publish","fileName":"/packages/@uppy/store-default/src/index.js","paramsNumber":1,"classInfo":{"className":"DefaultStore"}},`);

    this.callbacks.forEach(listener => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"callbacks.forEach","fileName":"/packages/@uppy/store-default/src/index.js","paramsNumber":1},`);

      listener(...args);
            SRTlib.send('{"type":"FUNCTIONEND","function":"callbacks.forEach"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_publish"},');

  }
}
module.exports = function defaultStore() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/store-default/src/index.js","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return new DefaultStore();
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
