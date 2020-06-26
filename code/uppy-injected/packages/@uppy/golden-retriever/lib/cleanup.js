var SRTlib = require('SRT-util');

var IndexedDBStore = require('./IndexedDBStore');

var MetaDataStore = require('./MetaDataStore');
/**
* Clean old blobs without needing to import all of Uppy.
*/


module.exports = function cleanup() {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.cleanup\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
  MetaDataStore.cleanup();
  IndexedDBStore.cleanup();
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.cleanup"},');
};