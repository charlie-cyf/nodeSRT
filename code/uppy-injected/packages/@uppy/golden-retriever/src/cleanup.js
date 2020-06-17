var SRTlib = require('SRT-util');
const IndexedDBStore = require('./IndexedDBStore');
const MetaDataStore = require('./MetaDataStore');
module.exports = function cleanup() {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.cleanup", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  MetaDataStore.cleanup();
  IndexedDBStore.cleanup();
    SRTlib.send("]},");

};
