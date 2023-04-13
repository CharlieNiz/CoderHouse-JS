let operaciones = []; //declaración de array
const //Elementos del DOM
    inputInversion = document.getElementById('inputInvest'),
    selectDuracion = document.getElementById('selectDuration'),
    mostrarResultado = document.getElementById('result'),
    btnCalcular = document.getElementById('btnCalc'),
    btnConverter = document.getElementById('btnConver'),
    btnClear = document.getElementById('btnClean'),
    show1 = document.getElementById('text1'),
    show2 = document.getElementById('text2');

class Plazo { //Método constructor
    constructor(inversion, duracion, reembolsar) {
        this.inversion = parseInt(inversion);
        this.duracion = parseInt(duracion);
        this.reembolsar = parseFloat(reembolsar);
    }
}

function Valores(ingresos) {   //tomo los valores cargados en el formulario
    const calculos = new Plazo(inputInversion.value, selectDuracion.value, mostrarResultado.value);
    ingresos.push(calculos)
}

function GuardarValores(ingresos) { //función para guardado de datos
    localStorage.setItem('operacionesGuardadas', JSON.stringify(ingresos))
}

function PlazoFijo() { //función para cálculo de los plazos fijos
    let inversion = inputInversion.value;
    let duracion = selectDuracion.value;
    let interes = inversion * .75 / 365 * duracion * 30; //formula para cálculo del 'interes' anual aplicado a los días según la 'tasa' correspondiente
    let total = parseInt(inversion) + parseFloat(interes); //guardado de datos numericos para calcular el total a reembolsar
    reembolsar = total.toFixed(2);
    show1.innerHTML = "<br>Con su inversión de:" + "<b> $" + inversion + "</b>" + "<br>Durante un periodo de: <b>" + duracion * 30 + "</b> días" + "<br>Obtendrá: $<b>" + reembolsar + "</b> pesos";
    mostrarResultado.value = `${reembolsar}`;
    Valores(operaciones);
    GuardarValores(operaciones);
}

function ClearAll() { //función para borrar los datos de local storage e información mostrada en pantalla (excepto el formulario en curso)
    localStorage.clear();
    sessionStorage.clear();
    show1.innerHTML = "";
    show2.innerHTML = "";
}

function convertir() { //función para conectar al API con el fin de obtener el valor de conversión de ARS a USD (en valores oficiales)
    fetch(`https://api.currencyapi.com/v3/latest?apikey=pWkDP9VjkWMlMUMVTygbSUfDD43y2tMpdev01EDa&currencies=USD&base_currency=ARS`) //conexión al API para obtener cotización oficial del dolar
        .then(res => res.json())
        .then(meta => {
            const conversion = meta.data.USD.value; //guardado de dato de conversión para aplicar al valor total de conversión
            console.log(meta);
            show2.innerHTML = "<br>Su reembolso equivalente en USD es de: <b>" + (reembolsar * conversion).toFixed(2) + "</b> dolares"; //mostrar resultados en pantalla
        })
}

btnCalc.onclick = (e) => { //boton para ejecutar el calculo de plazo fijo
    e.preventDefault();
    if (!inputInversion.value) {
        Swal.fire(
            {
                title: 'Advertencia',
                text: 'Debe ingresar un valor a invertir antes de realizar al cálculo',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
            }
        )
    } else {
        show2.innerHTML = "";
        PlazoFijo();
    }
}

btnConver.onclick = (e) => { //boton que permite convertir el valor a reembolsar de ARS a USD
    e.preventDefault();
    if (!inputInversion.value) {
        Swal.fire(
            {
                title: 'Error',
                text: 'Debe ingresar un valor a invertir antes de intentar convertir el valor a reembolsar',
                icon: 'error',
                confirmButtonText: 'Aceptar',
            }
        )
    } else {
        convertir();
    }
}

btnClear.onclick = (e) => { //boton que borra los datos de local storage y session storage almacenados
    e.preventDefault();
    ClearAll();
    Swal.fire(
        {
            title: 'Borrado exitoso',
            text: 'Se ha limpiado el historial de operaciones realizadas',
            icon: 'info',
            confirmButtonText: 'Aceptar',
        }
    )
}