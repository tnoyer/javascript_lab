String.prototype.my_to_lower_case = function () {
    
    let inputStr = this.valueOf()
    var strResult = ""
    for (var i = 0; i < inputStr.length; i++) {

        var letters = inputStr.charCodeAt(i)

        if (letters > 64 && letters < 91) {
            strResult += String.fromCharCode(letters + 32)
        } else {
            strResult += inputStr.charCodeAt(i)
        }
    }
    return strResult
}