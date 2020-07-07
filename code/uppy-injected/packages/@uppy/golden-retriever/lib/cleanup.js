const SRTlib = require('SRT-util');

var IndexedDBStore = require('./IndexedDBStore');
var MetaDataStore = require('./MetaDataStore');
module.exports = function cleanup() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":0},`);

  MetaDataStore.cleanup();
  IndexedDBStore.cleanup();
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
