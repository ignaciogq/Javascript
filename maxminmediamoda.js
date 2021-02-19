const startTime = new Date().getTime();

const a = [2,3,1,6,3,7,6,9,8,10];

const counting = [];


for (let i = 0; i < a.length; i++) {
    const b = a[i];
    if (counting[b]) {
        counting[b]++;
    }
    else {
        counting[b] = 1;
    }
}

let max = -Infinity;
for (b in counting) {
    const count = counting[b];
    if (count > max) {
        max = count;
    }
}

console.log(counting);
console.log(max);

for (b in counting) {
    const count = counting[b];
    if (count === max) {
        console.log('moda: %o, ser repite: %o veces', b, count)
    }
}

a.sort(function(x1, x2 ) { return x1-x2;});

console.log(a);

const words = ['una', 'dos', 'otra', 'vale', 'bueno', 'acantilado'];
words.sort(function(w1, w2) {
    if (w1 === w2) return 0;
    if (w1 > w2) return 1;
    return -1;
});

console.log(words);

const endTime = new Date().getTime();

console.log('Esto ha tardado %o milisegundos', endTime - startTime);


var k = 1 / 10000 / Math.log(10000);

var t = k  20000  Math.log(20000);

t = k  100000  Math.log(100000);

console.log(t);

const s = a.reduce( function(v1, v2) {
    return v1 + v2;
}, 0);

const m = a.reduce( function(v1, v2) {
    if (v1 > v2) return v1;
    return v2;
}, -Infinity);

console.log(s);

console.log(m);

const c = a.map( function(caca) {
    return caca * caca;
});

console.log(c);