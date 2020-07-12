const SRTlib = require('SRT-util');

const {Plugin} = require('../../packages/@uppy/core');
module.exports = class InvalidPluginWithoutType extends Plugin {
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/test/mocks/invalidPluginWithoutType.js","paramsNumber":2,"classInfo":{"className":"InvalidPluginWithoutType","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.id = 'InvalidPluginWithoutType';
    this.name = this.constructor.name;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  run(results) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"run","fileName":"/test/mocks/invalidPluginWithoutType.js","paramsNumber":1,"classInfo":{"className":"InvalidPluginWithoutType","superClass":"Plugin"}},`);

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
