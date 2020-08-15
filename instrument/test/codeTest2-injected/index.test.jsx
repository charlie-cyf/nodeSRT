import SRTlib from 'SRTutil';
import React from 'react';
import request from 'supertest';
import * as reactDomServer from 'react-dom/server';
import * as styledComponents from 'styled-components';
import dotenv from 'dotenv';
import getRouteProps from '#app/routes/utils/fetchPageData/utils/getRouteProps';
import getToggles from '#app/lib/utilities/getToggles/withCache';
import defaultToggles from '#lib/config/toggles';
import Document from './Document/component';
import routes from '../app/routes';
import { localBaseUrl } from '../testHelpers/config';
import services from './utilities/serviceConfigs';
import * as renderDocument from './Document';
import sendCustomMetrics from './utilities/customMetrics';
import { NON_200_RESPONSE } from './utilities/customMetrics/metrics.const';
import loggerMock from '#testHelpers/loggerMock';
import { ROUTING_INFORMATION } from '#lib/logger.const'; // mimic the logic in `src/index.js` which imports the `server/index.jsx`

dotenv.config({
  path: './envConfig/local.env'
});

const path = require('path');

const express = require('express');

const server = require('./index').default;

const sendFileSpy = jest.spyOn(express.response, 'sendFile');

const validateHttpHeader = (headers, headerKey, expectedHeaderValue) => {
  const headerKeys = Object.keys(headers);
  const headerValues = Object.values(headers);
  const indexOfXFrame = headerKeys.indexOf(headerKey);
  expect(headerKeys).toContain(headerKey);
  expect(headerValues[indexOfXFrame]).toEqual(expectedHeaderValue);
};

jest.mock('react-dom/server', () => ({
  renderToString: jest.fn().mockImplementation(() => '<h1>Mock app</h1>'),
  renderToStaticMarkup: jest.fn().mockImplementation(() => '<html><body><h1>Mock app</h1></body></html>')
}));
jest.mock('react-helmet', () => ({
  Helmet: {
    renderStatic: jest.fn().mockReturnValue({
      head: 'tags'
    })
  }
}));
jest.mock('@loadable/server', () => ({
  ChunkExtractor: () => ({
    collectChunks: arg => arg,
    getScriptElements: () => '__mock_script_elements__'
  })
}));
jest.mock('#app/routes/utils/fetchPageData/utils/getRouteProps');
jest.mock('#app/lib/utilities/getToggles/withCache');
getToggles.mockImplementation(() => defaultToggles.local);

const mockRouteProps = ({
  id,
  service,
  isAmp,
  dataResponse,
  responseType,
  variant,
  pageType
}) => {
  const getInitialData = responseType === 'reject' ? jest.fn().mockRejectedValueOnce(dataResponse) : jest.fn().mockResolvedValueOnce(dataResponse); // Add a leading slash to match what is received from the application routing regex.

  const mockVariantParam = variant ? `/${variant}` : undefined;
  getRouteProps.mockReturnValue({
    isAmp,
    service,
    variant,
    route: {
      getInitialData,
      pageType
    },
    match: {
      params: {
        id,
        service,
        variant: mockVariantParam
      }
    }
  });
};

styledComponents.ServerStyleSheet = jest.fn().mockImplementation(() => ({
  collectStyles: jest.fn().mockReturnValue(<h1>Mock app</h1>),
  getStyleElement: jest.fn().mockReturnValue(<style />)
}));
jest.mock('./styles', () => ({
  getStyleTag: jest.fn().mockImplementation(() => <style />)
}));
jest.mock('./utilities/customMetrics');
const renderDocumentSpy = jest.spyOn(renderDocument, 'default');

const makeRequest = async requestPath => request(server).get(requestPath);

const QUERY_STRING = '?param=test&query=1';

const testRenderedData = ({
  url,
  service,
  isAmp,
  successDataResponse,
  variant
}) => async () => {
  const {
    text,
    status
  } = await makeRequest(url);
  const assetOrigins = ['https://cookie-oven.api.bbc.co.uk', 'https://ichef.bbci.co.uk', localBaseUrl, 'https://logws1363.ati-host.net?'];
  const config = services[service];
  const {
    fonts
  } = config[variant || 'default'];

  if (fonts && fonts.length > 0) {
    assetOrigins.push('https://gel.files.bbci.co.uk', 'https://ws-downloads.files.bbci.co.uk');
  }

  expect(status).toBe(200);
  expect(reactDomServer.renderToString).toHaveBeenCalledWith(<h1>Mock app</h1>);
  expect(reactDomServer.renderToStaticMarkup).toHaveBeenCalledWith(<Document app="<h1>Mock app</h1>" assetOrigins={assetOrigins} data={successDataResponse} helmet={{
    head: 'tags'
  }} isAmp={isAmp} service={service} scripts="__mock_script_elements__" styleTags={<style />} />);
  const expectedProps = {
    bbcOrigin: undefined,
    data: successDataResponse,
    isAmp,
    service,
    routes,
    url
  };

  if (variant) {
    expectedProps.variant = variant;
  }

  expect(renderDocumentSpy).toHaveBeenCalledWith(expectedProps);
  expect(getRouteProps).toHaveBeenCalledWith(routes, url.split('?')[0]);
  expect(text).toEqual('<!doctype html><html><body><h1>Mock app</h1></body></html>');
};

const assertNon200ResponseCustomMetrics = ({
  requestUrl,
  pageType,
  statusCode = 500
}) => {
  it('should send custom metrics for non 200 response status code', async () => {
    await makeRequest(requestUrl);
    expect(sendCustomMetrics).toBeCalledWith({
      metricName: NON_200_RESPONSE,
      pageType,
      requestUrl,
      statusCode
    });
  });
};

const testFrontPages = ({
  platform,
  service,
  variant,
  queryString = ''
}) => {
  const isAmp = platform === 'amp';
  const extension = isAmp ? '.amp' : '';
  const serviceURL = `/${service}${variant ? `/${variant}` : ''}${extension}${queryString}`;
  describe(`Front Page: ${serviceURL}`, () => {
    beforeAll(() => {
      SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "Front%20Page%3A%20%24%7BserviceURL%7D", "fileName": "/index.test.jsx", "calls" : [`);
    });
    const successDataResponse = {
      isAmp,
      data: {
        some: 'data'
      },
      service: 'someService',
      status: 200,
      variant
    };
    const notFoundDataResponse = {
      isAmp,
      data: {
        some: 'data'
      },
      service: 'someService',
      status: 404,
      variant
    };
    describe('Successful render', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "Successful%20render", "fileName": "/index.test.jsx", "calls" : [`);
      });
      describe('200 status code', () => {
        beforeAll(() => {
          SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
          SRTlib.send(`{ "testSuiteName": "200%20status%20code", "fileName": "/index.test.jsx", "calls" : [`);
        });
        beforeEach(() => {
          SRTlib.send(`{ "testName": "beforeEach", "fileName": "/index.test.jsx", "calls" : [`);
          mockRouteProps({
            service,
            isAmp,
            dataResponse: successDataResponse,
            variant
          });
          SRTlib.send(`], "endTestName": "beforeEach" },`);
        });
        const configs = {
          url: serviceURL,
          service,
          isAmp,
          successDataResponse,
          variant
        };
        it('should respond with rendered data', async () => {
          SRTlib.send(`{ "testName": "should%20respond%20with%20rendered%20data", "fileName": "/index.test.jsx", "calls" : [`);
          testRenderedData(configs);
        });
        afterAll(async () => {
          SRTlib.send(`], "endTestSuiteName": "200%20status%20code" },`);
          await SRTlib.endLogger();
        });
      });
      describe('404 status code', () => {
        beforeAll(() => {
          SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
          SRTlib.send(`{ "testSuiteName": "404%20status%20code", "fileName": "/index.test.jsx", "calls" : [`);
        });
        const pageType = 'Front Page';
        beforeEach(() => {
          SRTlib.send(`{ "testName": "beforeEach", "fileName": "/index.test.jsx", "calls" : [`);
          mockRouteProps({
            service,
            isAmp,
            dataResponse: notFoundDataResponse,
            variant,
            pageType
          });
          SRTlib.send(`], "endTestName": "beforeEach" },`);
        });
        it('should respond with a rendered 404', async () => {
          SRTlib.send(`{ "testName": "should%20respond%20with%20a%20rendered%20404", "fileName": "/index.test.jsx", "calls" : [`);
          const {
            status,
            text
          } = await makeRequest(serviceURL);
          expect(status).toBe(404);
          expect(text).toEqual('<!doctype html><html><body><h1>Mock app</h1></body></html>');
        });
        assertNon200ResponseCustomMetrics({
          requestUrl: serviceURL,
          pageType,
          statusCode: 404
        });
        afterAll(async () => {
          SRTlib.send(`], "endTestSuiteName": "404%20status%20code" },`);
          await SRTlib.endLogger();
        });
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "Successful%20render" },`);
        await SRTlib.endLogger();
      });
    });
    describe('Unknown error within the data fetch, react router or its dependencies', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "Unknown%20error%20within%20the%20data%20fetch%2C%20react%20router%20or%20its%20dependencies", "fileName": "/index.test.jsx", "calls" : [`);
      });
      const pageType = 'frontPage';
      beforeEach(() => {
        SRTlib.send(`{ "testName": "beforeEach", "fileName": "/index.test.jsx", "calls" : [`);
        mockRouteProps({
          service,
          isAmp,
          dataResponse: Error('Error!'),
          responseType: 'reject',
          variant,
          pageType
        });
        SRTlib.send(`], "endTestName": "beforeEach" },`);
      });
      it('should respond with a 500', async () => {
        SRTlib.send(`{ "testName": "should%20respond%20with%20a%20500", "fileName": "/index.test.jsx", "calls" : [`);
        const {
          status,
          text
        } = await makeRequest(serviceURL);
        expect(status).toEqual(500);
        expect(text).toEqual('Error!');
      });
      assertNon200ResponseCustomMetrics({
        requestUrl: serviceURL,
        pageType
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "Unknown%20error%20within%20the%20data%20fetch%2C%20react%20router%20or%20its%20dependencies" },`);
        await SRTlib.endLogger();
      });
    });
    afterEach(() => {
      SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
    });
    afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "Front%20Page%3A%20%24%7BserviceURL%7D" },`);
      await SRTlib.endLogger();
    });
  });
};

