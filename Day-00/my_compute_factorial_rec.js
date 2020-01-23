function my_compute_factorial_rec(inputNb){

    if (!Number.isInteger(inputNb)){
        console.log('Seul les nombres entiers sont acceptés')
        return
    }

    if(inputNb == 0){
        return 1
    }
    else{
        return inputNb * my_compute_factorial_rec(inputNb - 1)
    }
}

var result = require('minimist')(process.argv.slice(2))
inputNb = result._[0]
var res = my_compute_factorial_rec(inputNb)
if(res == undefined){
    return
}
else {
    console.log(res)
}