String.prototype.my_char_at = function(index){

    let inputStr = this.valueOf()
    var strResult = ""
    for(var i=0; i < index+1 ; i++){
        strResult = inputStr[i]
    }
    return strResult
 }