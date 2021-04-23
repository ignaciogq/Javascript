// usar fetch para cargar json 
// utilizar promises, async, await (se puede hacer las dos 
// peticiones a la vez para ahorrar tiempo)
// primero obtener datos (getData), luego viewModel (buildViewModel) 
// y luego pintar datos (render)


const year = 1997;
const monthSalesProduct = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

async function getJson() {

}





/* var monthlyOrder = [];
async function getData() {
    Promise.all([
        fetch('products.json').then((products) => products.json()),
        fetch('sales.json').then((sales) => sales.json())
    ]).then(buidViewModel());
}

function buidViewModel() {
    
} */
/* 
async function main(){
    const data = await getData();
    console.log(data);
}

let data = new Object();

function getData(){
    fetch('products.json').then(function(response) {
        return response.json();
    }).then(function(json) {
        let products = json;
        data.products = products;
    }).catch(function(err) {
        console.log('Fetch problem: ' + err.message);
    });
    
    fetch('sales.json').then(function(response) {
        return response.json();
    }).then(function(json) {
        let sales = json;
        data.sales = sales;
    }).catch(function(err) {
        console.log('Fetch problem: ' + err.message);
    });
    return data;
}

function buildViewModel() {
    let viewModel = '';
}

function render(viewModel){

}


console.log(data);

 */









//
/* function getData(){
    //usa fetch
    return data;
}

funtion buidViewModel(){
    return viewModel
}

function render(viewModel){

}


async function main() {
    const data = await getData();
    const viewModel = buildViewModel(data);
    render (viewModel);

}

main(); */