const SRTlib = require('SRT-util');

const toArray = require('../../../toArray');
const getRelativePath = require('./getRelativePath');
const getFilesAndDirectoriesFromDirectory = require('./getFilesAndDirectoriesFromDirectory');
module.exports = function webkitGetAsEntryApi(dataTransfer, logDropError) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/utils/src/getDroppedFiles/utils/webkitGetAsEntryApi/index.js","paramsNumber":2},`);

  const files = [];
  const rootPromises = [];
  const createPromiseToAddFileOrParseDirectory = entry => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createPromiseToAddFileOrParseDirectory","fileName":"/packages/@uppy/utils/src/getDroppedFiles/utils/webkitGetAsEntryApi/index.js","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"createPromiseToAddFileOrParseDirectory"},');

    return new Promise(resolve => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"NewExpression","fileName":"/packages/@uppy/utils/src/getDroppedFiles/utils/webkitGetAsEntryApi/index.js","paramsNumber":1},`);

      if (entry.isFile) {
        entry.file(file => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"entry.file","fileName":"/packages/@uppy/utils/src/getDroppedFiles/utils/webkitGetAsEntryApi/index.js","paramsNumber":1},`);

          file.relativePath = getRelativePath(entry);
          files.push(file);
          resolve();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"entry.file"},');

        }, error => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"entry.file###2","fileName":"/packages/@uppy/utils/src/getDroppedFiles/utils/webkitGetAsEntryApi/index.js","paramsNumber":1},`);

          logDropError(error);
          resolve();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"entry.file###2"},');

        });
      } else if (entry.isDirectory) {
        const directoryReader = entry.createReader();
        getFilesAndDirectoriesFromDirectory(directoryReader, [], logDropError, {
          onSuccess: entries => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"getFilesAndDirectoriesFromDirectory.onSuccess","fileName":"/packages/@uppy/utils/src/getDroppedFiles/utils/webkitGetAsEntryApi/index.js","paramsNumber":1},`);

            const promises = entries.map(entry => {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"promises.entries.map","fileName":"/packages/@uppy/utils/src/getDroppedFiles/utils/webkitGetAsEntryApi/index.js","paramsNumber":1},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"promises.entries.map"},');

              return createPromiseToAddFileOrParseDirectory(entry);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"promises.entries.map"},');

            });
            Promise.all(promises).then(() => {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Promise.all.then","fileName":"/packages/@uppy/utils/src/getDroppedFiles/utils/webkitGetAsEntryApi/index.js","paramsNumber":0},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"Promise.all.then"},');

              return resolve();
                            SRTlib.send('{"type":"FUNCTIONEND","function":"Promise.all.then"},');

            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"getFilesAndDirectoriesFromDirectory.onSuccess"},');

          }
        });
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"NewExpression"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"createPromiseToAddFileOrParseDirectory"},');

  };
  toArray(dataTransfer.items).forEach(item => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.webkitGetAsEntryApi.toArray.forEach","fileName":"/packages/@uppy/utils/src/getDroppedFiles/utils/webkitGetAsEntryApi/index.js","paramsNumber":1},`);

    const entry = item.webkitGetAsEntry();
    if (entry) {
      rootPromises.push(createPromiseToAddFileOrParseDirectory(entry));
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.toArray.forEach"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return Promise.all(rootPromises).then(() => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.webkitGetAsEntryApi.ReturnStatement.Promise.all.then","fileName":"/packages/@uppy/utils/src/getDroppedFiles/utils/webkitGetAsEntryApi/index.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.ReturnStatement.Promise.all.then"},');

    return files;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.ReturnStatement.Promise.all.then"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
