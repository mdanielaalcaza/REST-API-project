/**
 * Ciclos: Estructura que nos sirve para repetir un conj. de instrucciones 
 * la cantidad que le indica en el ciclo.
 */

// While : Evalua la condicion y si se cumple, ejecuta hasta superar la condicion. 

//while (condicion:true-false){codigo}

var contador= 0
while (contador <= 100){
    console.log('Hola mundo!');
} //blucle infinito

var contador= 0
while (contador <= 5){
    console.log('Hola mundo!');
    contador += 1;
}
//de esta manera se frena el ciclo, cuando supera la condicion.
// Si la condicion no se cumple, es decir es false, no imprime. 

/**
 * do - while : Ejecuta al menos una vez, y luego evalua la condicion. 
 */
var contador = 5;
do {
    console.log('Hola Mundo!');
    contador +=1;
} while (contador <= 4);


/**
 * For
 * Ayuda a iterar o repetir una instruccion
 */

//for (expresionInicial; expresionCondicional; expresionDeActualizacion){las instrucciones}
/**
 * expresionInicial: variable ya definida en el ciclo let
 * expresionCondicional: condicion
 * expresionDeActualizacion: Utiliza la expresion inicial en cada ciclo, hasta que deja de ser verdadera
 */

// 3 maneras de escribir la variable
for (let contador = 0; contador <= 5; contador++) {
    console.log('Hola Mundo!');   
}

for (let index = 0; index <= 5; index++) {
    console.log('Hola Mundo!');   
}

for (let i = 0; i <= 5; i++){
    console.log('Hola Mundo');
}


/**
 * For in: con caracteristica unica, sirve para iterar en objetos js
 */

// for (sintaxis especifica){instrucciones}

/**
 * Sintaxis Especifica:
 * Variable + operador IN + objeto
 */

var persona = {
    nombre: 'Daniela',
    apellido: 'Alcaza',
    edad:34
}

for (let key in persona) {
    console.log(key, persona[key]);
        
    }
// nos ayuda a recorrer los objetos, para verificar que las claves esten bien definidas(bugs)

/**
 * For of
 * Tiene:
 * Variable: donde se almacena el valor de cada item del objeto iterable
 * operador of
 * objeto iterable: ej. arreglo o string
 */

var arreglo = [1,2,3,4,5,]

for (let key of arreglo){
    console.log(key);
}

var nombre = 'Daniela';
for (let key of nombre){
    console.log(key);
}

/**
 * Ejercicios Ciclos
 */

//1.Imprima las tablas de multiplicar del 2 al 12 utilizando la declaración for.
//Pista: anidamiento.

var tabla = 0;
for (let tabla = 2; tabla <= 12 ; tabla++) {
    for (let index = 1; index < 11; index++) {
        console.log(tabla + 'x' + index + '=' + (tabla * index));
    };   
}

//2.Realice el equivalente con la declaración while y do-while

var tabla = 0;
while (condition) {
    
}


var tabla = 0;
do {
    
} while (condition);