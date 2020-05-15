import { combineReducers } from 'redux';
// Application Reducers
import app from '~/reducers/appReducer';
import auth from '~/reducers/authReducer'
import user from '~/reducers/userReducer'

export default combineReducers({
  app,
  auth,
  user
});