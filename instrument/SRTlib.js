const axios = require('axios')


module.exports = class SRTlib {
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
            console.warn('received message when SRTlib logger not started!', msg)
            axios.post('http://localhost:8888/e2e-message', {
                meg: msg
            }).then(res => {
                if (res.status >= 400) 
                    new Error ('e2e message send failed!', res.error)
            }).catch(err => {
                new Error('e2e message send failed!', err)
            })
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