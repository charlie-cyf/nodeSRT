var SRTlib = require('SRT-util');
const RateLimitedQueue = require('./RateLimitedQueue');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
describe('RateLimitedQueue', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "RateLimitedQueue", "fileName": "${__filename}", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);
  });

  let pending = 0;
  function fn() {
    pending++;
    return delay(15).then(() => pending--);
  }
  it('should run at most N promises at the same time', async () => {
    const queue = new RateLimitedQueue(4);
    const fn2 = queue.wrapPromiseFunction(fn);
    const result = Promise.all([fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2()]);
    expect(pending).toBe(4);
    await delay(10);
    expect(pending).toBe(4);
    await result;
    expect(pending).toBe(0);
  });
  it('should accept Infinity as limit', () => {
    const queue = new RateLimitedQueue(Infinity);
    const fn2 = queue.wrapPromiseFunction(fn);
    const result = Promise.all([fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2()]);
    expect(pending).toBe(10);
    return result.then(() => {
      expect(pending).toBe(0);
    });
  });
  it('should accept non-promise function in wrapPromiseFunction()', () => {
    const queue = new RateLimitedQueue(1);
    function syncFn() {
      return 1;
    }
    const fn2 = queue.wrapPromiseFunction(syncFn);
    return Promise.all([fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2()]);
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "RateLimitedQueue" },`);
    await SRTlib.endLogger();
  });

});
