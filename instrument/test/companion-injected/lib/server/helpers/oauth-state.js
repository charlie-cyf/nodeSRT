const {encrypt, decrypt} = require('./utils');
const crypto = require('crypto');
// @ts-ignore
const atob = require('atob');
module.exports.generateState = secret => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

  const state = {};
  state.id = crypto.randomBytes(10).toString('hex');
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  return setState(state, secret);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

};
module.exports.addToState = (state, data, secret) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":3},`);

  const stateObj = getState(state, secret);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  return setState(Object.assign(stateObj, data), secret);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

};
module.exports.getFromState = (state, name, secret) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":3},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

  return getState(state, secret)[name];
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

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
