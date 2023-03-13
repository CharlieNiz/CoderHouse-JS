alert("Bienvenido al simulador de Plazos fijos y Prestamos") //Calculador de plazo fijo a 12 meses con tasa fija anual de 75% en pesos o 10% anual en USD
let monto = 0; let interes = 0; let total = 0; let tasa = 0; let meses = 0; //declaración de variables

function PlazoFijo() { //función para cálculo de los plazos fijos
    monto = prompt("Ingrese monto en " + moneda + " a invertir"); //solicitud de ingreso del valor de dinero a invertir
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
    alert("Tasa anual : " + tasa * 100 + "% \nPlazo: " + meses * 30 + " dias\nIntereses: $ " //muestra de los resultados obtenidos
        + interes.toFixed(2) + " " + moneda + "\nTotal a reembolsar: $" + total.toFixed(2) + " " + moneda);
    const PlazoFijoSafe = []; //creación de array para guardado de datos
    PlazoFijoSafe.push((monto), (tasa), (meses), (interes.toFixed(2)), total.toFixed(2),); //guardado de datos para ordenar posteriormente
    console.log(PlazoFijoSafe);
}

function Ordenar() { //función para ordenamiento de datos
    alert("funcionalidad de ordenamiento en contrucción");
}

let menu = prompt("Seleccione la opción deseada \n\nOpción 1 Plazo fijo en Pesos ARS\nOpción 2 Plazo fijos en Dolares USD\nEnter para salir"); //menu principal
while (menu != "") {
    switch (menu) { //dependiendo de la selección se establece el tipo de moneda y tasa correspondiente
        case '1':
            tasa = '.75'; moneda = "pesos" //moneda "pesos" tasa 75%
            PlazoFijo();
            break;
        case '2':
            tasa = '.1'; moneda = "dolares" //moneda "dolares" tasa 10%
            PlazoFijo();
            break;
        case '3':
            Ordenar();
            break;
    }
    menu = prompt("¿Desea realizar otra operación? \n\nOpción 1 Plazo fijo en Pesos ARS\nOpción 2 Plazo fijos en Dolares USD\nOpción 3 Ordenar consultas existentes\nEnter para salir");
}