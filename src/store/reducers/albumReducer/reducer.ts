import produce from "immer";
import { createReducer } from "typesafe-actions";
import { OPEN_ALBUM, CLOSE_ALBUM } from "./actions";
import { AlbumActions, AlbumState } from "./types";

const initalState: AlbumState = {
  loadAlbumsDone: false,
  loadAlbumsError: null,
  loadAlbumsLoading: false,

  loadAlbumDone: false,
  loadAlbumError: null,
  loadAlbumLoading: false,

  albumOpen: false,
};

export default createReducer<AlbumState, AlbumActions>(initalState, {
  [OPEN_ALBUM]: (state, action) =>
    produce(state, (draft) => {
      draft.albumOpen = true;
    }),
  [CLOSE_ALBUM]: (state, action) =>
    produce(state, (draft) => {
      draft.albumOpen = false;
    }),
});
