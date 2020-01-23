module.exports = function (x, y, edge, display) {

    if (typeof x !== 'number' || typeof y !== 'number') {
        console.log("Vos paramètres rentrés ne sont pas corrects")
        return
    }
    if (edge === undefined || typeof edge !== 'string') {
        edge = "o"
    }
    if (display === undefined || typeof display !== 'string') {
        line = "-"
        col = "|"
    } else {
        var line = display
        var col = display
    }
    var output = ""
    for (var i = 1; i <= x; i++) {
        if (i == 1 || i == y) {
            output += edge
        } else if (i > 1 && i < y) {
            output += col
        } else {
            output += ""
        }
        for (var j = 1; j <= y; j++) {
            if (i == 1 || i == y) {
                output += line
            }
            else {
                output += " "
            }
        }
        if (i == 1 || i == y) {
            output += edge
        } else if (i > 1 && i < y) {
            output += col
        } else {
            output += ""
        }
        output += "\n"
    }
    return output
}