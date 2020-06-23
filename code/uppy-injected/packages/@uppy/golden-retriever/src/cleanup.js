var SRTlib = require('SRT-util');
const IndexedDBStore = require('./IndexedDBStore');
const MetaDataStore = require('./MetaDataStore');
module.exports = function cleanup() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.cleanup","fileName":"${__filename}","paramsNumber":0},`);

  MetaDataStore.cleanup();
  IndexedDBStore.cleanup();
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.cleanup"},');

};
