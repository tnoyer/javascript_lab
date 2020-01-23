function my_is_prime(inputNb){

    if (!Number.isInteger(inputNb)){
        console.log('Seul les nombres entiers sont acceptés')
        return
    }
    else if (inputNb == 0 || inputNb == 1) {
        console.log(0)
    }
    else {

        var noError = inputNb

        for (let i = 2; i<noError; i++) {
            if(noError % i == 0) {
                console.log(0)
                return
                
            }
            else {
                console.log(1)
                return
            }
        }

        console.log(noError)

        return noError  
    }   
}

var result = require('minimist')(process.argv.slice(2))
inputNb = result._[0]
my_is_prime(inputNb)