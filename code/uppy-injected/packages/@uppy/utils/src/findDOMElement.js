var SRTlib = require('SRT-util');
const isDOMElement = require('./isDOMElement');
module.exports = function findDOMElement(element, context = document) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.findDOMElement","fileName":"${__filename}","paramsNumber":2},`);

  if (typeof element === 'string') {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.findDOMElement"},');

    return context.querySelector(element);
  }
  if (isDOMElement(element)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.findDOMElement"},');

    return element;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.findDOMElement"},');

};