var SRTlib = require('SRT-util');
const glob = require('glob').sync;
const path = require('path');
const {CompanionService, StaticServerService, TusService} = require('./utils');
const suites = {};
glob('test/endtoend/*/test.js').forEach(file => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const name = path.basename(path.dirname(file));
  suites[name] = [file];
    SRTlib.send('], "end": "emptyKey"},');

});
exports.config = {
  specs: ['test/endtoend/*/test.js'],
  exclude: [],
  suites,
  maxInstances: 5,
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: [[CompanionService], [StaticServerService, {
    folders: [{
      mount: '/chaos-monkey',
      path: './test/endtoend/chaos-monkey/dist'
    }, {
      mount: '/create-react-app',
      path: './test/endtoend/create-react-app/build'
    }, {
      mount: '/i18n-drag-drop',
      path: './test/endtoend/i18n-drag-drop/dist'
    }, {
      mount: '/providers',
      path: './test/endtoend/providers/dist'
    }, {
      mount: '/thumbnails',
      path: './test/endtoend/thumbnails/dist'
    }, {
      mount: '/transloadit',
      path: './test/endtoend/transloadit/dist'
    }, {
      mount: '/tus-drag-drop',
      path: './test/endtoend/tus-drag-drop/dist'
    }, {
      mount: '/typescript',
      path: './test/endtoend/typescript/dist'
    }, {
      mount: '/url-plugin',
      path: './test/endtoend/url-plugin/dist'
    }, {
      mount: '/xhr-limit',
      path: './test/endtoend/xhr-limit/dist'
    }]
  }], [TusService]],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    reporter: 'dot',
    timeout: 50000
  },
  before: function (capabilities, specs) {
        SRTlib.send(`{ "anonymous": true, "function": "exports.config.before", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var chai = require('chai');
    global.expect = chai.expect;
    global.capabilities = capabilities;
    chai.Should();
        SRTlib.send('], "end": "exports.config.before"},');

  }
};
