var SRTlib = require('SRT-util');
const getETA = require('./getETA');
describe('getETA', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "getETA", "fileName": "${__filename}", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);
  });

  it('should get the ETA remaining based on a fileProgress object', () => {
    const dateNow = new Date();
    const date5SecondsAgo = new Date(dateNow.getTime() - 5 * 1000);
    const fileProgress = {
      bytesUploaded: 1024,
      bytesTotal: 3096,
      uploadStarted: date5SecondsAgo
    };
    expect(getETA(fileProgress)).toEqual(10.1);
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "getETA" },`);
    await SRTlib.endLogger();
  });

});
