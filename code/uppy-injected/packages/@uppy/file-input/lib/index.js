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
var toArray = require('@uppy/utils/lib/toArray');
var Translator = require('@uppy/utils/lib/Translator');
var _require2 = require('preact'), h = _require2.h;
module.exports = (_temp = _class = (function (_Plugin) {
  /*#__PURE__*/
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(FileInput, _Plugin);
  function FileInput(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"FileInput","fileName":"${__filename}","paramsNumber":2},`);

    var _this;
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.id = _this.opts.id || 'FileInput';
    _this.title = 'File Input';
    _this.type = 'acquirer';
    _this.defaultLocale = {
      strings: {
        // The same key is used for the same purpose by @uppy/robodog's `form()` API, but our
        // locale pack scripts can't access it in Robodog. If it is updated here, it should
        // also be updated there!
        chooseFiles: 'Choose files'
      }
    };
    // Default options
    // Merge default options with the ones set by user
    var defaultOptions = {
      target: null,
      pretty: true,
      inputName: 'files[]'
    };
    _this.opts = _extends({}, defaultOptions, {}, opts);
    _this.i18nInit();
    _this.render = _this.render.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
        SRTlib.send('{"type":"FUNCTIONEND","function":"FileInput"},');

    return _this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"FileInput","paramsNumber":2},');

  }
  var _proto = FileInput.prototype;
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
        data: file
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
  _proto.handleInputChange = function handleInputChange(event) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleInputChange.handleInputChange","fileName":"${__filename}","paramsNumber":1},`);

    this.uppy.log('[FileInput] Something selected through input...');
    var files = toArray(event.target.files);
    // We clear the input after a file is selected, because otherwise
    this.addFiles(files);
    // change event is not fired in Chrome and Safari when a file
    // with the same name is selected.
    // ___Why not use value="" on <input/> instead?
    // Because if we use that method of clearing the input,
    // Chrome will not trigger change if we drop the same file twice (Issue #768).
    event.target.value = null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleInputChange.handleInputChange"},');

  };
  _proto.handleClick = function handleClick(ev) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleClick.handleClick","fileName":"${__filename}","paramsNumber":1},`);

    this.input.click();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleClick.handleClick"},');

  };
  _proto.render = function render(state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.render.render","fileName":"${__filename}","paramsNumber":1},`);

    var _this3 = this;
    /*http://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/*/
    var hiddenInputStyle = {
      width: '0.1px',
      height: '0.1px',
      opacity: 0,
      overflow: 'hidden',
      position: 'absolute',
      zIndex: -1
    };
    var restrictions = this.uppy.opts.restrictions;
    var accept = restrictions.allowedFileTypes ? restrictions.allowedFileTypes.join(',') : null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render"},');

    return h("div", {
      class: "uppy-Root uppy-FileInput-container"
    }, h("input", {
      class: "uppy-FileInput-input",
      style: this.opts.pretty && hiddenInputStyle,
      type: "file",
      name: this.opts.inputName,
      onchange: this.handleInputChange,
      multiple: restrictions.maxNumberOfFiles !== 1,
      accept: accept,
      ref: function ref(input) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.render.render.ReturnStatement.h.h.ref.ref","fileName":"${__filename}","paramsNumber":1},`);

        _this3.input = input;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.ReturnStatement.h.h.ref.ref"},');

      }
    }), this.opts.pretty && h("button", {
      class: "uppy-FileInput-btn",
      type: "button",
      onclick: this.handleClick
    }, this.i18n('chooseFiles')));
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render"},');

  };
  _proto.install = function install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.install.install","fileName":"${__filename}","paramsNumber":0},`);

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

  return FileInput;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
