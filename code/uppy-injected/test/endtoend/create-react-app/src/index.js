const SRTlib = require('SRT-util');

import 'es6-shim';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const errors = [];
window.onerror = err => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"window.onerror","fileName":"${__filename}","paramsNumber":1},`);

  errors.push(err);
    SRTlib.send('{"type":"FUNCTIONEND","function":"window.onerror"},');

};
window.errors = errors;
ReactDOM.render(<App />, document.getElementById('root'));
