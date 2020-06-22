var SRTlib = require('SRT-util');
const fs = require('fs');
const path = require('path');
const DUMM_FILE = path.join(__dirname, 'fixtures/image.jpg');
class MyCustomProvider {
  constructor(options) {
        SRTlib.send(`{ "anonymous": false, "function": "MyCustomProvider.constructor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.authProvider = MyCustomProvider.authProvider;
        SRTlib.send('], "end": "constructor"},');

  }
  static get authProvider() {
        SRTlib.send(`{ "anonymous": false, "function": "MyCustomProvider.authProvider", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "authProvider"},');

    return 'mycustomprovider';
        SRTlib.send('], "end": "authProvider"},');

  }
  list(options, done) {
        SRTlib.send(`{ "anonymous": false, "function": "MyCustomProvider.list", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
        SRTlib.send('], "end": "list"},');

    return done(null, response, response.body);
        SRTlib.send('], "end": "list"},');

  }
  download({id, token}, onData) {
        SRTlib.send(`{ "anonymous": false, "function": "MyCustomProvider.download", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send('], "end": "download"},');

    return fs.readFile(DUMM_FILE, (err, data) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (err) console.error(err);
      onData(data);
            SRTlib.send('], "end": "emptyKey"},');

    });
        SRTlib.send('], "end": "download"},');

  }
  size({id, token}, done) {
        SRTlib.send(`{ "anonymous": false, "function": "MyCustomProvider.size", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send('], "end": "size"},');

    return done(fs.statSync(DUMM_FILE).size);
        SRTlib.send('], "end": "size"},');

  }
}
module.exports = MyCustomProvider;
