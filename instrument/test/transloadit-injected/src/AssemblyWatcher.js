const SRTlib = require('SRTutil');
const Emitter = require('component-emitter');
class TransloaditAssemblyWatcher extends Emitter {
  constructor(uppy, assemblyIDs) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/src/AssemblyWatcher.js","paramsNumber":2,"classInfo":{"className":"TransloaditAssemblyWatcher","superClass":"Emitter"}},`);
    super();
    this._uppy = uppy;
    this._assemblyIDs = assemblyIDs;
    this._remaining = assemblyIDs.length;
    this.promise = new Promise((resolve, reject) => {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"promise.NewExpression","fileName":"/src/AssemblyWatcher.js","paramsNumber":2},`);
      this._resolve = resolve;
      this._reject = reject;
      SRTlib.send('{"type":"FUNCTIONEND","function":"promise.NewExpression"},');
    });
    this._onAssemblyComplete = this._onAssemblyComplete.bind(this);
    this._onAssemblyCancel = this._onAssemblyCancel.bind(this);
    this._onAssemblyError = this._onAssemblyError.bind(this);
    this._onImportError = this._onImportError.bind(this);
    this._addListeners();
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
  }
  _watching(id) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_watching","fileName":"/src/AssemblyWatcher.js","paramsNumber":1,"classInfo":{"className":"TransloaditAssemblyWatcher","superClass":"Emitter"}},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_watching"},');
    return this._assemblyIDs.indexOf(id) !== -1;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_watching"},');
  }
  _onAssemblyComplete(assembly) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onAssemblyComplete","fileName":"/src/AssemblyWatcher.js","paramsNumber":1,"classInfo":{"className":"TransloaditAssemblyWatcher","superClass":"Emitter"}},`);
    if (!this._watching(assembly.assembly_id)) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_onAssemblyComplete"},');
      return;
    }
    this._uppy.log(`[Transloadit] AssemblyWatcher: Got Assembly finish ${assembly.assembly_id}`);
    this.emit('assembly-complete', assembly.assembly_id);
    this._checkAllComplete();
    SRTlib.send('{"type":"FUNCTIONEND","function":"_onAssemblyComplete"},');
  }
  _onAssemblyCancel(assembly) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onAssemblyCancel","fileName":"/src/AssemblyWatcher.js","paramsNumber":1,"classInfo":{"className":"TransloaditAssemblyWatcher","superClass":"Emitter"}},`);
    if (!this._watching(assembly.assembly_id)) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_onAssemblyCancel"},');
      return;
    }
    this._checkAllComplete();
    SRTlib.send('{"type":"FUNCTIONEND","function":"_onAssemblyCancel"},');
  }
  _onAssemblyError(assembly, error) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onAssemblyError","fileName":"/src/AssemblyWatcher.js","paramsNumber":2,"classInfo":{"className":"TransloaditAssemblyWatcher","superClass":"Emitter"}},`);
    if (!this._watching(assembly.assembly_id)) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_onAssemblyError"},');
      return;
    }
    this._uppy.log(`[Transloadit] AssemblyWatcher: Got Assembly error ${assembly.assembly_id}`);
    this._uppy.log(error);
    this.emit('assembly-error', assembly.assembly_id, error);
    this._checkAllComplete();
    SRTlib.send('{"type":"FUNCTIONEND","function":"_onAssemblyError"},');
  }
  _onImportError(assembly, fileID, error) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onImportError","fileName":"/src/AssemblyWatcher.js","paramsNumber":3,"classInfo":{"className":"TransloaditAssemblyWatcher","superClass":"Emitter"}},`);
    if (!this._watching(assembly.assembly_id)) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_onImportError"},');
      return;
    }
    this._onAssemblyError(assembly, error);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_onImportError"},');
  }
  _checkAllComplete() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_checkAllComplete","fileName":"/src/AssemblyWatcher.js","paramsNumber":0,"classInfo":{"className":"TransloaditAssemblyWatcher","superClass":"Emitter"}},`);
    this._remaining -= 1;
    if (this._remaining === 0) {
      this._removeListeners();
      this._resolve();
    }
    SRTlib.send('{"type":"FUNCTIONEND","function":"_checkAllComplete"},');
  }
  _removeListeners() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_removeListeners","fileName":"/src/AssemblyWatcher.js","paramsNumber":0,"classInfo":{"className":"TransloaditAssemblyWatcher","superClass":"Emitter"}},`);
    this._uppy.off('transloadit:complete', this._onAssemblyComplete);
    this._uppy.off('transloadit:assembly-cancel', this._onAssemblyCancel);
    this._uppy.off('transloadit:assembly-error', this._onAssemblyError);
    this._uppy.off('transloadit:import-error', this._onImportError);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_removeListeners"},');
  }
  _addListeners() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_addListeners","fileName":"/src/AssemblyWatcher.js","paramsNumber":0,"classInfo":{"className":"TransloaditAssemblyWatcher","superClass":"Emitter"}},`);
    this._uppy.on('transloadit:complete', this._onAssemblyComplete);
    this._uppy.on('transloadit:assembly-cancel', this._onAssemblyCancel);
    this._uppy.on('transloadit:assembly-error', this._onAssemblyError);
    this._uppy.on('transloadit:import-error', this._onImportError);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_addListeners"},');
  }
}
module.exports = TransloaditAssemblyWatcher;
