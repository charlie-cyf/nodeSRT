var SRTlib = require('SRT-util');
var _class, _temp;
function _assertThisInitialized(self) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
    SRTlib.send("]},");

  return self;
    SRTlib.send("]},");

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send("]},");

}
var _require = require('@uppy/core'), Plugin = _require.Plugin;
var _require2 = require('@uppy/companion-client'), Provider = _require2.Provider;
var ProviderViews = require('@uppy/provider-views');
var _require3 = require('preact'), h = _require3.h;
module.exports = (_temp = _class = (function (_Plugin) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(Dropbox, _Plugin);
  function Dropbox(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this;
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.id = _this.opts.id || 'Dropbox';
    Provider.initPlugin(_assertThisInitialized(_this), opts);
    _this.title = _this.opts.title || 'Dropbox';
    _this.icon = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.icon", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

      return h("svg", {
        "aria-hidden": "true",
        focusable: "false",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("g", {
        fill: "none",
        "fill-rule": "evenodd"
      }, h("rect", {
        fill: "#0D2481",
        width: "32",
        height: "32",
        rx: "16"
      }), h("path", {
        d: "M11 8l5 3.185-5 3.186-5-3.186L11 8zm10 0l5 3.185-5 3.186-5-3.186L21 8zM6 17.556l5-3.185 5 3.185-5 3.186-5-3.186zm15-3.185l5 3.185-5 3.186-5-3.186 5-3.185zm-10 7.432l5-3.185 5 3.185-5 3.186-5-3.186z",
        fill: "#FFF",
        "fill-rule": "nonzero"
      })));
            SRTlib.send("]},");

    };
    _this.provider = new Provider(uppy, {
      companionUrl: _this.opts.companionUrl,
      companionHeaders: _this.opts.companionHeaders || _this.opts.serverHeaders,
      provider: 'dropbox',
      pluginId: _this.id
    });
    _this.onFirstRender = _this.onFirstRender.bind(_assertThisInitialized(_this));
    _this.render = _this.render.bind(_assertThisInitialized(_this));
        SRTlib.send("]},");

    return _this;
        SRTlib.send("]},");

  }
  var _proto = Dropbox.prototype;
  _proto.install = function install() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.install.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.view = new ProviderViews(this, {
      provider: this.provider
    });
    this.setPluginState({
      authenticated: false,
      files: [],
      folders: [],
      directories: [],
      activeRow: -1,
      filterInput: '',
      isSearchVisible: false
    });
    var target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
        SRTlib.send("]},");

  };
  _proto.uninstall = function uninstall() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uninstall.uninstall", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.view.tearDown();
    this.unmount();
        SRTlib.send("]},");

  };
  _proto.onFirstRender = function onFirstRender() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onFirstRender.onFirstRender", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return this.view.getFolder();
        SRTlib.send("]},");

  };
  _proto.render = function render(state) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.render.render", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return this.view.render(state);
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return Dropbox;
    SRTlib.send("]},");

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
