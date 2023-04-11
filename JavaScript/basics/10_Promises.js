/**
 * Promises: contiene dos callbacks
 */

//forma Expresiva= función con const - Forma Declarativa = con Function
// ej. getData es una promesa

const getData2 = new Promise((resolve, reject) => {});

// ej. getData es una funcion que retorna una promesa

const getData1 = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      resolve({
        nombre: "daniela",
        apellido: "alcaza",
      });
    } else {
      reject("No pudimos obtener los datos");
    }
  });

/**
 * then - cath : son metodos de la promesa
 * async - await : son palabras reservadas para ayudar a resolver promesas
 */
getData1(false)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

/**
 * con asincronismo
 */

const getDat = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "daniela",
          apellido: "alcaza",
        });
      }, 3000);
    } else {
      reject("No pudimos obtener los datos");
    }
  });
console.log("inicio");
getDat(false)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("fin");

/**hardcode - código quemado - ej. quemar un error: 
consiste en dejar variables definidas por defecto en el código
*/

/**const suma = new Promise((res, rej) => {
    if (true) {
        res() //necesitamos pasar valor, pero al ser suma una promesa no se puede. 
    }
})
*/

/**
 * Se pueden encadenar promesas
 * sucede en el then, es decir cuando la promesa se resuelve: forma correcta
 * por eso debemos retornar la otra promesa con el mismo valor booleano
 * el catch: toma el error = forma incorrecta de resolver una promesa.
 */

const getDatt = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "daniela",
          apellido: "alcaza",
        });
      }, 3000);
    } else {
      reject("No pudimos obtener los datos");
    }
  });

const getDate = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "Alicia",
          apellido: "alcaza",
        });
      }, 3000);
    } else {
      reject("No pudimos obtener los datos de date");
    }
  });

console.log("inicio");
getDate(false)
  .then((data) => {
    console.log(data);
    return getDatt(false);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("fin");

/**
 * Otra de las formas de resolver PROMESAS: unicamnete con palabras reservadas
 * ASYNC:
 * AWAIT: debe existe async para que funcione
 */

const getDatta = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "daniela",
          apellido: "alcaza",
        });
      }, 3000);
    } else {
      reject("No pudimos obtener los datos");
    }
  });


  const getDa = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "Alicia",
          apellido: "alcaza",
        });
      }, 3000);
    } else {
      reject("No pudimos obtener los datos de date");
    }
  });

const main = async () => {
   let resultado = await getDatta(false);
   let resultado2 = await getDa(false);
   console.log(resultado);
   console.log(resultado2);
}

main ()

//Estructura try catch (para error)

const getDat1 = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "daniela",
          apellido: "alcaza",
        });
      }, 3000);
    } else {
      reject("No pudimos obtener los datos");
    }
  });

  const getD = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "Alicia",
          apellido: "alcaza",
        });
      }, 3000);
    } else {
      reject("No pudimos obtener los datos de date");
    }
  });

const main1 = async() =>{
  try {
    let resultado = await getDat1(false);
   let resultado2 = await getD(true);
   console.log(resultado);
   console.log(resultado2);
  } catch (error) {
    console.log(error);
  }
}

main1();
