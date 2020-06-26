const SRTlib = require('SRT-util');

const supportsMediaRecorder = require('./supportsMediaRecorder');
describe('supportsMediaRecorder', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "supportsMediaRecorder", "fileName": "${__filename}", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);
  });

  it('should return true if MediaRecorder is supported', () => {
    global.MediaRecorder = class MediaRecorder {
      start() {}
    };
    expect(supportsMediaRecorder()).toEqual(true);
  });
  it('should return false if MediaRecorder is not supported', () => {
    global.MediaRecorder = undefined;
    expect(supportsMediaRecorder()).toEqual(false);
    global.MediaRecorder = class MediaRecorder {};
    expect(supportsMediaRecorder()).toEqual(false);
    global.MediaRecorder = class MediaRecorder {
      foo() {}
    };
    expect(supportsMediaRecorder()).toEqual(false);
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "supportsMediaRecorder" },`);
    await SRTlib.endLogger();
  });

});
