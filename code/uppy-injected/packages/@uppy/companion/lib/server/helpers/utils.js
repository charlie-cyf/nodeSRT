const SRTlib = require('SRT-util');

const request = require('request');
const urlParser = require('url');
const crypto = require('crypto');
const {getProtectedHttpAgent} = require('./request');
/**
*
* @param {string} value
* @param {string[]} criteria
* @returns {boolean}
*/
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
/**
*
* @param {object} data
* @returns {string}
*/
exports.jsonStringify = data => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.jsonStringify","fileName":"${__filename}","paramsNumber":1},`);

  const cache = [];
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.jsonStringify"},');

  return JSON.stringify(data, (key, value) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.JSON.stringify","fileName":"${__filename}","paramsNumber":2},`);

    if (typeof value === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.JSON.stringify"},');

        // Circular reference found, discard key
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
/**
* Does a simple html sanitization on the passed value
*
* @param {string} text
*/
exports.sanitizeHtml = text => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.sanitizeHtml","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.sanitizeHtml"},');

  return text ? text.replace(/<\/?[^>]+(>|$)/g, '') : text;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.sanitizeHtml"},');

};
/**
* Node 6(and beyond) compatible url parser
* @todo drop the use of url.parse when support for node 6 is dropped
*
* @param {string} url URL to be parsed
*/
exports.parseURL = url => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.parseURL","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.parseURL"},');

  // eslint-disable-next-line
  return urlParser.URL ? new urlParser.URL(url) : urlParser.parse(url);
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.parseURL"},');

};
/**
* Gets the size and content type of a url's content
*
* @param {string} url
* @param {boolean=} blockLocalIPs
* @return {Promise}
*/
exports.getURLMeta = (url, blockLocalIPs = false) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getURLMeta","fileName":"${__filename}","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getURLMeta"},');

  return new Promise((resolve, reject) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"${__filename}","paramsNumber":2},`);

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getURLMeta"},');

};
// all paths are assumed to be '/' prepended
/**
* Returns a url builder
*
* @param {object} options companion options
*/
module.exports.getURLBuilder = options => {
  /**
  * Builds companion targeted url
  *
  * @param {string} path the tail path of the url
  * @param {boolean} isExternal if the url is for the external world
  * @param {boolean=} excludeHost if the server domain and protocol should be included
  */
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getURLBuilder","fileName":"${__filename}","paramsNumber":1},`);

  const buildURL = (path, isExternal, excludeHost) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"buildURL","fileName":"${__filename}","paramsNumber":3},`);

    let url = path;
    // supports for no path specified too
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
/**
* Ensure that a user-provided `secret` is 32 bytes long (the length required
* for an AES256 key) by hashing it with SHA256.
*
* @param {string|Buffer} secret
*/
function createSecret(secret) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createSecret","fileName":"${__filename}","paramsNumber":1},`);

  const hash = crypto.createHash('sha256');
  hash.update(secret);
    SRTlib.send('{"type":"FUNCTIONEND","function":"createSecret"},');

  return hash.digest();
    SRTlib.send('{"type":"FUNCTIONEND","function":"createSecret","paramsNumber":1},');

}
/**
* Create an initialization vector for AES256.
*
* @return {Buffer}
*/
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
/**
* Encrypt a buffer or string with AES256 and a random iv.
*
* @param {string} input
* @param {string|Buffer} secret
* @return {string} Ciphertext as a hex string, prefixed with 32 hex characters containing the iv.
*/
module.exports.encrypt = (input, secret) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.encrypt","fileName":"${__filename}","paramsNumber":2},`);

  const iv = createIv();
  const cipher = crypto.createCipheriv('aes256', createSecret(secret), iv);
  let encrypted = cipher.update(input, 'utf8', 'base64');
  encrypted += cipher.final('base64');
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.encrypt"},');

  // add iv to encrypted string to use for decryption
  return iv.toString('hex') + urlEncode(encrypted);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.encrypt"},');

};
/**
* Decrypt an iv-prefixed or string with AES256. The iv should be in the first 32 hex characters.
*
* @param {string} encrypted
* @param {string|Buffer} secret
* @return {string} Decrypted value.
*/
module.exports.decrypt = (encrypted, secret) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.decrypt","fileName":"${__filename}","paramsNumber":2},`);

  // Need at least 32 chars for the iv
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
