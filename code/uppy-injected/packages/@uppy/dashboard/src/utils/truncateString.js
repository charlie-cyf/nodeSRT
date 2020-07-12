const SRTlib = require('SRT-util');

module.exports = function truncateString(string, maxLength) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/dashboard/src/utils/truncateString.js","paramsNumber":2},`);

  const separator = '...';
  if (string.length <= maxLength) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return string;
  } else if (maxLength <= separator.length) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return string.substr(0, maxLength);
  } else {
    const charsToShow = maxLength - separator.length;
    const frontChars = Math.ceil(charsToShow / 2);
    const backChars = Math.floor(charsToShow / 2);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return string.substr(0, frontChars) + separator + string.substr(string.length - backChars);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
