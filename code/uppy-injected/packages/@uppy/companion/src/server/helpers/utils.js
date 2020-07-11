const SRTlib = require('SRT-util');

const request = require('request');
const urlParser = require('url');
const crypto = require('crypto');
const {getProtectedHttpAgent} = require('./request');
exports.hasMatch = (value, criteria) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.hasMatch","fileName":"${__filename}","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.hasMatch"},');

  return criteria.some(i => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.criteria.some","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.criteria.some"},');

    return value === i || new RegExp(i).test(value);
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.criteria.some"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.hasMatch"},');

};
exports.jsonStringify = data => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.jsonStringify","fileName":"${__filename}","paramsNumber":1},`);

  const cache = [];
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.jsonStringify"},');

  return JSON.stringify(data, (key, value) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.JSON.stringify","fileName":"${__filename}","paramsNumber":2},`);

    if (typeof value === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.JSON.stringify"},');

        return;
      }
      cache.push(value);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.JSON.stringify"},');

    return value;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.JSON.stringify"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.jsonStringify"},');

};
exports.sanitizeHtml = text => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.sanitizeHtml","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.sanitizeHtml"},');

  return text ? text.replace(/<\/?[^>]+(>|$)/g, '') : text;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.sanitizeHtml"},');

};
exports.parseURL = url => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.parseURL","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.parseURL"},');

  return urlParser.URL ? new urlParser.URL(url) : urlParser.parse(url);
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.parseURL"},');

};
exports.getURLMeta = (url, blockLocalIPs = false) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getURLMeta","fileName":"${__filename}","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getURLMeta"},');

  return new Promise((resolve, reject) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

    const opts = {
      uri: url,
      method: 'HEAD',
      followAllRedirects: true,
      agentClass: getProtectedHttpAgent(exports.parseURL(url).protocol, blockLocalIPs)
    };
    request(opts, (err, response, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request","fileName":"${__filename}","paramsNumber":3},`);

      if (err) {
        reject(err);
      } else {
        resolve({
          type: response.headers['content-type'],
          size: parseInt(response.headers['content-length'])
        });
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"request"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getURLMeta"},');

};
module.exports.getURLBuilder = options => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getURLBuilder","fileName":"${__filename}","paramsNumber":1},`);

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
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getURLBuilder"},');

  return buildURL;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getURLBuilder"},');

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
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.encrypt","fileName":"${__filename}","paramsNumber":2},`);

  const iv = createIv();
  const cipher = crypto.createCipheriv('aes256', createSecret(secret), iv);
  let encrypted = cipher.update(input, 'utf8', 'base64');
  encrypted += cipher.final('base64');
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.encrypt"},');

  return iv.toString('hex') + urlEncode(encrypted);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.encrypt"},');

};
module.exports.decrypt = (encrypted, secret) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.decrypt","fileName":"${__filename}","paramsNumber":2},`);

  if (encrypted.length < 32) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.decrypt"},');

    throw new Error('Invalid encrypted value. Maybe it was generated with an old Companion version?');
  }
  const iv = Buffer.from(encrypted.slice(0, 32), 'hex');
  const encryptionWithoutIv = encrypted.slice(32);
  const decipher = crypto.createDecipheriv('aes256', createSecret(secret), iv);
  let decrypted = decipher.update(urlDecode(encryptionWithoutIv), 'base64', 'utf8');
  decrypted += decipher.final('utf8');
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.decrypt"},');

  return decrypted;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.decrypt"},');

};
