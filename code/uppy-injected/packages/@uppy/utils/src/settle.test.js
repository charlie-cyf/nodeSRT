const SRTlib = require('SRT-util');
const settle = require('./settle');
describe('settle', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "settle", "fileName": "${__filename}", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);
  });

  it('should resolve even if all input promises reject', async () => {
    await expect(settle([Promise.reject(new Error('oops')), Promise.reject(new Error('this went wrong'))])).resolves.toMatchObject({
      successful: [],
      failed: [new Error('oops'), new Error('this went wrong')]
    });
  });
  it('should resolve with an object if some input promises resolve', async () => {
    await expect(settle([Promise.reject(new Error('rejected')), Promise.resolve('resolved'), Promise.resolve('also-resolved')])).resolves.toMatchObject({
      successful: ['resolved', 'also-resolved'],
      failed: [new Error('rejected')]
    });
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "settle" },`);
    await SRTlib.endLogger();
  });

});
