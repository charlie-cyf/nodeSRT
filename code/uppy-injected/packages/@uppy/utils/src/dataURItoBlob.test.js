var SRTlib = require('SRT-util');
const dataURItoBlob = require('./dataURItoBlob');
const sampleImageDataURI = require('./sampleImageDataURI');
describe('dataURItoBlob', () => {
  it('should convert a data uri to a blob', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "dataURItoBlob", "testName": "should%20convert%20a%20data%20uri%20to%20a%20blob", "fileName": "${__filename}", "calls" : [`);

    const blob = dataURItoBlob(sampleImageDataURI, {});
    expect(blob instanceof Blob).toEqual(true);
    expect(blob.size).toEqual(9348);
    expect(blob.type).toEqual('image/jpeg');
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
});
