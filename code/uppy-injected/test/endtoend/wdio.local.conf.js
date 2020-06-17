var SRTlib = require('SRT-util');
const base = require('./wdio.base.conf');
const args = require('minimist')(process.argv.slice(2));
const capabilities = [];
if (args.b) {
  if (!Array.isArray(args.b)) args.b = [args.b];
  args.b.forEach(browserName => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    capabilities.push({
      browserName
    });
        SRTlib.send("]},");

  });
}
if (capabilities.length === 0) {
  capabilities.push({
    browserName: 'firefox'
  });
}
const testingInternetExplorer = capabilities.find(capability => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  capability.browserName === 'internet explorer';
    SRTlib.send("]},");

}) !== null;
exports.config = {
  ...base.config,
  capabilities,
  bail: 0,
  maxInstances: testingInternetExplorer ? 1 : 5,
  baseUrl: 'http://localhost',
  mochaOpts: {
    ui: 'bdd',
    reporter: 'dot',
    timeout: 120000
  }
};
