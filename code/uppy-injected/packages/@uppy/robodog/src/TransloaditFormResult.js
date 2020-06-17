var SRTlib = require('SRT-util');
const {Plugin} = require('@uppy/core');
const findDOMElement = require('@uppy/utils/lib/findDOMElement');
class TransloaditFormResult extends Plugin {
  constructor(uppy, opts) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    super(uppy, opts);
    this.id = this.opts.id || 'TransloaditFormResult';
    this.type = 'modifier';
    this.handleUpload = this.handleUpload.bind(this);
        SRTlib.send("]},");

  }
  getAssemblyStatuses(fileIDs) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const assemblyIds = [];
    fileIDs.forEach(fileID => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      const file = this.uppy.getFile(fileID);
      const assembly = file.transloadit && file.transloadit.assembly;
      if (assembly && assemblyIds.indexOf(assembly) === -1) {
        assemblyIds.push(assembly);
      }
            SRTlib.send("]},");

    });
    const tl = this.uppy.getPlugin(this.opts.transloaditPluginId || 'Transloadit');
        SRTlib.send("]},");

    return assemblyIds.map(id => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      tl.getAssembly(id);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  handleUpload(fileIDs) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const assemblies = this.getAssemblyStatuses(fileIDs);
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = this.opts.name;
    input.value = JSON.stringify(assemblies);
    const target = findDOMElement(this.opts.target);
    target.appendChild(input);
        SRTlib.send("]},");

  }
  install() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.uppy.addPostProcessor(this.handleUpload);
        SRTlib.send("]},");

  }
  uninstall() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.uppy.removePostProcessor(this.handleUpload);
        SRTlib.send("]},");

  }
}
module.exports = TransloaditFormResult;
