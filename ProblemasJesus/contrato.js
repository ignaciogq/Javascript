let superadaMarcaMaxima = false, sumaMarcas = 0;

for (let dia = 1; dia <= 15; dia++) {
    let marcaText = prompt(`¿El día ${dia} cuanto tardó?`);
    let marca = parseFloat(marcaText);
    sumaMarcas += marca;
    if (marca > 20) {
        superadaMarcaMaxima = true;
        alert('Hoy no estabas inspirado');
        break;
    }
}

if (!superadaMarcaMaxima) {
    const mediaMarcas = sumaMarcas / 15;
    if (mediaMarcas <= 15) {
        alert('Menudo fenómeno, contratado');
    }
    else {
        alert('Eres un paquete, no te contratamos');
    }
}

/**
 * devuelve verdadero si ninguna de las marcas ha superado maxIndividualMark
 * y la media de las marcas no supera mxMeanMark
 * 
 * @param {number[]} marks el array con las marcas del candidato
 * @param {number} maxIndividualMark la máxima marca individucal permitida
 * @param {number} maxMeanMark la máxima media de las marcas permitida
 * @return {boolean} si supera la prueba
 */



const marks = [12, 13, 14, 12, 19, 13, 14, 12, 13, 9, 12, 11, 13, 14, 17];



function evaluateTest(marks, maxIndividualMark, maxMeanMark) {
    var sum = 0;
    let mean = 0;

    for (let i=0; i < marks.length; i++) {
        sum += marks[i];
        if (marks[i] > maxIndividualMark) {
            return false;
        }
    }

    mean = sum / marks.length;
    if (mean > maxMeanMark) {
        return false;
    }
    
    return true;
}

 const result = evaluateTest(marks, 20, 15); 

 console.log("prueba superada %o", result);