let calcButton = document.getElementById('calculateButton');

var young = 0;
var adult = 0;
var retired = 0;

var weightYoungSum = new Number;
var weightAdultSum = new Number;
var weightRetiredSum = new Number;

var meanWeightYoung = 0;
var meanWeightAdult = 0;
var meanWeightRetired = 0;

let youngPerson = document.getElementById('young');
let adultPerson = document.getElementById('adult');
let retiredPerson = document.getElementById('retired');


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
    
    calculate();
}

function calculate() {
    var persons = [];
    for (let i = 1; i <= 5; i++){
        let age = +document.getElementById('age' + i.toString()).value;
        let weight = +document.getElementById('weight' + i.toString()).value;

        persons.push({
            age: age,
            weight: weight
        });
    }
    for (let i = 0; i < persons.length; i++){
        if (persons[i].age < 18){
            young += 1;
            weightYoungSum += persons[i].weight;
            meanWeightYoung = weightYoungSum / young; 
        }
        if (persons[i].age >= 18 && persons[i].age <= 67){
            adult += 1;
            weightAdultSum += persons[i].weight;
            meanWeightAdult = weightAdultSum / adult;    
        }
        if (persons[i].age > 67){
            retired += 1;  
            weightRetiredSum += persons[i].weight;
            meanWeightRetired = weightRetiredSum / retired;
        }
    }
    youngPerson.innerHTML = 'Jóvenes: ' + young + '. Porcentaje: ' + young * 100 / 5 + '%. Promedio de peso: ' + meanWeightYoung + 'Kg.';
    adultPerson.innerHTML = 'Adultos: ' + adult + '. Porcentaje: ' + adult * 100 / 5 + '%. Promedio de peso: ' + meanWeightAdult + 'Kg.';
    retiredPerson.innerHTML = 'Jubilados: ' + retired + '. Porcentaje: ' + retired * 100 / 5 + '%. Promedio de peso: ' + meanWeightRetired + 'Kg.';
}


calcButton.addEventListener('click', onButtonClick);