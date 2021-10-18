import produce from "immer";
import { createReducer } from "typesafe-actions";
import { SEARCH_MAP } from "./actions";
import { SearchState } from "./types";

const initalState: SearchState = {
  searchMapList: [],
  searchValue: "대구 소프트웨어 고등학교",
};

export default createReducer<SearchState>(initalState, {
  [SEARCH_MAP]: (state, action) =>
    produce(state, draft => {
      draft.searchMapList = action.payload.data;
      draft.searchValue = action.payload.searchValue;
    }),
});
