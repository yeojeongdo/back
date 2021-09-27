import { combineReducers } from "redux";
import { createSelectorHook } from "react-redux";
import counterReducer from "./counterReducer/reducer";
import { CounterState } from "./counterReducer/types";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export interface RootState {
  counter: CounterState;
}

export const useTypedSelector = createSelectorHook<RootState>();

export default rootReducer;
