import Constants from '~/helpers/enums/Constants';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

function authReducer(state = initialState, action = null) {
  switch (action.type) {
    case Constants.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case Constants.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
}

export default authReducer;
