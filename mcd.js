// recursivo
var mcd = function(a, b) {  
    if (!b) {  
        return a;  
    }  

    return mcd(b, a % b);

 };  
 console.log(mcd(16,24));
 
// iterativo
function mcditer (a, b){
    while (b){
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}
console.log (mcditer(16,24));