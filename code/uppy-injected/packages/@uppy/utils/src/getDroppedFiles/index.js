const SRTlib = require('SRT-util');
const webkitGetAsEntryApi = require('./utils/webkitGetAsEntryApi/index');
const fallbackApi = require('./utils/fallbackApi');
/**
* Returns a promise that resolves to the array of dropped files (if a folder is dropped, and browser supports folder parsing - promise resolves to the flat array of all files in all directories).
* Each file has .relativePath prop appended to it (e.g. "/docs/Prague/ticket_from_prague_to_ufa.pdf") if browser supports it. Otherwise it's undefined.
*
* @param {DataTransfer} dataTransfer
* @param {Function} logDropError - a function that's called every time some folder or some file error out (e.g. because of the folder name being too long on Windows). Notice that resulting promise will always be resolved anyway.
*
* @returns {Promise} - Array<File>
*/
module.exports = function getDroppedFiles(dataTransfer, {logDropError = () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

}} = {}) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getDroppedFiles","fileName":"${__filename}","paramsNumber":2},`);

  // Get all files from all subdirs. Works (at least) in Chrome, Mozilla, and Safari
  if (dataTransfer.items && dataTransfer.items[0] && ('webkitGetAsEntry' in dataTransfer.items[0])) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getDroppedFiles"},');

    return webkitGetAsEntryApi(dataTransfer, logDropError);
      // Otherwise just return all first-order files
} else {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getDroppedFiles"},');

    return fallbackApi(dataTransfer);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getDroppedFiles"},');

};
