import produce from "immer";
import { createReducer } from "typesafe-actions";
import { SEARCH_MAP } from "./actions";
import { searchState } from "./types";

const initalState: searchState = {
  searchMapList: [],
};

export default createReducer<searchState>(initalState, {
  [SEARCH_MAP]: (state, action) =>
    produce(state, draft => {
      draft.searchMapList = action.payload;
    }),
});
