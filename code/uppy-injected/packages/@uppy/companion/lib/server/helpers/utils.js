var SRTlib = require('SRT-util');
const request = require('request');
const urlParser = require('url');
const crypto = require('crypto');
const {getProtectedHttpAgent} = require('./request');
exports.hasMatch = (value, criteria) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    SRTlib.send('], "end": "emptyKey2"},');

  return criteria.some(i => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "emptyKey"},');

    return value === i || new RegExp(i).test(value);
        SRTlib.send('], "end": "emptyKey"},');

  });
    SRTlib.send('], "end": "emptyKey2"},');

};
exports.jsonStringify = data => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const cache = [];
    SRTlib.send('], "end": "emptyKey4"},');

  return JSON.stringify(data, (key, value) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (typeof value === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) {
                SRTlib.send('], "end": "emptyKey3"},');

        return;
      }
      cache.push(value);
    }
        SRTlib.send('], "end": "emptyKey3"},');

    return value;
        SRTlib.send('], "end": "emptyKey3"},');

  });
    SRTlib.send('], "end": "emptyKey4"},');

};
exports.sanitizeHtml = text => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey5"},');

  return text ? text.replace(/<\/?[^>]+(>|$)/g, '') : text;
    SRTlib.send('], "end": "emptyKey5"},');

};
exports.parseURL = url => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey6"},');

  return urlParser.URL ? new urlParser.URL(url) : urlParser.parse(url);
    SRTlib.send('], "end": "emptyKey6"},');

};
exports.getURLMeta = (url, blockLocalIPs = false) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    SRTlib.send('], "end": "emptyKey9"},');

  return new Promise((resolve, reject) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const opts = {
      uri: url,
      method: 'HEAD',
      followAllRedirects: true,
      agentClass: getProtectedHttpAgent(exports.parseURL(url).protocol, blockLocalIPs)
    };
    request(opts, (err, response, body) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (err) {
        reject(err);
      } else {
        resolve({
          type: response.headers['content-type'],
          size: parseInt(response.headers['content-length'])
        });
      }
            SRTlib.send('], "end": "emptyKey7"},');

    });
        SRTlib.send('], "end": "emptyKey8"},');

  });
    SRTlib.send('], "end": "emptyKey9"},');

};
module.exports.getURLBuilder = options => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const buildURL = (path, isExternal, excludeHost) => {
        SRTlib.send(`{ "anonymous": false, "function": "buildURL", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    let url = path;
    if (isExternal) {
      url = `${options.server.implicitPath || ''}${url}`;
    }
    url = `${options.server.path || ''}${url}`;
    if (!excludeHost) {
      url = `${options.server.protocol}://${options.server.host}${url}`;
    }
        SRTlib.send('], "end": "buildURL"},');

    return url;
        SRTlib.send('], "end": "buildURL"},');

  };
    SRTlib.send('], "end": "emptyKey10"},');

  return buildURL;
    SRTlib.send('], "end": "emptyKey10"},');

};
function createSecret(secret) {
    SRTlib.send(`{ "anonymous": false, "function": "createSecret", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const hash = crypto.createHash('sha256');
  hash.update(secret);
    SRTlib.send('], "end": "createSecret"},');

  return hash.digest();
    SRTlib.send('], "end": "createSecret"},');

}
function createIv() {
    SRTlib.send(`{ "anonymous": false, "function": "createIv", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send('], "end": "createIv"},');

  return crypto.randomBytes(16);
    SRTlib.send('], "end": "createIv"},');

}
function urlEncode(unencoded) {
    SRTlib.send(`{ "anonymous": false, "function": "urlEncode", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "urlEncode"},');

  return unencoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '~');
    SRTlib.send('], "end": "urlEncode"},');

}
function urlDecode(encoded) {
    SRTlib.send(`{ "anonymous": false, "function": "urlDecode", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  encoded = encoded.replace(/-/g, '+').replace(/_/g, '/').replace(/~/g, '=');
    SRTlib.send('], "end": "urlDecode"},');

  return encoded;
    SRTlib.send('], "end": "urlDecode"},');

}
module.exports.encrypt = (input, secret) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const iv = createIv();
  const cipher = crypto.createCipheriv('aes256', createSecret(secret), iv);
  let encrypted = cipher.update(input, 'utf8', 'base64');
  encrypted += cipher.final('base64');
    SRTlib.send('], "end": "emptyKey11"},');

  return iv.toString('hex') + urlEncode(encrypted);
    SRTlib.send('], "end": "emptyKey11"},');

};
module.exports.decrypt = (encrypted, secret) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  if (encrypted.length < 32) {
        SRTlib.send('], "end": "emptyKey12"},');

    throw new Error('Invalid encrypted value. Maybe it was generated with an old Companion version?');
  }
  const iv = Buffer.from(encrypted.slice(0, 32), 'hex');
  const encryptionWithoutIv = encrypted.slice(32);
  const decipher = crypto.createDecipheriv('aes256', createSecret(secret), iv);
  let decrypted = decipher.update(urlDecode(encryptionWithoutIv), 'base64', 'utf8');
  decrypted += decipher.final('utf8');
    SRTlib.send('], "end": "emptyKey12"},');

  return decrypted;
    SRTlib.send('], "end": "emptyKey12"},');

};
