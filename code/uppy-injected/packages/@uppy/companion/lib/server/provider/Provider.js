var SRTlib = require('SRT-util');
class Provider {
  constructor(options) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Provider"}},`);

    this.needsCookieAuth = false;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

    return this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  static getExtraConfig() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getExtraConfig","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getExtraConfig"},');

    return {};
        SRTlib.send('{"type":"FUNCTIONEND","function":"getExtraConfig"},');

  }
  list(options, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"list","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

    throw new Error('method not implemented');
        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

  }
  download(options, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"download","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"download"},');

    throw new Error('method not implemented');
        SRTlib.send('{"type":"FUNCTIONEND","function":"download"},');

  }
  thumbnail(options, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"thumbnail","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"thumbnail"},');

    throw new Error('method not implemented');
        SRTlib.send('{"type":"FUNCTIONEND","function":"thumbnail"},');

  }
  size(options, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"size","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"size"},');

    throw new Error('method not implemented');
        SRTlib.send('{"type":"FUNCTIONEND","function":"size"},');

  }
  static get authProvider() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"authProvider","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"authProvider"},');

    return '';
        SRTlib.send('{"type":"FUNCTIONEND","function":"authProvider"},');

  }
}
module.exports = Provider;