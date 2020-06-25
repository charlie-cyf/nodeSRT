/*eslint-disable*/
const SRTlib = require('SRT-util');
var jumpToCode = (function init() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"jumpToCode.init","fileName":"${__filename}","paramsNumber":0},`);

  // Classes of code we would like to highlight in the file view
  var missingCoverageClasses = ['.cbranch-no', '.cstat-no', '.fstat-no'];
  // Elements to highlight in the file listing view
  var fileListingElements = ['td.pct.low'];
  // We don't want to select elements that are direct descendants of another match
  // becomes `:not(a):not(b) > `
  var notSelector = ':not(' + missingCoverageClasses.join('):not(') + ') > ';
  // Selecter that finds elements on the page to which we can jump
  // becomes `:not(a):not(b) > a, :not(a):not(b) > b`
  var selector = fileListingElements.join(', ') + ', ' + notSelector + missingCoverageClasses.join(', ' + notSelector);
  // The NodeList of matching elements
  var missingCoverageElements = document.querySelectorAll(selector);
  var currentIndex;
  function toggleClass(index) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"toggleClass","fileName":"${__filename}","paramsNumber":1},`);

    missingCoverageElements.item(currentIndex).classList.remove('highlighted');
    missingCoverageElements.item(index).classList.add('highlighted');
        SRTlib.send('{"type":"FUNCTIONEND","function":"toggleClass","paramsNumber":1},');

  }
  function makeCurrent(index) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"makeCurrent","fileName":"${__filename}","paramsNumber":1},`);

    toggleClass(index);
    currentIndex = index;
    missingCoverageElements.item(index).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"makeCurrent","paramsNumber":1},');

  }
  function goToPrevious() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"goToPrevious","fileName":"${__filename}","paramsNumber":0},`);

    var nextIndex = 0;
    if (typeof currentIndex !== 'number' || currentIndex === 0) {
      nextIndex = missingCoverageElements.length - 1;
    } else if (missingCoverageElements.length > 1) {
      nextIndex = currentIndex - 1;
    }
    makeCurrent(nextIndex);
        SRTlib.send('{"type":"FUNCTIONEND","function":"goToPrevious","paramsNumber":0},');

  }
  function goToNext() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"goToNext","fileName":"${__filename}","paramsNumber":0},`);

    var nextIndex = 0;
    if (typeof currentIndex === 'number' && currentIndex < missingCoverageElements.length - 1) {
      nextIndex = currentIndex + 1;
    }
    makeCurrent(nextIndex);
        SRTlib.send('{"type":"FUNCTIONEND","function":"goToNext","paramsNumber":0},');

  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"jumpToCode.init"},');

  return function jump(event) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"jumpToCode.init.ReturnStatement.jump","fileName":"${__filename}","paramsNumber":1},`);

    switch (event.which) {
      // n
      case 78:
      case 74:
        // j
        goToNext();
        break;
      // b
      case 66:
      // k
      case 75:
      case 80:
        // p
        goToPrevious();
        break;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"jumpToCode.init.ReturnStatement.jump"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"jumpToCode.init"},');

})();
window.addEventListener('keydown', jumpToCode);
