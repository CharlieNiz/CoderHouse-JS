alert("Bienvenido al simulador de Plazos fijos") //Calculador de plazo fijo a 12 meses con tasa fija anual de 75%
let monto = 0; let interes = 0; let total = 0; let tasa = 0; let meses = 0; //declaración de variables
salvar = []; //declaración de la array para guardar los datos a ordenar

function PlazoFijo() { //función para cálculo de los plazos fijos
    monto = prompt("Ingrese monto en a invertir"); //solicitud de valor numerico de dinero a invertir
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
    total = parseInt(monto) + parseFloat(interes); //guardado de datos numericos para calcular el total a reembolsar
    alert("Tasa anual : " + tasa * 100 + "% \nPlazo: " + meses * 30 + " dias\nIntereses: $ " + interes.toFixed(2) + "\nTotal a reembolsar: $" + total.toFixed(2)); //muestra resultados

    let plazo = meses; let ganancias = total.toFixed(2); let inicial = monto//cambio de variables
    let calculo = { plazo, ganancias, inicial }; //guardo los datos nuevos en el la variable 'calculo'
    salvar.push(calculo); console.log(calculo); //guardo los valores obtenidos en el array 'salvar' y muestro en la consola los valores
}

function mostrar(items) { //funcion que aplica a todos los items de una array para posteriormente utilizar en el 'alert()'
    let show = "";
    items.forEach(item => {
        show += "Monto inicial: $" + item.inicial + "\nPlazo: " + (item.plazo) * 30 + " dias" + "\nGanancia: $" + item.ganancias + "\n\n";
    });
    return show;
}

function Orden() { //funcion para ordenar datos de las arrays
    let opcion = prompt("Seleccione criterio de ordenamiento \n\n\n1 - Mayores ganancias generadas\n\n2 - Plazo más corto calculado\n\nENTER volver al menu anterior\n"); //menu de ordenamiento y filtrado
    let valor = salvar.slice(0);
    while (opcion != "") {
        switch (opcion) { //dependiendo de la selección se establece el tipo de moneda y tasa correspondiente
            case '1':
                let MasGanancias = valor.sort((a, b) => b.ganancias - a.ganancias); //ordenamiento de mayor a menor ganancias
                alert(mostrar(MasGanancias)); //llama a la función 'mostrar()'
                return MasGanancias;
            case '2':
                let MenorPlazo = valor.sort((a, b) => a.plazo - b.plazo); //ordena de menor a mayor la duración en meses
                alert(mostrar(MenorPlazo));
                return MenorPlazo;
        }
        opcion = prompt("Seleccione nuevo criterio de ordenamiento \n\n\n1 - Mayores ganancias generadas\n\n2 - Plazo más corto calculado\n\nENTER para volver al menu anterior\n");
    }
}

let menu = prompt("Menu principal\n\n\nPresione 1 para calcular su primer plazo fijo en Pesos ARS\n\nENTER para SALIR\n"); //menu principal
while (menu != "") {
    switch (menu) { //dependiendo de la selección llama la función correspondiente
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