var SRTlib = require('SRT-util');
module.exports = function has(object, key) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.has", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    SRTlib.send('], "end": "module.exports.has"},');

  return Object.prototype.hasOwnProperty.call(object, key);
    SRTlib.send('], "end": "module.exports.has"},');

};
