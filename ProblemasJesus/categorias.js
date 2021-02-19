const categories = [
    {
        id: 1,
        name: "Bebidas"
    },
    {
        id: 2,
        name: "Entrantes"
    },
    {
        id: 3,
        name: "Plato principal"
    },
    {
        id: 4,
        name: "Postres"
    },
];

const products = [
    {
        id: 1,
        categoryId: 1,
        name: "Vino tinto"

    },
    {
        id: 2,
        categoryId: 1,
        name: "Vino blanco"

    },
    {
        id: 3,
        categoryId: 1,
        name: "Refresco de cola"
    },
    {
        id: 4,
        categoryId: 2,
        name: "Langostinos"
    },
    {
        id: 5,
        categoryId: 1,
        name: "Refresco de naranja"

    },
    {
        id: 6,
        categoryId: 1,
        name: "Té"

    },
    {
        id: 8,
        categoryId: 2,
        name: "Ensalada campera"

    },
    {
        id: 9,
        categoryId: 2,
        name: "Vichychoisse"

    },
    {
        id: 10,
        categoryId: 2,
        name: "Croquetas"

    },
    {
        id: 11,
        categoryId: 2,
        name: "Tapa de jamón"

    },
    {
        id: 12,
        categoryId: 2,
        name: "Mejillones al vapor"

    },
    {
        id: 13,
        categoryId: 3,
        name: "Espaguetti a la carbonara"

    },
    {
        id: 14,
        categoryId: 3,
        name: "Filete de ternera con patatas"

    },
    {
        id: 15,
        categoryId: 3,
        name: "Arroz a la cubana"

    },
    {
        id: 16,
        categoryId: 3,
        name: "Pollo asado"

    },
    {
        id: 17,
        categoryId: 3,
        name: "Lasaña"

    },
    {
        id: 18,
        categoryId: 4,
        name: "Fruta"

    },
    {
        id: 19,
        categoryId: 4,
        name: "Tiramisú"

    },
    {
        id: 20,
        categoryId: 4,
        name: "Tarta de queso"

    },
    {
        id: 21,
        categoryId: 4,
        name: "Helado de chocolate"

    },
    {
        id: 22,
        categoryId: 4,
        name: "Yogur"

    }


];

// c.products = [];

// function findCategory(categories, id){
//     for (let i = 0; i < categories.length; i++){
//         if (categories[i].id === id) return categories[i];
//     }
//     return undefined;
// }

// for (let i=0; i<products.length;i++){
//     products[i].category = findCategory(categories,products[i].categoryId);
// }

// for ( let i = 0; i < categories.length; i++){
//     const cat = categories[i];
//     cat.products = [];
//     for (let j = 0; j < products.length; j++){
//         if (products[j].categoryId === cat.id){
//             cat.products.push(products[j]);
//         }
//     }
// }

// console.log(categories);



const categoryById = [];

for (let i = 0; i < categories.length; i++){
    const cat = categories[i];
    categoryById[cat.id] = cat;
    cat.products = [];
}

for (let i = 0; i < products.length; i++){
    const prod = products[i];
    const cat = categoryById[prod.categoryId];
    prod.category = cat;
    cat.products.push(prod);
}