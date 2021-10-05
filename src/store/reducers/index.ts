import { combineReducers } from "redux";
import { createSelectorHook } from "react-redux";

import { CounterState } from "./counterReducer/types";
import { AuthState } from "./authReducer/types";
import { AlbumState } from "./albumReducer/types";

import albumReducer from "./albumReducer/reducer";
import authReducer from "./authReducer/reducer";
import counterReducer from "./counterReducer/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  album: albumReducer,
});

export interface RootState {
  counter: CounterState;
  auth: AuthState;
  album: AlbumState;
}

export const useTypedSelector = createSelectorHook<RootState>();

export default rootReducer;
