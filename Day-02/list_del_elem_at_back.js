const list_get_size = require('./list_get_size')

module.exports = function (list) {

    let current = list
    for(var i = 0; i < list_get_size(list)-2; i++){
        current = current.next
    }
    delete current.next
    return list

}