const testArticles = ({
  platform,
  service,
  variant,
  queryString = ''
}) => {
  const isAmp = platform === 'amp';
  const extension = isAmp ? '.amp' : '';
  describe(`Optimo Article: /${service}/articles/optimoID/${extension}${queryString}`, () => {
    beforeAll(() => {
      SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "Optimo%20Article%3A%20/%24%7Bservice%7D/articles/optimoID/%24%7Bextension%7D%24%7BqueryString%7D", "fileName": "/index.test.jsx", "calls" : [`);
    });
    const successDataResponse = {
      isAmp,
      data: {
        some: 'data'
      },
      service: 'someService',
      status: 200
    };
    const notFoundDataResponse = {
      isAmp,
      data: {
        some: 'data'
      },
      service: 'someService',
      status: 404
    };
    const id = `c0000000001o`;
    const articleURL = `/${service}/articles/${id}${extension}${queryString}`;
    describe('Successful render', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "Successful%20render", "fileName": "/index.test.jsx", "calls" : [`);
      });
      describe('200 status code', () => {
        beforeAll(() => {
          SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
          SRTlib.send(`{ "testSuiteName": "200%20status%20code", "fileName": "/index.test.jsx", "calls" : [`);
        });
        beforeEach(() => {
          SRTlib.send(`{ "testName": "beforeEach", "fileName": "/index.test.jsx", "calls" : [`);
          mockRouteProps({
            id,
            service,
            isAmp,
            dataResponse: successDataResponse,
            variant
          });
          SRTlib.send(`], "endTestName": "beforeEach" },`);
        });
        const configs = {
          url: articleURL,
          service,
          isAmp,
          successDataResponse,
          variant
        };
        it('should respond with rendered data', async () => {
          SRTlib.send(`{ "testName": "should%20respond%20with%20rendered%20data", "fileName": "/index.test.jsx", "calls" : [`);
          testRenderedData(configs);
        });
        afterAll(async () => {
          SRTlib.send(`], "endTestSuiteName": "200%20status%20code" },`);
          await SRTlib.endLogger();
        });
      });
      describe('404 status code', () => {
        beforeAll(() => {
          SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
          SRTlib.send(`{ "testSuiteName": "404%20status%20code", "fileName": "/index.test.jsx", "calls" : [`);
        });
        const pageType = 'articles';
        beforeEach(() => {
          SRTlib.send(`{ "testName": "beforeEach", "fileName": "/index.test.jsx", "calls" : [`);
          mockRouteProps({
            id,
            service,
            isAmp,
            dataResponse: notFoundDataResponse,
            variant,
            pageType
          });
          SRTlib.send(`], "endTestName": "beforeEach" },`);
        });
        it('should respond with a rendered 404', async () => {
          SRTlib.send(`{ "testName": "should%20respond%20with%20a%20rendered%20404", "fileName": "/index.test.jsx", "calls" : [`);
          const {
            status,
            text
          } = await makeRequest(articleURL);
          expect(status).toBe(404);
          expect(text).toEqual('<!doctype html><html><body><h1>Mock app</h1></body></html>');
        });
        assertNon200ResponseCustomMetrics({
          requestUrl: articleURL,
          pageType,
          statusCode: 404
        });
        afterAll(async () => {
          SRTlib.send(`], "endTestSuiteName": "404%20status%20code" },`);
          await SRTlib.endLogger();
        });
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "Successful%20render" },`);
        await SRTlib.endLogger();
      });
    });
    describe('Unknown error within the data fetch, react router or its dependencies', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "Unknown%20error%20within%20the%20data%20fetch%2C%20react%20router%20or%20its%20dependencies", "fileName": "/index.test.jsx", "calls" : [`);
      });
      const pageType = 'articles';
      beforeEach(() => {
        SRTlib.send(`{ "testName": "beforeEach", "fileName": "/index.test.jsx", "calls" : [`);
        mockRouteProps({
          id,
          service,
          isAmp,
          dataResponse: Error('Error!'),
          responseType: 'reject',
          variant,
          pageType
        });
        SRTlib.send(`], "endTestName": "beforeEach" },`);
      });
      it('should respond with a 500', async () => {
        SRTlib.send(`{ "testName": "should%20respond%20with%20a%20500", "fileName": "/index.test.jsx", "calls" : [`);
        const {
          status,
          text
        } = await makeRequest(articleURL);
        expect(status).toEqual(500);
        expect(text).toEqual('Error!');
      });
      assertNon200ResponseCustomMetrics({
        requestUrl: articleURL,
        pageType
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "Unknown%20error%20within%20the%20data%20fetch%2C%20react%20router%20or%20its%20dependencies" },`);
        await SRTlib.endLogger();
      });
    });
    afterEach(() => {
      SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
    });
    afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "Optimo%20Article%3A%20/%24%7Bservice%7D/articles/optimoID/%24%7Bextension%7D%24%7BqueryString%7D" },`);
      await SRTlib.endLogger();
    });
  });
};

