function isPrime(n){
    const root = Math.sqrt(n);
    for (let i = 2; i <= root; i++){
        if (n % i === 0){
            return false;
        }
    } 
    return true;
}

// console.log(isPrime(22));

function getPrimeNumbers(n){
    //devolver todos los numeros primos menores 
    //o iguales que n en un array
    const primes = [];
    for (i = 1; i <=n; i++){
        if(isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

console.log(getPrimeNumbers(50));

