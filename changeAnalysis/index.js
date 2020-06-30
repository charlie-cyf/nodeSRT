var _ = require('underscore');

// Compare AST2 to AST1 to output a list of changes' ancestors
module.exports.getDiffs = function (AST1, AST2) {
    let diffList = [];

    const getDiffAncestors = function (node1, node2, ancestors) {
        if(_.isEqual(node1, node2)) return;
        let tancestors = Array.from(ancestors)
        tancestors.push(node1);
        if(node1.type !== node2.type) {
            diffList.push(tancestors);
            return;
        }
        Object.keys(node1).forEach(k => {
            // console.log('k', typeof k, k)
            if(typeof node1[k] === "object") {
                if(Array.isArray(node1[k])) {
                    if(node1[k].length !== node2[k].length) {
                        console.log('set true in 1', node1.type)
                        diffList.push(tancestors);
                    } else {
                        for(let i = 0; i<node1[k].length; i++){
                            getDiffAncestors(node1[k][i], node2[k][i], tancestors);
                        }
                    }


                } else {
                    if(!node2[k] && node1[k] !== node2[k]) {
                        console.log('set true in 2', node1.type);
                        diffList.push(tancestors);
                    } else {
                        getDiffAncestors(node1[k], node2[k], tancestors);
                    }
                }
            } else {
                if(node1[k] !== node2[k] && k !== 'start' && k !== 'end' && k !== 'comments') {
                    console.log('set true in 3', node1.type, k);
                    diffList.push(tancestors);
                }
            }
        })
    }

    getDiffAncestors(AST1, AST2, []);
    return diffList;
}