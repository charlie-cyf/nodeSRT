var SRTlib = require('SRT-util');
function _assertThisInitialized(self) {
    SRTlib.send(`{ "anonymous": false, "function": "_assertThisInitialized", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (self === void 0) {
        SRTlib.send('], "end": "_assertThisInitialized"},');

    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
    SRTlib.send('], "end": "_assertThisInitialized"},');

  return self;
    SRTlib.send('], "end": "_assertThisInitialized"},');

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('], "end": "_inheritsLoose"},');

}
var Emitter = require('component-emitter');
var TransloaditAssemblyWatcher = (function (_Emitter) {
    SRTlib.send(`{ "anonymous": true, "function": "TransloaditAssemblyWatcher", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(TransloaditAssemblyWatcher, _Emitter);
  function TransloaditAssemblyWatcher(uppy, assemblyIDs) {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditAssemblyWatcher", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this;
    _this = _Emitter.call(this) || this;
    _this._uppy = uppy;
    _this._assemblyIDs = assemblyIDs;
    _this._remaining = assemblyIDs.length;
    _this.promise = new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.promise", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      _this._resolve = resolve;
      _this._reject = reject;
            SRTlib.send('], "end": "_this.promise"},');

    });
    _this._onAssemblyComplete = _this._onAssemblyComplete.bind(_assertThisInitialized(_this));
    _this._onAssemblyCancel = _this._onAssemblyCancel.bind(_assertThisInitialized(_this));
    _this._onAssemblyError = _this._onAssemblyError.bind(_assertThisInitialized(_this));
    _this._onImportError = _this._onImportError.bind(_assertThisInitialized(_this));
    _this._addListeners();
        SRTlib.send('], "end": "TransloaditAssemblyWatcher"},');

    return _this;
        SRTlib.send('], "end": "TransloaditAssemblyWatcher"},');

  }
  var _proto = TransloaditAssemblyWatcher.prototype;
  _proto._watching = function _watching(id) {
        SRTlib.send(`{ "anonymous": true, "function": "TransloaditAssemblyWatcher._proto._watching._watching", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "TransloaditAssemblyWatcher._proto._watching._watching"},');

    return this._assemblyIDs.indexOf(id) !== -1;
        SRTlib.send('], "end": "TransloaditAssemblyWatcher._proto._watching._watching"},');

  };
  _proto._onAssemblyComplete = function _onAssemblyComplete(assembly) {
        SRTlib.send(`{ "anonymous": true, "function": "TransloaditAssemblyWatcher._proto._onAssemblyComplete._onAssemblyComplete", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (!this._watching(assembly.assembly_id)) {
            SRTlib.send('], "end": "TransloaditAssemblyWatcher._proto._onAssemblyComplete._onAssemblyComplete"},');

      return;
    }
    this._uppy.log("[Transloadit] AssemblyWatcher: Got Assembly finish " + assembly.assembly_id);
    this.emit('assembly-complete', assembly.assembly_id);
    this._checkAllComplete();
        SRTlib.send('], "end": "TransloaditAssemblyWatcher._proto._onAssemblyComplete._onAssemblyComplete"},');

  };
  _proto._onAssemblyCancel = function _onAssemblyCancel(assembly) {
        SRTlib.send(`{ "anonymous": true, "function": "TransloaditAssemblyWatcher._proto._onAssemblyCancel._onAssemblyCancel", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (!this._watching(assembly.assembly_id)) {
            SRTlib.send('], "end": "TransloaditAssemblyWatcher._proto._onAssemblyCancel._onAssemblyCancel"},');

      return;
    }
    this._checkAllComplete();
        SRTlib.send('], "end": "TransloaditAssemblyWatcher._proto._onAssemblyCancel._onAssemblyCancel"},');

  };
  _proto._onAssemblyError = function _onAssemblyError(assembly, error) {
        SRTlib.send(`{ "anonymous": true, "function": "TransloaditAssemblyWatcher._proto._onAssemblyError._onAssemblyError", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (!this._watching(assembly.assembly_id)) {
            SRTlib.send('], "end": "TransloaditAssemblyWatcher._proto._onAssemblyError._onAssemblyError"},');

      return;
    }
    this._uppy.log("[Transloadit] AssemblyWatcher: Got Assembly error " + assembly.assembly_id);
    this._uppy.log(error);
    this.emit('assembly-error', assembly.assembly_id, error);
    this._checkAllComplete();
        SRTlib.send('], "end": "TransloaditAssemblyWatcher._proto._onAssemblyError._onAssemblyError"},');

  };
  _proto._onImportError = function _onImportError(assembly, fileID, error) {
        SRTlib.send(`{ "anonymous": true, "function": "TransloaditAssemblyWatcher._proto._onImportError._onImportError", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    if (!this._watching(assembly.assembly_id)) {
            SRTlib.send('], "end": "TransloaditAssemblyWatcher._proto._onImportError._onImportError"},');

      return;
    }
    this._onAssemblyError(assembly, error);
        SRTlib.send('], "end": "TransloaditAssemblyWatcher._proto._onImportError._onImportError"},');

  };
  _proto._checkAllComplete = function _checkAllComplete() {
        SRTlib.send(`{ "anonymous": true, "function": "TransloaditAssemblyWatcher._proto._checkAllComplete._checkAllComplete", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this._remaining -= 1;
    if (this._remaining === 0) {
      this._removeListeners();
      this._resolve();
    }
        SRTlib.send('], "end": "TransloaditAssemblyWatcher._proto._checkAllComplete._checkAllComplete"},');

  };
  _proto._removeListeners = function _removeListeners() {
        SRTlib.send(`{ "anonymous": true, "function": "TransloaditAssemblyWatcher._proto._removeListeners._removeListeners", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this._uppy.off('transloadit:complete', this._onAssemblyComplete);
    this._uppy.off('transloadit:assembly-cancel', this._onAssemblyCancel);
    this._uppy.off('transloadit:assembly-error', this._onAssemblyError);
    this._uppy.off('transloadit:import-error', this._onImportError);
        SRTlib.send('], "end": "TransloaditAssemblyWatcher._proto._removeListeners._removeListeners"},');

  };
  _proto._addListeners = function _addListeners() {
        SRTlib.send(`{ "anonymous": true, "function": "TransloaditAssemblyWatcher._proto._addListeners._addListeners", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this._uppy.on('transloadit:complete', this._onAssemblyComplete);
    this._uppy.on('transloadit:assembly-cancel', this._onAssemblyCancel);
    this._uppy.on('transloadit:assembly-error', this._onAssemblyError);
    this._uppy.on('transloadit:import-error', this._onImportError);
        SRTlib.send('], "end": "TransloaditAssemblyWatcher._proto._addListeners._addListeners"},');

  };
    SRTlib.send('], "end": "TransloaditAssemblyWatcher"},');

  return TransloaditAssemblyWatcher;
    SRTlib.send('], "end": "TransloaditAssemblyWatcher"},');

})(Emitter);
module.exports = TransloaditAssemblyWatcher;
