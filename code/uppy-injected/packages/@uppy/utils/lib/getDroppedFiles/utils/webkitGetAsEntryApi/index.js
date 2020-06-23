var SRTlib = require('SRT-util');
var toArray = require('../../../toArray');
var getRelativePath = require('./getRelativePath');
var getFilesAndDirectoriesFromDirectory = require('./getFilesAndDirectoriesFromDirectory');
module.exports = function webkitGetAsEntryApi(dataTransfer, logDropError) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.webkitGetAsEntryApi","fileName":"${__filename}","paramsNumber":2},`);

  var files = [];
  var rootPromises = [];
  var createPromiseToAddFileOrParseDirectory = function createPromiseToAddFileOrParseDirectory(entry) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createPromiseToAddFileOrParseDirectory","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"createPromiseToAddFileOrParseDirectory"},');

    return new Promise(function (resolve) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement3","fileName":"${__filename}","paramsNumber":1},`);

      if (entry.isFile) {
        entry.file(function (file) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

          file.relativePath = getRelativePath(entry);
          files.push(file);
          resolve();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement"},');

        }, function (error) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement2","fileName":"${__filename}","paramsNumber":1},`);

          logDropError(error);
          resolve();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement2"},');

        });
      } else if (entry.isDirectory) {
        var directoryReader = entry.createReader();
        getFilesAndDirectoriesFromDirectory(directoryReader, [], logDropError, {
          onSuccess: function onSuccess(entries) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement.getFilesAndDirectoriesFromDirectory.onSuccess.onSuccess","fileName":"${__filename}","paramsNumber":1},`);

            var promises = entries.map(function (entry) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement.getFilesAndDirectoriesFromDirectory.onSuccess.onSuccess.promises","fileName":"${__filename}","paramsNumber":1},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement.getFilesAndDirectoriesFromDirectory.onSuccess.onSuccess.promises"},');

              return createPromiseToAddFileOrParseDirectory(entry);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement.getFilesAndDirectoriesFromDirectory.onSuccess.onSuccess.promises"},');

            });
            Promise.all(promises).then(function () {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement.getFilesAndDirectoriesFromDirectory.onSuccess.onSuccess.then","fileName":"${__filename}","paramsNumber":0},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement.getFilesAndDirectoriesFromDirectory.onSuccess.onSuccess.then"},');

              return resolve();
                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement.getFilesAndDirectoriesFromDirectory.onSuccess.onSuccess.then"},');

            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement.getFilesAndDirectoriesFromDirectory.onSuccess.onSuccess"},');

          }
        });
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement3"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"createPromiseToAddFileOrParseDirectory"},');

  };
  toArray(dataTransfer.items).forEach(function (item) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.webkitGetAsEntryApi.forEach","fileName":"${__filename}","paramsNumber":1},`);

    var entry = item.webkitGetAsEntry();
    if (entry) {
      rootPromises.push(createPromiseToAddFileOrParseDirectory(entry));
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.forEach"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi"},');

  return Promise.all(rootPromises).then(function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.webkitGetAsEntryApi.ReturnStatement.then","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.ReturnStatement.then"},');

    return files;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.ReturnStatement.then"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi"},');

};
