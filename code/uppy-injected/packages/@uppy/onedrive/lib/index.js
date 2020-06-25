const SRTlib = require('SRT-util');
var _class, _temp;
function _assertThisInitialized(self) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_assertThisInitialized","fileName":"${__filename}","paramsNumber":1},`);

  if (self === void 0) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');

    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');

  return self;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized","paramsNumber":1},');

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');

}
var _require = require('@uppy/core'), Plugin = _require.Plugin;
var _require2 = require('@uppy/companion-client'), Provider = _require2.Provider;
var ProviderViews = require('@uppy/provider-views');
var _require3 = require('preact'), h = _require3.h;
module.exports = (_temp = _class = (function (_Plugin) {
  /*#__PURE__*/
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(OneDrive, _Plugin);
  function OneDrive(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"OneDrive","fileName":"${__filename}","paramsNumber":2},`);

    var _this;
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.id = _this.opts.id || 'OneDrive';
    Provider.initPlugin(_assertThisInitialized(_this), opts);
    _this.title = _this.opts.title || 'OneDrive';
    _this.icon = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.icon","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.icon"},');

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
        width: "32",
        height: "32",
        rx: "16",
        fill: "#0262C0"
      }), h("g", {
        fill: "#FFF",
        "fill-rule": "nonzero"
      }, h("path", {
        d: "M24.157 22s1.492-.205 1.79-1.655a2.624 2.624 0 0 0 .03-.878c-.22-1.64-1.988-2.01-1.988-2.01s.307-1.765-1.312-2.69c-1.62-.925-3.1 0-3.1 0S18.711 13 16.366 13c-3.016 0-3.519 3.448-3.519 3.448S10 16.618 10 19.14c0 2.523 2.597 2.86 2.597 2.86h11.56z"
      }), h("path", {
        d: "M9.421 19.246c0-2.197 1.606-3.159 2.871-3.472.44-1.477 1.654-3.439 4.135-3.439H16.445c1.721 0 2.79.823 3.368 1.476a3.99 3.99 0 0 1 1.147-.171h.01l.03.002C21.017 13.5 20.691 10 16.757 10c-2.69 0-3.639 2.345-3.639 2.345s-1.95-1.482-3.955.567c-1.028 1.052-.79 2.669-.79 2.669S6 15.824 6 18.412C6 20.757 8.452 21 8.452 21h1.372a3.77 3.77 0 0 1-.403-1.754z"
      }))));
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.icon"},');

    };
    _this.provider = new Provider(uppy, {
      companionUrl: _this.opts.companionUrl,
      companionHeaders: _this.opts.companionHeaders || _this.opts.serverHeaders,
      provider: 'onedrive',
      pluginId: _this.id
    });
    _this.onFirstRender = _this.onFirstRender.bind(_assertThisInitialized(_this));
    _this.render = _this.render.bind(_assertThisInitialized(_this));
        SRTlib.send('{"type":"FUNCTIONEND","function":"OneDrive"},');

    return _this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"OneDrive","paramsNumber":2},');

  }
  var _proto = OneDrive.prototype;
  _proto.install = function install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.install.install","fileName":"${__filename}","paramsNumber":0},`);

    // Set default state for Dropbox
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
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.install.install"},');

  };
  _proto.uninstall = function uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uninstall.uninstall","fileName":"${__filename}","paramsNumber":0},`);

    this.view.tearDown();
    this.unmount();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uninstall.uninstall"},');

  };
  _proto.onFirstRender = function onFirstRender() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onFirstRender.onFirstRender","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onFirstRender.onFirstRender"},');

    return this.view.getFolder();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onFirstRender.onFirstRender"},');

  };
  _proto.render = function render(state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.render.render","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render"},');

    return this.view.render(state);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');

  return OneDrive;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
