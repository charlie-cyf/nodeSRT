var SRTlib = require('SRT-util');
const {Plugin} = require('@uppy/core');
const findDOMElement = require('@uppy/utils/lib/findDOMElement');
class TransloaditFormResult extends Plugin {
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"TransloaditFormResult","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.id = this.opts.id || 'TransloaditFormResult';
    this.type = 'modifier';
    this.handleUpload = this.handleUpload.bind(this);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  getAssemblyStatuses(fileIDs) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getAssemblyStatuses","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"TransloaditFormResult","superClass":"Plugin"}},`);

    const assemblyIds = [];
    fileIDs.forEach(fileID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

      const file = this.uppy.getFile(fileID);
      const assembly = file.transloadit && file.transloadit.assembly;
      if (assembly && assemblyIds.indexOf(assembly) === -1) {
        assemblyIds.push(assembly);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

    });
    const tl = this.uppy.getPlugin(this.opts.transloaditPluginId || 'Transloadit');
        SRTlib.send('{"type":"FUNCTIONEND","function":"getAssemblyStatuses"},');

    return assemblyIds.map(id => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

      return tl.getAssembly(id);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"getAssemblyStatuses"},');

  }
  handleUpload(fileIDs) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleUpload","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"TransloaditFormResult","superClass":"Plugin"}},`);

    const assemblies = this.getAssemblyStatuses(fileIDs);
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = this.opts.name;
    input.value = JSON.stringify(assemblies);
    const target = findDOMElement(this.opts.target);
    target.appendChild(input);
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleUpload"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"TransloaditFormResult","superClass":"Plugin"}},`);

    this.uppy.addPostProcessor(this.handleUpload);
        SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

  }
  uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"TransloaditFormResult","superClass":"Plugin"}},`);

    this.uppy.removePostProcessor(this.handleUpload);
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');

  }
}
module.exports = TransloaditFormResult;
