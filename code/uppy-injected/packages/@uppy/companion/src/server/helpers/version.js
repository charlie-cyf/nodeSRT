const SRTlib = require('SRT-util');

const semver = require('semver');
exports.gte = (v1, v2) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.gte","fileName":"/packages/@uppy/companion/src/server/helpers/version.js","paramsNumber":2},`);

  v1 = semver.coerce(v1).version;
  v2 = semver.coerce(v2).version;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.gte"},');

  return semver.gte(v1, v2);
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.gte"},');

};
