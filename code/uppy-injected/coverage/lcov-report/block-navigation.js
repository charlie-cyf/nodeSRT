const SRTlib = require('SRT-util');

var jumpToCode = (function init() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"jumpToCode","fileName":"${__filename}","paramsNumber":0},`);

  var missingCoverageClasses = ['.cbranch-no', '.cstat-no', '.fstat-no'];
  var fileListingElements = ['td.pct.low'];
  var notSelector = ':not(' + missingCoverageClasses.join('):not(') + ') > ';
  var selector = fileListingElements.join(', ') + ', ' + notSelector + missingCoverageClasses.join(', ' + notSelector);
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
    SRTlib.send('{"type":"FUNCTIONEND","function":"jumpToCode"},');

  return function jump(event) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"jumpToCode.init.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

    switch (event.which) {
      case 78:
      case 74:
        goToNext();
        break;
      case 66:
      case 75:
      case 80:
        goToPrevious();
        break;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"jumpToCode.init.ReturnStatement"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"jumpToCode"},');

})();
window.addEventListener('keydown', jumpToCode);
