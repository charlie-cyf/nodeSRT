const {generate} = require("./ASTgenerater");
const madge = require('madge');



const codeBase = "./code/uppy/"

// generate(codeBase)

madge('./code/uppy').then((res) => {
	console.log(res)
});