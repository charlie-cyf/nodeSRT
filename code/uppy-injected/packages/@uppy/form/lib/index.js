const SRTlib = require('SRT-util');

var _class, _temp;
function _extends() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"${__filename}","paramsNumber":0},`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends","fileName":"${__filename}","paramsNumber":1},`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

    return target;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  return _extends.apply(this, arguments);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');

}
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
var findDOMElement = require('@uppy/utils/lib/findDOMElement');
var toArray = require('@uppy/utils/lib/toArray');
var getFormData = require('get-form-data').default || require('get-form-data');
module.exports = (_temp = _class = (function (_Plugin) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(Form, _Plugin);
  function Form(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Form","fileName":"${__filename}","paramsNumber":2},`);

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"Form"},');

    return _this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"Form","paramsNumber":2},');

  }
  var _proto = Form.prototype;
  _proto.handleUploadStart = function handleUploadStart() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleUploadStart","fileName":"${__filename}","paramsNumber":0},`);

    if (this.opts.getMetaFromForm) {
      this.getMetaFromForm();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleUploadStart"},');

  };
  _proto.handleSuccess = function handleSuccess(result) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleSuccess","fileName":"${__filename}","paramsNumber":1},`);

    if (this.opts.addResultToForm) {
      this.addResultToForm(result);
    }
    if (this.opts.submitOnSuccess) {
      this.form.submit();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleSuccess"},');

  };
  _proto.handleFormSubmit = function handleFormSubmit(ev) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleFormSubmit","fileName":"${__filename}","paramsNumber":1},`);

    var _this2 = this;
    if (this.opts.triggerUploadOnSubmit) {
      ev.preventDefault();
      var elements = toArray(ev.target.elements);
      var disabledByUppy = [];
      elements.forEach(function (el) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.elements.forEach","fileName":"${__filename}","paramsNumber":1},`);

        var isButton = el.tagName === 'BUTTON' || el.tagName === 'INPUT' && el.type === 'submit';
        if (isButton && !el.disabled) {
          el.disabled = true;
          disabledByUppy.push(el);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.elements.forEach"},');

      });
      this.uppy.upload().then(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.uppy.upload.then.catch.uppy.upload.then","fileName":"${__filename}","paramsNumber":0},`);

        disabledByUppy.forEach(function (button) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.uppy.upload.then.catch.uppy.upload.then.disabledByUppy.forEach","fileName":"${__filename}","paramsNumber":1},`);

          button.disabled = false;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.uppy.upload.then.catch.uppy.upload.then.disabledByUppy.forEach"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.uppy.upload.then.catch.uppy.upload.then"},');

      }, function (err) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.uppy.upload.then.catch.uppy.upload.then2","fileName":"${__filename}","paramsNumber":1},`);

        disabledByUppy.forEach(function (button) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.uppy.upload.then.catch.uppy.upload.then.disabledByUppy.forEach2","fileName":"${__filename}","paramsNumber":1},`);

          button.disabled = false;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.uppy.upload.then.catch.uppy.upload.then.disabledByUppy.forEach2"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.uppy.upload.then.catch.uppy.upload.then2"},');

        return Promise.reject(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.uppy.upload.then.catch.uppy.upload.then2"},');

      }).catch(function (err) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.uppy.upload.then.catch","fileName":"${__filename}","paramsNumber":1},`);

        _this2.uppy.log(err.stack || err.message || err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleFormSubmit.handleFormSubmit.uppy.upload.then.catch"},');

      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleFormSubmit"},');

  };
  _proto.addResultToForm = function addResultToForm(result) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.addResultToForm","fileName":"${__filename}","paramsNumber":1},`);

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
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.addResultToForm"},');

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.addResultToForm"},');

  };
  _proto.getMetaFromForm = function getMetaFromForm() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.getMetaFromForm","fileName":"${__filename}","paramsNumber":0},`);

    var formMeta = getFormData(this.form);
    delete formMeta[this.opts.resultName];
    this.uppy.setMeta(formMeta);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getMetaFromForm"},');

  };
  _proto.install = function install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.install","fileName":"${__filename}","paramsNumber":0},`);

    this.form = findDOMElement(this.opts.target);
    if (!this.form || this.form.nodeName !== 'FORM') {
      this.uppy.log('Form plugin requires a <form> target element passed in options to operate, none was found', 'error');
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.install"},');

      return;
    }
    this.form.addEventListener('submit', this.handleFormSubmit);
    this.uppy.on('upload', this.handleUploadStart);
    this.uppy.on('complete', this.handleSuccess);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.install"},');

  };
  _proto.uninstall = function uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uninstall","fileName":"${__filename}","paramsNumber":0},`);

    this.form.removeEventListener('submit', this.handleFormSubmit);
    this.uppy.off('upload', this.handleUploadStart);
    this.uppy.off('complete', this.handleSuccess);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uninstall"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');

  return Form;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
