module.exports = function (tree) {

    let current = tree
    var min = 0
    var leftMin = current.data
    var rightMin = current.data

    while (current.left !== null) {
        if (current.data > current.left.data) {
            leftMin = current.left.data
        }
        current = current.left
    }
    current = tree
    while (current.right !== null) {
        if (current.data > current.right.data) {
            rightMin = current.right.data
        }
        current = current.right
    }
    if(leftMin < rightMin){
        min = leftMin
    } else {
        min = rightMin
    }

    return min
}