let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
let para = document.createElement('p');

// Add your code here
function chooseName (){
    para = names[Math.floor(Math.random()* names.length)];
}
chooseName();
// Don't edit the code below here!

const section = document.querySelector('section');

section.appendChild(para);