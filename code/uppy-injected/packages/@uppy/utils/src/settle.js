var SRTlib = require('SRT-util');
module.exports = function settle(promises) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.settle", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const resolutions = [];
  const rejections = [];
  function resolved(value) {
        SRTlib.send(`{ "anonymous": false, "function": "resolved", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    resolutions.push(value);
        SRTlib.send('], "end": "resolved"},');

  }
  function rejected(error) {
        SRTlib.send(`{ "anonymous": false, "function": "rejected", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    rejections.push(error);
        SRTlib.send('], "end": "rejected"},');

  }
  const wait = Promise.all(promises.map(promise => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "emptyKey"},');

    return promise.then(resolved, rejected);
        SRTlib.send('], "end": "emptyKey"},');

  }));
    SRTlib.send('], "end": "module.exports.settle"},');

  return wait.then(() => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "emptyKey2"},');

    return {
      successful: resolutions,
      failed: rejections
    };
        SRTlib.send('], "end": "emptyKey2"},');

  });
    SRTlib.send('], "end": "module.exports.settle"},');

};
