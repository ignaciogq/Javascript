
var sumProducts;
const addButton = document.getElementById('addNewProduct');


function priceCalc(){
    var unitPrice = document.getElementById('unitPrice').value;
    var quantity = document.getElementById('quantity').value;   
    const para = document.createElement('p');
    const myDiv = document.getElementById('myDiv');
    sumProducts = unitPrice * quantity;
    para.textContent = sumProducts;
    myDiv.appendChild(para);
}

addButton.addEventListener('click', priceCalc);

function totalPrice (){
    
}

    



/* 
var priceArray = [];

var getData = function(){
    var unitPrice = document.getElementById('unitPrice').value;
    var quantity = document.getElementById('quantity').value;
    var totalSale = document.getElementById('totalSale');

    
    
    function addProductFun() {
        let sumProducts = unitPrice * quantity;
        priceArray.push(sumProducts + ' ');
        totalSale.textcontent = priceArray;
    }

    document.getElementById("addNewProduct").onclick = addProductFun;
    

    function totalFun() {

    }
    document.getElementById("total").onclick = totalFun;
}
getData();
*/




/*
    var addButton = document.getElementById('addNewProduct');
    var totalButton = document.getElementById('total')

    let totalPrice = unitPrice * quantity;
    let myArray = []

    addButton.onclick = function addProductFun() {
        document.createElement('p');

    }

    for (let i = 0; i < myArray.length; i++){
        myArray = myArray.push(unitPrice(i));
    }
    function sumPrices() {

    }
    */