/* Escribir un algoritmo que permita calcular X^n, donde:
X puede ser cualquier número real
n puede ser cualquier entero positivo, negativo o cero
Nota: suponemos que no está implementado el operador de exponenciación */

let x = Number;
let n = Number;

function exponent (x, n) {
    var result = 1;
    if (n === 0) {
        return 0;
    }
    if (n < 0) {
        return undefined;
    }
    for (let i = 1; i <= n; i++){
        result *= x;
    }
    return result;
}

console.log(exponent(-3,2));