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

    SRTlib.send("{ \"anonymous\": false, \"function\": \"AttachFileInputs.constructor\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.id = _this.opts.id || 'AttachFileInputs';
    _this.type = 'acquirer';
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.inputs = null;
    SRTlib.send("]},");
    return _this;
  }

  var _proto = AttachFileInputs.prototype;

  _proto.handleChange = function handleChange(event) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"AttachFileInputs.handleChange\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    this.addFiles(event.target);
    SRTlib.send("]},");
  };

  _proto.addFiles = function addFiles(input) {
    var _this2 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"AttachFileInputs.addFiles\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    var files = toArray(input.files);
    files.forEach(function (file) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

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

      SRTlib.send("]},");
    });
    SRTlib.send("]},");
  };

  _proto.install = function install() {
    var _this3 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"AttachFileInputs.install\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this.el = findDOMElement(this.opts.target);

    if (!this.el) {
      SRTlib.send("]},");
      throw new Error('[AttachFileInputs] Target form does not exist');
    }

    var restrictions = this.uppy.opts.restrictions;
    this.inputs = this.el.querySelectorAll('input[type="file"]');
    this.inputs.forEach(function (input) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
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

      SRTlib.send("]},");
    });
    SRTlib.send("]},");
  };

  _proto.uninstall = function uninstall() {
    var _this4 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"AttachFileInputs.uninstall\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this.inputs.forEach(function (input) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey3\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      input.removeEventListener('change', _this4.handleChange);
      SRTlib.send("]},");
    });
    this.inputs = null;
    SRTlib.send("]},");
  };

  return AttachFileInputs;
}(Plugin);

module.exports = AttachFileInputs;