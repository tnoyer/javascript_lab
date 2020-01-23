module.exports = function (stack) {

    let current = stack
    while (current.next) {
        current = current.next
    }
    current.next = stack
    return stack

}
