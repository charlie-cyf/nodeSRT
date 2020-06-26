const SRTlib = require('SRT-util');

'use strict';
/**
* This module serves as an Async wrapper for LocalStorage
*/
module.exports.setItem = (key, value) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  return new Promise(resolve => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

    localStorage.setItem(key, value);
    resolve();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

};
module.exports.getItem = key => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

  return Promise.resolve(localStorage.getItem(key));
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

};
module.exports.removeItem = key => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

  return new Promise(resolve => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);

    localStorage.removeItem(key);
    resolve();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

};
