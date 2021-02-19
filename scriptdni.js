
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
var numero = document.querySelector('.numberfield')

const paraLetra = document.querySelector('.paraLetra');


function calcularDni{
if (numero < 0 || numero > 99999999) {
    return("El número no es válido");
}
else {
    let letraCalculada = letras [numero % 23];
    paraLetra.textContent = letraCalculada;
}


}
calcularLetra.addEventListener('click', calcularDni);