const testAssetPages = ({
  platform,
  service,
  assetUri,
  variant,
  queryString = ''
}) => {
  const isAmp = platform === 'amp';
  const extension = isAmp ? '.amp' : '';
  describe(`CPS Asset: /${service}/${assetUri}${extension}${queryString}`, () => {
    beforeAll(() => {
      SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "CPS%20Asset%3A%20/%24%7Bservice%7D/%24%7BassetUri%7D%24%7Bextension%7D%24%7BqueryString%7D", "fileName": "/index.test.jsx", "calls" : [`);
    });
    const successDataResponse = {
      isAmp,
      data: {
        some: 'data'
      },
      service: 'someService',
      status: 200
    };
    const notFoundDataResponse = {
      isAmp,
      data: {
        some: 'data'
      },
      service: 'someService',
      status: 404
    };
    const articleURL = `/${service}/${assetUri}${extension}${queryString}`;
    describe('Successful render', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "Successful%20render", "fileName": "/index.test.jsx", "calls" : [`);
      });
      describe('200 status code', () => {
        beforeAll(() => {
          SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
          SRTlib.send(`{ "testSuiteName": "200%20status%20code", "fileName": "/index.test.jsx", "calls" : [`);
        });
        beforeEach(() => {
          SRTlib.send(`{ "testName": "beforeEach", "fileName": "/index.test.jsx", "calls" : [`);
          mockRouteProps({
            assetUri,
            service,
            isAmp,
            dataResponse: successDataResponse,
            variant
          });
          SRTlib.send(`], "endTestName": "beforeEach" },`);
        });
        const configs = {
          url: articleURL,
          service,
          isAmp,
          successDataResponse,
          variant
        };
        it('should respond with rendered data', async () => {
          SRTlib.send(`{ "testName": "should%20respond%20with%20rendered%20data", "fileName": "/index.test.jsx", "calls" : [`);
          testRenderedData(configs);
        });
        afterAll(async () => {
          SRTlib.send(`], "endTestSuiteName": "200%20status%20code" },`);
          await SRTlib.endLogger();
        });
      });
      describe('404 status code', () => {
        beforeAll(() => {
          SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
          SRTlib.send(`{ "testSuiteName": "404%20status%20code", "fileName": "/index.test.jsx", "calls" : [`);
        });
        const pageType = 'CPS Asset';
        beforeEach(() => {
          SRTlib.send(`{ "testName": "beforeEach", "fileName": "/index.test.jsx", "calls" : [`);
          mockRouteProps({
            assetUri,
            service,
            isAmp,
            dataResponse: notFoundDataResponse,
            variant,
            pageType
          });
          SRTlib.send(`], "endTestName": "beforeEach" },`);
        });
        it('should respond with a rendered 404', async () => {
          SRTlib.send(`{ "testName": "should%20respond%20with%20a%20rendered%20404", "fileName": "/index.test.jsx", "calls" : [`);
          const {
            status,
            text
          } = await makeRequest(articleURL);
          expect(status).toBe(404);
          expect(text).toEqual('<!doctype html><html><body><h1>Mock app</h1></body></html>');
        });
        assertNon200ResponseCustomMetrics({
          requestUrl: articleURL,
          pageType,
          statusCode: 404
        });
        afterAll(async () => {
          SRTlib.send(`], "endTestSuiteName": "404%20status%20code" },`);
          await SRTlib.endLogger();
        });
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "Successful%20render" },`);
        await SRTlib.endLogger();
      });
    });
    describe('Unknown error within the data fetch, react router or its dependencies', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "Unknown%20error%20within%20the%20data%20fetch%2C%20react%20router%20or%20its%20dependencies", "fileName": "/index.test.jsx", "calls" : [`);
      });
      const pageType = 'cpsAsset';
      beforeEach(() => {
        SRTlib.send(`{ "testName": "beforeEach", "fileName": "/index.test.jsx", "calls" : [`);
        mockRouteProps({
          assetUri,
          service,
          isAmp,
          dataResponse: Error('Error!'),
          responseType: 'reject',
          variant,
          pageType
        });
        SRTlib.send(`], "endTestName": "beforeEach" },`);
      });
      it('should respond with a 500', async () => {
        SRTlib.send(`{ "testName": "should%20respond%20with%20a%20500", "fileName": "/index.test.jsx", "calls" : [`);
        const {
          status,
          text
        } = await makeRequest(articleURL);
        expect(status).toEqual(500);
        expect(text).toEqual('Error!');
      });
      assertNon200ResponseCustomMetrics({
        requestUrl: articleURL,
        pageType
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "Unknown%20error%20within%20the%20data%20fetch%2C%20react%20router%20or%20its%20dependencies" },`);
        await SRTlib.endLogger();
      });
    });
    afterEach(() => {
      SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
    });
    afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "CPS%20Asset%3A%20/%24%7Bservice%7D/%24%7BassetUri%7D%24%7Bextension%7D%24%7BqueryString%7D" },`);
      await SRTlib.endLogger();
    });
  });
};

const testMediaPages = ({
  platform,
  service,
  serviceId,
  mediaId,
  queryString = ''
}) => {
  describe(`${platform} radio page - live radio`, () => {
    beforeAll(() => {
      SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "%24%7Bplatform%7D%20radio%20page%20-%20live%20radio", "fileName": "/index.test.jsx", "calls" : [`);
    });
    const isAmp = platform === 'amp';
    const successDataResponse = {
      isAmp,
      data: {
        some: 'data'
      },
      service: 'someService',
      status: 200
    };
    const notFoundDataResponse = {
      isAmp,
      data: {
        some: 'data'
      },
      service: 'someService',
      status: 404
    };
    const extension = isAmp ? '.amp' : '';
    const mediaPageURL = `/${service}/${serviceId}/${mediaId}${extension}${queryString}`;
    describe('Successful render', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "Successful%20render", "fileName": "/index.test.jsx", "calls" : [`);
      });
      describe('200 status code', () => {
        beforeAll(() => {
          SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
          SRTlib.send(`{ "testSuiteName": "200%20status%20code", "fileName": "/index.test.jsx", "calls" : [`);
        });
        beforeEach(() => {
          SRTlib.send(`{ "testName": "beforeEach", "fileName": "/index.test.jsx", "calls" : [`);
          mockRouteProps({
            service,
            isAmp,
            dataResponse: successDataResponse
          });
          SRTlib.send(`], "endTestName": "beforeEach" },`);
        });
        const configs = {
          url: mediaPageURL,
          service,
          isAmp,
          successDataResponse
        };
        it('should respond with rendered data', async () => {
          SRTlib.send(`{ "testName": "should%20respond%20with%20rendered%20data", "fileName": "/index.test.jsx", "calls" : [`);
          testRenderedData(configs);
        });
        afterAll(async () => {
          SRTlib.send(`], "endTestSuiteName": "200%20status%20code" },`);
          await SRTlib.endLogger();
        });
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "Successful%20render" },`);
        await SRTlib.endLogger();
      });
    });
    describe('404 status code', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "404%20status%20code", "fileName": "/index.test.jsx", "calls" : [`);
      });
      const pageType = 'media';
      beforeEach(() => {
        SRTlib.send(`{ "testName": "beforeEach", "fileName": "/index.test.jsx", "calls" : [`);
        mockRouteProps({
          service,
          isAmp,
          dataResponse: notFoundDataResponse,
          pageType
        });
        SRTlib.send(`], "endTestName": "beforeEach" },`);
      });
      it('should respond with a rendered 404', async () => {
        SRTlib.send(`{ "testName": "should%20respond%20with%20a%20rendered%20404", "fileName": "/index.test.jsx", "calls" : [`);
        const {
          status,
          text
        } = await makeRequest(mediaPageURL);
        expect(status).toBe(404);
        expect(text).toEqual('<!doctype html><html><body><h1>Mock app</h1></body></html>');
      });
      assertNon200ResponseCustomMetrics({
        requestUrl: mediaPageURL,
        pageType,
        statusCode: 404
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "404%20status%20code" },`);
        await SRTlib.endLogger();
      });
    });
    describe('Unknown error within the data fetch, react router or its dependencies', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "Unknown%20error%20within%20the%20data%20fetch%2C%20react%20router%20or%20its%20dependencies", "fileName": "/index.test.jsx", "calls" : [`);
      });
      const pageType = 'liveRadio';
      beforeEach(() => {
        SRTlib.send(`{ "testName": "beforeEach", "fileName": "/index.test.jsx", "calls" : [`);
        mockRouteProps({
          service,
          isAmp,
          dataResponse: Error('Error!'),
          responseType: 'reject',
          pageType
        });
        SRTlib.send(`], "endTestName": "beforeEach" },`);
      });
      it('should respond with a 500', async () => {
        SRTlib.send(`{ "testName": "should%20respond%20with%20a%20500", "fileName": "/index.test.jsx", "calls" : [`);
        const {
          status,
          text
        } = await makeRequest(mediaPageURL);
        expect(status).toEqual(500);
        expect(text).toEqual('Error!');
      });
      assertNon200ResponseCustomMetrics({
        requestUrl: mediaPageURL,
        pageType
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "Unknown%20error%20within%20the%20data%20fetch%2C%20react%20router%20or%20its%20dependencies" },`);
        await SRTlib.endLogger();
      });
    });
    afterEach(() => {
      SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
    });
    afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "%24%7Bplatform%7D%20radio%20page%20-%20live%20radio" },`);
      await SRTlib.endLogger();
    });
  });
};

