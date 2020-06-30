const fs = require('fs');
const getDiffs = require('./index').getDiffs;
const { Parser } = require("acorn")

const ASTParser = Parser.extend(
    require("acorn-jsx")(),
    require("acorn-bigint"),
    require('acorn-static-class-features')

)

const before = fs.readFileSync('./sample/core-index.js')
const after = fs.readFileSync('./sample/core-index-after.js');

const beforeAst = ASTParser.parse(before);
const afterAst = ASTParser.parse(after);

const res = getDiffs(beforeAst, afterAst)
console.log(JSON.stringify(res))