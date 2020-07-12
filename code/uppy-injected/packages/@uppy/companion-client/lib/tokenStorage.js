var SRTlib = require('SRT-util');

'use strict';

module.exports.setItem = function (key, value) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.setItem\",\"fileName\":\"/packages/@uppy/companion-client/src/tokenStorage.js\",\"paramsNumber\":2},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.setItem"},');
  return new Promise(function (resolve) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.NewExpression\",\"fileName\":\"/packages/@uppy/companion-client/src/tokenStorage.js\",\"paramsNumber\":1},");
    localStorage.setItem(key, value);
    resolve();
    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression"},');
  });
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.setItem"},');
};

module.exports.getItem = function (key) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.getItem\",\"fileName\":\"/packages/@uppy/companion-client/src/tokenStorage.js\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getItem"},');
  return Promise.resolve(localStorage.getItem(key));
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getItem"},');
};

module.exports.removeItem = function (key) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.removeItem\",\"fileName\":\"/packages/@uppy/companion-client/src/tokenStorage.js\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.removeItem"},');
  return new Promise(function (resolve) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.NewExpression###2\",\"fileName\":\"/packages/@uppy/companion-client/src/tokenStorage.js\",\"paramsNumber\":1},");
    localStorage.removeItem(key);
    resolve();
    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression###2"},');
  });
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.removeItem"},');
};