


//**********************************  Explicaiones basicas del lenguaje ******************************************************************

var nombre = "Juan";

console.log(window);

let saludo = `Hola ${nombre}`;
console.log(saludo);


/*variable especiales de JavaScript*/

// indefinado quiere decir que no ha sido inicializado
let indefinido;
console.log(indefinido);

// nulo quiere decir que ha sido inicializado pero no tiene valor
let nulo = null;
console.log(nulo);


// NaN quiere decir que no es un número
let noEsNumero = "Hola" * 2;
console.log(noEsNumero);



//******************************************** Funciones ********************************************************

// Funcion declarada

function estoEsUnaFuncion() {
    console.log("Hola soy una funcion declarada");
}
estoEsUnaFuncion();

function suma(a, b) {
    return a + b;
}
console.log(suma(2, 3));

// Funcion expresada
const resta = function(a, b) {
    return a - b;
}
console.log(resta(5, 3));

// Funcion de flecha
const multiplicacion = (a, b) => {
    return a * b;
}
console.log(multiplicacion(2, 3));

// Funcion de flecha simplificada
const division = (a, b) => a / b;
console.log(division(6, 3));

// Funcion de flecha con un solo argumento
const cuadrado = a => a * a;
console.log(cuadrado(4));