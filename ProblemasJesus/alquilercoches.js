var modelInput = document.getElementById('modelo');
var dayPriceInput = document.getElementById('precioDia');
var carTotalPrice;

var checkBox = document.getElementById('disponibilidad');

let addButton = document.getElementById("submit");

let table = document.getElementById('table');
let bodyTable = document.getElementById('tBody');

//Cuando se pulsa el boton añadir se ejecuta la función
function onButtonClick(){
    if(modelInput.value === '' || dayPriceInput.value === ''){
        alert("Faltan campos por rellenar, crack.");
        return;
    }

    var row = document.createElement('tr');
    bodyTable.appendChild(row);

    var modelCell = document.createElement('td');
    modelCell.innerHTML = modelInput.value;
    row.appendChild(modelCell);

    var priceCell = document.createElement('td');
    priceCell.innerHTML = dayPriceInput.value + " €";
    row.appendChild(priceCell);

    let editButton = document.createElement('button');
    editButton.innerHTML = "Editar";

    let rentButton = document.createElement('button');
    rentButton.innerHTML = "Alquilar";

    let giveBackButton = document.createElement('button');
    giveBackButton.innerHTML = "Devolver";

// Si la checkbox esta chekeada se añade un "si" en disponibilidad, un boton editar y un
// boton alquilar, si no lo está, se añade un "no" y los botones editar y devolver

    if(checkBox.checked){

        var availabilityCell = document.createElement('td');
        availabilityCell.innerHTML = ("Si");
        row.appendChild(availabilityCell);

        var editButtonCell = document.createElement('td');
        editButtonCell.appendChild(editButton);
        row.appendChild(editButtonCell);

        var rentButtonCell = document.createElement('td');
        rentButtonCell.appendChild(rentButton);
        row.appendChild(rentButtonCell);

    } else {

        var availabilityCell = document.createElement('td');
        availabilityCell.innerHTML = ("No");
        row.appendChild(availabilityCell);

        var editButtonCell = document.createElement('td');
        editButtonCell.appendChild(editButton);
        row.appendChild(editButtonCell);

        var giveBackButtonCell = document.createElement('td');
        giveBackButtonCell.appendChild(giveBackButton);
        row.appendChild(giveBackButtonCell);
         
    }


    editButton.addEventListener('click', editCar);
    rentButton.addEventListener('click', rentCar);
    giveBackButton.addEventListener('click', giveBackCar);
//Cuando se pulsa el boton editar, tienen que aparecer dos cajas de texto y una checkbox
// con los valores predeterminados, para editar de esta manera solo 
// el campo que se desee cambiar
    function editCar() {
        editButton.style.display = 'none';
        rentButton.style.display = 'none';
        giveBackButton.style.display = 'none';

        const tr = this.parentElement.parentElement;

        const modelTd = tr.children[0];
        const model = modelTd.textContent;
        modelTd.textContent = '';
        const editModelInput = document.createElement('input');
        editModelInput.value = model; // modelInput.value;
        modelTd.appendChild(editModelInput);

        const priceTd = tr.children[1];
        const dayPrice = priceTd.textContent;
        priceTd.textContent = '';
        const editDayPriceInput = document.createElement('input');
        editDayPriceInput.value = dayPrice; // dayPriceInput.value;
        priceTd.appendChild(editDayPriceInput);

        const availableTd = tr.children[2];
        const available = availableTd.textContent;
        availableTd.textContent = '';
        const editAvailableInput = document.createElement('input');
        editAvailableInput.type = 'checkbox';
        editAvailableInput.id = 'checkBoxEdit';
        
        if (available === "Si"){
            editAvailableInput.checked = true;
        } else {
            editAvailableInput.checked = false;
        }

        availableTd.appendChild(editAvailableInput);

        const saveButton = document.createElement('button');
        saveButton.innerHTML = 'Guardar';
        
        let saveButtonCell = document.createElement('td');
        saveButtonCell.appendChild(saveButton);
        row.appendChild(saveButtonCell);

        saveButton.addEventListener('click',saveChanges);

// Una vez pulseemos el boton guardar, deben guardarse los cambios en sus respectivas celdas
// y aparecer de nuevo los respectivos botones segun la disponibilidad del producto.
        function saveChanges(){
            saveButton.style.display = 'none';

            editButton.style.display = 'inline';
            

            modelTd.textContent = editModelInput.value;
            modelInput.value = editModelInput.value;

            priceTd.textContent = editDayPriceInput.value;
            dayPriceInput.value = editDayPriceInput.value;
            // la funcion editChecked diferencia si la checkbox ha sido seleccionadao si no,
            // si esta seleccionada debe aparecer un si en disponibilidad y los botones editar
            // y alquilar, sino deberá aparecer un no y los botones editar y devolver.
            function editChecked(){
                if (editAvailableInput.checked){
                    rentButton.style.display = 'inline';
                    availableTd.textContent = 'Si';
                    return;
                } else {
                    giveBackButton.style.display = 'inline';
                    availableTd.textContent = 'No';
                    return;
                }  
            }
            editChecked();
        }
        return;
    }
// la funcion rentCar se ejecuta al pulsar el boton de alquilar, y lo que hace es cambiar el boton
// de alquilar por el boton devolver y cambiar la disponibilidad de 'si' a 'no'.
    function rentCar() {
        rentButton.style.display = 'none';

        const tr = this.parentElement.parentElement;
        
        let giveBackButton = document.createElement('button');
        giveBackButton.innerHTML = "Devolver";

        var giveBackButtonCell = document.createElement('td');
        giveBackButtonCell.appendChild(giveBackButton);
        row.appendChild(giveBackButtonCell);

        const availableTd = tr.children[2];
        let available = availableTd.textContent;
        available = "No";

        return;
    }

    function giveBackCar() {
        
    }
}


addButton.addEventListener('click', onButtonClick);
