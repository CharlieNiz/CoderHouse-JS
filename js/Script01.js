alert("Bienvenido al banco HDMP inc") //Calculador de plazo fijo a 12 meses con tasa fija de 75% anual
let interes = 0
function PlazoFijo() {
    let monto = prompt("Ingrese monto a invertir"); //pide ingresar un valor de dinero a invertir
    while (isNaN(monto) == true || monto == "") { //mientras 'monto' no sea un número o sea nulo, continuará solicitando ingreso
        alert("Debe ingresar un valor numérico"); //alerta de valor ingresado incorrecto
        monto = prompt("Ingrese monto a invertir"); //nueva solicitud de ingreso
    }
    const tasa = .75 //valor constante de tasa de interes
    let meses = prompt("Cantidad de meses"); //solicitud de ingreso de meses
    while (isNaN(meses) == true || meses == "") { //mientras 'meses' no sea un número o sea nulo, continuará solicitando ingreso
        alert("Debe seleccionar entre 1 y 12 meses"); //permite ingresar más de 12 pero la funcion calcula hasta 12 meses cómo máximo
        meses = prompt("Cantidad de meses"); //nueva solicitud de ingreso
    }
    interes = monto * tasa / 365 * meses * 30; //formula para cálculo del interes anual aplicado a los días
    if (meses > 12) { //en caso de ingresar más de 12 meses, los intereses se calcularán por 12 (es el límite máximo de meses)
        interes = monto * tasa / 365 * 12 * 30; //Calculo de interes por 12 meses
        alert("Intereses calculados con la taza anual de : "
            + tasa * 100 + "% " + "equivalen a: $" + interes.toFixed(2) + " para un plazo de: "
            + 365 + " dias " + "NOTA: el plazo máximo a calcular es de 12 meses"); //aclaración de los valores mostrados
    } else //Al ingresar menos de de 12 meses, se mostrarán los días correspondientes
        alert("Los intereses generados con una taza anual de : "
            + tasa * 100 + "% " + "equivalen a: $" + interes.toFixed(2) + " para un plazo de: "
            + meses * 30 + " dias");

    const PlazoFijoSafe = [];
    PlazoFijoSafe.push((monto), (meses), (interes.toFixed(2)));
    console.log(PlazoFijoSafe);
}

function conversor() {
    let ARS = 0
    let USD = 0
    let EUR = 0
    let date = 0
    let moneda = prompt("1 Pesos ARG \n2 Dolares USD \n3 Euros EU \nEnter para salir")
    while (moneda != "") {
        switch (moneda) {
            case '1':
                ARS = prompt("ingrese monto en pesos ARG o Enter para continuar")
                if (ARS != "") {
                    USD = ARS / 370
                    EUR = ARS / 400
                    alert("$" + ARS + " Pesos Argentinos equivalen a:" + "\n$" + USD.toFixed(2) + " dolares USD" + "\n$" + EUR.toFixed(2) + " Euros")
                    const ARSsafe = [];
                    ARSsafe.push(("pesos: "+ARS),("dolares: "+USD.toFixed(2)),("euros: "+EUR.toFixed(2)),(date = new date));
                    console.log(ARSsafe); 
                }
                moneda = prompt("Desea realizar una nueva conversión: \n1 Pesos ARG \n2 Dolares USD \n3 Euros EU \nEnter para volver al menu anterior")
                moneda == "";
                break;
            case '2':
                USD = prompt("ingrese monto en dolares USD o Enter para continuar")
                if (USD != "") {
                    ARS = USD * 370
                    EUR = USD * .8
                    alert("$" + USD + " Dolares Americanos equivalen a:" + "\n$" + ARS.toFixed(2) + " Pesos Argentinos ARG" + "\n$" + EUR.toFixed(2) + " Euros")
                    const USDsafe = [];
                    USDsafe.push(("dolares: "+USD),("pesos: "+ARS.toFixed(2)),("euros: "+EUR.toFixed(2)));
                    console.log(USDsafe); 
                }
                moneda = prompt("Desea realizar una nueva conversión: \n1 Pesos ARG \n2 Dolares USD \n3 Euros EU \nEnter para volver al menu anterior")
                moneda == "";
                break;
            case '3':
                EUR = prompt("ingrese monto en Euros EUR o Enter para continuar")
                if (EUR != "") {
                    ARS = EUR * 400
                    USD = EUR * 1.2
                    alert("$" + EUR + " Euros equivalen a:" + "\n$" + ARS.toFixed(2) + " Pesos Argentinos ARG" + "\n$" + USD.toFixed(2) + " Dolares Americanos USD")
                    const EURsafe = [];
                    EURsafe.push(("euros: "+EUR),("pesos: "+ARS.toFixed(2)),("dolares: "+USD.toFixed(2)));
                    console.log(EURsafe); 
                }
                moneda = prompt("Desea realizar una nueva conversión: \n1 Pesos ARG \n2 Dolares USD \n3 Euros EU \nEnter para volver al menu anterior")
                moneda == "";
                break;
            default: break;        
        }

    }

}

function prestamos() {
    alert("funcionalidad de prestamos en contrucción");
}

let menu = prompt("Seleccione la opción deseada \nopción 1 simulador de plazos fijos \nOpción 2 convertir divisas \nOpción 3 prestamo personal\nEnter para salir");
while (menu != "") {
    switch (menu) {
        case '1':
            PlazoFijo();
            break;
        case '2':
            conversor();
            break;
        case '3':
            prestamos();
            break;
    }
    menu = prompt("¿Desea realizar otra operación? \nopción 1 simular plazo fijo \nOpción 2 convertir divisas \nOpción 3 prestamo personal\nEnter para salir");
}