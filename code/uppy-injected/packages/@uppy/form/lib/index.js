var SRTlib = require('SRT-util');
var _class, _temp;
function _extends() {
    SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{ "anonymous": true, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send('], "end": "_extends"},');

    return target;
        SRTlib.send('], "end": "_extends"},');

  });
    SRTlib.send('], "end": "_extends"},');

  return _extends.apply(this, arguments);
    SRTlib.send('], "end": "_extends"},');

}
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
var _require = require('@uppy/core'), Plugin = _require.Plugin;
var findDOMElement = require('@uppy/utils/lib/findDOMElement');
var toArray = require('@uppy/utils/lib/toArray');
var getFormData = require('get-form-data').default || require('get-form-data');
module.exports = (_temp = _class = (function (_Plugin) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(Form, _Plugin);
  function Form(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "Form", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this;
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
        SRTlib.send('], "end": "Form"},');

    return _this;
        SRTlib.send('], "end": "Form"},');

  }
  var _proto = Form.prototype;
  _proto.handleUploadStart = function handleUploadStart() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleUploadStart.handleUploadStart", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (this.opts.getMetaFromForm) {
      this.getMetaFromForm();
    }
        SRTlib.send('], "end": "module.exports._temp._class._proto.handleUploadStart.handleUploadStart"},');

  };
  _proto.handleSuccess = function handleSuccess(result) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleSuccess.handleSuccess", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (this.opts.addResultToForm) {
      this.addResultToForm(result);
    }
    if (this.opts.submitOnSuccess) {
      this.form.submit();
    }
        SRTlib.send('], "end": "module.exports._temp._class._proto.handleSuccess.handleSuccess"},');

  };
  _proto.handleFormSubmit = function handleFormSubmit(ev) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this2 = this;
    if (this.opts.triggerUploadOnSubmit) {
      ev.preventDefault();
      var elements = toArray(ev.target.elements);
      var disabledByUppy = [];
      elements.forEach(function (el) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var isButton = el.tagName === 'BUTTON' || el.tagName === 'INPUT' && el.type === 'submit';
        if (isButton && !el.disabled) {
          el.disabled = true;
          disabledByUppy.push(el);
        }
                SRTlib.send('], "end": "module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit"},');

      });
      this.uppy.upload().then(function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.uppy.upload.then.catch.uppy.upload.then2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        disabledByUppy.forEach(function (button) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.uppy.upload.then.catch.uppy.upload.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          button.disabled = false;
                    SRTlib.send('], "end": "module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.uppy.upload.then.catch.uppy.upload.then"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.uppy.upload.then.catch.uppy.upload.then2"},');

      }, function (err) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.uppy.upload.then.catch.uppy.upload.then4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        disabledByUppy.forEach(function (button) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.uppy.upload.then.catch.uppy.upload.then3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          button.disabled = false;
                    SRTlib.send('], "end": "module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.uppy.upload.then.catch.uppy.upload.then3"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.uppy.upload.then.catch.uppy.upload.then4"},');

        return Promise.reject(err);
                SRTlib.send('], "end": "module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.uppy.upload.then.catch.uppy.upload.then4"},');

      }).catch(function (err) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.uppy.upload.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this2.uppy.log(err.stack || err.message || err);
                SRTlib.send('], "end": "module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.uppy.upload.then.catch"},');

      });
    }
        SRTlib.send('], "end": "module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit2"},');

  };
  _proto.addResultToForm = function addResultToForm(result) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.addResultToForm.addResultToForm", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
            SRTlib.send('], "end": "module.exports._temp._class._proto.addResultToForm.addResultToForm"},');

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
        SRTlib.send('], "end": "module.exports._temp._class._proto.addResultToForm.addResultToForm"},');

  };
  _proto.getMetaFromForm = function getMetaFromForm() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.getMetaFromForm.getMetaFromForm", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var formMeta = getFormData(this.form);
    delete formMeta[this.opts.resultName];
    this.uppy.setMeta(formMeta);
        SRTlib.send('], "end": "module.exports._temp._class._proto.getMetaFromForm.getMetaFromForm"},');

  };
  _proto.install = function install() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.install.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.form = findDOMElement(this.opts.target);
    if (!this.form || this.form.nodeName !== 'FORM') {
      this.uppy.log('Form plugin requires a <form> target element passed in options to operate, none was found', 'error');
            SRTlib.send('], "end": "module.exports._temp._class._proto.install.install"},');

      return;
    }
    this.form.addEventListener('submit', this.handleFormSubmit);
    this.uppy.on('upload', this.handleUploadStart);
    this.uppy.on('complete', this.handleSuccess);
        SRTlib.send('], "end": "module.exports._temp._class._proto.install.install"},');

  };
  _proto.uninstall = function uninstall() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uninstall.uninstall", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.form.removeEventListener('submit', this.handleFormSubmit);
    this.uppy.off('upload', this.handleUploadStart);
    this.uppy.off('complete', this.handleSuccess);
        SRTlib.send('], "end": "module.exports._temp._class._proto.uninstall.uninstall"},');

  };
    SRTlib.send('], "end": "module.exports._temp._class"},');

  return Form;
    SRTlib.send('], "end": "module.exports._temp._class"},');

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
