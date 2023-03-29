/**
 * Manipulacion de arreglos (array)
 * Recordar que los array tienen propiedades y funciones
 * Un propiedad: "length" = devuelve la cantidad de elementos que tiene el array
 */

//Foreach: Necesitamos declarar un array

var letras = ["a", "b", "c", "d", "e"];
console.log(letras.length);

for (let index = 0; index < letras.length; index++) {
  const element = letras[index];
  console.log(element);
}

// Para acceder a las funciones de los array, colocamos . seguido del nombre del array
//Y para que las funciones, puedan ejecutarse de agrega (), que recibiran los parametros
//Los parametros pueden ser, también otras funciones, ej. foreach con parametro funcion flecha

var letras = ["a", "b", "c", "d", "e"];
letras.forEach((element) => {
  console.log(element);
});

//compacto:
letras.forEach((element) => console.log(element));

/**
 * Funciones:
 * push
 * shift
 * pop
 */

//Mutabilidad: concepto amplio, basicamente modifica el arreglo, y afecta al espacio de memoria

//push: agraga un nuevo elemento
var letras = ["a", "b", "c", "d", "e"];
letras.push("f");
console.log(letras);

//shift: va obtener el primer elemento, y modifica el array, elimina el element,
//pero tambien puede return
var letras = ["a", "b", "c", "d", "e"];
letras.shift();
console.log(letras);

//return 1er elemento
var letras = ["a", "b", "c", "d", "e"];
var primerElemento = letras.shift();
console.log(primerElemento);
console.log(letras);

//pop: funcion que no necesita un parametro, se ejecuta, y va obtener el último elem. del array
var letras = ["a", "b", "c", "d", "e"];
letras.pop();
console.log(letras);

//para ver el ultimo elemento
var letras = ["a", "b", "c", "d", "e"];
var ultimoElemento = letras.pop();
console.log(letras);
console.log(ultimoElemento);

/** map = Es inmutable, no modifica el origen, pero retorna uno nuevo (elemento modificado).
 * Tambien recibe una funcion como parametro
 * tienen implicito el retunr, se puede no utilizar, y ser más compacto
 */

var estudiantes = ["Ricardo", "Nicolas", "Carmelo", "Alicia", "Daniela"];
var asistencia = estudiantes.map((nombre) => {
  return {
    nombre: nombre,
    asistencia: false,
  };
});
console.log(estudiantes);
console.log(asistencia);
console.log(estudiantes);

//Compacto:

var estudiantes = ["Ricardo", "Nicolas", "Carmelo", "Alicia", "Daniela"];
var asistencia = estudiantes.map((nombre) => `${nombre}.`);
console.log(asistencia);

//MAP PARTE II

var productos = [
  { nombre: "Camisetas", precio: 15 },
  { nombre: "Zapatillas", precio: 20 },
  { nombre: "Pantalon", precio: 35 },
];
var productoImpuesto = productos.map((producto) => {
  producto.impuesto = 0.12;
  return producto;
});
console.log(productos);
console.log(productoImpuesto);

//En este ejercicio, si hay una modificacion:
//Ya que retorna la referencia de memoria del elemento, modificando info.
/**
 * Otra forma sencilla de modificar o generar un nuevo array:
 * Spread Operator:
 */

var productos = [
  { nombre: "Camisetas", precio: 15 },
  { nombre: "Zapatillas", precio: 20 },
  { nombre: "Pantalon", precio: 35 },
];
var productoImpuesto = productos.map((producto) => {
  return {
    ...producto,
    impuesto: 0.12,
  };
});
console.log(productos);
console.log(productoImpuesto);

// Ej. nos piden los precios de todos los productos

var productos = [
  { nombre: "Camisetas", precio: 15 },
  { nombre: "Zapatillas", precio: 20 },
  { nombre: "Pantalon", precio: 35 },
];
var precios = productos.map((producto) => producto.precio);
console.log(productos);
console.log(precios);

/**
 * Filter: metodo inmutable, no modif. el array de origen
 * Ayuda a filtrar los elementos dentro de un array, en base a una condicion.
 * y que devuelve un valor logico
 * Realiza una iteracion dentro del arreglo
 */

var estudiantes = [
  { nombre: "Daniela", edad: 34, matriculado: true },
  { nombre: "Matias", edad: 33, matriculado: false },
  { nombre: "Mariano", edad: 36, matriculado: false },
  { nombre: "Alicia", edad: 22, matriculado: true },
];
var filtrado = estudiantes.filter((estudiante) => estudiante.edad >= 25);
console.log(filtrado);
console.log(estudiantes);

//filter con valor lógico
var estudiantes = [
  { nombre: "Daniela", edad: 34, matriculado: true },
  { nombre: "Matias", edad: 33, matriculado: false },
  { nombre: "Mariano", edad: 36, matriculado: false },
  { nombre: "Alicia", edad: 22, matriculado: true },
];
var filtrado = estudiantes.filter(
  (estudiante) => estudiante.edad >= 25 && estudiante.matriculado
);
console.log(filtrado);
console.log(estudiantes);

