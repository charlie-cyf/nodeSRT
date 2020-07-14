
module.exports = {
    data: {
        codeBase: undefined
    },

    setter: function(newConfig) {
        this.data = Object.assign({}, this.data, newConfig);
    },

    getASTdir: function() {
        if(this.data.codeBase) {
            if(this.data.ASTdir) return this.data.ASTdir;

            this.data.ASTdir = this.data.codeBase+'-AST'
        }
    }

}