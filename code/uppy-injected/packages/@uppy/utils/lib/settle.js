var SRTlib = require('SRT-util');

module.exports = function settle(promises) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.settle\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
  var resolutions = [];
  var rejections = [];

  function resolved(value) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"" + arguments.callee.name + "\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    resolutions.push(value);
    SRTlib.send("]},");
  }

  function rejected(error) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"" + arguments.callee.name + "\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    rejections.push(error);
    SRTlib.send("]},");
  }

  var wait = Promise.all(promises.map(function (promise) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    promise.then(resolved, rejected);
    SRTlib.send("]},");
  }));
  SRTlib.send("]},");
  return wait.then(function () {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    SRTlib.send("]},");
    return {
      successful: resolutions,
      failed: rejections
    };
    SRTlib.send("]},");
  });
  SRTlib.send("]},");
};