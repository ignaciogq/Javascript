function fibonacci (numero) {
    let numeros = [ 0, 1 ];
    for (let i = 2; i <= numero; i++){
        numeros[i] = numeros[i-2] + numeros[i-1];
    }
    return numeros [numero];
}

for (let i = 0; i < 10; i++){
    console.log(fibonacci(i));
}
