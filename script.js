alert("Calcula tus cuotas")
    let nombre = prompt("Ingresa tu nombre")
    let cantidad =parseFloat( prompt(nombre + " ingresa el importe en $"))
    let cuotas = parseInt(prompt("cantidad de cuotas: podes elegir entre 1,3,6,12 ")) 

function calcularCuotas() {
    
       
    if (cuotas == 1) {
        importeCuotas();

    }
    else if (cuotas == 3) {
        importeCuotas();
    }
    else if (cuotas == 6) {
        importeCuotas();
    }
    else if (cuotas == 12) {
        importeCuotas();
    } else  {
        alert("podes elegir  1,3,6 y 12 cuotas")
    }
}

function importeCuotas() {
    let importeCuotas = cantidad / cuotas
    let decimales = importeCuotas.toFixed(2)
    alert("Vas a pagar " + cuotas + " cuotas de: $" + decimales)
}

calcularCuotas();