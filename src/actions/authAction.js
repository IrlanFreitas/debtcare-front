import authService from '~/services/authService';
import Constants from '~/helpers/enums/Constants';
import Utils from '~/helpers/Utils';

const sendCredentials = (
  values,
  callback = () => {},
  LOADING_IDENTIFICATOR = ''
) => dispatch => {
  dispatch(Utils.startLoading(LOADING_IDENTIFICATOR));

  authService
    .login(values)
    .then(response => {
      if (response) {
        Utils.setToken(JSON.stringify(response.token));
        callback();
        dispatch({ type: Constants.LOGIN, payload: response });
      }
    })
    .catch(error => {
      callback(error);
    })
    .finally(() => {
      dispatch(Utils.endLoading(LOADING_IDENTIFICATOR));
    });
};

const verifyCredentialsAuthentication = isAuthenticated => dispatch => {
  if (Utils.not(isAuthenticated) && Utils.hasTokenValid()) {
    dispatch({ type: Constants.LOGIN, payload: {} });
  } else if (Utils.not(Utils.hasTokenValid())) {
    dispatch({ type: Constants.LOGOUT });
  }
};

const logout = () => dispatch => {
  dispatch({ type: Constants.LOGOUT });
  Utils.removeToken();
};

export default {
  sendCredentials,
  verifyCredentialsAuthentication,
  logout,
};
