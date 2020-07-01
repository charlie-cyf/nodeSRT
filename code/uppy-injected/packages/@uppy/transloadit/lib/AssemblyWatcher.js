function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var Emitter = require('component-emitter');

var TransloaditAssemblyWatcher = /*#__PURE__*/function (_Emitter) {
  _inheritsLoose(TransloaditAssemblyWatcher, _Emitter);

  function TransloaditAssemblyWatcher(uppy, assemblyIDs) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"TransloaditAssemblyWatcher\",\"superClass\":\"Emitter\"}},");
    _this = _Emitter.call(this) || this;
    _this._uppy = uppy;
    _this._assemblyIDs = assemblyIDs;
    _this._remaining = assemblyIDs.length;
    _this.promise = new Promise(function (resolve, reject) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"promise.NewExpression\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
      _this._resolve = resolve;
      _this._reject = reject;
      SRTlib.send('{"type":"FUNCTIONEND","function":"promise.NewExpression"},');
    });
    _this._onAssemblyComplete = _this._onAssemblyComplete.bind(_assertThisInitialized(_this));
    _this._onAssemblyCancel = _this._onAssemblyCancel.bind(_assertThisInitialized(_this));
    _this._onAssemblyError = _this._onAssemblyError.bind(_assertThisInitialized(_this));
    _this._onImportError = _this._onImportError.bind(_assertThisInitialized(_this));

    _this._addListeners();

    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = TransloaditAssemblyWatcher.prototype;

  _proto._watching = function _watching(id) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_watching\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"TransloaditAssemblyWatcher\",\"superClass\":\"Emitter\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"_watching"},');
    return this._assemblyIDs.indexOf(id) !== -1;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_watching"},');
  };

  _proto._onAssemblyComplete = function _onAssemblyComplete(assembly) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_onAssemblyComplete\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"TransloaditAssemblyWatcher\",\"superClass\":\"Emitter\"}},");

    if (!this._watching(assembly.assembly_id)) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_onAssemblyComplete"},');
      return;
    }

    this._uppy.log("[Transloadit] AssemblyWatcher: Got Assembly finish " + assembly.assembly_id);

    this.emit('assembly-complete', assembly.assembly_id);

    this._checkAllComplete();

    SRTlib.send('{"type":"FUNCTIONEND","function":"_onAssemblyComplete"},');
  };

  _proto._onAssemblyCancel = function _onAssemblyCancel(assembly) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_onAssemblyCancel\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"TransloaditAssemblyWatcher\",\"superClass\":\"Emitter\"}},");

    if (!this._watching(assembly.assembly_id)) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_onAssemblyCancel"},');
      return;
    }

    this._checkAllComplete();

    SRTlib.send('{"type":"FUNCTIONEND","function":"_onAssemblyCancel"},');
  };

  _proto._onAssemblyError = function _onAssemblyError(assembly, error) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_onAssemblyError\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"TransloaditAssemblyWatcher\",\"superClass\":\"Emitter\"}},");

    if (!this._watching(assembly.assembly_id)) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_onAssemblyError"},');
      return;
    }

    this._uppy.log("[Transloadit] AssemblyWatcher: Got Assembly error " + assembly.assembly_id);

    this._uppy.log(error);

    this.emit('assembly-error', assembly.assembly_id, error);

    this._checkAllComplete();

    SRTlib.send('{"type":"FUNCTIONEND","function":"_onAssemblyError"},');
  };

  _proto._onImportError = function _onImportError(assembly, fileID, error) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_onImportError\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":3,\"classInfo\":{\"className\":\"TransloaditAssemblyWatcher\",\"superClass\":\"Emitter\"}},");

    if (!this._watching(assembly.assembly_id)) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_onImportError"},');
      return;
    }

    this._onAssemblyError(assembly, error);

    SRTlib.send('{"type":"FUNCTIONEND","function":"_onImportError"},');
  };

  _proto._checkAllComplete = function _checkAllComplete() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_checkAllComplete\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"TransloaditAssemblyWatcher\",\"superClass\":\"Emitter\"}},");
    this._remaining -= 1;

    if (this._remaining === 0) {
      this._removeListeners();

      this._resolve();
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"_checkAllComplete"},');
  };

  _proto._removeListeners = function _removeListeners() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_removeListeners\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"TransloaditAssemblyWatcher\",\"superClass\":\"Emitter\"}},");

    this._uppy.off('transloadit:complete', this._onAssemblyComplete);

    this._uppy.off('transloadit:assembly-cancel', this._onAssemblyCancel);

    this._uppy.off('transloadit:assembly-error', this._onAssemblyError);

    this._uppy.off('transloadit:import-error', this._onImportError);

    SRTlib.send('{"type":"FUNCTIONEND","function":"_removeListeners"},');
  };

  _proto._addListeners = function _addListeners() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_addListeners\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"TransloaditAssemblyWatcher\",\"superClass\":\"Emitter\"}},");

    this._uppy.on('transloadit:complete', this._onAssemblyComplete);

    this._uppy.on('transloadit:assembly-cancel', this._onAssemblyCancel);

    this._uppy.on('transloadit:assembly-error', this._onAssemblyError);

    this._uppy.on('transloadit:import-error', this._onImportError);

    SRTlib.send('{"type":"FUNCTIONEND","function":"_addListeners"},');
  };

  return TransloaditAssemblyWatcher;
}(Emitter);

module.exports = TransloaditAssemblyWatcher;