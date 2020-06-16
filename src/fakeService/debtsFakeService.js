import dividas from "~/data/divida.json";

const obterDividas = () => {
  return new Promise((resolve, _) => {
    resolve(dividas);
  });
};

export default {
  obterDividas,
};
