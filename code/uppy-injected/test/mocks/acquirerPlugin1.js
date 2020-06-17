var SRTlib = require('SRT-util');
const {Plugin} = require('../../packages/@uppy/core');
module.exports = class TestSelector1 extends Plugin {
  constructor(uppy, opts) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    super(uppy, opts);
    this.type = 'acquirer';
    this.id = 'TestSelector1';
    this.name = this.constructor.name;
    this.mocks = {
      run: jest.fn(),
      update: jest.fn(),
      uninstall: jest.fn()
    };
        SRTlib.send("]},");

  }
  run(results) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.uppy.log({
      class: this.constructor.name,
      method: 'run',
      results: results
    });
    this.mocks.run(results);
        SRTlib.send("]},");

    return Promise.resolve('success');
        SRTlib.send("]},");

  }
  update(state) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.mocks.update(state);
        SRTlib.send("]},");

  }
  uninstall() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.mocks.uninstall();
        SRTlib.send("]},");

  }
};
