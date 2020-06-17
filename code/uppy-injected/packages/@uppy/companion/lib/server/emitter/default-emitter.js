var SRTlib = require('SRT-util');
const EventEmitter = require('events').EventEmitter;
module.exports = () => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send("]},");

  return new EventEmitter();
    SRTlib.send("]},");

};
