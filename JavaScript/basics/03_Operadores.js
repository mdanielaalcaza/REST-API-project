/**PERADORES: Son simbolos que nos indican que deben manipular los operando,
 * Es decir debe existir una operacion entre dos componentes
 */

//Operadores de Asignacion: almacena un valor a la variable

var x =2; 
var Y = TRUE;

// Operador de Asignacion de Adicion (+=) 

var x=2;
var y = 1;

x += y;//es algo que resuelve un valor: x = x+y
console.log(x);

//Operador de asignacion de resta (-=)

var x=1;
var y=2;
x -= y;
console.log(x);

// Operadores de asignacion de multiplicacion (*=)

var x = 2;
var y = 3;

x *= y;
console.log(x);

// Operadores de asigacion de division (/=)
var x=10;
var y=2;
x /= y;
console.log(x);

//Operador de Asignacion de Residuo (%=)

var x=1;
var y=2;
x %= y;
console.log(x);

// Operadores de Asignacion de Exponenciacion (**=)
var x=2;
var y=3;
x **= y;
console.log(x);

/**
 * OPERADORES DE COMPARACION: compracion entre los operando: nos retorna un valor logico
 * VERDADERO O FALSA - true - false
 */

//Operador Igual (==)

console.log(3==3);

console.log(3=='3'); //desventaja del tipado: no distingue tipo de dato

//Operadores No es Igual (!=)

console.log(3!=3);

//Operador estrictamente IGUAL (===)

console.log(3===3);

console.log(3==='3'); //en software productivo siempre en comparaciones utiliza el estricto igual

//Operadores desigualdad estricta (!==)

console.log(3!=='3');
console.log(3!='3');

//Operadores >, >=, <, <=

console.log(3>4);
console.log(3>=3);
console.log(2<4);
console.log(2<=4);

/** 
 * Operadores Aritmeticos
 * +, -, *, /, %, **
 */

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);

//Operadores Aritmeticos de Incremento (++)
//Operadores de incremento si lo usamos antes de la variable incrementa sin considerar la variable anterior.
//si lo usamos al final y volvemos imprimir sumando la varianble lo lista en aumento

var numero=0
console.log(++numero);

var numero = 0;
console.log(numero++);
console.log(numero);

//Operador de decremento (--)

var numero=3
console.log(--numero);

var numero=3
console.log(numero--);
console.log(numero);

/**
Operadores logicos */

// AND &&

console.log(true&&true);
console.log(2 > 3 && 1 <= 2);

//OR ||
console.log(true || false);
console.log(false || false);

// NOT  ! la negacion de una variable

console.log(!false);
console.log(!true);

// Operador de cadena o concatenacion ( + ) Solo trabaja con cadena de texto. Si trabajamos con numeros es aritmetico

var nombre = 'daniela';
var apellido = 'alcaza';
var nombrecompletos = nombre + ' ' + apellido;
console.log(nombrecompletos);

//Operador condicional (condicion ? valor1 : valor 2)

console.log(2 > 3 ? 'Es mayor' : 'Es menor');

//operador de desestructuracion : Obtiene una propiedad especifica de un objeto

var persona = {nombre : "Daniela", apellido : "Alcaza"};


var { nombre, apellido } = persona;
console.log(nombre);
console.log(apellido);
console.log(persona);

var persona = {nombre : "Daniela", apellido : "Alcaza"};
var { nombre: nome, apellido } = persona;
console.log(nome);
console.log(apellido);
console.log(persona);

// Operador desestructuración de arreglos

var arreglo = [1,2,3,4,5]

var [PrimeraPosicion] = arreglo;
console.log(PrimeraPosicion);

/**
 * Operador de miembro o acceso de propiedad
 */

// accede a las propiedades de los objetos

// NOTACION PUNTO

var persona={
    nombre: 'Daniela',
    apellido: 'Alcaza'
}
console.log(persona.nombre);
console.log(persona.apellido);

// Notacion por corchetes
var persona={
    nombre: 'Daniela',
    apellido: 'Alcaza'
}
console.log(persona['nombre']);

// Notacion por corchetes en arreglos

var arreglo= [21,22,23,24,25,27]
console.log(arreglo[2]);

//Operacion de determinacion de tipo (typeof) retorna el tipo de valor de una variable

console.log(typeof 'daniela');
console.log(typeof 23);
console.log(typeof true);


/**
 * EJERCICIOS OPERADORES
 */

//1. Escribir un programa que calcule el número de segundos que existen en un día
// Como todo el mundo sabe, un día tiene 86400 segundos.

var segundo = 1;
var hora = 60 * segundo;
var dia = 24 * hora;
console.log(segundo * hora * dia);

//2. Realiza un programa que a partir de los valores ancho=2 y alto=5, calcule el área de un rectángulo

var rectangulo = (
    (ancho = 2), 
    (alto = 5)
    );

var arearectangulo = (ancho*alto);
console.log(arearectangulo);

//3. Hacer un conversor de grados centígrados a grados Fahrenheit.

var grados = 20;
var conversor = (grados * 9/5 + 32);
console.log(conversor);