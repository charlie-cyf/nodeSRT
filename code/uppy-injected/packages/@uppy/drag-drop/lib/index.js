var SRTlib = require('SRT-util');
var _class, _temp;
function _extends() {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send("]},");

    return target;
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

  return _extends.apply(this, arguments);
    SRTlib.send("]},");

}
function _assertThisInitialized(self) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
    SRTlib.send("]},");

  return self;
    SRTlib.send("]},");

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send("]},");

}
var _require = require('@uppy/core'), Plugin = _require.Plugin;
var Translator = require('@uppy/utils/lib/Translator');
var toArray = require('@uppy/utils/lib/toArray');
var isDragDropSupported = require('@uppy/utils/lib/isDragDropSupported');
var getDroppedFiles = require('@uppy/utils/lib/getDroppedFiles');
var _require2 = require('preact'), h = _require2.h;
module.exports = (_temp = _class = (function (_Plugin) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(DragDrop, _Plugin);
  function DragDrop(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
        SRTlib.send("]},");

    return _this;
        SRTlib.send("]},");

  }
  var _proto = DragDrop.prototype;
  _proto.setOptions = function setOptions(newOpts) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.setOptions.setOptions", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    _Plugin.prototype.setOptions.call(this, newOpts);
    this.i18nInit();
        SRTlib.send("]},");

  };
  _proto.i18nInit = function i18nInit() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.i18nInit.i18nInit", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
    this.setPluginState();
        SRTlib.send("]},");

  };
  _proto.addFiles = function addFiles(files) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.addFiles.addFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this2 = this;
    var descriptors = files.map(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.addFiles.addFiles.descriptors", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return {
        source: _this2.id,
        name: file.name,
        type: file.type,
        data: file,
        meta: {
          relativePath: file.relativePath || null
        }
      };
            SRTlib.send("]},");

    });
    try {
      this.uppy.addFiles(descriptors);
    } catch (err) {
      this.uppy.log(err);
    }
        SRTlib.send("]},");

  };
  _proto.onInputChange = function onInputChange(event) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onInputChange.onInputChange", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.uppy.log('[DragDrop] Files selected through input');
    var files = toArray(event.target.files);
    this.addFiles(files);
    event.target.value = null;
        SRTlib.send("]},");

  };
  _proto.handleDrop = function handleDrop(event, dropCategory) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.handleDrop.handleDrop", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this3 = this;
    event.preventDefault();
    event.stopPropagation();
    clearTimeout(this.removeDragOverClassTimeout);
    this.setPluginState({
      isDraggingOver: false
    });
    this.uppy.log('[DragDrop] Files were dropped');
    var logDropError = function logDropError(error) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.handleDrop.handleDrop.logDropError.logDropError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this3.uppy.log(error, 'error');
            SRTlib.send("]},");

    };
    getDroppedFiles(event.dataTransfer, {
      logDropError: logDropError
    }).then(function (files) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.handleDrop.handleDrop.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return _this3.addFiles(files);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.handleDragOver = function handleDragOver(event) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.handleDragOver.handleDragOver", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'copy';
    clearTimeout(this.removeDragOverClassTimeout);
    this.setPluginState({
      isDraggingOver: true
    });
        SRTlib.send("]},");

  };
  _proto.handleDragLeave = function handleDragLeave(event) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.handleDragLeave.handleDragLeave", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this4 = this;
    event.preventDefault();
    event.stopPropagation();
    clearTimeout(this.removeDragOverClassTimeout);
    this.removeDragOverClassTimeout = setTimeout(function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.handleDragLeave.handleDragLeave.removeDragOverClassTimeout.setTimeout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this4.setPluginState({
        isDraggingOver: false
      });
            SRTlib.send("]},");

    }, 50);
        SRTlib.send("]},");

  };
  _proto.renderHiddenFileInput = function renderHiddenFileInput() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.renderHiddenFileInput.renderHiddenFileInput", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this5 = this;
    var restrictions = this.uppy.opts.restrictions;
        SRTlib.send("]},");

    return h("input", {
      id: this.uppy.id + '-' + this.id,
      class: "uppy-DragDrop-input",
      type: "file",
      tabindex: -1,
      focusable: "false",
      ref: function ref(_ref) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.renderHiddenFileInput.renderHiddenFileInput.ReturnStatement.h.ref.ref", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this5.fileInputRef = _ref;
                SRTlib.send("]},");

      },
      name: this.opts.inputName,
      multiple: restrictions.maxNumberOfFiles !== 1,
      accept: restrictions.allowedFileTypes,
      onchange: this.onInputChange
    });
        SRTlib.send("]},");

  };
  _proto.renderArrowSvg = function renderArrowSvg() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.renderArrowSvg.renderArrowSvg", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

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
        SRTlib.send("]},");

  };
  _proto.renderLabel = function renderLabel() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.renderLabel.renderLabel", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return h("label", {
      class: "uppy-DragDrop-label",
      for: this.uppy.id + '-' + this.id
    }, this.i18nArray('dropHereOr', {
      browse: h("span", {
        class: "uppy-DragDrop-browse"
      }, this.i18n('browse'))
    }));
        SRTlib.send("]},");

  };
  _proto.renderNote = function renderNote() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.renderNote.renderNote", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return h("span", {
      class: "uppy-DragDrop-note"
    }, this.opts.note);
        SRTlib.send("]},");

  };
  _proto.render = function render(state) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.render.render", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this6 = this;
    var dragDropClass = "\n      uppy-Root\n      uppy-u-reset\n      uppy-DragDrop-container\n      " + (this.isDragDropSupported ? 'uppy-DragDrop--is-dragdrop-supported' : '') + "\n      " + (this.getPluginState().isDraggingOver ? 'uppy-DragDrop--isDraggingOver' : '') + "\n    ";
    var dragDropStyle = {
      width: this.opts.width,
      height: this.opts.height
    };
        SRTlib.send("]},");

    return h("button", {
      type: "button",
      class: dragDropClass,
      style: dragDropStyle,
      onClick: function onClick() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.render.render.ReturnStatement.h.onClick.onClick", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

        return _this6.fileInputRef.click();
                SRTlib.send("]},");

      },
      onDragOver: this.handleDragOver,
      onDragLeave: this.handleDragLeave,
      onDrop: this.handleDrop
    }, this.renderHiddenFileInput(), h("div", {
      class: "uppy-DragDrop-inner"
    }, this.renderArrowSvg(), this.renderLabel(), this.renderNote()));
        SRTlib.send("]},");

  };
  _proto.install = function install() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.install.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.setPluginState({
      isDraggingOver: false
    });
    var target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
        SRTlib.send("]},");

  };
  _proto.uninstall = function uninstall() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uninstall.uninstall", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.unmount();
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return DragDrop;
    SRTlib.send("]},");

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
