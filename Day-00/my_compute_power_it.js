function my_compute_power_it(inputNb, inputP){

    if (!Number.isInteger(inputNb) || !Number.isInteger(inputP)){
        console.log('Seul les nombres entiers sont acceptés')
        return
    }

    let nb = 1
    
    for (let i = 0; i<inputP; i++) {
        nb *= inputNb 
    }

    console.log(nb)

    return nb  
}

var result = require('minimist')(process.argv.slice(2))
inputNb = result._[0]
inputP = result._[1]
my_compute_power_it(inputNb, inputP)