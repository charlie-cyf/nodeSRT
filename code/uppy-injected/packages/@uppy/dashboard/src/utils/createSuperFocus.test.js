var SRTlib = require('SRT-util');
const createSuperFocus = require('./createSuperFocus');
describe('createSuperFocus', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "createSuperFocus", "fileName": "${__filename}", "calls" : [`);

  it('should return a function that can be cancelled', () => {
        SRTlib.send(`{ "testSuite": "createSuperFocus", "testName": "should%20return%20a%20function%20that%20can%20be%20cancelled", "fileName": "${__filename}", "calls" : [`);

    const superFocus = createSuperFocus();
    expect(typeof superFocus).toBe('function');
    expect(typeof superFocus.cancel).toBe('function');
        SRTlib.send(']},');

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
