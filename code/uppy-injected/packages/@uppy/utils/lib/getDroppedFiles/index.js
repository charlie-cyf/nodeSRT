var SRTlib = require('SRT-util');

var webkitGetAsEntryApi = require('./utils/webkitGetAsEntryApi/index');

var fallbackApi = require('./utils/fallbackApi');
/**
* Returns a promise that resolves to the array of dropped files (if a folder is dropped, and browser supports folder parsing - promise resolves to the flat array of all files in all directories).
* Each file has .relativePath prop appended to it (e.g. "/docs/Prague/ticket_from_prague_to_ufa.pdf") if browser supports it. Otherwise it's undefined.
*
* @param {DataTransfer} dataTransfer
* @param {Function} logDropError - a function that's called every time some folder or some file error out (e.g. because of the folder name being too long on Windows). Notice that resulting promise will always be resolved anyway.
*
* @returns {Promise} - Array<File>
*/


module.exports = function getDroppedFiles(dataTransfer, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$logDropError = _ref.logDropError,
      logDropError = _ref$logDropError === void 0 ? function () {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.getDroppedFiles\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getDroppedFiles"},');
  } : _ref$logDropError;

  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},"); // Get all files from all subdirs. Works (at least) in Chrome, Mozilla, and Safari

  if (dataTransfer.items && dataTransfer.items[0] && 'webkitGetAsEntry' in dataTransfer.items[0]) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    return webkitGetAsEntryApi(dataTransfer, logDropError); // Otherwise just return all first-order files
  } else {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    return fallbackApi(dataTransfer);
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};