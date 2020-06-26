const SRTlib = require('SRT-util');
const semver = require('semver');
/**
* checks if a version is greater than or equal to
* @param {string} v1 the LHS version
* @param {string} v2 the RHS version
* @returns {boolean}
*/
exports.gte = (v1, v2) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":2},`);
    v1 = semver.coerce(v1).version;
    v2 = semver.coerce(v2).version;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
    return semver.gte(v1, v2);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
};
