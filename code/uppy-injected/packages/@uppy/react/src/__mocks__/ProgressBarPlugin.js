const SRTlib = require('SRT-util');

const {Plugin} = require('@uppy/core');
module.exports = class ProgressBar extends Plugin {
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/react/src/__mocks__/ProgressBarPlugin.js","paramsNumber":2,"classInfo":{"className":"ProgressBar","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.id = this.opts.id;
    this.type = 'progressindicator';
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"/packages/@uppy/react/src/__mocks__/ProgressBarPlugin.js","paramsNumber":0,"classInfo":{"className":"ProgressBar","superClass":"Plugin"}},`);

    this.opts.onInstall();
        SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

  }
  uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"/packages/@uppy/react/src/__mocks__/ProgressBarPlugin.js","paramsNumber":0,"classInfo":{"className":"ProgressBar","superClass":"Plugin"}},`);

    this.opts.onUninstall();
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');

  }
};
