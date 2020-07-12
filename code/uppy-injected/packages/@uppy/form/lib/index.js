var _class, _temp;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('@uppy/core'),
    Plugin = _require.Plugin;

var findDOMElement = require('@uppy/utils/lib/findDOMElement');

var toArray = require('@uppy/utils/lib/toArray');

var getFormData = require('get-form-data').default || require('get-form-data');

module.exports = (_temp = _class = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose(Form, _Plugin);

  function Form(uppy, opts) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"/packages/@uppy/form/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Form\",\"superClass\":\"Plugin\"}},");
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.type = 'acquirer';
    _this.id = _this.opts.id || 'Form';
    _this.title = 'Form';
    var defaultOptions = {
      target: null,
      resultName: 'uppyResult',
      getMetaFromForm: true,
      addResultToForm: true,
      multipleResults: false,
      submitOnSuccess: false,
      triggerUploadOnSubmit: false
    };
    _this.opts = _extends({}, defaultOptions, {}, opts);
    _this.handleFormSubmit = _this.handleFormSubmit.bind(_assertThisInitialized(_this));
    _this.handleUploadStart = _this.handleUploadStart.bind(_assertThisInitialized(_this));
    _this.handleSuccess = _this.handleSuccess.bind(_assertThisInitialized(_this));
    _this.addResultToForm = _this.addResultToForm.bind(_assertThisInitialized(_this));
    _this.getMetaFromForm = _this.getMetaFromForm.bind(_assertThisInitialized(_this));
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = Form.prototype;

  _proto.handleUploadStart = function handleUploadStart() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handleUploadStart\",\"fileName\":\"/packages/@uppy/form/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Form\",\"superClass\":\"Plugin\"}},");

    if (this.opts.getMetaFromForm) {
      this.getMetaFromForm();
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"handleUploadStart"},');
  };

  _proto.handleSuccess = function handleSuccess(result) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handleSuccess\",\"fileName\":\"/packages/@uppy/form/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Form\",\"superClass\":\"Plugin\"}},");

    if (this.opts.addResultToForm) {
      this.addResultToForm(result);
    }

    if (this.opts.submitOnSuccess) {
      this.form.submit();
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"handleSuccess"},');
  };

  _proto.handleFormSubmit = function handleFormSubmit(ev) {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handleFormSubmit\",\"fileName\":\"/packages/@uppy/form/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Form\",\"superClass\":\"Plugin\"}},");

    if (this.opts.triggerUploadOnSubmit) {
      ev.preventDefault();
      var elements = toArray(ev.target.elements);
      var disabledByUppy = [];
      elements.forEach(function (el) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.elements.forEach\",\"fileName\":\"/packages/@uppy/form/src/index.js\",\"paramsNumber\":1},");
        var isButton = el.tagName === 'BUTTON' || el.tagName === 'INPUT' && el.type === 'submit';

        if (isButton && !el.disabled) {
          el.disabled = true;
          disabledByUppy.push(el);
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.elements.forEach"},');
      });
      this.uppy.upload().then(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uppy.upload.then.catch.uppy.upload.then\",\"fileName\":\"/packages/@uppy/form/src/index.js\",\"paramsNumber\":0},");
        disabledByUppy.forEach(function (button) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"disabledByUppy.forEach\",\"fileName\":\"/packages/@uppy/form/src/index.js\",\"paramsNumber\":1},");
          button.disabled = false;
          SRTlib.send('{"type":"FUNCTIONEND","function":"disabledByUppy.forEach"},');
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.upload.then.catch.uppy.upload.then"},');
      }, function (err) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uppy.upload.then.catch.uppy.upload.then###2\",\"fileName\":\"/packages/@uppy/form/src/index.js\",\"paramsNumber\":1},");
        disabledByUppy.forEach(function (button) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"disabledByUppy.forEach###2\",\"fileName\":\"/packages/@uppy/form/src/index.js\",\"paramsNumber\":1},");
          button.disabled = false;
          SRTlib.send('{"type":"FUNCTIONEND","function":"disabledByUppy.forEach###2"},');
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.upload.then.catch.uppy.upload.then###2"},');
        return Promise.reject(err);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.upload.then.catch.uppy.upload.then###2"},');
      }).catch(function (err) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uppy.upload.then.catch\",\"fileName\":\"/packages/@uppy/form/src/index.js\",\"paramsNumber\":1},");

        _this2.uppy.log(err.stack || err.message || err);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.upload.then.catch"},');
      });
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"handleFormSubmit"},');
  };

  _proto.addResultToForm = function addResultToForm(result) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"addResultToForm\",\"fileName\":\"/packages/@uppy/form/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Form\",\"superClass\":\"Plugin\"}},");
    this.uppy.log('[Form] Adding result to the original form:');
    this.uppy.log(result);
    var resultInput = this.form.querySelector("[name=\"" + this.opts.resultName + "\"]");

    if (resultInput) {
      if (this.opts.multipleResults) {
        var updatedResult;

        try {
          updatedResult = JSON.parse(resultInput.value);
        } catch (err) {}

        if (!Array.isArray(updatedResult)) {
          updatedResult = [];
        }

        updatedResult.push(result);
        resultInput.value = JSON.stringify(updatedResult);
      } else {
        resultInput.value = JSON.stringify(result);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"addResultToForm"},');
      return;
    }

    resultInput = document.createElement('input');
    resultInput.name = this.opts.resultName;
    resultInput.type = 'hidden';

    if (this.opts.multipleResults) {
      resultInput.value = JSON.stringify([result]);
    } else {
      resultInput.value = JSON.stringify(result);
    }

    this.form.appendChild(resultInput);
    SRTlib.send('{"type":"FUNCTIONEND","function":"addResultToForm"},');
  };

  _proto.getMetaFromForm = function getMetaFromForm() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getMetaFromForm\",\"fileName\":\"/packages/@uppy/form/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Form\",\"superClass\":\"Plugin\"}},");
    var formMeta = getFormData(this.form);
    delete formMeta[this.opts.resultName];
    this.uppy.setMeta(formMeta);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getMetaFromForm"},');
  };

  _proto.install = function install() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"install\",\"fileName\":\"/packages/@uppy/form/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Form\",\"superClass\":\"Plugin\"}},");
    this.form = findDOMElement(this.opts.target);

    if (!this.form || this.form.nodeName !== 'FORM') {
      this.uppy.log('Form plugin requires a <form> target element passed in options to operate, none was found', 'error');
      SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');
      return;
    }

    this.form.addEventListener('submit', this.handleFormSubmit);
    this.uppy.on('upload', this.handleUploadStart);
    this.uppy.on('complete', this.handleSuccess);
    SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');
  };

  _proto.uninstall = function uninstall() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uninstall\",\"fileName\":\"/packages/@uppy/form/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Form\",\"superClass\":\"Plugin\"}},");
    this.form.removeEventListener('submit', this.handleFormSubmit);
    this.uppy.off('upload', this.handleUploadStart);
    this.uppy.off('complete', this.handleSuccess);
    SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');
  };

  return Form;
}(Plugin), _class.VERSION = require('../package.json').version, _temp);