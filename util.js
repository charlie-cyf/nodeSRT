const path = require('path')


module.exports = {
    config: {
        codeBase: undefined
    },

    setter: function(newConfig) {
        this.data = Object.assign({}, this.config, newConfig);
    },

    getASTdir: function() {
        if(this.config.codeBase) {
            if(this.config.ASTdir) return this.config.ASTdir;

            this.config.ASTdir = this.config.codeBase+'-AST'
        }
    },

    /**
     * @param {String} filePath: full path to js file,
     */
    getASTpath: function(filePath) {
        if(filePath.startsWith(this.config.codeBase)){
            filePath = filePath.replace(this.config.codeBase, this.config.ASTdir);
        } else {
            filePath = path.join(this.config.ASTdir, filePath);
        }
        return filePath+'.json'

    }

}