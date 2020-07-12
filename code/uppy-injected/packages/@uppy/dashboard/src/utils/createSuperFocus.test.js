const SRTlib = require('SRT-util');

const createSuperFocus = require('./createSuperFocus');
describe('createSuperFocus', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "createSuperFocus", "fileName": "/packages/@uppy/dashboard/src/utils/createSuperFocus.test.js", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "/packages/@uppy/dashboard/src/utils/createSuperFocus.test.js", "calls" : [`);
  });

  it('should return a function that can be cancelled', () => {
    const superFocus = createSuperFocus();
    expect(typeof superFocus).toBe('function');
    expect(typeof superFocus.cancel).toBe('function');
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "createSuperFocus" },`);
    await SRTlib.endLogger();
  });

});
