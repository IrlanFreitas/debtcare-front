import axios from 'axios';
import { addInterceptors } from './interceptors';

let instance = null;
const DEFAULT_BASE_URL = '/api';

const getInstance = () => {
  if (!instance) {
    instance = axios.create({
      baseURL: process.env.REACT_APP_URL_API|| DEFAULT_BASE_URL,
    });
  }

  instance = addInterceptors(instance);

  return instance;
};

export default getInstance();
