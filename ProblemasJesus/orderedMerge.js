/**
 * Merges two ordered arrays of numbers and returns an ordered array 
 * that contains all elements of both arrays.
 * @param {number[]} a an ordered array of numbers
 * @param {number[]} b another ordered array of numbers
 * @returns {number[]} the ordered merged array
 */

a = [1, 1, 3, 4, 6, 6, 10, 21, 21, 35, 48];
b = [2, 3, 5, 10, 10, 22, 33, 44];
m = [];

i = 0; i == a.length;
j = 0; j == b.lenght;

let i = 0;
let i = 0;

while (i < a.lenght && j < b.lenght) {
    if (j == b.lenght || i < a.lenght && a[i] < b[j]){
        m.push(a[i]);
        i++
    }
    else {
    m.push (b[j]);
    j++;
}
}

console.log(m);

/*

Should show:
[1, 1, 2, 3, 3, 4, 5, 6, 6, 10, 10, 10, 21, 21, 22, 33, 35, 44, 48]

*/