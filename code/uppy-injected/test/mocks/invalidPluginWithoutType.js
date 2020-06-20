var SRTlib = require('SRT-util');
const {Plugin} = require('../../packages/@uppy/core');
module.exports = class InvalidPluginWithoutType extends Plugin {
  constructor(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "InvalidPluginWithoutType.constructor", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    super(uppy, opts);
    this.id = 'InvalidPluginWithoutType';
    this.name = this.constructor.name;
        SRTlib.send("]},");

  }
  run(results) {
        SRTlib.send(`{ "anonymous": false, "function": "InvalidPluginWithoutType.run", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.uppy.log({
      class: this.constructor.name,
      method: 'run',
      results: results
    });
        SRTlib.send("]},");

    return Promise.resolve('success');
        SRTlib.send("]},");

  }
};
