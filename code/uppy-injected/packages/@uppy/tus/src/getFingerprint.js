const SRTlib = require('SRT-util');
const tus = require('tus-js-client');
function isCordova() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isCordova","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"isCordova"},');

  return typeof window !== 'undefined' && (typeof window.PhoneGap !== 'undefined' || typeof window.Cordova !== 'undefined' || typeof window.cordova !== 'undefined');
    SRTlib.send('{"type":"FUNCTIONEND","function":"isCordova","paramsNumber":0},');

}
function isReactNative() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isReactNative","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"isReactNative"},');

  return typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative';
    SRTlib.send('{"type":"FUNCTIONEND","function":"isReactNative","paramsNumber":0},');

}
// We override tus fingerprint to uppy’s `file.id`, since the `file.id`
// now also includes `relativePath` for files added from folders.
// This means you can add 2 identical files, if one is in folder a,
// the other in folder b — `a/file.jpg` and `b/file.jpg`, when added
// together with a folder, will be treated as 2 separate files.
// 
// For React Native and Cordova, we let tus-js-client’s default
// fingerprint handling take charge.
module.exports = function getFingerprint(uppyFileObj) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getFingerprint","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFingerprint"},');

  return function (file, options, callback) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getFingerprint.ReturnStatement","fileName":"${__filename}","paramsNumber":3},`);

    if (isCordova() || isReactNative()) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFingerprint.ReturnStatement"},');

      return tus.Upload.defaultOptions.fingerprint(file, options, callback);
    }
    const uppyFingerprint = ['tus', uppyFileObj.id, options.endpoint].join('-');
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFingerprint.ReturnStatement"},');

    return callback(null, uppyFingerprint);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFingerprint.ReturnStatement"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFingerprint"},');

};
