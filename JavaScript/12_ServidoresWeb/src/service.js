//Archivo que manipular todos los datos con el CRUD

const data = require("./MOCK_DATA.json");

module.exports = {
  getUsers: () => data,
  getUser: (id) => {
    let identificador = Number(id);
    let user = data.filter((person)=> person.id === identificador)[0];
    return user;
  },
  createUser: (dataUser)=>{
    let nweUser ={
      id: data.length + 1,
      ...dataUser,
    }
    data.push(nweUser);
    return nweUser

  }
};
