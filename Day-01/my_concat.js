String.prototype.my_concat = function (...arguments) {

    let inputStr = this.valueOf()
    var strResult = inputStr + " "
    for (var i = 0; i < arguments.length; i++) {
        strResult += arguments[i] + " "
    }
    return strResult
}