let agesArray =[];
let weightsArray =[];

let calculateButton = document.getElementById('calculate');

let numJovenes = 0;
let sumaJovenes = 0;
let numAdultos = 0;
let sumaAdultos = 0;
let numJubilados = 0;
let sumaJubilados = 0;
let personas = 5;
let mean ;
let percent ;

youngSum = document.getElementById('young');
adultSum = document.getElementById('adult');
retiredSum = document.getElementById('retired');

function calculate (){
    for (let i = 0; i < agesArray.lenght; i++){
        if (agesArray[i] < 18) {
        numJovenes += 1;
        }
        if (agesArray[i] >= 18 && agesArray <= 67) {
            numAdultos += 1;
        }
        if (agesArray[i] > 67) {
            numJubilados += 1;
        }
    }
    
    
    youngSum.innerHTML = 'Jovenes: ' + numJovenes + '. El porcentaje es: ' + numJovenes * 100 / 5 + '%.';
    adulSum.innerHTML = 'Adultos: ' + numAdultos + '. El porcentaje es: ' + numAdultos * 100 / 5 + '%.';
    retiredSum.innerHTML = 'Jubilados: ' + numJubilados + '. El porcentaje es: ' + numJubilados * 100 / 5 + '%.';
    }

function onbuttonclick(){
    const ageInput = document.getElementById('age');
    const weightInput =document.getElementById('weight');
    
    agesArray.push(+ageInput.value);
    weightsArray.push(+weightInput.value);

    if (agesArray.lenght === 5 && weightsArray.lenght === 5){
        calculate();
        return;
    }
}

calculateButton.addEventListener('click', onbuttonclick);