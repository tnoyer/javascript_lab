String.prototype.my_split = function(inputStr, index){

    let inputStr = this.valueOf()
    var stringArray = [];
    var garbageArray = [];
    var j = 0

    for (var i = 0; i < inputStr.length; i++) {
        if (inputStr.charAt(i) == index) {
            garbageArray = inputStr.charAt(i)
            j++
        } else {
        if (!stringArray[j]) stringArray[j] = ''
        stringArray[j] += inputStr.charAt(i)
        }
    }
    return stringArray
}