/**
 * Reduce: ayuda a reducir todo el array a un solo valor
 * valor: todo tipo de valores
 * inmutable, devuelve un nuevo valor
 * La funcion recibe dos parametros: acumulador y calificacion
 * 1-Funcion = acumulador + calificacion
 * acumulador: junta los elementos
 * elemento iterado.
 * 2- Estado  inicial del acumulador = 0
 */

var calificaciones = [3, 5, 10, 2, 8, 8];
var suma = calificaciones.reduce(
  (acumulador, calificacion) => acumulador + calificacion,
  0
);
console.log(calificaciones);
console.log(suma);
console.log(suma / calificaciones.length);

var edades = [21, 21, 23, 43, 21, 43, 18, 23, 23, 23];
var resultado = edades.reduce((acumulador, edad) => {
  if (!acumulador[edad]) {
    acumulador[edad] = 1;
  } else {
    acumulador[edad] += 1;
  }
  return acumulador;
}, {});
console.log(edades);
console.log(resultado);

var ventas = [
  { nombreProducto: "Camiseta", precio: 15, totalVendido: 10 },
  { nombreProducto: "Zapatilla", precio: 137, totalVendido: 5 },
  { nombreProducto: "Pantalon", precio: 68, totalVendido: 45 },
];
var resultado = ventas.reduce((acumulador, producto) => {
  let totalVentas = producto.precio * producto.totalVendido;
  acumulador[producto.nombreProducto] = totalVentas;
  return acumulador;
}, {});
console.log(ventas);
console.log(resultado);

//Algo mas lindo para el usuario
var ventas = [
  { nombreProducto: "Camiseta", precio: 15, totalVendido: 10 },
  { nombreProducto: "Zapatilla", precio: 137, totalVendido: 5 },
  { nombreProducto: "Pantalon", precio: 68, totalVendido: 45 },
];
var resultado = ventas.reduce((acumulador, producto) => {
  let totalVentas = producto.precio * producto.totalVendido;
  acumulador[producto.nombreProducto] = `$ ${totalVentas}`;
  return acumulador;
}, {});
console.log(ventas);
console.log(resultado);

// Piden la cant. matriculados y las que no: Con map
var estudiantes = [
  { nombre: "Daniela", edad: 34, matriculado: true },
  { nombre: "Matias", edad: 33, matriculado: false },
  { nombre: "Mariano", edad: 36, matriculado: false },
  { nombre: "Alicia", edad: 22, matriculado: true },
];

var resultado = estudiantes.map((estudiante) => estudiante.matriculado);
console.log(resultado);

//Encadenar funciones:
var estudiantes = [
  { nombre: "Daniela", edad: 34, matriculado: true },
  { nombre: "Matias", edad: 33, matriculado: false },
  { nombre: "Mariano", edad: 36, matriculado: false },
  { nombre: "Alicia", edad: 22, matriculado: true },
];
var resultado = estudiantes
  .map((estudiante) => estudiante.matriculado)
  .reduce(
    (acumulador, item) => {
      if (item) {
        acumulador.matriculado += 1;
      } else {
        acumulador.noMatriculado += 1;
      }
      return acumulador;
    },
    { matriculado: 0, noMatriculado: 0 }
  );
console.log(estudiantes);
console.log(resultado);

/** Dentro de un array:
 * Some: Si al menos uno de los elem. de un arreglo, cumple una condicion especifica,
 * si cumple return true, es decir un valor booleano
 */

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var resultados = numeros.some((numero) => numero % 2 === 0);
console.log(resultados);

//false
var numeros = [1, 3, 5, 7, 9];
var resultados = numeros.some((numero) => numero % 2 === 0);
console.log(resultados);

/**
 *  Every: SI todos los elementos cumplen con una condicion especifica
 * retorna valor logico true
 */

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var resultados = numeros.every((numero) => numero % 2 === 0);
console.log(resultados);

//true
var numeros = [2, 4, 6, 8, 10];
var resultados = numeros.every((numero) => numero % 2 === 0);
console.log(resultados);

//ej. Queremos ver si las edades de un equipo es mayor de 18 años.

/**
 * Find:Busca un elemento que cumpla con cierta condicion en un array
 * y lo retorna.
 * Retorna el primero que consiga con la busqueda
 * Es inmutable
 * find != filter : porque filter nos retorna todo el array completo,
 * que cumplan con la busqueda,varios resultados que cumplan con al condicion
 * y find, retorna el primero objeto que consiga en la busqueda
 */

var clientes = [
  { id: 1, nombre: "Daniela" },
  { id: 1, nombre: "Pepa" },
  { id: 3, nombre: "Manuela" },
  { id: 4, nombre: "Josefina" },
  { id: 5, nombre: "Paola" },
];
var cliente = clientes.find((cliente) => cliente.id === 6);
console.log(cliente);
console.log(clientes);

