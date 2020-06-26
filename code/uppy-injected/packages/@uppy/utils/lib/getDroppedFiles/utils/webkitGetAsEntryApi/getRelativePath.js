/**
* Get the relative path from the FileEntry#fullPath, because File#webkitRelativePath is always '', at least onDrop.
*
* @param {FileEntry} fileEntry
*
* @returns {string|null} - if file is not in a folder - return null (this is to be consistent with .relativePath-s of files selected from My Device). If file is in a folder - return its fullPath, e.g. '/simpsons/hi.jpeg'.
*/
var SRTlib = require('SRT-util');

module.exports = function getRelativePath(fileEntry) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.getRelativePath\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},"); // fileEntry.fullPath - "/simpsons/hi.jpeg" or undefined (for browsers that don't support it)
  // fileEntry.name - "hi.jpeg"

  if (!fileEntry.fullPath || fileEntry.fullPath === '/' + fileEntry.name) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getRelativePath"},');
    return null;
  } else {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getRelativePath"},');
    return fileEntry.fullPath;
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getRelativePath"},');
};