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
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  EDIT_COMMENT_REQUEST,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_FAILURE,
} from "./actions";
import { AlbumActions, AlbumState } from "./types";

const initalState: AlbumState = {
  loadAlbumsDone: false,
  loadAlbumsError: null,
  loadAlbumsLoading: false,

  loadAlbumDone: false,
  loadAlbumError: null,
  loadAlbumLoading: false,

  loadCommentsDone: false,
  loadCommentsError: null,
  loadCommentsLoading: false,

  createCommentDone: false,
  createCommentError: null,
  createCommentLoading: false,

  deleteCommentDone: false,
  deleteCommentError: null,
  deleteCommentLoading: false,

  editCommentDone: false,
  editCommentError: null,
  editCommentLoading: false,

  albums: [],

  comments: null,
  album: null,

  albumOpen: false,
};

export default createReducer<AlbumState, AlbumActions>(initalState, {
  [GET_ALBUM_REQUEST]: (state, action) =>
    produce(state, (draft) => {
      draft.album = null;
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
      draft.album = null;
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
  [GET_COMMENTS_REQUEST]: (state, action) =>
    produce(state, (draft) => {
      draft.loadCommentsLoading = true;
      draft.loadCommentsDone = false;
      draft.loadCommentsError = null;
      draft.comments = null;
    }),
  [GET_COMMENTS_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.loadCommentsLoading = false;
      draft.loadCommentsDone = true;
      draft.comments = action.payload.data.data;
    }),
  [GET_COMMENTS_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.loadCommentsLoading = true;
      draft.loadCommentsDone = false;
      draft.loadCommentsError = null;
      draft.comments = null;
    }),
  [CREATE_COMMENT_REQUEST]: (state, action) =>
    produce(state, (draft) => {
      draft.createCommentLoading = true;
      draft.createCommentDone = false;
      draft.createCommentError = null;
    }),
  [CREATE_COMMENT_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.createCommentLoading = false;
      draft.createCommentDone = true;
    }),
  [CREATE_COMMENT_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.createCommentLoading = true;
      draft.createCommentDone = false;
      draft.createCommentError = null;
    }),
  [DELETE_COMMENT_REQUEST]: (state, action) =>
    produce(state, (draft) => {
      draft.deleteCommentLoading = true;
      draft.deleteCommentDone = false;
      draft.deleteCommentError = null;
    }),
  [DELETE_COMMENT_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.deleteCommentLoading = false;
      draft.deleteCommentDone = true;
    }),
  [DELETE_COMMENT_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.deleteCommentLoading = true;
      draft.deleteCommentDone = false;
      draft.deleteCommentError = null;
    }),
  [EDIT_COMMENT_REQUEST]: (state, action) =>
    produce(state, (draft) => {
      draft.editCommentLoading = true;
      draft.editCommentDone = false;
      draft.editCommentError = null;
    }),
  [EDIT_COMMENT_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.editCommentLoading = false;
      draft.editCommentDone = true;
    }),
  [EDIT_COMMENT_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.editCommentLoading = true;
      draft.editCommentDone = false;
      draft.editCommentError = null;
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
