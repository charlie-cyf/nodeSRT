var SRTlib = require('SRT-util');
const Assembly = require('./Assembly');
describe('Transloadit/Assembly', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "Transloadit/Assembly", "fileName": "${__filename}", "calls" : [`);

  describe('status diffing', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "status%20diffing", "fileName": "${__filename}", "calls" : [`);

    function attemptDiff(prev, next) {
      const assembly = new Assembly(prev);
      const events = [];
      assembly.emit = jest.fn((name, ...args) => {
        events.push([name, ...args]);
      });
      assembly.updateStatus(next);
      return events;
    }
    it('ASSEMBLY_UPLOADING → ASSEMBLY_EXECUTING', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Transloadit/Assembly", "testName": "ASSEMBLY_UPLOADING%20%u2192%20ASSEMBLY_EXECUTING", "fileName": "${__filename}", "calls" : [`);

      const result = attemptDiff({
        ok: 'ASSEMBLY_UPLOADING',
        uploads: {},
        results: {}
      }, {
        ok: 'ASSEMBLY_EXECUTING',
        uploads: {},
        results: {}
      });
      expect(result[0]).toEqual(['executing']);
            SRTlib.send('], "end": "test-ASSEMBLY_UPLOADING%20%u2192%20ASSEMBLY_EXECUTING"},');
      SRTlib.endLogger();

    });
    it('ASSEMBLY_EXECUTING → ASSEMBLY_COMPLETED', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Transloadit/Assembly", "testName": "ASSEMBLY_EXECUTING%20%u2192%20ASSEMBLY_COMPLETED", "fileName": "${__filename}", "calls" : [`);

      const result = attemptDiff({
        ok: 'ASSEMBLY_EXECUTING',
        uploads: {},
        results: {}
      }, {
        ok: 'ASSEMBLY_COMPLETED',
        uploads: {},
        results: {}
      });
      expect(result[0]).toEqual(['finished']);
            SRTlib.send('], "end": "test-ASSEMBLY_EXECUTING%20%u2192%20ASSEMBLY_COMPLETED"},');
      SRTlib.endLogger();

    });
    it('ASSEMBLY_UPLOADING → ASSEMBLY_COMPLETED', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Transloadit/Assembly", "testName": "ASSEMBLY_UPLOADING%20%u2192%20ASSEMBLY_COMPLETED", "fileName": "${__filename}", "calls" : [`);

      const result = attemptDiff({
        ok: 'ASSEMBLY_UPLOADING',
        uploads: {},
        results: {}
      }, {
        ok: 'ASSEMBLY_COMPLETED',
        uploads: {},
        results: {}
      });
      expect(result[0]).toEqual(['executing']);
      expect(result[1]).toEqual(['metadata']);
      expect(result[2]).toEqual(['finished']);
            SRTlib.send('], "end": "test-ASSEMBLY_UPLOADING%20%u2192%20ASSEMBLY_COMPLETED"},');
      SRTlib.endLogger();

    });
    it('emits events for new files', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Transloadit/Assembly", "testName": "emits%20events%20for%20new%20files", "fileName": "${__filename}", "calls" : [`);

      const result = attemptDiff({
        ok: 'ASSEMBLY_UPLOADING',
        uploads: {},
        results: {}
      }, {
        ok: 'ASSEMBLY_UPLOADING',
        uploads: {
          some_id: {
            id: 'some_id'
          }
        },
        results: {}
      });
      expect(result[0]).toEqual(['upload', {
        id: 'some_id'
      }]);
            SRTlib.send('], "end": "test-emits%20events%20for%20new%20files"},');
      SRTlib.endLogger();

    });
    it('emits executing, then upload, on new files + status change', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Transloadit/Assembly", "testName": "emits%20executing%2C%20then%20upload%2C%20on%20new%20files%20+%20status%20change", "fileName": "${__filename}", "calls" : [`);

      const result = attemptDiff({
        ok: 'ASSEMBLY_UPLOADING',
        uploads: {},
        results: {}
      }, {
        ok: 'ASSEMBLY_EXECUTING',
        uploads: {
          some_id: {
            id: 'some_id'
          }
        },
        results: {}
      });
      expect(result[0]).toEqual(['executing']);
      expect(result[1]).toEqual(['upload', {
        id: 'some_id'
      }]);
      expect(result[2]).toEqual(['metadata']);
            SRTlib.send('], "end": "test-emits%20executing%2C%20then%20upload%2C%20on%20new%20files%20+%20status%20change"},');
      SRTlib.endLogger();

    });
    it('emits new results', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Transloadit/Assembly", "testName": "emits%20new%20results", "fileName": "${__filename}", "calls" : [`);

      const one = {
        ok: 'ASSEMBLY_EXECUTING',
        uploads: {
          cool_video: {
            id: 'cool_video'
          }
        },
        results: {}
      };
      const two = {
        ok: 'ASSEMBLY_EXECUTING',
        uploads: {
          cool_video: {
            id: 'cool_video'
          }
        },
        results: {
          step_one: [{
            id: 'thumb1'
          }, {
            id: 'thumb2'
          }, {
            id: 'thumb3'
          }]
        }
      };
      const three = {
        ok: 'ASSEMBLY_EXECUTING',
        uploads: {
          cool_video: {
            id: 'cool_video'
          }
        },
        results: {
          step_one: [{
            id: 'thumb1'
          }, {
            id: 'thumb2'
          }, {
            id: 'thumb3'
          }, {
            id: 'thumb4'
          }],
          step_two: [{
            id: 'transcript'
          }]
        }
      };
      const resultOne = attemptDiff(one, two);
      const resultTwo = attemptDiff(two, three);
      expect(resultOne[0]).toEqual(['result', 'step_one', {
        id: 'thumb1'
      }]);
      expect(resultOne[1]).toEqual(['result', 'step_one', {
        id: 'thumb2'
      }]);
      expect(resultOne[2]).toEqual(['result', 'step_one', {
        id: 'thumb3'
      }]);
      expect(resultTwo[0]).toEqual(['result', 'step_one', {
        id: 'thumb4'
      }]);
      expect(resultTwo[1]).toEqual(['result', 'step_two', {
        id: 'transcript'
      }]);
            SRTlib.send('], "end": "test-emits%20new%20results"},');
      SRTlib.endLogger();

    });
    it('emits correctly jumping straight from uploading to finished', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Transloadit/Assembly", "testName": "emits%20correctly%20jumping%20straight%20from%20uploading%20to%20finished", "fileName": "${__filename}", "calls" : [`);

      const start = {
        ok: 'ASSEMBLY_UPLOADING',
        uploads: {},
        results: {}
      };
      const end = {
        ok: 'ASSEMBLY_COMPLETED',
        uploads: {
          cool_video: {
            id: 'cool_video'
          }
        },
        results: {
          step_one: [{
            id: 'thumb1'
          }, {
            id: 'thumb2'
          }, {
            id: 'thumb3'
          }, {
            id: 'thumb4'
          }],
          step_two: [{
            id: 'transcript'
          }]
        }
      };
      const result = attemptDiff(start, end);
      expect(result[0]).toEqual(['executing']);
      expect(result[1]).toEqual(['upload', {
        id: 'cool_video'
      }]);
      expect(result[2]).toEqual(['metadata']);
      expect(result[3]).toEqual(['result', 'step_one', {
        id: 'thumb1'
      }]);
      expect(result[4]).toEqual(['result', 'step_one', {
        id: 'thumb2'
      }]);
      expect(result[5]).toEqual(['result', 'step_one', {
        id: 'thumb3'
      }]);
      expect(result[6]).toEqual(['result', 'step_one', {
        id: 'thumb4'
      }]);
      expect(result[7]).toEqual(['result', 'step_two', {
        id: 'transcript'
      }]);
      expect(result[8]).toEqual(['finished']);
            SRTlib.send('], "end": "test-emits%20correctly%20jumping%20straight%20from%20uploading%20to%20finished"},');
      SRTlib.endLogger();

    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
