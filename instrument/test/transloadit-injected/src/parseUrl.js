const SRTlib = require('SRTutil');
module.exports = function parseUrl(url) {
  SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/src/parseUrl.js","paramsNumber":1},`);
  const scheme = (/^\w+:\/\//).exec(url);
  let i = 0;
  if (scheme) {
    i = scheme[0].length + 1;
  }
  const slashIndex = url.indexOf('/', i);
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
