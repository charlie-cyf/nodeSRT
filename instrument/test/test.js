const path = require('path')

var Instrumentor = require('../instrumentor')



// const testInstrumentor = new Instrumentor(path.resolve('./codeTest1'))
const testInstrumentor = new Instrumentor(path.resolve('./codeTest1'))

testInstrumentor.getInjected();