function fA(){
    fB(100)
}

function fB(x){
    let traceData = new Error().stack;
    console.log("trace", traceData)
    console.log("caller name", arguments.callee.caller.name)
    console.log("callee name", arguments.callee.name)
    console.log("callee name", arguments.callee)
    console.log("arguments", JSON.stringify(arguments))
    console.log("filename", __filename)
    return 98;
}

fA()