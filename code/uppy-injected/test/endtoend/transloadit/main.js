var SRTlib = require('SRT-util');
require('es6-promise/auto');
require('whatwg-fetch');
const Uppy = require('@uppy/core');
const Dashboard = require('@uppy/dashboard');
const Transloadit = require('@uppy/transloadit');
function initUppyTransloadit(transloaditKey) {
    SRTlib.send(`{ "anonymous": false, "function": "initUppyTransloadit", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  var uppyTransloadit = Uppy({
    id: 'uppyTransloadit',
    debug: true,
    autoProceed: true
  });
  uppyTransloadit.use(Dashboard, {
    target: '#uppy-transloadit',
    inline: true
  }).use(Transloadit, {
    service: 'https://api2-ap-southeast-1.transloadit.com',
    params: {
      auth: {
        key: transloaditKey
      },
      steps: {
        crop_thumbed: {
          use: [':original'],
          robot: '/image/resize',
          height: 100,
          resize_strategy: 'crop',
          width: 100
        }
      }
    },
    waitForEncoding: true
  });
  uppyTransloadit.on('transloadit:result', (stepName, result) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    console.log('Result here ====>', stepName, result);
    console.log('Cropped image url is here ====>', result.url);
    var img = new Image();
    img.onload = function () {
            SRTlib.send(`{ "anonymous": true, "function": "img.onload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var result = document.createElement('div');
      result.setAttribute('id', 'uppy-result');
      result.textContent = 'ok';
      document.body.appendChild(result);
            SRTlib.send('], "end": "img.onload"},');

    };
    img.src = result.url;
        SRTlib.send('], "end": "emptyKey"},');

  });
    SRTlib.send('], "end": "initUppyTransloadit"},');

}
window.initUppyTransloadit = initUppyTransloadit;
