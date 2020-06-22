var SRTlib = require('SRT-util');
var _class, _temp;
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
function _assertThisInitialized(self) {
    SRTlib.send(`{ "anonymous": false, "function": "_assertThisInitialized", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (self === void 0) {
        SRTlib.send('], "end": "_assertThisInitialized"},');

    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
    SRTlib.send('], "end": "_assertThisInitialized"},');

  return self;
    SRTlib.send('], "end": "_assertThisInitialized"},');

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('], "end": "_inheritsLoose"},');

}
var _require = require('@uppy/core'), Plugin = _require.Plugin;
module.exports = (_temp = _class = (function (_Plugin) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(ReduxDevTools, _Plugin);
  function ReduxDevTools(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "ReduxDevTools", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this;
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.type = 'debugger';
    _this.id = _this.opts.id || 'ReduxDevTools';
    _this.title = 'Redux DevTools';
    var defaultOptions = {};
    _this.opts = _extends({}, defaultOptions, opts);
    _this.handleStateChange = _this.handleStateChange.bind(_assertThisInitialized(_this));
    _this.initDevTools = _this.initDevTools.bind(_assertThisInitialized(_this));
        SRTlib.send('], "end": "ReduxDevTools"},');

    return _this;
        SRTlib.send('], "end": "ReduxDevTools"},');

  }
  var _proto = ReduxDevTools.prototype;
  _proto.handleStateChange = function handleStateChange(prevState, nextState, patch) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleStateChange.handleStateChange", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    this.devTools.send('UPPY_STATE_UPDATE', nextState);
        SRTlib.send('], "end": "module.exports._temp._class._proto.handleStateChange.handleStateChange"},');

  };
  _proto.initDevTools = function initDevTools() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.initDevTools.initDevTools", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this2 = this;
    this.devTools = window.devToolsExtension.connect();
    this.devToolsUnsubscribe = this.devTools.subscribe(function (message) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.initDevTools.initDevTools.devToolsUnsubscribe.devTools.subscribe", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (message.type === 'DISPATCH') {
        console.log(message.payload.type);
        switch (message.payload.type) {
          case 'RESET':
                        SRTlib.send('], "end": "module.exports._temp._class"},');

                        SRTlib.send('], "end": "module.exports._temp._class._proto.initDevTools.initDevTools"},');

                        SRTlib.send('], "end": "module.exports._temp._class._proto.initDevTools.initDevTools.devToolsUnsubscribe.devTools.subscribe"},');

            _this2.uppy.reset();
            return;
          case 'IMPORT_STATE':
            {
              var computedStates = message.payload.nextLiftedState.computedStates;
              _this2.uppy.store.state = _extends({}, _this2.uppy.getState(), computedStates[computedStates.length - 1].state);
              _this2.uppy.updateAll(_this2.uppy.getState());
                            SRTlib.send('], "end": "module.exports._temp._class._proto.initDevTools.initDevTools.devToolsUnsubscribe.devTools.subscribe"},');

              return;
            }
          case 'JUMP_TO_STATE':
          case 'JUMP_TO_ACTION':
            _this2.uppy.store.state = _extends({}, _this2.uppy.getState(), JSON.parse(message.state));
            _this2.uppy.updateAll(_this2.uppy.getState());
        }
      }
            SRTlib.send('], "end": "module.exports._temp._class._proto.initDevTools.initDevTools.devToolsUnsubscribe.devTools.subscribe"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.initDevTools.initDevTools"},');

  };
  _proto.install = function install() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.install.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.withDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
    if (this.withDevTools) {
      this.initDevTools();
      this.uppy.on('state-update', this.handleStateChange);
    }
        SRTlib.send('], "end": "module.exports._temp._class._proto.install.install"},');

  };
  _proto.uninstall = function uninstall() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uninstall.uninstall", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (this.withDevTools) {
      this.devToolsUnsubscribe();
      this.uppy.off('state-update', this.handleStateUpdate);
    }
        SRTlib.send('], "end": "module.exports._temp._class._proto.uninstall.uninstall"},');

  };
    SRTlib.send('], "end": "module.exports._temp._class"},');

  return ReduxDevTools;
    SRTlib.send('], "end": "module.exports._temp._class"},');

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
