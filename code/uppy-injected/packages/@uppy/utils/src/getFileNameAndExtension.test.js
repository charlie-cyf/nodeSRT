const SRTlib = require('SRT-util');

const getFileNameAndExtension = require('./getFileNameAndExtension');
describe('getFileNameAndExtension', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "getFileNameAndExtension", "fileName": "/packages/@uppy/utils/src/getFileNameAndExtension.test.js", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "/packages/@uppy/utils/src/getFileNameAndExtension.test.js", "calls" : [`);
  });

  it('should return the filename and extension as an array', () => {
    expect(getFileNameAndExtension('fsdfjodsuf23rfw.jpg')).toEqual({
      name: 'fsdfjodsuf23rfw',
      extension: 'jpg'
    });
  });
  it('should handle invalid filenames', () => {
    expect(getFileNameAndExtension('fsdfjodsuf23rfw')).toEqual({
      name: 'fsdfjodsuf23rfw',
      extension: undefined
    });
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "getFileNameAndExtension" },`);
    await SRTlib.endLogger();
  });

});
