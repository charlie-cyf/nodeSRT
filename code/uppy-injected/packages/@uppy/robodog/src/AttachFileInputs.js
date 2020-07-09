const SRTlib = require('SRT-util');

const {Plugin} = require('@uppy/core');
const toArray = require('@uppy/utils/lib/toArray');
const findDOMElement = require('@uppy/utils/lib/findDOMElement');
class AttachFileInputs extends Plugin {
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"AttachFileInputs","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.id = this.opts.id || 'AttachFileInputs';
    this.type = 'acquirer';
    this.handleChange = this.handleChange.bind(this);
    this.inputs = null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  handleChange(event) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleChange","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"AttachFileInputs","superClass":"Plugin"}},`);

    this.addFiles(event.target);
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleChange"},');

  }
  addFiles(input) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addFiles","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"AttachFileInputs","superClass":"Plugin"}},`);

    const files = toArray(input.files);
    files.forEach(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"files.forEach","fileName":"${__filename}","paramsNumber":1},`);

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
            SRTlib.send('{"type":"FUNCTIONEND","function":"files.forEach"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"addFiles"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"AttachFileInputs","superClass":"Plugin"}},`);

    this.el = findDOMElement(this.opts.target);
    if (!this.el) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

      throw new Error('[AttachFileInputs] Target form does not exist');
    }
    const {restrictions} = this.uppy.opts;
    this.inputs = this.el.querySelectorAll('input[type="file"]');
    this.inputs.forEach(input => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"inputs.forEach","fileName":"${__filename}","paramsNumber":1},`);

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
            SRTlib.send('{"type":"FUNCTIONEND","function":"inputs.forEach"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

  }
  uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"AttachFileInputs","superClass":"Plugin"}},`);

    this.inputs.forEach(input => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"inputs.forEach###2","fileName":"${__filename}","paramsNumber":1},`);

      input.removeEventListener('change', this.handleChange);
            SRTlib.send('{"type":"FUNCTIONEND","function":"inputs.forEach###2"},');

    });
    this.inputs = null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');

  }
}
module.exports = AttachFileInputs;
