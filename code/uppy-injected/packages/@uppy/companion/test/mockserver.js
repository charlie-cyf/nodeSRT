var SRTlib = require('SRT-util');
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
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  req.session.grant = {
    response: {
      access_token: 'fake token'
    }
  };
  next();
    SRTlib.send("]},");

});
authServer.all(['*/send-token', '*/redirect'], (req, res, next) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  req.session.grant = {
    dynamic: {
      state: req.query.state || 'non-empty-value'
    }
  };
  next();
    SRTlib.send("]},");

});
authServer.use(app);
module.exports = {
  authServer
};
