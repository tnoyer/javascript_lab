function count_valid_queens_placements(n) {
    if (Number.isInteger(n)) {
        const allRes = [];

        function isValid(row, col, board) {
            // Checks the ← direction
            for (var i = 0; i < col; i++) {
                if (board[row][i] === "q") {
                    return false;
                }
            }

            // Checks the ↖ direction 
            for (var i = row, j = col; i >= 0 && j >= 0; i-- , j--) {
                if (board[i][j] === "q") {
                    return false;
                }
            }

            // Checks the ↙ direction 
            for (var i = row, j = col; j >= 0 && i < n; i++ , j--) {
                if (board[i][j] === "q") {
                    return false;
                }
            }

            return true;
        }

        var nb_solution = 0;

        function find(col, result) {
            if (col === n) {
              // this deep clone the 2d array
              allRes.push(JSON.parse(JSON.stringify(result)));
              return;
            }
            for (let i = 0; i < n; i++) {
                if (isValid(i, col, result)) {
                    result[i][col] = "q";
                    find(col + 1, result)
                    result[i][col] = "-";
                }
            }
        }

        function generateBoard(n) {
            var board = [];
            for (var i = 0; i < n; i++) {
                board[i] = [];
                for (var j = 0; j < n; j++) {
                    board[i][j] = "-";
                }
            }
            return board;
        }

        var board = generateBoard(n);
        find(0, board);
        console.log(allRes)
        nb_solution = allRes.length;
        console.log(`Nombre de solutions: ${nb_solution}`)
        return allRes;
    }
}

var result = require('minimist')(process.argv.slice(2))
n = result._[0]
count_valid_queens_placements(n)