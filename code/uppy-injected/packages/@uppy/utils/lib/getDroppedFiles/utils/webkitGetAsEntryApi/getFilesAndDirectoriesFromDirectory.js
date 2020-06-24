var SRTlib = require('SRT-util');

module.exports = function getFilesAndDirectoriesFromDirectory(directoryReader, oldEntries, logDropError, _ref) {
  var onSuccess = _ref.onSuccess;
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.getFilesAndDirectoriesFromDirectory\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":4},");
  directoryReader.readEntries(function (entries) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
    var newEntries = [].concat(oldEntries, entries);

    if (entries.length) {
      setTimeout(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        getFilesAndDirectoriesFromDirectory(directoryReader, newEntries, logDropError, {
          onSuccess: onSuccess
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
      }, 0);
    } else {
      onSuccess(newEntries);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');
  }, function (error) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey3\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
    logDropError(error);
    onSuccess(oldEntries);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');
  });
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFilesAndDirectoriesFromDirectory"},');
};