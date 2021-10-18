import produce from "immer";
import { createReducer } from "typesafe-actions";
import { SEARCH_MAP, SET_CENTER_SEARCHING } from "./actions";
import { SearchState } from "./types";

const initalState: SearchState = {
  searchMapList: [],
  searchValue: "대구 소프트웨어 고등학교",
  centerSearching: null,
};

export default createReducer<SearchState>(initalState, {
  [SEARCH_MAP]: (state, action) =>
    produce(state, draft => {
      draft.searchMapList = action.payload.data;
      draft.searchValue = action.payload.searchValue;
    }),
  [SET_CENTER_SEARCHING]: (state, action) =>
    produce(state, draft => {
      draft.centerSearching = action.payload;
    }),
});
