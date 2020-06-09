import usuarios from "~/data/usuario.json";
// import writeJsonFile from 'write-json-file'

// const local = `${__dirname}/data/usuario.json`
// const USUARIOS = "usuarios";

const obterUsuarios = () => {
  return new Promise((resolve, _) => {
    resolve(usuarios);
  });
};

export default {
  obterUsuarios,
};
