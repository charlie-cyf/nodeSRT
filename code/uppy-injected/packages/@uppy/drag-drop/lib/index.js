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
/**
* Drag & Drop plugin
*
*/
module.exports = (_temp = _class = (function (_Plugin) {
  /*#__PURE__*/
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(DragDrop, _Plugin);
  function DragDrop(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"DragDrop","fileName":"${__filename}","paramsNumber":2},`);

    var _this;
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.type = 'acquirer';
    _this.id = _this.opts.id || 'DragDrop';
    _this.title = 'Drag & Drop';
    // Default options
    _this.defaultLocale = {
      strings: {
        dropHereOr: 'Drop files here or %{browse}',
        browse: 'browse'
      }
    };
    // Merge default options with the ones set by user
    var defaultOpts = {
      target: null,
      inputName: 'files[]',
      width: '100%',
      height: '100%',
      note: null
    };
    // Check for browser dragDrop support
    _this.opts = _extends({}, defaultOpts, {}, opts);
    _this.isDragDropSupported = isDragDropSupported();
    _this.removeDragOverClassTimeout = null;
    // Bind `this` to class methods
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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.setOptions.setOptions","fileName":"${__filename}","paramsNumber":1},`);

    _Plugin.prototype.setOptions.call(this, newOpts);
    this.i18nInit();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.setOptions.setOptions"},');

  };
  _proto.i18nInit = function i18nInit() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.i18nInit.i18nInit","fileName":"${__filename}","paramsNumber":0},`);

    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
    // so that UI re-renders and we see the updated locale
    this.setPluginState();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.i18nInit.i18nInit"},');

  };
  _proto.addFiles = function addFiles(files) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.addFiles.addFiles","fileName":"${__filename}","paramsNumber":1},`);

    var _this2 = this;
    var descriptors = files.map(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.addFiles.addFiles.descriptors","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.addFiles.addFiles.descriptors"},');

      return {
        source: _this2.id,
        name: file.name,
        type: file.type,
        data: file,
        meta: {
          // path of the file relative to the ancestor directory the user selected.
          // e.g. 'docs/Old Prague/airbnb.pdf'
          relativePath: file.relativePath || null
        }
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.addFiles.addFiles.descriptors"},');

    });
    try {
      this.uppy.addFiles(descriptors);
    } catch (err) {
      this.uppy.log(err);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.addFiles.addFiles"},');

  };
  _proto.onInputChange = function onInputChange(event) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onInputChange.onInputChange","fileName":"${__filename}","paramsNumber":1},`);

    this.uppy.log('[DragDrop] Files selected through input');
    var files = toArray(event.target.files);
    // We clear the input after a file is selected, because otherwise
    this.addFiles(files);
    // change event is not fired in Chrome and Safari when a file
    // with the same name is selected.
    // ___Why not use value="" on <input/> instead?
    // Because if we use that method of clearing the input,
    // Chrome will not trigger change if we drop the same file twice (Issue #768).
    event.target.value = null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onInputChange.onInputChange"},');

  };
  _proto.handleDrop = function handleDrop(event, dropCategory) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleDrop.handleDrop","fileName":"${__filename}","paramsNumber":2},`);

    var _this3 = this;
    event.preventDefault();
    event.stopPropagation();
    // 2. Remove dragover class
    clearTimeout(this.removeDragOverClassTimeout);
    // 3. Add all dropped files
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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleDrop.handleDrop.then","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleDrop.handleDrop.then"},');

      return _this3.addFiles(files);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleDrop.handleDrop.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleDrop.handleDrop"},');

  };
  _proto.handleDragOver = function handleDragOver(event) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleDragOver.handleDragOver","fileName":"${__filename}","paramsNumber":1},`);

    event.preventDefault();
    // 1. Add a small (+) icon on drop
    event.stopPropagation();
    // (and prevent browsers from interpreting this as files being _moved_ into the browser, https://github.com/transloadit/uppy/issues/1978)
    event.dataTransfer.dropEffect = 'copy';
    clearTimeout(this.removeDragOverClassTimeout);
    this.setPluginState({
      isDraggingOver: true
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleDragOver.handleDragOver"},');

  };
  _proto.handleDragLeave = function handleDragLeave(event) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleDragLeave.handleDragLeave","fileName":"${__filename}","paramsNumber":1},`);

    var _this4 = this;
    event.preventDefault();
    event.stopPropagation();
    // Timeout against flickering, this solution is taken from drag-drop library. Solution with 'pointer-events: none' didn't work across browsers.
    clearTimeout(this.removeDragOverClassTimeout);
    this.removeDragOverClassTimeout = setTimeout(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleDragLeave.handleDragLeave.removeDragOverClassTimeout.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

      _this4.setPluginState({
        isDraggingOver: false
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleDragLeave.handleDragLeave.removeDragOverClassTimeout.setTimeout"},');

    }, 50);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleDragLeave.handleDragLeave"},');

  };
  _proto.renderHiddenFileInput = function renderHiddenFileInput() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.renderHiddenFileInput.renderHiddenFileInput","fileName":"${__filename}","paramsNumber":0},`);

    var _this5 = this;
    var restrictions = this.uppy.opts.restrictions;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderHiddenFileInput.renderHiddenFileInput"},');

    return h("input", {
      id: this.uppy.id + '-' + this.id,
      class: "uppy-DragDrop-input",
      type: "file",
      tabindex: -1,
      focusable: "false",
      ref: function ref(_ref) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.renderHiddenFileInput.renderHiddenFileInput.ReturnStatement.h.ref.ref","fileName":"${__filename}","paramsNumber":1},`);

        _this5.fileInputRef = _ref;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderHiddenFileInput.renderHiddenFileInput.ReturnStatement.h.ref.ref"},');

      },
      name: this.opts.inputName,
      multiple: restrictions.maxNumberOfFiles !== 1,
      accept: restrictions.allowedFileTypes,
      onchange: this.onInputChange
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderHiddenFileInput.renderHiddenFileInput"},');

  };
  _proto.renderArrowSvg = function renderArrowSvg() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.renderArrowSvg.renderArrowSvg","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderArrowSvg.renderArrowSvg"},');

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderArrowSvg.renderArrowSvg"},');

  };
  _proto.renderLabel = function renderLabel() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.renderLabel.renderLabel","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderLabel.renderLabel"},');

    return h("label", {
      class: "uppy-DragDrop-label",
      for: this.uppy.id + '-' + this.id
    }, this.i18nArray('dropHereOr', {
      browse: h("span", {
        class: "uppy-DragDrop-browse"
      }, this.i18n('browse'))
    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderLabel.renderLabel"},');

  };
  _proto.renderNote = function renderNote() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.renderNote.renderNote","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderNote.renderNote"},');

    return h("span", {
      class: "uppy-DragDrop-note"
    }, this.opts.note);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderNote.renderNote"},');

  };
  _proto.render = function render(state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.render.render","fileName":"${__filename}","paramsNumber":1},`);

    var _this6 = this;
    var dragDropClass = "\n      uppy-Root\n      uppy-u-reset\n      uppy-DragDrop-container\n      " + (this.isDragDropSupported ? 'uppy-DragDrop--is-dragdrop-supported' : '') + "\n      " + (this.getPluginState().isDraggingOver ? 'uppy-DragDrop--isDraggingOver' : '') + "\n    ";
    var dragDropStyle = {
      width: this.opts.width,
      height: this.opts.height
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render"},');

    return h("button", {
      type: "button",
      class: dragDropClass,
      style: dragDropStyle,
      onClick: function onClick() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.render.render.ReturnStatement.h.onClick.onClick","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.ReturnStatement.h.onClick.onClick"},');

        return _this6.fileInputRef.click();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.ReturnStatement.h.onClick.onClick"},');

      },
      onDragOver: this.handleDragOver,
      onDragLeave: this.handleDragLeave,
      onDrop: this.handleDrop
    }, this.renderHiddenFileInput(), h("div", {
      class: "uppy-DragDrop-inner"
    }, this.renderArrowSvg(), this.renderLabel(), this.renderNote()));
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render"},');

  };
  _proto.install = function install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.install.install","fileName":"${__filename}","paramsNumber":0},`);

    this.setPluginState({
      isDraggingOver: false
    });
    var target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.install.install"},');

  };
  _proto.uninstall = function uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uninstall.uninstall","fileName":"${__filename}","paramsNumber":0},`);

    this.unmount();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uninstall.uninstall"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');

  return DragDrop;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
