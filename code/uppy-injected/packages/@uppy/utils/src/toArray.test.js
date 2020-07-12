const SRTlib = require('SRT-util');

const toArray = require('./toArray');
describe('toArray', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "toArray", "fileName": "/packages/@uppy/utils/src/toArray.test.js", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "/packages/@uppy/utils/src/toArray.test.js", "calls" : [`);
  });

  it('should convert a array-like object into an array', () => {
    const obj = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      length: 5
    };
    expect(toArray(obj)).toEqual(['zero', 'one', 'two', 'three', 'four']);
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "toArray" },`);
    await SRTlib.endLogger();
  });

});
