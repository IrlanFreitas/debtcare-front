import React from 'react';


export const routes = [
  {
    path: '/',
    exact: true,
    title: () => 'Home',
    view: () => <div >Olá</div>,
    onlyAuthorized: false,
  },
];
export default routes;