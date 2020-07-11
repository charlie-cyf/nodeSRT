const SRTlib = require('SRT-util');

module.exports = prettierBytes;
function prettierBytes(num) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"prettierBytes","fileName":"${__filename}","paramsNumber":1},`);

  if (typeof num !== 'number' || isNaN(num)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"prettierBytes"},');

    throw new TypeError('Expected a number, got ' + typeof num);
  }
  var neg = num < 0;
  var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  if (neg) {
    num = -num;
  }
  if (num < 1) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"prettierBytes"},');

    return (neg ? '-' : '') + num + ' B';
  }
  var exponent = Math.min(Math.floor(Math.log(num) / Math.log(1024)), units.length - 1);
  num = Number(num / Math.pow(1024, exponent));
  var unit = units[exponent];
  if (num >= 10 || num % 1 === 0) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"prettierBytes"},');

    return (neg ? '-' : '') + num.toFixed(0) + ' ' + unit;
  } else {
        SRTlib.send('{"type":"FUNCTIONEND","function":"prettierBytes"},');

    return (neg ? '-' : '') + num.toFixed(1) + ' ' + unit;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"prettierBytes","paramsNumber":1},');

}
