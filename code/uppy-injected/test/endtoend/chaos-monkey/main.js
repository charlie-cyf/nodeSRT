var SRTlib = require('SRT-util');
require('es6-promise/auto');
require('whatwg-fetch');
const Uppy = require('@uppy/core');
const Dashboard = require('@uppy/dashboard');
const Tus = require('@uppy/tus');
const isOnTravis = !!(process.env.TRAVIS && process.env.CI);
const endpoint = isOnTravis ? 'http://companion.test:1081' : 'http://localhost:1081';
let id = 0;
window.setup = function (options) {
    SRTlib.send(`{ "anonymous": true, "function": "window.setup", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  id += 1;
  const uppy = Uppy({
    id: `uppy${id}`,
    debug: true
  });
  uppy.use(Dashboard, {
    inline: true,
    target: '#dash'
  });
  uppy.use(Tus, {
    endpoint: `${endpoint}/files/`,
    limit: options.limit
  });
  uppy.on('file-added', file => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    randomColorImage(function (blob) {
            SRTlib.send(`{ "anonymous": true, "function": "randomColorImage", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      uppy.setFileState(file.id, {
        preview: URL.createObjectURL(blob)
      });
            SRTlib.send('], "end": "randomColorImage"},');

    });
        SRTlib.send('], "end": "emptyKey"},');

  });
    SRTlib.send('], "end": "window.setup"},');

  return uppy;
    SRTlib.send('], "end": "window.setup"},');

};
function randomColorImage(callback) {
    SRTlib.send(`{ "anonymous": false, "function": "randomColorImage", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const canvas = document.createElement('canvas');
  canvas.width = 140;
  canvas.height = 140;
  const context = canvas.getContext('2d');
  context.fillStyle = ('#xxxxxx').replace(/x/g, () => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "emptyKey2"},');

    return ('0123456789ABCDEF')[Math.floor(Math.random() * 16)];
        SRTlib.send('], "end": "emptyKey2"},');

  });
  context.fillRect(0, 0, 140, 140);
  canvas.toBlob(callback);
    SRTlib.send('], "end": "randomColorImage"},');

}
