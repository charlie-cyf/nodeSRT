var SRTlib = require('SRT-util');
const request = require('request');
const urlParser = require('url');
const crypto = require('crypto');
const {getProtectedHttpAgent} = require('./request');
exports.hasMatch = (value, criteria) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  return criteria.some(i => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

    return value === i || new RegExp(i).test(value);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

};
exports.jsonStringify = data => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);

  const cache = [];
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

  return JSON.stringify(data, (key, value) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":2},`);

    if (typeof value === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

        return;
      }
      cache.push(value);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

    return value;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

};
exports.sanitizeHtml = text => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

  return text ? text.replace(/<\/?[^>]+(>|$)/g, '') : text;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

};
exports.parseURL = url => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

  return urlParser.URL ? new urlParser.URL(url) : urlParser.parse(url);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

};
exports.getURLMeta = (url, blockLocalIPs = false) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

  return new Promise((resolve, reject) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":2},`);

    const opts = {
      uri: url,
      method: 'HEAD',
      followAllRedirects: true,
      agentClass: getProtectedHttpAgent(exports.parseURL(url).protocol, blockLocalIPs)
    };
    request(opts, (err, response, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":3},`);

      if (err) {
        reject(err);
      } else {
        resolve({
          type: response.headers['content-type'],
          size: parseInt(response.headers['content-length'])
        });
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

};
module.exports.getURLBuilder = options => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey10","fileName":"${__filename}","paramsNumber":1},`);

  const buildURL = (path, isExternal, excludeHost) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"buildURL","fileName":"${__filename}","paramsNumber":3},`);

    let url = path;
    if (isExternal) {
      url = `${options.server.implicitPath || ''}${url}`;
    }
    url = `${options.server.path || ''}${url}`;
    if (!excludeHost) {
      url = `${options.server.protocol}://${options.server.host}${url}`;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"buildURL"},');

    return url;
        SRTlib.send('{"type":"FUNCTIONEND","function":"buildURL"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

  return buildURL;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

};
function createSecret(secret) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createSecret","fileName":"${__filename}","paramsNumber":1},`);

  const hash = crypto.createHash('sha256');
  hash.update(secret);
    SRTlib.send('{"type":"FUNCTIONEND","function":"createSecret"},');

  return hash.digest();
    SRTlib.send('{"type":"FUNCTIONEND","function":"createSecret","paramsNumber":1},');

}
function createIv() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createIv","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"createIv"},');

  return crypto.randomBytes(16);
    SRTlib.send('{"type":"FUNCTIONEND","function":"createIv","paramsNumber":0},');

}
function urlEncode(unencoded) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"urlEncode","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"urlEncode"},');

  return unencoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '~');
    SRTlib.send('{"type":"FUNCTIONEND","function":"urlEncode","paramsNumber":1},');

}
function urlDecode(encoded) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"urlDecode","fileName":"${__filename}","paramsNumber":1},`);

  encoded = encoded.replace(/-/g, '+').replace(/_/g, '/').replace(/~/g, '=');
    SRTlib.send('{"type":"FUNCTIONEND","function":"urlDecode"},');

  return encoded;
    SRTlib.send('{"type":"FUNCTIONEND","function":"urlDecode","paramsNumber":1},');

}
module.exports.encrypt = (input, secret) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey11","fileName":"${__filename}","paramsNumber":2},`);

  const iv = createIv();
  const cipher = crypto.createCipheriv('aes256', createSecret(secret), iv);
  let encrypted = cipher.update(input, 'utf8', 'base64');
  encrypted += cipher.final('base64');
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

  return iv.toString('hex') + urlEncode(encrypted);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

};
module.exports.decrypt = (encrypted, secret) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey12","fileName":"${__filename}","paramsNumber":2},`);

  if (encrypted.length < 32) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

    throw new Error('Invalid encrypted value. Maybe it was generated with an old Companion version?');
  }
  const iv = Buffer.from(encrypted.slice(0, 32), 'hex');
  const encryptionWithoutIv = encrypted.slice(32);
  const decipher = crypto.createDecipheriv('aes256', createSecret(secret), iv);
  let decrypted = decipher.update(urlDecode(encryptionWithoutIv), 'base64', 'utf8');
  decrypted += decipher.final('utf8');
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

  return decrypted;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

};