module.exports = function (size) {
    
    var global = size * 4
    let tree = "";
    for (var i = 1; i <= global; i++) {
        for (var j = 1; j <= global + global - 1; j++) {
            if (j <= global - i || j >= global + i) {
                tree += " ";
            } else {
                tree += "*";
            }
        }
        tree += "\n";
    }
    var nbSpace = global - 1 - (size - 1) / 2
    var strSpace = ""
    var strCroix = ""
    for (var k = 0; k < nbSpace; k++) {
        strSpace += " "
    }
    for (var l = 0; l < size; l++) {
        strCroix += "|"
    }
    var line = strSpace + strCroix
    for (var m = 0; m < size; m++) {
        tree += line + "\n";
    }
    return tree
}
