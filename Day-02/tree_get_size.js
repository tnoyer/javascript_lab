

function hello(node) {

    if (node.left == null && node.right == null)
        return 1

    if (node.left)
        const sizeLeft = hello(node.left)

    if (node.right)
        const sizeRight = hello(node.right)
        
    return 1 + sizeLeft + sizeRight
}


module.exports = function (tree) {
    return hello(tree)

    let iRight = 0
    let iLeft = 0
    let newTree1 = tree
    let newTree2 = tree
    let newTree3 = tree

    if (tree === undefined || tree == null) {

        return 0
    }
    if (tree.left == null && tree.right == null) {

        return 1
    } 
    if (tree.left != null || tree.right != null) {

        if (tree.right != null) {
            tree = tree.right
            if (tree != null) {
                while (tree != null) {
                    iRight++
                    tree = tree.right
                }
            }
            if (tree == null) {
                newTree1 = newTree1.right
                while (newTree1 != null) {
                    iRight++
                    newTree1 = newTree1.left
                }
            }
        }
        if (newTree2.left != null) {
            newTree2 = newTree2.left
            if (newTree2 != null) {
                while (newTree2 != null) {
                    iLeft++
                    newTree2 = newTree2.right
                }
            }
            if (newTree2 == null) {
                newTree3 = newTree3.left
                while (newTree3 != null) {
                    iLeft++
                    newTree3 = newTree3.left
                }
            }

        }
        return iRight + iLeft - 1
    }
}