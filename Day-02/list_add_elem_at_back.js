const simple_list = require('./simple_list')

module.exports = function (list, newData) {

    let newList = new simple_list(newData)

    let current = list
    while (current.next) {
        current = current.next
    }
    current.next = newList
    return newList

}
