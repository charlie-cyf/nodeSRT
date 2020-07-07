var _class, _temp;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('@uppy/core'),
    Plugin = _require.Plugin;

var _require2 = require('preact'),
    h = _require2.h;

module.exports = (_temp = _class = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose(ProgressBar, _Plugin);

  function ProgressBar(uppy, opts) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"ProgressBar\",\"superClass\":\"Plugin\"}},");
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.id = _this.opts.id || 'ProgressBar';
    _this.title = 'Progress Bar';
    _this.type = 'progressindicator';
    var defaultOptions = {
      target: 'body',
      replaceTargetContent: false,
      fixed: false,
      hideAfterFinish: true
    };
    _this.opts = _extends({}, defaultOptions, opts);
    _this.render = _this.render.bind(_assertThisInitialized(_this));
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = ProgressBar.prototype;

  _proto.render = function render(state) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"render\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"ProgressBar\",\"superClass\":\"Plugin\"}},");
    var progress = state.totalProgress || 0;
    var isHidden = (progress === 0 || progress === 100) && this.opts.hideAfterFinish;
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
    return h("div", {
      class: "uppy uppy-ProgressBar",
      style: {
        position: this.opts.fixed ? 'fixed' : 'initial'
      },
      "aria-hidden": isHidden
    }, h("div", {
      class: "uppy-ProgressBar-inner",
      style: {
        width: progress + '%'
      }
    }), h("div", {
      class: "uppy-ProgressBar-percentage"
    }, progress));
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
  };

  _proto.install = function install() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"install\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"ProgressBar\",\"superClass\":\"Plugin\"}},");
    var target = this.opts.target;

    if (target) {
      this.mount(target, this);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');
  };

  _proto.uninstall = function uninstall() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uninstall\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"ProgressBar\",\"superClass\":\"Plugin\"}},");
    this.unmount();
    SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');
  };

  return ProgressBar;
}(Plugin), _class.VERSION = require('../package.json').version, _temp);