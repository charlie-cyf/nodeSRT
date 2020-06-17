const SRTlib = require('SRT-util')


axios.get('/test', function(){
    return 'cb'
}).then(res => {
    return res.body;
}).catch(err => {
    return err;
})

function fA() {
    SRTlib.send(`{ "function": \"${arguments.callee.name}\", 
                   "fileName": \"${__filename.split('/').pop()}\", 
                   "arguments": ${JSON.stringify(arguments)},
                   "calls" : [`);
    fB(100)
    SRTlib.send(']}')
}

function fB(x) {
    SRTlib.send(`{ "function": \"${arguments.callee.name}\", 
                   "fileName": \"${__filename.split('/').pop()}\", 
                   "arguments": ${JSON.stringify(arguments)},
                   "calls" : [`);
    // let traceData = new Error().stack;
    // console.log("trace", traceData)
    // console.log("caller name", arguments.callee.caller.name)
    // console.log("callee name", arguments.callee.name)
    // console.log("callee name", arguments.callee)
    // console.log("arguments", JSON.stringify(arguments))
    // console.log("filename", __filename.split('/').pop())
    let r = 1 + 1;
    return 98;
    SRTlib.send(']}')
}

const fC = function () {
    SRTlib.send(`{ "function": \"${arguments.callee.name}\", 
                   "fileName": \"${__filename.split('/').pop()}\", 
                   "arguments": ${JSON.stringify(arguments)},
                   "calls" : [`);
    let r = 1 + 2;
    SRTlib.send(']}')
}


SRTlib.startLogger(__filename, 'http://localhost:8888/instrument-message')
fA()
SRTlib.endLogger()

SRTlib.startLogger(__filename, 'http://localhost:8888/instrument-message')
fB(0)
SRTlib.endLogger()

// ! arguments throw error in annonymous function
// ! this case need to be handled by AST-walk
SRTlib.startLogger(__filename, 'http://localhost:8888/instrument-message');
((x) => {
    SRTlib.send(`{ "function": \"${arguments.callee.name}\", 
                   "fileName": \"${__filename.split('/').pop()}\", 
                   "calls" : [`);
    let t = 2 + 1;
    SRTlib.send(']}')
})(1);
SRTlib.endLogger();

SRTlib.startLogger(__filename, 'http://localhost:8888/instrument-message');
fC();
SRTlib.endLogger();


(() => { 
    console.log(new Error().stack)
})()
