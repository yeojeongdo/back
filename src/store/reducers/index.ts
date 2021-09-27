import { combineReducers } from "redux";
import { createSelectorHook } from "react-redux";
import counterReducer from "./counterReducer/reducer";
import { CounterState } from "./counterReducer/types";
import authReducer from "./authReducer/reducer";
import { AuthState } from "./authReducer/types";

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

export interface RootState {
  counter: CounterState;
  auth: AuthState;
}

export const useTypedSelector = createSelectorHook<RootState>();

export default rootReducer;
