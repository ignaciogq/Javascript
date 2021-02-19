let ageArray = [];
let weightArray = [];
var young = 0;
var adult = 0;
var retired = 0;

var weightYoungSum = new Number;
var weightAdultSum = new Number;
var weightRetiredSum = new Number;

var meanWeightYoung = 0;
var meanWeightAdult = 0;
var meanWeightRetired = 0;

let calcButton = document.getElementById("calculateButton");
/*
var agep1 = document.getElementById('age1');
var agep2 = document.getElementById('age2');
var agep3 = document.getElementById('age3');
var agep4 = document.getElementById('age4');
var agep5 = document.getElementById('age5');

var weightp1 = document.getElementById('weight1');
var weightp2 = document.getElementById('weight2');
var weightp3 = document.getElementById('weight3');
var weightp4 = document.getElementById('weight4');
var weightp5 = document.getElementById('weight5');
*/
var youngPerson = document.getElementById('young');
var adultPerson = document.getElementById('adult');
var retiredPerson = document.getElementById('retired');

function onButtonClick() {  
    invalidData = false;
    for (let i = 1; i <= 5; i++){
        if (document.getElementById('age' + i.toString()).value === '' || document.getElementById('weight' + i.toString()).value === ''){
            invalidData = true;
        }
    }
    if (invalidData){
        alert('Faltan campos por rellenar.');
    }
    /*
    if (agep1.value === '' || agep2.value === '' || agep3.value === '' || agep4.value === '' || agep5.value === '' || weightp1.value === '' || weightp2.value === '' || weightp3.value === '' || weightp4.value === '' || weightp5.value === ''){
        alert('Faltan campos por rellenar.');
        return;
    }
    */
    calculate();
}

function calculate() {
    /*
    ageArray.push(+agep1.value);
    ageArray.push(+agep2.value);
    ageArray.push(+agep3.value);
    ageArray.push(+agep4.value);
    ageArray.push(+agep5.value);

    weightArray.push(+weightp1.value);
    weightArray.push(+weightp2.value);
    weightArray.push(+weightp3.value);
    weightArray.push(+weightp4.value);
    weightArray.push(+weightp5.value);
    */
    for (let i = 1; i <= 5; i++){
        ageArray.push(+document.getElementById('age' + i.toString()).value);
        weightArray.push(+document.getElementById('weight' + i.toString()).value);
    }


    for (let i = 0; i < ageArray.length; i++){
        if (ageArray[i] < 18){
            young += 1;
            function weightYoung(){
                weightYoungSum += weightArray[i];
                meanWeightYoung = weightYoungSum / young;
            }
            weightYoung();
        }
        if (ageArray[i] >= 18 && ageArray[i] <= 67){
            adult += 1;
            function weightAdult(){
                weightAdultSum += weightArray[i];
                meanWeightAdult = weightAdultSum / adult;
            }
            weightAdult();
        }
        if (ageArray[i] > 67){
            retired += 1;
            function weightRetired(){
                weightRetiredSum += weightArray[i];
                meanWeightRetired = weightRetiredSum / retired;
            }
            weightRetired();
        }
    }
    youngPerson.innerHTML = 'Jóvenes: ' + young + '. Porcentaje: ' + young * 100 / 5 + '%. Promedio de peso: ' + meanWeightYoung + 'Kg.';
    adultPerson.innerHTML = 'Adultos: ' + adult + '. Porcentaje: ' + adult * 100 / 5 + '%. Promedio de peso: ' + meanWeightAdult + 'Kg.';
    retiredPerson.innerHTML = 'Jubilados: ' + retired + '. Porcentaje: ' + retired * 100 / 5 + '%. Promedio de peso: ' + meanWeightRetired + 'Kg.';
}




calcButton.addEventListener('click', onButtonClick);




//coger valor de ageinput y weightinput, convertirlo en numeros y meterlo en sus arrays
// array
// en la funcion calculate recorrer arrays y calcular lo que se necesita.

/*
    var ageInput = document.getElementById('age');
    var weightInput = document.getElementById('weight');

    for (let i = 0; i < 5; i++){
        
    }
    ages.push(ageInput);
    weights.push(weightInput);

    if (ages.length === 5 && weights.length === 5){
        calculate();
        return;
    }
*/