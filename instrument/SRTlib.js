const axios = require('axios')


module.exports = class SRTlib {
    // message to send to backend
    static message;

    static basePath;

    static logFile;

    static threshold = 100;

    static endPontUrl;

    static started = false;

    // call this function to initialize the logger
    /*
    *   param: 
    *       base: absolute path to original project
    */
    static startLogger(base, url){
        if(SRTlib.started) return;
        SRTlib.started = true;
        SRTlib.basePath = base;
        SRTlib.message = '';
        SRTlib.endPontUrl = url
        SRTlib.logFile = base.split('/').pop() + '.log';
    }

    static send(msg){
        if(SRTlib.endPontUrl && SRTlib.basePath){
            SRTlib.message = SRTlib.message+msg;
        } else {
            console.warn('received message when SRTlib logger not started!')
        }
    }

    static async endLogger(){
        if(!SRTlib.started){
            console.warn('endlogger when SRTlib is not started!')
        }
        SRTlib.started = false;

        if(SRTlib.message.length !== 0){
            const msg = SRTlib.message;
            SRTlib.message = '';
            await axios.post(SRTlib.endPontUrl, {
                fileName: SRTlib.logFile,
                msg: msg
            }).then(res => {
                if(res.status < 400){
                    // SRTlib.message = ''
                } else {
                    new Error('fail to send to log server!');
                }
            }).catch(err => {
                new Error('fail to send to log server!', err);
            })
        }
    }

}