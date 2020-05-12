import React from "react";

import UserList from "~/views/users/list/UserList";
import Login from "~/views/login/Login";

export const routes = [
  {
    path: "/home",
    exact: true,
    title: () => "Home",
    view: () => <div>Home</div>,
    onlyAuthorized: true,
  },
  {
    path: "/",
    exact: true,
    title: () => "Dívida Zero",
    view: () => <div>Dívida Zero - Landind Page</div>,
    onlyAuthorized: true,
  },
  {
    path: "/usuarios",
    exact: true,
    title: () => "Usuários",
    view: () => <UserList />,
    onlyAuthorized: true,
  },
  {
    path: '/login',
    exact: true,
    title: () => 'Login',
    view: () => <Login />,
    onlyAuthorized: false,
  },

  {
    path: "/not-authorized",
    exact: true,
    title: () => "Acesso negado",
    view: () => <>Não autorizado</>, //<Unauthorized />,
    onlyAuthorized: "both",
  },
  {
    path: "/not-found",
    exact: true,
    title: () => "Página não encontrada",
    view: () => <>Não encontrado</>,  //<NotFound />,
    onlyAuthorized: "both",
  },
];
export default routes;
