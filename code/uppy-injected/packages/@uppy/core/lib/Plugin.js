function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SRTlib = require('SRT-util');

var preact = require('preact');

var findDOMElement = require('@uppy/utils/lib/findDOMElement');

function debounce(fn) {
  SRTlib.send("{ \"anonymous\": false, \"function\": \"debounce\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
  var calling = null;
  var latestArgs = null;
  SRTlib.send('], "end": "debounce"},');
  return function () {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    latestArgs = args;

    if (!calling) {
      calling = Promise.resolve().then(function () {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
        calling = null;
        SRTlib.send('], "end": "emptyKey"},');
        return fn.apply(void 0, latestArgs);
        SRTlib.send('], "end": "emptyKey"},');
      });
    }

    SRTlib.send('], "end": "emptyKey2"},');
    return calling;
    SRTlib.send('], "end": "emptyKey2"},');
  };
  SRTlib.send('], "end": "debounce"},');
}

module.exports = /*#__PURE__*/function () {
  function Plugin(uppy, opts) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Plugin.constructor\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    this.uppy = uppy;
    this.opts = opts || {};
    this.update = this.update.bind(this);
    this.mount = this.mount.bind(this);
    this.install = this.install.bind(this);
    this.uninstall = this.uninstall.bind(this);
    SRTlib.send('], "end": "constructor"},');
  }

  var _proto = Plugin.prototype;

  _proto.getPluginState = function getPluginState() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Plugin.getPluginState\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

    var _this$uppy$getState = this.uppy.getState(),
        plugins = _this$uppy$getState.plugins;

    SRTlib.send('], "end": "getPluginState"},');
    return plugins[this.id] || {};
    SRTlib.send('], "end": "getPluginState"},');
  };

  _proto.setPluginState = function setPluginState(update) {
    var _extends2;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"Plugin.setPluginState\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

    var _this$uppy$getState2 = this.uppy.getState(),
        plugins = _this$uppy$getState2.plugins;

    this.uppy.setState({
      plugins: _extends({}, plugins, (_extends2 = {}, _extends2[this.id] = _extends({}, plugins[this.id], {}, update), _extends2))
    });
    SRTlib.send('], "end": "setPluginState"},');
  };

  _proto.setOptions = function setOptions(newOpts) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Plugin.setOptions\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    this.opts = _extends({}, this.opts, {}, newOpts);
    this.setPluginState();
    SRTlib.send('], "end": "setOptions"},');
  };

  _proto.update = function update(state) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Plugin.update\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

    if (typeof this.el === 'undefined') {
      SRTlib.send('], "end": "update"},');
      return;
    }

    if (this._updateUI) {
      this._updateUI(state);
    }

    SRTlib.send('], "end": "update"},');
  };

  _proto.afterUpdate = function afterUpdate() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Plugin.afterUpdate\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    SRTlib.send('], "end": "afterUpdate"},');
  };

  _proto.onMount = function onMount() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Plugin.onMount\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    SRTlib.send('], "end": "onMount"},');
  };

  _proto.mount = function mount(target, plugin) {
    var _this = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"Plugin.mount\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    var callerPluginName = plugin.id;
    var targetElement = findDOMElement(target);

    if (targetElement) {
      this.isTargetDOMEl = true;

      this.rerender = function (state) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey3\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

        if (!_this.uppy.getPlugin(_this.id)) {
          SRTlib.send('], "end": "emptyKey3"},');
          return;
        }

        _this.el = preact.render(_this.render(state), targetElement, _this.el);

        _this.afterUpdate();

        SRTlib.send('], "end": "emptyKey3"},');
      };

      this._updateUI = debounce(this.rerender);
      this.uppy.log("Installing " + callerPluginName + " to a DOM element '" + target + "'");

      if (this.opts.replaceTargetContent) {
        targetElement.innerHTML = '';
      }

      this.el = preact.render(this.render(this.uppy.getState()), targetElement);
      this.onMount();
      SRTlib.send('], "end": "mount"},');
      return this.el;
    }

    var targetPlugin;

    if (typeof target === 'object' && target instanceof Plugin) {
      targetPlugin = target;
    } else if (typeof target === 'function') {
      var Target = target;
      this.uppy.iteratePlugins(function (plugin) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey4\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

        if (plugin instanceof Target) {
          targetPlugin = plugin;
          SRTlib.send('], "end": "emptyKey4"},');
          return false;
        }

        SRTlib.send('], "end": "emptyKey4"},');
      });
    }

    if (targetPlugin) {
      this.uppy.log("Installing " + callerPluginName + " to " + targetPlugin.id);
      this.parent = targetPlugin;
      this.el = targetPlugin.addTarget(plugin);
      this.onMount();
      SRTlib.send('], "end": "mount"},');
      return this.el;
    }

    this.uppy.log("Not installing " + callerPluginName);
    var message = "Invalid target option given to " + callerPluginName + ".";

    if (typeof target === 'function') {
      message += ' The given target is not a Plugin class. ' + 'Please check that you\'re not specifying a React Component instead of a plugin. ' + 'If you are using @uppy/* packages directly, make sure you have only 1 version of @uppy/core installed: ' + 'run `npm ls @uppy/core` on the command line and verify that all the versions match and are deduped correctly.';
    } else {
      message += 'If you meant to target an HTML element, please make sure that the element exists. ' + 'Check that the <script> tag initializing Uppy is right before the closing </body> tag at the end of the page. ' + '(see https://github.com/transloadit/uppy/issues/1042)\n\n' + 'If you meant to target a plugin, please confirm that your `import` statements or `require` calls are correct.';
    }

    SRTlib.send('], "end": "mount"},');
    throw new Error(message);
    SRTlib.send('], "end": "mount"},');
  };

  _proto.render = function render(state) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Plugin.render\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    SRTlib.send('], "end": "render"},');
    throw new Error('Extend the render method to add your plugin to a DOM element');
    SRTlib.send('], "end": "render"},');
  };

  _proto.addTarget = function addTarget(plugin) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Plugin.addTarget\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    SRTlib.send('], "end": "addTarget"},');
    throw new Error('Extend the addTarget method to add your plugin to another plugin\'s target');
    SRTlib.send('], "end": "addTarget"},');
  };

  _proto.unmount = function unmount() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Plugin.unmount\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

    if (this.isTargetDOMEl && this.el && this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);
    }

    SRTlib.send('], "end": "unmount"},');
  };

  _proto.install = function install() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Plugin.install\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    SRTlib.send('], "end": "install"},');
  };

  _proto.uninstall = function uninstall() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Plugin.uninstall\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this.unmount();
    SRTlib.send('], "end": "uninstall"},');
  };

  return Plugin;
}();