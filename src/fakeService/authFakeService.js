import usuarios from '~/data/usuario.json'
import jsonwebtoken from 'jsonwebtoken'
import { JWT_SECRET } from '~/helpers/enums/Constants'
// import writeJsonFile from 'write-json-file'

// const local = `${__dirname}/data/usuario.json`

export const login = (credentials) => {

  // TODO Delete Mock for wrong password
  return new Promise((resolve, reject) => {
    
    //TODO tudo isso será feito corretamente no backend
    try {
      setTimeout(() => resolve(fakeLogin(credentials)), 2000);
    } catch (error) {
      setTimeout(() => reject({ status: 402 }), 2000);
    }

  });
};

export const fakeLogin = credentials => {
  const { username, password } = credentials;

  const usuario = usuarios.find(usuario => usuario.login === username.trim() && usuario.senha === password.trim())

  if (usuario.length === 0) throw new Error({ status: 402, response: 'Não autorizado'})

  //TODO colocar o email do cara
  const token = jsonwebtoken.sign({id: usuario.id, login: usuario.login}, JWT_SECRET, { expiresIn: '30m' })

  return { token }
}

export default { login };
