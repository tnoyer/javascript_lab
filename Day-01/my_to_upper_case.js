String.prototype.my_to_upper_case = function () {
    
    let inputStr = this.valueOf()
    var strResult = ""
    for (i = 0; i < inputStr.length; i++) {
        strResult += String.fromCharCode(inputStr.charCodeAt(i) & 223)
    }
    return strResult
}