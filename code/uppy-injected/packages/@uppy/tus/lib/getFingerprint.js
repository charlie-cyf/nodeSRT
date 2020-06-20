var SRTlib = require('SRT-util');
var tus = require('tus-js-client');
function isCordova() {
    SRTlib.send(`{ "anonymous": false, "function": "isCordova", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send("]},");

  return typeof window !== 'undefined' && (typeof window.PhoneGap !== 'undefined' || typeof window.Cordova !== 'undefined' || typeof window.cordova !== 'undefined');
    SRTlib.send("]},");

}
function isReactNative() {
    SRTlib.send(`{ "anonymous": false, "function": "isReactNative", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send("]},");

  return typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative';
    SRTlib.send("]},");

}
module.exports = function getFingerprint(uppyFileObj) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.getFingerprint", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return function (file, options, callback) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports.getFingerprint.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    if (isCordova() || isReactNative()) {
            SRTlib.send("]},");

      return tus.Upload.defaultOptions.fingerprint(file, options, callback);
    }
    var uppyFingerprint = ['tus', uppyFileObj.id, options.endpoint].join('-');
        SRTlib.send("]},");

    return callback(null, uppyFingerprint);
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

};
