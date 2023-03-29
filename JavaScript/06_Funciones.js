/**
 * Funciones: Conj. de sentencias que utilizamos para realizar acciones especificas en los programas
 * Pueden ser guardas como una variable, como valor.
 * Tarea especifica: hay que declararla
 */

//Declarativas
//function + nombre de la funcion + () {cuerpo de la funcion}

function saludar(params) {
  console.log("Hola soy Daniela");
}

//cómo la llamamos:

saludar();

function saludar(nombre) {
  console.log(`Hola soy ${nombre}`);
}

saludar("Daniela");

//retorna un valor, y apra eso necesitamos guardar el valor
function saludar(nombre) {
  return `Hola soy ${nombre}`;
}
var saludo = saludar("Daniela");
console.log(saludo);
console.log(saludar("María Daniela Alcaza"));

//Funciones boy?: cumple solo una tarea, y no retornan un valor

/**
 * Funciones de Espresion
 * Funcion que guarda un valor, y ser tratada como una variable
 * Funciones anonimas porque no tienen un nombre
 */

var suma = function (a, b) {
  return a + b;
};
suma(2, 2);
console.log(suma(2, 2));

/**
 * Funciones flechas o arrow function
 * puede recibir parametros
 * pueden retornar algun valor
 * tiene implicito el return, podemos solo agregar los parametros despues de la flecha
 */

var resta = (a, b) => {
  return a - b;
};
console.log(resta(4, 2));

var multiplicar = (a, b) => a * b;
console.log(multiplicar(2, 10));

//cuando utilizamos la sintaxis con return: Depende del cuerpo de la funcion

var resta = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else {
    return "Solo puede restar numeros!";
  }
};
console.log(resta(6, 5));
console.log(resta(4, "4"));

