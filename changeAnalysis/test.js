const fs = require('fs');
const getDiffs = require('./index').getDiffs;
const { Parser } = require("acorn")

const ASTParser = Parser.extend(
    require("acorn-jsx")(),
    require("acorn-bigint"),
    require('acorn-static-class-features'),
    require('acorn-stage3')

)

const before = fs.readFileSync('./sample/index.js')
const after = fs.readFileSync('./sample/index-after.js');

const beforeAst = ASTParser.parse(before);
const afterAst = ASTParser.parse(after);

const res = getDiffs(beforeAst, afterAst)
console.log('res length', res.length)
res[0].forEach(ele => {
    console.log('ele length', ele.type)
})