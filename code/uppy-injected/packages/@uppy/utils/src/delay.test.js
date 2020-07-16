const SRTlib = require('SRT-util');

const delay = require('./delay');
const {AbortController} = require('./AbortController');
describe('delay', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "delay", "fileName": "/packages/@uppy/utils/src/delay.test.js", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "/packages/@uppy/utils/src/delay.test.js", "calls" : [`);
  });

  it('should wait for the specified time', async () => {
    const start = Date.now();
    await delay(100);
    expect(Date.now() - start).toBeGreaterThanOrEqual(100);
  });
  it('should reject if signal is already aborted', async () => {
    const signal = {
      aborted: true
    };
    const start = Date.now();
    await expect(delay(100, {
      signal
    })).rejects.toHaveProperty('name', 'AbortError');
    expect(Date.now() - start).toBeLessThan(50);
  });
  it('should reject when signal is aborted', async () => {
    const controller = new AbortController();
    const start = Date.now();
    const testDelay = delay(100, {
      signal: controller.signal
    });
    await Promise.all([delay(50).then(() => controller.abort()), expect(testDelay).rejects.toHaveProperty('name', 'AbortError')]);
    const time = Date.now() - start;
    expect(time).toBeGreaterThanOrEqual(50);
    expect(time).toBeLessThan(100);
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "delay" },`);
    await SRTlib.endLogger();
  });

});
