import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
import _ from "lodash";
import routes from "~/config/routes";
import utils from "~/helpers/utils";

export const Anonymous = props => {
  const anonymousRoutes = _.filter(
    routes,
    r => utils.not(r.onlyAuthorized) || r.onlyAuthorized === "both"
  );
  return (
    <Router>
      <Switch >
        {anonymousRoutes.map((route, index) => (
          <Route key={`switch-route-${index}`} path={route.path} exact={route.exact} component={route.view} />
        ))}
      </Switch>
      <Redirect to="/" />
    </Router>
  );
};

export default { Anonymous };
