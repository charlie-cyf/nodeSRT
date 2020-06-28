const SRTlib = require('SRT-util');

const {app} = require('../src/standalone');
const express = require('express');
const session = require('express-session');
const authServer = express();
authServer.use(session({
  secret: 'grant',
  resave: true,
  saveUninitialized: true
}));
authServer.all('*/callback', (req, res, next) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"authServer.all","fileName":"${__filename}","paramsNumber":3},`);

  req.session.grant = {
    response: {
      access_token: 'fake token'
    }
  };
  next();
    SRTlib.send('{"type":"FUNCTIONEND","function":"authServer.all"},');

});
authServer.all(['*/send-token', '*/redirect'], (req, res, next) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"authServer.all2","fileName":"${__filename}","paramsNumber":3},`);

  req.session.grant = {
    dynamic: {
      state: req.query.state || 'non-empty-value'
    }
  };
  next();
    SRTlib.send('{"type":"FUNCTIONEND","function":"authServer.all2"},');

});
authServer.use(app);
module.exports = {
  authServer
};
