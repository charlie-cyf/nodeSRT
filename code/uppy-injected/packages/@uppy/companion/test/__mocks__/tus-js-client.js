const SRTlib = require('SRT-util');

class Upload {
  constructor(file, options) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Upload"}},`);

    this.url = 'https://tus.endpoint/files/foo-bar';
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
}
module.exports = {
  Upload
};
