var SRTlib = require('SRT-util');
const supportsMediaRecorder = require('./supportsMediaRecorder');
describe('supportsMediaRecorder', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "supportsMediaRecorder", "fileName": "${__filename}", "calls" : [`);

  it('should return true if MediaRecorder is supported', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "supportsMediaRecorder", "testName": "should%20return%20true%20if%20MediaRecorder%20is%20supported", "fileName": "${__filename}", "calls" : [`);

    global.MediaRecorder = class MediaRecorder {
      start() {}
    };
    expect(supportsMediaRecorder()).toEqual(true);
        SRTlib.send('], "end": "test-should%20return%20true%20if%20MediaRecorder%20is%20supported"},');
    SRTlib.endLogger();

  });
  it('should return false if MediaRecorder is not supported', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "supportsMediaRecorder", "testName": "should%20return%20false%20if%20MediaRecorder%20is%20not%20supported", "fileName": "${__filename}", "calls" : [`);

    global.MediaRecorder = undefined;
    expect(supportsMediaRecorder()).toEqual(false);
    global.MediaRecorder = class MediaRecorder {};
    expect(supportsMediaRecorder()).toEqual(false);
    global.MediaRecorder = class MediaRecorder {
      foo() {}
    };
    expect(supportsMediaRecorder()).toEqual(false);
        SRTlib.send('], "end": "test-should%20return%20false%20if%20MediaRecorder%20is%20not%20supported"},');
    SRTlib.endLogger();

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
