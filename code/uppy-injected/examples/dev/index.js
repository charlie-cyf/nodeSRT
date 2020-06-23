var SRTlib = require('SRT-util');
require('es6-promise/auto');
require('whatwg-fetch');
const DragDrop = require('./DragDrop.js');
const Dashboard = require('./Dashboard.js');
switch (window.location.pathname.toLowerCase()) {
  case '/':
  case '/dashboard.html':
    Dashboard();
    break;
  case '/dragdrop.html':
    DragDrop();
    break;
}
if (('serviceWorker' in navigator)) {
  navigator.serviceWorker.register('/sw.js').then(registration => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

    console.log('ServiceWorker registration successful with scope: ', registration.scope);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  }).catch(error => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

    console.log('Registration failed with ' + error);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  });
}