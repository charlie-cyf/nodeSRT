const fs = require('fs');
const changeAnalysis = require('./index');
const { Parser } = require("acorn")
const TestSelector = require("../testSelector")
const globalUtil = require('../util');

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

const res = changeAnalysis.getDiffs(beforeAst, afterAst)
console.log('res length', res.length)

res[0].forEach(ele => {
    console.log('ele length', ele.type)
})
const diffFile = fs.readFileSync('./diff-3ebe9-803611.patch', "utf8");

const changes = changeAnalysis.getChangesAncestors(diffFile);

// changes.forEach(c => {
//     console.log(c.filename)
// })

globalUtil.setter({callGraphPath: '../tmp/uppy.log.json'})
const selected = TestSelector.getReducedTests(changes)
console.log(selected)