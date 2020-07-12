const SRTlib = require('SRT-util');

const base = require('./wdio.base.conf');
function createCapability(capability) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createCapability","fileName":"/test/endtoend/wdio.remote.conf.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"createCapability"},');

  return {
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    build: process.env.TRAVIS_BUILD_NUMBER,
    extendedDebugging: true,
    ...capability
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"createCapability","paramsNumber":1},');

}
exports.config = {
  ...base.config,
  logLevel: 'warn',
  capabilities: [{
    browserName: 'firefox',
    version: '52.0',
    platform: 'Windows 7'
  }, {
    browserName: 'firefox',
    version: '62.0',
    platform: 'Windows 10'
  }, {
    browserName: 'internet explorer',
    version: '10.0',
    platform: 'Windows 8'
  }, {
    browserName: 'internet explorer',
    version: '11.0',
    platform: 'Windows 10'
  }, {
    browserName: 'chrome',
    version: '70.0',
    platform: 'Windows 10'
  }, {
    browserName: 'MicrosoftEdge',
    version: '14',
    platform: 'Windows 10'
  }, {
    browserName: 'MicrosoftEdge',
    version: '17',
    platform: 'Windows 10'
  }, {
    browserName: 'chrome',
    platformName: 'Android',
    platformVersion: '6.0',
    deviceOrientation: 'portrait',
    deviceName: 'Android Emulator'
  }].map(createCapability),
  exclude: ['test/endtoend/chaos-monkey/*', 'test/endtoend/url-plugin/*', 'test/endtoend/transloadit/*'],
  bail: 3,
  baseUrl: 'http://localhost',
  services: [...base.config.services, 'sauce'],
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY
};
