var SRTlib = require('SRT-util');

'use strict';
/**
* This module serves as an Async wrapper for LocalStorage
*/


module.exports.setItem = function (key, value) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.setItem\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.setItem"},');
  return new Promise(function (resolve) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.NewExpression\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
    localStorage.setItem(key, value);
    resolve();
    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression"},');
  });
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.setItem"},');
};

module.exports.getItem = function (key) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.getItem\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getItem"},');
  return Promise.resolve(localStorage.getItem(key));
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getItem"},');
};

module.exports.removeItem = function (key) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.removeItem\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.removeItem"},');
  return new Promise(function (resolve) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.NewExpression2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
    localStorage.removeItem(key);
    resolve();
    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression2"},');
  });
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.removeItem"},');
};