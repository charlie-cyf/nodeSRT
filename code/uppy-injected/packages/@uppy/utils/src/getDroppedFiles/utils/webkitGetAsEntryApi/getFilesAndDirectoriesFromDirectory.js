var SRTlib = require('SRT-util');
module.exports = function getFilesAndDirectoriesFromDirectory(directoryReader, oldEntries, logDropError, {onSuccess}) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.getFilesAndDirectoriesFromDirectory", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

  directoryReader.readEntries(entries => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const newEntries = [...oldEntries, ...entries];
    if (entries.length) {
      setTimeout(() => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        getFilesAndDirectoriesFromDirectory(directoryReader, newEntries, logDropError, {
          onSuccess
        });
                SRTlib.send('], "end": "emptyKey"},');

      }, 0);
    } else {
      onSuccess(newEntries);
    }
        SRTlib.send('], "end": "emptyKey2"},');

  }, error => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    logDropError(error);
    onSuccess(oldEntries);
        SRTlib.send('], "end": "emptyKey3"},');

  });
    SRTlib.send('], "end": "module.exports.getFilesAndDirectoriesFromDirectory"},');

};
