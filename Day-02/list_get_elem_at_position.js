const list_get_size = require('./list_get_size')
const list_get_elem_at_front = require('./list_get_elem_at_front')

module.exports = function (list, size) {

    let previous = null
    let current = list
    let i = 0
    let length = list_get_size(list)

    if (typeof size !== 'number' || size === undefined || size === null || size < 0 || size === 0 || size > length) {
        size = 0
        return list_get_elem_at_front(list)
    }
    else if (size < length) {
        while (i < size) {
            i++
            previous = current
            current = current.next
        }
        previous.next = current.next
        current.next = null
        return current
    }
}