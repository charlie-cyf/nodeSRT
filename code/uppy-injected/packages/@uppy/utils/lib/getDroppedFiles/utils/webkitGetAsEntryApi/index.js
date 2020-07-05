var SRTlib = require('SRT-util');

var toArray = require('../../../toArray');

var getRelativePath = require('./getRelativePath');

var getFilesAndDirectoriesFromDirectory = require('./getFilesAndDirectoriesFromDirectory');

module.exports = function webkitGetAsEntryApi(dataTransfer, logDropError) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
  var files = [];
  var rootPromises = [];

  var createPromiseToAddFileOrParseDirectory = function createPromiseToAddFileOrParseDirectory(entry) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"createPromiseToAddFileOrParseDirectory\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"createPromiseToAddFileOrParseDirectory"},');
    return new Promise(function (resolve) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"NewExpression\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      if (entry.isFile) {
        entry.file(function (file) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"entry.file\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
          file.relativePath = getRelativePath(entry);
          files.push(file);
          resolve();
          SRTlib.send('{"type":"FUNCTIONEND","function":"entry.file"},');
        }, function (error) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"entry.file2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
          logDropError(error);
          resolve();
          SRTlib.send('{"type":"FUNCTIONEND","function":"entry.file2"},');
        });
      } else if (entry.isDirectory) {
        var directoryReader = entry.createReader();
        getFilesAndDirectoriesFromDirectory(directoryReader, [], logDropError, {
          onSuccess: function onSuccess(entries) {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"getFilesAndDirectoriesFromDirectory.onSuccess\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
            var promises = entries.map(function (entry) {
              SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"promises.entries.map\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
              SRTlib.send('{"type":"FUNCTIONEND","function":"promises.entries.map"},');
              return createPromiseToAddFileOrParseDirectory(entry);
              SRTlib.send('{"type":"FUNCTIONEND","function":"promises.entries.map"},');
            });
            Promise.all(promises).then(function () {
              SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"Promise.all.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
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

  toArray(dataTransfer.items).forEach(function (item) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.webkitGetAsEntryApi.toArray.forEach\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
    var entry = item.webkitGetAsEntry();

    if (entry) {
      rootPromises.push(createPromiseToAddFileOrParseDirectory(entry));
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.toArray.forEach"},');
  });
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return Promise.all(rootPromises).then(function () {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.webkitGetAsEntryApi.ReturnStatement.Promise.all.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.ReturnStatement.Promise.all.then"},');
    return files;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.ReturnStatement.Promise.all.then"},');
  });
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};