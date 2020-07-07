const SRTlib = require('SRT-util');

var isDOMElement = require('./isDOMElement');
module.exports = function findDOMElement(element, context) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":2},`);

  if (context === void 0) {
    context = document;
  }
  if (typeof element === 'string') {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return context.querySelector(element);
  }
  if (isDOMElement(element)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return element;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
