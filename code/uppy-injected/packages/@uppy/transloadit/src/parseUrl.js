const SRTlib = require('SRT-util');

module.exports = function parseUrl(url) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.parseUrl","fileName":"${__filename}","paramsNumber":1},`);

  const scheme = (/^\w+:\/\//).exec(url);
  let i = 0;
  if (scheme) {
    i = scheme[0].length + 1;
  }
  const slashIndex = url.indexOf('/', i);
  if (slashIndex === -1) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.parseUrl"},');

    return {
      origin: url,
      pathname: '/'
    };
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.parseUrl"},');

  return {
    origin: url.slice(0, slashIndex),
    pathname: url.slice(slashIndex)
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.parseUrl"},');

};
