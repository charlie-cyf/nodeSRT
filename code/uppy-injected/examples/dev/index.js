const SRTlib = require('SRT-util');

// Polyfills, primarily for testing in IE11
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
  // eslint-disable-next-line compat/compat
  navigator.serviceWorker.register('/sw.js').then(registration => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"navigator.serviceWorker.register.then.catch.navigator.serviceWorker.register.then","fileName":"${__filename}","paramsNumber":1},`);

    console.log('ServiceWorker registration successful with scope: ', registration.scope);
        SRTlib.send('{"type":"FUNCTIONEND","function":"navigator.serviceWorker.register.then.catch.navigator.serviceWorker.register.then"},');

  }).catch(error => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"navigator.serviceWorker.register.then.catch","fileName":"${__filename}","paramsNumber":1},`);

    console.log('Registration failed with ' + error);
        SRTlib.send('{"type":"FUNCTIONEND","function":"navigator.serviceWorker.register.then.catch"},');

  });
}
