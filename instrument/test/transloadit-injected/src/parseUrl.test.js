const SRTlib = require("SRTutil");

const parseUrl = require("./parseUrl");

describe("Transloadit/parseUrl", () => {
  beforeAll(() => {
    SRTlib.startLogger("/mnt/c/Users/presi/workspace/nodeSRT/instrument/test/transloadit", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "Transloadit/parseUrl", "fileName": "/src/parseUrl.test.js", "calls" : [`);
  });
  beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "/src/parseUrl.test.js", "calls" : [`);
  });
  it("splits a url into origin and pathname", () => {
    expect(parseUrl("http://api2.transloadit.com/ws2012")).toEqual({
      origin: "http://api2.transloadit.com",
      pathname: "/ws2012"
    });
  });
  it("defaults to pathname=/ if absent", () => {
    expect(parseUrl("http://api2.transloadit.com")).toEqual({
      origin: "http://api2.transloadit.com",
      pathname: "/"
    });
  });
  afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });
  afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "Transloadit/parseUrl" },`);
    await SRTlib.endLogger();
  });
});