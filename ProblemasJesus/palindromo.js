const textInput = document.getElementById('text');
const button = document.getElementById('button');
const paragraph = document.getElementById('paragraph');

button.addEventListener('click', function() {
    const text = textInput.value;
    const middle = Math.floor((text.length) / 2);
    let isPali = true;
    for (let i=0; i < middle; i++ ) {
        if (text[i] != text[text.length - i - 1]) {
            isPali = false;
            break;
        }
    }
    if (isPali) {
        paragraph.textContent = 'Es un palíndromo';
    }
    else {
        paragraph.textContent = 'No es palíndromo';
    }
});