const SRTlib = require('SRT-util');

const dataURItoFile = require('./dataURItoFile');
const sampleImageDataURI = require('./sampleImageDataURI');
describe('dataURItoFile', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "dataURItoFile", "fileName": "/packages/@uppy/utils/src/dataURItoFile.test.js", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "/packages/@uppy/utils/src/dataURItoFile.test.js", "calls" : [`);
  });

  it('should convert a data uri to a file', () => {
    const file = dataURItoFile(sampleImageDataURI, {
      name: 'foo.jpg'
    });
    expect(file instanceof File).toEqual(true);
    expect(file.size).toEqual(9348);
    expect(file.type).toEqual('image/jpeg');
    expect(file.name).toEqual('foo.jpg');
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "dataURItoFile" },`);
    await SRTlib.endLogger();
  });

});
