module.exports = function (list){

    let current = list
    let i = 0
    let previous = current.next
    
    while(i < 1){
        i++
        current = previous
    }  
    return current
}
