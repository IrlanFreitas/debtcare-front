import userService from "~/services/userService";
import Constants from "~/helpers/enums/Constants";
import Utils from "~/helpers/Utils";

const list = (LOADING_IDENTIFICATOR = "") => (dispatch) => {
  dispatch(Utils.startLoading(LOADING_IDENTIFICATOR));

  userService
    .obterUsuarios()
    .then((response) => {
      if (response) {
        dispatch({ type: Constants.GET_USERS, payload: response });
      }
    })
    .catch()
    .finally(() => {
      dispatch(Utils.endLoading(LOADING_IDENTIFICATOR));
    });
};

export default {
  list,
};
