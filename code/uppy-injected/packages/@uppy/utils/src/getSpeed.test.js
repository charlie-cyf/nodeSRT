const SRTlib = require('SRT-util');

const getSpeed = require('./getSpeed');
describe('getSpeed', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "getSpeed", "fileName": "/packages/@uppy/utils/src/getSpeed.test.js", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "/packages/@uppy/utils/src/getSpeed.test.js", "calls" : [`);
  });

  it('should calculate the speed given a fileProgress object', () => {
    const dateNow = new Date();
    const date5SecondsAgo = new Date(dateNow.getTime() - 5 * 1000);
    const fileProgress = {
      bytesUploaded: 1024,
      uploadStarted: date5SecondsAgo
    };
    expect(Math.round(getSpeed(fileProgress))).toEqual(Math.round(205));
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "getSpeed" },`);
    await SRTlib.endLogger();
  });

});
