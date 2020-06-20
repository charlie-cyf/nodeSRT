var SRTlib = require('SRT-util');
const dataURItoFile = require('./dataURItoFile');
const sampleImageDataURI = require('./sampleImageDataURI');
describe('dataURItoFile', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "dataURItoFile", "fileName": "${__filename}", "calls" : [`);

  it('should convert a data uri to a file', () => {
        SRTlib.send(`{ "testSuite": "dataURItoFile", "testName": "should%20convert%20a%20data%20uri%20to%20a%20file", "fileName": "${__filename}", "calls" : [`);

    const file = dataURItoFile(sampleImageDataURI, {
      name: 'foo.jpg'
    });
    expect(file instanceof File).toEqual(true);
    expect(file.size).toEqual(9348);
    expect(file.type).toEqual('image/jpeg');
    expect(file.name).toEqual('foo.jpg');
        SRTlib.send(']},');

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
