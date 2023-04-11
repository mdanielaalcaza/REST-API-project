/**
 * Variables : Pequeños espacios de memoria que conservan/guardan un valor
 */

//son pequeñas cajas para almacenar valor, necesitamos variable con nombre + operador + valor.

/**
 * Hay 3 formas de definir variables
 *
 * Var
 * Let
 * Const
 */

// Variables con VAR - Funciona de forma global en el archivo

var nombre = "Daniela"; // x = 2
console.log(nombre);

var edad = 33;
console.log(edad);

var persona = {
  nombre: "daniela",
  apellido: "alcaza",
  edad: 33,
  direccion: {
    calle: "hector paniza",
    numerodecasa: 2090,
    telefono: +5493514806123,
  },
  ciudadesVisitadas: ["cordoba",
   "buenos aires",
   "tandil"]
};
console.log(persona);

var ciudad;
ciudad = "Cordoba";
ciudad = "buenos aires";
console.log(ciudad);


/**
 * Redefinir: Con var se genera el espacio a la variable, pero en este caso esta underfind, 
 * luego se define el valor con Italia
 * se redefine con Francia, tomando este valor como úlitmo
 * JS: Debilmente tipado - No reconoce el tipo de dato que almacena, ej. number */ 
var pais;
pais = 'Italia';
pais = 'Francia';
pais = 13;
console.log(pais);

// Variables con LET 
//funciona de la misma forma que var para declarar,con la diferencia que se aplica a un bloque de codigo {} y no global. 
let nombre = "daniela";
console.log(nombre);

{
  let saludo = "Hola, Buen día, Soy Daniela";
  console.log(saludo);
}
console.log(saludo);

{
  var saludo = "Hola, Buen día, Soy Daniela";
  console.log(saludo);
}
console.log(saludo);


// Variables con CONST -  Variables que no cambian con el tiempo - Variables debemos escribirlo en MAY
const PI = 3.14;
console.log(PI);
// No podemos dejarlas sin definicion, debe estar inicializada

//TEMPLATE STRING : comillas invertidas altgr + C~
var nombre = "Daniela";
var saludo = `Hola soy ${nombre}

cómo estás?`;

console.log(saludo);
// permite espacios en linea
