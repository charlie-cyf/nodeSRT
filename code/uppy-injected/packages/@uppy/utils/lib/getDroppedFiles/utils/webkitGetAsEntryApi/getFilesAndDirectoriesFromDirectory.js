var SRTlib = require('SRT-util');
module.exports = function getFilesAndDirectoriesFromDirectory(directoryReader, oldEntries, logDropError, _ref) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.getFilesAndDirectoriesFromDirectory3", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

  var onSuccess = _ref.onSuccess;
  directoryReader.readEntries(function (entries) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports.getFilesAndDirectoriesFromDirectory", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var newEntries = [].concat(oldEntries, entries);
    if (entries.length) {
      setTimeout(function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports.getFilesAndDirectoriesFromDirectory.setTimeout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        getFilesAndDirectoriesFromDirectory(directoryReader, newEntries, logDropError, {
          onSuccess: onSuccess
        });
                SRTlib.send("]},");

      }, 0);
    } else {
      onSuccess(newEntries);
    }
        SRTlib.send("]},");

  }, function (error) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports.getFilesAndDirectoriesFromDirectory2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    logDropError(error);
    onSuccess(oldEntries);
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

};
