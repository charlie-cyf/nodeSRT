var SRTlib = require('SRT-util');
const {Plugin} = require('@uppy/core');
module.exports = class DragDrop extends Plugin {
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"DragDrop","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.id = this.opts.id;
    this.type = 'acquirer';
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"DragDrop","superClass":"Plugin"}},`);

    if (this.opts.onInstall) this.opts.onInstall();
        SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

  }
  uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"DragDrop","superClass":"Plugin"}},`);

    if (this.opts.onUninstall) this.opts.onUninstall();
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');

  }
};