import { AnyAction } from "redux";
import { LOG_IN, LOG_OUT } from "./actions";
import { AuthState } from "./types";

const initialState: AuthState = {
  isLoggedIn: false,
};

function authReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}

export default authReducer;
