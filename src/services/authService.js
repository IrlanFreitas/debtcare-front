import usuarios from '~/data/usuario.json'
// import writeJsonFile from 'write-json-file'

const TOKEN_MOCK = {
  token:
    "ewogInNlY3JldCI6ICI2NWFmNGE2NTRmYTU2NGZhNXM2NGY2NWE0ZjY1YTRmNjU0YXNmNjU0YTY1ZjRhNjVmNGE2NTRmNjVhczRmNmE1czRmNjVhNCIgCn0=",
};


// const local = `${__dirname}/data/usuario.json`

export const login = (credentials) => {

  // await writeJsonFile(local, [...usuarios, ...usuarios] );
  
  // TODO Delete Mock for wrong password
  return new Promise((resolve, reject) => {
    const { username, password} = credentials;

    const usuario = usuarios.find(usuario => usuario.login === username && usuario.senha === password)

    if (usuario.length === 0) {
      reject({ status: 402 });
      return;
    }

    setTimeout(() => resolve(TOKEN_MOCK), 2000);
  });
  // END OF MOCK
};

export default { login };
