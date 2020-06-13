const axios = require('axios')

module.exports = class SRTlib {
    // message to send to backend
    static message;

    static basePath;

    static logFile;

    static threshold = 100;

    static endPontUrl;

    // call this function to initialize the logger
    /*
    *   param: 
    *       base: absolute path to original project
    */
    static startLogger(base, url){
        this.basePath = base;
        this.message = '';
        this.endPontUrl = url
        this.logFile = base.split('/').pop() + '.log';
    }

    static send(msg){
        this.message = this.message+msg;
    }

    static endLogger(){
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