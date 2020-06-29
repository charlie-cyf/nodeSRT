var _ = require('underscore');

// Compare AST2 to AST1 to output a list of changes' ancestors
module.exports.getDiffs = function (AST1, AST2) {
    const getDiffAncestors = function (node1, node2, diffAncestors, inArray = false) {
        if(_.isEqual(node1, node2)) return diffAncestors;
        let attrDiffer = node1.type !== node2.type;
        Object.keys(node1).forEach(k => {
            // console.log('k', typeof k, k)
            if(typeof node1[k] === "object") {
                if(Array.isArray(node1[k])) {
                    if(node1[k].length !== node2[k].length) {
                        console.log('set true in 1', node1.type)
                        attrDiffer = true;
                    } else {
                        for(let i = 0; i<node1[k].length; i++){
                            diffAncestors = getDiffAncestors(node1[k][i], node2[k][i], diffAncestors, true);
                        }
                    }


                } else {
                    if(!node2[k] && node1[k] !== node2[k]) {
                        console.log('set true in 2', node1.type)
                        attrDiffer = true;
                    } else {
                        diffAncestors = getDiffAncestors(node1[k], node2[k], diffAncestors, true);
                    }
                }
            } else {
                if(node1[k] !== node2[k] && k !== 'start' && k !== 'end' && k !== 'comments') {
                    console.log('set true in 3', node1.type, k)
                    attrDiffer = true;
                }
            }
        })
        if(attrDiffer) {
            console.log("ast differ", node1.type)
            diffAncestors.push([]);
            diffAncestors.forEach(ele => {
                ele.push(node1);
            })
        } else if (!inArray) {
            diffAncestors.forEach(ele => {
                ele.push(node1);
            })
        }

        

        
        return diffAncestors;
    }

    const temp = getDiffAncestors(AST1, AST2, []);
    return temp
}