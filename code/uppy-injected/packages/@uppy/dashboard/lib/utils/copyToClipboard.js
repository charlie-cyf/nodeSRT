var SRTlib = require('SRT-util');
module.exports = function copyToClipboard(textToCopy, fallbackString) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.copyToClipboard", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  fallbackString = fallbackString || 'Copy the URL below';
    SRTlib.send("]},");

  return new Promise(function (resolve) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports.copyToClipboard.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.copyToClipboard.ReturnStatement.magicCopyFailed.magicCopyFailed", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      document.body.removeChild(textArea);
      window.prompt(fallbackString, textToCopy);
      resolve();
            SRTlib.send("]},");

    };
    try {
      var successful = document.execCommand('copy');
      if (!successful) {
                SRTlib.send("]},");

        return magicCopyFailed('copy command unavailable');
      }
      document.body.removeChild(textArea);
            SRTlib.send("]},");

      return resolve();
    } catch (err) {
      document.body.removeChild(textArea);
            SRTlib.send("]},");

      return magicCopyFailed(err);
    }
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

};
