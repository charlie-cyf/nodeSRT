var SRTlib = require('SRT-util');
const {Plugin} = require('@uppy/core');
module.exports = class StatusBar extends Plugin {
  constructor(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "StatusBar.constructor", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    super(uppy, opts);
    this.id = this.opts.id;
    this.type = 'progressindicator';
        SRTlib.send('], "end": "constructor"},');

  }
  install() {
        SRTlib.send(`{ "anonymous": false, "function": "StatusBar.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.opts.onInstall();
        SRTlib.send('], "end": "install"},');

  }
  uninstall() {
        SRTlib.send(`{ "anonymous": false, "function": "StatusBar.uninstall", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.opts.onUninstall();
        SRTlib.send('], "end": "uninstall"},');

  }
};
