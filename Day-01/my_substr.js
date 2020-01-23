String.prototype.my_substr = function(start, end){

    let findStr = this.valueOf()
    if(!Number.isInteger(index)) {
        index = 0;
    }
    var allWords = ""
    for(var i = start; i<= end; i++ ){
        allWords += findStr[i]
    }
    return allWords
}