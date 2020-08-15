const SRTlib = require('SRTutil');

const {
  default: getAmpUrl
} = require('.');

describe('getAmpUrl', () => {
  beforeAll(() => {
    SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "getAmpUrl", "fileName": "/index.test.js", "calls" : [`);
  });
  ['http://localhost:7080', 'https://www.test.bbc.com', 'https://www.bbc.com'].forEach(baseUrl => {
    describe(`with base url ${baseUrl}`, () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "with%20base%20url%20%24%7BbaseUrl%7D", "fileName": "/index.test.js", "calls" : [`);
      });
      it('should return amp url', () => {
        SRTlib.send(`{ "testName": "should%20return%20amp%20url", "fileName": "/index.test.js", "calls" : [`);
        expect(getAmpUrl(`${baseUrl}/pathname`)).toEqual(`${baseUrl}/pathname.amp`);
      });
      it('should not append .amp to amp path', () => {
        SRTlib.send(`{ "testName": "should%20not%20append%20.amp%20to%20amp%20path", "fileName": "/index.test.js", "calls" : [`);
        expect(getAmpUrl(`${baseUrl}/pathname.amp`)).toEqual(`${baseUrl}/pathname.amp`);
      });
      it('should return amp url for path with query string params', () => {
        SRTlib.send(`{ "testName": "should%20return%20amp%20url%20for%20path%20with%20query%20string%20params", "fileName": "/index.test.js", "calls" : [`);
        expect(getAmpUrl(`${baseUrl}/pathname?query_string=value`)).toEqual(`${baseUrl}/pathname.amp?query_string=value`);
      });
      it('should not append .amp to amp path with query string params', () => {
        SRTlib.send(`{ "testName": "should%20not%20append%20.amp%20to%20amp%20path%20with%20query%20string%20params", "fileName": "/index.test.js", "calls" : [`);
        expect(getAmpUrl(`${baseUrl}/pathname.amp?query_string=value`)).toEqual(`${baseUrl}/pathname.amp?query_string=value`);
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "with%20base%20url%20%24%7BbaseUrl%7D" },`);
        await SRTlib.endLogger();
      });
    });
  });
  afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });
  afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "getAmpUrl" },`);
    await SRTlib.endLogger();
  });
});