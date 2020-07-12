function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('preact'),
    h = _require.h,
    Component = _require.Component;

var UrlUI = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UrlUI, _Component);

  function UrlUI(props) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"/packages/@uppy/url/src/UrlUI.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"UrlUI\",\"superClass\":\"Component\"}},");
    _this = _Component.call(this, props) || this;
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = UrlUI.prototype;

  _proto.componentDidMount = function componentDidMount() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"componentDidMount\",\"fileName\":\"/packages/@uppy/url/src/UrlUI.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"UrlUI\",\"superClass\":\"Component\"}},");
    this.input.value = '';
    SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidMount"},');
  };

  _proto.handleKeyPress = function handleKeyPress(ev) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handleKeyPress\",\"fileName\":\"/packages/@uppy/url/src/UrlUI.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"UrlUI\",\"superClass\":\"Component\"}},");

    if (ev.keyCode === 13) {
      this.props.addFile(this.input.value);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"handleKeyPress"},');
  };

  _proto.handleClick = function handleClick() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handleClick\",\"fileName\":\"/packages/@uppy/url/src/UrlUI.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"UrlUI\",\"superClass\":\"Component\"}},");
    this.props.addFile(this.input.value);
    SRTlib.send('{"type":"FUNCTIONEND","function":"handleClick"},');
  };

  _proto.render = function render() {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"render\",\"fileName\":\"/packages/@uppy/url/src/UrlUI.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"UrlUI\",\"superClass\":\"Component\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
    return h("div", {
      class: "uppy-Url"
    }, h("input", {
      class: "uppy-u-reset uppy-c-textInput uppy-Url-input",
      type: "text",
      "aria-label": this.props.i18n('enterUrlToImport'),
      placeholder: this.props.i18n('enterUrlToImport'),
      onkeyup: this.handleKeyPress,
      ref: function ref(input) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement\",\"fileName\":\"/packages/@uppy/url/src/UrlUI.js\",\"paramsNumber\":1},");
        _this2.input = input;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');
      },
      "data-uppy-super-focusable": true
    }), h("button", {
      class: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Url-importButton",
      type: "button",
      onclick: this.handleClick
    }, this.props.i18n('import')));
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
  };

  return UrlUI;
}(Component);

module.exports = UrlUI;