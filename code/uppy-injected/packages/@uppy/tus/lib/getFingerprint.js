var SRTlib = require('SRT-util');

var tus = require('tus-js-client');

function isCordova() {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"isCordova\",\"fileName\":\"/packages/@uppy/tus/src/getFingerprint.js\",\"paramsNumber\":0},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"isCordova"},');
  return typeof window !== 'undefined' && (typeof window.PhoneGap !== 'undefined' || typeof window.Cordova !== 'undefined' || typeof window.cordova !== 'undefined');
  SRTlib.send('{"type":"FUNCTIONEND","function":"isCordova","paramsNumber":0},');
}

function isReactNative() {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"isReactNative\",\"fileName\":\"/packages/@uppy/tus/src/getFingerprint.js\",\"paramsNumber\":0},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"isReactNative"},');
  return typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative';
  SRTlib.send('{"type":"FUNCTIONEND","function":"isReactNative","paramsNumber":0},');
}

module.exports = function getFingerprint(uppyFileObj) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"/packages/@uppy/tus/src/getFingerprint.js\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return function (file, options) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.getFingerprint.ReturnStatement\",\"fileName\":\"/packages/@uppy/tus/src/getFingerprint.js\",\"paramsNumber\":2},");

    if (isCordova() || isReactNative()) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFingerprint.ReturnStatement"},');
      return tus.Upload.defaultOptions.fingerprint(file, options);
    }

    var uppyFingerprint = ['tus', uppyFileObj.id, options.endpoint].join('-');
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFingerprint.ReturnStatement"},');
    return Promise.resolve(uppyFingerprint);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFingerprint.ReturnStatement"},');
  };
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};