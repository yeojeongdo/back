import produce from "immer";
import { createReducer } from "typesafe-actions";
import {
  OPEN_ALBUM,
  CLOSE_ALBUM,
  GET_ALBUMS_FAILURE,
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
  GET_ALBUM_REQUEST,
  GET_ALBUM_FAILURE,
  GET_ALBUM_SUCCESS,
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

  album: null,

  albumOpen: false,
};

export default createReducer<AlbumState, AlbumActions>(initalState, {
  [GET_ALBUM_REQUEST]: (state, action) =>
    produce(state, (draft) => {
      draft.loadAlbumLoading = true;
      draft.loadAlbumDone = false;
      draft.loadAlbumError = null;
    }),
  [GET_ALBUM_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.loadAlbumLoading = false;
      draft.loadAlbumDone = true;
      draft.album = action.payload.data.data;
    }),
  [GET_ALBUM_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.loadAlbumLoading = true;
      draft.loadAlbumDone = false;
      draft.loadAlbumError = action.payload;
    }),
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
