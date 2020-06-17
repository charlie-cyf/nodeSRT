var SRTlib = require('SRT-util');
module.exports = () => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send("]},");

  return {
    google: {
      transport: 'session',
      scope: ['https://www.googleapis.com/auth/drive.readonly'],
      callback: '/drive/callback'
    },
    dropbox: {
      transport: 'session',
      authorize_url: 'https://www.dropbox.com/oauth2/authorize',
      access_url: 'https://api.dropbox.com/oauth2/token',
      callback: '/dropbox/callback'
    },
    instagram: {
      transport: 'session',
      callback: '/instagram/callback'
    },
    facebook: {
      transport: 'session',
      scope: ['email', 'user_photos'],
      callback: '/facebook/callback'
    },
    microsoft: {
      transport: 'session',
      scope: ['files.read.all', 'offline_access', 'User.Read'],
      callback: '/onedrive/callback'
    }
  };
    SRTlib.send("]},");

};
