/**
* Recursive function, calls the original callback() when the directory is entirely parsed.
*
* @param {FileSystemDirectoryReader} directoryReader
* @param {Array} oldEntries
* @param {Function} logDropError
* @param {Function} callback - called with ([ all files and directories in that directoryReader ])
*/
var SRTlib = require('SRT-util');

module.exports = function getFilesAndDirectoriesFromDirectory(directoryReader, oldEntries, logDropError, _ref) {
  var onSuccess = _ref.onSuccess;
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":4},");
  directoryReader.readEntries(function (entries) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.getFilesAndDirectoriesFromDirectory.directoryReader.readEntries\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
    var newEntries = [].concat(oldEntries, entries); // According to the FileSystem API spec, getFilesAndDirectoriesFromDirectory() must be called until it calls the onSuccess with an empty array.

    if (entries.length) {
      setTimeout(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"setTimeout\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        getFilesAndDirectoriesFromDirectory(directoryReader, newEntries, logDropError, {
          onSuccess: onSuccess
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"setTimeout"},');
      }, 0); // Done iterating this particular directory
    } else {
      onSuccess(newEntries);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFilesAndDirectoriesFromDirectory.directoryReader.readEntries"},');
  }, function (error) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.getFilesAndDirectoriesFromDirectory.directoryReader.readEntries2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},"); // Make sure we resolve on error anyway, it's fine if only one directory couldn't be parsed!

    logDropError(error);
    onSuccess(oldEntries);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFilesAndDirectoriesFromDirectory.directoryReader.readEntries2"},');
  });
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};