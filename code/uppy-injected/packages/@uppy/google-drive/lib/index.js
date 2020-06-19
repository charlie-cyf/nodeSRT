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
var DriveProviderViews = require('./DriveProviderViews');
var _require3 = require('preact'), h = _require3.h;
module.exports = (_temp = _class = (function (_Plugin) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(GoogleDrive, _Plugin);
  function GoogleDrive(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this;
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.id = _this.opts.id || 'GoogleDrive';
    _this.title = _this.opts.title || 'Google Drive';
    Provider.initPlugin(_assertThisInitialized(_this), opts);
    _this.title = _this.opts.title || 'Google Drive';
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
        fill: "#4285F4",
        width: "32",
        height: "32",
        rx: "16"
      }), h("path", {
        d: "M10.324 23.3l3-5.1H25l-3 5.1H10.324zM13 18.2l-3 5.1-3-5.1 5.839-9.924 2.999 5.1L13 18.2zm11.838-.276h-6L13 8h6l5.84 9.924h-.002z",
        fill: "#FFF"
      })));
            SRTlib.send("]},");

    };
    _this.provider = new Provider(uppy, {
      companionUrl: _this.opts.companionUrl,
      companionHeaders: _this.opts.companionHeaders || _this.opts.serverHeaders,
      provider: 'drive',
      authProvider: 'google',
      pluginId: _this.id
    });
    _this.onFirstRender = _this.onFirstRender.bind(_assertThisInitialized(_this));
    _this.render = _this.render.bind(_assertThisInitialized(_this));
        SRTlib.send("]},");

    return _this;
        SRTlib.send("]},");

  }
  var _proto = GoogleDrive.prototype;
  _proto.install = function install() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.install.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.view = new DriveProviderViews(this, {
      provider: this.provider
    });
    this.setPluginState({
      authenticated: false,
      files: [],
      folders: [],
      directories: [],
      activeRow: -1,
      filterInput: '',
      isSearchVisible: false,
      hasTeamDrives: false,
      teamDrives: [],
      teamDriveId: ''
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

    return this.view.getFolder('root', '/');
        SRTlib.send("]},");

  };
  _proto.render = function render(state) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.render.render", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return this.view.render(state);
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return GoogleDrive;
    SRTlib.send("]},");

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
