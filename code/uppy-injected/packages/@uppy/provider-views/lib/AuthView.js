var SRTlib = require('SRT-util');
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send("]},");

}
var _require = require('preact'), h = _require.h, Component = _require.Component;
var AuthView = (function (_Component) {
    SRTlib.send(`{ "anonymous": true, "function": "AuthView", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(AuthView, _Component);
  function AuthView() {
        SRTlib.send(`{ "anonymous": false, "function": "AuthView", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return _Component.apply(this, arguments) || this;
        SRTlib.send("]},");

  }
  var _proto = AuthView.prototype;
  _proto.render = function render() {
        SRTlib.send(`{ "anonymous": true, "function": "AuthView._proto.render.render", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var pluginNameComponent = h("span", {
      class: "uppy-Provider-authTitleName"
    }, this.props.pluginName, h("br", null));
        SRTlib.send("]},");

    return h("div", {
      class: "uppy-Provider-auth"
    }, h("div", {
      class: "uppy-Provider-authIcon"
    }, this.props.pluginIcon()), h("div", {
      class: "uppy-Provider-authTitle"
    }, this.props.i18nArray('authenticateWithTitle', {
      pluginName: pluginNameComponent
    })), h("button", {
      type: "button",
      class: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Provider-authBtn",
      onclick: this.props.handleAuth,
      "data-uppy-super-focusable": true
    }, this.props.i18nArray('authenticateWith', {
      pluginName: this.props.pluginName
    })));
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return AuthView;
    SRTlib.send("]},");

})(Component);
module.exports = AuthView;
