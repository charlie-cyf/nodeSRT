const SRTlib = require('SRT-util');
const Plugin = require('./Plugin');
const Core = require('./index');
describe('Plugin', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "Plugin", "fileName": "${__filename}", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);
  });

  describe('getPluginState', () => {
        beforeAll(() => {
      SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "getPluginState", "fileName": "${__filename}", "calls" : [`);
    });

        beforeEach(() => {
      SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);
    });

    it('returns an empty object if no state is available', () => {
      class Example extends Plugin {}
      const inst = new Example(new Core(), {});
      expect(inst.getPluginState()).toEqual({});
    });
        afterEach(() => {
      SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
    });

        afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "getPluginState" },`);
      await SRTlib.endLogger();
    });

  });
  describe('setPluginState', () => {
        beforeAll(() => {
      SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "setPluginState", "fileName": "${__filename}", "calls" : [`);
    });

        beforeEach(() => {
      SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);
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
      SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
    });

        afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "setPluginState" },`);
      await SRTlib.endLogger();
    });

  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "Plugin" },`);
    await SRTlib.endLogger();
  });

});
