import {
  SET_MARKER,
  CREATE_ALBUM_FAILURE,
  CREATE_ALBUM_REQUEST,
  CREATE_ALBUM_SUCCESS,
} from "./actions";
import produce from "immer";
import { CreateState } from "./types";
import { createReducer } from "typesafe-actions";

const initalState: CreateState = {
  LatLng: { lat: 0, lng: 0 },

  createAlbumLoading: false,
  createAlbumError: null,
  createAlbumDone: false,
};

export default createReducer<CreateState>(initalState, {
  [SET_MARKER]: (state, action) =>
    produce(state, draft => {
      draft.LatLng = action.payload;
    }),
  [CREATE_ALBUM_REQUEST]: (state, action) =>
    produce(state, draft => {
      draft.createAlbumLoading = true;
      draft.createAlbumDone = false;
      draft.createAlbumError = null;
    }),
  [CREATE_ALBUM_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.createAlbumLoading = false;
      draft.createAlbumDone = true;
      draft.createAlbumError = null;
    }),
  [CREATE_ALBUM_FAILURE]: (state, action) =>
    produce(state, draft => {
      draft.createAlbumLoading = false;
      draft.createAlbumDone = false;
      draft.createAlbumError = action.payload;
    }),
});
