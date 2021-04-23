let submit = document.getElementById('submit');
let textToTranslateInput = document.getElementById('textToTranslate');

let characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let morse = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '--.--', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', '-----', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.'];

submit.addEventListener('click', translate);

function translate(){
    let divParent = document.getElementById('div');  
    let para = document.createElement('p');
    divParent.appendChild(para);

    var textToTranslate = textToTranslateInput.value;
    
    let translatedText = '';

    for (let j = 0; j < textToTranslate.length; j++){
        let char = textToTranslate[j];
        
        for (let i = 0; i < characters.length; i++){
            if (char === characters[i]){
                translatedText += ' ' + morse[i];
            }
        }
    }
    para.textContent = translatedText;
}