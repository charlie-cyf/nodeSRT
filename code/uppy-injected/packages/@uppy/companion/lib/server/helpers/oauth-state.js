var SRTlib = require('SRT-util');
const {encrypt, decrypt} = require('./utils');
const crypto = require('crypto');
const atob = require('atob');
module.exports.generateState = secret => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const state = {};
  state.id = crypto.randomBytes(10).toString('hex');
    SRTlib.send("]},");

  return setState(state, secret);
    SRTlib.send("]},");

};
module.exports.addToState = (state, data, secret) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  const stateObj = getState(state, secret);
    SRTlib.send("]},");

  return setState(Object.assign(stateObj, data), secret);
    SRTlib.send("]},");

};
module.exports.getFromState = (state, name, secret) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    SRTlib.send("]},");

  return getState(state, secret)[name];
    SRTlib.send("]},");

};
const setState = (state, secret) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const encodedState = Buffer.from(JSON.stringify(state)).toString('base64');
    SRTlib.send("]},");

  return encrypt(encodedState, secret);
    SRTlib.send("]},");

};
const getState = (state, secret) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const encodedState = decrypt(state, secret);
    SRTlib.send("]},");

  return JSON.parse(atob(encodedState));
    SRTlib.send("]},");

};
