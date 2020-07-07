function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('preact'),
    h = _require.h,
    Component = _require.Component;

var AuthView = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AuthView, _Component);

  function AuthView() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = AuthView.prototype;

  _proto.render = function render() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"render\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"AuthView\",\"superClass\":\"Component\"}},");
    var pluginNameComponent = h("span", {
      class: "uppy-Provider-authTitleName"
    }, this.props.pluginName, h("br", null));
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
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
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
  };

  return AuthView;
}(Component);

module.exports = AuthView;