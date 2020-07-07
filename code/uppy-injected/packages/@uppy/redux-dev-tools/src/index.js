const SRTlib = require('SRT-util');

const {Plugin} = require('@uppy/core');
module.exports = class ReduxDevTools extends Plugin {
  static VERSION = require('../package.json').version
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"ReduxDevTools","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.type = 'debugger';
    this.id = this.opts.id || 'ReduxDevTools';
    this.title = 'Redux DevTools';
    const defaultOptions = {};
    this.opts = Object.assign({}, defaultOptions, opts);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.initDevTools = this.initDevTools.bind(this);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  handleStateChange(prevState, nextState, patch) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleStateChange","fileName":"${__filename}","paramsNumber":3,"classInfo":{"className":"ReduxDevTools","superClass":"Plugin"}},`);

    this.devTools.send('UPPY_STATE_UPDATE', nextState);
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleStateChange"},');

  }
  initDevTools() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"initDevTools","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ReduxDevTools","superClass":"Plugin"}},`);

    this.devTools = window.devToolsExtension.connect();
    this.devToolsUnsubscribe = this.devTools.subscribe(message => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.devToolsUnsubscribe.devTools.subscribe","fileName":"${__filename}","paramsNumber":1},`);

      if (message.type === 'DISPATCH') {
        console.log(message.payload.type);
        switch (message.payload.type) {
          case 'RESET':
                        SRTlib.send('{"type":"FUNCTIONEND","function":"initDevTools"},');

                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.devToolsUnsubscribe.devTools.subscribe"},');

            this.uppy.reset();
            return;
          case 'IMPORT_STATE':
            {
              const computedStates = message.payload.nextLiftedState.computedStates;
              this.uppy.store.state = Object.assign({}, this.uppy.getState(), computedStates[computedStates.length - 1].state);
              this.uppy.updateAll(this.uppy.getState());
                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.devToolsUnsubscribe.devTools.subscribe"},');

              return;
            }
          case 'JUMP_TO_STATE':
          case 'JUMP_TO_ACTION':
            this.uppy.store.state = Object.assign({}, this.uppy.getState(), JSON.parse(message.state));
            this.uppy.updateAll(this.uppy.getState());
        }
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.devToolsUnsubscribe.devTools.subscribe"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"initDevTools"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ReduxDevTools","superClass":"Plugin"}},`);

    this.withDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
    if (this.withDevTools) {
      this.initDevTools();
      this.uppy.on('state-update', this.handleStateChange);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

  }
  uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ReduxDevTools","superClass":"Plugin"}},`);

    if (this.withDevTools) {
      this.devToolsUnsubscribe();
      this.uppy.off('state-update', this.handleStateUpdate);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');

  }
};
