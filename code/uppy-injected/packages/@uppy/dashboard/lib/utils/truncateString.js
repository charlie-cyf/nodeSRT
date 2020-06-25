/**
* Truncates a string to the given number of chars (maxLength) by inserting '...' in the middle of that string.
* Partially taken from https://stackoverflow.com/a/5723274/3192470.
*
* @param {string} string - string to be truncated
* @param {number} maxLength - maximum size of the resulting string
* @returns {string}
*/
const SRTlib = require('SRT-util');
module.exports = function truncateString(string, maxLength) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.truncateString","fileName":"${__filename}","paramsNumber":2},`);

  // Return original string if it's already shorter than maxLength
  var separator = '...';
  if (string.length <= maxLength) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.truncateString"},');

    // Return truncated substring without '...' if string can't be meaningfully truncated
    return string;
  } else if (maxLength <= separator.length) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.truncateString"},');

    // Return truncated string divided in half by '...'
    return string.substr(0, maxLength);
  } else {
    var charsToShow = maxLength - separator.length;
    var frontChars = Math.ceil(charsToShow / 2);
    var backChars = Math.floor(charsToShow / 2);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.truncateString"},');

    return string.substr(0, frontChars) + separator + string.substr(string.length - backChars);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.truncateString"},');

};
