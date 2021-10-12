import produce from "immer";
import { createReducer } from "typesafe-actions";
import {
  OPEN_ALBUM,
  CLOSE_ALBUM,
  GET_ALBUMS_FAILURE,
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
} from "./actions";
import { AlbumActions, AlbumState } from "./types";

const initalState: AlbumState = {
  loadAlbumsDone: false,
  loadAlbumsError: null,
  loadAlbumsLoading: false,

  loadAlbumDone: false,
  loadAlbumError: null,
  loadAlbumLoading: false,

  albums: [],

  albumOpen: false,
};

export default createReducer<AlbumState, AlbumActions>(initalState, {
  [GET_ALBUMS_REQUEST]: (state, action) =>
    produce(state, (draft) => {
      draft.loadAlbumsLoading = true;
      draft.loadAlbumsDone = false;
      draft.loadAlbumsError = null;
    }),
  [GET_ALBUMS_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.loadAlbumsLoading = false;
      draft.loadAlbumsDone = true;
      draft.albums = action.payload.data.data;
    }),
  [GET_ALBUMS_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.loadAlbumsLoading = true;
      draft.loadAlbumsDone = false;
      draft.loadAlbumsError = null;
    }),
  [OPEN_ALBUM]: (state, action) =>
    produce(state, (draft) => {
      draft.albumOpen = true;
    }),
  [CLOSE_ALBUM]: (state, action) =>
    produce(state, (draft) => {
      draft.albumOpen = false;
    }),
});
