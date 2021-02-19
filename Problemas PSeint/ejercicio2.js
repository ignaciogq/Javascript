let arrayAge = [];
let arrayWeight = [];



function calculate() {
    for (let i = 0; i < arrayAge.length; i++){
        let age = document.getElementById('age').value;
        arrayAge.push(age(i) + ' ');
        let weight = document.getElementById('weight').value;
        arrayWeight.push(weight(i) + ' ');
    }
}
let button = document.getElementById('calculate').onclick = calculate;
calculate();


var para = document.createElement("p");
age.appendChild(para);


let persona;
let joven;
let adulto;
let jubilado;

function ageFun (){
    if (age >=0 && age < 18){
        persona = joven;
    }
    if (age >= 18 && age <= 67){
        persona = adulto;
    }
    if (age > 67) {
        persona = jubilado;
    }
}   




/*
let weight = document.getElementById('weight');

let age2 = document.getElementById('age2');
let age3 = document.getElementById('age3');
let age4 = document.getElementById('age4');
let age5 = document.getElementById('age5');

let weight2 = document.getElementById('weight2');
let weight3 = document.getElementById('weight3');
let weight4 = document.getElementById('weight4');
let weight5 = document.getElementById('weight5');

var edad = document.querySelector("age").value;
*/