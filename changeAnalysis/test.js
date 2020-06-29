const fs = require('fs');
const getDiffs = require('./index').getDiffs;
const { Parser } = require("acorn")

const before = JSON.parse(fs.readFileSync('./sample/multipartUploader-2ab00ab.js.json'))
const after = JSON.parse(fs.readFileSync('./sample/multipartUploader-988a7.js.json'));

// const before = Parser.parse("const a = 1; const b = 2; log(a+b)")
// const after = Parser.parse("const a = 1; const b = 1; log(a+b)")

const res = getDiffs(before, after)
console.log(JSON.stringify(res))