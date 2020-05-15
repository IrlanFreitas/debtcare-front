import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom';
import authAction from '~/actions/authAction';
import appAction from '~/actions/appAction';

const PrivateRoute = ({ component: Component, ...props }) => {

  const { isAuthenticated } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authAction.verifyCredentialsAuthentication(isAuthenticated))
  }, [dispatch, isAuthenticated])
  
  dispatch(appAction.changePageName(props.pageInfo))

  return (
    <Route
      {...props}
      render={propsRender =>
        /*Utils.hasProfileAuthorized(rest)*/
        true ? (
          <Component {...propsRender} />
        ) : (
            <Redirect to={'/not-authorized'} />
          )
      }
    />
  )
}

export default withRouter(PrivateRoute);
