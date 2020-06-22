var SRTlib = require('SRT-util');
const Emitter = require('component-emitter');
class TransloaditAssemblyWatcher extends Emitter {
  constructor(uppy, assemblyIDs) {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditAssemblyWatcher.constructor", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    super();
    this._uppy = uppy;
    this._assemblyIDs = assemblyIDs;
    this._remaining = assemblyIDs.length;
    this.promise = new Promise((resolve, reject) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      this._resolve = resolve;
      this._reject = reject;
            SRTlib.send('], "end": "emptyKey"},');

    });
    this._onAssemblyComplete = this._onAssemblyComplete.bind(this);
    this._onAssemblyCancel = this._onAssemblyCancel.bind(this);
    this._onAssemblyError = this._onAssemblyError.bind(this);
    this._onImportError = this._onImportError.bind(this);
    this._addListeners();
        SRTlib.send('], "end": "constructor"},');

  }
  _watching(id) {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditAssemblyWatcher._watching", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "_watching"},');

    return this._assemblyIDs.indexOf(id) !== -1;
        SRTlib.send('], "end": "_watching"},');

  }
  _onAssemblyComplete(assembly) {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditAssemblyWatcher._onAssemblyComplete", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (!this._watching(assembly.assembly_id)) {
            SRTlib.send('], "end": "_onAssemblyComplete"},');

      return;
    }
    this._uppy.log(`[Transloadit] AssemblyWatcher: Got Assembly finish ${assembly.assembly_id}`);
    this.emit('assembly-complete', assembly.assembly_id);
    this._checkAllComplete();
        SRTlib.send('], "end": "_onAssemblyComplete"},');

  }
  _onAssemblyCancel(assembly) {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditAssemblyWatcher._onAssemblyCancel", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (!this._watching(assembly.assembly_id)) {
            SRTlib.send('], "end": "_onAssemblyCancel"},');

      return;
    }
    this._checkAllComplete();
        SRTlib.send('], "end": "_onAssemblyCancel"},');

  }
  _onAssemblyError(assembly, error) {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditAssemblyWatcher._onAssemblyError", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (!this._watching(assembly.assembly_id)) {
            SRTlib.send('], "end": "_onAssemblyError"},');

      return;
    }
    this._uppy.log(`[Transloadit] AssemblyWatcher: Got Assembly error ${assembly.assembly_id}`);
    this._uppy.log(error);
    this.emit('assembly-error', assembly.assembly_id, error);
    this._checkAllComplete();
        SRTlib.send('], "end": "_onAssemblyError"},');

  }
  _onImportError(assembly, fileID, error) {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditAssemblyWatcher._onImportError", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    if (!this._watching(assembly.assembly_id)) {
            SRTlib.send('], "end": "_onImportError"},');

      return;
    }
    this._onAssemblyError(assembly, error);
        SRTlib.send('], "end": "_onImportError"},');

  }
  _checkAllComplete() {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditAssemblyWatcher._checkAllComplete", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this._remaining -= 1;
    if (this._remaining === 0) {
      this._removeListeners();
      this._resolve();
    }
        SRTlib.send('], "end": "_checkAllComplete"},');

  }
  _removeListeners() {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditAssemblyWatcher._removeListeners", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this._uppy.off('transloadit:complete', this._onAssemblyComplete);
    this._uppy.off('transloadit:assembly-cancel', this._onAssemblyCancel);
    this._uppy.off('transloadit:assembly-error', this._onAssemblyError);
    this._uppy.off('transloadit:import-error', this._onImportError);
        SRTlib.send('], "end": "_removeListeners"},');

  }
  _addListeners() {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditAssemblyWatcher._addListeners", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this._uppy.on('transloadit:complete', this._onAssemblyComplete);
    this._uppy.on('transloadit:assembly-cancel', this._onAssemblyCancel);
    this._uppy.on('transloadit:assembly-error', this._onAssemblyError);
    this._uppy.on('transloadit:import-error', this._onImportError);
        SRTlib.send('], "end": "_addListeners"},');

  }
}
module.exports = TransloaditAssemblyWatcher;
