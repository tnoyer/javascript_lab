module.exports = function (list) {


    let current = list
    while (current != null) {
        console.log(current.data)
        current = current.next
    }
    return
}