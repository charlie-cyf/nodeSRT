var SRTlib = require('SRT-util');
const toArray = require('./toArray');
describe('toArray', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "toArray", "fileName": "${__filename}", "calls" : [`);

  it('should convert a array-like object into an array', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "toArray", "testName": "should%20convert%20a%20array-like%20object%20into%20an%20array", "fileName": "${__filename}", "calls" : [`);

    const obj = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      length: 5
    };
    expect(toArray(obj)).toEqual(['zero', 'one', 'two', 'three', 'four']);
        SRTlib.send('], "end": "test-should%20convert%20a%20array-like%20object%20into%20an%20array"},');
    SRTlib.endLogger();

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
