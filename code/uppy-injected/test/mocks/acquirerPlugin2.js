const SRTlib = require('SRT-util');

const {Plugin} = require('../../packages/@uppy/core');
module.exports = class TestSelector2 extends Plugin {
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/test/mocks/acquirerPlugin2.js","paramsNumber":2,"classInfo":{"className":"TestSelector2","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.type = 'acquirer';
    this.id = 'TestSelector2';
    this.name = this.constructor.name;
    this.mocks = {
      run: jest.fn(),
      update: jest.fn(),
      uninstall: jest.fn()
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  run(results) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"run","fileName":"/test/mocks/acquirerPlugin2.js","paramsNumber":1,"classInfo":{"className":"TestSelector2","superClass":"Plugin"}},`);

    this.uppy.log({
      class: this.constructor.name,
      method: 'run',
      results: results
    });
    this.mocks.run(results);
        SRTlib.send('{"type":"FUNCTIONEND","function":"run"},');

    return Promise.resolve('success');
        SRTlib.send('{"type":"FUNCTIONEND","function":"run"},');

  }
  update(state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"update","fileName":"/test/mocks/acquirerPlugin2.js","paramsNumber":1,"classInfo":{"className":"TestSelector2","superClass":"Plugin"}},`);

    this.mocks.update(state);
        SRTlib.send('{"type":"FUNCTIONEND","function":"update"},');

  }
  uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"/test/mocks/acquirerPlugin2.js","paramsNumber":0,"classInfo":{"className":"TestSelector2","superClass":"Plugin"}},`);

    this.mocks.uninstall();
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');

  }
};
