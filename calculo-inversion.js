function calcularInversion (inversionInicial, inversionMensual, años) {
    let rentAnual = 1.08;
    let hucha = 0;
    let primeraInversion = inversionInicial;
    for (let i = 1; i <= años; i++) { 
        hucha += inversionMensual * 12;
        let retornoAnual = (inversionInicial + inversionMensual * 12) * rentAnual;
        let rentabilidad = retornoAnual - primeraInversion;
        let impuestos = rentabilidad * 0.21;
        console.log(`${i}: ${inversionInicial} => ${retornoAnual.toFixed(2)}. 
        Rentabilidad: ${rentabilidad.toFixed(2)}.
        Quitando impuestos: ${(rentabilidad - impuestos).toFixed(2)} 
        Hucha: ${hucha + primeraInversion}
        Ganancia real: ${(rentabilidad - impuestos) - (hucha + primeraInversion)}`)
        inversionInicial = retornoAnual;
    }
}
 
calcularInversion(50000, 400, 20);