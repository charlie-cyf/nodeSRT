var SRTlib = require('SRT-util');
function _extends() {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send("]},");

    return target;
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

  return _extends.apply(this, arguments);
    SRTlib.send("]},");

}
var preact = require('preact');
var findDOMElement = require('@uppy/utils/lib/findDOMElement');
function debounce(fn) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  var calling = null;
  var latestArgs = null;
    SRTlib.send("]},");

  return function () {
        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    latestArgs = args;
    if (!calling) {
      calling = Promise.resolve().then(function () {
                SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        calling = null;
                SRTlib.send("]},");

        return fn.apply(void 0, latestArgs);
                SRTlib.send("]},");

      });
    }
        SRTlib.send("]},");

    return calling;
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

}
module.exports = (function () {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  function Plugin(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.uppy = uppy;
    this.opts = opts || ({});
    this.update = this.update.bind(this);
    this.mount = this.mount.bind(this);
    this.install = this.install.bind(this);
    this.uninstall = this.uninstall.bind(this);
        SRTlib.send("]},");

  }
  var _proto = Plugin.prototype;
  _proto.getPluginState = function getPluginState() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.getPluginState.getPluginState", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this$uppy$getState = this.uppy.getState(), plugins = _this$uppy$getState.plugins;
        SRTlib.send("]},");

    return plugins[this.id] || ({});
        SRTlib.send("]},");

  };
  _proto.setPluginState = function setPluginState(update) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.setPluginState.setPluginState", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _extends2;
    var _this$uppy$getState2 = this.uppy.getState(), plugins = _this$uppy$getState2.plugins;
    this.uppy.setState({
      plugins: _extends({}, plugins, (_extends2 = {}, _extends2[this.id] = _extends({}, plugins[this.id], {}, update), _extends2))
    });
        SRTlib.send("]},");

  };
  _proto.setOptions = function setOptions(newOpts) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.setOptions.setOptions", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.opts = _extends({}, this.opts, {}, newOpts);
    this.setPluginState();
        SRTlib.send("]},");

  };
  _proto.update = function update(state) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.update.update", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (typeof this.el === 'undefined') {
            SRTlib.send("]},");

      return;
    }
    if (this._updateUI) {
      this._updateUI(state);
    }
        SRTlib.send("]},");

  };
  _proto.afterUpdate = function afterUpdate() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.afterUpdate.afterUpdate", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

  };
  _proto.onMount = function onMount() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onMount.onMount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

  };
  _proto.mount = function mount(target, plugin) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.mount.mount", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this = this;
    var callerPluginName = plugin.id;
    var targetElement = findDOMElement(target);
    if (targetElement) {
      this.isTargetDOMEl = true;
      this.rerender = function (state) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.mount.mount.rerender", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (!_this.uppy.getPlugin(_this.id)) {
                    SRTlib.send("]},");

          return;
        }
        _this.el = preact.render(_this.render(state), targetElement, _this.el);
        _this.afterUpdate();
                SRTlib.send("]},");

      };
      this._updateUI = debounce(this.rerender);
      this.uppy.log("Installing " + callerPluginName + " to a DOM element '" + target + "'");
      if (this.opts.replaceTargetContent) {
        targetElement.innerHTML = '';
      }
      this.el = preact.render(this.render(this.uppy.getState()), targetElement);
      this.onMount();
            SRTlib.send("]},");

      return this.el;
    }
    var targetPlugin;
    if (typeof target === 'object' && target instanceof Plugin) {
      targetPlugin = target;
    } else if (typeof target === 'function') {
      var Target = target;
      this.uppy.iteratePlugins(function (plugin) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.mount.mount.uppy.iteratePlugins", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (plugin instanceof Target) {
          targetPlugin = plugin;
                    SRTlib.send("]},");

          return false;
        }
                SRTlib.send("]},");

      });
    }
    if (targetPlugin) {
      this.uppy.log("Installing " + callerPluginName + " to " + targetPlugin.id);
      this.parent = targetPlugin;
      this.el = targetPlugin.addTarget(plugin);
      this.onMount();
            SRTlib.send("]},");

      return this.el;
    }
    this.uppy.log("Not installing " + callerPluginName);
    var message = "Invalid target option given to " + callerPluginName + ".";
    if (typeof target === 'function') {
      message += ' The given target is not a Plugin class. ' + 'Please check that you\'re not specifying a React Component instead of a plugin. ' + 'If you are using @uppy/* packages directly, make sure you have only 1 version of @uppy/core installed: ' + 'run `npm ls @uppy/core` on the command line and verify that all the versions match and are deduped correctly.';
    } else {
      message += 'If you meant to target an HTML element, please make sure that the element exists. ' + 'Check that the <script> tag initializing Uppy is right before the closing </body> tag at the end of the page. ' + '(see https://github.com/transloadit/uppy/issues/1042)\n\n' + 'If you meant to target a plugin, please confirm that your `import` statements or `require` calls are correct.';
    }
    throw new Error(message);
        SRTlib.send("]},");

  };
  _proto.render = function render(state) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.render.render", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    throw new Error('Extend the render method to add your plugin to a DOM element');
        SRTlib.send("]},");

  };
  _proto.addTarget = function addTarget(plugin) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.addTarget.addTarget", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    throw new Error('Extend the addTarget method to add your plugin to another plugin\'s target');
        SRTlib.send("]},");

  };
  _proto.unmount = function unmount() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.unmount.unmount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (this.isTargetDOMEl && this.el && this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);
    }
        SRTlib.send("]},");

  };
  _proto.install = function install() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.install.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

  };
  _proto.uninstall = function uninstall() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uninstall.uninstall", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.unmount();
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return Plugin;
    SRTlib.send("]},");

})();
