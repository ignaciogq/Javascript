var priceArray = [];
var totalArray = [];

// Utilizar variable en vez de array para las compras.

function addProduct() {
    var unitPrice = document.getElementById('unitPrice').value;
    var quantity = document.getElementById('quantity').value;
    var sales = document.getElementById('Sales').value;
    

    let sumProducts = unitPrice * quantity;
    priceArray.push(sumProducts);
    sales.innerHTML = 'Precio por producto (€): ' + priceArray;
    //console.log(priceArray.toString());

  

    function sumArray(){
        var totalSale = document.getElementById('totalSale');
        var sumSale = 0;
        for (let i = 0; i < priceArray.length; i++){
            if (isNaN (priceArray[i])){
                continue;
            }
            sumSale += Number(priceArray[i]);
        }
        totalArray.push(sumSale);
        totalSale.innerHTML = 'Precio de compra del cliente: ' + sumSale + '€';
    }
    sumArray();
}


function getTotalPrice(){

    var totalSales = document.getElementById('totalSales');
    var sumSales = 0;
    for (let i = 0; i < totalArray.length; i++){
        if (isNaN (totalArray[i])){
            continue;
        }
        sumSales += Number(totalArray[i]);
    }
    totalSales.innerHTML = 'Total recaudado en ventas hoy: ' + sumSales + '€';
}

document.getElementById("addNewProduct").onclick = addProduct;
document.getElementById("total").onclick = getTotalPrice;

/*
function totalFun() {

}
document.getElementById("total").onclick = totalFun;
}

------------------------------------

for (let i = 0; i < priceArray.length; i++){
            var sum = 0;
            sum = sum + priceArray[i];

--------------------------------------

let sum = priceArray.reduce((previous, current) => current += previous);

------------------------------------------

var total =  0;
            for(var i=0;i<input.length;i++)
              {                  
                if(isNaN(input[i])){
                continue;
                 }
                  total += Number(input[i]);
               }
             return total;
            }

-------------------------------------------

 for (let i = 0; i < priceArray.length; i++){
            var sum = sum + priceArray[i];
            totalSale.innerHTML = sum;
        }
*/

