import { SET_MARKER } from "./actions";
import produce from "immer";
import { CreateState } from "./types";
import { createReducer } from "typesafe-actions";

const initalState: CreateState = {
  LatLng: { lat: 0, lng: 0 },
};

export default createReducer<CreateState>(initalState, {
  [SET_MARKER]: (state, action) =>
    produce(state, draft => {
      draft.LatLng = action.payload;
    }),
});
