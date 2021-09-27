import { combineReducers } from "redux";
import counterReducer from "./counterReducer/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
