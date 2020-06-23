var SRTlib = require('SRT-util');
const jwt = require('jsonwebtoken');
const {encrypt, decrypt} = require('./utils');
module.exports.generateToken = (payload, secret) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  return encrypt(jwt.sign({
    data: payload
  }, secret, {
    expiresIn: 60 * 60 * 24
  }), secret);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

};
module.exports.verifyToken = (token, secret) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":2},`);

  try {
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    return {
      payload: jwt.verify(decrypt(token, secret), secret, {}).data
    };
  } catch (err) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    return {
      err
    };
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

};
module.exports.addToCookies = (res, token, companionOptions, providerName) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":4},`);

  const cookieOptions = {
    maxAge: 1000 * 60 * 60 * 24 * 30,
    httpOnly: true
  };
  if (companionOptions.cookieDomain) {
    cookieOptions.domain = companionOptions.cookieDomain;
  }
  res.cookie(`uppyAuthToken--${providerName}`, token, cookieOptions);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

};
module.exports.removeFromCookies = (res, companionOptions, providerName) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":3},`);

  const cookieOptions = {
    maxAge: 1000 * 60 * 60 * 24 * 30,
    httpOnly: true
  };
  if (companionOptions.cookieDomain) {
    cookieOptions.domain = companionOptions.cookieDomain;
  }
  res.clearCookie(`uppyAuthToken--${providerName}`, cookieOptions);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

};