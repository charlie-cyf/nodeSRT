var SRTlib = require('SRT-util');
var _class, _temp;
function _extends() {
    SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{ "anonymous": true, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send('], "end": "_extends"},');

    return target;
        SRTlib.send('], "end": "_extends"},');

  });
    SRTlib.send('], "end": "_extends"},');

  return _extends.apply(this, arguments);
    SRTlib.send('], "end": "_extends"},');

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('], "end": "_inheritsLoose"},');

}
var _require = require('@uppy/core'), Plugin = _require.Plugin;
var _require2 = require('preact'), h = _require2.h;
module.exports = (_temp = _class = (function (_Plugin) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(Informer, _Plugin);
  function Informer(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "Informer", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this;
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.render = function (state) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.render", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var _state$info = state.info, isHidden = _state$info.isHidden, message = _state$info.message, details = _state$info.details;
      function displayErrorAlert() {
                SRTlib.send(`{ "anonymous": false, "function": "displayErrorAlert", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var errorMessage = message + " \n\n " + details;
        alert(errorMessage);
                SRTlib.send('], "end": "displayErrorAlert"},');

      }
      var handleMouseOver = function handleMouseOver() {
                SRTlib.send(`{ "anonymous": false, "function": "handleMouseOver", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        clearTimeout(_this.uppy.infoTimeoutID);
                SRTlib.send('], "end": "handleMouseOver"},');

      };
      var handleMouseLeave = function handleMouseLeave() {
                SRTlib.send(`{ "anonymous": false, "function": "handleMouseLeave", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        _this.uppy.infoTimeoutID = setTimeout(_this.uppy.hideInfo, 2000);
                SRTlib.send('], "end": "handleMouseLeave"},');

      };
            SRTlib.send('], "end": "_this.render"},');

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
            SRTlib.send('], "end": "_this.render"},');

    };
    _this.type = 'progressindicator';
    _this.id = _this.opts.id || 'Informer';
    _this.title = 'Informer';
    var defaultOptions = {};
    _this.opts = _extends({}, defaultOptions, opts);
        SRTlib.send('], "end": "Informer"},');

    return _this;
        SRTlib.send('], "end": "Informer"},');

  }
  var _proto = Informer.prototype;
  _proto.install = function install() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.install.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
        SRTlib.send('], "end": "module.exports._temp._class._proto.install.install"},');

  };
    SRTlib.send('], "end": "module.exports._temp._class"},');

  return Informer;
    SRTlib.send('], "end": "module.exports._temp._class"},');

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
