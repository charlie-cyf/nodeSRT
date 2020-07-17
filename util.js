const path = require('path');
const fs = require('fs');


module.exports = {
    config: {
        codeBase: undefined
    },

    setter: function(newConfig) {
        this.config = Object.assign({}, this.config, newConfig);
    },

    getASTdir: function() {
        if(this.config.codeBase && !this.config.ASTdir) {
            if(this.config.ASTdir) return this.config.ASTdir;
            this.config.ASTdir = this.config.codeBase+'-AST'
        }
        return this.config.ASTdir;
    },

    /**
     * given path to a codebase file, return path to AST
     * @param {String} filePath: full path to js file,
     */
    getASTpath: function(filePath) {
        if(filePath.startsWith(this.config.codeBase)){
            filePath = filePath.replace(this.config.codeBase, this.config.ASTdir);
        } else {
            filePath = path.join(this.config.ASTdir, filePath);
        }
        return filePath+'.json'

    },

    /**
     * given path to AST file, return path to original code base file
     * @param {String} ASTPath path to AST file
     */
    getCodebasePath: function(ASTPath) {
        let ASTdir = this.getASTdir();
        if(ASTPath.startsWith(ASTdir)) {
            ASTPath = ASTPath.replace(ASTdir, this.config.codeBase);
        } else {
            ASTPath = path.join(this.config.codeBase, ASTPath)
        }

        if(ASTPath.endsWith('.js.json')) {
            ASTPath = ASTPath.substring(0, ASTPath.length-5);
        }

        return ASTPath;
    },


    getCodeBasePackageJson: function() {
        if(!this.config.packageJson) {
            if(fs.existsSync(path.join(this.config.codeBase, 'package.json'))) {
                this.config.packageJson = JSON.parse(fs.readFileSync(path.join(this.config.codeBase, 'package.json')))
            }
        }

        return this.config.packageJson;
    }

}