function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SRTlib = require('SRT-util');

var preact = require('preact');

var findDOMElement = require('@uppy/utils/lib/findDOMElement');

function debounce(fn) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"debounce\",\"fileName\":\"/packages/@uppy/core/src/Plugin.js\",\"paramsNumber\":1},");
  var calling = null;
  var latestArgs = null;
  SRTlib.send('{"type":"FUNCTIONEND","function":"debounce"},');
  return function () {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement\",\"fileName\":\"/packages/@uppy/core/src/Plugin.js\",\"paramsNumber\":1},");

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    latestArgs = args;

    if (!calling) {
      calling = Promise.resolve().then(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"calling.Promise.resolve.then\",\"fileName\":\"/packages/@uppy/core/src/Plugin.js\",\"paramsNumber\":0},");
        calling = null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"calling.Promise.resolve.then"},');
        return fn.apply(void 0, latestArgs);
        SRTlib.send('{"type":"FUNCTIONEND","function":"calling.Promise.resolve.then"},');
      });
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');
    return calling;
    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');
  };
  SRTlib.send('{"type":"FUNCTIONEND","function":"debounce","paramsNumber":1},');
}

module.exports = /*#__PURE__*/function () {
  function Plugin(uppy, opts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"/packages/@uppy/core/src/Plugin.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Plugin\"}},");
    this.uppy = uppy;
    this.opts = opts || {};
    this.update = this.update.bind(this);
    this.mount = this.mount.bind(this);
    this.install = this.install.bind(this);
    this.uninstall = this.uninstall.bind(this);
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
  }

  var _proto = Plugin.prototype;

  _proto.getPluginState = function getPluginState() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getPluginState\",\"fileName\":\"/packages/@uppy/core/src/Plugin.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Plugin\"}},");

    var _this$uppy$getState = this.uppy.getState(),
        plugins = _this$uppy$getState.plugins;

    SRTlib.send('{"type":"FUNCTIONEND","function":"getPluginState"},');
    return plugins[this.id] || {};
    SRTlib.send('{"type":"FUNCTIONEND","function":"getPluginState"},');
  };

  _proto.setPluginState = function setPluginState(update) {
    var _extends2;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"setPluginState\",\"fileName\":\"/packages/@uppy/core/src/Plugin.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Plugin\"}},");

    var _this$uppy$getState2 = this.uppy.getState(),
        plugins = _this$uppy$getState2.plugins;

    this.uppy.setState({
      plugins: _extends({}, plugins, (_extends2 = {}, _extends2[this.id] = _extends({}, plugins[this.id], {}, update), _extends2))
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"setPluginState"},');
  };

  _proto.setOptions = function setOptions(newOpts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"setOptions\",\"fileName\":\"/packages/@uppy/core/src/Plugin.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Plugin\"}},");
    this.opts = _extends({}, this.opts, {}, newOpts);
    this.setPluginState();
    SRTlib.send('{"type":"FUNCTIONEND","function":"setOptions"},');
  };

  _proto.update = function update(state) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"update\",\"fileName\":\"/packages/@uppy/core/src/Plugin.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Plugin\"}},");

    if (typeof this.el === 'undefined') {
      SRTlib.send('{"type":"FUNCTIONEND","function":"update"},');
      return;
    }

    if (this._updateUI) {
      this._updateUI(state);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"update"},');
  };

  _proto.afterUpdate = function afterUpdate() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"afterUpdate\",\"fileName\":\"/packages/@uppy/core/src/Plugin.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Plugin\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"afterUpdate"},');
  };

  _proto.onMount = function onMount() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onMount\",\"fileName\":\"/packages/@uppy/core/src/Plugin.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Plugin\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"onMount"},');
  };

  _proto.mount = function mount(target, plugin) {
    var _this = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"mount\",\"fileName\":\"/packages/@uppy/core/src/Plugin.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Plugin\"}},");
    var callerPluginName = plugin.id;
    var targetElement = findDOMElement(target);

    if (targetElement) {
      this.isTargetDOMEl = true;

      this.rerender = function (state) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.rerender\",\"fileName\":\"/packages/@uppy/core/src/Plugin.js\",\"paramsNumber\":1},");

        if (!_this.uppy.getPlugin(_this.id)) {
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.rerender"},');
          return;
        }

        _this.el = preact.render(_this.render(state), targetElement, _this.el);

        _this.afterUpdate();

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.rerender"},');
      };

      this._updateUI = debounce(this.rerender);
      this.uppy.log("Installing " + callerPluginName + " to a DOM element '" + target + "'");

      if (this.opts.replaceTargetContent) {
        targetElement.innerHTML = '';
      }

      this.el = preact.render(this.render(this.uppy.getState()), targetElement);
      this.onMount();
      SRTlib.send('{"type":"FUNCTIONEND","function":"mount"},');
      return this.el;
    }

    var targetPlugin;

    if (typeof target === 'object' && target instanceof Plugin) {
      targetPlugin = target;
    } else if (typeof target === 'function') {
      var Target = target;
      this.uppy.iteratePlugins(function (plugin) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uppy.iteratePlugins\",\"fileName\":\"/packages/@uppy/core/src/Plugin.js\",\"paramsNumber\":1},");

        if (plugin instanceof Target) {
          targetPlugin = plugin;
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.iteratePlugins"},');
          return false;
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.iteratePlugins"},');
      });
    }

    if (targetPlugin) {
      this.uppy.log("Installing " + callerPluginName + " to " + targetPlugin.id);
      this.parent = targetPlugin;
      this.el = targetPlugin.addTarget(plugin);
      this.onMount();
      SRTlib.send('{"type":"FUNCTIONEND","function":"mount"},');
      return this.el;
    }

    this.uppy.log("Not installing " + callerPluginName);
    var message = "Invalid target option given to " + callerPluginName + ".";

    if (typeof target === 'function') {
      message += ' The given target is not a Plugin class. ' + 'Please check that you\'re not specifying a React Component instead of a plugin. ' + 'If you are using @uppy/* packages directly, make sure you have only 1 version of @uppy/core installed: ' + 'run `npm ls @uppy/core` on the command line and verify that all the versions match and are deduped correctly.';
    } else {
      message += 'If you meant to target an HTML element, please make sure that the element exists. ' + 'Check that the <script> tag initializing Uppy is right before the closing </body> tag at the end of the page. ' + '(see https://github.com/transloadit/uppy/issues/1042)\n\n' + 'If you meant to target a plugin, please confirm that your `import` statements or `require` calls are correct.';
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"mount"},');
    throw new Error(message);
    SRTlib.send('{"type":"FUNCTIONEND","function":"mount"},');
  };

  _proto.render = function render(state) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"render\",\"fileName\":\"/packages/@uppy/core/src/Plugin.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Plugin\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
    throw new Error('Extend the render method to add your plugin to a DOM element');
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
  };

  _proto.addTarget = function addTarget(plugin) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"addTarget\",\"fileName\":\"/packages/@uppy/core/src/Plugin.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Plugin\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"addTarget"},');
    throw new Error('Extend the addTarget method to add your plugin to another plugin\'s target');
    SRTlib.send('{"type":"FUNCTIONEND","function":"addTarget"},');
  };

  _proto.unmount = function unmount() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"unmount\",\"fileName\":\"/packages/@uppy/core/src/Plugin.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Plugin\"}},");

    if (this.isTargetDOMEl && this.el && this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"unmount"},');
  };

  _proto.install = function install() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"install\",\"fileName\":\"/packages/@uppy/core/src/Plugin.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Plugin\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');
  };

  _proto.uninstall = function uninstall() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uninstall\",\"fileName\":\"/packages/@uppy/core/src/Plugin.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Plugin\"}},");
    this.unmount();
    SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');
  };

  return Plugin;
}();