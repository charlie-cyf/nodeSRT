const SRTlib = require('SRT-util');

const EventEmitter = require('events').EventEmitter;
module.exports = () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return new EventEmitter();
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
