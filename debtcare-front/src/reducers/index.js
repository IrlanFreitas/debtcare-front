import { combineReducers } from 'redux';
// Application Reducers
import app from '~/reducers/appReducer';
import auth from '~/reducers/authReducer'

export default combineReducers({
  app,
  auth
});