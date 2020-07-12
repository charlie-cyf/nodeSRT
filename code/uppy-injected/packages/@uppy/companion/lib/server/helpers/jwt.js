const SRTlib = require('SRT-util');

const jwt = require('jsonwebtoken');
const {encrypt, decrypt} = require('./utils');
module.exports.generateToken = (payload, secret) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.generateToken","fileName":"/packages/@uppy/companion/lib/server/helpers/jwt.js","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.generateToken"},');

  return encrypt(jwt.sign({
    data: payload
  }, secret, {
    expiresIn: 60 * 60 * 24
  }), secret);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.generateToken"},');

};
module.exports.verifyToken = (token, secret) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.verifyToken","fileName":"/packages/@uppy/companion/lib/server/helpers/jwt.js","paramsNumber":2},`);

  try {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.verifyToken"},');

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
module.exports.addToCookies = (res, token, companionOptions, providerName) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.addToCookies","fileName":"/packages/@uppy/companion/lib/server/helpers/jwt.js","paramsNumber":4},`);

  const cookieOptions = {
    maxAge: 1000 * 60 * 60 * 24 * 30,
    httpOnly: true
  };
  if (companionOptions.cookieDomain) {
    cookieOptions.domain = companionOptions.cookieDomain;
  }
  res.cookie(`uppyAuthToken--${providerName}`, token, cookieOptions);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.addToCookies"},');

};
module.exports.removeFromCookies = (res, companionOptions, providerName) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.removeFromCookies","fileName":"/packages/@uppy/companion/lib/server/helpers/jwt.js","paramsNumber":3},`);

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
