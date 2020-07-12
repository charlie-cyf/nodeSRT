const SRTlib = require('SRT-util');

const EventEmitter = require('events').EventEmitter;
module.exports = () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/companion/src/server/emitter/default-emitter.js","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return new EventEmitter();
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
