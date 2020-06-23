var SRTlib = require('SRT-util');
const Plugin = require('./Plugin');
const Core = require('./index');
describe('Plugin', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "Plugin", "fileName": "${__filename}", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${jasmine["currentTest"].description}", "fileName": "${__filename}", "calls" : [`);
  });

  describe('getPluginState', () => {
        beforeAll(() => {
      SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "Plugin", "fileName": "${__filename}", "calls" : [`);
    });

        beforeEach(() => {
      SRTlib.send(`{ "testName": "${jasmine["currentTest"].description}", "fileName": "${__filename}", "calls" : [`);
    });

    it('returns an empty object if no state is available', () => {
      class Example extends Plugin {}
      const inst = new Example(new Core(), {});
      expect(inst.getPluginState()).toEqual({});
    });
        afterEach(() => {
      SRTlib.send(`], "endTestName": "${jasmine["currentTest"].description}" }`);
    });

        afterAll(() => {
      SRTlib.send(`], "endTestSuiteName": "Plugin" }`);
      SRTlib.endLogger();
    });

  });
  describe('setPluginState', () => {
        beforeAll(() => {
      SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "Plugin", "fileName": "${__filename}", "calls" : [`);
    });

        beforeEach(() => {
      SRTlib.send(`{ "testName": "${jasmine["currentTest"].description}", "fileName": "${__filename}", "calls" : [`);
    });

    it('applies patches', () => {
      class Example extends Plugin {}
      const inst = new Example(new Core(), {});
      inst.setPluginState({
        a: 1
      });
      expect(inst.getPluginState()).toEqual({
        a: 1
      });
      inst.setPluginState({
        b: 2
      });
      expect(inst.getPluginState()).toEqual({
        a: 1,
        b: 2
      });
    });
        afterEach(() => {
      SRTlib.send(`], "endTestName": "${jasmine["currentTest"].description}" }`);
    });

        afterAll(() => {
      SRTlib.send(`], "endTestSuiteName": "Plugin" }`);
      SRTlib.endLogger();
    });

  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${jasmine["currentTest"].description}" }`);
  });

    afterAll(() => {
    SRTlib.send(`], "endTestSuiteName": "Plugin" }`);
    SRTlib.endLogger();
  });

});
