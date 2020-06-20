var SRTlib = require('SRT-util');
const preact = require('preact');
const findDOMElement = require('@uppy/utils/lib/findDOMElement');
function debounce(fn) {
    SRTlib.send(`{ "anonymous": false, "function": "debounce", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  let calling = null;
  let latestArgs = null;
    SRTlib.send("]},");

  return (...args) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    latestArgs = args;
    if (!calling) {
      calling = Promise.resolve().then(() => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        calling = null;
                SRTlib.send("]},");

        return fn(...latestArgs);
                SRTlib.send("]},");

      });
    }
        SRTlib.send("]},");

    return calling;
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

}
module.exports = class Plugin {
  constructor(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "Plugin.constructor", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.uppy = uppy;
    this.opts = opts || ({});
    this.update = this.update.bind(this);
    this.mount = this.mount.bind(this);
    this.install = this.install.bind(this);
    this.uninstall = this.uninstall.bind(this);
        SRTlib.send("]},");

  }
  getPluginState() {
        SRTlib.send(`{ "anonymous": false, "function": "Plugin.getPluginState", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const {plugins} = this.uppy.getState();
        SRTlib.send("]},");

    return plugins[this.id] || ({});
        SRTlib.send("]},");

  }
  setPluginState(update) {
        SRTlib.send(`{ "anonymous": false, "function": "Plugin.setPluginState", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const {plugins} = this.uppy.getState();
    this.uppy.setState({
      plugins: {
        ...plugins,
        [this.id]: {
          ...plugins[this.id],
          ...update
        }
      }
    });
        SRTlib.send("]},");

  }
  setOptions(newOpts) {
        SRTlib.send(`{ "anonymous": false, "function": "Plugin.setOptions", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.opts = {
      ...this.opts,
      ...newOpts
    };
    this.setPluginState();
        SRTlib.send("]},");

  }
  update(state) {
        SRTlib.send(`{ "anonymous": false, "function": "Plugin.update", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (typeof this.el === 'undefined') {
            SRTlib.send("]},");

      return;
    }
    if (this._updateUI) {
      this._updateUI(state);
    }
        SRTlib.send("]},");

  }
  afterUpdate() {
        SRTlib.send(`{ "anonymous": false, "function": "Plugin.afterUpdate", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

  }
  onMount() {
        SRTlib.send(`{ "anonymous": false, "function": "Plugin.onMount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

  }
  mount(target, plugin) {
        SRTlib.send(`{ "anonymous": false, "function": "Plugin.mount", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const callerPluginName = plugin.id;
    const targetElement = findDOMElement(target);
    if (targetElement) {
      this.isTargetDOMEl = true;
      this.rerender = state => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (!this.uppy.getPlugin(this.id)) {
                    SRTlib.send("]},");

          return;
        }
        this.el = preact.render(this.render(state), targetElement, this.el);
        this.afterUpdate();
                SRTlib.send("]},");

      };
      this._updateUI = debounce(this.rerender);
      this.uppy.log(`Installing ${callerPluginName} to a DOM element '${target}'`);
      if (this.opts.replaceTargetContent) {
        targetElement.innerHTML = '';
      }
      this.el = preact.render(this.render(this.uppy.getState()), targetElement);
      this.onMount();
            SRTlib.send("]},");

      return this.el;
    }
    let targetPlugin;
    if (typeof target === 'object' && target instanceof Plugin) {
      targetPlugin = target;
    } else if (typeof target === 'function') {
      const Target = target;
      this.uppy.iteratePlugins(plugin => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (plugin instanceof Target) {
          targetPlugin = plugin;
                    SRTlib.send("]},");

          return false;
        }
                SRTlib.send("]},");

      });
    }
    if (targetPlugin) {
      this.uppy.log(`Installing ${callerPluginName} to ${targetPlugin.id}`);
      this.parent = targetPlugin;
      this.el = targetPlugin.addTarget(plugin);
      this.onMount();
            SRTlib.send("]},");

      return this.el;
    }
    this.uppy.log(`Not installing ${callerPluginName}`);
    let message = `Invalid target option given to ${callerPluginName}.`;
    if (typeof target === 'function') {
      message += ' The given target is not a Plugin class. ' + 'Please check that you\'re not specifying a React Component instead of a plugin. ' + 'If you are using @uppy/* packages directly, make sure you have only 1 version of @uppy/core installed: ' + 'run `npm ls @uppy/core` on the command line and verify that all the versions match and are deduped correctly.';
    } else {
      message += 'If you meant to target an HTML element, please make sure that the element exists. ' + 'Check that the <script> tag initializing Uppy is right before the closing </body> tag at the end of the page. ' + '(see https://github.com/transloadit/uppy/issues/1042)\n\n' + 'If you meant to target a plugin, please confirm that your `import` statements or `require` calls are correct.';
    }
    throw new Error(message);
        SRTlib.send("]},");

  }
  render(state) {
        SRTlib.send(`{ "anonymous": false, "function": "Plugin.render", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    throw new Error('Extend the render method to add your plugin to a DOM element');
        SRTlib.send("]},");

  }
  addTarget(plugin) {
        SRTlib.send(`{ "anonymous": false, "function": "Plugin.addTarget", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    throw new Error('Extend the addTarget method to add your plugin to another plugin\'s target');
        SRTlib.send("]},");

  }
  unmount() {
        SRTlib.send(`{ "anonymous": false, "function": "Plugin.unmount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (this.isTargetDOMEl && this.el && this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);
    }
        SRTlib.send("]},");

  }
  install() {
        SRTlib.send(`{ "anonymous": false, "function": "Plugin.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

  }
  uninstall() {
        SRTlib.send(`{ "anonymous": false, "function": "Plugin.uninstall", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.unmount();
        SRTlib.send("]},");

  }
};
