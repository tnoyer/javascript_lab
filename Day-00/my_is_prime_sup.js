function my_is_prime_sup(inputNb) {

    if (!Number.isInteger(inputNb)){
        console.log('Seul les nombres entiers sont acceptés')
        return
    }
    else if (inputNb == 0 || inputNb == 1) {
        console.log(2)
    }
    else {

        for (var i = inputNb + 1; ; i++) {

            var isPrime = true;

            for (var nb = 2; nb * nb <= i; nb++) {
                if (i % nb === 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                console.log(i);
                return i;
            }
        }

    }
}


var result = require('minimist')(process.argv.slice(2))
inputNb = result._[0]
my_is_prime_sup(inputNb)