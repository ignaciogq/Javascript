let myArray = ['Azul', 'Bonito', 'Catastro', 'Dedo', 'Euforia', 'Fumigar', 'Ginebra'];
let valor = '';

function findIndex (valor, myArray){
    let primero = 0;
    let ultimo = myArray.length - 1;
    let posicion = -1;
    let found = false;
    let medio;

    while (found === false && primero <= ultimo) {
        medio = Math.floor((first + last)/2);
        if (myArray[medio] == valor) {
            found = true;
            posicion = medio;
        } else if (myArray[medio] > valor) {
            ultimo = medio - 1;
        } else {
            primero = medio + 1;
        }
    }
    return posicion;

}
console.log(valor);