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
var Translator = require('@uppy/utils/lib/Translator');
var toArray = require('@uppy/utils/lib/toArray');
var isDragDropSupported = require('@uppy/utils/lib/isDragDropSupported');
var getDroppedFiles = require('@uppy/utils/lib/getDroppedFiles');
var _require2 = require('preact'), h = _require2.h;
module.exports = (_temp = _class = (function (_Plugin) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(DragDrop, _Plugin);
  function DragDrop(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"DragDrop","fileName":"${__filename}","paramsNumber":2},`);

    var _this;
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.type = 'acquirer';
    _this.id = _this.opts.id || 'DragDrop';
    _this.title = 'Drag & Drop';
    _this.defaultLocale = {
      strings: {
        dropHereOr: 'Drop files here or %{browse}',
        browse: 'browse'
      }
    };
    var defaultOpts = {
      target: null,
      inputName: 'files[]',
      width: '100%',
      height: '100%',
      note: null
    };
    _this.opts = _extends({}, defaultOpts, {}, opts);
    _this.isDragDropSupported = isDragDropSupported();
    _this.removeDragOverClassTimeout = null;
    _this.i18nInit();
    _this.onInputChange = _this.onInputChange.bind(_assertThisInitialized(_this));
    _this.handleDragOver = _this.handleDragOver.bind(_assertThisInitialized(_this));
    _this.handleDragLeave = _this.handleDragLeave.bind(_assertThisInitialized(_this));
    _this.handleDrop = _this.handleDrop.bind(_assertThisInitialized(_this));
    _this.addFiles = _this.addFiles.bind(_assertThisInitialized(_this));
    _this.render = _this.render.bind(_assertThisInitialized(_this));
        SRTlib.send('{"type":"FUNCTIONEND","function":"DragDrop"},');

    return _this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"DragDrop","paramsNumber":2},');

  }
  var _proto = DragDrop.prototype;
  _proto.setOptions = function setOptions(newOpts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.setOptions","fileName":"${__filename}","paramsNumber":1},`);

    _Plugin.prototype.setOptions.call(this, newOpts);
    this.i18nInit();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.setOptions"},');

  };
  _proto.i18nInit = function i18nInit() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.i18nInit","fileName":"${__filename}","paramsNumber":0},`);

    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
    this.setPluginState();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.i18nInit"},');

  };
  _proto.addFiles = function addFiles(files) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.addFiles","fileName":"${__filename}","paramsNumber":1},`);

    var _this2 = this;
    var descriptors = files.map(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.addFiles.addFiles.descriptors.files.map","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.addFiles.addFiles.descriptors.files.map"},');

      return {
        source: _this2.id,
        name: file.name,
        type: file.type,
        data: file,
        meta: {
          relativePath: file.relativePath || null
        }
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.addFiles.addFiles.descriptors.files.map"},');

    });
    try {
      this.uppy.addFiles(descriptors);
    } catch (err) {
      this.uppy.log(err);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.addFiles"},');

  };
  _proto.onInputChange = function onInputChange(event) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onInputChange","fileName":"${__filename}","paramsNumber":1},`);

    this.uppy.log('[DragDrop] Files selected through input');
    var files = toArray(event.target.files);
    this.addFiles(files);
    event.target.value = null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onInputChange"},');

  };
  _proto.handleDrop = function handleDrop(event, dropCategory) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleDrop","fileName":"${__filename}","paramsNumber":2},`);

    var _this3 = this;
    event.preventDefault();
    event.stopPropagation();
    clearTimeout(this.removeDragOverClassTimeout);
    this.setPluginState({
      isDraggingOver: false
    });
    this.uppy.log('[DragDrop] Files were dropped');
    var logDropError = function logDropError(error) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"logDropError","fileName":"${__filename}","paramsNumber":1},`);

      _this3.uppy.log(error, 'error');
            SRTlib.send('{"type":"FUNCTIONEND","function":"logDropError"},');

    };
    getDroppedFiles(event.dataTransfer, {
      logDropError: logDropError
    }).then(function (files) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleDrop.handleDrop.getDroppedFiles.then","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleDrop.handleDrop.getDroppedFiles.then"},');

      return _this3.addFiles(files);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleDrop.handleDrop.getDroppedFiles.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleDrop"},');

  };
  _proto.handleDragOver = function handleDragOver(event) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleDragOver","fileName":"${__filename}","paramsNumber":1},`);

    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'copy';
    clearTimeout(this.removeDragOverClassTimeout);
    this.setPluginState({
      isDraggingOver: true
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleDragOver"},');

  };
  _proto.handleDragLeave = function handleDragLeave(event) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleDragLeave","fileName":"${__filename}","paramsNumber":1},`);

    var _this4 = this;
    event.preventDefault();
    event.stopPropagation();
    clearTimeout(this.removeDragOverClassTimeout);
    this.removeDragOverClassTimeout = setTimeout(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleDragLeave.handleDragLeave.removeDragOverClassTimeout.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

      _this4.setPluginState({
        isDraggingOver: false
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleDragLeave.handleDragLeave.removeDragOverClassTimeout.setTimeout"},');

    }, 50);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleDragLeave"},');

  };
  _proto.renderHiddenFileInput = function renderHiddenFileInput() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.renderHiddenFileInput","fileName":"${__filename}","paramsNumber":0},`);

    var _this5 = this;
    var restrictions = this.uppy.opts.restrictions;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderHiddenFileInput"},');

    return h("input", {
      id: this.uppy.id + '-' + this.id,
      class: "uppy-DragDrop-input",
      type: "file",
      tabindex: -1,
      focusable: "false",
      ref: function ref(_ref) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.renderHiddenFileInput.renderHiddenFileInput.ReturnStatement.h.ref","fileName":"${__filename}","paramsNumber":1},`);

        _this5.fileInputRef = _ref;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderHiddenFileInput.renderHiddenFileInput.ReturnStatement.h.ref"},');

      },
      name: this.opts.inputName,
      multiple: restrictions.maxNumberOfFiles !== 1,
      accept: restrictions.allowedFileTypes,
      onchange: this.onInputChange
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderHiddenFileInput"},');

  };
  _proto.renderArrowSvg = function renderArrowSvg() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.renderArrowSvg","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderArrowSvg"},');

    return h("svg", {
      "aria-hidden": "true",
      focusable: "false",
      class: "UppyIcon uppy-DragDrop-arrow",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16"
    }, h("path", {
      d: "M11 10V0H5v10H2l6 6 6-6h-3zm0 0",
      "fill-rule": "evenodd"
    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderArrowSvg"},');

  };
  _proto.renderLabel = function renderLabel() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.renderLabel","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderLabel"},');

    return h("label", {
      class: "uppy-DragDrop-label",
      for: this.uppy.id + '-' + this.id
    }, this.i18nArray('dropHereOr', {
      browse: h("span", {
        class: "uppy-DragDrop-browse"
      }, this.i18n('browse'))
    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderLabel"},');

  };
  _proto.renderNote = function renderNote() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.renderNote","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderNote"},');

    return h("span", {
      class: "uppy-DragDrop-note"
    }, this.opts.note);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderNote"},');

  };
  _proto.render = function render(state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.render","fileName":"${__filename}","paramsNumber":1},`);

    var _this6 = this;
    var dragDropClass = "\n      uppy-Root\n      uppy-u-reset\n      uppy-DragDrop-container\n      " + (this.isDragDropSupported ? 'uppy-DragDrop--is-dragdrop-supported' : '') + "\n      " + (this.getPluginState().isDraggingOver ? 'uppy-DragDrop--isDraggingOver' : '') + "\n    ";
    var dragDropStyle = {
      width: this.opts.width,
      height: this.opts.height
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render"},');

    return h("button", {
      type: "button",
      class: dragDropClass,
      style: dragDropStyle,
      onClick: function onClick() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.render.render.ReturnStatement.h.onClick","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.ReturnStatement.h.onClick"},');

        return _this6.fileInputRef.click();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.ReturnStatement.h.onClick"},');

      },
      onDragOver: this.handleDragOver,
      onDragLeave: this.handleDragLeave,
      onDrop: this.handleDrop
    }, this.renderHiddenFileInput(), h("div", {
      class: "uppy-DragDrop-inner"
    }, this.renderArrowSvg(), this.renderLabel(), this.renderNote()));
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render"},');

  };
  _proto.install = function install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.install","fileName":"${__filename}","paramsNumber":0},`);

    this.setPluginState({
      isDraggingOver: false
    });
    var target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.install"},');

  };
  _proto.uninstall = function uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uninstall","fileName":"${__filename}","paramsNumber":0},`);

    this.unmount();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uninstall"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');

  return DragDrop;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
