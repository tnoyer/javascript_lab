module.exports = function (tree) {

    let current = tree
    let max = 0
    let leftMax = current.data
    let rightMax = current.data

    while (current.left != null) {
        if (current.data < current.left.data) {
            leftMax = current.left.data
        }
        current = current.left
    }
    current = tree
    while (current.right != null) {
        if (current.data < current.right.data) {
            rightMax = current.right.data
        }
        current = current.right;
    }
    if (leftMax > rightMax) {
        max = leftMax
    } else {
        max = rightMax
    }
    
    return max
}