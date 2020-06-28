const SRTlib = require('SRT-util');

const jwt = require('jsonwebtoken');
const {encrypt, decrypt} = require('./utils');
/**
*
* @param {*} payload
* @param {string} secret
*/
module.exports.generateToken = (payload, secret) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.generateToken","fileName":"${__filename}","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.generateToken"},');

  return encrypt(jwt.sign({
    data: payload
  }, secret, {
    expiresIn: 60 * 60 * 24
  }), secret);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.generateToken"},');

};
/**
*
* @param {string} token
* @param {string} secret
*/
module.exports.verifyToken = (token, secret) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.verifyToken","fileName":"${__filename}","paramsNumber":2},`);

  try {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.verifyToken"},');

    // @ts-ignore
    return {
      payload: jwt.verify(decrypt(token, secret), secret, {}).data
    };
  } catch (err) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.verifyToken"},');

    return {
      err
    };
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.verifyToken"},');

};
/**
*
* @param {object} res
* @param {string} token
* @param {object=} companionOptions
* @param {string} providerName
*/
module.exports.addToCookies = (res, token, companionOptions, providerName) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.addToCookies","fileName":"${__filename}","paramsNumber":4},`);

  const cookieOptions = {
    maxAge: 1000 * 60 * 60 * 24 * 30,
    httpOnly: true
  };
  if (companionOptions.cookieDomain) {
    cookieOptions.domain = companionOptions.cookieDomain;
  }
  // send signed token to client.
  res.cookie(`uppyAuthToken--${providerName}`, token, cookieOptions);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.addToCookies"},');

};
/**
*
* @param {object} res
* @param {object=} companionOptions
* @param {string} providerName
*/
module.exports.removeFromCookies = (res, companionOptions, providerName) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.removeFromCookies","fileName":"${__filename}","paramsNumber":3},`);

  const cookieOptions = {
    maxAge: 1000 * 60 * 60 * 24 * 30,
    httpOnly: true
  };
  if (companionOptions.cookieDomain) {
    cookieOptions.domain = companionOptions.cookieDomain;
  }
  res.clearCookie(`uppyAuthToken--${providerName}`, cookieOptions);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.removeFromCookies"},');

};
