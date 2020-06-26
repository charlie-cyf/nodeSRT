/**
* Provider interface defines the specifications of any provider implementation
*/
const SRTlib = require('SRT-util');
class Provider {
    constructor(options) {
        /**
        *
        * @param {object} options
        */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Provider"}},`);
        this.needsCookieAuth = false;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
        return this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    }
    static getExtraConfig() {
        /**
        * config to extend the grant config
        */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getExtraConfig","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Provider"}},`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"getExtraConfig"},');
        return {};
        SRTlib.send('{"type":"FUNCTIONEND","function":"getExtraConfig"},');
    }
    list(options, cb) {
        /**
        * list the files and folders in the provider account
        * @param {object} options
        * @param {function} cb
        */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"list","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Provider"}},`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');
        throw new Error('method not implemented');
        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');
    }
    download(options, cb) {
        /**
        * download a certain file from the provider account
        * @param {object} options
        * @param {function} cb
        */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"download","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Provider"}},`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"download"},');
        throw new Error('method not implemented');
        SRTlib.send('{"type":"FUNCTIONEND","function":"download"},');
    }
    thumbnail(options, cb) {
        /**
        * return a thumbnail for a provider file
        * @param {object} options
        * @param {function} cb
        */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"thumbnail","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Provider"}},`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"thumbnail"},');
        throw new Error('method not implemented');
        SRTlib.send('{"type":"FUNCTIONEND","function":"thumbnail"},');
    }
    size(options, cb) {
        /**
        * get the size of a certain file in the provider account
        * @param {object} options
        * @param {function} cb
        */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"size","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Provider"}},`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"size"},');
        throw new Error('method not implemented');
        SRTlib.send('{"type":"FUNCTIONEND","function":"size"},');
    }
    static get authProvider() {
        /**
        * @returns {string}
        */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"authProvider","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Provider"}},`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"authProvider"},');
        return '';
        SRTlib.send('{"type":"FUNCTIONEND","function":"authProvider"},');
    }
}
module.exports = Provider;
