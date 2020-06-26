const SRTlib = require('SRT-util');

const {Plugin} = require('../../packages/@uppy/core');
module.exports = class InvalidPluginWithoutName extends Plugin {
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"InvalidPluginWithoutName","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.type = 'acquirer';
    this.name = this.constructor.name;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  run(results) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"run","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"InvalidPluginWithoutName","superClass":"Plugin"}},`);

    this.uppy.log({
      class: this.constructor.name,
      method: 'run',
      results: results
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"run"},');

    return Promise.resolve('success');
        SRTlib.send('{"type":"FUNCTIONEND","function":"run"},');

  }
};
