var SRTlib = require('SRT-util');
var tus = require('tus-js-client');
function isCordova() {
    SRTlib.send(`{ "anonymous": false, "function": "isCordova", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send('], "end": "isCordova"},');

  return typeof window !== 'undefined' && (typeof window.PhoneGap !== 'undefined' || typeof window.Cordova !== 'undefined' || typeof window.cordova !== 'undefined');
    SRTlib.send('], "end": "isCordova"},');

}
function isReactNative() {
    SRTlib.send(`{ "anonymous": false, "function": "isReactNative", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send('], "end": "isReactNative"},');

  return typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative';
    SRTlib.send('], "end": "isReactNative"},');

}
module.exports = function getFingerprint(uppyFileObj) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.getFingerprint", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "module.exports.getFingerprint"},');

  return function (file, options, callback) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports.getFingerprint.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    if (isCordova() || isReactNative()) {
            SRTlib.send('], "end": "module.exports.getFingerprint.ReturnStatement"},');

      return tus.Upload.defaultOptions.fingerprint(file, options, callback);
    }
    var uppyFingerprint = ['tus', uppyFileObj.id, options.endpoint].join('-');
        SRTlib.send('], "end": "module.exports.getFingerprint.ReturnStatement"},');

    return callback(null, uppyFingerprint);
        SRTlib.send('], "end": "module.exports.getFingerprint.ReturnStatement"},');

  };
    SRTlib.send('], "end": "module.exports.getFingerprint"},');

};
