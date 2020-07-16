var _class, _temp;

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('@uppy/core'),
    Plugin = _require.Plugin;

var _require2 = require('@uppy/companion-client'),
    Provider = _require2.Provider;

var DriveProviderViews = require('./DriveProviderViews');

var _require3 = require('preact'),
    h = _require3.h;

module.exports = (_temp = _class = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose(GoogleDrive, _Plugin);

  function GoogleDrive(uppy, opts) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"/packages/@uppy/google-drive/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"GoogleDrive\",\"superClass\":\"Plugin\"}},");
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.id = _this.opts.id || 'GoogleDrive';
    _this.title = _this.opts.title || 'Google Drive';
    Provider.initPlugin(_assertThisInitialized(_this), opts);
    _this.title = _this.opts.title || 'Google Drive';

    _this.icon = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.icon\",\"fileName\":\"/packages/@uppy/google-drive/src/index.js\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.icon"},');
      return h("svg", {
        "aria-hidden": "true",
        focusable: "false",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
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
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.icon"},');
    };

    _this.provider = new Provider(uppy, {
      companionUrl: _this.opts.companionUrl,
      companionHeaders: _this.opts.companionHeaders || _this.opts.serverHeaders,
      provider: 'drive',
      pluginId: _this.id
    });
    _this.onFirstRender = _this.onFirstRender.bind(_assertThisInitialized(_this));
    _this.render = _this.render.bind(_assertThisInitialized(_this));
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = GoogleDrive.prototype;

  _proto.install = function install() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"install\",\"fileName\":\"/packages/@uppy/google-drive/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"GoogleDrive\",\"superClass\":\"Plugin\"}},");
    this.view = new DriveProviderViews(this, {
      provider: this.provider
    });
    var target = this.opts.target;

    if (target) {
      this.mount(target, this);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');
  };

  _proto.uninstall = function uninstall() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uninstall\",\"fileName\":\"/packages/@uppy/google-drive/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"GoogleDrive\",\"superClass\":\"Plugin\"}},");
    this.view.tearDown();
    this.unmount();
    SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');
  };

  _proto.onFirstRender = function onFirstRender() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onFirstRender\",\"fileName\":\"/packages/@uppy/google-drive/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"GoogleDrive\",\"superClass\":\"Plugin\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"onFirstRender"},');
    return this.view.getFolder('root', '/');
    SRTlib.send('{"type":"FUNCTIONEND","function":"onFirstRender"},');
  };

  _proto.render = function render(state) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"render\",\"fileName\":\"/packages/@uppy/google-drive/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"GoogleDrive\",\"superClass\":\"Plugin\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
    return this.view.render(state);
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
  };

  return GoogleDrive;
}(Plugin), _class.VERSION = require('../package.json').version, _temp);