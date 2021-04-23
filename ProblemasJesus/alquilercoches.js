var modelInput = document.getElementById('modelo');
var dayPriceInput = document.getElementById('precioDia');

var checkBox = document.getElementById('disponibilidad');
let addButton = document.getElementById("submit");
let table = document.getElementById('table');
let bodyTable = document.getElementById('tBody');
let resultBox = document.getElementById('modelText');
let dailyProfit = document.getElementById('dailyProfit');

var profitForDay = 0;

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

    var availabilityCell = document.createElement('td');
    row.appendChild(availabilityCell);

    let editButton = document.createElement('button');
    editButton.innerHTML = "Editar";

    let rentButton = document.createElement('button');
    rentButton.innerHTML = "Alquilar";

    let giveBackButton = document.createElement('button');
    giveBackButton.innerHTML = "Devolver";

    let calculatePara = document.createElement('p');
    calculatePara.innerHTML = "Introduce el número de días que has utilizado el vehículo";

    let rentalDaysInput = document.createElement('input');
    rentalDaysInput.setAttribute('type', 'number');

    let calculateButton = document.createElement('button');
    calculateButton.innerHTML = "Calcular";

    var buttonsCell = document.createElement('td');
    buttonsCell.appendChild(editButton);
    buttonsCell.appendChild(rentButton);
    buttonsCell.appendChild(giveBackButton);
    buttonsCell.appendChild(calculatePara)
    buttonsCell.appendChild(rentalDaysInput);
    buttonsCell.appendChild(calculateButton);
    row.appendChild(buttonsCell);

    calculatePara.style.display = 'none';
    rentalDaysInput.style.display = 'none';
    calculateButton.style.display = 'none';

    // Si la checkbox esta chekeada se añade un "si" en disponibilidad, un boton editar y un
    // boton alquilar, si no lo está, se añade un "no" y los botones editar y devolver

    if(checkBox.checked){

        availabilityCell.innerHTML = ("Si");
        giveBackButton.style.display = 'none';

    } else {

        availabilityCell.innerHTML = ("No");
        rentButton.style.display = 'none';

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
        
        buttonsCell.appendChild(saveButton);

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
        giveBackButton.style.display = 'inline';

        availabilityCell.innerHTML = ("No");

        return;
    }

    function giveBackCar() {
        editButton.style.display = 'none';
        giveBackButton.style.display = 'none';

        calculatePara.style.display = 'inline';
        rentalDaysInput.style.display = 'inline';
        calculateButton.style.display = 'inline';

        calculateButton.addEventListener('click', calculatePrice);

        function calculatePrice() {

            const tr = this.parentElement.parentElement;
            const modelTd = tr.children[0];
            const priceTd = tr.children[1].textContent;

            let daysCarRent = rentalDaysInput.value;
            let totalCarPrice = parseFloat(daysCarRent) * parseFloat(priceTd);

            let priceCarPara = document.createElement('p');
            resultBox.appendChild(priceCarPara);
            priceCarPara.textContent = `El precio por el alquiler del vehículo modelo ${modelTd.textContent} es de ${totalCarPrice} €.`;

            editButton.style.display = 'inline';
            rentButton.style.display = 'inline';
    
            calculatePara.style.display = 'none';
            rentalDaysInput.style.display = 'none';
            calculateButton.style.display = 'none';

            availabilityCell.innerHTML = ("Si");

            profitForDay += totalCarPrice;
            dailyProfit.textContent = `Total ganado hoy: ${profitForDay}€ `;

            return;
        }
        return;
    }
}


addButton.addEventListener('click', onButtonClick);
