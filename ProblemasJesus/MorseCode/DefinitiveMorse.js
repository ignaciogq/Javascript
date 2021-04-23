const alphabet = {}

const morseButton = document.getElementById('');
morseButton.addEventListener('click', morseButtonClick);

function morseButtonClick() { 
    const inputMessageTextArea = document.getElementById('');
    const inputMessage = inputMessageTextArea.value;
    try {
        var outputMessage = translateToMorse(inputMessage);
    }
    catch (err) {
        alert(err.message);
        return;
    }
    const outputMessageTextArea = document.getElementById('');
    outputMessageTextArea.value = outputMessage;
}
function translateToMorse(inputMessage) {
    let outputMessage = '';
    for (let i = 0; i < inputMessage.length; i++){
        const char = inputMessage[i].toLowerCase();
        const morse = alphabet[char];
        if (morse === undefined){
            throw new Error(`El caracter "${char}" no tiene traducción al código morse.`);
        }
        outputMessage += ' ' + morse;
    }
    return outputMessage;
}