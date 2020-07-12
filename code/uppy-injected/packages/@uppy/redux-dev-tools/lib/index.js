var _class, _temp;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('@uppy/core'),
    Plugin = _require.Plugin;

module.exports = (_temp = _class = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose(ReduxDevTools, _Plugin);

  function ReduxDevTools(uppy, opts) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"/packages/@uppy/redux-dev-tools/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"ReduxDevTools\",\"superClass\":\"Plugin\"}},");
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.type = 'debugger';
    _this.id = _this.opts.id || 'ReduxDevTools';
    _this.title = 'Redux DevTools';
    var defaultOptions = {};
    _this.opts = _extends({}, defaultOptions, opts);
    _this.handleStateChange = _this.handleStateChange.bind(_assertThisInitialized(_this));
    _this.initDevTools = _this.initDevTools.bind(_assertThisInitialized(_this));
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = ReduxDevTools.prototype;

  _proto.handleStateChange = function handleStateChange(prevState, nextState, patch) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handleStateChange\",\"fileName\":\"/packages/@uppy/redux-dev-tools/src/index.js\",\"paramsNumber\":3,\"classInfo\":{\"className\":\"ReduxDevTools\",\"superClass\":\"Plugin\"}},");
    this.devTools.send('UPPY_STATE_UPDATE', nextState);
    SRTlib.send('{"type":"FUNCTIONEND","function":"handleStateChange"},');
  };

  _proto.initDevTools = function initDevTools() {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"initDevTools\",\"fileName\":\"/packages/@uppy/redux-dev-tools/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"ReduxDevTools\",\"superClass\":\"Plugin\"}},");
    this.devTools = window.devToolsExtension.connect();
    this.devToolsUnsubscribe = this.devTools.subscribe(function (message) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.devToolsUnsubscribe.devTools.subscribe\",\"fileName\":\"/packages/@uppy/redux-dev-tools/src/index.js\",\"paramsNumber\":1},");

      if (message.type === 'DISPATCH') {
        console.log(message.payload.type);

        switch (message.payload.type) {
          case 'RESET':
            SRTlib.send('{"type":"FUNCTIONEND","function":"initDevTools"},');
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.devToolsUnsubscribe.devTools.subscribe"},');

            _this2.uppy.reset();

            return;

          case 'IMPORT_STATE':
            {
              var computedStates = message.payload.nextLiftedState.computedStates;
              _this2.uppy.store.state = _extends({}, _this2.uppy.getState(), computedStates[computedStates.length - 1].state);

              _this2.uppy.updateAll(_this2.uppy.getState());

              SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.devToolsUnsubscribe.devTools.subscribe"},');
              return;
            }

          case 'JUMP_TO_STATE':
          case 'JUMP_TO_ACTION':
            _this2.uppy.store.state = _extends({}, _this2.uppy.getState(), JSON.parse(message.state));

            _this2.uppy.updateAll(_this2.uppy.getState());

        }
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.devToolsUnsubscribe.devTools.subscribe"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"initDevTools"},');
  };

  _proto.install = function install() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"install\",\"fileName\":\"/packages/@uppy/redux-dev-tools/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"ReduxDevTools\",\"superClass\":\"Plugin\"}},");
    this.withDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;

    if (this.withDevTools) {
      this.initDevTools();
      this.uppy.on('state-update', this.handleStateChange);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');
  };

  _proto.uninstall = function uninstall() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uninstall\",\"fileName\":\"/packages/@uppy/redux-dev-tools/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"ReduxDevTools\",\"superClass\":\"Plugin\"}},");

    if (this.withDevTools) {
      this.devToolsUnsubscribe();
      this.uppy.off('state-update', this.handleStateUpdate);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');
  };

  return ReduxDevTools;
}(Plugin), _class.VERSION = require('../package.json').version, _temp);