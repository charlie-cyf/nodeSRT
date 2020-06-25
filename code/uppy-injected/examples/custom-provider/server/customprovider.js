const SRTlib = require('SRT-util');
const fs = require('fs');
const path = require('path');
const DUMM_FILE = path.join(__dirname, 'fixtures/image.jpg');
/**
* an example of a custom provider module. It implements @uppy/companion's Provider interface
*/
class MyCustomProvider {
  constructor(options) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"MyCustomProvider"}},`);

    this.authProvider = MyCustomProvider.authProvider;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  static get authProvider() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"authProvider","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"MyCustomProvider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"authProvider"},');

    return 'mycustomprovider';
        SRTlib.send('{"type":"FUNCTIONEND","function":"authProvider"},');

  }
  list(options, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"list","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"MyCustomProvider"}},`);

    const response = {
      body: {
        entries: [{
          name: 'file1.jpg'
        }, {
          name: 'file2.jpg'
        }, {
          name: 'file3.jpg'
        }]
      }
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

    return done(null, response, response.body);
        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

  }
  download({id, token}, onData) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"download","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"MyCustomProvider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"download"},');

    return fs.readFile(DUMM_FILE, (err, data) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":2},`);

      if (err) console.error(err);
      onData(data);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"download"},');

  }
  size({id, token}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"size","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"MyCustomProvider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"size"},');

    return done(fs.statSync(DUMM_FILE).size);
        SRTlib.send('{"type":"FUNCTIONEND","function":"size"},');

  }
}
module.exports = MyCustomProvider;
