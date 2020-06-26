const SRTlib = require('SRT-util');
const nodeEmitter = require('./default-emitter');
const redisEmitter = require('./redis-emitter');
let emitter;
/**
* Singleton event emitter that is shared between modules throughout the lifetime of the server.
* Used to transmit events (such as progress, upload completion) from controllers,
* such as the Google Drive 'get' controller, along to the client.
*/
module.exports = redisUrl => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);
    if (!emitter) {
        emitter = redisUrl ? redisEmitter(redisUrl) : nodeEmitter();
    }
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
    return emitter;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
};
