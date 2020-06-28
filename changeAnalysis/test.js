const objDiff = require('object-diff-ast');
const fs = require('fs');

const before = JSON.parse(fs.readFileSync('./sample/multipartUploader-2ab00ab.js.json'))

const after = JSON.parse(fs.readFileSync('./sample/multipartUploader-988a7.js.json'));

const diff = objDiff.getDiff(before, after);

console.log(JSON.stringify(diff))
