import SRTlib from 'SRTutil';
import routes from './index';
const MOCK_PATH = 'mock-path';
routes.filter(route => route.pageType !== 'error').forEach(({
  getInitialData,
  pageType
}) => {
  beforeAll(() => {
    SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "undefined", "fileName": "/getInitialData.test.jsx", "calls" : [`);
  });
  it(`${pageType} - should handle Ares 404`, async () => {
    SRTlib.send(`{"type":"TESTSTART","testName":"%24%7BpageType%7D%20-%20should%20handle%20Ares%20404","fileName":"/getInitialData.test.jsx"},`);
    global.fetch.mockResponseOnce(JSON.stringify({}), {
      status: 404
    });
    const actual = await getInitialData({
      path: MOCK_PATH,
      pageType
    });
    const expected = {
      error: 'data_response_404',
      status: 404
    };
    expect(actual).toEqual(expected);
  });
  it(`${pageType} - should handle Ares 202`, async () => {
    SRTlib.send(`{"type":"TESTSTART","testName":"%24%7BpageType%7D%20-%20should%20handle%20Ares%20202","fileName":"/getInitialData.test.jsx"},`);
    global.fetch.mockResponseOnce(JSON.stringify({}), {
      status: 202
    });
    const actual = await getInitialData({
      path: MOCK_PATH,
      pageType
    });
    expect(actual.status).toEqual(502);
    expect(actual.error).toMatch('Unexpected upstream response (HTTP status code 202) when requesting');
  });
  it(`${pageType} - should handle Ares 500`, async () => {
    SRTlib.send(`{"type":"TESTSTART","testName":"%24%7BpageType%7D%20-%20should%20handle%20Ares%20500","fileName":"/getInitialData.test.jsx"},`);
    global.fetch.mockResponseOnce(JSON.stringify({}), {
      status: 500
    });
    const actual = await getInitialData({
      path: MOCK_PATH,
      pageType
    });
    expect(actual.status).toEqual(502);
    expect(actual.error).toMatch('Unexpected upstream response (HTTP status code 500) when requesting');
  });
  it(`${pageType} - should handle Ares returning unexpected data`, async () => {
    SRTlib.send(`{"type":"TESTSTART","testName":"%24%7BpageType%7D%20-%20should%20handle%20Ares%20returning%20unexpected%20data","fileName":"/getInitialData.test.jsx"},`);
    global.fetch.mockResponseOnce('dataIsNotAsExpected');
    const actual = await getInitialData({
      path: MOCK_PATH,
      pageType
    });
    expect(actual.status).toEqual(502);
    expect(actual.error).toEqual('invalid json response body at  reason: Unexpected token d in JSON at position 0');
  });
  afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "undefined" },`);
    await SRTlib.endLogger();
  });
});