var SRTlib = require('SRT-util');
class Upload {
  constructor(file, options) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.url = 'https://tus.endpoint/files/foo-bar';
        SRTlib.send("]},");

  }
}
module.exports = {
  Upload
};
