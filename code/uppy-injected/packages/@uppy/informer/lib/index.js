var _class, _temp;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('@uppy/core'),
    Plugin = _require.Plugin;

var _require2 = require('preact'),
    h = _require2.h;

module.exports = (_temp = _class = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose(Informer, _Plugin);

  function Informer(uppy, opts) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"/packages/@uppy/informer/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Informer\",\"superClass\":\"Plugin\"}},");
    _this = _Plugin.call(this, uppy, opts) || this;

    _this.render = function (state) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"/packages/@uppy/informer/src/index.js\",\"paramsNumber\":1},");
      var _state$info = state.info,
          isHidden = _state$info.isHidden,
          message = _state$info.message,
          details = _state$info.details;

      function displayErrorAlert() {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"displayErrorAlert\",\"fileName\":\"/packages/@uppy/informer/src/index.js\",\"paramsNumber\":0},");
        var errorMessage = message + " \n\n " + details;
        alert(errorMessage);
        SRTlib.send('{"type":"FUNCTIONEND","function":"displayErrorAlert","paramsNumber":0},');
      }

      var handleMouseOver = function handleMouseOver() {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handleMouseOver\",\"fileName\":\"/packages/@uppy/informer/src/index.js\",\"paramsNumber\":0},");
        clearTimeout(_this.uppy.infoTimeoutID);
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleMouseOver"},');
      };

      var handleMouseLeave = function handleMouseLeave() {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handleMouseLeave\",\"fileName\":\"/packages/@uppy/informer/src/index.js\",\"paramsNumber\":0},");
        _this.uppy.infoTimeoutID = setTimeout(_this.uppy.hideInfo, 2000);
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleMouseLeave"},');
      };

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
      return h("div", {
        class: "uppy uppy-Informer",
        "aria-hidden": isHidden
      }, h("p", {
        role: "alert"
      }, message, ' ', details && h("span", {
        "aria-label": details,
        "data-microtip-position": "top-left",
        "data-microtip-size": "medium",
        role: "tooltip",
        onclick: displayErrorAlert,
        onMouseOver: handleMouseOver,
        onMouseLeave: handleMouseLeave
      }, "?")));
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    };

    _this.type = 'progressindicator';
    _this.id = _this.opts.id || 'Informer';
    _this.title = 'Informer';
    var defaultOptions = {};
    _this.opts = _extends({}, defaultOptions, opts);
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = Informer.prototype;

  _proto.install = function install() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"install\",\"fileName\":\"/packages/@uppy/informer/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Informer\",\"superClass\":\"Plugin\"}},");
    var target = this.opts.target;

    if (target) {
      this.mount(target, this);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');
  };

  return Informer;
}(Plugin), _class.VERSION = require('../package.json').version, _temp);