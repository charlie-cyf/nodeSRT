const SRTlib = require('SRT-util');

const {encrypt, decrypt} = require('./utils');
const crypto = require('crypto');
const atob = require('atob');
module.exports.generateState = secret => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.generateState","fileName":"${__filename}","paramsNumber":1},`);

  const state = {};
  state.id = crypto.randomBytes(10).toString('hex');
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.generateState"},');

  return setState(state, secret);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.generateState"},');

};
module.exports.addToState = (state, data, secret) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.addToState","fileName":"${__filename}","paramsNumber":3},`);

  const stateObj = getState(state, secret);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.addToState"},');

  return setState(Object.assign(stateObj, data), secret);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.addToState"},');

};
module.exports.getFromState = (state, name, secret) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getFromState","fileName":"${__filename}","paramsNumber":3},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFromState"},');

  return getState(state, secret)[name];
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFromState"},');

};
const setState = (state, secret) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setState","fileName":"${__filename}","paramsNumber":2},`);

  const encodedState = Buffer.from(JSON.stringify(state)).toString('base64');
    SRTlib.send('{"type":"FUNCTIONEND","function":"setState"},');

  return encrypt(encodedState, secret);
    SRTlib.send('{"type":"FUNCTIONEND","function":"setState"},');

};
const getState = (state, secret) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getState","fileName":"${__filename}","paramsNumber":2},`);

  const encodedState = decrypt(state, secret);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getState"},');

  return JSON.parse(atob(encodedState));
    SRTlib.send('{"type":"FUNCTIONEND","function":"getState"},');

};
