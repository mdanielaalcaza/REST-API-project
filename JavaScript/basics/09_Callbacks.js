/**
 * CALLBACK - "cb" = Función que se pasa a otra función como un argumento,
 * que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción
 */

const suma = (a, b) => {
  return a + b;
};
var resultado = suma(1, 2);
console.log(resultado);

//ej. funcion cb

const suma2 = (a, b, cb) => cb(a + b);
suma(1, 2, (resultado) => console.log(resultado));

const imprimir = (data) => console.log(data);
suma2(1, 2, imprimir);

//*** */

const getData = (cb) => {
  setTimeout(() => {
    cb({
      nombre: "daniela",
      apellido: "Alcaza",
    });
  }, 3000);
};
const imprimirData = (data) => console.log(data);
getData(imprimirData);

/**
 * EJ. CON ERROR
 */

const getData1 = (cb, cbError) => {
  if(false) {
    setTimeout(() => {
      cb({
        nombre: "daniela",
        apellido: "Alcaza",
      });
    }, 3000);
  } else {
    cbError(new Error("No se pueden obtener los datos"));
  }
};
const imprimirData1 = (data) => console.log(data);
const errorHandler = (error) => console.log(error);
getData1(imprimirData1, errorHandler);
