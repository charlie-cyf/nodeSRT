const SRTlib = require('SRT-util');

const preact = require('preact');
const findDOMElement = require('@uppy/utils/lib/findDOMElement');
function debounce(fn) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"debounce","fileName":"/packages/@uppy/core/src/Plugin.js","paramsNumber":1},`);

  let calling = null;
  let latestArgs = null;
    SRTlib.send('{"type":"FUNCTIONEND","function":"debounce"},');

  return (...args) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"/packages/@uppy/core/src/Plugin.js","paramsNumber":1},`);

    latestArgs = args;
    if (!calling) {
      calling = Promise.resolve().then(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"calling.Promise.resolve.then","fileName":"/packages/@uppy/core/src/Plugin.js","paramsNumber":0},`);

        calling = null;
                SRTlib.send('{"type":"FUNCTIONEND","function":"calling.Promise.resolve.then"},');

        return fn(...latestArgs);
                SRTlib.send('{"type":"FUNCTIONEND","function":"calling.Promise.resolve.then"},');

      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

    return calling;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"debounce","paramsNumber":1},');

}
module.exports = class Plugin {
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/core/src/Plugin.js","paramsNumber":2,"classInfo":{"className":"Plugin"}},`);

    this.uppy = uppy;
    this.opts = opts || ({});
    this.update = this.update.bind(this);
    this.mount = this.mount.bind(this);
    this.install = this.install.bind(this);
    this.uninstall = this.uninstall.bind(this);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  getPluginState() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getPluginState","fileName":"/packages/@uppy/core/src/Plugin.js","paramsNumber":0,"classInfo":{"className":"Plugin"}},`);

    const {plugins} = this.uppy.getState();
        SRTlib.send('{"type":"FUNCTIONEND","function":"getPluginState"},');

    return plugins[this.id] || ({});
        SRTlib.send('{"type":"FUNCTIONEND","function":"getPluginState"},');

  }
  setPluginState(update) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setPluginState","fileName":"/packages/@uppy/core/src/Plugin.js","paramsNumber":1,"classInfo":{"className":"Plugin"}},`);

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"setPluginState"},');

  }
  setOptions(newOpts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setOptions","fileName":"/packages/@uppy/core/src/Plugin.js","paramsNumber":1,"classInfo":{"className":"Plugin"}},`);

    this.opts = {
      ...this.opts,
      ...newOpts
    };
    this.setPluginState();
        SRTlib.send('{"type":"FUNCTIONEND","function":"setOptions"},');

  }
  update(state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"update","fileName":"/packages/@uppy/core/src/Plugin.js","paramsNumber":1,"classInfo":{"className":"Plugin"}},`);

    if (typeof this.el === 'undefined') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"update"},');

      return;
    }
    if (this._updateUI) {
      this._updateUI(state);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"update"},');

  }
  afterUpdate() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"afterUpdate","fileName":"/packages/@uppy/core/src/Plugin.js","paramsNumber":0,"classInfo":{"className":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"afterUpdate"},');

  }
  onMount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onMount","fileName":"/packages/@uppy/core/src/Plugin.js","paramsNumber":0,"classInfo":{"className":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"onMount"},');

  }
  mount(target, plugin) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"mount","fileName":"/packages/@uppy/core/src/Plugin.js","paramsNumber":2,"classInfo":{"className":"Plugin"}},`);

    const callerPluginName = plugin.id;
    const targetElement = findDOMElement(target);
    if (targetElement) {
      this.isTargetDOMEl = true;
      this.rerender = state => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.rerender","fileName":"/packages/@uppy/core/src/Plugin.js","paramsNumber":1},`);

        if (!this.uppy.getPlugin(this.id)) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.rerender"},');

          return;
        }
        this.el = preact.render(this.render(state), targetElement, this.el);
        this.afterUpdate();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.rerender"},');

      };
      this._updateUI = debounce(this.rerender);
      this.uppy.log(`Installing ${callerPluginName} to a DOM element '${target}'`);
      if (this.opts.replaceTargetContent) {
        targetElement.innerHTML = '';
      }
      this.el = preact.render(this.render(this.uppy.getState()), targetElement);
      this.onMount();
            SRTlib.send('{"type":"FUNCTIONEND","function":"mount"},');

      return this.el;
    }
    let targetPlugin;
    if (typeof target === 'object' && target instanceof Plugin) {
      targetPlugin = target;
    } else if (typeof target === 'function') {
      const Target = target;
      this.uppy.iteratePlugins(plugin => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uppy.iteratePlugins","fileName":"/packages/@uppy/core/src/Plugin.js","paramsNumber":1},`);

        if (plugin instanceof Target) {
          targetPlugin = plugin;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.iteratePlugins"},');

          return false;
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.iteratePlugins"},');

      });
    }
    if (targetPlugin) {
      this.uppy.log(`Installing ${callerPluginName} to ${targetPlugin.id}`);
      this.parent = targetPlugin;
      this.el = targetPlugin.addTarget(plugin);
      this.onMount();
            SRTlib.send('{"type":"FUNCTIONEND","function":"mount"},');

      return this.el;
    }
    this.uppy.log(`Not installing ${callerPluginName}`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"mount"},');

    throw new Error(`Invalid target option given to ${callerPluginName}. Please make sure that the element
      exists on the page, or that the plugin you are targeting has been installed. Check that the <script> tag initializing Uppy
      comes at the bottom of the page, before the closing </body> tag (see https://github.com/transloadit/uppy/issues/1042).`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"mount"},');

  }
  render(state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"/packages/@uppy/core/src/Plugin.js","paramsNumber":1,"classInfo":{"className":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    throw new Error('Extend the render method to add your plugin to a DOM element');
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
  addTarget(plugin) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addTarget","fileName":"/packages/@uppy/core/src/Plugin.js","paramsNumber":1,"classInfo":{"className":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"addTarget"},');

    throw new Error('Extend the addTarget method to add your plugin to another plugin\'s target');
        SRTlib.send('{"type":"FUNCTIONEND","function":"addTarget"},');

  }
  unmount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"unmount","fileName":"/packages/@uppy/core/src/Plugin.js","paramsNumber":0,"classInfo":{"className":"Plugin"}},`);

    if (this.isTargetDOMEl && this.el && this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"unmount"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"/packages/@uppy/core/src/Plugin.js","paramsNumber":0,"classInfo":{"className":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

  }
  uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"/packages/@uppy/core/src/Plugin.js","paramsNumber":0,"classInfo":{"className":"Plugin"}},`);

    this.unmount();
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');

  }
};
