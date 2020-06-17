var SRTlib = require('SRT-util');
const semver = require('semver');
exports.gte = (v1, v2) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  v1 = semver.coerce(v1).version;
  v2 = semver.coerce(v2).version;
    SRTlib.send("]},");

  return semver.gte(v1, v2);
    SRTlib.send("]},");

};
