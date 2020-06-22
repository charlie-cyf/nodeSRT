var SRTlib = require('SRT-util');
const {Plugin} = require('@uppy/core');
module.exports = class Dashboard extends Plugin {
  constructor(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "Dashboard.constructor", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    super(uppy, opts);
    this.id = this.opts.id;
    this.type = 'orchestrator';
        SRTlib.send('], "end": "constructor"},');

  }
  install() {
        SRTlib.send(`{ "anonymous": false, "function": "Dashboard.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (this.opts.onInstall) this.opts.onInstall();
        SRTlib.send('], "end": "install"},');

  }
  uninstall() {
        SRTlib.send(`{ "anonymous": false, "function": "Dashboard.uninstall", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (this.opts.onUninstall) this.opts.onUninstall();
        SRTlib.send('], "end": "uninstall"},');

  }
};
