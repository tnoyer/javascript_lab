String.prototype.is_empty = function () {

    let inputStr = this.valueOf()
    return (inputStr === undefined || inputStr == null || inputStr.length <= 0) ? true : false
}