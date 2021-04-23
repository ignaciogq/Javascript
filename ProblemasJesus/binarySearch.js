const a = [3, 7, 12, 23, 34, 56, 87, 101, 200, 301, 321, 431];

function binarySearch(a,n) {
//escribir aqui el codigo
    let start = 0;
    let end = a.length - 1;

    while (start <= end) {
        let middleNumber = Math.floor((start + end) / 2);
        
        if (a[middleNumber] === n){
            return middleNumber;
        } else if (a[middleNumber] < n){
            start = middleNumber + 1;
        } else {
            end = middleNumber - 1;
        }
    }
    return -1;   
}

const pos1 = binarySearch(a,12);
console.log(pos1); //tiene que salir 2
// tiene que devolver la posicion de n en el array a

const pos2 = binarySearch(a, 17); //si no lo encuentra tiene que decir -1



//EJERCICIO: CUANTOS BITS SE NECESITAN PARA CODIFICAR UN NUMERO ENTERO DE 0 A 64.000?

function findExponent(n) {
    for (let i = 1; i > 0; i++){
        let bits = Math.pow(2,i);
        if (bits >= n){
            return i;
        } 
    }
}
console.log(findExponent(64000));

