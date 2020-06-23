var SRTlib = require('SRT-util');
const isDOMElement = require('./isDOMElement');
module.exports = function findAllDOMElements(element) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.findAllDOMElements","fileName":"${__filename}","paramsNumber":1},`);

  if (typeof element === 'string') {
    const elements = [].slice.call(document.querySelectorAll(element));
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.findAllDOMElements"},');

    return elements.length > 0 ? elements : null;
  }
  if (typeof element === 'object' && isDOMElement(element)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.findAllDOMElements"},');

    return [element];
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.findAllDOMElements"},');

};
