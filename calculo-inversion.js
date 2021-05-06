function calcularInversion (inversionInicial, inversionAnual, años) {
    let rentAnual = 1.08;
    for (let i = 1; i <= años; i++) {
        let retornoAnual = (inversionInicial + inversionAnual) * rentAnual;
        inversionInicial = retornoAnual;
        console.log(`${i}: ${retornoAnual.toFixed(2)}`)
    }
}
 
calcularInversion(0, 600, 20);