var SRTlib = require('SRT-util');
const express = require('express');
const uppy = require('../../../packages/@uppy/companion');
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
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, Content-Type, Accept');
  next();
    SRTlib.send('], "end": "emptyKey"},');

});
app.get('/', (req, res) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  res.setHeader('Content-Type', 'text/plain');
  res.send('Welcome to my uppy companion service');
    SRTlib.send('], "end": "emptyKey2"},');

});
const uppyOptions = {
  providerOptions: {
    google: {
      key: 'your google key',
      secret: 'your google secret'
    }
  },
  customProviders: {
    mycustomprovider: {
      config: {
        authorize_url: 'http://localhost:3020/oauth/authorize',
        access_url: 'http://localhost:3020/oauth/token',
        oauth: 2,
        key: '***',
        secret: '**',
        scope: ['read', 'write']
      },
      module: require('./customprovider')
    }
  },
  server: {
    host: 'localhost:3020',
    protocol: 'http'
  },
  filePath: './output',
  secret: 'some-secret',
  debug: true
};
app.get('/oauth/authorize', (req, res) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  res.redirect(`http://localhost:3020/mycustomprovider/callback?state=${req.query.state}&access_token=randombytes`);
    SRTlib.send('], "end": "emptyKey3"},');

});
app.use(uppy.app(uppyOptions));
app.use((req, res, next) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    SRTlib.send('], "end": "emptyKey4"},');

  return res.status(404).json({
    message: 'Not Found'
  });
    SRTlib.send('], "end": "emptyKey4"},');

});
app.use((err, req, res, next) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

  console.error('\x1b[31m', err.stack, '\x1b[0m');
  res.status(err.status || 500).json({
    message: err.message,
    error: err
  });
    SRTlib.send('], "end": "emptyKey5"},');

});
uppy.socket(app.listen(3020), uppyOptions);
console.log('Welcome to Companion!');
console.log(`Listening on http://0.0.0.0:${3020}`);
