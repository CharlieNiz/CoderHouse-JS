let operaciones = [];

const //Elementos del DOM
    inputInversion = document.getElementById('inputInvest'),
    selectDuracion = document.getElementById('selectDuration'),
    mostrarResultado = document.getElementById('result'),
    btnCalcular = document.getElementById('btnCalc'),
    show = document.getElementById('text');

class Plazo { //Método constructor
    constructor(inversion, duracion, reembolsar, id) {
        this.inversion = parseInt(inversion);
        this.duracion = parseInt(duracion);
        this.reembolsar = parseFloat(reembolsar);
    }
}

function Valores (ingresos){   //tomo los valores cargados en el formulario
    const calculos = new Plazo (inputInversion.value, selectDuracion.value, mostrarResultado.value)
    ingresos.push(calculos)
}

function GuardarValores(ingresos){
    localStorage.setItem('operacionesGuardadas', JSON.stringify(ingresos))
}

function PlazoFijo() { //función para cálculo de los plazos fijos
    let inversion = inputInversion.value;
    let duracion = selectDuracion.value;
    let interes = inversion  * .75 / 365 * duracion * 30; //formula para cálculo del 'interes' anual aplicado a los días según la 'tasa' correspondiente
    let total = parseInt(inversion) + parseFloat(interes); //guardado de datos numericos para calcular el total a reembolsar
    reembolsar = total.toFixed(2);
    show.innerHTML = "<br>Con su inversión de:"+"<b> $"+inversion+"</b>"+"<br>Durante un periodo de: <b>"+duracion*30+"</b> días"+"<br>Otendrá: $<b>"+reembolsar+"</b> pesos";
    mostrarResultado.value = `${reembolsar}`;
    Valores(operaciones);
    GuardarValores(operaciones);
}

btnCalc.onclick = (e) => {
    e.preventDefault();
    PlazoFijo();
}