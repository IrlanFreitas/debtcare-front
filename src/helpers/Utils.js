import _ from "lodash";
import { toast } from "react-toastify";
import Constants from "~/helpers/enums/Constants";
import jsonwebtoken from "jsonwebtoken";

export const not = (obj) => !obj;

export const isEmpty = (obj) => _.isEmpty(obj);

export const isNotEmpty = (obj) => !isEmpty(obj);

export const isEmptyOrNullOrZero = (obj) => {
  return isEmpty(obj) || obj === 0;
};

export const setToken = (token) => {
  localStorage.setItem(Constants.TOKEN, token);
};

export const getToken = () => {
  return localStorage.getItem(Constants.TOKEN);
};

export const hasTokenValid = () => {
  try {
    if (isEmpty(getToken())) return false;

    const decoded = jsonwebtoken.verify(getToken(), Constants.JWT_SECRET);

    //TODO Fake Refresh Token
    setToken(
      jsonwebtoken.sign(
        { id: decoded.id, login: decoded.login },
        Constants.JWT_SECRET,
        { expiresIn: "30m" }
      )
    );

    return true;
  } catch (error) {
    console.log("jwt error:", error);
    return false;
  }
};

export const removeToken = () => {
  return localStorage.removeItem(Constants.TOKEN);
};

export const startLoading = (identifier) => ({
  type: Constants.UPDATE_LOADING,
  loading: { [identifier]: true },
});

export const endLoading = (identifier) => ({
  type: Constants.UPDATE_LOADING,
  loading: { [identifier]: false },
});

export const showToast = (description, type) => {
  if (!description) return;

  toast(description, {
    type,
    position: "top-center",
    autoClose: 3000,
    pauseOnHover: true,
  });
};

export default {
  not,
  isEmpty,
  isNotEmpty,
  endLoading,
  startLoading,
  hasTokenValid,
  setToken,
  removeToken,
  getToken,
  showToast,
  isEmptyOrNullOrZero,
};
