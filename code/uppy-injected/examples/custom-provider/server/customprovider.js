var SRTlib = require('SRT-util');
const fs = require('fs');
const path = require('path');
const DUMM_FILE = path.join(__dirname, 'fixtures/image.jpg');
class MyCustomProvider {
  constructor(options) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.authProvider = MyCustomProvider.authProvider;
        SRTlib.send("]},");

  }
  static get authProvider() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return 'mycustomprovider';
        SRTlib.send("]},");

  }
  list(options, done) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
        SRTlib.send("]},");

    return done(null, response, response.body);
        SRTlib.send("]},");

  }
  download({id, token}, onData) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send("]},");

    return fs.readFile(DUMM_FILE, (err, data) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (err) console.error(err);
      onData(data);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  size({id, token}, done) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send("]},");

    return done(fs.statSync(DUMM_FILE).size);
        SRTlib.send("]},");

  }
}
module.exports = MyCustomProvider;
