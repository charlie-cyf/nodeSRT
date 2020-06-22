var SRTlib = require('SRT-util');
const toArray = require('../../../toArray');
const getRelativePath = require('./getRelativePath');
const getFilesAndDirectoriesFromDirectory = require('./getFilesAndDirectoriesFromDirectory');
module.exports = function webkitGetAsEntryApi(dataTransfer, logDropError) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.webkitGetAsEntryApi", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const files = [];
  const rootPromises = [];
  const createPromiseToAddFileOrParseDirectory = entry => {
        SRTlib.send(`{ "anonymous": false, "function": "createPromiseToAddFileOrParseDirectory", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "createPromiseToAddFileOrParseDirectory"},');

    return new Promise(resolve => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (entry.isFile) {
        entry.file(file => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          file.relativePath = getRelativePath(entry);
          files.push(file);
          resolve();
                    SRTlib.send('], "end": "emptyKey"},');

        }, error => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          logDropError(error);
          resolve();
                    SRTlib.send('], "end": "emptyKey2"},');

        });
      } else if (entry.isDirectory) {
        const directoryReader = entry.createReader();
        getFilesAndDirectoriesFromDirectory(directoryReader, [], logDropError, {
          onSuccess: entries => {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            const promises = entries.map(entry => {
                            SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                            SRTlib.send('], "end": "emptyKey3"},');

              return createPromiseToAddFileOrParseDirectory(entry);
                            SRTlib.send('], "end": "emptyKey3"},');

            });
            Promise.all(promises).then(() => {
                            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send('], "end": "emptyKey4"},');

              return resolve();
                            SRTlib.send('], "end": "emptyKey4"},');

            });
                        SRTlib.send('], "end": "emptyKey5"},');

          }
        });
      }
            SRTlib.send('], "end": "emptyKey6"},');

    });
        SRTlib.send('], "end": "createPromiseToAddFileOrParseDirectory"},');

  };
  toArray(dataTransfer.items).forEach(item => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const entry = item.webkitGetAsEntry();
    if (entry) {
      rootPromises.push(createPromiseToAddFileOrParseDirectory(entry));
    }
        SRTlib.send('], "end": "emptyKey7"},');

  });
    SRTlib.send('], "end": "module.exports.webkitGetAsEntryApi"},');

  return Promise.all(rootPromises).then(() => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "emptyKey8"},');

    return files;
        SRTlib.send('], "end": "emptyKey8"},');

  });
    SRTlib.send('], "end": "module.exports.webkitGetAsEntryApi"},');

};
