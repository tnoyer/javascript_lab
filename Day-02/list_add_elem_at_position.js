const simple_list = require('./simple_list')
const list_get_size = require('./list_get_size')

module.exports = function (list, newData, size) {

    let newList = new simple_list(newData)

    if (size > 0 && size > list_get_size(list)) {
        return false
    }
    else {
        if (size == 0) {
            newList.next = list
            list = newList
        } else {
            let current = list
            let previous = null
            let i = 0
            while (i < size) {
                i++
                previous = current
                current = current.next
            }
            newList.next = current
            previous.next = newList
        }
    }
    return list

}
