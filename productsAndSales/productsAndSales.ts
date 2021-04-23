interface products {
    productId: number,
    productsName: string
}

interface sales {
    orderDate: string,
    productId: number,
    amount: number
}

interface drawSales {
    productId: number,
    monthSalesProduct: number,
    totalSalesProduct: number,
}

interface {

}

const year = 1997;
const monthSalesProduct = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

async function getJson(url: string): Promise <any> {
    const response = await fetch(url);
    return response.json();
}
