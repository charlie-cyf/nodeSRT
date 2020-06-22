var SRTlib = require('SRT-util');
const {Plugin} = require('../../packages/@uppy/core');
module.exports = class InvalidPluginWithoutName extends Plugin {
  constructor(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "InvalidPluginWithoutName.constructor", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    super(uppy, opts);
    this.type = 'acquirer';
    this.name = this.constructor.name;
        SRTlib.send('], "end": "constructor"},');

  }
  run(results) {
        SRTlib.send(`{ "anonymous": false, "function": "InvalidPluginWithoutName.run", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.uppy.log({
      class: this.constructor.name,
      method: 'run',
      results: results
    });
        SRTlib.send('], "end": "run"},');

    return Promise.resolve('success');
        SRTlib.send('], "end": "run"},');

  }
};
