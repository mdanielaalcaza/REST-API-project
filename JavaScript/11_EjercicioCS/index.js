const axios = require("axios");
const fs = require("fs").promises;
const path = require("path");

const main = async () => {
  let response = await axios.get("https://rickandmortyapi.com/api/character");
  let {
    data: { results },
  } = response;
  let character = results.map((character) => {
    return {
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
    };
  })
  .map((personajes) => Object.values(personajes).join(","))
  .join("\n");
  
  let encabezados = results
  .map((encabezado) => {
    return {
      id: encabezado.id,
      name: encabezado.name,
      status: encabezado.status,
      species: encabezado.species,
    };
  })
  let headers = Object.keys(encabezados[0]).join(',');
  let tarea = (headers + '\n' + character);
  await fs.writeFile(path.join(__dirname, 'data.csv'), tarea);
  //console.log(path.join(__dirname, 'data.csv'));
  //console.log(character);

};
main();
