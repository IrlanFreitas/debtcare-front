import React from "react";

import UserList from "~/views/users/list/UserList";
import DebtsList from "~/views/debts/DebtsList";
import Login from "~/views/login/Login";
import { ROTAS } from "~/helpers/enums/Constants";

export const routes = [
  // {
  //   path: ROTAS.HOME,
  //   exact: true,
  //   title: () => "Dívida Zero",
  //   view: () => <div>Dívida Zero - Landing Page</div>,
  //   onlyAuthorized: false,
  // },
  {
    path: ROTAS.DASHBOARD,
    exact: true,
    title: () => "Dashboard",
    view: () => <div>Dashboard</div>,
    onlyAuthorized: true,
  },
  {
    path: ROTAS.DIVIDAS,
    exact: true,
    title: () => "Dívidas",
    view: () => <DebtsList />,
    onlyAuthorized: true,
  },
  {
    path: ROTAS.USUARIOS,
    exact: true,
    title: () => "Usuários",
    view: () => <UserList />,
    onlyAuthorized: true,
  },
  {
    path: ROTAS.LOGIN,
    exact: true,
    title: () => "Login",
    view: () => <Login />,
    onlyAuthorized: false,
  },
  {
    path: ROTAS.NAO_AUTORIZADO,
    exact: true,
    title: () => "Acesso negado",
    view: () => <>Não autorizado</>, //<Unauthorized />,
    onlyAuthorized: "both",
  },
  {
    path: ROTAS.NAO_ENCONTRADO,
    exact: true,
    title: () => "Página não encontrada",
    view: () => <>Não encontrado</>, //<NotFound />,
    onlyAuthorized: "both",
  },
];
export default routes;
