const SRTlib = require('SRT-util');

const {Plugin} = require('@uppy/core');
const toArray = require('@uppy/utils/lib/toArray');
const Translator = require('@uppy/utils/lib/Translator');
const {h} = require('preact');
module.exports = class FileInput extends Plugin {
  static VERSION = require('../package.json').version
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/file-input/src/index.js","paramsNumber":2,"classInfo":{"className":"FileInput","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.id = this.opts.id || 'FileInput';
    this.title = 'File Input';
    this.type = 'acquirer';
    this.defaultLocale = {
      strings: {
        chooseFiles: 'Choose files'
      }
    };
    const defaultOptions = {
      target: null,
      pretty: true,
      inputName: 'files[]'
    };
    this.opts = {
      ...defaultOptions,
      ...opts
    };
    this.i18nInit();
    this.render = this.render.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  setOptions(newOpts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setOptions","fileName":"/packages/@uppy/file-input/src/index.js","paramsNumber":1,"classInfo":{"className":"FileInput","superClass":"Plugin"}},`);

    super.setOptions(newOpts);
    this.i18nInit();
        SRTlib.send('{"type":"FUNCTIONEND","function":"setOptions"},');

  }
  i18nInit() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i18nInit","fileName":"/packages/@uppy/file-input/src/index.js","paramsNumber":0,"classInfo":{"className":"FileInput","superClass":"Plugin"}},`);

    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
    this.setPluginState();
        SRTlib.send('{"type":"FUNCTIONEND","function":"i18nInit"},');

  }
  addFiles(files) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addFiles","fileName":"/packages/@uppy/file-input/src/index.js","paramsNumber":1,"classInfo":{"className":"FileInput","superClass":"Plugin"}},`);

    const descriptors = files.map(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.descriptors.files.map","fileName":"/packages/@uppy/file-input/src/index.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.descriptors.files.map"},');

      return {
        source: this.id,
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

  }
  handleInputChange(event) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleInputChange","fileName":"/packages/@uppy/file-input/src/index.js","paramsNumber":1,"classInfo":{"className":"FileInput","superClass":"Plugin"}},`);

    this.uppy.log('[FileInput] Something selected through input...');
    const files = toArray(event.target.files);
    this.addFiles(files);
    event.target.value = null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleInputChange"},');

  }
  handleClick(ev) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleClick","fileName":"/packages/@uppy/file-input/src/index.js","paramsNumber":1,"classInfo":{"className":"FileInput","superClass":"Plugin"}},`);

    this.input.click();
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleClick"},');

  }
  render(state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"/packages/@uppy/file-input/src/index.js","paramsNumber":1,"classInfo":{"className":"FileInput","superClass":"Plugin"}},`);

    const hiddenInputStyle = {
      width: '0.1px',
      height: '0.1px',
      opacity: 0,
      overflow: 'hidden',
      position: 'absolute',
      zIndex: -1
    };
    const restrictions = this.uppy.opts.restrictions;
    const accept = restrictions.allowedFileTypes ? restrictions.allowedFileTypes.join(',') : null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return <div class="uppy-Root uppy-FileInput-container">
        <input class="uppy-FileInput-input" style={this.opts.pretty && hiddenInputStyle} type="file" name={this.opts.inputName} onchange={this.handleInputChange} multiple={restrictions.maxNumberOfFiles !== 1} accept={accept} ref={input => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement","fileName":"/packages/@uppy/file-input/src/index.js","paramsNumber":1},`);

      this.input = input;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement"},');

    }} />
        {this.opts.pretty && <button class="uppy-FileInput-btn" type="button" onclick={this.handleClick}>
            {this.i18n('chooseFiles')}
          </button>}
      </div>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"/packages/@uppy/file-input/src/index.js","paramsNumber":0,"classInfo":{"className":"FileInput","superClass":"Plugin"}},`);

    const target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

  }
  uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"/packages/@uppy/file-input/src/index.js","paramsNumber":0,"classInfo":{"className":"FileInput","superClass":"Plugin"}},`);

    this.unmount();
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');

  }
};
