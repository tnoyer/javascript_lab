module.exports = function (list) {

    let i = 0
    let current = list
    while (current != null) {
        current = current.next
        i++
    }
    return i

}