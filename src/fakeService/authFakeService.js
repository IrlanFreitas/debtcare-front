import usuarios from "~/data/usuario.json";
import jsonwebtoken from "jsonwebtoken";
import { JWT_SECRET } from "~/helpers/enums/Constants";
// import writeJsonFile from 'write-json-file'

// const local = `${__dirname}/data/usuario.json`

export const login = (credentials) => {
  // TODO Delete Mock for wrong password
  return new Promise((resolve, reject) => {
    //TODO tudo isso será feito corretamente no backend
    setTimeout(() => {
      try {
        resolve(fakeLogin(credentials));
      } catch (error) {
        reject(error);
      }
    }, 2000);
  });
};

export const fakeLogin = (credentials) => {
  const { username, password } = credentials;
  console.log(usuarios);

  const usuario = usuarios.filter(
    (usuario) =>
      usuario.login === username.trim() && usuario.senha === password.trim()
  );
  console.log(usuario);

  if (usuario.length === 0) throw new Error("Não autorizado");

  //TODO colocar o email do cara
  const token = jsonwebtoken.sign(
    { id: usuario[0].id, login: usuario[0].login },
    JWT_SECRET,
    { expiresIn: "30m" }
  );

  return { token };
};

export default { login };
