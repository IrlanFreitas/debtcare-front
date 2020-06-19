import Constants from "~/helpers/enums/Constants";

const INITIAL_STATE = {
  debts: [],
};

export default function debtsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Constants.GET_DEBTS:
      return { ...state, debts: action.payload };

    default:
      return state;
  }
}