var SRTlib = require('SRT-util');
const {encrypt, decrypt} = require('./utils');
const crypto = require('crypto');
const atob = require('atob');
module.exports.generateState = secret => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const state = {};
  state.id = crypto.randomBytes(10).toString('hex');
    SRTlib.send('], "end": "emptyKey"},');

  return setState(state, secret);
    SRTlib.send('], "end": "emptyKey"},');

};
module.exports.addToState = (state, data, secret) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  const stateObj = getState(state, secret);
    SRTlib.send('], "end": "emptyKey2"},');

  return setState(Object.assign(stateObj, data), secret);
    SRTlib.send('], "end": "emptyKey2"},');

};
module.exports.getFromState = (state, name, secret) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    SRTlib.send('], "end": "emptyKey3"},');

  return getState(state, secret)[name];
    SRTlib.send('], "end": "emptyKey3"},');

};
const setState = (state, secret) => {
    SRTlib.send(`{ "anonymous": false, "function": "setState", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const encodedState = Buffer.from(JSON.stringify(state)).toString('base64');
    SRTlib.send('], "end": "setState"},');

  return encrypt(encodedState, secret);
    SRTlib.send('], "end": "setState"},');

};
const getState = (state, secret) => {
    SRTlib.send(`{ "anonymous": false, "function": "getState", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const encodedState = decrypt(state, secret);
    SRTlib.send('], "end": "getState"},');

  return JSON.parse(atob(encodedState));
    SRTlib.send('], "end": "getState"},');

};