/**
 * FindIndex: Busca un elemento que cumpla con cierta condicion en un array
 * y retorna la posicion de ese elemento
 * Retorna un unico valor.
 */

var clientes = [
  { id: 1, nombre: "Daniela" },
  { id: 2, nombre: "Pepa" },
  { id: 3, nombre: "Manuela" },
  { id: 4, nombre: "Josefina" },
  { id: 5, nombre: "Paola" },
];
var posicion = clientes.findIndex((cliente) => cliente.id === 2);
console.log(posicion);
console.log(clientes[posicion]);

/**
 * includes: Nos ayuda a determinar si en un array
 * existe un elemente especifico
 * Nos devuelve valores booleanos segun correspondan
 */

var mascotas = ["perro", "gato", "pajaro", "conejo"];
var resultado = mascotas.includes("gato");
console.log(resultado);

//cuando se trabajan con sting, siendo una cadena de caracteres se puede buscar por letra
console.log("Daniela".includes("ela"));

var buscador = (parametro) => {
    let clientes = [
        { id: 1, nombre: "Daniela" },
        { id: 2, nombre: "Pepa" },
        { id: 3, nombre: "Manuela" },
        { id: 4, nombre: "Josefina" },
        { id: 5, nombre: "Paola" },
    ];
    return clientes.filter((cliente) => cliente.nombre.includes(parametro));
}
console.log(buscador("o"));


/**
 * Join: metodo que nos ayuda a unir todos los elem. de un array
 * y generar un string a partir de esa union
 */

var elementos = ['aire', 'fuego', 'tierra'];
var resultado = elementos.join('--');
console.log(resultado);

//join con objetos
var clientes = [
  { id: 1, nombre: 'Daniela'},
  { id: 2, nombre: "Pepa" },
  { id: 3, nombre: "Manuela" },
  { id: 4, nombre: "Josefina" },
  { id: 5, nombre: "Paola" },
];
//console.log(clientes.join()); //necesita que lo ayudemos

var csvGenerator = (array, separdor = ',')=>{
  let data = array.map((element)=> Object.values(element).join(separdor))
  data.forEach((element)=>console.log(element)) 
}
csvGenerator(clientes);

//Para ver como funciona la Funcion Object.values
console.log(Object.values({ id: 1, nombre: 'Daniela' })); 
//Funcion Object.keys: devuelve las claves del objeto
console.log(Object.keys({ id: 1, nombre: 'Daniela' }));

//ejemplo: Object.keys + join caso tabla excel
var clientes = [
  { id: 1, nombre: 'Daniela'},
  { id: 2, nombre: "Pepa" },
  { id: 3, nombre: "Manuela" },
  { id: 4, nombre: "Josefina" },
  { id: 5, nombre: "Paola" },
];
var csvGenerator = (array, separdor = ',')=>{
  let headers = Object.keys(array[0]).join(separdor)
  let data = array.map((element)=> Object.values(element).join(separdor))
  console.log(headers);
  data.forEach((element)=>console.log(element)) 
}
csvGenerator(clientes);

/**
 * Un archivo CSV (valores separados por comas)
 * carracteristica usa los datos(valores), no las claves
 * con join
 */

/**
 * Sort: 
 * Metodo de ordenameinto en JS
 * con los string, sort sin funcion, lo ordena en base al ASCII CODE
 * ASCII (ASKI)  American Standard Code for Information Interchange:
 * es un código de caracteres basado en el alfabeto latino.
 * Las computadoras únicamente entienden números. 
 * El código ASCII es un método de traducción de letras y símbolos a números como ‘a=97’ o ‘/=47’ .
 */

var array1 = [1,2,3,4,5,6,7,8,9,0];
console.log(array1.sort());

var meses = ['Ene', 'Feb', 'Abr', 'Mar'];
console.log(meses.sort());

var array = [1, 10000, 21, 30, 4];
console.log(array.sort());
var ordenado = array.sort((a, b) => a - b);
console.log(ordenado);

/**
 * splice: 
 * Metodo que ayuda a remover o modificar un elem. de un array 
 * o al array en si
 * mutable
 */
//primero parametro que recibe es la posicion del elemento:
var nombres = ['daniela', 'nicolas', 'pepe'];
nombres.splice(1)
console.log(nombres);
// El segundo paramento es la cantidad de elementos a modificar o remover
var nombres = ['daniela', 'nicolas', 'pepe'];
nombres.splice(1,1)
console.log(nombres);
// El tercer paramento el dato a remplazar en esa posicion
var nombres = ['daniela', 'nicolas', 'pepe'];
nombres.splice(1,1,'Alicia')
console.log(nombres);

/**
 * slice: nos retornará una copia mas pequeña del array
 * Recibe dos parametros
 * 1: desde donde inica
 * 2: hasta donde corta la copia del array, la ultima posicion es excluyente
 * inmutable
 * recuerda: programacion empiza en 0 cero. 
 */

var nombres = ['daniela', 'nicolas', 'pepe'];
var resultado  = nombres.slice(0,2)
console.log(resultado);