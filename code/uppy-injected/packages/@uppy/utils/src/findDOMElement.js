const SRTlib = require('SRT-util');

const isDOMElement = require('./isDOMElement');
/**
* Find a DOM element.
*
* @param {Node|string} element
* @returns {Node|null}
*/
module.exports = function findDOMElement(element, context = document) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":2},`);

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
