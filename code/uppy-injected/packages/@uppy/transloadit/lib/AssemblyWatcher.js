function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var Emitter = require('component-emitter');

var TransloaditAssemblyWatcher = /*#__PURE__*/function (_Emitter) {
  _inheritsLoose(TransloaditAssemblyWatcher, _Emitter);

  function TransloaditAssemblyWatcher(uppy, assemblyIDs) {
    var _this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditAssemblyWatcher.constructor\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    _this = _Emitter.call(this) || this;
    _this._uppy = uppy;
    _this._assemblyIDs = assemblyIDs;
    _this._remaining = assemblyIDs.length;
    _this.promise = new Promise(function (resolve, reject) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
      _this._resolve = resolve;
      _this._reject = reject;
      SRTlib.send('], "end": "emptyKey"},');
    });
    _this._onAssemblyComplete = _this._onAssemblyComplete.bind(_assertThisInitialized(_this));
    _this._onAssemblyCancel = _this._onAssemblyCancel.bind(_assertThisInitialized(_this));
    _this._onAssemblyError = _this._onAssemblyError.bind(_assertThisInitialized(_this));
    _this._onImportError = _this._onImportError.bind(_assertThisInitialized(_this));

    _this._addListeners();

    SRTlib.send('], "end": "constructor"},');
    return _this;
  }

  var _proto = TransloaditAssemblyWatcher.prototype;

  _proto._watching = function _watching(id) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditAssemblyWatcher._watching\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    SRTlib.send('], "end": "_watching"},');
    return this._assemblyIDs.indexOf(id) !== -1;
    SRTlib.send('], "end": "_watching"},');
  };

  _proto._onAssemblyComplete = function _onAssemblyComplete(assembly) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditAssemblyWatcher._onAssemblyComplete\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

    if (!this._watching(assembly.assembly_id)) {
      SRTlib.send('], "end": "_onAssemblyComplete"},');
      return;
    }

    this._uppy.log("[Transloadit] AssemblyWatcher: Got Assembly finish " + assembly.assembly_id);

    this.emit('assembly-complete', assembly.assembly_id);

    this._checkAllComplete();

    SRTlib.send('], "end": "_onAssemblyComplete"},');
  };

  _proto._onAssemblyCancel = function _onAssemblyCancel(assembly) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditAssemblyWatcher._onAssemblyCancel\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

    if (!this._watching(assembly.assembly_id)) {
      SRTlib.send('], "end": "_onAssemblyCancel"},');
      return;
    }

    this._checkAllComplete();

    SRTlib.send('], "end": "_onAssemblyCancel"},');
  };

  _proto._onAssemblyError = function _onAssemblyError(assembly, error) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditAssemblyWatcher._onAssemblyError\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");

    if (!this._watching(assembly.assembly_id)) {
      SRTlib.send('], "end": "_onAssemblyError"},');
      return;
    }

    this._uppy.log("[Transloadit] AssemblyWatcher: Got Assembly error " + assembly.assembly_id);

    this._uppy.log(error);

    this.emit('assembly-error', assembly.assembly_id, error);

    this._checkAllComplete();

    SRTlib.send('], "end": "_onAssemblyError"},');
  };

  _proto._onImportError = function _onImportError(assembly, fileID, error) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditAssemblyWatcher._onImportError\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 3, \"calls\" : [");

    if (!this._watching(assembly.assembly_id)) {
      SRTlib.send('], "end": "_onImportError"},');
      return;
    }

    this._onAssemblyError(assembly, error);

    SRTlib.send('], "end": "_onImportError"},');
  };

  _proto._checkAllComplete = function _checkAllComplete() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditAssemblyWatcher._checkAllComplete\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this._remaining -= 1;

    if (this._remaining === 0) {
      this._removeListeners();

      this._resolve();
    }

    SRTlib.send('], "end": "_checkAllComplete"},');
  };

  _proto._removeListeners = function _removeListeners() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditAssemblyWatcher._removeListeners\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

    this._uppy.off('transloadit:complete', this._onAssemblyComplete);

    this._uppy.off('transloadit:assembly-cancel', this._onAssemblyCancel);

    this._uppy.off('transloadit:assembly-error', this._onAssemblyError);

    this._uppy.off('transloadit:import-error', this._onImportError);

    SRTlib.send('], "end": "_removeListeners"},');
  };

  _proto._addListeners = function _addListeners() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditAssemblyWatcher._addListeners\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

    this._uppy.on('transloadit:complete', this._onAssemblyComplete);

    this._uppy.on('transloadit:assembly-cancel', this._onAssemblyCancel);

    this._uppy.on('transloadit:assembly-error', this._onAssemblyError);

    this._uppy.on('transloadit:import-error', this._onImportError);

    SRTlib.send('], "end": "_addListeners"},');
  };

  return TransloaditAssemblyWatcher;
}(Emitter);

module.exports = TransloaditAssemblyWatcher;