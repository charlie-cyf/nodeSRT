var _class, _temp;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('@uppy/core'),
    Plugin = _require.Plugin;

var Translator = require('@uppy/utils/lib/Translator');

var toArray = require('@uppy/utils/lib/toArray');

var isDragDropSupported = require('@uppy/utils/lib/isDragDropSupported');

var getDroppedFiles = require('@uppy/utils/lib/getDroppedFiles');

var _require2 = require('preact'),
    h = _require2.h;

module.exports = (_temp = _class = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose(DragDrop, _Plugin);

  function DragDrop(uppy, opts) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"/packages/@uppy/drag-drop/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"DragDrop\",\"superClass\":\"Plugin\"}},");
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
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = DragDrop.prototype;

  _proto.setOptions = function setOptions(newOpts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"setOptions\",\"fileName\":\"/packages/@uppy/drag-drop/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"DragDrop\",\"superClass\":\"Plugin\"}},");

    _Plugin.prototype.setOptions.call(this, newOpts);

    this.i18nInit();
    SRTlib.send('{"type":"FUNCTIONEND","function":"setOptions"},');
  };

  _proto.i18nInit = function i18nInit() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"i18nInit\",\"fileName\":\"/packages/@uppy/drag-drop/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"DragDrop\",\"superClass\":\"Plugin\"}},");
    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
    this.setPluginState();
    SRTlib.send('{"type":"FUNCTIONEND","function":"i18nInit"},');
  };

  _proto.addFiles = function addFiles(files) {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"addFiles\",\"fileName\":\"/packages/@uppy/drag-drop/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"DragDrop\",\"superClass\":\"Plugin\"}},");
    var descriptors = files.map(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.descriptors.files.map\",\"fileName\":\"/packages/@uppy/drag-drop/src/index.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.descriptors.files.map"},');
      return {
        source: _this2.id,
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
  };

  _proto.onInputChange = function onInputChange(event) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onInputChange\",\"fileName\":\"/packages/@uppy/drag-drop/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"DragDrop\",\"superClass\":\"Plugin\"}},");
    this.uppy.log('[DragDrop] Files selected through input');
    var files = toArray(event.target.files);
    this.addFiles(files);
    event.target.value = null;
    SRTlib.send('{"type":"FUNCTIONEND","function":"onInputChange"},');
  };

  _proto.handleDrop = function handleDrop(event, dropCategory) {
    var _this3 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handleDrop\",\"fileName\":\"/packages/@uppy/drag-drop/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"DragDrop\",\"superClass\":\"Plugin\"}},");
    event.preventDefault();
    event.stopPropagation();
    clearTimeout(this.removeDragOverClassTimeout);
    this.setPluginState({
      isDraggingOver: false
    });
    this.uppy.log('[DragDrop] Files were dropped');

    var logDropError = function logDropError(error) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"logDropError\",\"fileName\":\"/packages/@uppy/drag-drop/src/index.js\",\"paramsNumber\":1},");

      _this3.uppy.log(error, 'error');

      SRTlib.send('{"type":"FUNCTIONEND","function":"logDropError"},');
    };

    getDroppedFiles(event.dataTransfer, {
      logDropError: logDropError
    }).then(function (files) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.getDroppedFiles.then\",\"fileName\":\"/packages/@uppy/drag-drop/src/index.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getDroppedFiles.then"},');
      return _this3.addFiles(files);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getDroppedFiles.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"handleDrop"},');
  };

  _proto.handleDragOver = function handleDragOver(event) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handleDragOver\",\"fileName\":\"/packages/@uppy/drag-drop/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"DragDrop\",\"superClass\":\"Plugin\"}},");
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'copy';
    clearTimeout(this.removeDragOverClassTimeout);
    this.setPluginState({
      isDraggingOver: true
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"handleDragOver"},');
  };

  _proto.handleDragLeave = function handleDragLeave(event) {
    var _this4 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handleDragLeave\",\"fileName\":\"/packages/@uppy/drag-drop/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"DragDrop\",\"superClass\":\"Plugin\"}},");
    event.preventDefault();
    event.stopPropagation();
    clearTimeout(this.removeDragOverClassTimeout);
    this.removeDragOverClassTimeout = setTimeout(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.removeDragOverClassTimeout.setTimeout\",\"fileName\":\"/packages/@uppy/drag-drop/src/index.js\",\"paramsNumber\":0},");

      _this4.setPluginState({
        isDraggingOver: false
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.removeDragOverClassTimeout.setTimeout"},');
    }, 50);
    SRTlib.send('{"type":"FUNCTIONEND","function":"handleDragLeave"},');
  };

  _proto.renderHiddenFileInput = function renderHiddenFileInput() {
    var _this5 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"renderHiddenFileInput\",\"fileName\":\"/packages/@uppy/drag-drop/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"DragDrop\",\"superClass\":\"Plugin\"}},");
    var restrictions = this.uppy.opts.restrictions;
    SRTlib.send('{"type":"FUNCTIONEND","function":"renderHiddenFileInput"},');
    return h("input", {
      class: "uppy-DragDrop-input",
      type: "file",
      tabindex: -1,
      focusable: "false",
      ref: function ref(_ref) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement\",\"fileName\":\"/packages/@uppy/drag-drop/src/index.js\",\"paramsNumber\":1},");
        _this5.fileInputRef = _ref;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement"},');
      },
      name: this.opts.inputName,
      multiple: restrictions.maxNumberOfFiles !== 1,
      accept: restrictions.allowedFileTypes,
      onchange: this.onInputChange
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"renderHiddenFileInput"},');
  };

  _proto.renderArrowSvg = function renderArrowSvg() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"renderArrowSvg\",\"fileName\":\"/packages/@uppy/drag-drop/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"DragDrop\",\"superClass\":\"Plugin\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"renderArrowSvg"},');
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
    SRTlib.send('{"type":"FUNCTIONEND","function":"renderArrowSvg"},');
  };

  _proto.renderLabel = function renderLabel() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"renderLabel\",\"fileName\":\"/packages/@uppy/drag-drop/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"DragDrop\",\"superClass\":\"Plugin\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"renderLabel"},');
    return h("div", {
      class: "uppy-DragDrop-label"
    }, this.i18nArray('dropHereOr', {
      browse: h("span", {
        class: "uppy-DragDrop-browse"
      }, this.i18n('browse'))
    }));
    SRTlib.send('{"type":"FUNCTIONEND","function":"renderLabel"},');
  };

  _proto.renderNote = function renderNote() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"renderNote\",\"fileName\":\"/packages/@uppy/drag-drop/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"DragDrop\",\"superClass\":\"Plugin\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"renderNote"},');
    return h("span", {
      class: "uppy-DragDrop-note"
    }, this.opts.note);
    SRTlib.send('{"type":"FUNCTIONEND","function":"renderNote"},');
  };

  _proto.render = function render(state) {
    var _this6 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"render\",\"fileName\":\"/packages/@uppy/drag-drop/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"DragDrop\",\"superClass\":\"Plugin\"}},");
    var dragDropClass = "\n      uppy-Root\n      uppy-u-reset\n      uppy-DragDrop-container\n      " + (this.isDragDropSupported ? 'uppy-DragDrop--is-dragdrop-supported' : '') + "\n      " + (this.getPluginState().isDraggingOver ? 'uppy-DragDrop--isDraggingOver' : '') + "\n    ";
    var dragDropStyle = {
      width: this.opts.width,
      height: this.opts.height
    };
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
    return h("button", {
      type: "button",
      class: dragDropClass,
      style: dragDropStyle,
      onClick: function onClick() {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement###2\",\"fileName\":\"/packages/@uppy/drag-drop/src/index.js\",\"paramsNumber\":0},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement###2"},');
        return _this6.fileInputRef.click();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement###2"},');
      },
      onDragOver: this.handleDragOver,
      onDragLeave: this.handleDragLeave,
      onDrop: this.handleDrop
    }, this.renderHiddenFileInput(), h("div", {
      class: "uppy-DragDrop-inner"
    }, this.renderArrowSvg(), this.renderLabel(), this.renderNote()));
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
  };

  _proto.install = function install() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"install\",\"fileName\":\"/packages/@uppy/drag-drop/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"DragDrop\",\"superClass\":\"Plugin\"}},");
    this.setPluginState({
      isDraggingOver: false
    });
    var target = this.opts.target;

    if (target) {
      this.mount(target, this);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');
  };

  _proto.uninstall = function uninstall() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uninstall\",\"fileName\":\"/packages/@uppy/drag-drop/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"DragDrop\",\"superClass\":\"Plugin\"}},");
    this.unmount();
    SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');
  };

  return DragDrop;
}(Plugin), _class.VERSION = require('../package.json').version, _temp);