var SRTlib = require('SRT-util');
var jumpToCode = (function init() {
    SRTlib.send(`{ "anonymous": true, "function": "jumpToCode.init", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  var missingCoverageClasses = ['.cbranch-no', '.cstat-no', '.fstat-no'];
  var fileListingElements = ['td.pct.low'];
  var notSelector = ':not(' + missingCoverageClasses.join('):not(') + ') > ';
  var selector = fileListingElements.join(', ') + ', ' + notSelector + missingCoverageClasses.join(', ' + notSelector);
  var missingCoverageElements = document.querySelectorAll(selector);
  var currentIndex;
  function toggleClass(index) {
        SRTlib.send(`{ "anonymous": false, "function": "toggleClass", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    missingCoverageElements.item(currentIndex).classList.remove('highlighted');
    missingCoverageElements.item(index).classList.add('highlighted');
        SRTlib.send('], "end": "toggleClass"},');

  }
  function makeCurrent(index) {
        SRTlib.send(`{ "anonymous": false, "function": "makeCurrent", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    toggleClass(index);
    currentIndex = index;
    missingCoverageElements.item(index).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
        SRTlib.send('], "end": "makeCurrent"},');

  }
  function goToPrevious() {
        SRTlib.send(`{ "anonymous": false, "function": "goToPrevious", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var nextIndex = 0;
    if (typeof currentIndex !== 'number' || currentIndex === 0) {
      nextIndex = missingCoverageElements.length - 1;
    } else if (missingCoverageElements.length > 1) {
      nextIndex = currentIndex - 1;
    }
    makeCurrent(nextIndex);
        SRTlib.send('], "end": "goToPrevious"},');

  }
  function goToNext() {
        SRTlib.send(`{ "anonymous": false, "function": "goToNext", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var nextIndex = 0;
    if (typeof currentIndex === 'number' && currentIndex < missingCoverageElements.length - 1) {
      nextIndex = currentIndex + 1;
    }
    makeCurrent(nextIndex);
        SRTlib.send('], "end": "goToNext"},');

  }
    SRTlib.send('], "end": "jumpToCode.init"},');

  return function jump(event) {
        SRTlib.send(`{ "anonymous": true, "function": "jumpToCode.init.ReturnStatement.jump", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
        SRTlib.send('], "end": "jumpToCode.init.ReturnStatement.jump"},');

  };
    SRTlib.send('], "end": "jumpToCode.init"},');

})();
window.addEventListener('keydown', jumpToCode);
