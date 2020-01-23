const simple_list = require('./simple_list')

module.exports = function (list, newData) {

    let newList = new simple_list(newData)
    newList.next = list
    return newList

}
