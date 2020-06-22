var SRTlib = require('SRT-util');
function _assertThisInitialized(self) {
    SRTlib.send(`{ "anonymous": false, "function": "_assertThisInitialized", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (self === void 0) {
        SRTlib.send('], "end": "_assertThisInitialized"},');

    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
    SRTlib.send('], "end": "_assertThisInitialized"},');

  return self;
    SRTlib.send('], "end": "_assertThisInitialized"},');

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('], "end": "_inheritsLoose"},');

}
var _require = require('preact'), h = _require.h, Component = _require.Component;
var UrlUI = (function (_Component) {
    SRTlib.send(`{ "anonymous": true, "function": "UrlUI", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(UrlUI, _Component);
  function UrlUI(props) {
        SRTlib.send(`{ "anonymous": false, "function": "UrlUI", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this;
    _this = _Component.call(this, props) || this;
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
        SRTlib.send('], "end": "UrlUI"},');

    return _this;
        SRTlib.send('], "end": "UrlUI"},');

  }
  var _proto = UrlUI.prototype;
  _proto.componentDidMount = function componentDidMount() {
        SRTlib.send(`{ "anonymous": true, "function": "UrlUI._proto.componentDidMount.componentDidMount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.input.value = '';
        SRTlib.send('], "end": "UrlUI._proto.componentDidMount.componentDidMount"},');

  };
  _proto.handleKeyPress = function handleKeyPress(ev) {
        SRTlib.send(`{ "anonymous": true, "function": "UrlUI._proto.handleKeyPress.handleKeyPress", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (ev.keyCode === 13) {
      this.props.addFile(this.input.value);
    }
        SRTlib.send('], "end": "UrlUI._proto.handleKeyPress.handleKeyPress"},');

  };
  _proto.handleClick = function handleClick() {
        SRTlib.send(`{ "anonymous": true, "function": "UrlUI._proto.handleClick.handleClick", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.props.addFile(this.input.value);
        SRTlib.send('], "end": "UrlUI._proto.handleClick.handleClick"},');

  };
  _proto.render = function render() {
        SRTlib.send(`{ "anonymous": true, "function": "UrlUI._proto.render.render", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this2 = this;
        SRTlib.send('], "end": "UrlUI._proto.render.render"},');

    return h("div", {
      class: "uppy-Url"
    }, h("input", {
      class: "uppy-u-reset uppy-c-textInput uppy-Url-input",
      type: "text",
      "aria-label": this.props.i18n('enterUrlToImport'),
      placeholder: this.props.i18n('enterUrlToImport'),
      onkeyup: this.handleKeyPress,
      ref: function ref(input) {
                SRTlib.send(`{ "anonymous": true, "function": "UrlUI._proto.render.render.ReturnStatement.h.h.ref.ref", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this2.input = input;
                SRTlib.send('], "end": "UrlUI._proto.render.render.ReturnStatement.h.h.ref.ref"},');

      },
      "data-uppy-super-focusable": true
    }), h("button", {
      class: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Url-importButton",
      type: "button",
      onclick: this.handleClick
    }, this.props.i18n('import')));
        SRTlib.send('], "end": "UrlUI._proto.render.render"},');

  };
    SRTlib.send('], "end": "UrlUI"},');

  return UrlUI;
    SRTlib.send('], "end": "UrlUI"},');

})(Component);
module.exports = UrlUI;
