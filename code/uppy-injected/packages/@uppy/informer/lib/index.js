var SRTlib = require('SRT-util');
var _class, _temp;
function _extends() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"${__filename}","paramsNumber":0},`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends","fileName":"${__filename}","paramsNumber":1},`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

    return target;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  return _extends.apply(this, arguments);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');

}
var _require = require('@uppy/core'), Plugin = _require.Plugin;
var _require2 = require('preact'), h = _require2.h;
module.exports = (_temp = _class = (function (_Plugin) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(Informer, _Plugin);
  function Informer(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Informer","fileName":"${__filename}","paramsNumber":2},`);

    var _this;
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.render = function (state) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.render","fileName":"${__filename}","paramsNumber":1},`);

      var _state$info = state.info, isHidden = _state$info.isHidden, message = _state$info.message, details = _state$info.details;
      function displayErrorAlert() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"displayErrorAlert","fileName":"${__filename}","paramsNumber":0},`);

        var errorMessage = message + " \n\n " + details;
        alert(errorMessage);
                SRTlib.send('{"type":"FUNCTIONEND","function":"displayErrorAlert","paramsNumber":0},');

      }
      var handleMouseOver = function handleMouseOver() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleMouseOver","fileName":"${__filename}","paramsNumber":0},`);

        clearTimeout(_this.uppy.infoTimeoutID);
                SRTlib.send('{"type":"FUNCTIONEND","function":"handleMouseOver"},');

      };
      var handleMouseLeave = function handleMouseLeave() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleMouseLeave","fileName":"${__filename}","paramsNumber":0},`);

        _this.uppy.infoTimeoutID = setTimeout(_this.uppy.hideInfo, 2000);
                SRTlib.send('{"type":"FUNCTIONEND","function":"handleMouseLeave"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.render"},');

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
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.render"},');

    };
    _this.type = 'progressindicator';
    _this.id = _this.opts.id || 'Informer';
    _this.title = 'Informer';
    var defaultOptions = {};
    _this.opts = _extends({}, defaultOptions, opts);
        SRTlib.send('{"type":"FUNCTIONEND","function":"Informer"},');

    return _this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"Informer","paramsNumber":2},');

  }
  var _proto = Informer.prototype;
  _proto.install = function install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.install.install","fileName":"${__filename}","paramsNumber":0},`);

    var target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.install.install"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');

  return Informer;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
