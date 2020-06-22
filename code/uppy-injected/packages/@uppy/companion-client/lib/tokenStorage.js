var SRTlib = require('SRT-util');
'use strict';
module.exports.setItem = function (key, value) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.setItem", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    SRTlib.send('], "end": "module.exports.setItem"},');

  return new Promise(function (resolve) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports.setItem.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    localStorage.setItem(key, value);
    resolve();
        SRTlib.send('], "end": "module.exports.setItem.ReturnStatement"},');

  });
    SRTlib.send('], "end": "module.exports.setItem"},');

};
module.exports.getItem = function (key) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.getItem", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "module.exports.getItem"},');

  return Promise.resolve(localStorage.getItem(key));
    SRTlib.send('], "end": "module.exports.getItem"},');

};
module.exports.removeItem = function (key) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.removeItem", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "module.exports.removeItem"},');

  return new Promise(function (resolve) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports.removeItem.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    localStorage.removeItem(key);
    resolve();
        SRTlib.send('], "end": "module.exports.removeItem.ReturnStatement"},');

  });
    SRTlib.send('], "end": "module.exports.removeItem"},');

};