const testTvPages = ({
  platform,
  service,
  serviceId,
  brandEpisode,
  mediaId,
  queryString = ''
}) => {
  describe(`${platform} tv brand page`, () => {
    beforeAll(() => {
      SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "%24%7Bplatform%7D%20tv%20brand%20page", "fileName": "/index.test.jsx", "calls" : [`);
    });
    const isAmp = platform === 'amp';
    const successDataResponse = {
      isAmp,
      data: {
        some: 'data'
      },
      service: 'someService',
      status: 200
    };
    const notFoundDataResponse = {
      isAmp,
      data: {
        some: 'data'
      },
      service: 'someService',
      status: 404
    };
    const extension = isAmp ? '.amp' : '';
    const mediaPageURL = `/${service}/${serviceId}/${brandEpisode}/${mediaId}${extension}${queryString}`;
    describe('Successful render', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "Successful%20render", "fileName": "/index.test.jsx", "calls" : [`);
      });
      describe('200 status code', () => {
        beforeAll(() => {
          SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
          SRTlib.send(`{ "testSuiteName": "200%20status%20code", "fileName": "/index.test.jsx", "calls" : [`);
        });
        beforeEach(() => {
          SRTlib.send(`{ "testName": "beforeEach", "fileName": "/index.test.jsx", "calls" : [`);
          mockRouteProps({
            service,
            isAmp,
            dataResponse: successDataResponse
          });
          SRTlib.send(`], "endTestName": "beforeEach" },`);
        });
        const configs = {
          url: mediaPageURL,
          service,
          isAmp,
          successDataResponse
        };
        it('should respond with rendered data', async () => {
          SRTlib.send(`{ "testName": "should%20respond%20with%20rendered%20data", "fileName": "/index.test.jsx", "calls" : [`);
          testRenderedData(configs);
        });
        afterAll(async () => {
          SRTlib.send(`], "endTestSuiteName": "200%20status%20code" },`);
          await SRTlib.endLogger();
        });
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "Successful%20render" },`);
        await SRTlib.endLogger();
      });
    });
    describe('404 status code', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "404%20status%20code", "fileName": "/index.test.jsx", "calls" : [`);
      });
      const pageType = 'On Demand TV Brand';
      beforeEach(() => {
        SRTlib.send(`{ "testName": "beforeEach", "fileName": "/index.test.jsx", "calls" : [`);
        mockRouteProps({
          service,
          isAmp,
          dataResponse: notFoundDataResponse,
          pageType
        });
        SRTlib.send(`], "endTestName": "beforeEach" },`);
      });
      it('should respond with a rendered 404', async () => {
        SRTlib.send(`{ "testName": "should%20respond%20with%20a%20rendered%20404", "fileName": "/index.test.jsx", "calls" : [`);
        const {
          status,
          text
        } = await makeRequest(mediaPageURL);
        expect(status).toBe(404);
        expect(text).toEqual('<!doctype html><html><body><h1>Mock app</h1></body></html>');
      });
      assertNon200ResponseCustomMetrics({
        requestUrl: mediaPageURL,
        pageType,
        statusCode: 404
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "404%20status%20code" },`);
        await SRTlib.endLogger();
      });
    });
    describe('Unknown error within the data fetch, react router or its dependencies', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "Unknown%20error%20within%20the%20data%20fetch%2C%20react%20router%20or%20its%20dependencies", "fileName": "/index.test.jsx", "calls" : [`);
      });
      const pageType = 'onDemandTVBrand';
      beforeEach(() => {
        SRTlib.send(`{ "testName": "beforeEach", "fileName": "/index.test.jsx", "calls" : [`);
        mockRouteProps({
          service,
          isAmp,
          dataResponse: Error('Error!'),
          responseType: 'reject',
          pageType
        });
        SRTlib.send(`], "endTestName": "beforeEach" },`);
      });
      it('should respond with a 500', async () => {
        SRTlib.send(`{ "testName": "should%20respond%20with%20a%20500", "fileName": "/index.test.jsx", "calls" : [`);
        const {
          status,
          text
        } = await makeRequest(mediaPageURL);
        expect(status).toEqual(500);
        expect(text).toEqual('Error!');
      });
      assertNon200ResponseCustomMetrics({
        requestUrl: mediaPageURL,
        pageType
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "Unknown%20error%20within%20the%20data%20fetch%2C%20react%20router%20or%20its%20dependencies" },`);
        await SRTlib.endLogger();
      });
    });
    afterEach(() => {
      SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
    });
    afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "%24%7Bplatform%7D%20tv%20brand%20page" },`);
      await SRTlib.endLogger();
    });
  });
};

const testOnDemandTvEpisodePages = ({
  platform,
  service,
  serviceId,
  brandEpisode,
  mediaId,
  queryString = ''
}) => {
  describe(`${platform} tv episode page`, () => {
    beforeAll(() => {
      SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "%24%7Bplatform%7D%20tv%20episode%20page", "fileName": "/index.test.jsx", "calls" : [`);
    });
    const isAmp = platform === 'amp';
    const successDataResponse = {
      isAmp,
      data: {
        some: 'data'
      },
      service: 'someService',
      status: 200
    };
    const notFoundDataResponse = {
      isAmp,
      data: {
        some: 'data'
      },
      service: 'someService',
      status: 404
    };
    const extension = isAmp ? '.amp' : '';
    const mediaPageURL = `/${service}/${serviceId}/${brandEpisode}/${mediaId}${extension}${queryString}`;
    describe('Successful render', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "Successful%20render", "fileName": "/index.test.jsx", "calls" : [`);
      });
      describe('200 status code', () => {
        beforeAll(() => {
          SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
          SRTlib.send(`{ "testSuiteName": "200%20status%20code", "fileName": "/index.test.jsx", "calls" : [`);
        });
        beforeEach(() => {
          SRTlib.send(`{ "testName": "beforeEach", "fileName": "/index.test.jsx", "calls" : [`);
          mockRouteProps({
            service,
            isAmp,
            dataResponse: successDataResponse
          });
          SRTlib.send(`], "endTestName": "beforeEach" },`);
        });
        const configs = {
          url: mediaPageURL,
          service,
          isAmp,
          successDataResponse
        };
        it('should respond with rendered data', async () => {
          SRTlib.send(`{ "testName": "should%20respond%20with%20rendered%20data", "fileName": "/index.test.jsx", "calls" : [`);
          testRenderedData(configs);
        });
        afterAll(async () => {
          SRTlib.send(`], "endTestSuiteName": "200%20status%20code" },`);
          await SRTlib.endLogger();
        });
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "Successful%20render" },`);
        await SRTlib.endLogger();
      });
    });
    describe('404 status code', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "404%20status%20code", "fileName": "/index.test.jsx", "calls" : [`);
      });
      const pageType = 'On Demand TV Episode';
      beforeEach(() => {
        SRTlib.send(`{ "testName": "beforeEach", "fileName": "/index.test.jsx", "calls" : [`);
        mockRouteProps({
          service,
          isAmp,
          dataResponse: notFoundDataResponse,
          pageType
        });
        SRTlib.send(`], "endTestName": "beforeEach" },`);
      });
      it('should respond with a rendered 404', async () => {
        SRTlib.send(`{ "testName": "should%20respond%20with%20a%20rendered%20404", "fileName": "/index.test.jsx", "calls" : [`);
        const {
          status,
          text
        } = await makeRequest(`/${service}`);
        expect(status).toBe(404);
        expect(text).toEqual('<!doctype html><html><body><h1>Mock app</h1></body></html>');
      });
      assertNon200ResponseCustomMetrics({
        requestUrl: mediaPageURL,
        pageType,
        statusCode: 404
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "404%20status%20code" },`);
        await SRTlib.endLogger();
      });
    });
    describe('Unknown error within the data fetch, react router or its dependencies', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "Unknown%20error%20within%20the%20data%20fetch%2C%20react%20router%20or%20its%20dependencies", "fileName": "/index.test.jsx", "calls" : [`);
      });
      const pageType = 'onDemandTVEpisode';
      beforeEach(() => {
        SRTlib.send(`{ "testName": "beforeEach", "fileName": "/index.test.jsx", "calls" : [`);
        mockRouteProps({
          service,
          isAmp,
          dataResponse: Error('Error!'),
          responseType: 'reject',
          pageType
        });
        SRTlib.send(`], "endTestName": "beforeEach" },`);
      });
      it('should respond with a 500', async () => {
        SRTlib.send(`{ "testName": "should%20respond%20with%20a%20500", "fileName": "/index.test.jsx", "calls" : [`);
        const {
          status,
          text
        } = await makeRequest(mediaPageURL);
        expect(status).toEqual(500);
        expect(text).toEqual('Error!');
      });
      assertNon200ResponseCustomMetrics({
        requestUrl: mediaPageURL,
        pageType
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "Unknown%20error%20within%20the%20data%20fetch%2C%20react%20router%20or%20its%20dependencies" },`);
        await SRTlib.endLogger();
      });
    });
    afterEach(() => {
      SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
    });
    afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "%24%7Bplatform%7D%20tv%20episode%20page" },`);
      await SRTlib.endLogger();
    });
  });
};

