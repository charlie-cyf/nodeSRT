var SRTlib = require('SRT-util');

var toArray = require('../../../toArray');

var getRelativePath = require('./getRelativePath');

var getFilesAndDirectoriesFromDirectory = require('./getFilesAndDirectoriesFromDirectory');

module.exports = function webkitGetAsEntryApi(dataTransfer, logDropError) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.webkitGetAsEntryApi\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
  var files = [];
  var rootPromises = [];

  var createPromiseToAddFileOrParseDirectory = function createPromiseToAddFileOrParseDirectory(entry) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"createPromiseToAddFileOrParseDirectory\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    SRTlib.send("]},");
    return new Promise(function (resolve) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey6\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

      if (entry.isFile) {
        entry.file(function (file) {
          SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
          file.relativePath = getRelativePath(entry);
          files.push(file);
          resolve();
          SRTlib.send("]},");
        }, function (error) {
          SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
          logDropError(error);
          resolve();
          SRTlib.send("]},");
        });
      } else if (entry.isDirectory) {
        var directoryReader = entry.createReader();
        getFilesAndDirectoriesFromDirectory(directoryReader, [], logDropError, {
          onSuccess: function onSuccess(entries) {
            SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey5\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
            var promises = entries.map(function (entry) {
              SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey3\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
              SRTlib.send("]},");
              return createPromiseToAddFileOrParseDirectory(entry);
              SRTlib.send("]},");
            });
            Promise.all(promises).then(function () {
              SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey4\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
              SRTlib.send("]},");
              return resolve();
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

  toArray(dataTransfer.items).forEach(function (item) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey7\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    var entry = item.webkitGetAsEntry();

    if (entry) {
      rootPromises.push(createPromiseToAddFileOrParseDirectory(entry));
    }

    SRTlib.send("]},");
  });
  SRTlib.send("]},");
  return Promise.all(rootPromises).then(function () {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey8\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    SRTlib.send("]},");
    return files;
    SRTlib.send("]},");
  });
  SRTlib.send("]},");
};