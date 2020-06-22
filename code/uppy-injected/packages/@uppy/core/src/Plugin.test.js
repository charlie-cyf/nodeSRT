var SRTlib = require('SRT-util');
const Plugin = require('./Plugin');
const Core = require('./index');
describe('Plugin', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "Plugin", "fileName": "${__filename}", "calls" : [`);

  describe('getPluginState', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "getPluginState", "fileName": "${__filename}", "calls" : [`);

    it('returns an empty object if no state is available', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Plugin", "testName": "returns%20an%20empty%20object%20if%20no%20state%20is%20available", "fileName": "${__filename}", "calls" : [`);

      class Example extends Plugin {}
      const inst = new Example(new Core(), {});
      expect(inst.getPluginState()).toEqual({});
            SRTlib.send('], "end": "test-returns%20an%20empty%20object%20if%20no%20state%20is%20available"},');
      SRTlib.endLogger();

    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  describe('setPluginState', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "setPluginState", "fileName": "${__filename}", "calls" : [`);

    it('applies patches', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Plugin", "testName": "applies%20patches", "fileName": "${__filename}", "calls" : [`);

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
            SRTlib.send('], "end": "test-applies%20patches"},');
      SRTlib.endLogger();

    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