describe('Server', () => {
  beforeAll(() => {
    SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "Server", "fileName": "/index.test.jsx", "calls" : [`);
  });
  beforeEach(() => {
    SRTlib.send(`{ "testName": "beforeEach", "fileName": "/index.test.jsx", "calls" : [`);
    jest.clearAllMocks();
    SRTlib.send(`], "endTestName": "beforeEach" },`);
  });
  describe('/status', () => {
    beforeAll(() => {
      SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "/status", "fileName": "/index.test.jsx", "calls" : [`);
    });
    it('should respond with a 200', async () => {
      SRTlib.send(`{ "testName": "should%20respond%20with%20a%20200", "fileName": "/index.test.jsx", "calls" : [`);
      const {
        statusCode,
        body
      } = await makeRequest('/status');
      expect(statusCode).toBe(200);
      expect(body).toStrictEqual({
        commitHash: '383522b',
        deployEnvironment: 'green',
        version: '1.0.0'
      });
    });
    afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "/status" },`);
      await SRTlib.endLogger();
    });
  });
  describe('Service workers', () => {
    beforeAll(() => {
      SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "Service%20workers", "fileName": "/index.test.jsx", "calls" : [`);
    });
    it('should serve a file for existing service workers', async () => {
      SRTlib.send(`{ "testName": "should%20serve%20a%20file%20for%20existing%20service%20workers", "fileName": "/index.test.jsx", "calls" : [`);
      await makeRequest('/news/articles/sw.js');
      expect(sendFileSpy.mock.calls[0][0]).toEqual(path.join(__dirname, '/public/sw.js'));
    });
    it('should not serve a file for non-existing service workers', async () => {
      SRTlib.send(`{ "testName": "should%20not%20serve%20a%20file%20for%20non-existing%20service%20workers", "fileName": "/index.test.jsx", "calls" : [`);
      const {
        statusCode
      } = await makeRequest('/some-service/articles/sw.js');
      expect(sendFileSpy.mock.calls.length).toEqual(0);
      expect(statusCode).toEqual(500);
    });
    afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "Service%20workers" },`);
      await SRTlib.endLogger();
    });
  });
  describe('Manifest json', () => {
    beforeAll(() => {
      SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "Manifest%20json", "fileName": "/index.test.jsx", "calls" : [`);
    });
    it('should serve a file for valid service paths', async () => {
      SRTlib.send(`{ "testName": "should%20serve%20a%20file%20for%20valid%20service%20paths", "fileName": "/index.test.jsx", "calls" : [`);
      await makeRequest('/news/articles/manifest.json');
      expect(sendFileSpy.mock.calls[0][0]).toEqual(path.join(__dirname, '/public/news/manifest.json'));
    });
    it('should not serve a manifest file for non-existing services', async () => {
      SRTlib.send(`{ "testName": "should%20not%20serve%20a%20manifest%20file%20for%20non-existing%20services", "fileName": "/index.test.jsx", "calls" : [`);
      const {
        statusCode
      } = await makeRequest('/some-service/manifest.json');
      expect(sendFileSpy.mock.calls.length).toEqual(0);
      expect(statusCode).toEqual(500);
    });
    it('should serve a response cache control of 7 days', async () => {
      SRTlib.send(`{ "testName": "should%20serve%20a%20response%20cache%20control%20of%207%20days", "fileName": "/index.test.jsx", "calls" : [`);
      const {
        header
      } = await makeRequest('/news/articles/manifest.json');
      expect(header['cache-control']).toBe('public, max-age=604800');
    });
    afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "Manifest%20json" },`);
      await SRTlib.endLogger();
    });
  });
  describe('Most Read json', () => {
    beforeAll(() => {
      SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "Most%20Read%20json", "fileName": "/index.test.jsx", "calls" : [`);
    });
    it('should serve a file for valid service paths with variants', async () => {
      SRTlib.send(`{ "testName": "should%20serve%20a%20file%20for%20valid%20service%20paths%20with%20variants", "fileName": "/index.test.jsx", "calls" : [`);
      const {
        body
      } = await makeRequest('/zhongwen/mostread/trad.json');
      expect(body).toEqual(expect.objectContaining({
        records: expect.any(Object)
      }));
    });
    it('should serve a file for valid service paths without variants', async () => {
      SRTlib.send(`{ "testName": "should%20serve%20a%20file%20for%20valid%20service%20paths%20without%20variants", "fileName": "/index.test.jsx", "calls" : [`);
      const {
        body
      } = await makeRequest('/news/mostread.json');
      expect(body).toEqual(expect.objectContaining({
        records: expect.any(Object)
      }));
    });
    it('should respond with a 500 for non-existing services', async () => {
      SRTlib.send(`{ "testName": "should%20respond%20with%20a%20500%20for%20non-existing%20services", "fileName": "/index.test.jsx", "calls" : [`);
      const {
        statusCode
      } = await makeRequest('/some-service/mostread.json');
      expect(statusCode).toEqual(500);
    });
    afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "Most%20Read%20json" },`);
      await SRTlib.endLogger();
    });
  });
  describe('STY secondary column json', () => {
    beforeAll(() => {
      SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "STY%20secondary%20column%20json", "fileName": "/index.test.jsx", "calls" : [`);
    });
    it('should serve a file for valid service paths with variants', async () => {
      SRTlib.send(`{ "testName": "should%20serve%20a%20file%20for%20valid%20service%20paths%20with%20variants", "fileName": "/index.test.jsx", "calls" : [`);
      const {
        body
      } = await makeRequest('/zhongwen/sty-secondary-column/trad.json');
      expect(body).toEqual(expect.objectContaining({
        topStories: expect.any(Object),
        features: expect.any(Object)
      }));
    });
    it('should serve a file for valid service paths without variants', async () => {
      SRTlib.send(`{ "testName": "should%20serve%20a%20file%20for%20valid%20service%20paths%20without%20variants", "fileName": "/index.test.jsx", "calls" : [`);
      const {
        body
      } = await makeRequest('/mundo/sty-secondary-column.json');
      expect(body).toEqual(expect.objectContaining({
        topStories: expect.any(Object),
        features: expect.any(Object)
      }));
    });
    it('should respond with a 500 for non-existing services', async () => {
      SRTlib.send(`{ "testName": "should%20respond%20with%20a%20500%20for%20non-existing%20services", "fileName": "/index.test.jsx", "calls" : [`);
      const {
        statusCode
      } = await makeRequest('/some-service/sty-secondary-column.json');
      expect(statusCode).toEqual(500);
    });
    afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "STY%20secondary%20column%20json" },`);
      await SRTlib.endLogger();
    });
  });
  describe('Recommendations json', () => {
    beforeAll(() => {
      SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "Recommendations%20json", "fileName": "/index.test.jsx", "calls" : [`);
    });
    // This is being skipped due to variants not needing recommendations
    it.skip('should serve a file for valid service paths with variants', async () => {
      const {
        body
      } = await makeRequest('/zhongwen/uk-23283128/recommendations/trad.json');
      expect(body).toEqual(expect.arrayContaining([expect.objectContaining({
        headlines: expect.any(Object)
      })]));
    });
    it('should serve a file for valid service paths without variants', async () => {
      SRTlib.send(`{ "testName": "should%20serve%20a%20file%20for%20valid%20service%20paths%20without%20variants", "fileName": "/index.test.jsx", "calls" : [`);
      const {
        body
      } = await makeRequest('/mundo/23263889/recommendations.json');
      expect(body).toEqual(expect.arrayContaining([expect.objectContaining({
        headlines: expect.any(Object)
      })]));
    });
    it('should respond with a 500 for non-existing services', async () => {
      SRTlib.send(`{ "testName": "should%20respond%20with%20a%20500%20for%20non-existing%20services", "fileName": "/index.test.jsx", "calls" : [`);
      const {
        statusCode
      } = await makeRequest('/some-service/recommendations.json');
      expect(statusCode).toEqual(500);
    });
    afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "Recommendations%20json" },`);
      await SRTlib.endLogger();
    });
  });
  describe('IDX json', () => {
    beforeAll(() => {
      SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "IDX%20json", "fileName": "/index.test.jsx", "calls" : [`);
    });
    it('should serve a file for valid idx paths', async () => {
      SRTlib.send(`{ "testName": "should%20serve%20a%20file%20for%20valid%20idx%20paths", "fileName": "/index.test.jsx", "calls" : [`);
      const {
        body
      } = await makeRequest('/persian/afghanistan.json');
      expect(body).toEqual(expect.objectContaining({
        content: expect.any(Object)
      }));
    });
    it('should respond with a 500 for non-existing services', async () => {
      SRTlib.send(`{ "testName": "should%20respond%20with%20a%20500%20for%20non-existing%20services", "fileName": "/index.test.jsx", "calls" : [`);
      const {
        statusCode
      } = await makeRequest('/some-service/ukraine_in_russian.json');
      expect(statusCode).toEqual(500);
    });
    afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "IDX%20json" },`);
      await SRTlib.endLogger();
    });
  });
  describe('Data', () => {
    beforeAll(() => {
      SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "Data", "fileName": "/index.test.jsx", "calls" : [`);
    });
    describe('for articles', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "for%20articles", "fileName": "/index.test.jsx", "calls" : [`);
      });
      it('should respond with JSON', async () => {
        SRTlib.send(`{ "testName": "should%20respond%20with%20JSON", "fileName": "/index.test.jsx", "calls" : [`);
        const {
          body
        } = await makeRequest('/news/articles/c0g992jmmkko.json');
        expect(body).toEqual(expect.objectContaining({
          content: expect.any(Object)
        }));
      });
      describe('with non-existent data', () => {
        beforeAll(() => {
          SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
          SRTlib.send(`{ "testSuiteName": "with%20non-existent%20data", "fileName": "/index.test.jsx", "calls" : [`);
        });
        it('should respond with a 404', async () => {
          SRTlib.send(`{ "testName": "should%20respond%20with%20a%20404", "fileName": "/index.test.jsx", "calls" : [`);
          const {
            statusCode
          } = await makeRequest('/news/articles/cERROR00025o.json');
          expect(statusCode).toEqual(404);
        });
        afterAll(async () => {
          SRTlib.send(`], "endTestSuiteName": "with%20non-existent%20data" },`);
          await SRTlib.endLogger();
        });
      });
      describe('Trailing slash redirects', () => {
        beforeAll(() => {
          SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
          SRTlib.send(`{ "testSuiteName": "Trailing%20slash%20redirects", "fileName": "/index.test.jsx", "calls" : [`);
        });
        it('should respond with a 301', async () => {
          SRTlib.send(`{ "testName": "should%20respond%20with%20a%20301", "fileName": "/index.test.jsx", "calls" : [`);
          const {
            statusCode
          } = await makeRequest('/news/articles/c6v11qzyv8po/');
          expect(statusCode).toEqual(301);
        });
        afterAll(async () => {
          SRTlib.send(`], "endTestSuiteName": "Trailing%20slash%20redirects" },`);
          await SRTlib.endLogger();
        });
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "for%20articles" },`);
        await SRTlib.endLogger();
      });
    });
    describe('for front pages', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "for%20front%20pages", "fileName": "/index.test.jsx", "calls" : [`);
      });
      it('should respond with JSON', async () => {
        SRTlib.send(`{ "testName": "should%20respond%20with%20JSON", "fileName": "/index.test.jsx", "calls" : [`);
        const {
          body
        } = await makeRequest('/persian.json');
        expect(body).toEqual(expect.objectContaining({
          content: expect.any(Object)
        }));
      });
      describe('with non-existent data', () => {
        beforeAll(() => {
          SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
          SRTlib.send(`{ "testSuiteName": "with%20non-existent%20data", "fileName": "/index.test.jsx", "calls" : [`);
        });
        beforeEach(() => {
          SRTlib.send(`{ "testName": "beforeEach", "fileName": "/index.test.jsx", "calls" : [`);
          const notFoundDataResponse = {
            isAmp: false,
            data: {
              some: 'data'
            },
            service: 'someService',
            status: 404
          };
          mockRouteProps({
            service: 'someService',
            isAmp: false,
            dataResponse: notFoundDataResponse
          });
          SRTlib.send(`], "endTestName": "beforeEach" },`);
        });
        it('should respond with a 404', async () => {
          SRTlib.send(`{ "testName": "should%20respond%20with%20a%20404", "fileName": "/index.test.jsx", "calls" : [`);
          const {
            statusCode
          } = await makeRequest('/ERROR.json');
          expect(statusCode).toEqual(404);
        });
        afterAll(async () => {
          SRTlib.send(`], "endTestSuiteName": "with%20non-existent%20data" },`);
          await SRTlib.endLogger();
        });
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "for%20front%20pages" },`);
        await SRTlib.endLogger();
      });
    });
    describe('for radio page - live radio', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "for%20radio%20page%20-%20live%20radio", "fileName": "/index.test.jsx", "calls" : [`);
      });
      it('should respond with JSON', async () => {
        SRTlib.send(`{ "testName": "should%20respond%20with%20JSON", "fileName": "/index.test.jsx", "calls" : [`);
        const {
          body
        } = await makeRequest('/korean/bbc_korean_radio/liveradio.json');
        expect(body).toEqual(expect.objectContaining({
          content: expect.any(Object)
        }));
      });
      describe('with non-existent data', () => {
        beforeAll(() => {
          SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
          SRTlib.send(`{ "testSuiteName": "with%20non-existent%20data", "fileName": "/index.test.jsx", "calls" : [`);
        });
        it('should respond with a 404', async () => {
          SRTlib.send(`{ "testName": "should%20respond%20with%20a%20404", "fileName": "/index.test.jsx", "calls" : [`);
          const {
            statusCode
          } = await makeRequest('/korean/bbc_korean_radio/ERROR.json');
          expect(statusCode).toEqual(404);
        });
        afterAll(async () => {
          SRTlib.send(`], "endTestSuiteName": "with%20non-existent%20data" },`);
          await SRTlib.endLogger();
        });
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "for%20radio%20page%20-%20live%20radio" },`);
        await SRTlib.endLogger();
      });
    });
    describe('for radio schedules', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "for%20radio%20schedules", "fileName": "/index.test.jsx", "calls" : [`);
      });
      it('should respond with JSON for service with radio schedule', async () => {
        SRTlib.send(`{ "testName": "should%20respond%20with%20JSON%20for%20service%20with%20radio%20schedule", "fileName": "/index.test.jsx", "calls" : [`);
        const {
          body
        } = await makeRequest('/arabic/bbc_arabic_radio/schedule.json');
        expect(body).toEqual(expect.objectContaining({
          schedules: expect.any(Object)
        }));
      });
      it('should respond with 404 for service without radio schedule', async () => {
        SRTlib.send(`{ "testName": "should%20respond%20with%20404%20for%20service%20without%20radio%20schedule", "fileName": "/index.test.jsx", "calls" : [`);
        const {
          statusCode
        } = await makeRequest('/pidgin/bbc_pidgin_radio/schedule.json');
        expect(statusCode).toEqual(404);
      });
      it('should respond with 404 for invalid service paths', async () => {
        SRTlib.send(`{ "testName": "should%20respond%20with%20404%20for%20invalid%20service%20paths", "fileName": "/index.test.jsx", "calls" : [`);
        const {
          statusCode
        } = await makeRequest('/arabic/bbc_pidgin_radio/schedule.json');
        expect(statusCode).toEqual(404);
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "for%20radio%20schedules" },`);
        await SRTlib.endLogger();
      });
    });
    describe('for tv brand page', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "for%20tv%20brand%20page", "fileName": "/index.test.jsx", "calls" : [`);
      });
      it('should respond with JSON', async () => {
        SRTlib.send(`{ "testName": "should%20respond%20with%20JSON", "fileName": "/index.test.jsx", "calls" : [`);
        const {
          body
        } = await makeRequest('/pashto/bbc_pashto_tv/tv_programmes/w13xttn4.json');
        expect(body).toEqual(expect.objectContaining({
          content: expect.any(Object)
        }));
      });
      describe('with non-existent data', () => {
        beforeAll(() => {
          SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
          SRTlib.send(`{ "testSuiteName": "with%20non-existent%20data", "fileName": "/index.test.jsx", "calls" : [`);
        });
        it('should respond with a 404', async () => {
          SRTlib.send(`{ "testName": "should%20respond%20with%20a%20404", "fileName": "/index.test.jsx", "calls" : [`);
          const {
            statusCode
          } = await makeRequest('/pashto/bbc_pashto_radio/ERROR.json');
          expect(statusCode).toEqual(404);
        });
        afterAll(async () => {
          SRTlib.send(`], "endTestSuiteName": "with%20non-existent%20data" },`);
          await SRTlib.endLogger();
        });
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "for%20tv%20brand%20page" },`);
        await SRTlib.endLogger();
      });
    });
    describe('for cps asset pages', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "for%20cps%20asset%20pages", "fileName": "/index.test.jsx", "calls" : [`);
      });
      it('should respond with JSON', async () => {
        SRTlib.send(`{ "testName": "should%20respond%20with%20JSON", "fileName": "/index.test.jsx", "calls" : [`);
        const {
          body
        } = await makeRequest('/pidgin/tori-49450859.json');
        expect(body).toEqual(expect.objectContaining({
          content: expect.any(Object)
        }));
      });
      describe('with non-existent data', () => {
        beforeAll(() => {
          SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
          SRTlib.send(`{ "testSuiteName": "with%20non-existent%20data", "fileName": "/index.test.jsx", "calls" : [`);
        });
        it('should respond with a 404', async () => {
          SRTlib.send(`{ "testName": "should%20respond%20with%20a%20404", "fileName": "/index.test.jsx", "calls" : [`);
          const {
            statusCode
          } = await makeRequest('/pidgin/tori-00000000.json');
          expect(statusCode).toEqual(404);
        });
        afterAll(async () => {
          SRTlib.send(`], "endTestSuiteName": "with%20non-existent%20data" },`);
          await SRTlib.endLogger();
        });
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "for%20cps%20asset%20pages" },`);
        await SRTlib.endLogger();
      });
    });
    describe('for legacy asset pages', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "for%20legacy%20asset%20pages", "fileName": "/index.test.jsx", "calls" : [`);
      });
      it('should respond with JSON', async () => {
        SRTlib.send(`{ "testName": "should%20respond%20with%20JSON", "fileName": "/index.test.jsx", "calls" : [`);
        const {
          body
        } = await makeRequest('/hausa/multimedia/2012/07/120712_click.json');
        expect(body).toEqual(expect.objectContaining({
          content: expect.any(Object)
        }));
      });
      describe('with non-existent data', () => {
        beforeAll(() => {
          SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
          SRTlib.send(`{ "testSuiteName": "with%20non-existent%20data", "fileName": "/index.test.jsx", "calls" : [`);
        });
        it('should respond with a 404', async () => {
          SRTlib.send(`{ "testName": "should%20respond%20with%20a%20404", "fileName": "/index.test.jsx", "calls" : [`);
          const {
            statusCode
          } = await makeRequest('/hausa/multimedia/2012/07/120712_non-existent.json');
          expect(statusCode).toEqual(404);
        });
        afterAll(async () => {
          SRTlib.send(`], "endTestSuiteName": "with%20non-existent%20data" },`);
          await SRTlib.endLogger();
        });
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "for%20legacy%20asset%20pages" },`);
        await SRTlib.endLogger();
      });
    });
    afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "Data" },`);
      await SRTlib.endLogger();
    });
  });
  testFrontPages({
    platform: 'canonical',
    service: 'igbo'
  });
  testFrontPages({
    platform: 'canonical',
    service: 'igbo',
    queryString: QUERY_STRING
  });
  testFrontPages({
    platform: 'amp',
    service: 'igbo'
  });
  testFrontPages({
    platform: 'amp',
    service: 'igbo',
    queryString: QUERY_STRING
  });
  testFrontPages({
    platform: 'canonical',
    service: 'ukchina',
    variant: 'simp'
  });
  testFrontPages({
    platform: 'canonical',
    service: 'ukchina',
    variant: 'simp',
    queryString: QUERY_STRING
  });
  testFrontPages({
    platform: 'amp',
    service: 'serbian',
    variant: 'lat'
  });
  testFrontPages({
    platform: 'amp',
    service: 'serbian',
    variant: 'lat',
    queryString: QUERY_STRING
  });
  testArticles({
    platform: 'amp',
    service: 'news'
  });
  testArticles({
    platform: 'amp',
    service: 'news',
    queryString: QUERY_STRING
  });
  testArticles({
    platform: 'canonical',
    service: 'news'
  });
  testArticles({
    platform: 'canonical',
    service: 'news',
    queryString: QUERY_STRING
  });
  testArticles({
    platform: 'amp',
    service: 'zhongwen',
    variant: 'trad'
  });
  testArticles({
    platform: 'amp',
    service: 'zhongwen',
    variant: 'trad',
    queryString: QUERY_STRING
  });
  testArticles({
    platform: 'canonical',
    service: 'zhongwen',
    variant: 'simp'
  });
  testArticles({
    platform: 'canonical',
    service: 'zhongwen',
    variant: 'simp',
    queryString: QUERY_STRING
  });
  testMediaPages({
    platform: 'amp',
    service: 'korean',
    serviceId: 'bbc_korean_radio',
    mediaId: 'liveradio'
  });
  testMediaPages({
    platform: 'amp',
    service: 'korean',
    serviceId: 'bbc_korean_radio',
    mediaId: 'liveradio',
    queryString: QUERY_STRING
  });
  testMediaPages({
    platform: 'canonical',
    service: 'korean',
    serviceId: 'bbc_korean_radio',
    mediaId: 'liveradio'
  });
  testMediaPages({
    platform: 'canonical',
    service: 'korean',
    serviceId: 'bbc_korean_radio',
    mediaId: 'liveradio',
    queryString: QUERY_STRING
  });
  testTvPages({
    platform: 'amp',
    service: 'pashto',
    serviceId: 'bbc_pashto_tv',
    brandEpisode: 'tv_programmes',
    mediaId: 'p0340yr4'
  });
  testTvPages({
    platform: 'amp',
    service: 'pashto',
    serviceId: 'bbc_pashto_tv',
    brandEpisode: 'tv_programmes',
    mediaId: 'p0340yr4',
    queryString: QUERY_STRING
  });
  testTvPages({
    platform: 'canonical',
    service: 'pashto',
    serviceId: 'bbc_pashto_tv',
    brandEpisode: 'tv_programmes',
    mediaId: 'p0340yr4'
  });
  testTvPages({
    platform: 'canonical',
    service: 'pashto',
    serviceId: 'bbc_pashto_tv',
    brandEpisode: 'tv_programmes',
    mediaId: 'p0340yr4',
    queryString: QUERY_STRING
  });
  testOnDemandTvEpisodePages({
    platform: 'amp',
    service: 'pashto',
    serviceId: 'bbc_pashto_tv',
    brandEpisode: 'tv',
    mediaId: 'w172xcldhhrhmcf'
  });
  testOnDemandTvEpisodePages({
    platform: 'canonical',
    service: 'pashto',
    serviceId: 'bbc_pashto_tv',
    mediaId: 'w172xcldhhrhmcf'
  });
  testAssetPages({
    platform: 'amp',
    service: 'pidgin',
    assetUri: 'tori-49450859'
  });
  testAssetPages({
    platform: 'amp',
    service: 'pidgin',
    assetUri: 'tori-49450859',
    queryString: QUERY_STRING
  });
  testAssetPages({
    platform: 'canonical',
    service: 'pidgin',
    assetUri: 'tori-49450859'
  });
  testAssetPages({
    platform: 'canonical',
    service: 'pidgin',
    assetUri: 'tori-49450859',
    queryString: QUERY_STRING
  });
  testAssetPages({
    platform: 'amp',
    service: 'serbian',
    assetUri: 'srbija-49427344',
    variant: 'cyr'
  });
  testAssetPages({
    platform: 'canonical',
    service: 'serbian',
    assetUri: 'srbija-49427344',
    variant: 'cyr',
    queryString: QUERY_STRING
  }); // Legacy asset pages

  testAssetPages({
    platform: 'amp',
    service: 'hausa',
    assetUri: 'multimedia/2012/07/120712_click'
  });
  testAssetPages({
    platform: 'amp',
    service: 'hausa',
    assetUri: 'multimedia/2012/07/120712_click',
    queryString: QUERY_STRING
  });
  testAssetPages({
    platform: 'canonical',
    service: 'hausa',
    assetUri: 'multimedia/2012/07/120712_click'
  });
  testAssetPages({
    platform: 'canonical',
    service: 'hausa',
    assetUri: 'multimedia/2012/07/120712_click',
    queryString: QUERY_STRING
  });
  describe('Unknown routes', () => {
    beforeAll(() => {
      SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "Unknown%20routes", "fileName": "/index.test.jsx", "calls" : [`);
    });
    const service = 'igbo';
    const isAmp = false;
    const dataResponse = {
      isAmp,
      data: {
        some: 'data'
      },
      service: 'news',
      status: 404
    };
    describe('404 status code', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "404%20status%20code", "fileName": "/index.test.jsx", "calls" : [`);
      });
      beforeEach(() => {
        SRTlib.send(`{ "testName": "beforeEach", "fileName": "/index.test.jsx", "calls" : [`);
        mockRouteProps({
          service,
          isAmp,
          dataResponse
        });
        SRTlib.send(`], "endTestName": "beforeEach" },`);
      });
      it('should respond with rendered data', async () => {
        SRTlib.send(`{ "testName": "should%20respond%20with%20rendered%20data", "fileName": "/index.test.jsx", "calls" : [`);
        const {
          text,
          status
        } = await makeRequest(`/${service}/foobar`);
        expect(status).toBe(404);
        expect(reactDomServer.renderToString).toHaveBeenCalledWith(<h1>Mock app</h1>);
        expect(reactDomServer.renderToStaticMarkup).toHaveBeenCalledWith(<Document app="<h1>Mock app</h1>" assetOrigins={['https://cookie-oven.api.bbc.co.uk', 'https://ichef.bbci.co.uk', localBaseUrl, 'https://logws1363.ati-host.net?']} data={dataResponse} helmet={{
          head: 'tags'
        }} isAmp={isAmp} service={service} scripts="__mock_script_elements__" styleTags={<style />} />);
        expect(text).toEqual('<!doctype html><html><body><h1>Mock app</h1></body></html>');
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "404%20status%20code" },`);
        await SRTlib.endLogger();
      });
    });
    afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "Unknown%20routes" },`);
      await SRTlib.endLogger();
    });
  });
  afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });
  afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "Server" },`);
    await SRTlib.endLogger();
  });
});
describe('Server HTTP Headers', () => {
  let statusRequest;
  beforeAll(async () => {
    SRTlib.startLogger('/home/centos/nodeSRT/instrument/test/codeTest2', 'http://localhost:8888/instrument-message');
    SRTlib.send(`{ "testSuiteName": "Server%20HTTP%20Headers", "fileName": "/index.test.jsx", "calls" : [`);
    statusRequest = await request(server).get('/status');
  });
  it(`should not contain 'x-powered-by'`, () => {
    SRTlib.send(`{ "testName": "should%20not%20contain%20%27x-powered-by%27", "fileName": "/index.test.jsx", "calls" : [`);
    const headerKeys = Object.keys(statusRequest.headers);
    expect(headerKeys).not.toContain('x-powered-by');
  });
  it(`should have 'x-frame-options' set to 'DENY'`, () => {
    SRTlib.send(`{ "testName": "should%20have%20%27x-frame-options%27%20set%20to%20%27DENY%27", "fileName": "/index.test.jsx", "calls" : [`);
    validateHttpHeader(statusRequest.headers, 'x-frame-options', 'DENY');
  });
  it(`should have X-DNS-Prefetch-Control set to 'off' `, () => {
    SRTlib.send(`{ "testName": "should%20have%20X-DNS-Prefetch-Control%20set%20to%20%27off%27%20", "fileName": "/index.test.jsx", "calls" : [`);
    validateHttpHeader(statusRequest.headers, 'x-dns-prefetch-control', 'off');
  });
  it(`should have Strict-Transport-Security set to 'max-age=15552000; includeSubDomains' `, () => {
    SRTlib.send(`{ "testName": "should%20have%20Strict-Transport-Security%20set%20to%20%27max-age%3D15552000%3B%20includeSubDomains%27%20", "fileName": "/index.test.jsx", "calls" : [`);
    validateHttpHeader(statusRequest.headers, 'strict-transport-security', 'max-age=15552000; includeSubDomains');
  });
  it(`should have X-Download-Options set to 'noopen' `, () => {
    SRTlib.send(`{ "testName": "should%20have%20X-Download-Options%20set%20to%20%27noopen%27%20", "fileName": "/index.test.jsx", "calls" : [`);
    validateHttpHeader(statusRequest.headers, 'x-download-options', 'noopen');
  });
  it(`should have X-Content-Type-Options set to 'nosniff' `, () => {
    SRTlib.send(`{ "testName": "should%20have%20X-Content-Type-Options%20set%20to%20%27nosniff%27%20", "fileName": "/index.test.jsx", "calls" : [`);
    validateHttpHeader(statusRequest.headers, 'x-content-type-options', 'nosniff');
  });
  it(`should have X-XSS-Protection set to '1; mode=block' `, () => {
    SRTlib.send(`{ "testName": "should%20have%20X-XSS-Protection%20set%20to%20%271%3B%20mode%3Dblock%27%20", "fileName": "/index.test.jsx", "calls" : [`);
    validateHttpHeader(statusRequest.headers, 'x-xss-protection', '1; mode=block');
  });
  describe("should set 'x-clacks-overhead' header", () => {
    beforeAll(() => {
      SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "should%20set%20%27x-clacks-overhead%27%20header", "fileName": "/index.test.jsx", "calls" : [`);
    });
    it('should send the message on', async () => {
      SRTlib.send(`{ "testName": "should%20send%20the%20message%20on", "fileName": "/index.test.jsx", "calls" : [`);
      validateHttpHeader(statusRequest.headers, 'x-clacks-overhead', 'GNU Terry Pratchett');
    });
    it('should not log the message', async () => {
      SRTlib.send(`{ "testName": "should%20not%20log%20the%20message", "fileName": "/index.test.jsx", "calls" : [`);
      global.console.log = jest.fn();
      await makeRequest('/status');
      expect(global.console.log).not.toHaveBeenCalledWith('GNU Terry Pratchett');
    });
    afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "should%20set%20%27x-clacks-overhead%27%20header" },`);
      await SRTlib.endLogger();
    });
  });
  afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });
  afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "Server%20HTTP%20Headers" },`);
    await SRTlib.endLogger();
  });
});
describe('Routing Information Logging', () => {
  beforeAll(() => {
    SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "Routing%20Information%20Logging", "fileName": "/index.test.jsx", "calls" : [`);
  });
  const service = 'igbo';
  const isAmp = false;
  const url = `/${service}`;
  const dataResponse = {
    isAmp,
    pageData: {
      metadata: {
        type: 'Page Type from Data'
      }
    },
    service,
    status: 200
  };
  it(`on non-200 response should log matched page type from route`, async () => {
    SRTlib.send(`{ "testName": "on%20non-200%20response%20should%20log%20matched%20page%20type%20from%20route", "fileName": "/index.test.jsx", "calls" : [`);
    const pageType = 'Matching Page Type from Route';
    const status = 404;
    mockRouteProps({
      service,
      isAmp,
      dataResponse: { ...dataResponse,
        status
      },
      pageType
    });
    await makeRequest(url);
    expect(loggerMock.info).toHaveBeenCalledWith(ROUTING_INFORMATION, {
      url,
      status,
      pageType
    });
  });
  it(`on 200 response should log page type derived from response data`, async () => {
    SRTlib.send(`{ "testName": "on%20200%20response%20should%20log%20page%20type%20derived%20from%20response%20data", "fileName": "/index.test.jsx", "calls" : [`);
    mockRouteProps({
      service,
      isAmp,
      dataResponse
    });
    await makeRequest(url);
    expect(loggerMock.info).toHaveBeenCalledWith(ROUTING_INFORMATION, {
      url,
      status: 200,
      pageType: 'Page Type from Data'
    });
  });
  afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });
  afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "Routing%20Information%20Logging" },`);
    await SRTlib.endLogger();
  });
});