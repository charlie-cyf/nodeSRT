var SRTlib = require('SRT-util');
const fs = require('fs');
class MockPurest {
  constructor(opts) {
        SRTlib.send(`{ "anonymous": false, "function": "MockPurest.constructor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const methodsToMock = ['query', 'select', 'where', 'qs', 'auth', 'json'];
    const httpMethodsToMock = ['get', 'put', 'post', 'options', 'head'];
    methodsToMock.forEach(item => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this[item] = () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "emptyKey"},');

        return this;
                SRTlib.send('], "end": "emptyKey"},');

      };
            SRTlib.send('], "end": "emptyKey2"},');

    });
    httpMethodsToMock.forEach(item => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this[item] = url => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this._requestUrl = url;
                SRTlib.send('], "end": "emptyKey3"},');

        return this;
                SRTlib.send('], "end": "emptyKey3"},');

      };
            SRTlib.send('], "end": "emptyKey4"},');

    });
    this.opts = opts;
        SRTlib.send('], "end": "constructor"},');

  }
  request(done) {
        SRTlib.send(`{ "anonymous": false, "function": "MockPurest.request", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (typeof done === 'function') {
      const responses = {
        dropbox: {
          default: {
            hash: '0a9f95a989dd4b1851f0103c31e304ce',
            user_email: 'foo@bar.com',
            email: 'foo@bar.com',
            entries: [{
              rev: 'f24234cd4'
            }]
          }
        },
        drive: {
          'files/README.md': {
            id: '0B2x-PmqQHSKdT013TE1VVjZ3TWs',
            mimeType: 'image/jpg',
            ownedByMe: true,
            permissions: [{
              role: 'owner',
              emailAddress: 'ife@bala.com'
            }],
            size: 300,
            kind: 'drive#file',
            etag: '"bcIyJ9A3gXa8oTYmz6nzAjQd-lY/eQc3WbZHkXpcItNyGKDuKXM_bNY"'
          },
          default: {
            kind: 'drive#fileList',
            etag: '"bcIyJ9A3gXa8oTYmz6nzAjQd-lY/eQc3WbZHkXpcItNyGKDuKXM_bNY"',
            files: [{
              id: '0B2x-PmqQHSKdT013TE1VVjZ3TWs',
              mimeType: 'image/jpg',
              ownedByMe: true,
              permissions: [{
                role: 'owner',
                emailAddress: 'ife@bala.com'
              }]
            }],
            size: 300
          }
        }
      };
      const providerResponses = responses[this.opts.providerName];
      const body = providerResponses[this._requestUrl] || providerResponses.default;
      done(null, {
        body,
        statusCode: 200
      }, body);
    }
        SRTlib.send('], "end": "request"},');

    return this;
        SRTlib.send('], "end": "request"},');

  }
  on(evt, cb) {
        SRTlib.send(`{ "anonymous": false, "function": "MockPurest.on", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (evt === 'response') {
      cb(fs.createReadStream('./README.md'));
    }
        SRTlib.send('], "end": "on"},');

    return this;
        SRTlib.send('], "end": "on"},');

  }
}
module.exports = () => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send('], "end": "emptyKey6"},');

  return options => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "emptyKey5"},');

    return new MockPurest(options);
        SRTlib.send('], "end": "emptyKey5"},');

  };
    SRTlib.send('], "end": "emptyKey6"},');

};
