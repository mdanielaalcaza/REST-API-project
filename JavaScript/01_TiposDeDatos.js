/**Los comentarios no son ejecutables, pero son utiles para los desarrolladores:
 * una sola linea: //texto del comentario
 * multiples lineas: /** texto del comentario */

//snippet: clg + enter  (automaticamente completa console.log(objeto))

/**
 * Tipos de Datos
 */

// Number - Número
console.log(27);
console.log(27.56); //valores de punto flotante - Decimales

// String (cadena de texto entre "") - Texto

/**Tipos de comillas:
 * comilla doble: "Daniela alcaza";
 * comilla simple: 'Daniela alcaza';
 * comilla invertida - temple string: `Hola, soy Daniela Alcaza`(alt gr + ctrl + temple string)*/

console.log("Daniela Alcaza");
console.log("Daniela Alcaza");
console.log(`Hola, soy Daniela Alcaza`);

// Booleans - Lógicos
console.log(true);
console.log(false);

// undefined - Indefinido (cuando una variable no tiene definicion)
console.log(undefined);

// null (aun no hay definicion de algo)
console.log(null);

/**
 * Tipos de Datos Estructurales - por mas tipos de datos
 */

// Objetos - Dentro de llaves: Compuesta por propiedades: Cada propiedad tiene claves : y valores. Los valores pueden ser array, o lista.
console.log({
  nombre: "Daniela",
  edad: 33,
  fechaDeNacimiento: null,
  esAlto: false,
  ciudades: ["cordoba", "buenos aires"],
  direccion: { callePrincipal: "Hector Paniza" },
});

// array - Arreglo - Dentro de corchetes: tipos de Datos de tipo lista:puede ser string, number, booleans, objetos, o array.
console.log([33, true, { nombre: "Daniela" }, [1, 2, 3, 4]]);
console.log(["Argentina", "Mexico", "Italia"]);
