/**
* Recursive function, calls the original callback() when the directory is entirely parsed.
*
* @param {FileSystemDirectoryReader} directoryReader
* @param {Array} oldEntries
* @param {Function} logDropError
* @param {Function} callback - called with ([ all files and directories in that directoryReader ])
*/
const SRTlib = require('SRT-util');
module.exports = function getFilesAndDirectoriesFromDirectory(directoryReader, oldEntries, logDropError, _ref) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getFilesAndDirectoriesFromDirectory3","fileName":"${__filename}","paramsNumber":4},`);

  var onSuccess = _ref.onSuccess;
  directoryReader.readEntries(function (entries) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getFilesAndDirectoriesFromDirectory","fileName":"${__filename}","paramsNumber":1},`);

    // According to the FileSystem API spec, getFilesAndDirectoriesFromDirectory() must be called until it calls the onSuccess with an empty array.
    var newEntries = [].concat(oldEntries, entries);
    if (entries.length) {
      // Done iterating this particular directory
      setTimeout(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getFilesAndDirectoriesFromDirectory.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

        getFilesAndDirectoriesFromDirectory(directoryReader, newEntries, logDropError, {
          onSuccess: onSuccess
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFilesAndDirectoriesFromDirectory.setTimeout"},');

      }, 0);
    } else {
      onSuccess(newEntries);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFilesAndDirectoriesFromDirectory"},');

  }, function (error) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getFilesAndDirectoriesFromDirectory2","fileName":"${__filename}","paramsNumber":1},`);

    // Make sure we resolve on error anyway, it's fine if only one directory couldn't be parsed!
    logDropError(error);
    onSuccess(oldEntries);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFilesAndDirectoriesFromDirectory2"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFilesAndDirectoriesFromDirectory3"},');

};
