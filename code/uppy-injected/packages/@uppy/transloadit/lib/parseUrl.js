var SRTlib = require('SRT-util');

module.exports = function parseUrl(url) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"/packages/@uppy/transloadit/src/parseUrl.js\",\"paramsNumber\":1},");
  var scheme = /^\w+:\/\//.exec(url);
  var i = 0;

  if (scheme) {
    i = scheme[0].length + 1;
  }

  var slashIndex = url.indexOf('/', i);

  if (slashIndex === -1) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    return {
      origin: url,
      pathname: '/'
    };
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return {
    origin: url.slice(0, slashIndex),
    pathname: url.slice(slashIndex)
  };
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};