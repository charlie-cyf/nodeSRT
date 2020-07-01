const SRTlib = require('SRT-util');

module.exports = function copyToClipboard(textToCopy, fallbackString) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":2},`);

  fallbackString = fallbackString || 'Copy the URL below';
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return new Promise(resolve => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.copyToClipboard.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":1},`);

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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"magicCopyFailed","fileName":"${__filename}","paramsNumber":0},`);

      document.body.removeChild(textArea);
      window.prompt(fallbackString, textToCopy);
      resolve();
            SRTlib.send('{"type":"FUNCTIONEND","function":"magicCopyFailed"},');

    };
    try {
      const successful = document.execCommand('copy');
      if (!successful) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.copyToClipboard.ReturnStatement.NewExpression"},');

        return magicCopyFailed('copy command unavailable');
      }
      document.body.removeChild(textArea);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.copyToClipboard.ReturnStatement.NewExpression"},');

      return resolve();
    } catch (err) {
      document.body.removeChild(textArea);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.copyToClipboard.ReturnStatement.NewExpression"},');

      return magicCopyFailed(err);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.copyToClipboard.ReturnStatement.NewExpression"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
