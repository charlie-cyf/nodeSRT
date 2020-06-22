var SRTlib = require('SRT-util');
const RateLimitedQueue = require('./RateLimitedQueue');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
describe('RateLimitedQueue', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "RateLimitedQueue", "fileName": "${__filename}", "calls" : [`);

  let pending = 0;
  function fn() {
    pending++;
    return delay(15).then(() => pending--);
  }
  it('should run at most N promises at the same time', async () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "RateLimitedQueue", "testName": "should%20run%20at%20most%20N%20promises%20at%20the%20same%20time", "fileName": "${__filename}", "calls" : [`);

    const queue = new RateLimitedQueue(4);
    const fn2 = queue.wrapPromiseFunction(fn);
    const result = Promise.all([fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2()]);
    expect(pending).toBe(4);
    await delay(10);
    expect(pending).toBe(4);
    await result;
    expect(pending).toBe(0);
        SRTlib.send('], "end": "test-should%20run%20at%20most%20N%20promises%20at%20the%20same%20time"},');
    SRTlib.endLogger();

  });
  it('should accept Infinity as limit', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "RateLimitedQueue", "testName": "should%20accept%20Infinity%20as%20limit", "fileName": "${__filename}", "calls" : [`);

    const queue = new RateLimitedQueue(Infinity);
    const fn2 = queue.wrapPromiseFunction(fn);
    const result = Promise.all([fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2()]);
    expect(pending).toBe(10);
    return result.then(() => {
      expect(pending).toBe(0);
    });
        SRTlib.send('], "end": "test-should%20accept%20Infinity%20as%20limit"},');
    SRTlib.endLogger();

  });
  it('should accept non-promise function in wrapPromiseFunction()', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "RateLimitedQueue", "testName": "should%20accept%20non-promise%20function%20in%20wrapPromiseFunction%28%29", "fileName": "${__filename}", "calls" : [`);

    const queue = new RateLimitedQueue(1);
    function syncFn() {
      return 1;
    }
    const fn2 = queue.wrapPromiseFunction(syncFn);
    return Promise.all([fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2(), fn2()]);
        SRTlib.send('], "end": "test-should%20accept%20non-promise%20function%20in%20wrapPromiseFunction%28%29"},');
    SRTlib.endLogger();

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
