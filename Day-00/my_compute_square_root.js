function my_compute_square_root(inputNb){

    if (!Number.isInteger(inputNb)){
        console.log('Seul les nombres entiers sont acceptés')
        return
    }

    var temp = 0
    sqrt = inputNb / 2
    while (temp !== sqrt) {
        temp = sqrt
        sqrt = (temp + (inputNb / temp)) / 2
    }
    console.log(sqrt)
}

var result = require('minimist')(process.argv.slice(2))
inputNb = result._[0]
my_compute_square_root(inputNb)