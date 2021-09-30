import { combineReducers } from "redux";
import { createSelectorHook } from "react-redux";
import { CounterState } from "./counterReducer/types";
import { AuthState } from "./authReducer/types";
import { persistReducer } from "redux-persist";

import albumReducer from "./albumReducer/reducer";
import authReducer from "./authReducer/reducer";
import counterReducer from "./counterReducer/reducer";
import { AlbumState } from "./albumReducer/types";

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
