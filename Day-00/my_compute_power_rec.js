function my_compute_power_rec(inputNb, inputP){

    if (!Number.isInteger(inputNb) || !Number.isInteger(inputP)){
        console.log('Seul les nombres entiers sont acceptés')
        return
    }

    if(inputP == 0){
        return 1
    }
    else{
        return inputNb * my_compute_power_rec(inputNb, inputP - 1)
    }
}

var result = require('minimist')(process.argv.slice(2))
inputNb = result._[0]
inputP = result._[1]
var res = my_compute_power_rec(inputNb, inputP)
if(res == undefined){
    return
}
else {
    console.log(res)
}