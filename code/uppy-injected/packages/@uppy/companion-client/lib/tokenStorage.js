var SRTlib = require('SRT-util');

'use strict';

module.exports.setItem = function (key, value) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
  SRTlib.send("]},");
  return new Promise(function (resolve) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    localStorage.setItem(key, value);
    resolve();
    SRTlib.send("]},");
  });
  SRTlib.send("]},");
};

module.exports.getItem = function (key) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey3\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
  SRTlib.send("]},");
  return Promise.resolve(localStorage.getItem(key));
  SRTlib.send("]},");
};

module.exports.removeItem = function (key) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey5\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
  SRTlib.send("]},");
  return new Promise(function (resolve) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey4\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    localStorage.removeItem(key);
    resolve();
    SRTlib.send("]},");
  });
  SRTlib.send("]},");
};