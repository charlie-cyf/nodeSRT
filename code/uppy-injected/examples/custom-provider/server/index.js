const SRTlib = require('SRT-util');

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
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"app.use","fileName":"/examples/custom-provider/server/index.js","paramsNumber":3},`);

  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, Content-Type, Accept');
  next();
    SRTlib.send('{"type":"FUNCTIONEND","function":"app.use"},');

});
app.get('/', (req, res) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"app.get","fileName":"/examples/custom-provider/server/index.js","paramsNumber":2},`);

  res.setHeader('Content-Type', 'text/plain');
  res.send('Welcome to my uppy companion service');
    SRTlib.send('{"type":"FUNCTIONEND","function":"app.get"},');

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
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"app.get###2","fileName":"/examples/custom-provider/server/index.js","paramsNumber":2},`);

  res.redirect(`http://localhost:3020/mycustomprovider/callback?state=${req.query.state}&access_token=randombytes`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"app.get###2"},');

});
app.use(uppy.app(uppyOptions));
app.use((req, res, next) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"app.use###2","fileName":"/examples/custom-provider/server/index.js","paramsNumber":3},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"app.use###2"},');

  return res.status(404).json({
    message: 'Not Found'
  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"app.use###2"},');

});
app.use((err, req, res, next) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"app.use###3","fileName":"/examples/custom-provider/server/index.js","paramsNumber":4},`);

  console.error('\x1b[31m', err.stack, '\x1b[0m');
  res.status(err.status || 500).json({
    message: err.message,
    error: err
  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"app.use###3"},');

});
uppy.socket(app.listen(3020), uppyOptions);
console.log('Welcome to Companion!');
console.log(`Listening on http://0.0.0.0:${3020}`);
