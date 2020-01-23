String.prototype.my_insert = function (addedStr, index) {
    
    let inputStr = this.valueOf();
    if (index == "undefined") {
        index = 0;
    }
    var allWords = ""
    for (var i = 0; i < index; i++) {
        allWords += inputStr[i]
    }
    allWords += addedStr
    for (var j = index; j < inputStr.length; j++) {
        allWords += inputStr[j]
    }
    return allWords

}