const path = require('path')

var Instrumentor = require('../instrumentor')
const {generate, copyDir} = require("../../ASTgenerater");

const codebase = './codeTest2'
const excepts = [
    './companion/src/server/Uploader.js',
    './companion/src/server/helpers/jwt.js',
    './companion/src/standalone/index.js',
]


generate(codebase, excepts)
// const testInstrumentor = new Instrumentor(path.resolve('./codeTest1'))

const testInstrumentor = new Instrumentor(path.resolve(codebase))

testInstrumentor.getInjected();