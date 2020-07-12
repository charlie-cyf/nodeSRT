const SRTlib = require('SRT-util');

const isDOMElement = require('./isDOMElement');
module.exports = function findAllDOMElements(element) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/utils/src/findAllDOMElements.js","paramsNumber":1},`);

  if (typeof element === 'string') {
    const elements = [].slice.call(document.querySelectorAll(element));
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return elements.length > 0 ? elements : null;
  }
  if (typeof element === 'object' && isDOMElement(element)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return [element];
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
