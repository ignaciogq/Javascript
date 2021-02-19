function fibonacci (n) {
    let a = 0;
    let b = 1;
    let f = 1;
    
    if (n === 0){
        return 0;
    }
    if (n === 1){
        return 1;
    }
    for (let i = 2; i <= n; i++){
        f = a + b;
        a = b;
        b = f;
    }
    return f;
}