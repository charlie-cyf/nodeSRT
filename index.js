const {Parser} = require("acorn")
const fs = require("fs")

const MyParser = Parser.extend(
  require("acorn-jsx")(),
  require("acorn-bigint")
)

let file = fs.readFileSync('./code/uppy/test/mocks/acquirerPlugin1.js')
console.log(MyParser.parse(file))