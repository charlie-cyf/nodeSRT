const SRTlib = require('SRT-util');

const isTouchDevice = require('./isTouchDevice');
describe('isTouchDevice', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "isTouchDevice", "fileName": "${__filename}", "calls" : [`);
  });

  const RealTouchStart = global.window.ontouchstart;
  const RealMaxTouchPoints = global.navigator.maxTouchPoints;
  beforeEach(() => {
        SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);

    global.window.ontouchstart = true;
    global.navigator.maxTouchPoints = 1;
  });
  afterEach(() => {
        SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);

    global.navigator.maxTouchPoints = RealMaxTouchPoints;
    global.window.ontouchstart = RealTouchStart;
  });
  xit("should return true if it's a touch device", () => {
    expect(isTouchDevice()).toEqual(true);
    delete global.window.ontouchstart;
    global.navigator.maxTouchPoints = false;
    expect(isTouchDevice()).toEqual(false);
  });
    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "isTouchDevice" },`);
    await SRTlib.endLogger();
  });

});
