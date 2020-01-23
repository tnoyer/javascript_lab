function my_compute_factorial_it(inputNb){

    if (!Number.isInteger(inputNb)){
        console.log('Seul les nombres entiers sont acceptés')
        return
    }

    let nb = 1
    
    for (let i = 1; i<inputNb+1; i++) {
        nb *= i 
    }

    console.log(nb)

    return nb  
}

var result = require('minimist')(process.argv.slice(2))
inputNb = result._[0]
my_compute_factorial_it(inputNb)