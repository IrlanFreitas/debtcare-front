import http from "~/config/httpRequest/http";
import usuarios from '~/data/usuario.json'

const USUARIOS = "usuarios";

const obterUsuarios = () => {
  return new Promise((resolve, reject) => {
    http
      .get(`/${USUARIOS}`)
      .then(result => resolve(result.data))
      .catch(error => reject(error));
  });
};

export default {
  obterUsuarios,
};
