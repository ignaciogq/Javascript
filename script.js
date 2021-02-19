// Función: crea un nuevo párrafo y lo agrega al final del cuerpo HTML.
function dontclickmehandler() {
    addParagraph('Ahora tienes COVID!');
  }
  function clickmehandler() {
   addParagraph('Estas vacunado!!!!');
  }

  function addParagraph(textContent){
    let para = document.createElement('p');
    para.textContent = textContent;
    document.body.appendChild(para);
  }
  
/*
  1. Obtiene referencias de todos los botones de la página en un formato de arreglo.
  2. Recorre todos los botones y agrega un detector de eventos 'click' a cada uno.

  Cuando se presione cualquier botón, se ejecutará la función createParagraph().
*/

  const clickmeButton = document.getElementById('clickme');
  clickmeButton.addEventListener('click',clickmehandler);

  const dontclickmeButton = document.getElementById('dontclickme');
  dontclickmeButton.addEventListener('click', dontclickmehandler);
  