//Calculador de plazo fijo a 12 meses con tasa fija de 75% anual
alert("Bienvenido al simulador de plazos fijos")
let interes = 0
function PlazoFijo(){
let monto = prompt("Ingrese monto a invertir"); //pide ingresar un valor de dinero a invertir
    while (isNaN(monto) == true || monto == ""){ //mientras 'monto' no sea un número o sea nulo, continuará solicitando ingreso
        alert("Debe ingresar un valor numérico"); //alerta de valor ingresado incorrecto
        monto = prompt("Ingrese monto a invertir"); //nueva solicitud de ingreso
    }
    const tasa = .75 //valor constante de tasa de interes
    let meses = prompt("Cantidad de meses"); //solicitud de ingreso de meses
    while (isNaN(meses) == true || meses == ""){ //mientras 'meses' no sea un número o sea nulo, continuará solicitando ingreso
        alert("Debe seleccionar entre 1 y 12 meses"); //permite ingresar más de 12 pero la funcion calcula hasta 12 meses cómo máximo
        meses = prompt("Cantidad de meses"); //nueva solicitud de ingreso
    }
    interes = monto * tasa / 365 * meses * 30; //formula para cálculo del interes anual aplicado a los días
    if(meses>12){ //en caso de ingresar más de 12 meses, los intereses se calcularán por 12 (es el límite máximo de meses)
        interes = monto * tasa / 365 * 12 * 30; //Calculo de interes por 12 meses
        alert("Intereses calculados con la taza anual de : "
        + tasa *100 + "% " + "equivalen a: $" + interes.toFixed(2) + " para un plazo de: "
        + 365 +" dias "+"NOTA: el plazo máximo a calcular es de 12 meses"); //aclaración de los valores mostrados
    }else //Al ingresar menos de de 12 meses, se mostrarán los días correspondientes
        alert("Los intereses generados con una taza anual de : "
        + tasa *100 + "% " + "equivalen a: $" + interes.toFixed(2) + " para un plazo de: "
        + meses *30 +" dias");
}
PlazoFijo();
