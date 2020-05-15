import Constants from "~/helpers/enums/Constants";

const INITIAL_STATE = {
  users: [],
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Constants.GET_USERS:
      return { ...state, users: action.payload };

    default:
      return state;
  }
}
