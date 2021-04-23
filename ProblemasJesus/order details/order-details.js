const fs = require('fs');
var json = fs.readFileSync('order-details.json');
var orderDetails = JSON.parse(json);

console.log(orderDetails);

/* // STREAM AGREGGATE

let currentOrderId = undefined;
let orderTotal = undefined;

for (let i = 0; i < orderDetails.length; i++) {
    const orderDetail = orderDetails[i];
    
    if (currentOrderId !== orderDetail.OrderID) {
        if (orderTotal !== undefined) {
            console.log(`OrderId: ${currentOrderId}, Total: ${orderTotal}`);
        }
        currentOrderId = orderDetail.OrderID;
        orderTotal = 0;
    }
    orderTotal += orderDetail.UnitPrice * orderDetail.Quantity * (1 - orderDetail.Discount);
}
console.log(`OrderId: ${currentOrderId}, Total: ${orderTotal}`); */


/* // HASH MATCH AGREGGATE

const orderTotalByOrderId = [];

for (let i = 0; i < orderDetails.length; i++) {
    const orderDetail = orderDetails[i];
    let subtotal =  orderDetail.UnitPrice * orderDetail.Quantity * (1 - orderDetail.Discount);
    subtotal = Math.round(subtotal * 100) / 100;
    if (orderTotalByOrderId[orderDetail.OrderID] === undefined) {
        orderTotalByOrderId[orderDetail.OrderID] = 0;
    }

    orderTotalByOrderId[orderDetail.OrderID] += subtotal;
}

for (let orderId in orderTotalByOrderId){
    console.log(`OrderId: ${orderId}, Total: ${orderTotalByOrderId[orderId]}`);
} */


/* // VIERNES STREAM

let currentOrderId = undefined;
let orderLines = undefined;
let maxQuantity = undefined;

for (let i = 0; i < orderDetails.length; i++) {
    const orderDetail = orderDetails[i];

    if (orderDetail.OrderID !== currentOrderId) {
        if (orderLines !== undefined && maxQuantity !== undefined){
            console.log(`lineas de pedido: ${orderLines}, cantidad máxima: ${maxQuantity}`);
        }
        orderLines = 0;
        maxQuantity = 0;
        currentOrderId = orderDetail.OrderID;
        
    }
    
    orderLines += 1;
    
    if (orderDetail.Quantity > maxQuantity){
        maxQuantity = orderDetail.Quantity;
    }
        
}
console.log(`lineas de pedido: ${orderLines}, cantidad máxima: ${maxQuantity}`); */


/* // VIERNES HASH MATCH
let summaryByOrderId = []

for (let i = 0; i < orderDetails.length; i++) {
    const orderDetail = orderDetails[i];

    if (summaryByOrderId[orderDetail.OrderID] === undefined){
        summaryByOrderId[orderDetail.OrderID] = {
            maxQuantity: 0,
            lineCount: 0
        };
    }
    const summary = summaryByOrderId[orderDetail.OrderID];
    summary.lineCount++;
    if (orderDetail.Quantity > summary.maxQuantity){
        summary.maxQuantity = orderDetail.Quantity;
    }
}

for (let orderId in summaryByOrderId){
    const summary = summaryByOrderId[orderId];
    console.log(`OrderID: ${orderId}, lineas ${summary.lineCount}, máxima cantidad: ${summary.maxQuantity}`);
} */

// MARTES 9
//AÑADIR ORDERTOTAL, DESCUENTO TOTAL(TOTALDISCOUNT), NUMERO TOTAL DE PRODUCTOS (PRODUCT COUNT: SUMAR QUANTITIES)
// DE CADA ORDERID

/* // MARTES 9 STREAM AGREGGATE

let currentOrderId = undefined;
let orderLines = undefined;
let maxQuantity = undefined;
let orderTotal = undefined;
let discount = undefined;
let productCount = undefined;

for (let i = 0; i < orderDetails.length; i++) {
    const orderDetail = orderDetails[i];

    if (orderDetail.OrderID !== currentOrderId) {
        if (orderLines !== undefined && maxQuantity !== undefined && orderTotal !== undefined && discount !== undefined && productCount !== undefined){
            console.log(`${currentOrderId}: Lineas de pedido: ${orderLines}, Cantidad máxima: ${maxQuantity}, Total de productos: ${productCount}, Descuento: ${discount}, Total: ${orderTotal}`);
        }
        orderLines = 0;
        maxQuantity = 0;
        orderTotal = 0;
        discount = 0;
        productCount = 0;
        currentOrderId = orderDetail.OrderID;
        
    }
    
    orderLines += 1;
    orderTotal += orderDetail.UnitPrice * orderDetail.Quantity * (1 - orderDetail.Discount);
    discount += orderDetail.UnitPrice * orderDetail.Quantity * orderDetail.Discount;
    productCount += orderDetail.Quantity;

    if (orderDetail.Quantity > maxQuantity){
        maxQuantity = orderDetail.Quantity;
    }
        
}
console.log(`${currentOrderId}: Lineas de pedido: ${orderLines}, Cantidad máxima: ${maxQuantity}, Total de productos: ${productCount}, Descuento: ${discount}, Total: ${orderTotal}`); */

 
/* // MARTES 9 HASH MATCH AGREGGATE 


let summaryByOrderId = []

for (let i = 0; i < orderDetails.length; i++) {
    const orderDetail = orderDetails[i];

    if (summaryByOrderId[orderDetail.OrderID] === undefined){
        summaryByOrderId[orderDetail.OrderID] = {
            maxQuantity: 0,
            lineCount: 0,
            orderTotal: 0,
            discount: 0,
            productCount: 0
        };
    }
    const summary = summaryByOrderId[orderDetail.OrderID];
    summary.lineCount++;
    if (orderDetail.Quantity > summary.maxQuantity){
        summary.maxQuantity = orderDetail.Quantity;
    }
    summary.orderTotal += orderDetail.UnitPrice * orderDetail.Quantity * (1 - orderDetail.Discount);
    summary.productCount += orderDetail.Quantity;
    summary.discount += orderDetail.UnitPrice * orderDetail.Quantity * orderDetail.Discount;

}

for (let orderId in summaryByOrderId){
    const summary = summaryByOrderId[orderId];
    console.log(`OrderID: ${orderId}, lineas ${summary.lineCount}, máxima cantidad: ${summary.maxQuantity}, Total de productos: ${summary.productCount}, Descuento: ${summary.discount}, Total: ${summary.orderTotal}`);
} */