const SRTlib = require('SRT-util');

const {Plugin} = require('@uppy/core');
const Translator = require('@uppy/utils/lib/Translator');
const toArray = require('@uppy/utils/lib/toArray');
const isDragDropSupported = require('@uppy/utils/lib/isDragDropSupported');
const getDroppedFiles = require('@uppy/utils/lib/getDroppedFiles');
const {h} = require('preact');
module.exports = class DragDrop extends Plugin {
  static VERSION = require('../package.json').version
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"DragDrop","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.type = 'acquirer';
    this.id = this.opts.id || 'DragDrop';
    this.title = 'Drag & Drop';
    this.defaultLocale = {
      strings: {
        dropHereOr: 'Drop files here or %{browse}',
        browse: 'browse'
      }
    };
    const defaultOpts = {
      target: null,
      inputName: 'files[]',
      width: '100%',
      height: '100%',
      note: null
    };
    this.opts = {
      ...defaultOpts,
      ...opts
    };
    this.isDragDropSupported = isDragDropSupported();
    this.removeDragOverClassTimeout = null;
    this.i18nInit();
    this.onInputChange = this.onInputChange.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.addFiles = this.addFiles.bind(this);
    this.render = this.render.bind(this);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  setOptions(newOpts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setOptions","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"DragDrop","superClass":"Plugin"}},`);

    super.setOptions(newOpts);
    this.i18nInit();
        SRTlib.send('{"type":"FUNCTIONEND","function":"setOptions"},');

  }
  i18nInit() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i18nInit","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"DragDrop","superClass":"Plugin"}},`);

    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
    this.setPluginState();
        SRTlib.send('{"type":"FUNCTIONEND","function":"i18nInit"},');

  }
  addFiles(files) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addFiles","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"DragDrop","superClass":"Plugin"}},`);

    const descriptors = files.map(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.descriptors.files.map","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.descriptors.files.map"},');

      return {
        source: this.id,
        name: file.name,
        type: file.type,
        data: file,
        meta: {
          relativePath: file.relativePath || null
        }
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
  onInputChange(event) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onInputChange","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"DragDrop","superClass":"Plugin"}},`);

    this.uppy.log('[DragDrop] Files selected through input');
    const files = toArray(event.target.files);
    this.addFiles(files);
    event.target.value = null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"onInputChange"},');

  }
  handleDrop(event, dropCategory) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleDrop","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"DragDrop","superClass":"Plugin"}},`);

    event.preventDefault();
    event.stopPropagation();
    clearTimeout(this.removeDragOverClassTimeout);
    this.setPluginState({
      isDraggingOver: false
    });
    this.uppy.log('[DragDrop] Files were dropped');
    const logDropError = error => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"logDropError","fileName":"${__filename}","paramsNumber":1},`);

      this.uppy.log(error, 'error');
            SRTlib.send('{"type":"FUNCTIONEND","function":"logDropError"},');

    };
    getDroppedFiles(event.dataTransfer, {
      logDropError
    }).then(files => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getDroppedFiles.then","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getDroppedFiles.then"},');

      return this.addFiles(files);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getDroppedFiles.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleDrop"},');

  }
  handleDragOver(event) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleDragOver","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"DragDrop","superClass":"Plugin"}},`);

    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'copy';
    clearTimeout(this.removeDragOverClassTimeout);
    this.setPluginState({
      isDraggingOver: true
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleDragOver"},');

  }
  handleDragLeave(event) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleDragLeave","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"DragDrop","superClass":"Plugin"}},`);

    event.preventDefault();
    event.stopPropagation();
    clearTimeout(this.removeDragOverClassTimeout);
    this.removeDragOverClassTimeout = setTimeout(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.removeDragOverClassTimeout.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

      this.setPluginState({
        isDraggingOver: false
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.removeDragOverClassTimeout.setTimeout"},');

    }, 50);
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleDragLeave"},');

  }
  renderHiddenFileInput() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"renderHiddenFileInput","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"DragDrop","superClass":"Plugin"}},`);

    const restrictions = this.uppy.opts.restrictions;
        SRTlib.send('{"type":"FUNCTIONEND","function":"renderHiddenFileInput"},');

    return <input class="uppy-DragDrop-input" type="file" hidden ref={ref => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

      this.fileInputRef = ref;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement"},');

    }} name={this.opts.inputName} multiple={restrictions.maxNumberOfFiles !== 1} accept={restrictions.allowedFileTypes} onchange={this.onInputChange} />;
        SRTlib.send('{"type":"FUNCTIONEND","function":"renderHiddenFileInput"},');

  }
  renderArrowSvg() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"renderArrowSvg","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"DragDrop","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"renderArrowSvg"},');

    return <svg aria-hidden="true" focusable="false" class="uppy-c-icon uppy-DragDrop-arrow" width="16" height="16" viewBox="0 0 16 16">
        <path d="M11 10V0H5v10H2l6 6 6-6h-3zm0 0" fill-rule="evenodd" />
      </svg>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"renderArrowSvg"},');

  }
  renderLabel() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"renderLabel","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"DragDrop","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"renderLabel"},');

    return <div class="uppy-DragDrop-label">
        {this.i18nArray('dropHereOr', {
      browse: <span class="uppy-DragDrop-browse">{this.i18n('browse')}</span>
    })}
      </div>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"renderLabel"},');

  }
  renderNote() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"renderNote","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"DragDrop","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"renderNote"},');

    return <span class="uppy-DragDrop-note">{this.opts.note}</span>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"renderNote"},');

  }
  render(state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"DragDrop","superClass":"Plugin"}},`);

    const dragDropClass = `uppy-Root
      uppy-u-reset
      uppy-DragDrop-container
      ${this.isDragDropSupported ? 'uppy-DragDrop--isDragDropSupported' : ''}
      ${this.getPluginState().isDraggingOver ? 'uppy-DragDrop--isDraggingOver' : ''}
    `;
    const dragDropStyle = {
      width: this.opts.width,
      height: this.opts.height
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return <button type="button" class={dragDropClass} style={dragDropStyle} onClick={() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement2","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement2"},');

      return this.fileInputRef.click();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement2"},');

    }} onDragOver={this.handleDragOver} onDragLeave={this.handleDragLeave} onDrop={this.handleDrop}>
        {this.renderHiddenFileInput()}
        <div class="uppy-DragDrop-inner">
          {this.renderArrowSvg()}
          {this.renderLabel()}
          {this.renderNote()}
        </div>
      </button>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"DragDrop","superClass":"Plugin"}},`);

    this.setPluginState({
      isDraggingOver: false
    });
    const target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

  }
  uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"DragDrop","superClass":"Plugin"}},`);

    this.unmount();
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');

  }
};
