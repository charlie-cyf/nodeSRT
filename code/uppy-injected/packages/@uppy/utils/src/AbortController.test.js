const SRTlib = require('SRT-util');

const {AbortController, AbortSignal} = require('./AbortController');
function flushInstantTimeouts() {
  return new Promise(resolve => setTimeout(resolve, 0));
}
describe('AbortController', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "AbortController", "fileName": "/packages/@uppy/utils/src/AbortController.test.js", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "/packages/@uppy/utils/src/AbortController.test.js", "calls" : [`);
  });

  it('has the expected shape', () => {
    const controller = new AbortController();
    expect(typeof controller.abort).toBe('function');
    expect(controller.signal).toBeInstanceOf(AbortSignal);
  });
  it('emits "abort" when abort() is called', async () => {
    const controller = new AbortController();
    const callback = jest.fn();
    controller.signal.addEventListener('abort', callback);
    controller.abort();
    await flushInstantTimeouts();
    expect(callback).toHaveBeenCalled();
    expect(callback.mock.calls[0][0]).toBeInstanceOf(Event);
  });
  it('add and remove events', async () => {
    const controller = new AbortController();
    const callback = jest.fn();
    const callback2 = jest.fn();
    controller.signal.addEventListener('abort', callback);
    controller.signal.addEventListener('abort', callback2);
    controller.signal.removeEventListener('abort', callback);
    controller.abort();
    await flushInstantTimeouts();
    expect(callback2).toHaveBeenCalled();
    expect(callback2.mock.calls[0][0]).toBeInstanceOf(Event);
    expect(callback).not.toHaveBeenCalled();
  });
  it('sets `signal.aborted` property when abort() is called', () => {
    const controller = new AbortController();
    expect(controller.signal.aborted).toBe(false);
    controller.abort();
    expect(controller.signal.aborted).toBe(true);
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "AbortController" },`);
    await SRTlib.endLogger();
  });

});
