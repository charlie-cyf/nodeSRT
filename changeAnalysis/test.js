const fs = require('fs');
const changeAnalysis = require('./index');
const { Parser } = require("acorn")
const TestSelector = require("../testSelector")

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
const diffFile = fs.readFileSync('./diff-ab886-9fb7b8.patch', "utf8");

const changes = changeAnalysis.getChangesAncestors('../code/uppy', diffFile);

// changes.forEach(c => {
//     console.log(c.filename)
// })

const testSelector = new TestSelector(undefined, undefined, undefined);
testSelector.getReducedTests(changes)
