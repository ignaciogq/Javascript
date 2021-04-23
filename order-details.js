const fs = require('fs');
var json = fs.readFileSync('order-details.json');
var orderDetails = JSON.parse(json);

// console.log(orderDetails);

// STREAM AGREGGATE

// let currentOrderId = undefined;
// let orderTotal = undefined;

// for (let i = 0; i < orderDetails.length; i++) {
//     const orderDetail = orderDetails[i];

//     if (currentOrderId !== orderDetail.OrderID) {
//         if (orderTotal !== undefined) {
//             console.log(`OrderId: ${currentOrderId}, Total: ${orderTotal}`);
//         }
//         currentOrderId = orderDetail.OrderID;
//         orderTotal = 0;
//     }
//     orderTotal += orderDetail.UnitPrice * orderDetail.Quantity * (1 - orderDetail.Discount);
// }
// console.log(`OrderId: ${currentOrderId}, Total: ${orderTotal}`);


// // HASH MATCH AGREGGATE

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
}


// VIERNES

let orderLines = 0;
let currentOrderId = undefined;

for (let i = 0; i < orderDetails.length; i++) {
    const orderDetail = orderDetails[i];

    if (orderDetail.OrderID !== currentOrderId) {
        orderLines = 1;
        currentOrderId = orderDetail.OrderID;
    }
    orderLines += 1;
}
console.log(orderLines);