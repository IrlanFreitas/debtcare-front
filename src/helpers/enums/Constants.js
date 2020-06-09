// Login PAGE -
export const INPUT_USERNAME = "INPUT_USERNAME";
export const INPUT_PASSWORD = "INPUT_PASSWORD";
export const USERNAME = "USERNAME";
export const PASSWORD = "PASSWORD";
export const REMEMBER_ME = "REMEMBER_ME";
export const LOGIN = "LOGIN";

export const JWT_SECRET = "IRLANFREITAS";

export const ROTAS = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  DIVIDAS: "/dividas",
  USUARIOS: "/usuarios",
  LOGIN: "/login",
  NAO_AUTORIZADO: "/not-authorized",
  NAO_ENCONTRADO: "/not-found",
};

// Header PAGE
export const REPORTS = "REPORTS";
export const INDICATORS = "INDICATORS";

// userActions
export const CANT_DELETE_USER = "CANT_DELETE_USER";
export const FETCH_LOGIN = "FETCH_LOGIN";
export const FETCH_DASHBOARD_INDICATORS = "FETCH_DASHBOARD";
export const FALSE = "FALSE";
export const TRUE = "TRUE";

export const UPDATE_LOADING = "UPDATE_LOADING";
export const UPDATE_LOGIN = "UPDATE_LOGIN";

export const LOGOUT = "LOGOUT";
export const TOKEN = "TOKEN";
export const USER = "USER";

// Messages types
export const DEFAULT = "default";
export const SUCCESS = "success";
export const ERROR = "error";
export const INFO = "info";
export const WARNING = "warning";

// Messages descriptions
export const SUCCESSFUL_OPERATION = "SUCCESSFUL_OPERATION";
export const SUCCESSFULLY_LOGGED = "SUCCESSFULLY_LOGGED";
export const UNAVAILABLE_SERVICE =
  "Serviço temporariamente indisponível. Tente novamente mais tarde.";
export const NEED_SUPPORT =
  "Não foi possível realizar a operação. Favor, contactar o suporte.";

export const THANKS = "Thanks";

// Choose language
export const LANGUAGE = "LANGUAGE";
// Auth
export const REGISTER_SUCCESS = "Registered with success!";

// USER
export const GET_USERS = "GET_USERS";
export const SAVED = "SALVED";
export const DELETE = "DELETE";

// Unauthorized page
export const UNAUTHORIZED_PAGE = "Looks like you are not authenticate.";
export const SIGN_IN = "Sign in!";
export const OOPS = "Oops!";

// Network Messages

// Error
export const NOT_FOUND = "The server can not find requested resource.";
export const BAD_REQUEST =
  "The server could not understand the request due to invalid syntax.";
export const INTERNAL_SERVER_ERROR = "Something has gone wrong on the server.";
export const ACCESS_DENIED = "Invalid Username or Password.";

// Warning
export const UNAUTHORIZED =
  "The request has not been applied because it lacks valid authentication credentials for the target resource.";
export const FORBIDDEN = "You don’t have permission to access this resource.";

export const DELETED_WITH_SUCCESS = "DELETED_WITH_SUCCESS.1";

//Page names
export const CHANGE_PAGE_NAME = "CHANGE_PAGE_NAME";
export const PAGE_USER = "PAGE_USER.1";
export const PAGE_USER_REGISTER = "PAGE_USER_REGISTER.1";

export default {
  DELETED_WITH_SUCCESS,
  FETCH_LOGIN,
  FETCH_DASHBOARD_INDICATORS,
  UPDATE_LOADING,
  INDICATORS,
  UPDATE_LOGIN,
  LOGOUT,
  TOKEN,
  USER,
  SUCCESS,
  ERROR,
  REPORTS,
  DEFAULT,
  INFO,
  WARNING,
  SUCCESSFUL_OPERATION,
  SUCCESSFULLY_LOGGED,
  UNAVAILABLE_SERVICE,
  NEED_SUPPORT,
  NOT_FOUND,
  BAD_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
  INTERNAL_SERVER_ERROR,
  UNAUTHORIZED_PAGE,
  SIGN_IN,
  OOPS,
  CANT_DELETE_USER,
  ACCESS_DENIED,
  REGISTER_SUCCESS,
  GET_USERS,
  FALSE,
  TRUE,
  SAVED,
  DELETE,
  THANKS,
  LANGUAGE,
  LOGIN,
  INPUT_USERNAME,
  USERNAME,
  PASSWORD,
  INPUT_PASSWORD,
  REMEMBER_ME,
  CHANGE_PAGE_NAME,
  PAGE_USER,
  PAGE_USER_REGISTER,
  ROTAS,
  JWT_SECRET,
};
