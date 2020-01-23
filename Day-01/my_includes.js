String.prototype.my_includes = function(searchedChain, index) {

    let inputStr = this.valueOf()
    var charArray1 = inputStr.split('')
    var charArray2 = searchedChain.split('')
    if (index == undefined){
        index = 0
    } 
    for (var i = 0; i < charArray1.length - charArray2.length + 1; i++) {
        for(var j = 0; j < charArray2.length; j++){
            if(charArray1[i+j] == charArray2[j]){
                index++
            }
            if(index == charArray2.length){
              return true
            }
          }
    }
    return false
}