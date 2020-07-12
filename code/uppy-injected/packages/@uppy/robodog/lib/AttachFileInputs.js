function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('@uppy/core'),
    Plugin = _require.Plugin;

var toArray = require('@uppy/utils/lib/toArray');

var findDOMElement = require('@uppy/utils/lib/findDOMElement');

var AttachFileInputs = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose(AttachFileInputs, _Plugin);

  function AttachFileInputs(uppy, opts) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"/packages/@uppy/robodog/src/AttachFileInputs.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"AttachFileInputs\",\"superClass\":\"Plugin\"}},");
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.id = _this.opts.id || 'AttachFileInputs';
    _this.type = 'acquirer';
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.inputs = null;
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = AttachFileInputs.prototype;

  _proto.handleChange = function handleChange(event) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handleChange\",\"fileName\":\"/packages/@uppy/robodog/src/AttachFileInputs.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"AttachFileInputs\",\"superClass\":\"Plugin\"}},");
    this.addFiles(event.target);
    SRTlib.send('{"type":"FUNCTIONEND","function":"handleChange"},');
  };

  _proto.addFiles = function addFiles(input) {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"addFiles\",\"fileName\":\"/packages/@uppy/robodog/src/AttachFileInputs.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"AttachFileInputs\",\"superClass\":\"Plugin\"}},");
    var files = toArray(input.files);
    files.forEach(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"files.forEach\",\"fileName\":\"/packages/@uppy/robodog/src/AttachFileInputs.js\",\"paramsNumber\":1},");

      try {
        _this2.uppy.addFile({
          source: _this2.id,
          name: file.name,
          type: file.type,
          data: file
        });
      } catch (err) {
        if (!err.isRestriction) {
          _this2.uppy.log(err);
        }
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"files.forEach"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"addFiles"},');
  };

  _proto.install = function install() {
    var _this3 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"install\",\"fileName\":\"/packages/@uppy/robodog/src/AttachFileInputs.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"AttachFileInputs\",\"superClass\":\"Plugin\"}},");
    this.el = findDOMElement(this.opts.target);

    if (!this.el) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');
      throw new Error('[AttachFileInputs] Target form does not exist');
    }

    var restrictions = this.uppy.opts.restrictions;
    this.inputs = this.el.querySelectorAll('input[type="file"]');
    this.inputs.forEach(function (input) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"inputs.forEach\",\"fileName\":\"/packages/@uppy/robodog/src/AttachFileInputs.js\",\"paramsNumber\":1},");
      input.addEventListener('change', _this3.handleChange);

      if (!input.hasAttribute('multiple')) {
        if (restrictions.maxNumberOfFiles !== 1) {
          input.setAttribute('multiple', 'multiple');
        } else {
          input.removeAttribute('multiple');
        }
      }

      if (!input.hasAttribute('accept') && restrictions.allowedFileTypes) {
        input.setAttribute('accept', restrictions.allowedFileTypes.join(','));
      }

      _this3.addFiles(input);

      SRTlib.send('{"type":"FUNCTIONEND","function":"inputs.forEach"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');
  };

  _proto.uninstall = function uninstall() {
    var _this4 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uninstall\",\"fileName\":\"/packages/@uppy/robodog/src/AttachFileInputs.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"AttachFileInputs\",\"superClass\":\"Plugin\"}},");
    this.inputs.forEach(function (input) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"inputs.forEach###2\",\"fileName\":\"/packages/@uppy/robodog/src/AttachFileInputs.js\",\"paramsNumber\":1},");
      input.removeEventListener('change', _this4.handleChange);
      SRTlib.send('{"type":"FUNCTIONEND","function":"inputs.forEach###2"},');
    });
    this.inputs = null;
    SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');
  };

  return AttachFileInputs;
}(Plugin);

module.exports = AttachFileInputs;