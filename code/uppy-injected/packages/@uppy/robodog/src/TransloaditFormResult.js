var SRTlib = require('SRT-util');
const {Plugin} = require('@uppy/core');
const findDOMElement = require('@uppy/utils/lib/findDOMElement');
class TransloaditFormResult extends Plugin {
  constructor(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditFormResult.constructor", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    super(uppy, opts);
    this.id = this.opts.id || 'TransloaditFormResult';
    this.type = 'modifier';
    this.handleUpload = this.handleUpload.bind(this);
        SRTlib.send('], "end": "constructor"},');

  }
  getAssemblyStatuses(fileIDs) {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditFormResult.getAssemblyStatuses", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const assemblyIds = [];
    fileIDs.forEach(fileID => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      const file = this.uppy.getFile(fileID);
      const assembly = file.transloadit && file.transloadit.assembly;
      if (assembly && assemblyIds.indexOf(assembly) === -1) {
        assemblyIds.push(assembly);
      }
            SRTlib.send('], "end": "emptyKey"},');

    });
    const tl = this.uppy.getPlugin(this.opts.transloaditPluginId || 'Transloadit');
        SRTlib.send('], "end": "getAssemblyStatuses"},');

    return assemblyIds.map(id => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "emptyKey2"},');

      return tl.getAssembly(id);
            SRTlib.send('], "end": "emptyKey2"},');

    });
        SRTlib.send('], "end": "getAssemblyStatuses"},');

  }
  handleUpload(fileIDs) {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditFormResult.handleUpload", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const assemblies = this.getAssemblyStatuses(fileIDs);
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = this.opts.name;
    input.value = JSON.stringify(assemblies);
    const target = findDOMElement(this.opts.target);
    target.appendChild(input);
        SRTlib.send('], "end": "handleUpload"},');

  }
  install() {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditFormResult.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.uppy.addPostProcessor(this.handleUpload);
        SRTlib.send('], "end": "install"},');

  }
  uninstall() {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditFormResult.uninstall", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.uppy.removePostProcessor(this.handleUpload);
        SRTlib.send('], "end": "uninstall"},');

  }
}
module.exports = TransloaditFormResult;
