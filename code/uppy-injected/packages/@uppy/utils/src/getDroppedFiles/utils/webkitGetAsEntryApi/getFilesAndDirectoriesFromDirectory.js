const SRTlib = require('SRT-util');

module.exports = function getFilesAndDirectoriesFromDirectory(directoryReader, oldEntries, logDropError, {onSuccess}) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":4},`);

  directoryReader.readEntries(entries => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getFilesAndDirectoriesFromDirectory.directoryReader.readEntries","fileName":"${__filename}","paramsNumber":1},`);

    const newEntries = [...oldEntries, ...entries];
    if (entries.length) {
      setTimeout(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"setTimeout","fileName":"${__filename}","paramsNumber":0},`);

        getFilesAndDirectoriesFromDirectory(directoryReader, newEntries, logDropError, {
          onSuccess
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"setTimeout"},');

      }, 0);
    } else {
      onSuccess(newEntries);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFilesAndDirectoriesFromDirectory.directoryReader.readEntries"},');

  }, error => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getFilesAndDirectoriesFromDirectory.directoryReader.readEntries2","fileName":"${__filename}","paramsNumber":1},`);

    logDropError(error);
    onSuccess(oldEntries);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFilesAndDirectoriesFromDirectory.directoryReader.readEntries2"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
