const SRTlib = require('SRT-util');
const express = require('express');
const companion = require('../../../packages/@uppy/companion');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
app.use(bodyParser.json());
app.use(session({
  secret: 'some-secret',
  resave: true,
  saveUninitialized: true
}));
app.use((req, res, next) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":3},`);

  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, Content-Type, Accept');
  next();
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

});
// Routes
app.get('/', (req, res) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":2},`);

  res.setHeader('Content-Type', 'text/plain');
  res.send('Welcome to Companion');
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

});
// initialize uppy
const uppyOptions = {
  providerOptions: {
    google: {
      key: 'your google key',
      secret: 'your google secret'
    },
    instagram: {
      key: 'your instagram key',
      secret: 'your instagram secret'
    }
    // you can also add options for dropbox here
  },
  server: {
    host: 'localhost:3020',
    protocol: 'http'
  },
  filePath: './output',
  secret: 'some-secret',
  debug: true
};
app.use(companion.app(uppyOptions));
// handle 404
app.use((req, res, next) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":3},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

  return res.status(404).json({
    message: 'Not Found'
  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

});
// handle server errors
app.use((err, req, res, next) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":4},`);

  console.error('\x1b[31m', err.stack, '\x1b[0m');
  res.status(err.status || 500).json({
    message: err.message,
    error: err
  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

});
companion.socket(app.listen(3020), uppyOptions);
console.log('Welcome to Companion!');
console.log(`Listening on http://0.0.0.0:${3020}`);
