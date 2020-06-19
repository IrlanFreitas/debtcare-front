import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import _ from 'lodash';
import PrivateRoute from '~/components/app/routers/PrivateRoute';
import routes from '~/config/routes';
import Utils from '~/helpers/Utils';

export const Authenticated = props => {
  const authenticatedRoutes = _.filter(
    routes,
    r => r.onlyAuthorized || r.onlyAuthorized === 'both'
  );
  return (
    <Switch>
      {authenticatedRoutes.map((route, index) => (
        <PrivateRoute
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.view}
          profiles={route.profilesAuthorized}
          pageInfo={route.pageInfo}
        />
      ))}
      <Route path="/login" exact component={() => <Redirect to="/dividas" />} />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export const Anonymous = props => {
  const anonymousRoutes = _.filter(
    routes,
    r => Utils.not(r.onlyAuthorized) || r.onlyAuthorized === 'both'
  );
  return (
    <Switch>
      {anonymousRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.view}
        />
      ))}
      <Redirect to="/login" />
    </Switch>
  );
};

export default { Authenticated, Anonymous };
