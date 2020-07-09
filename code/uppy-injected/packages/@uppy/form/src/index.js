const SRTlib = require('SRT-util');

const {Plugin} = require('@uppy/core');
const findDOMElement = require('@uppy/utils/lib/findDOMElement');
const toArray = require('@uppy/utils/lib/toArray');
const getFormData = require('get-form-data').default || require('get-form-data');
module.exports = class Form extends Plugin {
  static VERSION = require('../package.json').version
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Form","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.type = 'acquirer';
    this.id = this.opts.id || 'Form';
    this.title = 'Form';
    const defaultOptions = {
      target: null,
      resultName: 'uppyResult',
      getMetaFromForm: true,
      addResultToForm: true,
      multipleResults: false,
      submitOnSuccess: false,
      triggerUploadOnSubmit: false
    };
    this.opts = {
      ...defaultOptions,
      ...opts
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleUploadStart = this.handleUploadStart.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.addResultToForm = this.addResultToForm.bind(this);
    this.getMetaFromForm = this.getMetaFromForm.bind(this);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  handleUploadStart() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleUploadStart","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Form","superClass":"Plugin"}},`);

    if (this.opts.getMetaFromForm) {
      this.getMetaFromForm();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleUploadStart"},');

  }
  handleSuccess(result) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleSuccess","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Form","superClass":"Plugin"}},`);

    if (this.opts.addResultToForm) {
      this.addResultToForm(result);
    }
    if (this.opts.submitOnSuccess) {
      this.form.submit();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleSuccess"},');

  }
  handleFormSubmit(ev) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleFormSubmit","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Form","superClass":"Plugin"}},`);

    if (this.opts.triggerUploadOnSubmit) {
      ev.preventDefault();
      const elements = toArray(ev.target.elements);
      const disabledByUppy = [];
      elements.forEach(el => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.elements.forEach","fileName":"${__filename}","paramsNumber":1},`);

        const isButton = el.tagName === 'BUTTON' || el.tagName === 'INPUT' && el.type === 'submit';
        if (isButton && !el.disabled) {
          el.disabled = true;
          disabledByUppy.push(el);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.elements.forEach"},');

      });
      this.uppy.upload().then(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uppy.upload.then.catch.uppy.upload.then","fileName":"${__filename}","paramsNumber":0},`);

        disabledByUppy.forEach(button => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"disabledByUppy.forEach","fileName":"${__filename}","paramsNumber":1},`);

          button.disabled = false;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"disabledByUppy.forEach"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.upload.then.catch.uppy.upload.then"},');

      }, err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uppy.upload.then.catch.uppy.upload.then###2","fileName":"${__filename}","paramsNumber":1},`);

        disabledByUppy.forEach(button => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"disabledByUppy.forEach###2","fileName":"${__filename}","paramsNumber":1},`);

          button.disabled = false;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"disabledByUppy.forEach###2"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.upload.then.catch.uppy.upload.then###2"},');

        return Promise.reject(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.upload.then.catch.uppy.upload.then###2"},');

      }).catch(err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uppy.upload.then.catch","fileName":"${__filename}","paramsNumber":1},`);

        this.uppy.log(err.stack || err.message || err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.upload.then.catch"},');

      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleFormSubmit"},');

  }
  addResultToForm(result) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addResultToForm","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Form","superClass":"Plugin"}},`);

    this.uppy.log('[Form] Adding result to the original form:');
    this.uppy.log(result);
    let resultInput = this.form.querySelector(`[name="${this.opts.resultName}"]`);
    if (resultInput) {
      if (this.opts.multipleResults) {
        let updatedResult;
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

  }
  getMetaFromForm() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getMetaFromForm","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Form","superClass":"Plugin"}},`);

    const formMeta = getFormData(this.form);
    delete formMeta[this.opts.resultName];
    this.uppy.setMeta(formMeta);
        SRTlib.send('{"type":"FUNCTIONEND","function":"getMetaFromForm"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Form","superClass":"Plugin"}},`);

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

  }
  uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Form","superClass":"Plugin"}},`);

    this.form.removeEventListener('submit', this.handleFormSubmit);
    this.uppy.off('upload', this.handleUploadStart);
    this.uppy.off('complete', this.handleSuccess);
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');

  }
};
