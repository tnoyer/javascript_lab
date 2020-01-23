const list_get_size = require('./list_get_size')
const list_del_elem_at_front = require('./list_del_elem_at_front')

module.exports = function (list) {

    let current = list
    current.next = null
    return list
}