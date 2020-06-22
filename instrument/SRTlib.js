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
        if(this.started) return;
        this.started = true;
        this.basePath = base;
        this.message = '';
        this.endPontUrl = url
        this.logFile = base.split('/').pop() + '.log';
    }

    static send(msg){
        if(this.started){
            this.message = this.message+msg;
        } else {
            console.warn('received message when SRTlib logger not started!',msg)
        }
    }

    static endLogger(){
        if(!this.started){
            console.warn('endlogger when SRTlib is not started!')
        }
        this.started = false;

        if(this.message.length != 0){
            axios.post(this.endPontUrl, {
                fileName: this.logFile,
                msg: this.message
            }).then(res => {
                if(res.status < 400){
                    this.message = ''
                } else {
                    new Error('fail to send to log server!');
                }
            }).catch(err => {
                new Error('fail to send to log server!', err);
            })
        }
    }

}