var SRTlib = require('SRT-util');
module.exports = function copyToClipboard(textToCopy, fallbackString) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.copyToClipboard", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  fallbackString = fallbackString || 'Copy the URL below';
    SRTlib.send('], "end": "module.exports.copyToClipboard"},');

  return new Promise(resolve => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const textArea = document.createElement('textarea');
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
    const magicCopyFailed = () => {
            SRTlib.send(`{ "anonymous": false, "function": "magicCopyFailed", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      document.body.removeChild(textArea);
      window.prompt(fallbackString, textToCopy);
      resolve();
            SRTlib.send('], "end": "magicCopyFailed"},');

    };
    try {
      const successful = document.execCommand('copy');
      if (!successful) {
                SRTlib.send('], "end": "emptyKey"},');

        return magicCopyFailed('copy command unavailable');
      }
      document.body.removeChild(textArea);
            SRTlib.send('], "end": "emptyKey"},');

      return resolve();
    } catch (err) {
      document.body.removeChild(textArea);
            SRTlib.send('], "end": "emptyKey"},');

      return magicCopyFailed(err);
    }
        SRTlib.send('], "end": "emptyKey"},');

  });
    SRTlib.send('], "end": "module.exports.copyToClipboard"},');

};
