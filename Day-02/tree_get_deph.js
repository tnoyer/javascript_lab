module.exports = function (tree) {

    if (tree === undefined || tree == null) {

        return 0
    }
    if (tree.left == null && tree.right == null) {

        return 1
    }
    else {
        let iRight = 1
        let iLeft = 1

        while (tree.right != null || tree.left != null) {

            if (tree.right != null) {

                iRight++
                tree = tree.right

                while (tree.left != null) {
                    iRight++
                    tree = tree.left
                }
                while (tree.right != null) {
                    iRight++
                    tree = tree.right
                }
            }

            if (tree.left != null) {

                iLeft++
                tree = tree.left

                while (tree.left != null) {
                    iLeft++
                    tree = tree.left

                }
                while (tree.right != null) {
                    iLeft++
                    tree = tree.right

                }
            }
        }
        return (iRight > iLeft ? iRight : iLeft)

    }
}