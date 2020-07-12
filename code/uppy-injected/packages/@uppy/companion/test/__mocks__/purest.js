const SRTlib = require('SRT-util');

const fs = require('fs');
class MockPurest {
  constructor(opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/companion/test/__mocks__/purest.js","paramsNumber":1,"classInfo":{"className":"MockPurest"}},`);

    const methodsToMock = ['query', 'select', 'where', 'qs', 'auth', 'json'];
    const httpMethodsToMock = ['get', 'put', 'post', 'options', 'head'];
    methodsToMock.forEach(item => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"methodsToMock.forEach","fileName":"/packages/@uppy/companion/test/__mocks__/purest.js","paramsNumber":1},`);

      this[item] = () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"item","fileName":"/packages/@uppy/companion/test/__mocks__/purest.js","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"item"},');

        return this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"item"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"methodsToMock.forEach"},');

    });
    httpMethodsToMock.forEach(item => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"httpMethodsToMock.forEach","fileName":"/packages/@uppy/companion/test/__mocks__/purest.js","paramsNumber":1},`);

      this[item] = url => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"item###2","fileName":"/packages/@uppy/companion/test/__mocks__/purest.js","paramsNumber":1},`);

        this._requestUrl = url;
                SRTlib.send('{"type":"FUNCTIONEND","function":"item###2"},');

        return this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"item###2"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"httpMethodsToMock.forEach"},');

    });
    this.opts = opts;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  request(done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"request","fileName":"/packages/@uppy/companion/test/__mocks__/purest.js","paramsNumber":1,"classInfo":{"className":"MockPurest"}},`);

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"request"},');

    return this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"request"},');

  }
  on(evt, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"on","fileName":"/packages/@uppy/companion/test/__mocks__/purest.js","paramsNumber":2,"classInfo":{"className":"MockPurest"}},`);

    if (evt === 'response') {
      cb(fs.createReadStream('./README.md'));
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"on"},');

    return this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"on"},');

  }
}
module.exports = () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/companion/test/__mocks__/purest.js","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return options => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"/packages/@uppy/companion/test/__mocks__/purest.js","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

    return new MockPurest(options);
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
