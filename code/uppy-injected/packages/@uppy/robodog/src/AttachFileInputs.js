var SRTlib = require('SRT-util');
const {Plugin} = require('@uppy/core');
const toArray = require('@uppy/utils/lib/toArray');
const findDOMElement = require('@uppy/utils/lib/findDOMElement');
class AttachFileInputs extends Plugin {
  constructor(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "AttachFileInputs.constructor", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    super(uppy, opts);
    this.id = this.opts.id || 'AttachFileInputs';
    this.type = 'acquirer';
    this.handleChange = this.handleChange.bind(this);
    this.inputs = null;
        SRTlib.send('], "end": "constructor"},');

  }
  handleChange(event) {
        SRTlib.send(`{ "anonymous": false, "function": "AttachFileInputs.handleChange", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.addFiles(event.target);
        SRTlib.send('], "end": "handleChange"},');

  }
  addFiles(input) {
        SRTlib.send(`{ "anonymous": false, "function": "AttachFileInputs.addFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const files = toArray(input.files);
    files.forEach(file => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      try {
        this.uppy.addFile({
          source: this.id,
          name: file.name,
          type: file.type,
          data: file
        });
      } catch (err) {
        if (!err.isRestriction) {
          this.uppy.log(err);
        }
      }
            SRTlib.send('], "end": "emptyKey"},');

    });
        SRTlib.send('], "end": "addFiles"},');

  }
  install() {
        SRTlib.send(`{ "anonymous": false, "function": "AttachFileInputs.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.el = findDOMElement(this.opts.target);
    if (!this.el) {
            SRTlib.send('], "end": "install"},');

      throw new Error('[AttachFileInputs] Target form does not exist');
    }
    const {restrictions} = this.uppy.opts;
    this.inputs = this.el.querySelectorAll('input[type="file"]');
    this.inputs.forEach(input => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      input.addEventListener('change', this.handleChange);
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
      this.addFiles(input);
            SRTlib.send('], "end": "emptyKey2"},');

    });
        SRTlib.send('], "end": "install"},');

  }
  uninstall() {
        SRTlib.send(`{ "anonymous": false, "function": "AttachFileInputs.uninstall", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.inputs.forEach(input => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      input.removeEventListener('change', this.handleChange);
            SRTlib.send('], "end": "emptyKey3"},');

    });
    this.inputs = null;
        SRTlib.send('], "end": "uninstall"},');

  }
}
module.exports = AttachFileInputs;
