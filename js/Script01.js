//alert("Bienvenido al simulador de Plazos fijos y Prestamos") //Calculador de plazo fijo a 12 meses con tasa fija anual de 75% en pesos o 10% anual en USD
let monto = 0; let interes = 0; let total = 0; let tasa = 0; let meses = 0; //declaración de variables
let plazo = []; let ganancia = [];

function PlazoFijo() { //función para cálculo de los plazos fijos
    monto = prompt("Ingrese monto en a invertir"); //solicitud de ingreso del valor de dinero a invertir
    while (isNaN(monto) == true || monto == "") { //mientras 'monto' no sea un número o sea nulo continuará solicitando ingreso
        alert("Debe ingresar un valor numérico"); //advertencia de valor ingresado incorrecto
        monto = prompt("Ingrese monto a invertir"); //nueva solicitud de ingreso
    }
    meses = prompt("Cantidad de meses\nEntre 1 y 12"); //solicitud de ingreso de meses
    while (isNaN(meses) == true || meses == "" || meses > 12) { //mientras 'meses' no sea un número, sea nulo o mayor a 12, continuará solicitando ingreso
        alert("Debe ingresar cómo máximo 12 meses\n\nNOTA: No se realizarán calculos para más de 12 meses"); //advertencia de valor ingresado incorrecto
        meses = prompt("Cantidad de meses\nEntre 1 y 12"); //nueva solicitud de ingreso
    }
    interes = monto * tasa / 365 * meses * 30; //formula para cálculo del 'interes' anual aplicado a los días según la 'tasa' correspondiente
    total = parseInt(monto) + parseFloat(interes); //guardado de datos númericos para calcular el total a reembolsar
    alert("Tasa anual : " + tasa * 100 + "% \nPlazo: " + meses * 30 + " dias\nIntereses: $ " + interes.toFixed(2) + "\nTotal a reembolsar: $" + total.toFixed(2));

    plazo.push(meses); console.log(meses);
    ganancia.push(total.toFixed(2)); console.log(ganancia);
}

function Orden() {
    let opcion = prompt("Seleccione criterio de ordenamiento \n\n\n1 - Mayores ganancias generadas\n\n2 - Plazo más corto calculado\n\nENTER volver al menu anterior\n"); //menu principal
    while (opcion != "") {
        switch (opcion) { //dependiendo de la selección se establece el tipo de moneda y tasa correspondiente
            case '1':
                alert(ganancia.sort((a, b) => b - a));
                break;
            case '2':
                alert(plazo.sort((a, b) => a - b));
                break;
            case '3':
                break;
        }
        opcion = prompt("Seleccione nuevo criterio de ordenamiento \n\n\n1 - Mayores ganancias generadas\n\n2 - Plazo más corto calculado\n\nENTER para volver al menu anterior\n");
    }
}

let menu = prompt("Menu principal\n\n\nPresione 1 para calcular su primer plazo fijo en Pesos ARS\n\nENTER para SALIR\n"); //menu principal
while (menu != "") {
    switch (menu) { //dependiendo de la selección se establece el tipo de moneda y tasa correspondiente
        case '1':
            tasa = .75;
            PlazoFijo();
            break;
        case '2':
            Orden();
            break;
    }
    menu = prompt("¿Desea realizar otra operación? \n\n\n1 - Calcular nuevo plazo fijo en Pesos ARS\n\n2 - Ordenar consultas existentes\n\nENTER para SALIR\n");
}