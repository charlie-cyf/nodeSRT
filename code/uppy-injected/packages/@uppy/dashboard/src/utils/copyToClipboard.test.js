var SRTlib = require('SRT-util');
const copyToClipboard = require('./copyToClipboard');
describe('copyToClipboard', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "copyToClipboard", "fileName": "${__filename}", "calls" : [`);

  xit('should copy the specified text to the clipboard', () => {
    expect(typeof copyToClipboard).toBe('function');
  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
