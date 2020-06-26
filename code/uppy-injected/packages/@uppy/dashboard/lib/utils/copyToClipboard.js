/**
* Copies text to clipboard by creating an almost invisible textarea,
* adding text there, then running execCommand('copy').
* Falls back to prompt() when the easy way fails (hello, Safari!)
* From http://stackoverflow.com/a/30810322
*
* @param {string} textToCopy
* @param {string} fallbackString
* @returns {Promise}
*/
var SRTlib = require('SRT-util');

module.exports = function copyToClipboard(textToCopy, fallbackString) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.copyToClipboard\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
  fallbackString = fallbackString || 'Copy the URL below';
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.copyToClipboard"},');
  return new Promise(function (resolve) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
    var textArea = document.createElement('textarea');
    textArea.setAttribute('style', {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '2em',
      height: '2em',
      padding: 0,
      border: 'none',
      outline: 'none',
      boxShadow: 'none',
      background: 'transparent'
    });
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();

    var magicCopyFailed = function magicCopyFailed() {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"magicCopyFailed\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
      document.body.removeChild(textArea);
      window.prompt(fallbackString, textToCopy);
      resolve();
      SRTlib.send('{"type":"FUNCTIONEND","function":"magicCopyFailed"},');
    };

    try {
      var successful = document.execCommand('copy');

      if (!successful) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
        return magicCopyFailed('copy command unavailable');
      }

      document.body.removeChild(textArea);
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
      return resolve();
    } catch (err) {
      document.body.removeChild(textArea);
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
      return magicCopyFailed(err);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
  });
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.copyToClipboard"},');
};