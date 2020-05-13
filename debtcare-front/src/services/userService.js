import http from "~/config/httpRequest/http";

const USUARIOS = "usuarios";

const obterUsuarios = () => {
  return new Promise((resolve, reject) => {
    http
      .get(`/${USUARIOS}`)
      .then(result => resolve(result))
      .catch(error => reject(error));
  });
};

export default {
  obterUsuarios,
};
