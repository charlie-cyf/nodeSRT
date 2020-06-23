var SRTlib = require('SRT-util');
const dataURItoBlob = require('./dataURItoBlob');
const sampleImageDataURI = require('./sampleImageDataURI');
describe('dataURItoBlob', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "dataURItoBlob", "fileName": "${__filename}", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${jasmine["currentTest"].description}", "fileName": "${__filename}", "calls" : [`);
  });

  it('should convert a data uri to a blob', () => {
    const blob = dataURItoBlob(sampleImageDataURI, {});
    expect(blob instanceof Blob).toEqual(true);
    expect(blob.size).toEqual(9348);
    expect(blob.type).toEqual('image/jpeg');
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${jasmine["currentTest"].description}" }`);
  });

    afterAll(() => {
    SRTlib.send(`], "endTestSuiteName": "dataURItoBlob" }`);
    SRTlib.endLogger();
  });

});
