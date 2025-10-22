let operacionActual = '';
let operador = '';
let numeroAnterior = '';

function agregarNumero(numero) {
    operacionActual += numero;
    document.getElementById('pantalla').value = operacionActual;
}

function agregarOperador(op) {
    if (operacionActual !== '') {
        operador = op;
        numeroAnterior = operacionActual;
        operacionActual = '';
    }
}

function limpiarPantalla() {
    operacionActual = '';
    operador = '';
    numeroAnterior = '';
    document.getElementById('pantalla').value = '';
}

function calcular() {
    let resultado;
    const num1 = parseFloat(numeroAnterior);
    const num2 = parseFloat(operacionActual);

    if (operador === '+') {
        resultado = num1 + num2;
    } else if (operador === '-') {
        resultado = num1 - num2;
    } else if (operador === '*') {
        resultado = num1 * num2;
    } else if (operador === '/') {
        resultado = num1 / num2;
    }

    document.getElementById('pantalla').value = resultado;
    operacionActual = resultado.toString();
    operador = '';
    numeroAnterior = '';
}
