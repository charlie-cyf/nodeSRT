var SRTlib = require('SRT-util');
const {Plugin} = require('@uppy/core');
module.exports = class StatusBar extends Plugin {
  constructor(uppy, opts) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    super(uppy, opts);
    this.id = this.opts.id;
    this.type = 'progressindicator';
        SRTlib.send("]},");

  }
  install() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.opts.onInstall();
        SRTlib.send("]},");

  }
  uninstall() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.opts.onUninstall();
        SRTlib.send("]},");

  }
};
