var SRTlib = require('SRT-util');

module.exports = function getFilesAndDirectoriesFromDirectory(directoryReader, oldEntries, logDropError, _ref) {
  var onSuccess = _ref.onSuccess;
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"/packages/@uppy/utils/src/getDroppedFiles/utils/webkitGetAsEntryApi/getFilesAndDirectoriesFromDirectory.js\",\"paramsNumber\":4},");
  directoryReader.readEntries(function (entries) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.getFilesAndDirectoriesFromDirectory.directoryReader.readEntries\",\"fileName\":\"/packages/@uppy/utils/src/getDroppedFiles/utils/webkitGetAsEntryApi/getFilesAndDirectoriesFromDirectory.js\",\"paramsNumber\":1},");
    var newEntries = [].concat(oldEntries, entries);

    if (entries.length) {
      setTimeout(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"setTimeout\",\"fileName\":\"/packages/@uppy/utils/src/getDroppedFiles/utils/webkitGetAsEntryApi/getFilesAndDirectoriesFromDirectory.js\",\"paramsNumber\":0},");
        getFilesAndDirectoriesFromDirectory(directoryReader, newEntries, logDropError, {
          onSuccess: onSuccess
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"setTimeout"},');
      }, 0);
    } else {
      onSuccess(newEntries);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFilesAndDirectoriesFromDirectory.directoryReader.readEntries"},');
  }, function (error) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.getFilesAndDirectoriesFromDirectory.directoryReader.readEntries###2\",\"fileName\":\"/packages/@uppy/utils/src/getDroppedFiles/utils/webkitGetAsEntryApi/getFilesAndDirectoriesFromDirectory.js\",\"paramsNumber\":1},");
    logDropError(error);
    onSuccess(oldEntries);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFilesAndDirectoriesFromDirectory.directoryReader.readEntries###2"},');
  });
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};