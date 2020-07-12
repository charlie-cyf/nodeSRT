var _class, _temp;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('@uppy/core'),
    Plugin = _require.Plugin;

var toArray = require('@uppy/utils/lib/toArray');

var Translator = require('@uppy/utils/lib/Translator');

var _require2 = require('preact'),
    h = _require2.h;

module.exports = (_temp = _class = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose(FileInput, _Plugin);

  function FileInput(uppy, opts) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"/packages/@uppy/file-input/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"FileInput\",\"superClass\":\"Plugin\"}},");
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.id = _this.opts.id || 'FileInput';
    _this.title = 'File Input';
    _this.type = 'acquirer';
    _this.defaultLocale = {
      strings: {
        chooseFiles: 'Choose files'
      }
    };
    var defaultOptions = {
      target: null,
      pretty: true,
      inputName: 'files[]'
    };
    _this.opts = _extends({}, defaultOptions, {}, opts);

    _this.i18nInit();

    _this.render = _this.render.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = FileInput.prototype;

  _proto.setOptions = function setOptions(newOpts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"setOptions\",\"fileName\":\"/packages/@uppy/file-input/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"FileInput\",\"superClass\":\"Plugin\"}},");

    _Plugin.prototype.setOptions.call(this, newOpts);

    this.i18nInit();
    SRTlib.send('{"type":"FUNCTIONEND","function":"setOptions"},');
  };

  _proto.i18nInit = function i18nInit() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"i18nInit\",\"fileName\":\"/packages/@uppy/file-input/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"FileInput\",\"superClass\":\"Plugin\"}},");
    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
    this.setPluginState();
    SRTlib.send('{"type":"FUNCTIONEND","function":"i18nInit"},');
  };

  _proto.addFiles = function addFiles(files) {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"addFiles\",\"fileName\":\"/packages/@uppy/file-input/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"FileInput\",\"superClass\":\"Plugin\"}},");
    var descriptors = files.map(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.descriptors.files.map\",\"fileName\":\"/packages/@uppy/file-input/src/index.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.descriptors.files.map"},');
      return {
        source: _this2.id,
        name: file.name,
        type: file.type,
        data: file
      };
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.descriptors.files.map"},');
    });

    try {
      this.uppy.addFiles(descriptors);
    } catch (err) {
      this.uppy.log(err);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"addFiles"},');
  };

  _proto.handleInputChange = function handleInputChange(event) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handleInputChange\",\"fileName\":\"/packages/@uppy/file-input/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"FileInput\",\"superClass\":\"Plugin\"}},");
    this.uppy.log('[FileInput] Something selected through input...');
    var files = toArray(event.target.files);
    this.addFiles(files);
    event.target.value = null;
    SRTlib.send('{"type":"FUNCTIONEND","function":"handleInputChange"},');
  };

  _proto.handleClick = function handleClick(ev) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handleClick\",\"fileName\":\"/packages/@uppy/file-input/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"FileInput\",\"superClass\":\"Plugin\"}},");
    this.input.click();
    SRTlib.send('{"type":"FUNCTIONEND","function":"handleClick"},');
  };

  _proto.render = function render(state) {
    var _this3 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"render\",\"fileName\":\"/packages/@uppy/file-input/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"FileInput\",\"superClass\":\"Plugin\"}},");
    var hiddenInputStyle = {
      width: '0.1px',
      height: '0.1px',
      opacity: 0,
      overflow: 'hidden',
      position: 'absolute',
      zIndex: -1
    };
    var restrictions = this.uppy.opts.restrictions;
    var accept = restrictions.allowedFileTypes ? restrictions.allowedFileTypes.join(',') : null;
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
    return h("div", {
      class: "uppy-Root uppy-FileInput-container"
    }, h("input", {
      class: "uppy-FileInput-input",
      style: this.opts.pretty && hiddenInputStyle,
      type: "file",
      name: this.opts.inputName,
      onchange: this.handleInputChange,
      multiple: restrictions.maxNumberOfFiles !== 1,
      accept: accept,
      ref: function ref(input) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement\",\"fileName\":\"/packages/@uppy/file-input/src/index.js\",\"paramsNumber\":1},");
        _this3.input = input;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement"},');
      }
    }), this.opts.pretty && h("button", {
      class: "uppy-FileInput-btn",
      type: "button",
      onclick: this.handleClick
    }, this.i18n('chooseFiles')));
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
  };

  _proto.install = function install() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"install\",\"fileName\":\"/packages/@uppy/file-input/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"FileInput\",\"superClass\":\"Plugin\"}},");
    var target = this.opts.target;

    if (target) {
      this.mount(target, this);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');
  };

  _proto.uninstall = function uninstall() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uninstall\",\"fileName\":\"/packages/@uppy/file-input/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"FileInput\",\"superClass\":\"Plugin\"}},");
    this.unmount();
    SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');
  };

  return FileInput;
}(Plugin), _class.VERSION = require('../package.json').version, _temp);