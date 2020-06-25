/**
* Recursive function, calls the original callback() when the directory is entirely parsed.
*
* @param {FileSystemDirectoryReader} directoryReader
* @param {Array} oldEntries
* @param {Function} logDropError
* @param {Function} callback - called with ([ all files and directories in that directoryReader ])
*/
const SRTlib = require('SRT-util');
module.exports = function getFilesAndDirectoriesFromDirectory(directoryReader, oldEntries, logDropError, {onSuccess}) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getFilesAndDirectoriesFromDirectory","fileName":"${__filename}","paramsNumber":4},`);

  directoryReader.readEntries(entries => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

    const newEntries = [...oldEntries, ...entries];
    // According to the FileSystem API spec, getFilesAndDirectoriesFromDirectory() must be called until it calls the onSuccess with an empty array.
    if (entries.length) {
      setTimeout(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":0},`);

        getFilesAndDirectoriesFromDirectory(directoryReader, newEntries, logDropError, {
          onSuccess
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

      }, 0);
          // Done iterating this particular directory
} else {
      onSuccess(newEntries);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  }, error => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

    // Make sure we resolve on error anyway, it's fine if only one directory couldn't be parsed!
    logDropError(error);
    onSuccess(oldEntries);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFilesAndDirectoriesFromDirectory"},');

};
