var SRTlib = require('SRT-util');
function _assertThisInitialized(self) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_assertThisInitialized","fileName":"${__filename}","paramsNumber":1},`);

  if (self === void 0) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');

    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');

  return self;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized","paramsNumber":1},');

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');

}
var _require = require('@uppy/core'), Plugin = _require.Plugin;
var toArray = require('@uppy/utils/lib/toArray');
var findDOMElement = require('@uppy/utils/lib/findDOMElement');
var AttachFileInputs = (function (_Plugin) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AttachFileInputs","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(AttachFileInputs, _Plugin);
  function AttachFileInputs(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"AttachFileInputs","fileName":"${__filename}","paramsNumber":2},`);

    var _this;
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.id = _this.opts.id || 'AttachFileInputs';
    _this.type = 'acquirer';
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.inputs = null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"AttachFileInputs"},');

    return _this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"AttachFileInputs","paramsNumber":2},');

  }
  var _proto = AttachFileInputs.prototype;
  _proto.handleChange = function handleChange(event) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AttachFileInputs._proto.handleChange.handleChange","fileName":"${__filename}","paramsNumber":1},`);

    this.addFiles(event.target);
        SRTlib.send('{"type":"FUNCTIONEND","function":"AttachFileInputs._proto.handleChange.handleChange"},');

  };
  _proto.addFiles = function addFiles(input) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AttachFileInputs._proto.addFiles.addFiles2","fileName":"${__filename}","paramsNumber":1},`);

    var _this2 = this;
    var files = toArray(input.files);
    files.forEach(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AttachFileInputs._proto.addFiles.addFiles","fileName":"${__filename}","paramsNumber":1},`);

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
            SRTlib.send('{"type":"FUNCTIONEND","function":"AttachFileInputs._proto.addFiles.addFiles"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"AttachFileInputs._proto.addFiles.addFiles2"},');

  };
  _proto.install = function install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AttachFileInputs._proto.install.install","fileName":"${__filename}","paramsNumber":0},`);

    var _this3 = this;
    this.el = findDOMElement(this.opts.target);
    if (!this.el) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"AttachFileInputs._proto.install.install"},');

      throw new Error('[AttachFileInputs] Target form does not exist');
    }
    var restrictions = this.uppy.opts.restrictions;
    this.inputs = this.el.querySelectorAll('input[type="file"]');
    this.inputs.forEach(function (input) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AttachFileInputs._proto.install.install.inputs.forEach","fileName":"${__filename}","paramsNumber":1},`);

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
            SRTlib.send('{"type":"FUNCTIONEND","function":"AttachFileInputs._proto.install.install.inputs.forEach"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"AttachFileInputs._proto.install.install"},');

  };
  _proto.uninstall = function uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AttachFileInputs._proto.uninstall.uninstall","fileName":"${__filename}","paramsNumber":0},`);

    var _this4 = this;
    this.inputs.forEach(function (input) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AttachFileInputs._proto.uninstall.uninstall.inputs.forEach","fileName":"${__filename}","paramsNumber":1},`);

      input.removeEventListener('change', _this4.handleChange);
            SRTlib.send('{"type":"FUNCTIONEND","function":"AttachFileInputs._proto.uninstall.uninstall.inputs.forEach"},');

    });
    this.inputs = null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"AttachFileInputs._proto.uninstall.uninstall"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"AttachFileInputs"},');

  return AttachFileInputs;
    SRTlib.send('{"type":"FUNCTIONEND","function":"AttachFileInputs"},');

})(Plugin);
module.exports = AttachFileInputs;
