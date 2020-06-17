var SRTlib = require('SRT-util');
const toArray = require('../../../toArray');
const getRelativePath = require('./getRelativePath');
const getFilesAndDirectoriesFromDirectory = require('./getFilesAndDirectoriesFromDirectory');
module.exports = function webkitGetAsEntryApi(dataTransfer, logDropError) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.webkitGetAsEntryApi", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const files = [];
  const rootPromises = [];
  const createPromiseToAddFileOrParseDirectory = entry => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    new Promise(resolve => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (entry.isFile) {
        entry.file(file => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          file.relativePath = getRelativePath(entry);
          files.push(file);
          resolve();
                    SRTlib.send("]},");

        }, error => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          logDropError(error);
          resolve();
                    SRTlib.send("]},");

        });
      } else if (entry.isDirectory) {
        const directoryReader = entry.createReader();
        getFilesAndDirectoriesFromDirectory(directoryReader, [], logDropError, {
          onSuccess: entries => {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            const promises = entries.map(entry => {
                            SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              createPromiseToAddFileOrParseDirectory(entry);
                            SRTlib.send("]},");

            });
            Promise.all(promises).then(() => {
                            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              resolve();
                            SRTlib.send("]},");

            });
                        SRTlib.send("]},");

          }
        });
      }
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  toArray(dataTransfer.items).forEach(item => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const entry = item.webkitGetAsEntry();
    if (entry) {
      rootPromises.push(createPromiseToAddFileOrParseDirectory(entry));
    }
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

  return Promise.all(rootPromises).then(() => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    files;
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

};
